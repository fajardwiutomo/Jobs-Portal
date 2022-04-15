<template>
     <div class="rounded overflow-hidden shadow-lg">
    <img class="object-none flex mx-auto bg-yellow-300 w-150 h-50 items-center rounded-xl shadow-md" :src="detailJobs.imgUrl" alt="" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{detailJobs.title}}</div>
      <p class="text-gray-700 text-base">{{detailJobs.jobType}}</p>
      <p>{{detailJobs.status}}</p>
      <p>{{detailJobs.description}}</p>
    </div>
    <div>
      <img :src="qrCode" height="180" width="180" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: "CardDetail",
    created (){
      this.getQrCode()
    },
    computed: {
        detailJobs () {
          return this.$store.state.detailJobs
        },

        qrCode (){
          return this.$store.state.qrCode
        }
    },
    methods: {
      getQrCode(){
        this.$store.dispatch('getQRcode', this.$route.fullPath)
      }
    }
}
</script>