import { Router } from 'express'
import { PessoasListRepository } from '../repositories/PessoasListRepository'

const eventoRoutes = Router()

const pessoasListRepository = new PessoasListRepository()

eventoRoutes.post("/pessoas", (request, response) => {
  const { name, cpf, idade, convite } = request.body

  const existCpf = pessoasListRepository.findByCpf(cpf)

  if (existCpf) {
    return response.status(400).json({ error: "Já existe um usuário com esse cpf!" })
  }

  pessoasListRepository.create({ name, cpf, idade, convite })

  return response.status(201).send()
})

eventoRoutes.get("/pessoas", (request, response) => {
  const list = pessoasListRepository.list()
  return response.json(list)
})

eventoRoutes.get("/convidados", (request, response) => {
  const convites = pessoasListRepository.convidados()

  return response.status(201).json(convites)
})

export { eventoRoutes }