import { Router } from "express";

const router: Router = Router();

router.get("/post", async(req, res) => {
    return res.send({
        code: 200,
        success: true, 
        msg: "ini dari post"
    })
})

export default router