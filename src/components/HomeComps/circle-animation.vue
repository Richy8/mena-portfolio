<template>
  <div class="circle-animation w-100 h-100 position-absolute container">
    <div class="inner-area w-100 position-relative" id="innerArea">
      <!-- <canvas ref="myCanvas" style="border: 0.5px solid white"></canvas> -->

      <!-- CIRCLE -->
      <div class="circle circle-one"></div>
      <div class="circle circle-two"></div>
      <div class="circle circle-three"></div>
      <div class="circle circle-four"></div>

      <!-- STAR -->
      <!-- <div class="star position-absolute"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "circleAnimation",

  data() {
    return {
      canvas: null,
      context: null,

      one: {
        vx: 3,
        vy: 3,
        r: 20,
        stroke: 10,
        color: "#F23333",
      },

      two: {
        vx: 3,
        vy: 3,
        r: 18,
        stroke: 13,
        color: "#e7d002",
      },

      three: {
        vx: 3,
        vy: 3,
        r: 15,
        stroke: 8,
        color: "#50C1A2",
      },

      four: {
        vx: 4,
        vy: 4,
        r: 10,
        stroke: 6,
        color: "#E4E4E4",
      },
    };
  },

  mounted() {
    // this.initiateCanvas();
    // this.positionCircle();
    // window.addEventListener("resize", this.resizeCanvasArea);
  },

  beforeDestroy() {
    // window.removeEventListener("resize", this.resizeCanvasArea);
  },

  methods: {
    randomPosition(max, min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    initiateCanvas() {
      this.canvas = this.$refs.myCanvas;
      this.context = this.canvas.getContext("2d");
      this.resizeCanvasArea();
    },

    resizeCanvasArea() {
      this.$refs.myCanvas.width = this.$refs.myCanvas.parentElement.clientWidth;
      this.$refs.myCanvas.height =
        this.$refs.myCanvas.parentElement.clientHeight;
    },

    drawCircle(circle) {
      let parent = this.$refs.myCanvas.parentElement;

      this.context.clearRect(0, 0, parent.clientWidth, parent.clientHeight);

      let x = this.randomPosition(parent.clientWidth - 50, 50);
      let y = this.randomPosition(parent.clientHeight - 50, 50);

      if (x > parent.clientWidth - circle.r || x < circle.r)
        circle.vx = -circle.vx;

      if (y > parent.clientHeight - circle.r || x < circle.r)
        circle.vy = -circle.vy;

      x += circle.vx;
      y += circle.vy;

      this.context.beginPath();
      this.context.arc(x, y, circle.r, 0, 2 * Math.PI, false);
      this.context.lineWidth = circle.stroke;
      this.context.strokeStyle = circle.color;
      this.context.stroke();
    },

    positionCircle() {
      //   this.drawCircle(this.one);
      //   this.drawCircle(this.two);
      //   this.drawCircle(this.three);
      //   this.drawCircle(this.four);

      setInterval(() => this.drawCircle(this.one), 100);
      setInterval(() => this.drawCircle(this.two), 100);
      setInterval(() => this.drawCircle(this.three), 100);
      setInterval(() => this.drawCircle(this.four), 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.circle-animation {
  @include flex-column-center;
  top: 0;

  .inner-area {
    position: relative;
    height: 78%;

    .circle {
      position: absolute;
      //   animation: move-up 25s linear infinite;

      &-one {
        border: toRem(10) solid rgba($brand-blue, 0.75);
        @include square-shape(40);
        border-radius: toRem(15);
        top: 8%;
        left: 61%;
      }

      &-two {
        border: toRem(10) solid rgba($brand-yellow, 0.85);
        @include square-shape(40);
        border-radius: toRem(15);
        top: 51%;
        left: 16%;
      }

      &-three {
        border: toRem(9) solid rgba(#42eadd, 0.7);
        @include square-shape(35);
        border-radius: toRem(14);
        top: 80%;
        left: 40%;
      }

      &-four {
        border: toRem(7) solid #b1624e;
        @include square-shape(26);
        border-radius: toRem(10);
        top: 25%;
        left: 30%;
      }
    }

    .star {
      top: 42%;
      left: 42%;
      width: toRem(30);
      height: toRem(30);
      background: rgba(#f2edd7ff, 0.85);
      -webkit-clip-path: polygon(
        50% 0%,
        63% 38%,
        100% 38%,
        69% 59%,
        82% 100%,
        50% 75%,
        18% 100%,
        31% 59%,
        0% 38%,
        37% 38%
      );
      clip-path: polygon(
        50% 0%,
        63% 38%,
        100% 38%,
        69% 59%,
        82% 100%,
        50% 75%,
        18% 100%,
        31% 59%,
        0% 38%,
        37% 38%
      );
    }
  }
}

@keyframes move-up {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(5000deg);
  }
}
</style>