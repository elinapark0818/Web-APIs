//함수의 이름을 전달하는 것은 함수가 가리키는 reference를 복사해서 전달하는 것이다

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


//함수의 이름을 전달하는 것은 함수가 가리키는 reference를 복사해서 전달하는 것이다
function divide(num1,num2) {
    return num1 / num2;
}
function surprise(operator) {
    const rst = operator(18,6); //add(18, 6)  , divide(18, 6)
    console.log(rst);
}
surprise(add);
surprise(divide);


// false = 0, -0, '', null, undefine
// true = -1, 'string', empty array
let obj = {
    name: 'elina',
};
if (obj) {
    console.log('obj');
}

obj && console.log(obj.name);

console.log('------------------')

class Counter {
    constructor() {
        this.counter = 0;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            console.log('5배수 입니다!')
        }
    }
}


const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
