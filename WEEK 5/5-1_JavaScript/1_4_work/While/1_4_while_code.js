let i = 0;

while (i < 5) {
    console.log("カウント：" + i);
    i++; // ← ここを忘れると無限ループ！
}

let answer = "";

let num = 0;
let answer2 = "";

while (answer2 !== "yes") {
  console.log(num);
  num++;
  answer2 = prompt("続けますか？（yes と入力してください）");
}


console.log("続行します！");
