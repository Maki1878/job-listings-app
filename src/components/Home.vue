<template>
  <div :class="{ addFilters: filtersExist }">
    <Filterbar
      :filters="filters"
      v-if="filtersExist"
      @remove-filter="removeFilter"
      @clear-filters="clearFilters"
    />
    <Job
      v-for="job in filteredJobs"
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
      @add-filter="addFilter"
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
  created() {
    fetch('./data.json', {
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
    addFilter(newFilter) {
      if (this.filters.indexOf(newFilter) !== -1) {
        return;
      }
      this.filters.push(newFilter);
    },
    removeFilter(removedFilter) {
      this.filters = this.filters.filter((filter) => filter !== removedFilter);
    },
    clearFilters() {
      this.filters = [];
    },
  },
  computed: {
    filtersExist() {
      return this.filters.length > 0;
    },
    filteredJobs() {
      if (this.filters.length === 0) {
        return this.jobs;
      }
      return this.jobs.filter((job) => {
        if (this.filters.every((filter) => job.tags.includes(filter))) {
          return true;
        }
        return false;
      });
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
