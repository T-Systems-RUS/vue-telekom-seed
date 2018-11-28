export const sliderCodeExample = `<template>
  <div class="example-list">
    <div class="example-item">
      <Slider class="example-slider">
        <Slide>
          <div class="slide is-1">
            <p class="title is-3">Slide 1</p>
          </div>
        </Slide>
        <Slide>
          <div class="slide is-2">
            <p class="title is-3">Slide 2</p>
          </div>
        </Slide>
        <Slide>
          <div class="slide is-3">
            <p class="title is-3">Slide 3</p>
          </div>
        </Slide>
      </Slider>
    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import Slider from '../../../../../common/vue-telekom/components/Slider/Slider.vue';
  import Slide from '../../../../../common/vue-telekom/components/Slider/Slide/Slide.vue';

  export default Vue.extend({
    components: {
      Slider,
      Slide
    }
  });
</script>

<style scoped lang="scss">
  @import '../../contentBlocks';

  /deep/ .slider-controls {
    margin-top: $building-unit;
  }

  .slide {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: $gray-248 center center / cover no-repeat;

    p {
      color: $white;
      text-transform: uppercase;
      font-weight: $font-weight-ultra;
    }

    &.is-1 {
      background-image: url('./assets/slide1.jpg');
    }
    &.is-2 {
      background-image: url('./assets/slide2.jpg');
    }
    &.is-3 {
      background-image: url('./assets/slide3.jpg');
    }
  }
</style>`;
