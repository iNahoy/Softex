def calc():
    print("Digite um número:")
    n1 = float(input(""))
    print("Digite outro número")
    n2 = float(input(""))
    print("Qual a operação?")
    print("1,2,3,4")
    op = (input(""))
    if (op == "1"):
        res = n1+n2
        print("Resultado:", res)
    elif (op == "2"):
        res = n1-n2
        print("Resultado:", res)
    elif (op == "3"):
        res = n1*n2
        print("Resultado:", res)
    elif (op == "4"):
        res = n1/n2
        print("Resultado:", res)
    else:
        print("0")
calc()