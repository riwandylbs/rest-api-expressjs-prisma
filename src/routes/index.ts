import { Router } from "express";
import PostRouter from "./post-router"

const router: Router = Router()

router.get('/', async (req, res, next) => {
    return res.send({
        success: true,
        msg: "Welcome Express JS API with Prisma"
    })
});

router.use("/api", PostRouter)

export default router