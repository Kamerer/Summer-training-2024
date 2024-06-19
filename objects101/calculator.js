let calculator = {
    read() {
        this.a = +prompt("Введите A", 5);
        this.b = +prompt("Введите B", 5);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );