import time
print ("Quantos segundos terá a contagem?")
cnt= int(input (""))
time.sleep(1)
print("Preparando explosão...")
time.sleep(1)
print ("Contagem regressiva")
for cnt in range(cnt,-1,-1):
 print (cnt) 
 time.sleep (1)
if (cnt==0):
   print ("Bum!")