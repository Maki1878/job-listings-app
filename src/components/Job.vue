<template>
  <BaseCard>
    <div class="job-container">
      <div class="job-description">
        <img :src="feedPath" />
        <div class="job-details">
          <div class="job-details-1">
            <p>{{ company }}</p>
            <span v-if="latest">NEW</span>
            <span v-if="featured">FEATURED</span>
          </div>
          <h3 class="job-position">{{ position }}</h3>
          <div class="job-details-2">
            <span>{{ postedAt }}</span>
            <span>&#183;</span>
            <span>{{ contract }}</span>
            <span>&#183;</span>
            <span>{{ location }}</span>
          </div>
        </div>
      </div>
      <div class="job-tags">
        <BaseButton v-for="tag in tags" :key="tag">{{ tag }}</BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<script>
export default {
  props: [
    'path',
    'company',
    'latest',
    'featured',
    'position',
    'postedAt',
    'contract',
    'location',
    'tags',
  ],
  computed: {
    feedPath() {
      return require(`@/assets/images/logos/${this.path}`);
    },
  },
};
</script>

<style scoped>
.job-container {
  padding: 1rem;
  display: flex;
}

.job-description {
  display: flex;

  flex: 1;
}

.job-details {
  display: flex;
  flex-direction: column;
}

.job-details-1 {
  display: flex;
}

.job-tags {
  display: flex;
  gap: 2rem;
  align-items: center;
}
</style>
