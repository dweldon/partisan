<template>
  <Layout>
    <template #title>
      <span>investment record</span>
    </template>
    <p>
      Partisan has twelve completed investments. Eleven resulted in successful liquidity events, and
      one (RxKinetics) experienced a loss. Our cash-on-cash return to date has been 6.4 times and
      our IRR to date is 60%. Four of the successful investments (Corvita, Novoste, AtriCure, and ZS
      Pharma) were syndicated with other venture firms and were taken public. Three (Renal
      Solutions, RxKinetics, and Liposonix) were syndicated and sold as pre-revenue companies. One
      (Medivance) was syndicated, operated for thirteen years, and built into a substantial and
      profitable company and then sold. Three of the other four (Novoste Puerto Rico, Enable Medical
      and Impla-Med) employed only angel financing. The final company (Symbiosis) was bootstrapped
      with no outside financing.
    </p>
    <Investments :investments="investments" />
  </Layout>
</template>

<page-query>
{
  investments: allInvestment(
    filter: { isComplete: { eq: true } }
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
    title: 'Investment Record',
  },
};
</script>
