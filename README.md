# Jianye Shi · CUDA / AI Infra

Source for [hibouwu.github.io/JianyeSHI](https://hibouwu.github.io/JianyeSHI/).

The site is a static technical portfolio focused on CUDA, NVIDIA Blackwell/Thor,
PTX-to-SASS lowering, shared-memory behavior, low-precision GEMM, and AI
Infrastructure. GitHub Pages serves the content from `docs/`.

For a quick local preview:

```bash
python3 -m http.server 8000 --directory docs
```

The homepage uses `docs/minimal.css`, with no JavaScript or external fonts.
Its HTML has no Jekyll front matter and can be previewed directly without a build.
The older French course/project pages retain `docs/styles.css`.

Chinese is served from `docs/index.html`; the full English profile is
`docs/en.html`. Both pages share the same stylesheet, assets and section IDs.
The header language links and alternate-language metadata use relative URLs so
they work both locally and under the GitHub Pages `/JianyeSHI/` base path.
Keep facts, metrics and responsibility boundaries synchronized when editing
either language.

After reviewing the documentation selection, the user requested that all of
these document entries be removed from the website. The documentation section,
navigation and profile shortcuts are now absent in both languages and contact
pages. Do not restore them without a new request. Project descriptions and
repository links remain; no source documents in the research repositories were
deleted. The [authorship audit](AUTHORSHIP_AUDIT.md) is a historical record, not
a current publication list. Repository ownership or a commit alone is not proof
of original authorship.

Contact pages are `docs/contact.html` and `docs/contact-en.html`. Navigation and
profile contact links open these pages; the footer keeps a direct email link.
Both use `shijianye201908@163.com`. The send button is a `mailto:` link, not a
server-side form. `docs/contact.js` enables copying the address and selects it
for manual copying if clipboard access fails. Email links work without JavaScript.
Run `node tests/contact.test.mjs` to check links, cross-page anchors and clipboard
success/fallback behavior. Browser checks also cover both contact languages at
320, 390, 768 and 1440px widths.

## Profile-page design

The 2026-09-22 revision follows the visual structure of
[Argyris Kalogeratos's Centre Borelli profile](https://centreborelli.ens-paris-saclay.fr/fr/annuaire-des-personnes/argyris-kalogeratos):
a navy navigation bar, coral accents, a left-aligned portrait and identity block,
blue section headings, and continuous text rather than metric cards. No logos,
photographs, affiliation claims, publications, or biographies from that page are
reused. The site remains Jianye Shi's personal page, not an institutional page.

Content is aligned with the local resume evidence index: the invalid SW128 2.57×
comparison and the unknown internship end date are no longer displayed. The
92.7% GEMM result is limited to archived 1024³ tc5b trials and the historical
cublasGemmEx reference. The 206 PTX cases remain explicitly static evidence;
the PPN 13.27s-to-1.74s result is attributed to switching to BLAS. No new GPU
experiment was run for this redesign.

Local browser checks cover 320, 390, 768 and 1440px viewports, image loading,
internal anchors, fixed-header clearance, and keyboard navigation. External
project links are preserved; their remote content was not re-audited.
This revision is local only and has not been published.
