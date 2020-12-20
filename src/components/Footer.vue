<template>
    <footer class="footer">
        Stronę wykonali: {{ authorsList }}
  </footer>
</template>

<script>
export default {
  props: {
    authors: {
      type: Array,
      required: true
    }
  },
  computed: {
      authorsList() {
        return this.authors.join(', ')
      }
  }
}
</script>

<style lang="scss" scoped>
    .footer {
        padding: 20px;
        text-align: center;
    }
</style>