def calc():
 op = str
 while op!="0":
  print ("Escolha a operação da sua conta:")
  print (" 1 | +\n 2 | -\n 3 | X\n 4 | /\n 0 | Sair.")
  op = input ("")
  if op=="1":
    print ("Digite um número:")
    n1 = int (input())
    print ("Digite mais um número:")
    n2 = int (input())
    res = n1+n2
    print ("Resultado:" ,res)
  elif op=="2":
    print ("Digite um número:")
    n1 = int (input())
    print ("Digite mais um número:")
    n2 = int (input())
    res = n1-n2
    print ("Resultado:" ,res)
  elif op=="3":
    print ("Digite um número:")
    n1 = int (input())
    print ("Digite mais um número:")
    n2 = int (input())
    res = n1*n2
    print ("Resultado:" ,res)
  elif op=="4":
    print ("Digite um número:")
    n1 = int (input())
    print ("Digite mais um número:")
    n2 = int (input())
    res = n1/n2
    print ("Resultado:" ,res)
  elif op=="0":
    print ("Calculadora infinita encerrada.")
  else:
    print ("Operação inexistente.")
calc()