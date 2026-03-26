# âœ¦ PCA Compressor

**Image compression using Principal Component Analysis**

![Header](https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=300&fit=crop&q=80)

<p align="center">
  <a href="https://portfolio-eight-mu-n7cgc7espl.vercel.app/"><img src="https://img.shields.io/badge/Live%20Portfolio-00d4ff?style=for-the-badge&logo=rocket&logoColor=black"></a>
  <a href="https://pcaupgraded.vercel.app"><img src="https://img.shields.io/badge/Live%20App-ffb347?style=for-the-badge&logo=vercel&logoColor=black"></a>
  <a href="https://github.com/kushalchalla981-tech/pcaupgraded"><img src="https://img.shields.io/badge/Source-GitHub-ff6b9d?style=for-the-badge&logo=github&logoColor=black"></a>
</p>

---

## Overview

This portfolio showcases the **PCA Compressor** - a tool that applies linear algebra to compress images while preserving visual quality.

## Features

| | Feature | Description |
|:-:|---------|-------------|
| â—ˆ | **PCA Compression** | Dimensionality reduction via eigen-decomposition |
| â—ˆ | **Eigen Analysis** | Real-time eigenvalue and eigenvector visualization |
| â—ˆ | **Auto Rotation** | Principal axis detection for tilt correction |
| â—ˆ | **Quality Metrics** | SSIM and PSNR for perceptual assessment |
| â—ˆ | **Per-Channel Mode** | Independent RGB channel processing |
| â—ˆ | **Drag & Drop** | Simple file upload with JPG/PNG support |

## How It Works

Principal Component Analysis transforms correlated variables into uncorrelated components ranked by variance.

| Step | Description |
|:----:|-------------|
| â‘  | **Center Data** - Subtract mean from observations |
| â‘¡ | **Compute** - Calculate covariance matrix |
| â‘¢ | **Decompose** - Find eigenvalues and eigenvectors |
| â‘£ | **Project** - Project onto largest eigenvectors |
| â‘¤ | **Reconstruct** - Build compressed approximation |

## Performance

| Image Size | Processing | Memory | Quality |
|:-----------|:---------:|:------:|:-------:|
| Small | <100ms | ~50MB | SSIM > 0.95 |
| Medium | 500ms-2s | ~200MB | SSIM > 0.90 |
| Large | 2-5s | ~500MB | SSIM > 0.85 |

## Color Palette

| | Color | Hex |
|:-:|-------|:---:|
| â— | Cyan | `#00d4ff` |
| â— | Amber | `#ffb347` |
| â— | Magenta | `#ff6b9d` |

## Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Linear Algebra](https://img.shields.io/badge/Math-00d4ff?style=flat)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

## Quick Start

```bash
git clone https://github.com/kushalchalla981-tech/portfolio.git
cd portfolio
open index.html
```

## Links

| Platform | Link |
|:--------:|------|
| ðŸš€ Live Portfolio | [portfolio-eight-mu-n7cgc7espl.vercel.app](https://portfolio-eight-mu-n7cgc7espl.vercel.app/) |
| ðŸŒ Live App | [pcaupgraded.vercel.app](https://pcaupgraded.vercel.app) |
| ðŸ“‚ Source | [github.com/kushalchalla981-tech/pcaupgraded](https://github.com/kushalchalla981-tech/pcaupgraded) |

---

*Built with Linear Algebra & JavaScript*
