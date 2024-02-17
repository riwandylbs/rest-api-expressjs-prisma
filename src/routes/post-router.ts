import { Router } from "express";
import { findPostData, getDataPostList, updatePost } from "../controllers/posts";

const router: Router = Router();

router.get("/", async(req, res) => {
    return res.send({
        code: 200,
        success: true, 
        msg: "ini dari post"
    })
})

router.get("/list", getDataPostList)
router.post("/update", updatePost)
router.get("/detail/:id", findPostData)

export default router