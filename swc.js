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


$(document).ready(function() {	

		var id = '#dialog';
	
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		
		//transition effect		
		$('#mask').fadeIn(500);	
		$('#mask').fadeTo("slow",0.9);	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
	
		//transition effect
		$(id).fadeIn(2000); 	
	
	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
	});		
	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});		
	
});
