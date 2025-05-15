#Pythonプログラムはv0内では動かないため、ローカル環境で構築する必要があります。その際、Python自体のインストールが必要です。
#デプロイについて、Next.jsプロジェクトと結合でも別個でも可能です。結合するとAPIリクエストは飛ばしやすくなりますが、ディレクトリ構造がやや複雑になります。
#なお、Next.jsで構築できないプログラムについて、Pythonではなく外部APIを利用する方法もあります。
import sys
import pandas as pd

def main(path: str):
    df = pd.read_csv(path)
    print(df.describe(include="all"))

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python csv_summary.py <csv-path>")
        sys.exit(1)
    main(sys.argv[1])