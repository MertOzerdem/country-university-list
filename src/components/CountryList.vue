<template>
    <ul>
        <li v-for="countryName in countryNames"
        :key="countryName.name"
        @click="selectCountry(countryName.name)">
            Country Name: {{ countryName.name }}
        </li>
    </ul>
</template>

<script>
export default {
  emits: ['CountrySelected'],
  data () {
    return {
      countryNames: []
    }
  },
  mounted () {
    fetch('https://restcountries.eu/rest/v2/region/europe')
      .then(res => res.json())
      .then(data => {
        this.countryNames = data
      })
      .catch(err => console.error(err.message))
  },
  methods: {
    selectCountry (selectCountry) {
      console.log('component: ', selectCountry)
      this.$emit('CountrySelected', selectCountry)
    }
  }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}

li {
    cursor: pointer;
}

li:hover {
    color: blue;
}
</style>
