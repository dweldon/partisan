<template>
  <Layout>
    <template #title>
      <span>partisan principals</span>
    </template>
    <p>
      The principals of Partisan have participated in eighteen medical device startups, of which
      five (Corvita, Novoste, AtriCure, Neuronetics and ZS Pharma) have become public companies;
      twelve (including three of the public companies) have been sold, and six are public or private
      operating companies. Four of the Partisan companies developed cardiovascular devices, three
      have developed drug delivery devices, three have developed specialty pharmaceutical products,
      three have developed minimally invasive surgical instruments, two treat neurological
      conditions, one developed a treatment for renal diseases, one pioneered a new dental implant,
      and one focused on aesthetic medicine. Novoste, AtriCure, and ZS Pharma all achieved market
      valuations exceeding $1 billion. Neuronetics, TriSalus Life Sciences, Enable Injections and
      Ponce de Leon Health could eventually reach the Unicorn Club.
    </p>
    <div class="principal">
      <div class="photo-container">
        <g-image alt="Norman Weldon" src="~/assets/images/norm.jpg" class="photo" />
      </div>
      <div>
        <h2 class="name">Norman Weldon</h2>
        <p>
          Dr. Weldon's background is in economics, technology and general management. He has been
          the CEO of three public companies: CTS Corporation (NYSE CTS), Cordis Corporation (NASDAQ
          CORD) and Corvita Corporation (NASDAQ CVTA). He has been a co-founder of CTS
          Microelectronics, Inc., Corvita Corporation, Novoste Puerto Rico, Inc., Novoste
          Corporation, Enable Medical Corporation, AtriCure, Inc., Medivance, Inc., Neuronetics,
          Inc., and Ponce de Leon Health.
        </p>
      </div>
    </div>
    <div class="principal">
      <div class="photo-container">
        <g-image alt="Karen Cassidy" src="~/assets/images/karen.jpg" class="photo" />
      </div>
      <div class="principal-details">
        <h2 class="name">Karen Cassidy</h2>
        <p>
          Ms. Cassidy's background is in marketing, venture capital and general management. She held
          marketing positions with Johnson &amp; Johnson and with Xerox and venture capital
          positions with Oak Investment Partners and with AEtna Life and Casualty Company. Ms.
          Cassidy has been CEO of Impla-Med, Inc. and Vice President of Business Development for
          Surefire Medical (now TriSalus Life Sciences), Corvita Corporation and Symbiosis
          Corporation. Ms. Cassidy has been a co-founder of Enable Medical Corporation, Medivance,
          Inc. and AtriCure, Inc. Ms. Cassidy plays a major role in recruiting and mentoring
          Partisan CEOs, and manages Partisan's liquidity events.
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Principals',
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/imports/breakpoints'

$photo-margin = 2rem

.principal
  display: flex
  margin-top: (2 * $photo-margin)

.photo-container
  margin-right: $photo-margin
  flex: 0 0 15rem

.photo
  width: 100%
  height: auto

.name
  font-size: 2rem
  margin-bottom: 0.5em

@media $breakpoints-max.sm
  .photo-container
    display: none
</style>
