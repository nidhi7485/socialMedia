const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// dotenv.config()

// url = process.env.MONGO_URL
mongoose.set('strictQuery', false)
const connectDB = (url) => {
  true, console.log('db connected')
  return mongoose.connect(url)
}
// export const coonectDB = mongoose.connect(url, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('connected Success')
//   }
// })
module.exports = connectDB
