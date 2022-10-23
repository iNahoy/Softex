from ast import Str
print ("Qual seu nome? ")
nome = str (input(" "))
print ("Quais foram suas notas? ")
na = float (input(" "))
nb = float (input(" "))
print ("Quantas vezes você faltou? ")
f = int (input(" "))
mda = (na + nb) /2
if mda < 7: print ("Aluno",nome,"foi reprovado por ter média", mda)
elif f >= 3: print ("Aluno",nome,"foi reprovado por ter",f, "faltas.")
else : print ("O Aluno(a)",nome,"foi aprovado por ter média", mda,"e ter faltado apenas",f,"vez(es).")