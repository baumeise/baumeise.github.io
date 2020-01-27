<template>
  <Modal v-if="this.showModal" :visible="this.showModal" @seen="setCookie">
    By using this site you agree to our policy
  </Modal>
</template>

<script>
import Cookies from 'js-cookie'
import Modal from '@theme/global-components/Modal.vue'

export default {
  name: 'CookieConsent',
  components: {
    Modal
  },
  data () {
    return {
      showModal: undefined
    }
  },
  methods: {
    setCookie (seen) {
      if (seen) {
        Cookies.set('visited', seen, { expires: 7 })
        this.showModal = false
      }
    }
  },
  mounted () {
    const visited = Cookies.get('visited')
    this.showModal = visited ? false : true
  }
}
</script>
