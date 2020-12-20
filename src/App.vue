<template>
  <Header/>
  <Main/>
  <Footer :authors="authors" />
</template>

<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      authors: [
        'Paweł Błoch (145375)',
        'Eryk Andrzejewski (145277)',
        'Konrad Bankiewicz (145265)'
      ]
    }
  }
}
</script>

<style lang="scss">
  #app {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    max-width: 100vw;
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .authors-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .author {
    padding: 0 10px;
  }
</style>
