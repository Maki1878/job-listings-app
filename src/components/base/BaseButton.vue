<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  padding: 1rem;
  font: inherit;
  background-color: var(--color-grey-tag);
  color: var(--color-primary);
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  height: 3rem;
  font-size: 1.2rem;
  font-weight: var(--font-bold);
}
</style>
