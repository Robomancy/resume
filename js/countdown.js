// ============================================
// COUNTDOWN TIMER
// ============================================

(function() {
    'use strict';
    
    function initCountdown() {
        // Set target date (30 days from now as example)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 2);
        
        const countdownDisplay = document.getElementById('countdown-display');
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (!countdownDisplay || !daysEl || !hoursEl || !minutesEl || !secondsEl) {
            return;
        }
        
        function padZero(num) {
            return num.toString().padStart(2, '0');
        }
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;
            
            if (distance < 0) {
                daysEl.textContent = '00';
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            daysEl.textContent = padZero(days);
            hoursEl.textContent = padZero(hours);
            minutesEl.textContent = padZero(minutes);
            secondsEl.textContent = padZero(seconds);
        }
        
        // Initial update
        updateCountdown();
        
        // Update every second
        setInterval(updateCountdown, 1000);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCountdown);
    } else {
        initCountdown();
    }
    
})();