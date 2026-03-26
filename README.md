# PCA Compressor

**An interactive portfolio showcasing Principal Component Analysis for image compression.**

A web application that compresses images using eigen-decomposition while preserving maximum visual quality.

[Launch App](https://portfolio-eight-mu-n7cgc7espl.vercel.app/) Â· [Source Code](https://github.com/kushalchalla981-tech/pcaupgraded)

---

## Overview

This portfolio presents the PCA Compressor - a tool that applies linear algebra concepts to reduce image file sizes while maintaining perceptual quality. The mathematics behind it: covariance matrices, eigenvalue decomposition, and dimensionality reduction.

Unlike traditional portfolios focused on individuals, this showcase highlights the **application itself** - its features, underlying mathematics, and technical implementation.

---

## Features

| Feature | Description |
|---------|-------------|
| **PCA Compression** | Dimensionality reduction via eigen-decomposition |
| **Eigen Analysis** | Real-time eigenvalue and eigenvector visualization |
| **Auto Rotation** | Principal axis detection for tilt correction |
| **Quality Metrics** | SSIM and PSNR for perceptual assessment |
| **Per-Channel Mode** | Independent RGB channel processing |
| **Drag & Drop** | Simple file upload with JPG/PNG support |

---

## The Mathematics

**Principal Component Analysis** transforms correlated variables into uncorrelated principal components, ranked by variance explained.

```
Covariance Matrix:     C = (X - Î¼)áµ€(X - Î¼) / (n-1)

Eigen-Decomposition:   CÂ·v = Î»Â·v

Projection:            Y = XÂ·Vâ‚–

Reconstruction:        XÌ‚ = YÂ·Vâ‚–áµ€ + Î¼
```

The first principal component captures the direction of maximum variance. By keeping only the top k components, we achieve compression while retaining essential image information.

---

## How It Works

1. **Center Data** - Subtract mean from all observations
2. **Compute Covariance** - Calculate the covariance matrix C
3. **Eigen-Decompose** - Find eigenvalues Î»áµ¢ and eigenvectors váµ¢
4. **Project** - Project data onto k largest eigenvectors
5. **Reconstruct** - Build approximation from reduced data

---

## Performance

| Image Size | Processing Time | Memory | Quality |
|------------|-----------------|--------|---------|
| Small (<1MP) | <100ms | ~50MB | SSIM > 0.95 |
| Medium (1-4MP) | 500ms-2s | ~200MB | SSIM > 0.90 |
| Large (4-12MP) | 2-5s | ~500MB | SSIM > 0.85 |

---

## Tech Stack

- **JavaScript** - Core logic and Canvas API
- **CSS3** - Animations and styling
- **Linear Algebra** - PCA and eigen decomposition
- **Vercel** - Deployment

---

## Quick Start

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

## Links

- [Live Portfolio](https://portfolio-eight-mu-n7cgc7espl.vercel.app/)
- [Live App](https://pcaupgraded.vercel.app)
- [Source Repository](https://github.com/kushalchalla981-tech/pcaupgraded)
