## Começando
Rode os seguintes comandos no cmd

`docker-compose build && docker-compose up -d`

Logo após o servidor estará rodando na porta 8000

## Rotas
| Método | Descrição |
|---|---|
| `GET /jsons.getInfo/:namejson` | Retorna o conteúdo do arquivo onde nome foi passado no parâmetro. |
| `GET /jsons.getActivity/:namejson` | Retorna os exit_name e activity da lista exits do arquivo onde nome foi passado no parâmetro. |
| `GET /jsons.getMeanActivity/:namejson` | Retorna a média e mediana de todos activity da lista exits do arquivo onde nome foi passado no parâmetro. |
| `GET /jsons.listMeanActivity` | Retorna o nome, média, mediana de todos activity da lista exits de todos arquivos JSON. |
| `GET /jsons.deleteFile/:namejson` | Remove um arquivo onde o nome foi passado no parâmetro |