const TextEditor = require('.editor');
function Observer1 (data){ 
    let observer = data 
    console.log (observer);
} 
function Observer2 (data){ 
  let observer = data 
  console.log (observer);
}

let aplicação = new TextEditor ();
aplicação.insertLine();
aplicação.removeLine();
aplicação.subscribe(Observer1);
aplicação.subscribe(Observer2);
aplicação.unsubscribe(Observer2);