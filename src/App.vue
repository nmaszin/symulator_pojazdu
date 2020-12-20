<template>
  <Header/>
  <Main/>
  <Footer :authors="authors" />

</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    'Header': Header,
    'Main': Main,
    'Footer': Footer
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
