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

    class Starfield {
        constructor(count = 600) {
            this.stars = [];
            for (let i = 0; i < count; i++) {
                this.stars.push({
                    x: Math.random() * width - width / 2,
                    y: Math.random() * height - height / 2,
                    z: Math.random() * 1500,
                    color: colors[Math.floor(Math.random() * 3)],
                    size: Math.random() * 1.5 + 0.5
                });
            }
        }

        update(speed) {
            this.stars.forEach(star => {
                star.z -= speed;
                if (star.z <= 0) {
                    star.z = 1500;
                    star.x = Math.random() * width - width / 2;
                    star.y = Math.random() * height - height / 2;
                }
            });
        }

        draw(ctx) {
            this.stars.forEach(star => {
                const scale = 1000 / (star.z + 1);
                const x = star.x * scale + width / 2;
                const y = star.y * scale + height / 2;
                const size = star.size * scale;
                
                if (x < 0 || x > width || y < 0 || y > height) return;
                
                const alpha = Math.min(1, (1500 - star.z) / 500);
                ctx.fillStyle = star.color;
                ctx.globalAlpha = alpha * 0.6;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            });
        }
    }

    class SpiralTrail {
        constructor() {
            this.points = [];
            this.maxPoints = 120;
            this.angle = 0;
        }

        update() {
            this.angle += 0.02;
            const progress = (time % 300) / 300;
            const radius = 50 + progress * 300;
            const spiralTurns = 4;
            const theta = this.angle + spiralTurns * progress * Math.PI * 2;
            
            const x = Math.cos(theta) * radius;
            const y = Math.sin(theta) * radius - progress * 200;
            
            this.points.unshift({
                x: x + width / 2,
                y: y + height / 2,
                alpha: 1,
                size: 3 - progress * 2.5
            });
            
            if (this.points.length > this.maxPoints) {
                this.points.pop();
            }
            
            this.points.forEach((p, i) => {
                p.alpha = 1 - (i / this.maxPoints);
            });
        }

        draw(ctx) {
            this.points.forEach((point, i) => {
                if (i === 0) return;
                
                const prev = this.points[i - 1];
                const colorIndex = i % 3;
                
                ctx.strokeStyle = colors[colorIndex];
                ctx.globalAlpha = point.alpha * 0.4;
                ctx.lineWidth = point.size;
                ctx.beginPath();
                ctx.moveTo(prev.x, prev.y);
                ctx.lineTo(point.x, point.y);
                ctx.stroke();
                
                ctx.fillStyle = colors[colorIndex];
                ctx.globalAlpha = point.alpha * 0.6;
                ctx.beginPath();
                ctx.arc(point.x, point.y, point.size * 0.5, 0, Math.PI * 2);
                ctx.fill();
            });
        }
    }

    class SpiralParticles {
        constructor(count = 80) {
            this.particles = [];
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    angle: Math.random() * Math.PI * 2,
                    radius: 100 + Math.random() * 400,
                    speed: 0.005 + Math.random() * 0.01,
                    z: Math.random() * 1000,
                    color: colors[Math.floor(Math.random() * 3)],
                    size: 1 + Math.random() * 2,
                    twinkle: Math.random() * Math.PI * 2
                });
            }
        }

        update() {
            this.particles.forEach(p => {
                p.angle += p.speed;
                p.z -= 2;
                p.twinkle += 0.05;
                if (p.z <= 0) {
                    p.z = 1000;
                    p.radius = 100 + Math.random() * 400;
                }
            });
        }

        draw(ctx) {
            this.particles.forEach(p => {
                const scale = 500 / (p.z + 1);
                const x = Math.cos(p.angle) * p.radius * scale * 0.3 + width / 2;
                const y = Math.sin(p.angle) * p.radius * scale * 0.3 + height / 2;
                const size = p.size * scale * 0.5;
                
                if (x < 0 || x > width || y < 0 || y > height) return;
                
                const twinkleAlpha = 0.3 + Math.sin(p.twinkle) * 0.2;
                ctx.fillStyle = p.color;
                ctx.globalAlpha = twinkleAlpha;
                ctx.beginPath();
                ctx.arc(x, y, Math.max(0.5, size), 0, Math.PI * 2);
                ctx.fill();
            });
        }
    }

    const starfield = new Starfield(500);
    const spiralTrail = new SpiralTrail();
    const spiralParticles = new SpiralParticles(100);

    function animate() {
        ctx.fillStyle = '#0a0a0a';
        ctx.globalAlpha = 1;
        ctx.fillRect(0, 0, width, height);

        starfield.update(3);
        starfield.draw(ctx);

        spiralTrail.update();
        spiralTrail.draw(ctx);

        spiralParticles.update();
        spiralParticles.draw(ctx);

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
