<template>
  <div>
    <body
      class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"
    >

      <div>
        <div
          class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
        >
          <!--Card 1-->
          <CardList v-for="job in jobs.rows" :key="job.id" :jobs="job"></CardList>
      
        </div>
      </div>

      <section class="bg-white py-8">
        <div class="container py-8 px-6 mx-auto">
          <a
            class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
            href="#"
          >
            About
          </a>

          <p class="mt-8 mb-8">
            This website provide for Challenge 3
            <br />
          </p>
        </div>
      </section>
    </body>
  </div>
</template>

<script>
import CardList from '../components/CardList.vue'
export default {
    name: "HomePage",
    data(){
      return {

      }
    },
    components: {
        CardList
    },
    computed: {
      jobs() {
        return this.$store.state.jobs
      }
    },
    created (){
      this.$store.dispatch("getJobs")
    },
    methods: {
    
    },
    
}
</script>

<style scoped>
.work-sans {
  font-family: "Work Sans", sans-serif;
}

#menu-toggle:checked + #menu {
  display: block;
}

.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #000;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
