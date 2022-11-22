function carro (modelo,marca,cor,nrodas,nportas){
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.nrodas = nrodas;
    this.nportas = nportas;
}

ford = new carro("Mustang-Shelby ", "Ford ", "Azul e Branco ", "4 Rodas ", "4 Portas.")
chevrolet = new carro("Camaro ", "Chevrolet ", "Amarelo e Preto ", "4 Rodas ", "4 Portas.")
fusca = new carro("Fusca ", "Volkswagen ", "Preto ", "4 Rodas ", "4 Portas.")


carro.prototype.tostring = function (){
    return this.marca + this.modelo + this.cor + this.nrodas + this.nportas}

    console.log(carro.tostring());

    console.log(ford.tostring());
    console.log(chevrolet.tostring());
    console.log(fusca.tostring());