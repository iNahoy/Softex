print ("Quantas rodas tem o seu veículo? ")
rds = int (input(""))
print ("Quantos kilogramas tem veículo desejado? ")
peso = int (input(""))
print ("Quantas pessoas tem podem ser transportadas nele?")
pess = int (input(""))

if rds <= 3: print ("Tire a carteira do tipo A")
elif rds >= 4: 
 if pess > 8: print ("Tire a carteira do tipo D")
 elif peso <= 3500: print ("Tire a carteira do tipo B") 
 elif peso <= 6000: print ("Tire a carteira do tipo C")
 elif peso > 6000: print ("Tire a carteira do tipo E")