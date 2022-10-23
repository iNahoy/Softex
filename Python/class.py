class pdv():
    def __init__(self,modelo,marca,gb,preço):
        self.modelo = modelo
        self.marca = marca
        self.gb = gb
        self.preço = preço
pdva = pdv("GTX 1660","Nvidia","6GB","R$ 1.619")
pdvb = pdv("RTX 2070TI","Nvidia","8GB","R$ 3.199")
pdvc = pdv("RTX 3080TI","Nvidia","12GB","R$ 6.002")
pdvu = pdv("RTX 8000","Nvidia","48GB","R$99.999")

print (pdva.marca, pdva.modelo, pdva.gb, pdva.preço)
print (pdvb.marca, pdvb.modelo, pdvb.gb, pdvb.preço)
print (pdvc.marca, pdvc.modelo, pdvc.gb, pdvc.preço)
print (pdvu.marca, pdvu.modelo, pdvu.gb, pdvu.preço)