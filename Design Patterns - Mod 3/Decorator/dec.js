class sanduba{
    custo(){}}

class frango extends sanduba{
    custo(){
        return 'Sanduiche - Frango Valor: 4,50R$'}}

class CBQ extends sanduba{
    custo(){
        return ('Sanduiche - Carne,Bacon e QueijoMussarelaRalado: 7,49R$')}}

class pepperoni extends sanduba{
    constructor(sanduiche){
        super();
        this.sanduiche = sanduiche}
        custo() {return 'Adicional - Rodela de peperroni - 0,99R$'}}

class queijoa extends sanduba{
    constructor(sanduiche){
        super();
        this.sanduiche = sanduiche}
        custo() {return 'Adicional - Queijo Ralado - 2,00R$'}}

const sandubaa = new frango()
const cbqs = new CBQ()
const peperroni = new pepperoni(sanduba)
const queijo = new queijoa(sanduba)

console.log(sandubaa.custo())
console.log(cbqs.custo())
console.log(peperroni.custo())
console.log(queijo.custo())