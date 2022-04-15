if(process.env.NODE_ENV === "development"){
  require('dotenv').config()
}
require('dotenv').config()
const express = require('express')
const jobsRouter = require(__dirname + '/routes/jobs')
const userRouter = require('./routes/user')
const historiesRouter = require('./routes/histories')
const companyRouter = require('./routes/companies')
const customerRouter = require('./routes/customer')

const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000


const errorHandler = require('./midlewares/errorHandler')

 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/', jobsRouter)
app.use('/', userRouter)
app.use('/', historiesRouter)
app.use('/', companyRouter)
app.use('/', customerRouter)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Hi Boss, we are online now at ${port}`)
})

// module.exports = app