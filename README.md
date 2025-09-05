# 週次献立プランナー（Vite + React + TS + Tailwind）

ローカルストレージに保存されるシンプルな週次レシピ作成アプリのデモです。  
GitHub Pages にデプロイできるよう構成済み。

## ローカル実行

```bash
npm i
npm run dev
```

ブラウザで http://localhost:5173 を開く。

## ビルド

```bash
npm run build
npm run preview
```

## GitHub Pages へのデプロイ

1. GitHub に新規リポジトリを作成（例: `weekly-meal-planner`）。
2. このフォルダの中身を全部コミットして `main` に push。
3. リポジトリの **Settings → Pages** を開き、**Build and deployment: GitHub Actions** を選択。（このリポジトリには `.github/workflows/deploy.yml` が入っています）
4. 自動でビルド・デプロイされます。

### base パス設定（重要）

- リポジトリが `https://<USER>.github.io/<REPO>/` のパスで公開される場合、ビルド時の `base` を `/<REPO>/` に設定する必要があります。
- 本テンプレでは `vite.config.ts` で `const base = (process.env.VITE_BASE_PATH ?? '/<REPO_NAME>/')` としているので、
  **Repository → Settings → Variables → Actions → New repository variable** から `VITE_BASE_PATH` を `/<REPO>/` に設定してください。
- もしユーザーページ（`<USER>.github.io`）直下で公開するなら `VITE_BASE_PATH` を `/` に設定。

例: REPO が `weekly-meal-planner` の場合は `VITE_BASE_PATH` に `/weekly-meal-planner/`。

## 技術

- Vite + React + TypeScript
- Tailwind CSS
- GitHub Pages (Actions)
