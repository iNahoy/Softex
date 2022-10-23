def calc():
    while (True):
        print ("Qual a operação desejada?\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n0 - Fim")
        op=int(input())
        if op > 0:
            print ("Digite o Primeiro número:")
            na= (complex(input()))
            print ("Digite o Segundo número:")
            nb= (complex(input()))
            print ("Digite o Terceiro número:")
            nc= (complex(input()))
            if op == 1:
                r = na + nb + nc
                print ("O resultado é:",r,"\nEm formato real:",r.real,"\nEm formato imag:",r.imag*1)
            elif op == 2:
                r = na - nb - nc
                print ("O resultado é:",r,"\nEm formato real:",r.real,"\nEm formato imag:",r.imag*1)
            elif op ==3:
                r = na * nb * nc
                print ("O resultado é:",r,"\nEm formato real:",r.real,"\nEm formato imag:",r.imag*1)
            elif op == 4:
                r = na / nb / nc
                print ("O resultado é:",r,"\nEm formato real:",r.real,"\nEm formato imag:",r.imag*1)
        elif op == 0:
            print ("Fechando calculadora.") 
            break
        else:
            print ("Operação inválida")
calc()