<template>
    <footer class="footer">
        Stronę wykonali: {{ authorsList }}
  </footer>
</template>

<script>
export default {
  data() {
    return {
      authors: [
        'Paweł Błoch',
        'Eryk Andrzejewski',
        'Konrad Bankiewicz'
      ]
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