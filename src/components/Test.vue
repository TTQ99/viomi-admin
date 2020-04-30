<template>
  <div>
    <p>text</p>
    <div>
      <router-link to="/dbs">dbs</router-link>
      <button @click="go1">gogogogo</button>
    </div>
    <div id="systemContainer"></div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    go1 () {
      window.history.pushState('data', 'title', 'dbs');
    }
  }
}
</script>

<style lang='less'>
#systemContainer {
  height: 500px;
}
</style>
