const MixinAnimation = {
  mounted() {
    this.animate();
  },

  methods: {
    animate() {
      let outerDiv = this.$el.querySelector("#outer-container");
      let circleOne = this.$el.querySelector("#circle-one");
      let circleTwo = this.$el.querySelector("#circle-two");

      let x1 =
        Math.random() * (outerDiv.offsetWidth / 2 - circleOne.offsetWidth / 2);
      let y1 =
        Math.random() *
        (outerDiv.offsetHeight / 2 - circleOne.offsetHeight / 2);

      let x2 =
        Math.random() * (outerDiv.offsetWidth / 2 - circleTwo.offsetWidth / 2);
      let y2 =
        Math.random() *
        (outerDiv.offsetHeight / 2 - circleTwo.offsetHeight / 2);

      let xSpeed1 = 1;
      let ySpeed1 = 2;

      let xSpeed2 = 2;
      let ySpeed2 = 3;

      function animate() {
        // Update the circle's position
        x1 += xSpeed1;
        y1 += ySpeed1;

        x2 += xSpeed2;
        y2 += ySpeed2;

        // Check for collision with the edges
        if (x1 + circleOne.offsetWidth > outerDiv.offsetWidth || x1 < 0) {
          xSpeed1 *= -1; // Reverse the horizontal direction
        }
        if (y1 + circleOne.offsetHeight > outerDiv.offsetHeight || y1 < 0) {
          ySpeed1 *= -1; // Reverse the vertical direction
        }

        if (x2 + circleTwo.offsetWidth > outerDiv.offsetWidth || x2 < 0) {
          xSpeed2 *= -1; // Reverse the horizontal direction
        }
        if (y2 + circleTwo.offsetHeight > outerDiv.offsetHeight || y2 < 0) {
          ySpeed2 *= -1; // Reverse the vertical direction
        }

        // Check collision
        const dx = x1 - x2;
        const dy = y1 - y2;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < circleOne.offsetWidth / 2 + circleTwo.offsetWidth / 2) {
          const tempXSpeed = xSpeed1;
          const tempYSpeed = ySpeed1;

          xSpeed1 = xSpeed2;
          ySpeed1 = ySpeed2;
          xSpeed2 = tempXSpeed;
          ySpeed2 = tempYSpeed;
        }

        // Apply the updated position to the circle
        circleOne.style.left = x1 + "px";
        circleOne.style.top = y1 + "px";

        circleTwo.style.left = x2 + "px";
        circleTwo.style.top = y2 + "px";

        requestAnimationFrame(animate); // Recursive call for smooth animation
      }

      animate(); // Start the animation
    },
  },
};

export { MixinAnimation };
