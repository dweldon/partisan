<template>
  <Layout>
    <template #title>
      <span>contact information</span>
    </template>
    <address class="address">
      <h2 class="person">Karen Cassidy</h2>
      <span class="u-block">293 Pearl Street</span>
      <span class="u-block">Boulder, CO 80302</span>
      <span class="u-block phone">
        <span class="label">work</span>
        <a href="tel:1-303-444-8983">303-444-8983</a>
      </span>
      <span class="u-block phone phone--last">
        <span class="label">cell</span>
        <a href="tel:1-303-589-0019">303-589-0019</a>
      </span>
      <span class="u-block">
        <span class="label">email</span>
        <span class="email">moc.tmgmnasitrap@ydissacjk</span>
      </span>
    </address>
    <address class="address">
      <h2 class="person">Norman Weldon</h2>
      <span class="u-block">6 Ocean Club Drive</span>
      <span class="u-block">Amelia Island, FL 32034</span>
      <span class="u-block phone">
        <span class="label">work</span>
        <a href="tel:1-904-491-8696">904-491-8696</a>
      </span>
      <span class="u-block phone phone--last">
        <span class="label">cell</span>
        <a href="tel:1-303-506-0696">303-506-0696</a>
      </span>
      <span class="u-block">
        <span class="label">email</span>
        <span class="email">moc.tmgmnasitrap@nodlewrn</span>
      </span>
    </address>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact Us',
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/imports/breakpoints'

.address
  line-height: 1.5
  background-color: #eee
  padding: 1em
  margin: 0 auto
  max-width: 20em
  box-shadow: 1px 1px 4px rgba(#000, 0.2)

.address + .address
  margin-top: 2rem

.person
  color: #555
  font-size: 1.2em
  margin-bottom: 0.75em

.label
  text-transform: capitalize
  &:after
    content: ': '

.email
  direction: rtl
  unicode-bidi: bidi-override

.phone
  margin-top: 0.5em

.phone--last
  margin-bottom: 0.5em

@media $breakpoints-max.sm
  .email
    font-size: 75%
</style>
