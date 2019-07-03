<template>
  <Layout>
    <template #title>
      <span>partisan management group</span>
    </template>
    <g-image
      alt="Rock formations and pine trees near the partisan office in Colorado"
      src="~/assets/images/rocks.jpg"
      width="300"
      height="300"
      class="main-image u-block u-centered"
    />
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
};
</script>

<style lang="stylus" scoped>
.main-image
  max-width: 100%
  margin-top: 5rem
  box-shadow: 4px 4px 5px rgba(#000, 0.5)
</style>
