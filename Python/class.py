class PDV:
    def __init__(self, modelo, marca, gb, preço):
        self.modelo = modelo
        self.marca = marca
        self.gb = gb
        self.preço = preço

pdvs = [
    PDV("GTX 1660", "Nvidia", "6GB", "R$ 1.619"),
    PDV("RTX 2070TI", "Nvidia", "8GB", "R$ 3.199"),
    PDV("RTX 3080TI", "Nvidia", "12GB", "R$ 6.002"),
    PDV("RTX 8000", "Nvidia", "48GB", "R$ 99.999")
]

for pdv in pdvs:
    print(pdv.marca, pdv.modelo, pdv.gb, pdv.preço)
