function criadorid(length) {
    var id = "";
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    for (var i = 0; i < length; i++) {
      id += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
  
    id = id.match(/.{1,4}/g).join("-");
    return id;
  }
  
  console.log(criadorid(6));