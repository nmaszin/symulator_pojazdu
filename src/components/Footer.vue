<template>
    <footer class="footer">
        Stronę wykonali:
        <ul class="authors-list">
        <li v-for="author in authors" :key="author" class="author">
            {{ author }}
        </li>
        </ul>
  </footer>
</template>

<script>
export default {
  props: {
    authors: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
    .footer {
        padding: 10px;
        border-top: 2px solid gray;
        display: flex;
        justify-content: center;
    }
</style>