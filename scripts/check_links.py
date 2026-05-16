#!/usr/bin/env python3
"""Validate local Markdown links in docs.

This checker is intentionally conservative for CI. It validates repository-local
Markdown links and leaves external HTTP availability to release review because
public sites can rate-limit or fail transiently.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
LINK_RE = re.compile(r"(?<!!)\[[^\]]+\]\(([^)]+)\)")


def strip_anchor(target: str) -> str:
    return target.split("#", 1)[0]


def is_external(target: str) -> bool:
    parsed = urlparse(target)
    return parsed.scheme in {"http", "https", "mailto"}


def candidate_paths(source: Path, target: str) -> list[Path]:
    target = unquote(strip_anchor(target)).strip()
    if not target or is_external(target):
        return []
    if target.startswith("/"):
        if target.startswith("/cti-analyst-field-manual/"):
            return []
        target_path = ROOT / target.lstrip("/")
    else:
        target_path = source.parent / target
    candidates = [target_path]
    if target_path.suffix == "":
        candidates.extend([target_path.with_suffix(".md"), target_path / "index.md"])
    candidates.extend(number_prefix_candidates(target_path))
    return [p.resolve() for p in candidates]


def number_prefix_candidates(target_path: Path) -> list[Path]:
    """Map Docusaurus route-style docs/foo to numbered folders like docs/01-foo."""
    try:
        rel = target_path.resolve().relative_to(DOCS.resolve())
    except ValueError:
        return []
    parts = list(rel.parts)
    variants: list[Path] = []
    current = DOCS
    for idx, part in enumerate(parts):
        if (current / part).exists():
            current = current / part
            continue
        matches = sorted(p for p in current.iterdir() if p.is_dir() and p.name.endswith(f"-{part}"))
        if not matches:
            return variants
        current = matches[0]
        parts[idx] = current.name
    resolved = DOCS.joinpath(*parts)
    variants.append(resolved)
    if resolved.suffix == "":
        variants.extend([resolved.with_suffix(".md"), resolved / "index.md"])
    return variants


def main() -> int:
    failures: list[str] = []
    for md in sorted(DOCS.rglob("*.md")):
        text = md.read_text(encoding="utf-8")
        for match in LINK_RE.finditer(text):
            target = match.group(1).strip()
            if target.startswith("#") or is_external(target) or target.startswith("data:"):
                continue
            paths = candidate_paths(md, target)
            if paths and not any(p.exists() for p in paths):
                failures.append(f"{md.relative_to(ROOT)} -> {target}")
    if failures:
        print("Broken local Markdown links:")
        for failure in failures:
            print(f"- {failure}")
        return 1
    print("Local Markdown link check passed: 0 broken links.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
