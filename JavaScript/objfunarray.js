function Computador(processador,pdv,ram){
    this.processador = processador;
    this.pdv=pdv;
    this.ram=ram;
}
var pc1 = new Computador("Ryzen 7 2700X","RTX 2060", "16GB DDR5");
for (var prop in pc1) {
    console.log("Computador: " + prop + " = " + pc1[prop])
}

const bandas = ["RHCP","Foo Fighters","Pearl Jam"]
for (const n in bandas) {
    console.log(n)}