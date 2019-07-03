<template>
  <Layout>
    <template #title>
      <span>about partisan</span>
    </template>
    <p>
      Partisan Management Group is a highly successful, early stage venture capital investor in
      medical device and drug delivery companies with an occasional investment in specialty
      pharmaceuticals. Partisan has sought differentiation from other venture groups in four
      distinct ways:
    </p>
    <ol class="list">
      <li class="list-item">
        The funds managed by Partisan are provided entirely by the two principals of the firm.
      </li>
      <li class="list-item">
        Partisan begins by identifying large, unmet medical needs before clinical and investment
        focus by others. Partisan often creates or licenses intellectual property and initially
        forms a wholly owned new company.
      </li>
      <li class="list-item">
        Partisan selects a management team whom the principals strive to treat as partners for the
        duration of the investment. A cooperative working relationship is enhanced, enabling
        management to purchase large amounts of founder's stock.
      </li>
      <li class="list-item">
        Partisan principals use their years of industry experience to integrate a new company's
        operational needs and its investment needs, often acting as senior officers as well as board
        members. Partisan typically provides the founding round of capital and then leads a seed
        round with its network of angel investors or selected venture firms.
      </li>
    </ol>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Us',
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/imports/breakpoints'

.list
  margin-top: 3rem
  list-style-type: lower-roman

.list-item + .list-item
  margin-top: 1rem

@media $breakpoints-min.sm
  .list
    padding: 0 3em

@media $breakpoints-max.sm
  .list
    padding: 0 1em
</style>
