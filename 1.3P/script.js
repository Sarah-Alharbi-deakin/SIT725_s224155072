function greet(name){
  return `Hello, ${name}!`;
}

const message = greet("Sarah");
console.log(message);

document.getElementById("msg").textContent = message;
