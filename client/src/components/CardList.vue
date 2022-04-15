<template>
  <div class="rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="jobs.imgUrl" alt="" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ jobs.title }}</div>
      <p class="text-gray-700 text-base">{{ jobs.description }}</p>
      <p>{{jobs.jobType}}</p>
    </div>
<button @click.prevent="Detailhandler(jobs.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3">
  See Details
</button>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: ["jobs"],
  methods: {
   async Detailhandler (id){
     await this.$store.dispatch("getDetailJob", id)
     this.$router.push(`pub/jobs/${id}`)
    }
  }
};
</script>
