# 1-5_Supabase内でCRUD操作2_SQLエディターにおけるCRUD実施

## insert

INSERT INTO table_1 (id, human_name)  
VALUES (2, '鈴木花子');

## select

SELECT id, human_name FROM table_1 WHERE id = 2;

## update

UPDATE table_1 SET human_name = '鈴木小次郎' WHERE id = 2;

## delete

DELETE FROM table_1 WHERE id = 2;

※実行後、注意書きがでてきますが気にせず実行してください。

## 2-3_環境構築_supabaseとnext.jsを繋ぐ（環境変数へのセット含む）

Next.jsプロジェクトを新規作成します。親フォルダは何でもいいですが、ターミナルで以下コマンドを入力します。  
「`npx create-next-app@latest app-fortest-week6`」

※ただし、「app-fortest-week6」部分はフォルダ名なので変更可です。

この講義では「.env」ファイルを編集しました。

## 2-5_GET_supabaseからデータを引っ張る

この講義では、「test_get.js」ファイルの作成・編集と「package.json」ファイルの編集を行いました。
「test_get.js」ファイルは「app-fortest-week6」フォルダ直下に作成します。（package.jsonや.envと同じ階層です）

## 2-6_POST, UPDATE, DELETEを試す

この講義では、「test_post.js」ファイルを作成・編集しました。
「test_post.js」ファイルは「app-fortest-week6」フォルダ直下に作成します。（test_get.jsやpackage.jsonや.envと同じ階層です）