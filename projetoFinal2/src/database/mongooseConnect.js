const mongoose = require('mongoose')
const MONGOOSE_URI = process.env.MONGOOSE_URI

const connect = async() => {
    try {
      await mongoose.connect(MONGOOSE_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true
      })
 
      console.log('Banco conectou')
    } catch (error) {
     console.error(error)
    }
}
 
 module.exports = {
   connect
}