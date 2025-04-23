// 関数宣言
console.log("↓関数宣言");

// 引数と戻り値あり
function add(a, b) {
    return a + b;
}

const result = add(3, 5);
console.log(result);

// 引数と戻り値なし
function sayHello() {
    console.log("こんにちは！");
}

sayHello(); // → 「こんにちは！」と表示される
sayHello(); // 何度でも関数の呼び出しで処理が実行可能で見えやすくなる


//---------区切り線----------------------------------------------//


// 関数式
console.log("↓関数式");

// 引数と戻り値あり
const add2 = function (a, b) {
    return a + b;
};

const result2 = add2(2, 3);
console.log(result2); // → 5

// 引数と戻り値なし
const sayHello2 = function () {
    console.log("こんばんわ！");
};

sayHello2(); // → 「こんばんわ！」と表示される


//---------区切り線----------------------------------------------//

// アロー関数
console.log("↓アロー関数");

// 引数と戻り値あり
const add3 = (a, b) => {
    return a + b;
};

const result3 = add3(6,10);
console.log(result3); // → 16

// 戻り値のみの場合はreturnと{}省略
const multiply = (x, y) => x * y;

console.log(multiply(4, 5)); // → 20

// 引数が1つの場合はreturnと{}省略
const greet = name => `こんにちは、${name}さん！`;

console.log(greet("たろう")); // → 「こんにちは、たろうさん！」


// 引数と戻り値なしの場合はreturnと{}は不要だが()はは必須
const greet2 = () => "おはようございます！";

console.log(greet2()); // → 「こんにちは、たろうさん！」

