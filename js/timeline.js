// ============================================
// TIMELINE SCROLL ANIMATION & FIREWORK
// ============================================

(function() {
    'use strict';
    
    function initTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const modal = document.getElementById('contactModal');
        const modalClose = document.getElementById('modalClose');
        const canvas = document.getElementById('fireworkCanvas');
        const ctx = canvas ? canvas.getContext('2d') : null;
        
        if (!timelineItems.length || !modal || !canvas || !ctx) {
            return;
        }
        
        // Canvas setup
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        
        let hasExploded = false;
        let particles = [];
        let animationFrame = null;
        let lightElement = null;
        
        // Create moving light element
        function createLight() {
            const timeline = document.querySelector('.timeline');
            if (!timeline) {
                console.warn('Timeline not found');
                return;
            }
            
            lightElement = document.createElement('div');
            lightElement.className = 'timeline-light';
            lightElement.style.position = 'absolute';
            lightElement.style.opacity = '0';
            timeline.style.position = 'relative';
            timeline.appendChild(lightElement);
            
            console.log('Timeline light created:', lightElement);
        }
        
        createLight();
        
        // Particle class for firework - AZZURRO colors
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 5 + 3;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.gravity = 0.12;
                this.alpha = 1;
                this.decay = Math.random() * 0.02 + 0.015;
                this.size = Math.random() * 1.5 + 0.8;
                
                // Azzurro blue colors
                const azzurroColors = [
                    [74, 158, 255],    // main azzurro
                    [100, 180, 255],   // lighter azzurro
                    [50, 140, 255],    // darker azzurro
                    [120, 200, 255]    // bright azzurro
                ];
                this.color = azzurroColors[Math.floor(Math.random() * azzurroColors.length)];
            }
            
            update() {
                this.vy += this.gravity;
                this.x += this.vx;
                this.y += this.vy;
                this.alpha -= this.decay;
                this.vx *= 0.98;
                this.vy *= 0.98;
            }
            
            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = `rgb(${this.color[0]}, ${this.color[1]}, ${this.color[2]})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                
                // Add subtle glow
                ctx.shadowBlur = 8;
                ctx.shadowColor = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.alpha * 0.8})`;
                ctx.fill();
                ctx.restore();
            }
            
            isDead() {
                return this.alpha <= 0 || 
                       this.x < 0 || this.x > canvas.width || 
                       this.y < 0 || this.y > canvas.height;
            }
        }
        
        function createFirework(x, y) {
            const particleCount = 300;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(x, y));
            }
        }
        
        function animateFirework() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles = particles.filter(particle => {
                particle.update();
                particle.draw();
                return !particle.isDead();
            });
            
            if (particles.length > 0) {
                animationFrame = requestAnimationFrame(animateFirework);
            } else {
                animationFrame = null;
                console.log('Firework animation complete');
            }
        }
        
        function checkTimelineProgress() {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const timeline = document.querySelector('.timeline');
            
            if (!timeline) return;
            
            const timelineRect = timeline.getBoundingClientRect();
            const timelineTop = timelineRect.top + scrollY;
            
            let lastVisibleIndex = -1;
            let lightPosition = null;
            
            timelineItems.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                const itemTop = rect.top + scrollY;
                
                // More responsive - trigger when item enters viewport
                if (rect.top < windowHeight && rect.bottom > 0) {
                    lastVisibleIndex = index;
                    // Calculate light position relative to timeline
                    const computedStyle = window.getComputedStyle(item);
                    const paddingTop = parseFloat(computedStyle.paddingTop) || 48;
                    const dotTop = itemTop - timelineTop + paddingTop;
                    lightPosition = dotTop;
                }
            });
            
            // Update light position
            if (lightElement && lightPosition !== null && lastVisibleIndex >= 0) {
                lightElement.style.top = `${lightPosition}px`;
                lightElement.style.opacity = '1';
                console.log('Light visible at:', lightPosition, 'Index:', lastVisibleIndex);
            } else if (lightElement) {
                lightElement.style.opacity = '0';
            }
            
            // Check if we've reached the last item - MORE AGGRESSIVE TRIGGER
            if (lastVisibleIndex === timelineItems.length - 1 && !hasExploded) {
                const lastItem = timelineItems[timelineItems.length - 1];
                const rect = lastItem.getBoundingClientRect();
                
                // Trigger when last item is 80% visible
                if (rect.top < windowHeight * 0.8) {
                    hasExploded = true;
                    console.log('🎆 FIREWORK TRIGGERED! 🎆');
                    
                    // Get position for firework
                    let dotX, dotY;
                    
                    if (lightElement && lightElement.style.opacity === '1') {
                        const lightRect = lightElement.getBoundingClientRect();
                        dotX = lightRect.left + lightRect.width / 2;
                        dotY = lightRect.top + lightRect.height / 2;
                        console.log('Firework from light:', dotX, dotY);
                    } else {
                        // Fallback to last item position
                        const lastRect = lastItem.getBoundingClientRect();
                        const computedStyle = window.getComputedStyle(lastItem);
                        const paddingTop = parseFloat(computedStyle.paddingTop) || 48;
                        dotX = lastRect.left + 20;
                        dotY = lastRect.top + paddingTop;
                        console.log('Firework from fallback:', dotX, dotY);
                    }
                    
                    // Create firework
                    console.log('Creating firework with', 300, 'particles at', dotX, dotY);
                    createFirework(dotX, dotY);
                    console.log('Particles created:', particles.length);
                    animateFirework();
                    console.log('Animation started');
                    
                    // Show modal after brief delay
                    setTimeout(() => {
                        modal.classList.add('modal-active');
                        document.body.style.overflow = 'hidden';
                        console.log('Modal shown');
                    }, 800);
                }
            }
        }
        
        // Close modal
        function closeModal() {
            modal.classList.remove('modal-active');
            document.body.style.overflow = '';
            
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles = [];
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
                animationFrame = null;
            }
        }
        
        modalClose.addEventListener('click', closeModal);
        
        // Close modal on click/touch outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close modal on touch outside content (mobile)
        modal.addEventListener('touchstart', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('modal-active')) {
                closeModal();
            }
        });
        
        // Initial check
        checkTimelineProgress();
        
        // Check on scroll
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    checkTimelineProgress();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTimeline);
    } else {
        initTimeline();
    }
    
})();