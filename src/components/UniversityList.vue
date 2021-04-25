<template>
    <ul>
        <li v-for="university in universityList" :key="university.name">
            <div class="uni-info">
                <a :href="university.web_pages[0]">Uni Name: {{university.name}}</a>
            </div>
            <div class="uni-info"> Uni Domain: {{university.domains[0]}}</div>
        </li>
    </ul>
</template>

<script>
export default {
  data () {
    return {
      universityList: []
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    fetch('http://universities.hipolabs.com/search?country=' + this.$route.params.name)
      .then(res => res.json())
      .then(data => {
        this.universityList = data
        console.log(data)
      })
      .catch(err => console.error(err.message))
  }
}
</script>

<style scoped>
ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

li {
    display: flex;
    flex-direction: row;
}

.uni-info:not(:last-of-type)::after {
    content: ' |';
}

.uni-info:not(:first-of-type)::before {
    content: '| ';
}
</style>
