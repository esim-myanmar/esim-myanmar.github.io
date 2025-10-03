// Advanced 3D Background System
class ParticleSystem {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        
        this.init();
    }
    
    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        document.getElementById('canvas-container').appendChild(this.renderer.domElement);
        
        this.createParticles();
        this.createConnections();
        this.setupEventListeners();
        this.animate();
    }
    
    createParticles() {
        const particleCount = 150;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            positions[i3] = (Math.random() - 0.5) * 100;
            positions[i3 + 1] = (Math.random() - 0.5) * 100;
            positions[i3 + 2] = (Math.random() - 0.5) * 50;
            
            colors[i3] = 0;
            colors[i3 + 1] = 1;
            colors[i3 + 2] = 1;
            
            sizes[i] = Math.random() * 3 + 1;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 }
            },
            vertexShader: `
                attribute float size;
                varying vec3 vColor;
                uniform float time;
                
                void main() {
                    vColor = color;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * (300.0 / -mvPosition.z) * (1.0 + sin(time + position.x * 0.01) * 0.3);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                
                void main() {
                    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
                    float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
                    gl_FragColor = vec4(vColor, alpha * 0.8);
                }
            `,
            transparent: true,
            vertexColors: true
        });
        
        this.particleSystem = new THREE.Points(geometry, material);
        this.scene.add(this.particleSystem);
        
        this.camera.position.z = 30;
    }
    
    createConnections() {
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.LineBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.1
        });
        
        this.connections = new THREE.LineSegments(geometry, material);
        this.scene.add(this.connections);
    }
    
    setupEventListeners() {
        window.addEventListener('mousemove', (event) => {
            this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });
        
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const time = Date.now() * 0.001;
        
        if (this.particleSystem.material.uniforms) {
            this.particleSystem.material.uniforms.time.value = time;
        }
        
        this.particleSystem.rotation.x += 0.0005;
        this.particleSystem.rotation.y += 0.001;
        
        this.camera.position.x += (this.mouseX * 5 - this.camera.position.x) * 0.02;
        this.camera.position.y += (this.mouseY * 5 - this.camera.position.y) * 0.02;
        
        this.renderer.render(this.scene, this.camera);
    }
}

// Advanced Animation Controller
class AnimationController {
    constructor() {
        this.init();
    }
    
    init() {
        gsap.registerPlugin(ScrollTrigger);
        this.setupHeroAnimations();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupNavbarEffects();
    }
    
    setupHeroAnimations() {
        const tl = gsap.timeline();
        
        tl.from('.hero-title .title-line', {
            duration: 1.2,
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: 'power4.out'
        })
        .from('.hero-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-actions .btn-primary, .hero-actions .btn-secondary', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        }, '-=0.3')
        .from('.metric-card', {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.15,
            ease: 'power3.out'
        }, '-=0.5');
    }
    
    setupScrollAnimations() {
        gsap.from('.section-title', {
            scrollTrigger: {
                trigger: '.features',
                start: 'top 80%'
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('.feature-card', {
            scrollTrigger: {
                trigger: '.features-grid',
                start: 'top 80%'
            },
            duration: 0.8,
            y: 80,
            opacity: 0,
            stagger: 0.1,
            ease: 'power3.out'
        });
        
        gsap.from('.tech-panel', {
            scrollTrigger: {
                trigger: '.technology',
                start: 'top 70%'
            },
            duration: 1.2,
            scale: 0.9,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('.spec-item', {
            scrollTrigger: {
                trigger: '.tech-specs',
                start: 'top 80%'
            },
            duration: 0.6,
            x: -50,
            opacity: 0,
            stagger: 0.1,
            ease: 'power2.out'
        });
    }
    
    setupHoverEffects() {
        document.querySelectorAll('.glass-panel').forEach(panel => {
            panel.addEventListener('mouseenter', () => {
                gsap.to(panel, {
                    duration: 0.3,
                    scale: 1.02,
                    boxShadow: '0 25px 50px rgba(0, 255, 255, 0.2)',
                    ease: 'power2.out'
                });
            });
            
            panel.addEventListener('mouseleave', () => {
                gsap.to(panel, {
                    duration: 0.3,
                    scale: 1,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                    ease: 'power2.out'
                });
            });
        });
        
        document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    duration: 0.2,
                    scale: 1.05,
                    ease: 'power2.out'
                });
            });
            
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    duration: 0.2,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });
    }
    
    setupNavbarEffects() {
        ScrollTrigger.create({
            start: 'top -100',
            end: 99999,
            toggleClass: {
                className: 'scrolled',
                targets: '.navbar'
            }
        });
    }
}

// Language Toggle System
class LanguageController {
    constructor() {
        this.currentLang = 'en';
        this.translations = {
            en: {
                heroTitle: ['Next Generation', 'Digital Connectivity'],
                heroSubtitle: 'Experience seamless mobile connectivity with Myanmar\'s most advanced eSIM technology platform',
                btnActivate: 'Activate eSIM',
                btnLearn: 'Learn More'
            },
            mm: {
                heroTitle: ['နောက်ဆုံးမျိုးဆက်', 'ဒစ်ဂျစ်တယ် ဆက်သွယ်ရေး'],
                heroSubtitle: 'မြန်မာနိုင်ငံ၏ အဆင့်မြင့်ဆုံး eSIM နည်းပညာပလပ်ဖောင်းဖြင့် ချောမွေ့သော မိုဘိုင်းဆက်သွယ်မှုကို ခံစားပါ',
                btnActivate: 'eSIM စတင်ပါ',
                btnLearn: 'ပိုမိုလေ့လာပါ'
            }
        };
        
        this.init();
    }
    
    init() {
        const toggleBtn = document.getElementById('langToggle');
        toggleBtn.addEventListener('click', () => this.toggleLanguage());
    }
    
    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'mm' : 'en';
        this.updateContent();
        this.updateToggleButton();
    }
    
    updateContent() {
        const trans = this.translations[this.currentLang];
        
        const titleLines = document.querySelectorAll('.hero-title .title-line');
        titleLines[0].textContent = trans.heroTitle[0];
        titleLines[1].textContent = trans.heroTitle[1];
        
        document.querySelector('.hero-subtitle').textContent = trans.heroSubtitle;
        document.querySelector('.btn-primary').textContent = trans.btnActivate;
        document.querySelector('.btn-secondary').textContent = trans.btnLearn;
    }
    
    updateToggleButton() {
        const toggleBtn = document.getElementById('langToggle');
        toggleBtn.textContent = this.currentLang === 'en' ? 'မြန်မာ' : 'English';
    }
}

// Smooth Scroll Navigation
class NavigationController {
    constructor() {
        this.init();
    }
    
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: target,
                        ease: 'power2.inOut'
                    });
                }
            });
        });
        
        this.setupMobileMenu();
    }
    
    setupMobileMenu() {
        const toggle = document.querySelector('.mobile-toggle');
        const menu = document.querySelector('.nav-menu');
        
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.init();
    }
    
    init() {
        // Optimize animations based on device performance
        const isLowPerformance = navigator.hardwareConcurrency < 4 || 
                                navigator.deviceMemory < 4;
        
        if (isLowPerformance) {
            document.documentElement.style.setProperty('--animation-duration', '0.5s');
        }
        
        // Intersection Observer for performance
        this.setupIntersectionObserver();
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.glass-panel').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem();
    new AnimationController();
    new LanguageController();
    new NavigationController();
    new PerformanceMonitor();
});

// Add CSS for scrolled navbar
const style = document.createElement('style');
style.textContent = `
    .navbar.scrolled {
        background: rgba(30, 47, 60, 0.95);
        backdrop-filter: blur(25px);
    }
    
    .glass-panel.in-view {
        animation: fadeInUp 0.8s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);