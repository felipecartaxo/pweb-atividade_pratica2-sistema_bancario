class Cliente {
    // Construtor
    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
    }
    // Getters e setters
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(novoCpf) {
        this._cpf = novoCpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(novaConta) {
        this._conta = novaConta;
    }
    // Método para imprimir os dados do cliente
    // imprimirDadosCliente(): string {
    //     return `${this._nome} | ${this._cpf}`;
    // }
    // toString
    toString() {
        return `Nome: ${this._nome} - CPF: ${this._cpf} `;
    }
}
