import { Pessoa } from '../model/pessoa'

interface IPessoa {
  name: string,
  cpf: number,
  idade: number,
  convite: boolean
}

class PessoasListRepository {
  private allPessoas: Pessoa[] = []
  private pessoasConvite: Pessoa[] = []

  constructor() {
    this.allPessoas = []
    this.pessoasConvite = []
  }

  create({ name, cpf, idade, convite }: IPessoa): void {
    const pessoa = new Pessoa()

    pessoa.cpf = cpf
    pessoa.name = name
    pessoa.idade = idade
    pessoa.convite = convite

    this.allPessoas.push(pessoa)
  }

  list(): Pessoa[] {
    return this.allPessoas;
  }

  convidados(): Pessoa[] {
    this.pessoasConvite = []
    this.allPessoas.map((element) => {
      if (element.convite === true) {
        this.pessoasConvite.push(element)
      }
    })
    return this.pessoasConvite
  }

  findByCpf(cpf: number) {
    const existCpf = this.allPessoas.find((pessoa) => pessoa.cpf === cpf)
    return existCpf
  }
}

export { PessoasListRepository }