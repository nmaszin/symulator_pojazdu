<template>
  <div>
    <Header />
    <Main />
    <Footer :authors="authors" />
  </div>
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
        'Paweł Błoch',
        'Eryk Andrzejewski',
        'Konrad Bankiewicz'
      ]
    }
  }
}
</script>

<style>
  #app {
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
