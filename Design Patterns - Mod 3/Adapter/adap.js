class patos{
    constructor (nomepato){
        this.nomepato = nomepato;}
    som(){
        console.log("Quack!")}
}
class galinha{
    constructor (nomegalinha){
        this.nomegalinha = nomegalinha;}
    som(){
        console.log("Pocot!!")}
}
class adapato extends patos{
    constructor(pato){
        super(pato.nome)}
    som(){
        console.log()}
}

patoalfa = new patos("Pato Shelby");
patoadap = new adapato(patoalfa);
patoadap.som();
console.log(patoadap)