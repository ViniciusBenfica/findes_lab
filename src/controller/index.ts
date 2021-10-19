import { Request, Response } from "express"
import fs from "fs"
import {readFile, media, mediana, deletFile} from "../helper/index"

export const getInfo = (req: Request, res: Response): Response => {
    const { namejson } = req.params

    return res.json(readFile(namejson))
}

export const getActivity = (req: Request, res: Response): Response => {
    const { namejson } = req.params
    const data = readFile(namejson)

    if(data.ok){
        const result = data.json.exits.map((item: { exit_name: string , activity: string }) => {
            return {exit_name : item.exit_name, activity: item.activity}
        })

        return res.json({ok: true, activities: result})
    }

    return res.json(data)
}

export const getMeanActivity = (req: Request, res: Response): Response => {
    const { namejson } = req.params
    const data = readFile(namejson)

    if(data.ok){
        const result = data.json.exits.map((item: { activity: number }) => {
            return item.activity

        })

        return res.json({media: media(result), mediana: mediana(result)})
    }

    return res.json(data)
}

export const listMeanActivity = (req: Request, res: Response): Response => {    
    const jsons = fs.readdirSync("json/")

    var result = jsons.map(item => {
        try{
            const data = readFile(item.slice(0, -5))
            const activityResult = data.json.exits.map((item: { activity: number }) => {
                return item.activity
            })

            media(activityResult)
            mediana(activityResult)
            
            return {item, media: media(activityResult), mediana: mediana(activityResult)}

        }catch(e){
            return {Error: e}
        }
    })

    return res.json(result)
}

export const deleteFile = (req: Request, res: Response): Response => {
    const { namejson } = req.params
    const data = deletFile(namejson)

    return res.json(data)
}