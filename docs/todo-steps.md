# 開発ステップ (TODO)

## フェーズ 1: プロジェクトセットアップと基本構成

1.  **[完了]** ドキュメント作成 (`tech-stack.md`, `requirements.md`, `todo-steps.md`)
2.  Remixプロジェクトの初期化
    ```bash
    npx create-remix@latest --template remix-run/remix/templates/cloudflare-pages
    ```
3.  基本的なディレクトリ構造の確認・整備
4.  Tailwind CSS または他のUIライブラリの導入 (任意)
5.  基本的なレイアウトコンポーネントの作成 (ヘッダー、フッター、サイドバーなど)
6.  `app/root.tsx` の設定

## フェーズ 2: モックデータと主要機能の実装 (依頼管理中心)

7.  依頼データ用モックの定義 (`app/data/mocks/orders.ts` など)
8.  依頼一覧ページの作成 (`app/routes/orders/index.tsx`)
    - モックデータを読み込み、一覧表示
9.  依頼詳細ページの作成 (`app/routes/orders/$orderId.tsx`)
    - パラメータからIDを取得し、対応するモックデータを表示
10. 依頼新規作成フォームページの作成 (`app/routes/orders/new.tsx`)
    - フォーム要素の配置 (実際のデータ送信はまだ)
11. 依頼ステータス更新機能 (UIのみ、状態管理はまだ)

## フェーズ 3: その他の機能とデプロイ準備

12. ダッシュボードページの作成 (`app/routes/_index.tsx` または `app/routes/dashboard.tsx`)
13. 顧客管理機能のモック実装 (一覧、詳細)
14. ユーザー認証機能の検討 (Cloudflare Accessなど？)
15. Cloudflare Pages へのデプロイ設定
16. 初回デプロイと動作確認

## フェーズ 4: 機能拡張と改善 (将来)

17. 実際のデータベース連携
18. ユーザー認証機能の実装
19. 顧客向けマイページ機能
20. 詳細な検索・フィルタ機能
21. テストコードの拡充
22. その他、要件に応じた機能追加
