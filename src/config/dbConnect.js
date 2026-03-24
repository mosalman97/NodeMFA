import mongoose from "mongoose"

const dbConnect = async ()=>{
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URI)
    console.log(`Database connected : ${connect.connection.host},${connect.connection.name}`)
  } catch (error) {
    console.log(`error in database connection`,error)
  }
}

export default dbConnect