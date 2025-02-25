document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const container = document.querySelector(".container");
    const slides = document.getElementsByClassName("slide");
    let slideIndex = 0;

    

    // Hide main content initially
    if (container) {
        container.style.display = "none";
    }

    // Add event listener to start button
    if (startButton) {
        startButton.addEventListener("click", function () {
            const startScreen = document.getElementById("start-screen");
            if (startScreen) {
                console.log("Start button clicked!"); // Debugging
                startScreen.style.display = "none"; // Hide start screen
                container.style.display = "block";  // Show main content
               
            } else {
                console.error("start-screen element not found!");
            }
        });
    }

    function createBalloon() {
        let balloon = document.createElement("img");
        balloon.src = "balloon2.png";
        balloon.className = "balloon";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(balloon);
    
        setTimeout(() => {
            balloon.remove();
        }, 5000);
    }
    
    setInterval(createBalloon, 1000);

    document.addEventListener("DOMContentLoaded", function () {
        let audio;
    
        // Check if audio already exists
        if (!window.audioPlayer) {
            audio = new Audio("./audio/birthday-song.mp3"); // Change path if needed
            audio.loop = true;
            audio.play().catch(err => console.log("Autoplay blocked:", err));
    
            // Store audio in window object to persist across pages
            window.audioPlayer = audio;
    
            // Store in localStorage so it persists when navigating
            localStorage.setItem("musicPlaying", "true");
        } else {
            audio = window.audioPlayer;
        }
    });

    startButton.addEventListener("click", function () {
        let audio = new Audio("WhatsApp Audio 2024-04-07 at 6.38.52 PM.mpeg");
        audio.play().catch(error => console.log("Music play error:", error));
    });
});