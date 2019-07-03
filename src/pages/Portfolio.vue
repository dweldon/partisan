<template>
  <Layout>
    <template #title>
      <span>current investment portfolio</span>
    </template>
    <p>
      Partisan has investments in one public and five private companies at present. Investments in
      current portfolio companies have tended to be larger than in earlier companies due to the
      shortage of healthcare venture capital in the past several years. Cash-on-cash returns are
      lower when Partisan must invest in later stage financings instead of concentrating on seed and
      Series A rounds as in the past.
    </p>
    <Investments :investments="investments" />
  </Layout>
</template>

<page-query>
{
  investments: allInvestment(
    filter: { isComplete: { eq: false } }
    sortBy: "rank"
    order: ASC
  ) {
    edges {
      node {
        ... on Investment {
          id
          content
        }
      }
    }
  }
}
</page-query>

<script>
import Investments from '~/components/Investments.vue';

export default {
  components: { Investments },
  computed: {
    investments() {
      return this.$page.investments.edges.map(e => e.node);
    },
  },
  metaInfo: {
    title: 'Current Portfolio',
  },
};
</script>
