import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import happiAxios from "../apis/happi"

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    jobs: [],
    detailJobs: {},
    qrCode: '',
  },

  getters: {
  },

  mutations: {
    GET_JOBS (state, payload) {
      state.jobs = payload
    },

    GET_JOBSBYID (state, payload){
      state.detailJobs = payload
    },

    GET_QR_CODE(state, payload) {
      state.qrCode = payload
    }

  },

  actions: {
    async doLogin(context, payload){
      try {
        const response = await axios({
          method: 'POST',
          url: "http://localhost:3000/pub/login",
          data: payload
        })
        localStorage.setItem("access_token", response.data.access_token)
      } catch (error) {
        console.log(error)
      }
    },

    async doRegister(context, payload) {
      try{
         await axios({
          method: 'POST',
          url: "http://localhost:3000/pub/register",
          data: payload
        })
      } catch(error) {
        console.log(error)
      }
    },

    async getJobs(context){
      try {
        const response = await axios.get("http://localhost:3000/pub/jobs")
        const jobs = response.data
        context.commit("GET_JOBS", jobs)
      } catch (error) {
        console.log(error)
      }
    },

    async getDetailJob(context, payload){
      try {
        const response = await axios.get(`http://localhost:3000/pub/jobs/${payload}`)
        const jobs = response.data
        context.commit("GET_JOBSBYID", jobs)
      } catch (error) {
        console.log(error)
      }
    },

    async getQRcode(context, payload) {
      try {
        const response = await happiAxios(`?data=http://localhost:8080/${payload}&width=180&dots=000000&bg=FFFFFF&apikey=51482bbNJRiDWkQoUoCAJPLmz01JniraFsKqnJq7ZNXcvTWtQ4JRrzII
        `
        )
        console.log(response.data.qrcode)
        context.commit("SET_QR_CODE", response.data.qrcode)
      } catch(error){
        console.log(error)
      }
    },

    async doLogout(){

      try {
        localStorage.clear()
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
