class ClienteEspecial extends Cliente {

    // Atributos
    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string) {
        super(nome, cpf);
    }

    get dependentes() {
        return this._dependentes;
    }
}