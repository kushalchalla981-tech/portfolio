# âœ¦ PCA Compressor

![PCA Compressor](https://picsum.photos/seed/pca-hero/1200/400)

<p align="center">
  <a href="https://portfolio-eight-mu-n7cgc7espl.vercel.app/"><img src="https://img.shields.io/badge/Live%20Portfolio-00d4ff?style=for-the-badge&logo=rocket&logoColor=black"></a>
  <a href="https://pcaupgraded.vercel.app"><img src="https://img.shields.io/badge/Live%20App-ffb347?style=for-the-badge&logo=vercel&logoColor=black"></a>
  <a href="https://github.com/kushalchalla981-tech/pcaupgraded"><img src="https://img.shields.io/badge/Source-GitHub-ff6b9d?style=for-the-badge&logo=github&logoColor=black"></a>
</p>

---

## âœ¦ Overview

> *"Transforming images through the power of linear algebra"*

![Math Background](https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=200&fit=crop)

This portfolio showcases the **PCA Compressor** - a web application that uses **Principal Component Analysis** to compress images while preserving maximum visual quality.

Unlike traditional portfolios about people, this one celebrates the **application itself** - its features, mathematics, and technical implementation.

---

## âœ¦ Features

| | Feature | Description |
|:-:|---------|-------------|
| â—ˆ | **PCA Compression** | Dimensionality reduction via eigen-decomposition |
| â—ˆ | **Eigen Analysis** | Real-time eigenvalue and eigenvector visualization |
| â—ˆ | **Auto Rotation** | Principal axis detection for tilt correction |
| â—ˆ | **Quality Metrics** | SSIM and PSNR for perceptual assessment |
| â—ˆ | **Per-Channel Mode** | Independent RGB channel processing |
| â—ˆ | **Drag & Drop** | Simple file upload with JPG/PNG support |

---

## âœ¦ Live Preview

![Hero Section](https://picsum.photos/seed/pca1/900/500)

![Features Grid](https://picsum.photos/seed/pca2/900/400)

![Demo Workspace](https://picsum.photos/seed/pca3/900/450)

---

## âœ¦ How It Works

Principal Component Analysis transforms correlated variables into uncorrelated principal components.

![Linear Algebra](https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&h=300&fit=crop)

| Step | Process | Description |
|:----:|---------|-------------|
| â‘  | **Center Data** | Subtract mean from observations |
| â‘¡ | **Compute** | Calculate covariance matrix C |
| â‘¢ | **Decompose** | Find eigenvalues Î»áµ¢ and eigenvectors váµ¢ |
| â‘£ | **Project** | Project onto k largest eigenvectors |
| â‘¤ | **Reconstruct** | Build approximation from reduced data |

---

## âœ¦ Performance

| Image Size | Processing | Memory | Quality |
|:-----------|:---------:|:------:|:-------:|
| Small (<1MP) | <100ms | ~50MB | SSIM > 0.95 |
| Medium (1-4MP) | 500ms-2s | ~200MB | SSIM > 0.90 |
| Large (4-12MP) | 2-5s | ~500MB | SSIM > 0.85 |

---

## âœ¦ Color Palette

| Color | Hex | Sample |
|:-----:|:---:|:------:|
| ðŸ”µ Cyan | `#00d4ff` | ![](https://via.placeholder.com/100/00d4ff/00d4ff) |
| ðŸŸ¡ Amber | `#ffb347` | ![](https://via.placeholder.com/100/ffb347/ffb347) |
| ðŸ©· Magenta | `#ff6b9d` | ![](https://via.placeholder.com/100/ff6b9d/ff6b9d) |

---

## âœ¦ Tech Stack

| Technology | Purpose |
|:----------:|---------|
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Core Logic & Canvas API |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling & Animations |
| ![Linear Algebra](https://img.shields.io/badge/Math-00d4ff?style=flat) | PCA & Eigen Decomposition |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | Deployment |

---

## âœ¦ Architecture

![System Diagram](https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=300&fit=crop)

```
Input Image â†’ Mean Centering â†’ Covariance Matrix â†’ Eigen-Decomposition
     â†‘                                                              â†“
     â””â”€â”€â”€â”€â”€â”€ Reconstruction â† Projection â†â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

## âœ¦ Quick Start

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

## âœ¦ Links

| Platform | Link |
|:--------:|------|
| ðŸš€ Live Portfolio | [portfolio-eight-mu-n7cgc7espl.vercel.app](https://portfolio-eight-mu-n7cgc7espl.vercel.app/) |
| ðŸŒ Live App | [pcaupgraded.vercel.app](https://pcaupgraded.vercel.app) |
| ðŸ“‚ Source Code | [github.com/kushalchalla981-tech/pcaupgraded](https://github.com/kushalchalla981-tech/pcaupgraded) |

---

## âœ¦ Screenshots

![Screenshot 1](https://picsum.photos/seed/pca4/600/400)
![Screenshot 2](https://picsum.photos/seed/pca5/600/400)

---

<p align="center">
  <strong>â—† Built with Linear Algebra & JavaScript â—†</strong>
</p>
