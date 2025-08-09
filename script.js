// Function to load student profiles
    function loadStudentProfiles() {
        const profilesContainer = document.querySelector('.student-profiles');
        
        if (profilesContainer) {
            // Clear any loading content
            profilesContainer.innerHTML = '';
            
            // Create and append student cards
            students.forEach(student => {
                const studentCard = document.createElement('div');
                studentCard.className = 'student-card';
                
                studentCard.innerHTML = `
                    <img src="${student.image}" alt="${student.name}" class="student-image" onerror="this.src='images/students/default.jpg'">
                    <div class="student-info">
                        <h3 class="student-name">${student.name}</h3>
                        <p class="student-age">${student.age} years old • ${student.grade}</p>
                        <p class="student-bio">${student.bio}</p>
                        <a href="#" class="sponsor-button" data-student="${student.name}">Sponsor ${student.name.split(' ')[0]}</a>
                    </div>
                `;
                
                profilesContainer.appendChild(studentCard);
            });

            // Add event listeners to sponsor buttons
            document.querySelectorAll('.sponsor-button').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const studentName = this.getAttribute('data-student');
                    // You can replace this with your actual sponsorship flow
                    alert(`Thank you for choosing to sponsor ${studentName}! We'll contact you with more details.`);
                });
            });
        }
    }

    // Load student profiles when the page loads
    loadStudentProfiles();

    // You might want to reload students when the sponsor section is opened
    const sponsorHeader = document.querySelector('.project-header[onclick*="sponsor"]');
    if (sponsorHeader) {
        sponsorHeader.addEventListener('click', function() {
            // Small delay to ensure the section is visible before loading
            setTimeout(loadStudentProfiles, 100);
        });
    }
});
// Toggle details modal
document.querySelectorAll('.more-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const studentCard = this.closest('.student-card');
    const modal = document.createElement('div');
    modal.className = 'details-modal';
    
    modal.innerHTML = `
      <div class="modal-content">
        <h3>${studentCard.querySelector('h3').textContent}</h3>
        <div class="detailed-info">
          <p><strong>D.O.B:</strong> 12/05/2011</p>
          <p><strong>Gender:</strong> Female</p>
          <p><strong>Contact:</strong> Guardian: +254 712 345 678</p>
          <p><strong>Reason:</strong> Orphaned, needs support for education</p>
        </div>
        <button class="close-modal">Close</button>
      </div>
    `;
    
    document.body.appendChild(modal);
    modal.querySelector('.close-modal').addEventListener('click', () => {
      modal.remove();
    });
  });
});

// sponsor-students.js
document.addEventListener('DOMContentLoaded', function() {
    // Sample student data (replace with your actual data or API call)
    const students = [
        {
            name: "Sarah Johnson",
            age: 12,
            grade: "6th Grade",
            bio: "Sarah excels in mathematics and wants to become an engineer. She lost both parents in a car accident.",
            image: "images/students/sarah.jpg"
        },
        {
            name: "Michael Chen",
            age: 14,
            grade: "8th Grade",
            bio: "Michael is passionate about science and dreams of becoming a doctor. His family struggles to pay school fees.",
            image: "images/students/michael.jpg"
        },
        {
            name: "Amina Diallo",
            age: 10,
            grade: "4th Grade",
            bio: "Amina loves reading and wants to be a teacher. Her father is unemployed and mother is a street vendor.",
            image: "images/students/amina.jpg"
        },
        {
            name: "David Rodriguez",
            age: 15,
            grade: "10th Grade",
            bio: "David is talented in art and hopes to study architecture. His single mother has three other children to support.",
            image: "images/students/david.jpg"
        }
    ];

// Samsung device detection and optimization
function detectSamsung() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Check for Samsung devices
    const isSamsung = /samsung/i.test(userAgent) || 
                     /SM-|SAMSUNG|GT-|SCH-|SHV-|SHM-/i.test(userAgent);
    
    // Check for Samsung Internet browser
    const isSamsungBrowser = userAgent.match(/SamsungBrowser/i);
    
    if (isSamsung) {
        document.documentElement.classList.add('samsung-device');
        
        // Adjust viewport height for mobile
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        
        // Listen for orientation changes
        window.addEventListener('orientationchange', function() {
            setTimeout(function() {
                const vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px');
            }, 300);
        });
    }
    
    if (isSamsungBrowser) {
        document.documentElement.classList.add('samsung-browser');
        
        // Samsung Internet specific fixes
        document.addEventListener('DOMContentLoaded', function() {
            // Fix for scroll position issues
            if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
            }
            
            // Fix for viewport units
            window.addEventListener('resize', function() {
                const vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px');
            });
        });
    }
}

// Run detection
detectSamsung();