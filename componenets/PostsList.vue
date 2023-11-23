<template>
  <div>
    <h2>Post List</h2>
    <ul>
      //
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters.getAllPosts;
    },
  },
};
</script>