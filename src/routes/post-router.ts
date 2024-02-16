import { Router } from "express";
import { findPostData, getDataPostList, updatePost } from "../controllers/Posts";

const router: Router = Router();

router.get("/post", async(req, res) => {
    return res.send({
        code: 200,
        success: true, 
        msg: "ini dari post"
    })
})

router.get("/post/list", getDataPostList)
router.post("/post/update", updatePost)
router.get("/post/detail/:id", findPostData)

export default router