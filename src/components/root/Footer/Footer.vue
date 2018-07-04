<template>
  <footer class="footer">
    <div class="container">
      <div class="inner">
        <div class="content has-text-centered">
          <div class="footer-menu">
            <span>Imprint</span>
            <span>Contact</span>
            <span>FAQ</span>
            <span>Privacy Policy</span>
          </div>
          <div class="footer-logo-copy">
            <span class="logo">
              <img src="../assets/deutsche-telekom-logo.svg">
            </span>
            <span class="copyright">© 2018 Deutsche Telekom AG</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang='scss' scoped>
  @import '../../../common/vue-telekom/styles/base/variables';
  @import '~bulma/sass/utilities/initial-variables';

  $footer-bar-height: 66px;

  $footer-background-color: $gray-38;
  $footer-vertical-padding-desktop: 18px;
  $footer-padding-desktop: $footer-vertical-padding-desktop $building-unit;
  $footer-padding-mobile: $building-unit-x1_5 $building-unit;
  $footer-content-height-desktop: $footer-bar-height - $footer-vertical-padding-desktop * 2;
  $footer-content-height-mobile: $building-unit-x3;
  $footer-menu-margin-bottom-mobile: $building-unit-x2;
  $logo-height-desktop: $footer-content-height-desktop;
  $logo-height-mobile: $footer-content-height-mobile;
  $menu-item-padding-mobile: 0 21px;

  @import '~bulma/sass/utilities/derived-variables';
  @import '~bulma/sass/layout/footer';
  @import '~bulma/sass/utilities/mixins';

  .footer {
    height: $footer-bar-height;
    padding: $footer-padding-desktop;
    color: $white;

    @include mobile {
      padding: $footer-padding-mobile;
      height: auto;
    }

    .content {
      position: relative;
    }

    .footer-menu {
      display: flex;
      line-height: $footer-content-height-desktop;
      justify-content: center;

      @include mobile {
        flex-wrap: wrap;
        margin-bottom: $footer-menu-margin-bottom-mobile;
        line-height: $footer-content-height-mobile;
      }

      span {
        padding: 0 $building-unit;

        @include mobile {
          padding: $menu-item-padding-mobile
        }
      }
    }

    .footer-logo-copy {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      display: flex;
      justify-content: space-between;

      @include mobile {
        position: static;
      }
    }

    .logo {
      img {
        display: table;
        height: $logo-height-desktop;
        width: auto;

        @include mobile {
          height: $logo-height-mobile;
        }
      }
    }

    .copyright {
      right: 0;
      line-height: $footer-content-height-desktop;

      @include mobile {
        line-height: $footer-content-height-mobile;
      }
    }
  }
</style>

