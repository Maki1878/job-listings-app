<template>
  <img :src="setHeader" class="header" />
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  beforeMount() {
    window.addEventListener('resize', this.boundOnResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.boundOnResize);
  },
  computed: {
    setHeader() {
      return this.isMobile
        ? require('@/assets/images/background/bg-header-mobile.svg')
        : require('@/assets/images/background/bg-header-desktop.svg');
    },
    boundOnResize() {
      return this.onResize.bind(this);
    },
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 375) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
};
</script>

<style scoped>
.header {
  background-color: var(--color-primary);
  width: 100%;
  height: 11rem;
  object-fit: cover;
  margin-bottom: 2rem;
}
</style>
