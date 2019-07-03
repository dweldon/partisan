<template>
  <div class="layout">
    <header class="header">
      <nav>
        <ul class="links-list">
          <li class="link-item"><g-link class="link" to="/">home</g-link></li>
          <li class="link-item"><g-link class="link" to="/about">about</g-link></li>
          <li class="link-item"><g-link class="link" to="/principals">principals</g-link></li>
          <li class="link-item"><g-link class="link" to="/record">record</g-link></li>
          <li class="link-item"><g-link class="link" to="/portfolio">portfolio</g-link></li>
          <li class="link-item"><g-link class="link" to="/contact">contact</g-link></li>
        </ul>
      </nav>
    </header>
    <main class="main">
      <div class="main-inner u-centered">
        <h1 class="title u-capitalize u-centered-text">
          <slot name="title"></slot>
        </h1>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </main>
    <footer class="footer u-capitalize u-centered-text">
      <span>partisan management group © {{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/css/imports/breakpoints'

$header-footer-color = #aaa
$header-footer-background-color = #29331a

.layout
  height: 100%
  display: flex
  flex-direction: column

.header
  background-color: $header-footer-background-color
  flex: none
  display: flex
  justify-content: center

.links-list
  display: flex
  flex-wrap: wrap

.link
  display: block
  color: $header-footer-color
  font-size: 2rem
  text-transform: capitalize
  text-decoration: none
  padding: 1em

  &:hover
    color: #fff

  &.active--exact
    color: #fff
    text-decoration: underline

.title
  font-size: 4rem
  padding: 1em 0

.main
  flex: 1 0 auto

.main-inner
  padding: 2rem 2rem 4rem
  max-width: 80rem

.content
  font-size: 1.8rem

.footer
  background-color: $header-footer-background-color
  color: $header-footer-color
  font-size: 1.5rem
  padding: 1em
  flex: none

@media $breakpoints-max.md
  .link
    font-size: 1.5rem

@media $breakpoints-max.sm
  .link-item
    flex: 0 0 50%
    text-align: center

  .title
    font-size: 2.5rem
</style>
