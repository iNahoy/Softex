FileOutputStream fileStream = new FileOutputStream("Teste de Stream");
ObjectOutputStream obj = new ObjectOutputStream(fileStream);
obj.writeObject (EscritaA);
obj.writeObject (EscritaB);
obj.close()

FileInputStream fileStream = new FileInputStream("Teste de Stream");
ObjectInputStream os = new ObjectInputStream(fileStream);
Object um = obj.readObject();
Object dois = obj.readObject();
ObjetoJava teste = (EscritaA);
ObjetoJava teste = (EscritaB);
os.close()