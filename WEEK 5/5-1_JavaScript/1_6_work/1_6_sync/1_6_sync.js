console.log("🍽️ お客さんが注文をする");

function makeRamenSync() {
  console.log("👨‍🍳 シェフがラーメンを作り始める（時間がかかる）");

  // 時間のかかる処理（3秒ブロッキング）
  const start = Date.now();
  while (Date.now() - start < 3000) {
    // なにもせず3秒間待つ（シェフはラーメン作ってて他のことできない）
  }

  console.log("✅ ラーメンが完成しました！");
}

makeRamenSync(); // ★ここが終わるまで次に進めない！

console.log("📝 次の注文を受ける（餃子）");
