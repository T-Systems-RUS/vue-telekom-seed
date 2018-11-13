<template>
  <div
    :class="{ 'is-fixed': scrolled }"
    class="header">
    <div class="header-bar brand-bar">
      <div class="container">
        <div class="header-bar-inner">
          <img src="../assets/deutsche-telekom-logo.svg">
          <strong class="is-pulled-right is-size-7 is-uppercase is-marginless">
            Life is for sharing.
          </strong>
        </div>
      </div>
    </div>
    <div class="header-bar-top"/>
    <div class="header-bar nav-bar">
      <div class="container">
        <div class="header-bar-inner">
          <div class="title is-5 is-uppercase is-marginless login-left">
            <span class="is-hidden-mobile">Some project name</span>
            <span class="is-hidden-tablet is-hidden-desktop">Project short</span>
            <a class="title is-5 is-medium is-capitalized is-marginless">Some nav</a>
            <a class="title is-5 is-medium is-capitalized">Other nav</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  const BRANDBAR_HEIGHT = 80;

  export default Vue.extend({
    data() {
      return {
        scrolled: false
      };
    },
    methods: {
      handleScroll() {
        this.scrolled = window.pageYOffset > BRANDBAR_HEIGHT;
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  });
</script>

<style lang="scss" scoped>
  @import '../../../common/vue-telekom/styles/base/variables';
  @import '~bulma/sass/utilities/initial-variables';
  @import '~bulma/sass/utilities/derived-variables';
  @import '~bulma/sass/utilities/mixins';
  $close-position-top: $building-unit;
  $close-position-right: 224px;
  $close-size: 2 * $building-unit;
  $nav-bar-height: 82px;
  $nav-bar-offset: $nav-bar-height;
  $header-bar-padding: $building-unit-x2;
  $header-bar-height: 80px;
  $header-height: $header-bar-height * 2;
  $nav-bar-padding-top: 21px;

  .header {
    z-index: 100;

    .header-bar-top {
      width: 100%;
      height: 4px;
      background-color: $magenta;
    }

    &.is-fixed {
      margin-bottom: $nav-bar-offset;

      .nav-bar {
        position: fixed;
        top: 4px;
        left: 0;
        width: 100%;
      }

      .header-bar-top {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
      }

      .loading-state-overlay {
        top: 4px;
      }
    }

    .header-bar {
      background-color: $white;
      padding: $header-bar-padding;
      height: $header-bar-height;

      .header-icon {
        width: $building-unit-x2;
        height: $building-unit-x2;
      }

      strong {
        font-weight: $font-weight-ultra;
        padding-top: $building-unit-x0_5;
        position: relative;
      }

      &.brand-bar {
        background-color: $magenta;
        color: $white;

        strong {
          color: $white;
        }
      }

      &.nav-bar {
        padding-top: $nav-bar-padding-top;
        height: $nav-bar-height;
        border-bottom: 1px solid $gray-220;
      }
    }

    .header-bar-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .header-icon-container {
        display: flex;
        justify-content: space-around;
        align-items: center;

        img {
          margin-right: 10px;
        }
      }

      .login-left {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .language-select {
      width: auto;
    }

    .progress-bar-animation {
      animation-name: move-progress-bar;
      animation-duration: 2.5s;
      animation-fill-mode: forwards;
    }

    .loading-state-overlay {
      position: fixed;
      height: 100%;
      width: 100%;
      background-color: $white;
      opacity: 0.6;
      z-index: 1000;
    }
  }

  @keyframes move-progress-bar {
    from {
      width: 10%;
    }
    to {
      width: 90%;
    }
  }

</style>
