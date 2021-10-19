import { Request, Response } from "express"
import fs from "fs"

export const getInfo = (req: Request, res: Response) => {
    const { namejson } = req.params

    fs.readFile(`json/${namejson}.json`, (err, file: Buffer) => {
        if(err) return res.json("Arquivo inexistente")
        const data = JSON.parse(file.toString())

        return res.json({"ok": true, "json": data})
    })
}

export const getActivity = (req: Request, res: Response) => {
    const { namejson } = req.params

    fs.readFile(`json/${namejson}.json`, (err, arquivo) => {
        if(err) return res.json("Arquivo inexistente")
        const data = JSON.parse(arquivo.toString())
        
        const result = data.exits.map((item: { exit_name: string , activity: string }) => {
            return {exit_name : item.exit_name, activity: item.activity}
        })

        return res.json({"ok": true, "activities": result})
    })
}

export const getMeanActivity = (req: Request, res: Response) => {
    const { namejson } = req.params
    var count = 0;

    fs.readFile(`json/${namejson}.json`, (err, arquivo) => {
        if(err) return res.json("Arquivo inexistente")
        const data = JSON.parse(arquivo.toString())
        
        const result = data.exits.map((item: { activity: number }) => {
            count += item.activity
            return item.activity
        })

    var media = count / result.length
    var mediana = 0

        if(result.length % 2 == 0){
            mediana = (result[result.length/2] + result[(result.length/2) + 1]) / 2
        }else{
            mediana = result[result.length/2]
        }

        return res.json({"media": media, "mediana": mediana})
    })
}