let a = 2;
let b = 3;
let c = 1;
let d = 4;

if (a > b && a>c) {
    let temp = a;
    a = b;
    b = temp;
    
  }

  
  if (a > c) {
    let temp = a;
    a = c;
    c = temp;
  }
  
  if (b > c) {
    let temp = b;
    b = c;
    c = temp;
  }
  if (c > d){
    let temp = c
    c = d;
    d = temp;
  }
console.log("Os valores em ordem crescente são:", a, b, c,d);
   



