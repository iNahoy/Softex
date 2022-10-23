class cargo():
    def __init__(self, c = str):
        self.c = c
    def get_c(self):
        return self.c
    def set_c(self):
        return self.c
adm = cargo()
adm.set_c = ("Administrador.")
print ("Seu cargo é:", adm.set_c)