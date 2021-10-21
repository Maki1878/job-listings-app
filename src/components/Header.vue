<template>
  <img :src="imgPath" class="header" />
</template>

<script>
export default {
  data() {
    return {
      imgPath: require('@/assets/images/background/bg-header-desktop.svg'),
    };
  },
};
</script>

<style scoped>
.header {
  background-color: var(--color-primary);
  width: 144rem;
  height: 11rem;
  object-fit: cover;
}
</style>
