const button = document.getElementById("showBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    output.textContent = "ボタンがクリックされました";
});


const text = document.getElementById("textEnter");
const msg = document.getElementById("message");

text.addEventListener("input", () =>{
      // 入力された文字をinnerHTMLで表示する
      msg.innerHTML = `<span style="color: blue;">こんにちは、${text.value}さん！</span>`;
})


const checkbox = document.getElementById("agree");
const checkstatus = document.getElementById("status");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    checkstatus.textContent = "同意しました！";
    checkstatus.style.color = "green";
  } else {
    checkstatus.textContent = "同意していません。";
    checkstatus.style.color = "red";
  }
});



const form = document.getElementById("myForm");
const button2 = document.getElementById("submitBtn");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // フォームのデフォルト送信をキャンセル

  // ボタンを無効化
  button2.disabled = true;

  // メッセージ表示
  result.textContent = "送信しました！ボタンは無効になりました。";
});



const input = document.getElementById("nameInput");
const button3 = document.getElementById("hoverBtn");

button3.addEventListener("mouseover", () => {
  input.value = "たろう";
});

button3.addEventListener("mouseout", () => {
  input.value = ""; // 空に戻す
});

