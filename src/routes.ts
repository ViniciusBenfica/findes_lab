import { Router } from "express"
import { getInfo, getActivity, getMeanActivity, listMeanActivity } from "./controller"

const router = Router()

router.get("/jsons.getInfo/:namejson", getInfo)
router.get("/jsons.getActivity/:namejson", getActivity)
router.get("/jsons.getMeanActivity/:namejson", getMeanActivity)
router.get("/jsons.listMeanActivity", listMeanActivity)

export default router