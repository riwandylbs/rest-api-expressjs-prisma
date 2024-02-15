import { Router } from "express";

const router: Router = Router()

router.get('/', async (req, res, next) => {
    return res.send({
        success: true,
        msg: "Welcome Express JS API with Prisma"
    })
});

export default router