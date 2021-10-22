<template>
  <div :class="{ addFilters: filtersExist }">
    <Filterbar
      :filters="filters"
      v-if="filtersExist"
      @remove-filter="removeFilter"
      @clear-filters="clearFilters"
    />
    <Job
      v-for="job in jobs"
      :key="job.id"
      :path="job.path"
      :company="job.company"
      :latest="job.new"
      :featured="job.featured"
      :position="job.position"
      :postedAt="job.postedAt"
      :contract="job.contract"
      :location="job.location"
      :tags="job.tags"
      @add-filter="updateFilters"
    />
  </div>
</template>

<script>
import Job from './Job.vue';
import Filterbar from './Filterbar.vue';
export default {
  components: {
    Job,
    Filterbar,
  },

  data() {
    return {
      jobs: [],
      filters: [],
    };
  },
  mounted() {
    fetch('../data.json', {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          let path = item.logo.split('/')[2];
          item.path = path;
          let tags = [item.role, item.level, ...item.languages];
          item.tags = tags;
        });
        this.jobs = data;
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    updateFilters(newFilter) {
      this.filters.push(newFilter);
    },
    removeFilter(filter) {
      this.filters = this.filters.filter((tag) => tag !== filter);
    },
    clearFilters() {
      this.filters = [];
    },
  },
  computed: {
    filtersExist() {
      return this.filters.length > 0;
    },
  },
};
</script>

<style>
.addFilters {
  position: relative;
  top: -8.3rem;
}
</style>
