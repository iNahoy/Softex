Aplique o padrão de projeto Observer para criar um simples editor de texto. Considere a solução apresentada no Hipertexto 6 e utilize o código visto para implementar novas classes. Os requisitos para avaliar o projeto são:

- implementar uma subclasse da classe Editor chamada TextEditor;
- aplicar o método insertLine, que recebe os parâmetros lineNumber e text;
- inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário;
- aplicar o método removeLine, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e desloca as linhas posteriores se necessário;
- instanciar um TextEditor e disparar o evento “open”;
- receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o texto “EOF”, que não deve ser inserido no objeto textEditor;
- por fim, o textEditor deve disparar o evento “save” para que o conteúdo seja salvo no arquivo configurado e imprimir todo o conteúdo do arquivo na tela.
