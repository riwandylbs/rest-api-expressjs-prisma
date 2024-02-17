import { NextFunction, Request, Response } from "express";
import { getDataPost, getDetailPost, updatePostData } from "../services/posts";

export const getDataPostList = async(req: Request, res: Response) => { 
    const getPostList = await getDataPost();

    return res.status(200).json({
        code: 200, 
        success: true,
        message: "Post list",
        data: getPostList
    })
}

export const updatePost = async(req: Request, res: Response) => {
    try {
        const idPost = req.body.id
        const updateData = await updatePostData({
            title: req.body.title,
            published: req.body.published
        }, idPost)

        return res.status(200).json({
            code: 200, 
            success: true,
            message: "Post list",
            data: [updateData]
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            code: 500, 
            success: false,
            message: "Something went wrong!",
            data: []
        })
    }
}

export const findPostData = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const idPost = parseInt(req.params.id)

        if (idPost == undefined ) {
            return res.status(403).json({
                code: 403, 
                success: false,
                message: "Parameter id cannot null",
                data: []
            })
        }

        const post = await getDetailPost(idPost)
        if (!post) {
            return res.status(404).json({
                code: 404, 
                success: false,
                message: "Post not found!",
                data: []
            })
        }

        return res.status(200).json({
            code: 200, 
            success: true,
            message: "Post list",
            data: [post]
        })
    } catch (error: any) {
        console.log(error)
        return res.status(500).json({
            code: 500, 
            success: false,
            message: "Something went wrong!",
            data: []
        })
    }
}