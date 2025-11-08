// Water Calculator JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    let currentActivityLevel = 'moderate';
    let dailyWaterNeeds = 0;
    let hourlyIntake = 0;
    let trackingData = {};
    
    // DOM Elements
    const activityButtons = document.querySelectorAll('.activity-btn');
    const calculatorForm = document.getElementById('waterCalculator');
    const resultsSection = document.getElementById('resultsSection');
    const trackingTimeline = document.getElementById('trackingTimeline');
    
    // Set default activity level
    setActivityLevel('moderate');
    
    // Activity level button event listeners
    activityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const level = this.dataset.level;
            setActivityLevel(level);
        });
    });
    
    // Calculator form submit
    calculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateWaterNeeds();
    });
    
    // Set activity level
    function setActivityLevel(level) {
        currentActivityLevel = level;
        
        // Update button states
        activityButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.level === level) {
                button.classList.add('active');
            }
        });
    }
    
    // Calculate water needs
    function calculateWaterNeeds() {
        const weight = parseFloat(document.getElementById('weight').value);
        const age = parseInt(document.getElementById('age').value);
        
        if (!weight || !age) {
            alert('Please enter your weight and age');
            return;
        }
        
        // Base calculation: 35ml per kg of body weight
        let baseWater = weight * 35; // in ml
        
        // Activity level adjustments
        let activityMultiplier = 1;
        switch (currentActivityLevel) {
            case 'light':
                activityMultiplier = 0.9; // 10% less
                break;
            case 'moderate':
                activityMultiplier = 1.0; // normal
                break;
            case 'heavy':
                activityMultiplier = 1.2; // 20% more
                break;
        }
        
        // Age adjustments
        let ageMultiplier = 1;
        if (age > 55) {
            ageMultiplier = 0.9; // 10% less for older adults
        } else if (age < 18) {
            ageMultiplier = 1.1; // 10% more for younger people
        }
        
        // Final calculation
        dailyWaterNeeds = (baseWater * activityMultiplier * ageMultiplier) / 1000; // convert to liters
        hourlyIntake = dailyWaterNeeds / 16; // assuming 16 hours of wake time (6 AM to 10 PM)
        
        // Display results
        displayResults();
        
        // Initialize tracking
        initializeTracking();
    }
    
    // Display results
    function displayResults() {
        const litersResult = document.getElementById('litersResult');
        const glassesResult = document.getElementById('glassesResult');
        
        litersResult.textContent = dailyWaterNeeds.toFixed(1);
        glassesResult.textContent = Math.round((dailyWaterNeeds * 1000) / 250); // 250ml per glass
        
        // Show results section
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Initialize hourly tracking
    function initializeTracking() {
        trackingTimeline.innerHTML = '';
        trackingData = {};
        
        // Create timeline from 6 AM to 10 PM (16 hours)
        const startHour = 6;
        const endHour = 22;
        const totalHours = endHour - startHour;
        const waterPerHour = hourlyIntake;
        const glassesPerHour = waterPerHour / 0.25; // 250ml = 0.25L
        
        for (let i = 0; i <= totalHours; i++) {
            const hour = startHour + i;
            const hourElement = document.createElement('div');
            hourElement.className = 'timeline-hour';
            hourElement.dataset.hour = hour;
            
            const displayHour = formatHour(hour);
            hourElement.textContent = displayHour;
            
            // Add glass count as tooltip
            hourElement.title = `${glassesPerHour.toFixed(1)} glasses`;
            
            // Add click handler
            hourElement.addEventListener('click', function() {
                toggleHourCompletion(hour);
            });
            
            trackingTimeline.appendChild(hourElement);
            trackingData[hour] = false;
        }
        
        // Add info text
        addTrackingInfo(glassesPerHour);
    }
    
    // Format hour for display
    function formatHour(hour) {
        if (hour === 0) return '12AM';
        if (hour < 12) return `${hour}AM`;
        if (hour === 12) return '12PM';
        return `${hour - 12}PM`;
    }
    
    // Toggle hour completion
    function toggleHourCompletion(hour) {
        trackingData[hour] = !trackingData[hour];
        
        const hourElement = document.querySelector(`[data-hour="${hour}"]`);
        if (trackingData[hour]) {
            hourElement.classList.add('completed');
        } else {
            hourElement.classList.remove('completed');
        }
        
        updateProgress();
    }
    
    // Add tracking info
    function addTrackingInfo(glassesPerHour) {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'tracking-info';
        infoDiv.innerHTML = `
            <p><strong>Target per hour:</strong> ${glassesPerHour.toFixed(1)} glasses (${hourlyIntake.toFixed(1)}L)</p>
            <p><strong>Glass size:</strong> 250ml (8.5 fl oz)</p>
        `;
        
        trackingTimeline.parentNode.insertBefore(infoDiv, trackingTimeline.nextSibling);
    }
    
    // Update progress
    function updateProgress() {
        const completedHours = Object.values(trackingData).filter(Boolean).length;
        const totalHours = Object.keys(trackingData).length;
        const progressPercentage = (completedHours / totalHours) * 100;
        
        // You can add a progress bar here if needed
        console.log(`Progress: ${progressPercentage.toFixed(0)}% (${completedHours}/${totalHours} hours)`);
    }
    
    // Alarm system for hourly reminders
    function setupHourlyReminders() {
        // Request notification permission
        if (Notification.permission === 'default') {
            Notification.requestPermission();
        }
        
        // Set up hourly reminders during active hours (6 AM to 10 PM)
        const reminderInterval = setInterval(() => {
            const now = new Date();
            const currentHour = now.getHours();
            
            // Only send reminders between 6 AM and 10 PM
            if (currentHour >= 6 && currentHour <= 22) {
                if (Notification.permission === 'granted' && !trackingData[currentHour]) {
                    sendReminder(currentHour);
                }
            }
        }, 60000); // Check every minute (you can change this to hourly)
        
        // Store interval ID to clear later if needed
        window.reminderInterval = reminderInterval;
    }
    
    // Send reminder notification
    function sendReminder(hour) {
        if (dailyWaterNeeds > 0) {
            const message = `Time to drink water! It's ${formatHour(hour)}. Target: ${hourlyIntake.toFixed(1)}L this hour.`;
            
            new Notification('Hydration Reminder', {
                body: message,
                icon: 'logo.png',
                badge: 'logo.png'
            });
            
            // Also show in-page notification
            showInPageNotification(message);
        }
    }
    
    // Show in-page notification
    function showInPageNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">💧</span>
                <span class="notification-text">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-500);
            color: white;
            padding: 16px;
            border-radius: 12px;
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            max-width: 300px;
            animation: slideInRight 0.3s ease-out;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Add close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
    
    // Initialize the app
    function init() {
        setupHourlyReminders();
        addNotificationStyles();
    }
    
    // Add notification styles
    function addNotificationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .notification-icon {
                font-size: 20px;
            }
            
            .notification-text {
                flex: 1;
                font-size: 14px;
                line-height: 1.4;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 18px;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .notification-close:hover {
                opacity: 0.8;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Handle browser visibility change (pause reminders when tab is not active)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Page is hidden, you might want to pause reminders
            console.log('Page hidden - reminders paused');
        } else {
            // Page is visible, resume reminders
            console.log('Page visible - reminders resumed');
        }
    });
    
    // Initialize the app
    init();
    
    // Add sample data for demo purposes (remove in production)
    function addSampleData() {
        // Pre-fill form with sample data for demonstration
        if (document.getElementById('weight') && !document.getElementById('weight').value) {
            document.getElementById('weight').value = '70';
            document.getElementById('age').value = '30';
        }
    }
    
    // Call sample data function for demo
    addSampleData();
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Initialize mobile menu on all pages
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Export functions for potential external use
    window.DrinkDose = {
        calculateWaterNeeds,
        setActivityLevel,
        getCurrentNeeds: () => ({ dailyWaterNeeds, hourlyIntake, currentActivityLevel })
    };
});

// Service Worker registration for better notifications (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
