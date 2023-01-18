<template>
  <div>
    <nuxt-picture src="/20220822133216_IMG_0023.JPG" sizes="sm:100vw md:50vw lg:400px" />
    <div v-for="f of files" :key="f.id">
      <nuxt-picture :src="`/nhost/${f.id}`" sizes="sm:100vw md:50vw lg:400px" />
      {{ f.name }}
    </div>
  </div>
</template>

<script setup lang="ts">

const query = gql`
query files {
    files {
        id
        name
    }
}
`

const { data } = useAsyncQuery(query)
const files = computed(() => data.value?.files ?? [])

</script>
