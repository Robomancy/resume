// ============================================
// DOPAMINE MODE SYSTEM
// ============================================

(function() {
    'use strict';
    
    // Single dopamine video - pure focus
    const dopamineVideoId = 'eRXE8Aebp7s';
    
    let dopamineActive = false;
    
    function initDopamineSystem() {
        const modal = document.getElementById('dopamineModal');
        const yesBtn = document.getElementById('dopamineYes');
        const noBtn = document.getElementById('dopamineNo');
        const splitContainer = document.getElementById('dopamineSplitContainer');
        const videoSection = document.getElementById('dopamineVideoSection');
        const contentSection = document.getElementById('dopamineContentSection');
        const siteContainer = document.querySelector('.site-container');
        
        if (!modal || !yesBtn || !noBtn || !splitContainer) {
            console.warn('Dopamine modal elements not found');
            return;
        }
        
        // Check if user has already made a choice
        const dopamineChoice = localStorage.getItem('dopamine-choice');
        if (dopamineChoice === 'yes') {
            activateDopamineMode();
            return;
        } else if (dopamineChoice === 'no') {
            hideDopamineModal();
            return;
        }
        
        // Show modal after brief delay for dramatic effect
        setTimeout(() => {
            modal.style.display = 'flex';
        }, 1000);
        
        // YES button - ACTIVATE DOPAMINE
        yesBtn.addEventListener('click', () => {
            localStorage.setItem('dopamine-choice', 'yes');
            activateDopamineMode();
        });
        
        // NO button - Boring normal mode
        noBtn.addEventListener('click', () => {
            localStorage.setItem('dopamine-choice', 'no');
            hideDopamineModal();
        });
        
        function hideDopamineModal() {
            modal.classList.add('modal-hidden');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 800);
        }
        
        function activateDopamineMode() {
            console.log('🎯 DOPAMINE MODE ACTIVATED! 🎯');
            dopamineActive = true;
            
            // Hide modal
            hideDopamineModal();
            
            // Move original content to split container
            const originalContent = siteContainer.cloneNode(true);
            contentSection.appendChild(originalContent);
            
            // Create exit button
            const exitBtn = document.createElement('button');
            exitBtn.className = 'dopamine-exit';
            exitBtn.innerHTML = '×';
            exitBtn.title = 'Esci';
            document.body.appendChild(exitBtn);
            
            exitBtn.addEventListener('click', deactivateDopamineMode);
            
            // Activate split screen
            splitContainer.classList.add('split-active');
            
            // Load the video
            loadDopamineVideo();
            
            // Hide original site container
            siteContainer.style.display = 'none';
            
            console.log('Split screen activated, video loaded');
        }
        
        function deactivateDopamineMode() {
            console.log('🔄 Exiting DOPAMINE MODE');
            dopamineActive = false;
            
            // Remove split screen
            splitContainer.classList.remove('split-active');
            
            // Show original site container
            siteContainer.style.display = 'flex';
            
            // Remove exit button
            const exitBtn = document.querySelector('.dopamine-exit');
            if (exitBtn) {
                exitBtn.remove();
            }
            
            // Clear content section
            contentSection.innerHTML = '';
            
            // Clear localStorage choice to show modal again on next visit
            localStorage.removeItem('dopamine-choice');
            
            console.log('Normal mode restored');
        }
        
        function loadDopamineVideo() {
            const videoSection = document.getElementById('dopamineVideoSection');
            if (!videoSection) return;
            
            videoSection.innerHTML = `
                <div class="video-wrapper">
                    <iframe id="dopamineVideo" 
                            src="https://www.youtube.com/embed/${dopamineVideoId}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&autoplay=0&mute=0&controls=1&rel=0&modestbranding=1"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                    </iframe>
                </div>
            `;
            
            console.log('🎬 Video loaded:', dopamineVideoId);
        }
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dopamineActive) {
                deactivateDopamineMode();
            }
            
            // Secret konami code for instant dopamine: D-O-P-A
            if (e.key.toLowerCase() === 'd' && !dopamineActive) {
                let konamiSequence = 'dopa';
                let currentSequence = '';
                
                const konamiHandler = (event) => {
                    currentSequence += event.key.toLowerCase();
                    if (currentSequence === konamiSequence) {
                        console.log('🎮 KONAMI DOPAMINE ACTIVATED!');
                        localStorage.setItem('dopamine-choice', 'yes');
                        activateDopamineMode();
                        document.removeEventListener('keydown', konamiHandler);
                    } else if (!konamiSequence.startsWith(currentSequence)) {
                        currentSequence = '';
                        document.removeEventListener('keydown', konamiHandler);
                    }
                };
                
                document.addEventListener('keydown', konamiHandler);
            }
        });
        
        // Mobile orientation change handling
        window.addEventListener('orientationchange', () => {
            if (dopamineActive) {
                setTimeout(() => {
                    // Force layout recalculation
                    splitContainer.style.display = 'none';
                    splitContainer.offsetHeight; // Trigger reflow
                    splitContainer.style.display = 'flex';
                }, 100);
            }
        });
        
        // Prevent accidental navigation away in dopamine mode
        window.addEventListener('beforeunload', (e) => {
            if (dopamineActive) {
                e.preventDefault();
                e.returnValue = 'Sei SICURO di voler uscire?';
                return e.returnValue;
            }
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDopamineSystem);
    } else {
        initDopamineSystem();
    }
    
    // Export for debugging
    window.dopamineSystem = {
        activate: () => {
            localStorage.setItem('dopamine-choice', 'yes');
            location.reload();
        },
        deactivate: () => {
            localStorage.removeItem('dopamine-choice');
            location.reload();
        },
        reset: () => {
            localStorage.removeItem('dopamine-choice');
            console.log('Dopamine choice reset - modal will show on next visit');
        }
    };
    
})();