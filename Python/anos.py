i = True
ya = 2022
print ("Digite seu nome:")
n = input("")
while (i == True):
 print ("Digite o ano que você nasceu:")
 try:
    yn = int(input())
    if yn>=1922 and yn<=2021:
        anos = ya - yn
        print (n,"você terá",anos,"anos em",ya,"parabéns!")
        break
    else: 
        print("Ano inválido.")
 except:print ("Caractere de ano não identificado.")