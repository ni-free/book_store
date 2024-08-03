// import mongoose ,{Schema} from "mongoose";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt"
// const  userSchema = new Schema({
   
//     email:{
//         type:String,
//         required : true,
//         unique : true,
//         lowercase:true,
//         trim:true,
      
//     },
//     fullname:{
//         type:String,
//         required : true,
//         trim:true,
//         index:true
//     },
   
   
   
//     password:{
//         type:String,
//         required: [true , 'Password is required'],
//     },
//     refreshToken:{
//         type:String
//     }

// },{timestamps:true})

// userSchema.pre("save",async function(next){
//     if(!this.isModified("password"))
//        return next()
//     this.password= await bcrypt.hash(this.password,10)
//     next()
// })

// userSchema.methods.isPasswordCorrect = async function(password){
//     return await bcrypt.compare(password,this.password)
// }
// userSchema.methods.generateAccessToken = function(){
//       return jwt.sign(
//         {
//             _id: this._id,
//             email : this.email,

//             fullname:this.fullname
//         },
//         process.env.ACESS_TOKEN_SECRET,
//         {
//             expiresIn:process.env.ACESS_TOKEN_EXPIRY
//         }
//        )
// }
// userSchema.methods.generateRefreshToken = function(){
//     return jwt.sign(
//         {
//             _id: this._id,
//             email : this.email,
          
//             fullname:this.fullname
//         },
//         process.env.REFRESH_TOKEN_SECRET,
//         {
//             expiresIn:process.env.REFRESH_TOKEN_EXPIRY
//         }
//        )
// }
// export const User =mongoose.model("User",userSchema)

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },

}, {
    timestamps: true
})


UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})
const User = mongoose.model('User', UserSchema)

export default User; 