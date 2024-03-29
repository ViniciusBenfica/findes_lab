import fs from "fs"

export const readFile = async (file: string): Promise<any> => {
    try{
        const data = await JSON.parse(fs.readFileSync(`json/${file}.json`).toString())
        return {ok: true, json: data}
    }catch(e){
        return {ok: false, json: "Arquivo inexistente"}
    }
}

export const deletFile = async (file: string): Promise<any> => {
    try {
        fs.unlinkSync(`json/${file}.json`)
        return {ok: true, json: "Arquivo deletado"}
    }catch(e) {
        return {ok: false, json: "Arquivo inexistente"}
    }
}

export const media = (array: []): number => {
    var count = 0

    for(let item of array){
        count += item
    }

    return count / array.length
}

export const mediana = (array: []): number => {
    var mediana = 0

    if(array.length % 2 == 0){
        mediana = (array[array.length/2] + array[(array.length/2) + 1]) / 2
    }else{
        mediana = array[array.length/2]
    }

    return mediana
}