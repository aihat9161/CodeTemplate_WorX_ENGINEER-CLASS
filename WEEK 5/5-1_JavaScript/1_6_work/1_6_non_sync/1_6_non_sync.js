console.log("🍽️ お客さんがラーメンを注文しました");

// ラーメンを作る関数（Promiseを返す）
function makeRamen() {
  return new Promise((resolve) => {
    console.log("👨‍🍳 シェフ：ラーメンを作り始めます...");

    setTimeout(() => {
      resolve("✅ ラーメンが完成しました！");
    }, 3000); // 3秒後に完成
    // 他の注文を受ける
    console.log("📝 シェフ：餃子の注文を受ける");
  });
}


// 餃子を作る関数（Promiseを返す）
function makeGyoza() {
  return new Promise((resolve) => {
    console.log("👨‍🍳 シェフ：餃子を作り始めます...");

    setTimeout(() => {
      resolve("✅ 餃子が完成しました！");
    }, 2000); // 2秒後に完成
    // 他の注文を受ける
    console.log("📝 シェフ：配膳の用意をする");
  });
}


// ラーメン完成後の処理を.thenで書く
makeRamen().then((message) => {
  console.log(message); // ← ラーメン完成のログ
});

console.log("📝 シェフ：他の注文も聞く");


makeGyoza().then((message) => {
  console.log(message); // ← 餃子完成のログ
});