function Banco(tipo, agência, deposito, saque, saldo, conta){
    this.tipo = tipo
    this.agência = agência
    this.deposito = deposito             /// X  - Alterar para valor          
    this.saque = saque                  /// Y   - Alterar para valor
    this.saldo = deposito - saque
    this.conta = conta
}

var minhaconta = new Banco("Softex Card","Softex Bank", X , Y , 0, '1234 5678 9876 5432')
console.log("Deposito: ", minhaconta.deposito)
console.log("Saque: ", minhaconta.saque)
console.log("Saldo: ", minhaconta.saldo)
console.log("Minha conta: ",minhaconta.tipo, minhaconta.agência, minhaconta.conta)