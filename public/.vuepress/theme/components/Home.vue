<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>
    <section>

      <div
        class="features"
        v-if="data.features && data.features.length"
      >
        <div
          class="feature"
          v-for="(feature, index) in data.features"
          :key="index"
        >
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>

      <Content class="theme-default-content custom"/>

      <div
        class="footer"
        v-if="data.footer"
      >
        {{ data.footer }}
      </div>
    </section>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 0 0
  margin 0px auto
  display block
  .hero
    text-align center
    height "calc(100vh - %s)" % $navbarHeight
    img
      position relative
      height 100%
      display block
      left 50%
      transform translateX(-50%)
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      position absolute
      bottom 2.5rem
      left 50%
      transform translateX(-50%)
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  section
    box-sizing border-box
    max-width 980px
    margin 0 auto
    padding 0 3rem
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: 1024px)
  .home
    .hero
      height auto
      width 100%
      .action-button
        position relative
        margin 0 auto
        top auto
        left auto
        transform none
        margin 2.5rem 0 0
      img
        margin 0
        
@media (max-width: $MQMobile)
  .home
    section 
      padding 0 2.5rem
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    .hero
      height auto
      .action-button
        position relative
        margin 0 auto
        top auto
        left auto
        transform none
        margin 2.5rem 0 0
      img
        max-height 210px
        margin 0
    section
      padding-left 1.5rem
      padding-right 1.5rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
