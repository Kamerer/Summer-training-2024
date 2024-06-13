function diamond(n){
    let diam = "";
    for (let i = 1; i <+ 2*n; i+=2) {
      diam += " ".repeat(Math.abs(n - i)/2)
      diam += "*".repeat(n - Math.abs(n - i));
      diam += "\n";
    }


    return diam;
  }

alert(diamond(7));