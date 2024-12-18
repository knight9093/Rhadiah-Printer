const snowContainer = document.getElementById('snow-container');
const snowflakeSymbols = ['❄', '❅', '❆', '✻']; // Array of snowflake symbols

// Function to create a snowflake
function createSnowflake() {
  const snowflake = document.createElement('div'); // Create a snowflake element
  snowflake.className = 'snowflake';
  snowflake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)]; // Random symbol

  // Randomize size, position, and animation durations
  const size = Math.random() * 20 + 10; // Size between 10px and 30px
  const startX = Math.random() * window.innerWidth; // Random horizontal position
  const fallDuration = Math.random() * 5 + 5; // Fall duration between 5–10 seconds
  const swayRotateDuration = Math.random() * 2 + 3; // Combined sway and rotation duration (3–5 seconds)

  // Apply styles to the snowflake
  Object.assign(snowflake.style, {
    fontSize: `${size}px`, // Set font size
    left: `${startX}px`, // Set initial horizontal position
    animationDuration: `${fallDuration}s, ${swayRotateDuration}s`, // Set animation durations
  });

  snowContainer.appendChild(snowflake); // Add snowflake to the container

  // Remove the snowflake after it finishes falling
  setTimeout(() => snowflake.remove(), fallDuration * 1000);
}

// Generate snowflakes at regular intervals
setInterval(createSnowflake, 100);
