<template>
  <div>
    <nuxt-picture src="/20220822133216_IMG_0023.JPG" sizes="sm:100vw md:50vw lg:400px" />
    <div v-if="result && result.files">
    <div v-for="f of result.files" :key="f.id">
      <nuxt-picture :src="`/nhost/${f.id}`" sizes="sm:100vw md:50vw lg:400px" />
      {{ f.name }}
    </div>
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

const { result } = useQuery(query)

</script>
