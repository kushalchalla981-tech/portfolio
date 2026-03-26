document.addEventListener('DOMContentLoaded', () => {
    const demoTabs = document.querySelectorAll('.demo-tab');
    const demoPanels = document.querySelectorAll('.demo-panel');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    const colors = ['#00d4ff', '#ffb347', '#ff6b9d'];

    let width, height;
    let time = 0;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const phi = (1 + Math.sqrt(5)) / 2;

    class Icosahedron {
        constructor(scale = 1) {
            this.scale = scale;
            this.rotation = { x: 0.3, y: 0, z: 0 };
            this.vertices = [
                [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
                [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
                [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
            ].map(v => v.map(c => c * scale));

            this.edges = [
                [0,1],[0,5],[0,7],[0,10],[0,11],
                [1,5],[1,7],[1,8],[1,9],
                [2,3],[2,4],[2,10],[2,11],
                [3,4],[3,8],[3,9],
                [4,5],[4,9],[4,11],
                [5,9],[5,11],
                [6,7],[6,8],[6,10],[6,11],
                [7,8],[7,10],
                [8,9],[10,11]
            ];
        }

        project(vert, w, h) {
            const cosX = Math.cos(this.rotation.x);
            const sinX = Math.sin(this.rotation.x);
            const cosY = Math.cos(this.rotation.y);
            const sinY = Math.sin(this.rotation.y);
            const cosZ = Math.cos(this.rotation.z);
            const sinZ = Math.sin(this.rotation.z);

            let x = vert[0], y = vert[1], z = vert[2];

            let temp = y * cosX - z * sinX;
            z = z * cosX + y * sinX;
            y = temp;

            temp = x * cosY + z * sinY;
            z = z * cosY - x * sinY;
            x = temp;

            temp = x * cosZ - y * sinZ;
            y = y * cosZ + x * sinZ;
            x = temp;

            const scale = 300 / (z + 400);
            return {
                x: x * scale + w / 2,
                y: -y * scale + h / 2,
                z: z,
                scale: scale
            };
        }

        draw(ctx, w, h) {
            const projected = this.vertices.map(v => this.project(v, w, h));
            
            const edges2d = this.edges.map(([i, j]) => ({
                p1: projected[i],
                p2: projected[j],
                z: (projected[i].z + projected[j].z) / 2
            }));

            edges2d.sort((a, b) => a.z - b.z);

            edges2d.forEach((edge, i) => {
                const alpha = Math.max(0.1, Math.min(0.6, (edge.z + 200) / 400));
                const colorIndex = i % 3;
                ctx.strokeStyle = colors[colorIndex];
                ctx.globalAlpha = alpha;
                ctx.lineWidth = 1 + (edge.z + 200) / 400;
                ctx.beginPath();
                ctx.moveTo(edge.p1.x, edge.p1.y);
                ctx.lineTo(edge.p2.x, edge.p2.y);
                ctx.stroke();
            });

            projected.forEach((p, i) => {
                ctx.fillStyle = colors[i % 3];
                ctx.globalAlpha = 0.3;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        rotate(dx, dy, dz) {
            this.rotation.x += dx;
            this.rotation.y += dy;
            this.rotation.z += dz;
        }
    }

    class FloatingParticles {
        constructor(count = 50) {
            this.particles = [];
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    z: Math.random() * 200 - 100,
                    size: Math.random() * 2 + 1,
                    color: colors[Math.floor(Math.random() * 3)],
                    speed: Math.random() * 0.5 + 0.2
                });
            }
        }

        update() {
            this.particles.forEach(p => {
                p.y += p.speed;
                if (p.y > height) {
                    p.y = -10;
                    p.x = Math.random() * width;
                }
            });
        }

        draw(ctx) {
            this.particles.forEach(p => {
                const scale = 300 / (p.z + 400);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.15 * scale;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * scale, 0, Math.PI * 2);
                ctx.fill();
            });
        }
    }

    const icosahedron = new Icosahedron(80);
    const particles = new FloatingParticles(40);

    function animate() {
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, width, height);

        particles.update();
        particles.draw(ctx);

        icosahedron.rotate(0.001, 0.002, 0.0005);
        icosahedron.draw(ctx, width, height);

        time++;
        requestAnimationFrame(animate);
    }
    animate();

    demoTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const demoId = tab.dataset.demo;
            
            demoTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            demoPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `demo-${demoId}`) {
                    panel.classList.add('active');
                }
            });
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-50px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .metric-card, .tech-item, .process-step, .formula-box').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        cardObserver.observe(el);
    });

    const heroElements = document.querySelectorAll('.hero-text, .hero-visual, .scroll-indicator');
    heroElements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 + (i * 200));
    });

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                ticking = false;
            });
            ticking = true;
        }
    });
});
