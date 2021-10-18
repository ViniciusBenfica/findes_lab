import { Router } from "express"
import { getInfo, getMeanActivity } from "./controller"

const router = Router()

router.get("/jsons.getInfo/:namejson", getInfo)
router.get("/jsons.getActivity/:namejson", getMeanActivity)

export default router