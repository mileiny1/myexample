// JavaScript Document
function dropdown() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}

 <script>
        const box = document.getElementById('animateBox');
        let position = 0;
        let direction = 1;

        function animateBox() {
            // Move the box horizontally across the screen
            position += 2 * direction;
            box.style.left = position + 'px';

            // Reverse direction when the box reaches the edges of the screen
            if (position >= window.innerWidth - 100 || position <= 0) {
                direction *= -1;
                box.style.backgroundColor = direction === 1 ? 'blue' : 'green'; // Change color
            }

            requestAnimationFrame(animateBox); // Repeat animation on the next frame
        }

        // Start the animation when the page loads
        animateBox();
    </script>