function add(num1, num2) {
    return num1 + num2;
}

const sum = add(3, 5);
console.log(sum);

function print() {
    console.log('print');
}
print(8, 33);
// function print() 처럼 인자가 비어있으면 어떤 인풋도 받지 않는다

function print2(a,b) {
    console.log(`${a} ${b}`);
}
print2(123,456)

const doSomething = add;

const result = doSomething(2, 3);
console.log(result)
const result2 = add(1, 9);
console.log(result2)