<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border-radius: 6px;
  box-shadow: 0 2px 10px var(--color-grey);
  padding: 2rem;
  margin: 2.3rem auto;
  max-width: 80%;
  background-color: white;
}

@media (max-width: 67em) {
  .card {
    width: 60%;
    border-radius: 5px;
  }
}

@media (max-width: 39em) {
  .card {
    margin: 5rem auto;
    width: 95%;
    padding: 1.5rem;
    border-radius: 5px;
  }
}
</style>
