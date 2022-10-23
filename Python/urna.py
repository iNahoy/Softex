import enum
vx = 0
vy = 0
vz = 0
vb = 0
vn = 0
votação = True
total = int
class urna(enum.Enum):
    candidato_x = 889
    candidato_y = 847
    candidato_z = 515
    branco = 0
while votação == True:
    print("Digite o número do seu candidato:")
    try:
        voto = int(input())
        if (voto == 889):
            vx = vx+1
        elif (voto == 847):
            vy = vy+1
        elif (voto == 515):
            vz = vz+1
        elif (voto == 0):
            vb = vb+1
        else:
            vn = vn+1
    except:
        print("Caractére Inválido, digite números.")
    print("Deseja finalizar a votação?\ns ou n?")
    fim = input("")
    if fim == "s":
        if (vx > vy) and (vx > vz):
            print("O candidato X foi o vencedor com:", vx, "votos!")
        elif (vy > vx) and (vy > vz):
            print("O candidato Y foi o vencedor com:", vy, "votos!")
        elif (vz > vx) and (vz > vy):
            print("O candidato Z foi o vencedor com:", vz, "votos!")
        else:
            print("Sem vencedores claros, decisão no segundo turno.")
        votação = False
        print("O candidato X teve:", vx, "votos!")
        print("O candidato Y teve:", vy, "votos!")
        print("O candidato Z teve:", vz, "votos!")
        print(vb, "pessoas votaram branco.")
        print(vn, "pessoas votaram nulo.")