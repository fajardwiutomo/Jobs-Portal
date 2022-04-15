<template>
   <nav
      class="relatif container max-w-full mx-auto p-5 border border-blue-800 bg-blue-300"
    >
      <!-- flex container -->
      <div class="flex items-center justify-between">
        <!-- logo -->
        <div class="pt-2">
          <img src="../assets/img/icons8-blog-logo.svg" alt="" />
        </div>
        <!-- menu -->
        <div class="hidden md:flex space-x-6 font-semibold">
          <a href="#" class="hover:text-red-600">Home</a>
          <a href="#" class="hover:text-red-600">About</a>
        </div>
        <!-- button -->
        <button
        @click="logout"
          href=""
          class="p-1 px-6 text-white bg-red-600 rounded-3xl hover:bg-red-400 hover:text-black"
        >
          Logout
        </button>
      </div>
      <!-- end -->
    </nav>
</template>

<script>
export default {
    name: "NavbarComponent",
    methods: {
        logout(){
        this.$store.dispatch("doLogout")
        this.$router.push('/login')
      }
    }
}
</script>
