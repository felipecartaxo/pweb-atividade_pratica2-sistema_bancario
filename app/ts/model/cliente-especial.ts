class ClienteEspecial extends Cliente {
    // Atributos
    private dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string) {
        super(nome, cpf);
        this.dependentes = new Array<Cliente>;
        
    }

    get listar(): Array<Cliente> {
        return this.dependentes;
    }

    adicionarDependente(dependente: Cliente) {
        if (this.cpf === dependente.cpf) {
            throw new Error("Não é possível cadastrar o titular como dependente")
        }

        this.dependentes.push(dependente);
    }
}