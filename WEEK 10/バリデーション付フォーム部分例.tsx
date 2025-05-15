        <div>
          <label htmlFor="email" className="block mb-1">
            メールアドレス
          </label> // labelタグで、ユーザーに何の入力を求めるか書く
          <input
            id="email"
            type="email" // バリデーション1_データ型で簡易的に
            value={email}  //ユーザーの入力を、アプリ側でどの変数として扱うか
            onChange={(e) => setEmail(e.target.value)} //アプリ側の関数挙動
            required // バリデーション2_必須入力
            className="w-full px-3 py-2 border rounded" // テキストボックスのCSS
          />
        </div>