import { Request, Response } from "express"
import fs from "fs"
import {readFile, media, mediana, deletFile} from "../helper/index"

export const getInfo = async (req: Request, res: Response): Promise<Response> => {
    const { namejson } = req.params
    return res.json(await readFile(namejson))
}

export const getActivity = async (req: Request, res: Response): Promise<Response> => {
    const { namejson } = req.params
    const data = await readFile(namejson)

    if(data.ok){
        const result = data.json.exits.map((item: { exit_name: string , activity: string }) => {
            return {exit_name : item.exit_name, activity: item.activity}
        })

        return res.json({ok: true, activities: result})
    }

    return res.json(data)
}

export const getMeanActivity = async (req: Request, res: Response): Promise<Response> => {
    const { namejson } = req.params
    const data = await readFile(namejson)

    if(data.ok){
        const result = data.json.exits.map((item: { activity: number }) => {
            return item.activity

        })

        return res.json({media: media(result), mediana: mediana(result)})
    }

    return res.json(data)
}

export const listMeanActivity = async (req: Request, res: Response): Promise<Response> => {    
    const jsons = fs.readdirSync("json/")

    var result = await Promise.all(jsons.map(async item => {
        try{
            const data = await readFile(item.slice(0, -5))
            const activityResult = await data.json.exits.map((item: { activity: number }) => {
                return item.activity
            })

            media(activityResult)
            mediana(activityResult)
            
            return {item, media: media(activityResult), mediana: mediana(activityResult)}

        }catch(e){
            return {Error: e}
        }
    }))

    return res.json(result)
}

export const deleteFile = async (req: Request, res: Response): Promise<Response> => {
    const { namejson } = req.params
    const data = await deletFile(namejson)

    return res.json(data)
}