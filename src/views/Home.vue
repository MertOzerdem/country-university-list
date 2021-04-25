<template>
  <div class="home-wrapper">
    <div class="home">
      <CountryList @CountrySelected="selectCountry"></CountryList>
    </div>
    <h4>Selected Country: {{ queryParameter }}</h4>
    <button>
      <router-link :to="'/university-list/' + queryParameter">Search Universities</router-link>
    </button>
  </div>
</template>

<script>
import CountryList from '@/components/CountryList.vue'
export default {
  data () {
    return {
      queryParameter: ''
    }
  },
  components: {
    CountryList
  },
  methods: {
    selectCountry (selectedCountry) {
      console.log('view:', selectedCountry)
      this.queryParameter = selectedCountry
    }
  }
}
</script>

<style scoped>
.home-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.home {
  max-width: 500px;
  max-height: 500px;
  display: block;
  overflow-y: auto;
}
</style>
