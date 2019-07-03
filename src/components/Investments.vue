<template>
  <ul class="investments">
    <li v-for="{ id, content } in investments" :key="id" class="investment" v-html="content" />
  </ul>
</template>

<script>
export default {
  props: {
    investments: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.investment__name
  color: #000
  font-weight: 700

  a
    color: inherit
</style>

<style lang="stylus" scoped>
$background-color = #ece6d4

.investments
  margin-top: 4rem

.investment
  padding: 1em 1em 2em
  border-radius: 5px
  box-shadow: 1px 1px 4px rgba(#000, 0.4)

  &:nth-child(even)
    background-color: $background-color

  &:nth-child(odd)
    background-color: $background-color - 8%

.investment + .investment
  margin-top: 2rem
</style>
