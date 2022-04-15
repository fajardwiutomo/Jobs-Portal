<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-400">
    <div class="bg-white p-16 rounded shadow-2xl w-2/3">
      <h2 class="text-3xl font-bold mb-10 text-gray-800">
        Create Your Account
      </h2>

      <form class="space-y-5" @submit.prevent="doRegister">
        <div>
          <label class="block mb-1 font-bold text-gray-500">Username</label>
          <input
            v-model="username"
            type="text"
            class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label class="block mb-1 font-bold text-gray-500">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label class="block mb-1 font-bold text-gray-500">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label class="block mb-1 font-bold text-gray-500">Phone Number</label>
          <input
            v-model="phoneNumber"
            type="text"
            class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label class="block mb-1 font-bold text-gray-500">Address</label>
          <input
            v-model="address"
            type="text"
            class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
          />
        </div>



        <div class="flex items-center">
          <input type="checkbox" id="agree" />
          <label for="agree" class="ml-2 text-gray-700 text-sm"
            >I agree to the terms and privacy.</label
          >
        </div>

        <button
          class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data(){
    return {
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: '',
    }
  },
  methods: {
    doRegister(){
      const data = {
         username: this.username,
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber,
          address: this.address,
      }
      this.$store.dispatch('doRegister', data )
      this.$router.push('/login')
      
    }
  }
  
}
</script>
