const { default: mongoose } = require("mongoose")

// const connectionDB = async() => {
//     try{
//        await mongoose.connect("mongodb://localhost:27017/test", )
//          console.log("Database connected");
//     } catch (err)  {
//         console.log(err);
//     }
    

// };

const connectionDB = async() => {
    try{
       await mongoose.connect("mongodb+srv://abhishek8102tech:YV0QKYaeiHvDKCPP@cluster0.9aqpa.mongodb.net/userDB");
         console.log("Database connected");
    } catch (err)  {
        console.log(err);
    }
    

};
module.exports = {connectionDB};
