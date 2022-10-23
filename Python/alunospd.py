import pandas as pd
tabalunos = pd.read_csv("notas_alunos.csv")
tabalunos["Alunos"] = str
tabalunos["Média"] = (tabalunos["nota_1"] + tabalunos["nota_2"]) / 2
tabalunos["Situação"] = "Pendente"
tabalunos.loc [(tabalunos["Média"<7]) and (tabalunos["Faltas"] <= 5), "Situação"] == "Aprovado"
tabalunos.loc [(tabalunos["Média"<7]) and (tabalunos["Faltas"] > 5), "Situação"] == "Reprovado"
tabalunos.to_csv("alunos_situacao.csv")
print (tabalunos)
f= tabalunos["Faltas"].max()
print ("A maior quantidade de faltas foi:",f)
mg= tabalunos["Média"].median()
print ("A Média dos alunos foi:",mg)
mm = tabalunos["Média"].max()
ma = tabalunos["Alunos"].max()
print ("A maior média foi:",mm,"do aluno",ma)