<template>
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
  />
</template>

<script>
import Job from './Job.vue';
export default {
  components: {
    Job,
  },

  data() {
    return {
      jobs: [],
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
        console.log(this.jobs);
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
