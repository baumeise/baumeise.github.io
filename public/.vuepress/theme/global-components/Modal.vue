<template>
  <dialog v-if="visible">
    <span>
      <slot />
    </span>
    <button @click="closeModal" />
  </dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    visible: Boolean
  },
  methods: {
    closeModal: function () {
      this.$emit('seen', true)
    }
  }
}
</script>

<style lang="stylus">
dialog
  position fixed
  display flex
  flex-direction row
  justify-content space-between
  bottom 0
  left 0
  width 100%
  line-height 1rem
  box-sizing border-box
  padding 10px 5rem
  margin 0
  color #f3f3f3
  background-color rgba(0,43,80,1)
  border none
  z-index 99
  span
    font-size 0.9rem
    line-height 50px
    a
      color inherit
      text-decoration underline
  button
    position relative
    width 200px
    height 50px
    border none
    box-shadow none
    background-color transparent
    padding 0
    cursor pointer
    &::before
      position relative
      display block
      content ''
      width 30px
      height 50px
      background-image url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgOTYuOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDk2Ljk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRjNGM0YzO30KPC9zdHlsZT4KPHRpdGxlPkFydGJvYXJkIDE1PC90aXRsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTQuMiw1MGwyMC43LTIwLjdjMS4xLTEuMiwxLjEtMy4xLTAuMS00LjJzLTIuOS0xLjEtNC4xLDBMNTAsNDUuOEwyOS4zLDI1LjFjLTEuMi0xLjEtMy4xLTEuMS00LjIsMC4xCgkJcy0xLjEsMi45LDAsNC4xTDQ1LjgsNTBMMjUuMSw3MC43Yy0xLjIsMS4xLTEuMywzLTAuMSw0LjJzMywxLjMsNC4yLDAuMWMwLjEsMCwwLjEtMC4xLDAuMS0wLjFMNTAsNTQuMmwyMC43LDIwLjcKCQljMS4yLDEuMSwzLjEsMS4xLDQuMi0wLjFzMS4xLTIuOSwwLTQuMUw1NC4yLDUweiIvPgo8L2c+Cjwvc3ZnPgo=')
      background-size 100%
      background-position 0 50%
      background-repeat no-repeat
      left 70%

</style>
