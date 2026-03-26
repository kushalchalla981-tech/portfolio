# âœ¦ PCA Compressor

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</p>

<p align="center">
  <a href="https://portfolio-eight-mu-n7cgc7espl.vercel.app/"><img src="https://img.shields.io/badge/Live%20Portfolio-00d4ff?style=flat-square&logo=rocket&logoColor=black"></a>
  <a href="https://pcaupgraded.vercel.app"><img src="https://img.shields.io/badge/Live%20App-ffb347?style=flat-square&logo=vercel&logoColor=black"></a>
  <a href="https://github.com/kushalchalla981-tech/pcaupgraded"><img src="https://img.shields.io/badge/Source-GitHub-ff6b9d?style=flat-square&logo=github&logoColor=black"></a>
</p>

---

## âœ¦ Overview

> *"Transforming images through the power of linear algebra"*

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

## âœ¦ The Mathematics

Principal Component Analysis transforms correlated variables into uncorrelated principal components, ranked by variance explained.

```
  Mean Centering         Covariance Matrix         Eigen-Decomposition
      x' = x - Î¼       C = (X-Î¼)áµ€(X-Î¼)/(n-1)        CÂ·v = Î»Â·v
        
          Projection              Reconstruction
           Y = XÂ·Vâ‚–               XÌ‚ = YÂ·Vâ‚–áµ€ + Î¼
```

The first principal component captures the direction of maximum variance.

---

## âœ¦ How It Works

```
   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”
   â”‚  INPUT  â”‚â”€â”€â”€â”€â–¶â”‚  CENTER  â”‚â”€â”€â”€â”€â–¶â”‚  COVARIANCEâ”‚â”€â”€â”€â–¶â”‚  EIGEN  â”‚
   â”‚   IMG   â”‚     â”‚    â†“     â”‚     â”‚    â†“     â”‚     â”‚  DECOMP â”‚
   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                                              â”‚
       â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
       â–¼
   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”
   â”‚  FINAL  â”‚â—€â”€â”€â”€â”€â”‚RECONSTRUCTâ”‚â—€â”€â”€â”€â”€â”‚ PROJECT â”‚
   â”‚   OUT   â”‚     â”‚    â†“     â”‚     â”‚    â†“    â”‚
   â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

| Step | Description |
|:----:|-------------|
| â‘  | **Center Data** - Subtract mean from observations |
| â‘¡ | **Compute** - Calculate covariance matrix C |
| â‘¢ | **Decompose** - Find eigenvalues Î»áµ¢ and eigenvectors váµ¢ |
| â‘£ | **Project** - Project onto k largest eigenvectors |
| â‘¤ | **Reconstruct** - Build approximation from reduced data |

---

## âœ¦ Performance

| Image Size | Processing | Memory | Quality |
|:-----------|:---------:|:------:|:-------:|
| Small (<1MP) | <100ms | ~50MB | SSIM > 0.95 |
| Medium (1-4MP) | 500ms-2s | ~200MB | SSIM > 0.90 |
| Large (4-12MP) | 2-5s | ~500MB | SSIM > 0.85 |

---

## âœ¦ Color Palette

| Color | Hex | Usage |
|:-----:|:---:|-------|
| ðŸ”µ Cyan | `#00d4ff` | Primary accent, Î»â‚ |
| ðŸŸ¡ Amber | `#ffb347` | Secondary accent, Î»â‚‚ |
| ðŸ©· Magenta | `#ff6b9d` | Tertiary accent, Î»â‚ƒ |

---

## âœ¦ Tech Stack

```
  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”       â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”       â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
  â”‚             â”‚       â”‚             â”‚       â”‚             â”‚
  â”‚  JavaScript â”‚  +   â”‚    CSS3     â”‚  +   â”‚   Linear    â”‚
  â”‚             â”‚       â”‚             â”‚       â”‚   Algebra   â”‚
  â”‚   JS Logo   â”‚       â”‚   CSS Logo  â”‚       â”‚   âˆ« Math    â”‚
  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜       â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜       â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                           + Vercel Deployment
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

<p align="center">
  <strong>â—† Built with Linear Algebra & JavaScript â—†</strong>
</p>
