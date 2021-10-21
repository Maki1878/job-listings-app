<template>
  <BaseCard>
    <div class="job-container">
      <div class="job-description">
        <img :src="feedPath" />
        <div class="job-details">
          <div class="job-details-1">
            <p class="company">{{ company }}</p>
            <span v-if="latest" class="new-job">NEW!</span>
            <span v-if="featured" class="job-featured">FEATURED</span>
          </div>
          <h4 class="job-position">{{ position }}</h4>
          <div class="job-details-2">
            <span>{{ postedAt }}</span>
            <div class="dot"></div>
            <span>{{ contract }}</span>
            <div class="dot"></div>
            <span>{{ location }}</span>
          </div>
        </div>
      </div>
      <div class="job-tags">
        <BaseButton @click="setFilter" v-for="tag in tags" :key="tag" :value="tag">{{
          tag
        }}</BaseButton>
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
  methods: {
    setFilter(event) {
      const newFilter = event.target.value;
      this.$emit('add-filter', newFilter);
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
  gap: 2rem;
}

.job-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.job-details-1 {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.company {
  color: var(--color-primary);
  font-weight: var(--font-bold);
  font-size: 1.3rem;
}

.new-job {
  padding: 0.3rem 0.7rem;
  color: white;
  background-color: var(--color-primary);
  text-transform: uppercase;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: var(--font-bold);
  padding-top: 0.5rem;
}

.job-featured {
  padding: 0.3rem 0.7rem;
  color: white;
  background-color: var(--color-grey-dark);
  text-transform: uppercase;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: var(--font-bold);
  padding-top: 0.5rem;
  margin-left: -1rem;
}

.job-position {
  color: var(--color-grey-dark);
  transition: all 0.2s;
}

.job-position:hover {
  cursor: pointer;
  color: var(--color-primary);
}

.job-details-2 {
  display: flex;
  gap: 1rem;
  color: var(--color-grey);
  font-size: 1.3rem;
  align-items: center;
}

.dot {
  height: 0.35rem;
  width: 0.35rem;
  background-color: var(--color-grey);
  border-radius: 50%;
}

.job-tags {
  display: flex;
  gap: 2rem;
  align-items: center;
}
</style>
