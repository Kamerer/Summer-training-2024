function solution(number){
    sum = 0;
    for (let i = 3; i < number; i += 3) {
        sum += i;
    }
    for (let i = 5; i < number; i += 5) {
        if (i % 3 == 0) continue;
        sum += i;
    }
    return sum;
}
  alert(solution(10));