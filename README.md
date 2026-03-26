# <span style="color:#00d4ff">P</span><span style="color:#ffb347">C</span><span style="color:#ff6b9d">A</span> Compressor

**An interactive portfolio showcasing Principal Component Analysis for image compression.**

> A web application that compresses images using eigen-decomposition while preserving maximum visual quality.

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-00d4ff?style=for-the-badge&logo=rocket&logoColor=black)](https://portfolio-eight-mu-n7cgc7espl.vercel.app/)
[![Live App](https://img.shields.io/badge/Live%20App-ffb347?style=for-the-badge&logo=vercel&logoColor=black)](https://pcaupgraded.vercel.app)
[![Source](https://img.shields.io/badge/Source-GitHub-ff6b9d?style=for-the-badge&logo=github&logoColor=black)](https://github.com/kushalchalla981-tech/pcaupgraded)

---

## <span style="color:#00d4ff">â–Ž</span> Overview

This portfolio presents the **PCA Compressor** - a tool that applies linear algebra concepts to reduce image file sizes while maintaining perceptual quality.

Unlike traditional portfolios focused on individuals, this showcase highlights the **application itself** - its features, underlying mathematics, and technical implementation.

---

## <span style="color:#ffb347">â–Ž</span> Features

| | Feature | Description |
|:-|---------|-------------|
| <span style="color:#00d4ff">â—‰</span> | **PCA Compression** | Dimensionality reduction via eigen-decomposition |
| <span style="color:#ffb347">â—‰</span> | **Eigen Analysis** | Real-time eigenvalue and eigenvector visualization |
| <span style="color:#ff6b9d">â—‰</span> | **Auto Rotation** | Principal axis detection for tilt correction |
| <span style="color:#00d4ff">â—‰</span> | **Quality Metrics** | SSIM and PSNR for perceptual assessment |
| <span style="color:#ffb347">â—‰</span> | **Per-Channel Mode** | Independent RGB channel processing |
| <span style="color:#ff6b9d">â—‰</span> | **Drag & Drop** | Simple file upload with JPG/PNG support |

---

## <span style="color:#ff6b9d">â–Ž</span> The Mathematics

**Principal Component Analysis** transforms correlated variables into uncorrelated principal components, ranked by variance explained.

```mathematica
Covariance Matrix:     C = (X - Î¼)áµ€(X - Î¼) / (n-1)

Eigen-Decomposition:   CÂ·v = Î»Â·v

Projection:            Y = XÂ·Vâ‚–

Reconstruction:        XÌ‚ = YÂ·Vâ‚–áµ€ + Î¼
```

The first principal component captures the direction of maximum variance. By keeping only the top k components, we achieve compression while retaining essential image information.

---

## <span style="color:#00d4ff">â–Ž</span> How It Works

```
â‘  Center Data      â†’  Subtract mean from all observations
â‘¡ Compute          â†’  Calculate the covariance matrix C  
â‘¢ Eigen-Decompose â†’  Find eigenvalues Î»áµ¢ and eigenvectors váµ¢
â‘£ Project         â†’  Project data onto k largest eigenvectors
â‘¤ Reconstruct     â†’  Build approximation from reduced data
```

---

## <span style="color:#ffb347">â–Ž</span> Performance

| Image Size | Processing Time | Memory | Quality |
|:-----------|:--------------|:-------|:--------|
| Small (<1MP) | <span style="color:#00d4ff">**<100ms**</span> | ~50MB | SSIM > 0.95 |
| Medium (1-4MP) | <span style="color:#ffb347">**500ms-2s**</span> | ~200MB | SSIM > 0.90 |
| Large (4-12MP) | <span style="color:#ff6b9d">**2-5s**</span> | ~500MB | SSIM > 0.85 |

---

## <span style="color:#ff6b9d">â–Ž</span> Color Palette

| | Color | Hex | Usage |
|:-|-------|-----|-------|
| <span style="color:#00d4ff">â—</span> | **Cyan** | `#00d4ff` | Primary accent, Î»â‚ |
| <span style="color:#ffb347">â—</span> | **Amber** | `#ffb347` | Secondary accent, Î»â‚‚ |
| <span style="color:#ff6b9d">â—</span> | **Magenta** | `#ff6b9d` | Tertiary accent, Î»â‚ƒ |

---

## <span style="color:#00d4ff">â–Ž</span> Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Linear Algebra](https://img.shields.io/badge/Linear%20Algebra-Math-blue?style=flat)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## <span style="color:#ffb347">â–Ž</span> Quick Start

```bash
# Clone the repository
git clone https://github.com/kushalchalla981-tech/portfolio.git
cd portfolio

# Open in browser
open index.html

# Or serve locally
npx serve
```

---

## <span style="color:#ff6b9d">â–Ž</span> Links

| | Platform | Link |
|:-|----------|------|
| ðŸš€ | **Live Portfolio** | [portfolio-eight-mu-n7cgc7espl.vercel.app](https://portfolio-eight-mu-n7cgc7espl.vercel.app/) |
| ðŸŒ | **Live App** | [pcaupgraded.vercel.app](https://pcaupgraded.vercel.app) |
| ðŸ“‚ | **Source Repository** | [github.com/kushalchalla981-tech/pcaupgraded](https://github.com/kushalchalla981-tech/pcaupgraded) |

---

<p align="center">
  <sub>Built with</sub> <span style="color:#00d4ff">â—†</span> <sub>Linear Algebra &</sub> <span style="color:#ffb347">â—†</span> <sub>JavaScript</sub>
</p>
