module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    user: "root", pass: "123abc", authSource: "admin",
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (err) {
      console.log(err)
    }
  })
  require('require-all')(__dirname + '/../models')
}