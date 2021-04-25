<template>
    <div>
        <h4>{{ $route.params.name }}</h4>
        <UniversityList></UniversityList>
    </div>
</template>

<script>
import UniversityList from '@/components/UniversityList'

export default {
  components: { UniversityList }
}
</script>

<style scoped>

</style>
