import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";



const videoSchema=new Schema({
videoFile:{
    type:string, //  cloudinary url
    reqired:true,

},
tumbnail:{
    type:string, //  cloudinary url
    required:true,

},
owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",

},
title:{
    type:string, 
    required:true,

},
description:{
    type:string,
    required:true,

},
duration:{
    type:Number, // from cloudinary
    required:true,

},
views:{
    type:Number,
    default:0,

},
isPublished:{
    type:Boolean,
default:true,
},
},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video =mongoose.model("Video",videoSchema)