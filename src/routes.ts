import { Router } from "express"
import { getInfo } from "./controller"

const router = Router()

router.get("/jsons.getInfo/:namejson", getInfo)

export default router