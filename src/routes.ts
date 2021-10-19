import { Router } from "express"
import { getInfo, getActivity, getMeanActivity, listMeanActivity, deleteFile } from "./controller"

const router = Router()

router.get("/jsons.getInfo/:namejson", getInfo)
router.get("/jsons.getActivity/:namejson", getActivity)
router.get("/jsons.getMeanActivity/:namejson", getMeanActivity)
router.get("/jsons.listMeanActivity", listMeanActivity)
router.get("/jsons.deleteFile/:namejson", deleteFile)

export default router