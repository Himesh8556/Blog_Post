import mongoose, { trusted } from "mongoose";

const BlogPostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
},
    {timestamps:true}
);

const BlogPostModel = mongoose.model('blogPost', BlogPostSchema);
export default BlogPostModel;