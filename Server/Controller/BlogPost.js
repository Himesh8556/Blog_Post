import BlogPostModel from "../Models/blogPost.js";

export const CreateBlogPost=async(req,res)=>{
    try{
        const blogData = await BlogPostModel.create({title:req.body.title,
            content:req.body.content,
            author:req.body.author,
        });
        if(blogData)
            res.status(201).send({message:"Employee Created!!!"});
        else
        req.status(404).send({message:"Unable to create Employee"});
    }
    catch(error){
        console.log("Fail to submit data!!!");
    }
};

export const UpdateBlogPost =async(req,res)=>{
    try{
        const blogData = await BlogPostModel.findByIdAndUpdate({
            _id:req.body._id
        },
    {title:req.body.title, content:req.body.content, author:req.body.author});
    if(blogData)
        res.status(201).send({message:"Employee Updated!!!"});
    else
    res.status(404).send({message:"unable to update Employee!!!"});
    }
    catch(error){
        console.log("Fail to Submit Data!!!")
    }
};

export const DeleteBlogPost=async(req, res)=>{
    try{
        const blogData = await BlogPostModel.deleteOne({_id:req.body.id});
        if(blogData.deletedCount == 1)
            res.status(201).send({message:"Employee Deleted!!!"});
        else
        res.status(404).send({message:"Unable to delete Employee!!!"});
    }
    catch(error){
        console.log("Fail to submit Data!!!");
    }
}

export const GetBlogPost=async(req,res)=>{
    try{
        const blogData = await BlogPostModel.find();
        if(blogData)
            res.status(200).send({blogData});
    }
    catch(error){
        console.log("Fail to submit data!!!");
    }
}