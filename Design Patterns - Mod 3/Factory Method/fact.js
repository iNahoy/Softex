function pcfactory(cpu,ram,hdd,tip){
    this.cpu = cpu;
    this.ram = ram;
    this.hdd = hdd;
    this.tip = tip;
}

pc1 = new pcfactory ('3.2',' 8', ' 500', 'PC ')
pc2 = new pcfactory ('5.0',' 16',' 240', 'PC ')
pc3 = new pcfactory ('4.2',' 32',' 128', 'PC ')
sr1 = new pcfactory ('2.4',' 4',' 64', 'Servidor ')
sr2 = new pcfactory ('1.2',' 2',' 32', 'Servidor ')
sr3 = new pcfactory ('3.0',' 8',' 64', 'Servidor ')

pcfactory.prototype.tostring = function(){
    return (this.tip + this.cpu +' Ghz'+ this.ram + ' GB DDR4' + this.hdd + ' GB')
}

console.log(pc1.tostring());
console.log(pc2.tostring());
console.log(pc3.tostring());
console.log(sr1.tostring());
console.log(sr2.tostring());
console.log(sr3.tostring());