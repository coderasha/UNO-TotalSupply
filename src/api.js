
const express = require('express')

const serverless = require('serverless-http')

const app = express()

 
const router = express.Router()


router.get('/0x474021845c4643113458ea4414bdb7fb74a01a77/TotalSupply', (req, res) => {

   res.send('384649206')

})


app.use('/.netlify/functions/api', router)


module.exports.handler = serverless(app)