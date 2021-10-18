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
