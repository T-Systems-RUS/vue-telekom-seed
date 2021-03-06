<template>
  <article class="vue-telekom">
    <div class="container">
      <div class="get-started">
        <aside class="side-menu">
          <nav class="side-menu-nav">
            <h1 class="title is-4 is-main">vue-telekom</h1>
            <h2 class="title is-5">UI components</h2>
            <ul class="side-menu-list">
              <li v-for="component in UIComponentList">
                <router-link
                  active-class="is-active"
                  exact
                  @click.native="goToMenuItem(component)"
                  :to="{query: {q: component}}">{{ component }}</router-link>
              </li>
            </ul>
          </nav>
        </aside>
        <section class="content">
          <!--dirty hack to allow multiple refs with same key-->
          <template v-for="_i in 1">
            <div class="content-block is-top">
              <h2 class="title is-2 is-main">Get Started</h2>
              <p>Vue-telekom is a collection of Telekom styles and base Vue components. Please refer to
                <a href="https://github.com/T-Systems-RUS/vue-telekom" target="_blank">README</a> for more information on
                how to start using Vue-telekom.
              </p>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.ActionsPane">
              <ActionsPaneBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.Alert">
              <AlertBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.BackToTop">
              <BackToTopBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.Breadcrumbs">
              <BreadcrumbsBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.Checkbox">
              <CheckboxBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.Collapse">
              <CollapseBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.CommonModal">
              <CommonModalBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.ConfirmModal">
              <ConfirmModalBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.Datepicker">
              <DatepickerBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.Dropdown">
              <DropdownBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.FileUploader">
              <FileUploaderBlock @navigate="goToMenuItem($event)"/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.LoadingOverlay">
              <LoadingOverlayBlock @navigate="goToMenuItem($event)"/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.Pagination">
              <PaginationBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.RadioButton">
              <RadioButtonBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.Selectbox">
              <SelectboxBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.SimpleFileList">
              <SimpleFileListBlock @navigate="goToMenuItem($event)"/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.SimpleFileUploader">
              <SimpleFileUploaderBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.Slider">
              <SliderBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.Tabs">
              <TabsBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.ToggleVisibleField">
              <ToggleVisibleFieldBlock/>
            </div>
            <div
              ref="content"
              class="content-block-wrap"
              :id="UIComponent.Tooltip">
              <TooltipBlock/>
            </div>
          </template>
        </section>
      </div>
    </div>
    <BackToTop/>
  </article>
</template>

<script lang="ts">
  import Vue from 'vue';
  import BackToTop from '../../common/vue-telekom/components/BackToTop/BackToTop.vue';
  import {UIComponent, UIComponentList} from './vueTelekom';
  import ActionsPaneBlock from './contentBlocks/ActionsPaneBlock/ActionsPaneBlock.vue';
  import AlertBlock from './contentBlocks/AlertBlock/AlertBlock.vue';
  import BackToTopBlock from './contentBlocks/BackToTopBlock/BackToTopBlock.vue';
  import BreadcrumbsBlock from './contentBlocks/BreadcrumbsBlock/BreadcrumbsBlock.vue';
  import CheckboxBlock from './contentBlocks/CheckboxBlock/CheckboxBlock.vue';
  import CollapseBlock from './contentBlocks/CollapseBlock/CollapseBlock.vue';
  import CommonModalBlock from './contentBlocks/CommonModalBlock/CommonModalBlock.vue';
  import ConfirmModalBlock from './contentBlocks/ConfirmModalBlock/ConfirmModalBlock.vue';
  import DatepickerBlock from './contentBlocks/DatepickerBlock/DatepickerBlock.vue';
  import DropdownBlock from './contentBlocks/DropdownBlock/DropdownBlock.vue';
  import FileUploaderBlock from './contentBlocks/FileUploaderBlock/FileUploaderBlock.vue';
  import LoadingOverlayBlock from './contentBlocks/LoadingOverlayBlock/LoadingOverlayBlock.vue';
  import PaginationBlock from './contentBlocks/PaginationBlock/PaginationBlock.vue';
  import RadioButtonBlock from './contentBlocks/RadioButtonBlock/RadioButtonBlock.vue';
  import SelectboxBlock from './contentBlocks/SelectboxBlock/SelectboxBlock.vue';
  import SimpleFileListBlock from './contentBlocks/SimpleFileListBlock/SimpleFileListBlock.vue';
  import SimpleFileUploaderBlock from './contentBlocks/SimpleFileUploaderBlock/SimpleFileUploaderBlock.vue';
  import SliderBlock from './contentBlocks/SliderBlock/SliderBlock.vue';
  import TabsBlock from './contentBlocks/TabsBlock/TabsBlock.vue';
  import ToggleVisibleFieldBlock from './contentBlocks/ToggleVisibleFieldBlock/ToggleVisibleFieldBlock.vue';
  import TooltipBlock from './contentBlocks/TooltipBlock/TooltipBlock.vue';

  const SCROLL_DURATION = 200;
  const SCROLL_INTERVAL = 5;
  const TOP_GAP = 100;

  export default Vue.extend({
    components: {
      BackToTop,
      ActionsPaneBlock,
      AlertBlock,
      BackToTopBlock,
      BreadcrumbsBlock,
      CheckboxBlock,
      CollapseBlock,
      CommonModalBlock,
      ConfirmModalBlock,
      DatepickerBlock,
      DropdownBlock,
      FileUploaderBlock,
      LoadingOverlayBlock,
      PaginationBlock,
      RadioButtonBlock,
      SelectboxBlock,
      SimpleFileListBlock,
      SimpleFileUploaderBlock,
      SliderBlock,
      TabsBlock,
      ToggleVisibleFieldBlock,
      TooltipBlock
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    mounted() {
      this.goToMenuItem(this.$route.query.q);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    data() {
      return {
        UIComponentList,
        UIComponent,
        timer: 0
      };
    },
    methods: {
      handleScroll() {
        if (!this.timer) {
          const contentBlocks = this.$refs.content as HTMLElement[];
          const visibleBlock: HTMLElement = contentBlocks.filter((block: HTMLElement) =>
            this.isElementVisible(block))[0];
          if (visibleBlock && visibleBlock.id && this.$route.query.q !== visibleBlock.id) {
            this.$router.push({query: {q: visibleBlock.id}});
          }
        }
      },
      isElementVisible(elem: HTMLElement): boolean {
        const coords = elem.getBoundingClientRect();
        return coords.top >= 0 ? coords.top < TOP_GAP : coords.bottom > TOP_GAP;
      },
      goToMenuItem(elemId: string) {
        const elem = this.getContentElemById(elemId);
        if (elem) {
          this.scrollToElem(elem);
        }
      },
      scrollToElem(elem: HTMLElement) {
        let elemTop = elem.getBoundingClientRect().top;
        const step = elemTop / (SCROLL_DURATION / SCROLL_INTERVAL);

        this.timer = window.setInterval(() => {
          elemTop = elem.getBoundingClientRect().top;

          if (Math.abs(elemTop) < Math.abs(step)) {
            document.documentElement.scrollTop += elemTop;
            this.clearTimer();
          } else if (window.pageYOffset + window.innerHeight + step > document.documentElement.offsetHeight) {
            this.clearTimer();
          } else {
            document.documentElement.scrollTop += step;
          }
        }, SCROLL_INTERVAL);
      },
      getContentElemById(elemId: string): HTMLElement | undefined {
        return (this.$refs.content as HTMLElement[]).filter((block: HTMLElement) => block.id === elemId)[0];
      },
      clearTimer() {
        window.clearInterval(this.timer);
        this.timer = 0;
      }
    }
  });

</script>

<style lang="scss" scoped>
  @import './contentBlocks/contentBlocks';
  @import '../../common/vue-telekom/styles/base/typography';

  .vue-telekom {
    padding: 0 $building-unit;

    .container {
      min-width: $container-max-size;
    }
  }

  .get-started {
    display: flex;

    .side-menu {
      @include custom-scroll;
      flex-shrink: 0;
      overflow: auto;
      height: 100vh;
      padding: $building-unit-x3 $building-unit;
      padding-left: 0;
      width: 25%;
      box-shadow: 3px 0 2px -2px $gray-220;
      position: sticky;
      top: 0;

      .title {
        margin-bottom: $building-unit;
        text-transform: uppercase;
        font-weight: $font-weight-ultra;

        &.is-main {
          margin-bottom: $building-unit-x2;
        }
      }

      ul {
        margin-bottom: $building-unit-x2;
      }

      li {
        a {
          @include font-size(7);
          display: block;
          padding: $building-unit-x0_25 $building-unit;
          border-radius: $telekom-radius;
          transition: background-color $transition-default, color $transition-default;
          cursor: pointer;
          color: inherit;
          text-decoration: none;

          &:hover {
            color: $blue;
          }

          &.is-active {
            background-color: $magenta;
            color: $white;
            font-weight: $font-weight-bold;
          }
        }
      }
    }

    .content {
      width: 75%;
      padding: $building-unit-x3 0 ($building-unit-x5 * 2);
      padding-left: $building-unit-x2;
    }
  }
</style>
