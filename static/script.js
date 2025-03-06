// Initialize particles
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#007AFF'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#007AFF',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.8
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Ripple effect
document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});

// Roblox installation handling
async function getRobloxVersion() {
    const response = await fetch('https://clientsettings.roblox.com/v2/client-version/WindowsPlayer');
    const data = await response.json();
    return data.version;
}

async function downloadRoblox() {
    try {
        const version = await getRobloxVersion();
        const installerUrl = `https://setup.rbxcdn.com/version-${version}-Roblox.exe`;
        
        // Create download link
        const link = document.createElement('a');
        link.href = installerUrl;
        link.download = 'RobloxInstaller.exe';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show version info
        const button = document.getElementById('installButton');
        button.textContent = `Installing Roblox ${version}`;
        setTimeout(() => {
            button.textContent = 'Install Roblox';
        }, 3000);
    } catch (error) {
        console.error('Error downloading Roblox:', error);
        alert('Error downloading Roblox. Please try again or visit Roblox.com directly.');
    }
}

// Install button functionality
document.getElementById('installButton').addEventListener('click', downloadRoblox);
