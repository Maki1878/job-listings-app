<template>
  <div class="filterbar">
    <BaseCard>
      <div class="filter-container">
        <div class="filter-tags">
          <div class="filter-tag" v-for="filter in filters" :key="filter">
            <BaseButton>{{ filter }}</BaseButton>
            <div class="icon-container" @click="removeFilter">
              <img :src="iconPath" class="remove-icon" :alt="filter" />
            </div>
          </div>
        </div>
        <div class="clear-container">
          <span class="clear">Clear</span>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script>
export default {
  props: ['filters'],
  data() {
    return {
      iconPath: require('@/assets/images/icons/icon-remove.svg'),
    };
  },
  methods: {
    removeFilter(event) {
      const filterToRemove = event.target.alt;
      this.$emit('remove-filter', filterToRemove);
    },
  },
};
</script>

<style>
.filterbar {
  margin-bottom: 3.8rem;
}

.filter-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.filter-tags {
  display: flex;
  gap: 2rem;
}

.filter-tag {
  display: flex;
}

.icon-container {
  height: 3rem;
  width: 3rem;
  background-color: var(--color-primary);
  display: grid;
  place-items: center;
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;
}

.icon-container:hover {
  background-color: var(--color-grey-dark);
}

.remove-icon {
  height: 1.3rem;
  width: 1.3rem;
}

.clear-container {
  padding-left: 2rem;
}

.clear-container:hover {
  cursor: pointer;
}

.clear {
  font-size: 1.3rem;
  font-weight: var(--font-bold);
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
}
</style>
