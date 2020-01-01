const mongoose = require('mongoose')

async function main() {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost/yogaapp",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  console.log('connected')
}

main()