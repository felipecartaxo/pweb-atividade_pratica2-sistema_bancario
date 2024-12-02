class ClienteEspecial extends Cliente {
    constructor(nome, cpf) {
        super(nome, cpf);
    }
    get dependentes() {
        return this._dependentes;
    }
    adicionarDependente(cliente) {
        if (this.cpf === cliente.cpf) {
            throw new Error("Não é possível cadastrar o titular como dependente");
        }
        this._dependentes.push(cliente);
    }
}
