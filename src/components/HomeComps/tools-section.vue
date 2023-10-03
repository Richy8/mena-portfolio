<template>
  <div class="tools-section">
    <!-- META TEXT -->
    <div class="page-meta-text">COMMONLY USED TECHNOLOGIES</div>

    <div class="toolset">
      <div class="toolset-title">Languages, Frameworks & Databases</div>
      <div class="tool-wrapper">
        <div class="tool-pill">
          <img :src="mxStackImg('python.png')" alt="python" />
          <div class="text">Python</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('typescript.png')" alt="typescript" />
          <div class="text">Typescript</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('php.png')" alt="php" />
          <div class="text">PHP</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('nodejs.png')" alt="nodejs" />
          <div class="text">Node Js</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('vuejs.png')" alt="vuejs" />
          <div>Vue Js</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('reactjs.png')" alt="reactjs" />
          <div>React Js</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('reactjs.png')" alt="reactnative" />
          <div>React Native</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('angular.png')" alt="angular" />
          <div>Angular</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('graphql.png')" alt="graphql" />
          <div>GraphQl</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('mysql.png')" alt="mysql" />
          <div>MySQL</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('postgresql.png')" alt="postgresql" />
          <div>PostgreSQL</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('mongodb.png')" alt="mongodb" />
          <div>MongoDB</div>
        </div>
      </div>
    </div>

    <div class="toolset">
      <div class="toolset-title">Other Tools</div>
      <div class="tool-wrapper">
        <div class="tool-pill">
          <img :src="mxStackImg('figma.png')" alt="figma" />
          <div>Figma</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('photoshop.png')" alt="photoshop" />
          <div>Photoshop</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('postman.png')" alt="postman" />
          <div>Postman</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('git.png')" alt="git" />
          <div>Git VCS</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('docker.png')" alt="docker" />
          <div>Docker</div>
        </div>

        <div class="tool-pill">
          <img :src="mxStackImg('redis.png')" alt="redis" />
          <div>Redis</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.tools-section {
  @include breakpoint-down(md) {
    margin-top: toRem(90);
  }

  @include breakpoint-down(xs) {
    margin-top: toRem(82);
  }

  .page-meta-text {
    margin-bottom: toRem(55);
  }

  .toolset {
    border: toRem(1.25) solid rgba(255, 255, 255, 0.145);
    background: rgba(darken($brand-light-black, 2%), 0.25);
    box-shadow: 0 toRem(4) toRem(30) rgba(27, 27, 27, 0.1);
    padding: toRem(24) toRem(20);
    backdrop-filter: blur(5px);
    border-radius: toRem(12);
    position: relative;
    margin-bottom: toRem(40);

    @include breakpoint-down(md) {
      margin-bottom: toRem(60);
    }

    @include breakpoint-down(xs) {
      padding: toRem(20) toRem(16);
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    .toolset-title {
      border: toRem(1.25) solid rgba(255, 255, 255, 0.145);
      font-family: "Eaves-SemiBold";
      padding: toRem(6) toRem(17);
      border-radius: toRem(20);
      background: #1f2021;
      font-size: toRem(16);
      color: $brand-white;
      position: absolute;
      top: toRem(-18);
      left: toRem(20);

      @include breakpoint-down(md) {
        font-size: toRem(16.75);
      }

      @include breakpoint-down(xs) {
        font-size: toRem(16.5);
        left: toRem(16);
      }
    }

    .tool-wrapper {
      @include flex-row-wrap("flex-start", "center");
      margin-top: toRem(14);
      column-gap: toRem(10);
      row-gap: toRem(12);

      @include breakpoint-down(md) {
        margin-top: toRem(16);
        column-gap: toRem(12);
        row-gap: toRem(14.5);
      }

      .tool-pill {
        border: toRem(1.25) solid rgba(255, 255, 255, 0.145);
        @include flex-row-wrap("center", "center");
        background: rgba($brand-yellow, 0.04);
        padding: toRem(4) toRem(14);
        font-family: "Eaves-Bold";
        border-radius: toRem(20);
        font-size: toRem(15.5);
        color: $brand-off-grey;

        @include breakpoint-down(md) {
          font-size: toRem(16);
        }

        @include breakpoint-down(xs) {
          font-size: toRem(15.75);
        }

        img {
          margin: 0 toRem(4) 0 toRem(-3);
          height: auto;
          width: 20px;
        }

        .text {
          position: relative;
          top: toRem(2);
        }
      }
    }
  }
}
</style>
