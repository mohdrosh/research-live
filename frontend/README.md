# SPring-8 MDRCG System

Multi-Dimensional Research Context Graph System for SPring-8 Research Data Management

## Setup Instructions (セットアップ手順)

### 1. Prerequisites (必要なもの)
- Node.js (v16 or higher)
- npm (comes with Node.js)

### 2. Installation Steps (インストール手順)
```bash
# 1. Create project folder (プロジェクトフォルダを作成)
mkdir spring8-mdrcg-system
cd spring8-mdrcg-system

# 2. Create folder structure (フォルダ構造を作成)
mkdir -p public src

# 3. Copy all files from above into their respective locations
#    (上記のすべてのファイルをそれぞれの場所にコピー)

# 4. Install dependencies (依存関係をインストール)
npm install

# 5. Start development server (開発サーバーを起動)
npm start
```

The app will open at `http://localhost:3000`

### 3. What Each File Does (各ファイルの役割)

- **package.json**: Project configuration and dependencies (プロジェクト設定と依存関係)
- **tailwind.config.js**: Tailwind CSS configuration (Tailwind CSS設定)
- **postcss.config.js**: PostCSS configuration for Tailwind (Tailwind用PostCSS設定)
- **public/index.html**: HTML template (HTMLテンプレート)
- **src/index.js**: Entry point for React (Reactのエントリーポイント)
- **src/index.css**: Global styles with Tailwind (Tailwindを含むグローバルスタイル)
- **src/App.js**: Main application component (メインアプリケーションコンポーネント)

## Features (機能)

### 1. Upload & AI Draft Generation (アップロード & AIドラフト生成)
- Upload PDF research papers (研究論文PDFのアップロード)
- AI automatically generates MDRCG metadata (AIが自動でMDRCGメタデータを生成)
- Researchers review and edit (研究者は確認・編集のみ)

### 2. MDRCG Form Input (MDRCG入力フォーム)
- 11 strategic question fields (11の戦略的質問項目)
- Required vs optional fields (必須・任意項目の区別)
- AI-generated content highlighted (AI生成内容をハイライト表示)

### 3. Smart Search System (スマート検索システム)
- Keyword search across all fields (全フィールドのキーワード検索)
- Filter by research field, method, etc. (研究分野、手法などでフィルター)
- Display full MDRCG context (完全なMDRCGコンテキストを表示)

## Future Enhancements (今後の拡張)

- Real AI integration with Claude API (Claude APIによる実AIインテグレーション)
- Database backend (Neo4j/PostgreSQL) (データベースバックエンド)
- User authentication (ユーザー認証)
- Advanced RAG/LLM search (高度なRAG/LLM検索)
- Living Documents community feedback (Living Documentsコミュニティフィードバック)

## Support (サポート)

For issues or questions, please contact the development team.
(問題や質問がある場合は、開発チームにご連絡ください)

## License

© 2025 SPring-8. All rights reserved.