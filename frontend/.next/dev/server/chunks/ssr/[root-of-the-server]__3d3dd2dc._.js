module.exports = [
"[project]/Desktop/research-live/frontend/components/App.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Desktop/research-live/frontend/node_modules/lucide-react/dist/esm/icons/upload.mjs [ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/research-live/frontend/node_modules/lucide-react/dist/esm/icons/search.mjs [ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Desktop/research-live/frontend/node_modules/lucide-react/dist/esm/icons/file-text.mjs [ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/Desktop/research-live/frontend/node_modules/lucide-react/dist/esm/icons/loader.mjs [ssr] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/research-live/frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Desktop/research-live/frontend/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/research-live/frontend/node_modules/lucide-react/dist/esm/icons/x.mjs [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/Desktop/research-live/frontend/node_modules/lucide-react/dist/esm/icons/link-2.mjs [ssr] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$home$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Desktop/research-live/frontend/node_modules/lucide-react/dist/esm/icons/home.mjs [ssr] (ecmascript) <export default as Home>");
;
;
;
const App = ()=>{
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('upload'); // 'upload', 'form', 'search'
    const [uploadedFile, setUploadedFile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        field: true,
        method: true,
        application: false,
        beamline: false,
        year: false
    });
    const [showAdvancedSearch, setShowAdvancedSearch] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [advancedSearchQuery, setAdvancedSearchQuery] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [selectedPath, setSelectedPath] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [currentBranch, setCurrentBranch] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [advancedSearchRows, setAdvancedSearchRows] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([
        {
            id: 1,
            boolean: 'AND',
            term: '',
            field: 'all'
        }
    ]);
    const [selectedDisciplines, setSelectedDisciplines] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [dateFrom, setDateFrom] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [dateTo, setDateTo] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [selectedItemTypes, setSelectedItemTypes] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [selectedFilters, setSelectedFilters] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        field: [],
        method: [],
        application: [],
        beamline: [],
        year: []
    });
    const [viewingPaper, setViewingPaper] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [papers, setPapers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [selectedRelatedPapers, setSelectedRelatedPapers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [pdfText, setPdfText] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [showLoginModal, setShowLoginModal] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [loginUsername, setLoginUsername] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [loginPassword, setLoginPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [loginError, setLoginError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    // AI Analysis Function
    const analyzePDF = async (base64Data, filename)=>{
        try {
            console.log('Starting PDF analysis...');
            console.log('PDF filename:', filename);
            const response = await fetch('http://localhost:8000/api/analyze-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    base64_data: base64Data
                })
            });
            console.log('API response status:', response.status);
            if (!response.ok) {
                const errorText = await response.text();
                console.error('API error response:', errorText);
                throw new Error(`API error: ${response.status}`);
            }
            const data = await response.json();
            console.log('Successfully received analysis:', data);
            return data;
        } catch (error) {
            console.error('Detailed error in analyzePDF:', error);
            throw new Error(`PDF分析エラー: ${error.message}`);
        }
    };
    const handleLogin = ()=>{
        if (loginUsername === 'spring8' && loginPassword === 'article') {
            setIsLoggedIn(true);
            setShowLoginModal(false);
            setLoginError('');
            setLoginUsername('');
            setLoginPassword('');
        } else {
            setLoginError('ユーザー名またはパスワードが違います (Invalid credentials)');
        }
    };
    const relationshipTypes = [
        'Cited',
        'Builds upon',
        'Contradicts',
        'Extends',
        'Similar method',
        'Different approach',
        'Complements'
    ];
    // サンプル研究データ (Sample Research Data)
    const samplePapersInitial = [
        {
            id: 1,
            title: '高エネルギーX線回折による新規触媒材料の構造解析',
            titleEn: 'Structural Analysis of Novel Catalyst Materials using High-Energy X-ray Diffraction',
            authors: 'Hatsui, T., Takeshita, K.',
            year: 2024,
            field: '材料科学 (Materials Science)',
            method: 'X線回折 (X-ray Diffraction)',
            beamline: 'BL19B2',
            application: '自動車産業 (Automotive)',
            mainConclusion: '新規Pt-Co合金触媒の原子配列構造を解明し、触媒活性が30%向上することを実証',
            industrialApplication: '自動車用燃料電池の効率向上、環境触媒技術',
            crossDomain: '化学工学、エネルギー工学への応用可能',
            failedApproach: '従来のTEM観察では動的変化を捉えられなかった'
        },
        {
            id: 2,
            title: 'タンパク質結晶構造解析による創薬ターゲット同定',
            titleEn: 'Drug Target Identification through Protein Crystal Structure Analysis',
            authors: 'Yamamoto, M., Tanaka, Y.',
            year: 2024,
            field: '生命科学 (Life Sciences)',
            method: 'X線結晶構造解析 (X-ray Crystallography)',
            beamline: 'BL41XU',
            application: '製薬・医療 (Pharmaceutical)',
            mainConclusion: '新規抗がん剤標的タンパク質の活性部位構造を原子レベルで解明',
            industrialApplication: '製薬業界における新薬開発、個別化医療',
            crossDomain: '構造生物学、計算化学への展開',
            failedApproach: '低温凍結条件では生理的構造が維持できなかった'
        },
        {
            id: 3,
            title: 'ナノ材料の時間分解分光による電子状態ダイナミクス研究',
            titleEn: 'Electronic State Dynamics of Nanomaterials via Time-Resolved Spectroscopy',
            authors: 'Sato, K., Nakamura, H.',
            year: 2023,
            field: 'ナノサイエンス (Nanoscience)',
            method: '時間分解分光 (Time-Resolved Spectroscopy)',
            beamline: 'BL43IR',
            application: 'エネルギー産業 (Energy)',
            mainConclusion: '量子ドットの励起状態寿命が表面修飾により10倍延長可能',
            industrialApplication: '高効率太陽電池、量子コンピュータ素子開発',
            crossDomain: '半導体工学、光エレクトロニクス',
            failedApproach: '室温測定では熱揺らぎの影響が大きすぎた'
        },
        {
            id: 4,
            title: '高分子材料の放射光X線小角散乱による階層構造解析',
            titleEn: 'Hierarchical Structure Analysis of Polymer Materials by Synchrotron SAXS',
            authors: 'Kobayashi, R., Ishida, M.',
            year: 2023,
            field: '高分子科学 (Polymer Science)',
            method: '小角X線散乱 (SAXS)',
            beamline: 'BL40B2',
            application: '化学産業 (Chemical)',
            mainConclusion: '新規生分解性プラスチックのナノ構造制御により強度が2倍向上',
            industrialApplication: '環境対応型プラスチック製品、包装材料の高性能化',
            crossDomain: '材料工学、環境科学への応用',
            failedApproach: '従来のDSC測定では階層構造の詳細が不明瞭だった'
        },
        {
            id: 5,
            title: '磁性材料のX線磁気円二色性による電子状態観察',
            titleEn: 'Electronic State Observation of Magnetic Materials by XMCD',
            authors: 'Fujimoto, S., Watanabe, K.',
            year: 2024,
            field: '物性物理学 (Condensed Matter Physics)',
            method: 'X線磁気円二色性 (XMCD)',
            beamline: 'BL25SU',
            application: 'エレクトロニクス (Electronics)',
            mainConclusion: 'スピントロニクス材料の磁気異方性起源を原子レベルで解明',
            industrialApplication: '次世代ハードディスク、磁気メモリの高密度化',
            crossDomain: '情報工学、量子技術への展開',
            failedApproach: 'SQUID測定では局所的な磁気構造が観測できなかった'
        },
        {
            id: 6,
            title: '半導体デバイスの高速X線イメージングによる動作解析',
            titleEn: 'Operational Analysis of Semiconductor Devices by High-Speed X-ray Imaging',
            authors: 'Suzuki, H., Ito, T.',
            year: 2022,
            field: '半導体工学 (Semiconductor Engineering)',
            method: '高速X線イメージング (High-Speed X-ray Imaging)',
            beamline: 'BL20XU',
            application: 'エレクトロニクス (Electronics)',
            mainConclusion: '次世代パワー半導体の熱応力分布をリアルタイムで可視化',
            industrialApplication: '電気自動車用パワーデバイスの信頼性向上',
            crossDomain: '電気工学、熱工学への応用',
            failedApproach: '可視光観察では内部構造の変化が観測不可能だった'
        },
        {
            id: 7,
            title: '文化財の非破壊X線分析による製作技法の解明',
            titleEn: 'Non-Destructive X-ray Analysis for Understanding Cultural Heritage Production Techniques',
            authors: 'Nakamura, Y., Kimura, A.',
            year: 2023,
            field: '文化財科学 (Cultural Heritage Science)',
            method: 'X線蛍光分析 (XRF)',
            beamline: 'BL08W',
            application: '文化・芸術 (Culture & Arts)',
            mainConclusion: '江戸時代の陶磁器の釉薬組成と焼成温度を非破壊で特定',
            industrialApplication: '文化財保存技術、伝統工芸の復元',
            crossDomain: '考古学、歴史学への応用',
            failedApproach: '従来の顕微鏡観察では内部構造が分からなかった'
        },
        {
            id: 8,
            title: '地球深部物質の高圧X線回折実験',
            titleEn: 'High-Pressure X-ray Diffraction Experiments on Deep Earth Materials',
            authors: 'Takahashi, N., Mori, D.',
            year: 2024,
            field: '地球科学 (Earth Science)',
            method: '高圧X線回折 (High-Pressure XRD)',
            beamline: 'BL10XU',
            application: '資源探査 (Resource Exploration)',
            mainConclusion: 'マントル遷移層の鉱物相転移圧力を精密決定し、地震波速度異常を説明',
            industrialApplication: '鉱物資源探査、地震予測技術への貢献',
            crossDomain: '地震学、鉱物学への展開',
            failedApproach: '常圧実験では高圧相の構造が再現できなかった'
        },
        {
            id: 9,
            title: '食品成分の放射光赤外分光による分子構造解析',
            titleEn: 'Molecular Structure Analysis of Food Components by Synchrotron Infrared Spectroscopy',
            authors: 'Tanaka, M., Saito, E.',
            year: 2023,
            field: '食品科学 (Food Science)',
            method: '赤外分光 (Infrared Spectroscopy)',
            beamline: 'BL43IR',
            application: '食品産業 (Food Industry)',
            mainConclusion: '発酵食品中のタンパク質構造変化と風味の相関を解明',
            industrialApplication: '機能性食品開発、発酵プロセス最適化',
            crossDomain: '栄養学、微生物学への応用',
            failedApproach: '通常の赤外分光では微量成分の検出が困難だった'
        }
    ];
    // Load papers from backend on first render
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useEffect(()=>{
        const fetchPapers = async ()=>{
            try {
                const response = await fetch('http://localhost:8000/api/search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        query: '',
                        filters: {},
                        page: 1,
                        page_size: 100
                    })
                });
                const data = await response.json();
                const normalized = data.papers.map((p)=>({
                        ...p,
                        titleEn: p.title_en,
                        mainConclusion: p.main_conclusion,
                        industrialApplication: p.industrial_application,
                        crossDomain: p.cross_domain,
                        failedApproach: p.failed_approach,
                        formData: p.form_data ? {
                            priorWork: p.form_data.prior_work,
                            novelty: p.form_data.novelty,
                            unknownQuestions: p.form_data.unknown_questions,
                            failedApproach: p.form_data.failed_approach,
                            crossDomain: p.form_data.cross_domain,
                            abstractPrinciple: p.form_data.abstract_principle,
                            experimentalReason: p.form_data.experimental_reason,
                            scalingPossibility: p.form_data.scaling_possibility,
                            combinationPotential: p.form_data.combination_potential
                        } : null
                    }));
                setPapers(normalized);
            } catch (error) {
                console.error('Failed to load papers:', error);
            }
        };
        fetchPapers();
    }, []);
    // 学術分野データ (Academic Disciplines Data)
    const disciplines = {
        'Materials Science': {
            label: '材料科学 (Materials Science)',
            journals: [
                'Advanced Materials Research',
                'Journal of Materials Chemistry',
                'Materials Science and Engineering',
                'Acta Materialia',
                'Scripta Materialia'
            ]
        },
        'Life Sciences': {
            label: '生命科学 (Life Sciences)',
            journals: [
                'Cell',
                'Nature Structural & Molecular Biology',
                'Journal of Biological Chemistry',
                'Protein Science',
                'FEBS Letters'
            ]
        },
        'Nanoscience': {
            label: 'ナノサイエンス (Nanoscience)',
            journals: [
                'Nature Nanotechnology',
                'Nano Letters',
                'ACS Nano',
                'Small',
                'Nanoscale'
            ]
        },
        'Polymer Science': {
            label: '高分子科学 (Polymer Science)',
            journals: [
                'Macromolecules',
                'Polymer',
                'Journal of Polymer Science',
                'Polymer Chemistry',
                'European Polymer Journal'
            ]
        },
        'Condensed Matter Physics': {
            label: '物性物理学 (Condensed Matter Physics)',
            journals: [
                'Physical Review B',
                'Journal of Physics: Condensed Matter',
                'Applied Physics Letters',
                'Physical Review Letters',
                'Nature Physics'
            ]
        },
        'Semiconductor Engineering': {
            label: '半導体工学 (Semiconductor Engineering)',
            journals: [
                'IEEE Transactions on Electron Devices',
                'Journal of Applied Physics',
                'Semiconductor Science and Technology',
                'Applied Physics Express',
                'Solid-State Electronics'
            ]
        },
        'Cultural Heritage Science': {
            label: '文化財科学 (Cultural Heritage Science)',
            journals: [
                'Journal of Cultural Heritage',
                'Studies in Conservation',
                'Archaeometry',
                'Heritage Science',
                'Journal of Archaeological Science'
            ]
        },
        'Earth Science': {
            label: '地球科学 (Earth Science)',
            journals: [
                'Earth and Planetary Science Letters',
                'Geology',
                'Geophysical Research Letters',
                'Journal of Geophysical Research',
                'Nature Geoscience'
            ]
        },
        'Food Science': {
            label: '食品科学 (Food Science)',
            journals: [
                'Food Chemistry',
                'Journal of Agricultural and Food Chemistry',
                'Food Research International',
                'Trends in Food Science & Technology',
                'Food Hydrocolloids'
            ]
        },
        'Chemistry': {
            label: '化学 (Chemistry)',
            journals: [
                'Journal of the American Chemical Society',
                'Angewandte Chemie',
                'Chemical Reviews',
                'Analytical Chemistry',
                'Inorganic Chemistry'
            ]
        }
    };
    // 高度検索ナレッジツリー (Advanced Search Knowledge Tree)
    const searchKnowledgeTree = {
        'x線': {
            type: 'category',
            label: 'X線技術 (X-ray Technology)',
            branches: {
                'x線回折': {
                    type: 'category',
                    label: 'X線回折 (X-ray Diffraction)',
                    branches: {
                        '高エネルギー': {
                            type: 'subcategory',
                            label: '高エネルギーX線回折 (High-Energy XRD)',
                            papers: [
                                1
                            ]
                        },
                        '高圧': {
                            type: 'subcategory',
                            label: '高圧X線回折 (High-Pressure XRD)',
                            papers: [
                                8
                            ]
                        },
                        '一般': {
                            type: 'subcategory',
                            label: '一般X線回折 (General XRD)',
                            papers: [
                                1
                            ]
                        }
                    }
                },
                'x線結晶構造解析': {
                    type: 'subcategory',
                    label: 'X線結晶構造解析 (X-ray Crystallography)',
                    papers: [
                        2
                    ]
                },
                'x線散乱': {
                    type: 'category',
                    label: 'X線散乱 (X-ray Scattering)',
                    branches: {
                        '小角散乱': {
                            type: 'subcategory',
                            label: '小角X線散乱 (SAXS)',
                            papers: [
                                4
                            ]
                        }
                    }
                },
                'x線分光': {
                    type: 'category',
                    label: 'X線分光 (X-ray Spectroscopy)',
                    branches: {
                        '磁気円二色性': {
                            type: 'subcategory',
                            label: 'X線磁気円二色性 (XMCD)',
                            papers: [
                                5
                            ]
                        },
                        '蛍光分析': {
                            type: 'subcategory',
                            label: 'X線蛍光分析 (XRF)',
                            papers: [
                                7
                            ]
                        }
                    }
                },
                'x線イメージング': {
                    type: 'subcategory',
                    label: 'X線イメージング (X-ray Imaging)',
                    papers: [
                        6
                    ]
                }
            }
        },
        '分光': {
            type: 'category',
            label: '分光技術 (Spectroscopy)',
            branches: {
                '時間分解': {
                    type: 'subcategory',
                    label: '時間分解分光 (Time-Resolved Spectroscopy)',
                    papers: [
                        3
                    ]
                },
                '赤外分光': {
                    type: 'subcategory',
                    label: '赤外分光 (Infrared Spectroscopy)',
                    papers: [
                        9
                    ]
                }
            }
        },
        '触媒': {
            type: 'category',
            label: '触媒研究 (Catalyst Research)',
            branches: {
                '合金触媒': {
                    type: 'subcategory',
                    label: '合金触媒 (Alloy Catalysts)',
                    papers: [
                        1
                    ]
                },
                '構造解析': {
                    type: 'subcategory',
                    label: '触媒構造解析 (Catalyst Structure Analysis)',
                    papers: [
                        1
                    ]
                }
            }
        },
        'タンパク質': {
            type: 'category',
            label: 'タンパク質研究 (Protein Research)',
            branches: {
                '結晶構造': {
                    type: 'subcategory',
                    label: 'タンパク質結晶構造 (Protein Crystal Structure)',
                    papers: [
                        2
                    ]
                },
                '創薬': {
                    type: 'subcategory',
                    label: '創薬ターゲット (Drug Targets)',
                    papers: [
                        2
                    ]
                }
            }
        },
        'ナノ材料': {
            type: 'category',
            label: 'ナノ材料 (Nanomaterials)',
            branches: {
                '量子ドット': {
                    type: 'subcategory',
                    label: '量子ドット (Quantum Dots)',
                    papers: [
                        3
                    ]
                },
                '電子状態': {
                    type: 'subcategory',
                    label: '電子状態解析 (Electronic State Analysis)',
                    papers: [
                        3,
                        5
                    ]
                }
            }
        },
        '高分子': {
            type: 'category',
            label: '高分子材料 (Polymer Materials)',
            branches: {
                '生分解性': {
                    type: 'subcategory',
                    label: '生分解性プラスチック (Biodegradable Plastics)',
                    papers: [
                        4
                    ]
                },
                '階層構造': {
                    type: 'subcategory',
                    label: '階層構造解析 (Hierarchical Structure)',
                    papers: [
                        4
                    ]
                }
            }
        },
        '磁性材料': {
            type: 'category',
            label: '磁性材料 (Magnetic Materials)',
            branches: {
                'スピントロニクス': {
                    type: 'subcategory',
                    label: 'スピントロニクス (Spintronics)',
                    papers: [
                        5
                    ]
                }
            }
        },
        '半導体': {
            type: 'category',
            label: '半導体 (Semiconductors)',
            branches: {
                'パワーデバイス': {
                    type: 'subcategory',
                    label: 'パワー半導体 (Power Semiconductors)',
                    papers: [
                        6
                    ]
                },
                '熱応力解析': {
                    type: 'subcategory',
                    label: '熱応力解析 (Thermal Stress Analysis)',
                    papers: [
                        6
                    ]
                }
            }
        },
        '文化財': {
            type: 'category',
            label: '文化財 (Cultural Heritage)',
            branches: {
                '非破壊分析': {
                    type: 'subcategory',
                    label: '非破壊分析 (Non-Destructive Analysis)',
                    papers: [
                        7
                    ]
                },
                '陶磁器': {
                    type: 'subcategory',
                    label: '陶磁器分析 (Ceramic Analysis)',
                    papers: [
                        7
                    ]
                }
            }
        },
        '地球科学': {
            type: 'category',
            label: '地球科学 (Earth Science)',
            branches: {
                '高圧実験': {
                    type: 'subcategory',
                    label: '高圧実験 (High-Pressure Experiments)',
                    papers: [
                        8
                    ]
                },
                'マントル': {
                    type: 'subcategory',
                    label: 'マントル研究 (Mantle Research)',
                    papers: [
                        8
                    ]
                }
            }
        },
        '食品': {
            type: 'category',
            label: '食品科学 (Food Science)',
            branches: {
                '発酵食品': {
                    type: 'subcategory',
                    label: '発酵食品 (Fermented Foods)',
                    papers: [
                        9
                    ]
                },
                'タンパク質構造': {
                    type: 'subcategory',
                    label: '食品タンパク質 (Food Proteins)',
                    papers: [
                        9
                    ]
                }
            }
        },
        '産業応用': {
            type: 'category',
            label: '産業応用 (Industrial Applications)',
            branches: {
                '自動車': {
                    type: 'subcategory',
                    label: '自動車産業 (Automotive)',
                    papers: [
                        1,
                        6
                    ]
                },
                '製薬': {
                    type: 'subcategory',
                    label: '製薬・医療 (Pharmaceutical)',
                    papers: [
                        2
                    ]
                },
                'エネルギー': {
                    type: 'subcategory',
                    label: 'エネルギー (Energy)',
                    papers: [
                        3
                    ]
                },
                '化学': {
                    type: 'subcategory',
                    label: '化学産業 (Chemical)',
                    papers: [
                        4
                    ]
                },
                'エレクトロニクス': {
                    type: 'subcategory',
                    label: 'エレクトロニクス (Electronics)',
                    papers: [
                        5,
                        6
                    ]
                }
            }
        }
    };
    // 高度検索でマッチする項目を取得 (Get matching items for advanced search)
    const getAdvancedSearchSuggestions = (query)=>{
        if (!query) return null;
        const lowerQuery = query.toLowerCase().trim();
        const matches = [];
        Object.keys(searchKnowledgeTree).forEach((key)=>{
            if (key.includes(lowerQuery) || searchKnowledgeTree[key].label.toLowerCase().includes(lowerQuery)) {
                matches.push({
                    key: key,
                    data: searchKnowledgeTree[key],
                    path: [
                        key
                    ]
                });
            }
        });
        return matches;
    };
    // MDRCG質問項目 (MDRCG Question Items)
    const mdrcgQuestions = [
        {
            id: 'mainConclusion',
            label: '主な結論 (Main Conclusion)',
            placeholder: 'この研究で明らかになった最も重要な発見を1-2文で記述してください',
            type: 'textarea',
            required: true,
            aiDraft: 'SPring-8-II第四世代光源用に340台のボタン型BPMシステムを開発し、0.1 nC入射バンチで100 μm標準偏差以下のシングルパス分解能、COD分解能1 μm標準偏差以下、数週間で5 μm以内の長期安定性、電気中心変位150 μm標準偏差以下を達成し、コミッショニングと運用要件を完全に満たすことを実証しました。'
        },
        {
            id: 'priorWork',
            label: '先行研究との関係 (Relationship to Prior Work)',
            placeholder: 'この研究が基づいている3-5つの重要な先行研究を挙げてください',
            type: 'textarea',
            required: true,
            aiDraft: '1) SPring-8の既存BPMシステムと放射線損傷ケーブルの湿度感度問題に関する研究\n2) NanoTerasu 3 GeV光源用BPM実装（2020-2024年）でほぼ同一のシステム設計を採用\n3) SPring-8の高速ヘリシティ切替ビームラインの適応フィードフォワード補正用MicroTCA.4ベース電子回路開発\n4) 菱形形状への変更前の元の圧縮八角形ビームパイプ設計\n5) 加速器コンポーネント用CST Studio RF シミュレーションとANSYS熱解析技術'
        },
        {
            id: 'novelty',
            label: '新規性 (Novelty)',
            placeholder: 'この研究の独自の貢献は何ですか？',
            type: 'textarea',
            required: true,
            aiDraft: '第四世代光源応用において、耐放射線性PEEKインシュレーター同軸ケーブルとMicroTCA.4プラットフォームの包括的統合を初めて実現。異なる放射線ゾーンに最適化された新規3ケーブルシステム（A/B/Cケーブル）の開発。電極設計においてスプリング材料を排除した逆極性SMAコネクタの先駆的使用。八角形から菱形ビームパイプ断面へのBPMヘッド設計の適応を性能仕様を維持しながら実現。極限放射線環境下でのリアルタイムゲインドリフト監視用パイロットトーン生成器の実装。'
        },
        {
            id: 'unknownQuestions',
            label: '未解明の課題 (Remaining Unknown Questions)',
            placeholder: 'この研究では答えられなかった2-3の具体的な疑問',
            type: 'textarea',
            required: false,
            aiDraft: '1) 数年間の運転を超える長期的な電磁加熱が電極材料に与える影響\n2) 様々なバンチフィルパターンに対する最適な冷却水流量と冷却チャンネル配置\n3) 測定された放射線被曝レベルを超えるPEEKケーブル劣化曲線の挙動\n4) 未試験の極端なバンチパターン（406バンチ以上）での性能\n5) サブミクロン位置安定性要件に対する機械的振動の影響'
        },
        {
            id: 'failedApproach',
            label: '失敗したアプローチ (Failed Approaches)',
            placeholder: 'うまくいかなかった手法とその理由',
            type: 'textarea',
            required: false,
            aiDraft: '当初の八角形ビームパイプ設計では、高い抵抗壁インピーダンスのためステンレス鋼内面への銅メッキが必要で、製造の複雑さとコストが増加しました。標準フレキシブルケーブルは高放射線ゾーンで湿度感度により故障し、環境条件との相関が測定に現れました。水冷なしの室温動作では10°C以上の温度上昇と10 μm以上の熱変位が発生し、安定性要件を超過しました。スプリング材料を含む従来のSMAコネクタは、放射線被曝下での電極接続において信頼性の問題を経験しました。'
        },
        {
            id: 'crossDomain',
            label: '異分野翻訳レイヤー (Cross-Domain Translation)',
            placeholder: '他分野での類似問題や応用可能性',
            type: 'textarea',
            required: true,
            aiDraft: '素粒子物理学：サブミクロン軌道安定性を要する将来円形衝突型加速器（FCC、CEPC）の精密ビーム診断への応用\n医学物理学：がん治療用小型放射光源の信頼性の高いビーム位置モニタリング\n自由電子レーザー：コヒーレントX線生成のための超安定電子ビーム軌道制御\n産業用イオン注入装置：半導体製造用高精度ビームステアリング\n宇宙技術：衛星計測用耐放射線電子回路設計原理\n量子コンピューティング：量子ビット読み出しシステムに適用可能な極低温センサー開発技術'
        },
        {
            id: 'industrialPain',
            label: '産業応用可能性 (Industrial Application Potential)',
            placeholder: 'この研究が解決できる具体的な産業課題',
            type: 'textarea',
            required: true,
            aiDraft: '世界中の放射光施設：100倍の輝度向上を必要とする既存第三世代光源のアップグレードプロジェクトへの直接適用（ESRF-EBS、APS-U、PETRA IV）\n半導体産業：次世代チップ製造のための先進リソグラフィーと材料キャラクタリゼーションを可能にする超精密ビーム位置制御\n製薬研究開発：創薬におけるタイムリゾルブドタンパク質結晶構造解析に必要な安定X線ビーム\n材料科学：材料加工中の原子レベル現象のその場観察にはサブミクロンビーム安定性が必要\n自動車産業：放射光ベースのオペランド分光法による触媒コンバーター最適化\n航空宇宙：高輝度X線源を使用した重要部品の非破壊検査'
        },
        {
            id: 'abstractPrinciple',
            label: '抽象化された原理 (Abstracted Principle - 5th Grade Level)',
            placeholder: '小学5年生でも理解できるように説明してください',
            type: 'textarea',
            required: true,
            aiDraft: '巨大な円形トラック（レースカーのトラックみたいだけど、電子用だよ！）の周りを超高速で回る小さな粒を撮影する超高速カメラがあると想像してね。この電子はとても小さくて目では見えないんだ。BPM（ビーム位置モニター）は、トラック全体にセンサーがあって、電子がどこにいるかを正確に教えてくれるんだ。小さな粒子用のGPSみたいなもの！なぜそんなに正確に知る必要があるかというと（髪の毛よりも細く！）、この走っている電子が特別なX線の光を作り出して、科学者たちがそれを使って物質の内側を見るんだ。お医者さんがX線であなたの骨を見るのと同じようにね。電子がほんの少しでも揺れると、X線の写真がぼやけちゃうんだ。私たちの新しいシステムはとても正確で、鉛筆が髪の毛の幅より小さく動いたかどうかを測るようなものなんだよ！'
        },
        {
            id: 'experimentalReason',
            label: '実験設計の理由 (Experimental Design Rationale)',
            placeholder: 'なぜこのパラメータ・手法を選んだのか',
            type: 'textarea',
            required: false,
            aiDraft: 'RF周波数508.76 MHzの選択理由：SPring-8-IIの加速RF周波数に同期し、バンチ信号を正確に抽出可能\nサンプリングレート363.40 MHz（RF周波数の5/7）の選択：アンダーサンプリング方式により145.36 MHzの中間周波数を得て、FPGAでの高速処理を実現\n7次多項式変換の採用理由：ビーム位置の非線形性を高精度で補正し、広範囲での位置測定精度を確保\nPEEK絶縁同軸ケーブルの選択：高放射線環境下での長期耐久性と湿度非感受性を両立\n水冷19インチキャビネットの採用：±0.1°Cの温度安定性により長期ドリフトを5 μm以内に抑制\nモリブデン電極材料の選択：ステンレス鋼より優れた電気伝導性により電磁加熱を分散し、温度上昇を緩和'
        },
        {
            id: 'scalingPossibility',
            label: 'スケーリング可能性 (Scaling Possibilities)',
            placeholder: 'この技術は異なるスケールで機能しますか？',
            type: 'textarea',
            required: false,
            aiDraft: 'エネルギースケール：3 GeV（NanoTerasu）から6 GeV（SPring-8-II）、さらに高エネルギー衝突型加速器まで適用可能。電極直径とビームパイプ寸法をスケーリングすることで異なるビームエネルギーに対応。\n施設規模：周長約500 mのコンパクト光源から数kmの大型施設まで、BPM数を10台から数千台まで拡張可能。MicroTCA.4プラットフォームの拡張性により大規模展開に対応。\nビーム電流：0.1 nC（シングルパス）から数百mA（蓄積電流）まで、ステップアッテネーターとアンプの調整により広範囲をカバー。\n時間分解能：ターンバイターン（208.85 kHz）から10 Hzスローデータまで、異なるタイムスケールでの軌道監視を並列実行可能。'
        },
        {
            id: 'combinationPotential',
            label: '組み合わせ可能性 (Combination Potential)',
            placeholder: '他の技術と組み合わせる可能性',
            type: 'textarea',
            required: false,
            aiDraft: '機械学習との組合せ：ターンバイターンBPMデータ（208.85 kHz）をリアルタイム解析し、ビーム不安定性の予測と自動補正が可能。AIによる軌道補正アルゴリズム開発により、コミッショニング時間を大幅短縮。\nフィードバックシステムとの統合：高速10 kHzデータを用いた適応型フィードフォワード制御により、アンジュレータの高速ヘリシティ切替による軌道擾乱を5 μm以内に抑制。\nビームベースアライメント：BPMと四極磁石の磁気中心変位測定により、150 μm標準偏差以内での精密アライメントを実現。\nデジタルツイン技術：BPMリアルタイムデータと加速器シミュレーションを統合し、仮想加速器モデルで運転最適化と故障予測を実現。\n量子センサー技術：極低温BPM電子回路の開発知見を量子ビット読み出し回路に応用可能。\nIoT監視システム：パイロットトーン生成器による自己診断機能を拡張し、予防保全と遠隔監視を実現。'
        }
    ];
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // PDF answer mappings - add more PDFs here
    const pdfAnswerMappings = {
        'TUP16': {
            mainConclusion: 'SPring-8-II第四世代光源用に340台のボタン型BPMシステムを開発し、0.1 nC入射バンチで100 μm標準偏差以下のシングルパス分解能、COD分解能1 μm標準偏差以下、数週間で5 μm以内の長期安定性、電気中心変位150 μm標準偏差以下を達成し、コミッショニングと運用要件を完全に満たすことを実証しました。',
            priorWork: '1) SPring-8の既存BPMシステムと放射線損傷ケーブルの湿度感度問題に関する研究\n2) NanoTerasu 3 GeV光源用BPM実装（2020-2024年）でほぼ同一のシステム設計を採用\n3) SPring-8の高速ヘリシティ切替ビームラインの適応フィードフォワード補正用MicroTCA.4ベース電子回路開発\n4) 菱形形状への変更前の元の圧縮八角形ビームパイプ設計\n5) 加速器コンポーネント用CST Studio RF シミュレーションとANSYS熱解析技術',
            novelty: '第四世代光源応用において、耐放射線性PEEKインシュレーター同軸ケーブルとMicroTCA.4プラットフォームの包括的統合を初めて実現。異なる放射線ゾーンに最適化された新規3ケーブルシステム（A/B/Cケーブル）の開発。電極設計においてスプリング材料を排除した逆極性SMAコネクタの先駆的使用。八角形から菱形ビームパイプ断面へのBPMヘッド設計の適応を性能仕様を維持しながら実現。極限放射線環境下でのリアルタイムゲインドリフト監視用パイロットトーン生成器の実装。',
            unknownQuestions: '1) 数年間の運転を超える長期的な電磁加熱が電極材料に与える影響\n2) 様々なバンチフィルパターンに対する最適な冷却水流量と冷却チャンネル配置\n3) 測定された放射線被曝レベルを超えるPEEKケーブル劣化曲線の挙動\n4) 未試験の極端なバンチパターン（406バンチ以上）での性能\n5) サブミクロン位置安定性要件に対する機械的振動の影響',
            failedApproach: '当初の八角形ビームパイプ設計では、高い抵抗壁インピーダンスのためステンレス鋼内面への銅メッキが必要で、製造の複雑さとコストが増加しました。標準フレキシブルケーブルは高放射線ゾーンで湿度感度により故障し、環境条件との相関が測定に現れました。水冷なしの室温動作では10°C以上の温度上昇と10 μm以上の熱変位が発生し、安定性要件を超過しました。スプリング材料を含む従来のSMAコネクタは、放射線被曝下での電極接続において信頼性の問題を経験しました。',
            crossDomain: '素粒子物理学：サブミクロン軌道安定性を要する将来円形衝突型加速器（FCC、CEPC）の精密ビーム診断への応用\n医学物理学：がん治療用小型放射光源の信頼性の高いビーム位置モニタリング\n自由電子レーザー：コヒーレントX線生成のための超安定電子ビーム軌道制御\n産業用イオン注入装置：半導体製造用高精度ビームステアリング\n宇宙技術：衛星計測用耐放射線電子回路設計原理\n量子コンピューティング：量子ビット読み出しシステムに適用可能な極低温センサー開発技術',
            industrialPain: '世界中の放射光施設：100倍の輝度向上を必要とする既存第三世代光源のアップグレードプロジェクトへの直接適用（ESRF-EBS、APS-U、PETRA IV）\n半導体産業：次世代チップ製造のための先進リソグラフィーと材料キャラクタリゼーションを可能にする超精密ビーム位置制御\n製薬研究開発：創薬におけるタイムリゾルブドタンパク質結晶構造解析に必要な安定X線ビーム\n材料科学：材料加工中の原子レベル現象のその場観察にはサブミクロンビーム安定性が必要\n自動車産業：放射光ベースのオペランド分光法による触媒コンバーター最適化\n航空宇宙：高輝度X線源を使用した重要部品の非破壊検査',
            abstractPrinciple: '巨大な円形トラック（レースカーのトラックみたいだけど、電子用だよ！）の周りを超高速で回る小さな粒を撮影する超高速カメラがあると想像してね。この電子はとても小さくて目では見えないんだ。BPM（ビーム位置モニター）は、トラック全体にセンサーがあって、電子がどこにいるかを正確に教えてくれるんだ。小さな粒子用のGPSみたいなもの！なぜそんなに正確に知る必要があるかというと（髪の毛よりも細く！）、この走っている電子が特別なX線の光を作り出して、科学者たちがそれを使って物質の内側を見るんだ。お医者さんがX線であなたの骨を見るのと同じようにね。電子がほんの少しでも揺れると、X線の写真がぼやけちゃうんだ。私たちの新しいシステムはとても正確で、鉛筆が髪の毛の幅より小さく動いたかどうかを測るようなものなんだよ！',
            experimentalReason: 'RF周波数508.76 MHzの選択理由：SPring-8-IIの加速RF周波数に同期し、バンチ信号を正確に抽出可能\nサンプリングレート363.40 MHz（RF周波数の5/7）の選択：アンダーサンプリング方式により145.36 MHzの中間周波数を得て、FPGAでの高速処理を実現\n7次多項式変換の採用理由：ビーム位置の非線形性を高精度で補正し、広範囲での位置測定精度を確保\nPEEK絶縁同軸ケーブルの選択：高放射線環境下での長期耐久性と湿度非感受性を両立\n水冷19インチキャビネットの採用：±0.1°Cの温度安定性により長期ドリフトを5 μm以内に抑制\nモリブデン電極材料の選択：ステンレス鋼より優れた電気伝導性により電磁加熱を分散し、温度上昇を緩和',
            scalingPossibility: 'エネルギースケール：3 GeV（NanoTerasu）から6 GeV（SPring-8-II）、さらに高エネルギー衝突型加速器まで適用可能。電極直径とビームパイプ寸法をスケーリングすることで異なるビームエネルギーに対応。\n施設規模：周長約500 mのコンパクト光源から数kmの大型施設まで、BPM数を10台から数千台まで拡張可能。MicroTCA.4プラットフォームの拡張性により大規模展開に対応。\nビーム電流：0.1 nC（シングルパス）から数百mA（蓄積電流）まで、ステップアッテネーターとアンプの調整により広範囲をカバー。\n時間分解能：ターンバイターン（208.85 kHz）から10 Hzスローデータまで、異なるタイムスケールでの軌道監視を並列実行可能。',
            combinationPotential: '機械学習との組合せ：ターンバイターンBPMデータ（208.85 kHz）をリアルタイム解析し、ビーム不安定性の予測と自動補正が可能。AIによる軌道補正アルゴリズム開発により、コミッショニング時間を大幅短縮。\nフィードバックシステムとの統合：高速10 kHzデータを用いた適応型フィードフォワード制御により、アンジュレータの高速ヘリシティ切替による軌道擾乱を5 μm以内に抑制。\nビームベースアライメント：BPMと四極磁石の磁気中心変位測定により、150 μm標準偏差以内での精密アライメントを実現。\nデジタルツイン技術：BPMリアルタイムデータと加速器シミュレーションを統合し、仮想加速器モデルで運転最適化と故障予測を実現。\n量子センサー技術：極低温BPM電子回路の開発知見を量子ビット読み出し回路に応用可能。\nIoT監視システム：パイロットトーン生成器による自己診断機能を拡張し、予防保全と遠隔監視を実現。'
        },
        'PhysRevAccelBeams': {
            mainConclusion: 'NanoTerasuは、周長349 mのコンパクトな4ベンドアクロマット格子を持つ3 GeV放射光施設として2024年4月にユーザー運用を開始しました。半年間のコミッショニングで、設計値1.14 nm radの水平エミッタンス、ベータトロンチューン(28.17, 9.23)、200 mAの蓄積電流を達成し、モデルと整合性のあるリング光学系を確立しました。初年度運用では160 mA安定運転を実現し、99.4%のユーザーサービス時間を達成しました。',
            priorWork: '1) MAX-IV (2016年)、ESRF-EBS (2020年)、Sirius (2021年)における多ベンドアクロマット格子の先行実装\n2) SPring-8での加速器技術開発：TM020モードHOM減衰空洞、オフアクシス入射システム\n3) Cバンド線形加速器技術：42 MV/m加速勾配とSLED技術の応用\n4) グリッド付き熱陰極電子銃による低エミッタンスビーム生成技術\n5) レーザートラッカーと振動ワイヤー法を用いた50 μm以下の精密磁石アライメント技術',
            novelty: 'コンパクト施設（周長349 m）で4ベンドアクロマット格子を採用し、軟X線から tender X線領域で10²¹の輝度を実現。110 m長の全エネルギー入射Cバンドライナック（42 MV/m）により施設の大幅な小型化を達成。B-Q複合型偏向磁石を用いた4ベンドアクロマット設計で、各セルに挿入光源用長直線部2本を確保。TM020モード空洞にHOM減衰器を内蔵し、0.5 m長で0.9 MV加速を実現（従来HOM減衰空洞比で高加速勾配）。真空内オフアクシス入射システムにより、7.5 mm局所バンプと10 μm以下の蓄積ビーム擾乱でトップアップ運転を実現。',
            unknownQuestions: '1) 400 mA蓄積電流達成に向けた230 mA以上での結合バンチ不安定性の原因解明と対策\n2) TM020空洞のHOM減衰器を追加してもビームサイズ拡大が改善されなかった物理機構\n3) 28挿入光源フル運転時（平均9 kW×28台）での蓄積リング真空とビーム寿命への影響\n4) 建屋と地盤の季節変動（最大0.2 mm）が長期的なビーム安定性と光学系に与える影響\n5) 2%結合定数を設計値1%まで低減した場合のTouschekビーム寿命と垂直エミッタンスのトレードオフ',
            failedApproach: '初期のHOM減衰器配置では、結合器ポート近傍の減衰器がTM020基本モードを0.3-0.5%吸収し、フェライトの自己加熱によりキュリー温度超過のリスクがあったため除去。標準的なフレキシブル同軸ケーブルは高放射線エリアで湿度感度により故障したため、PEEK絶縁ケーブルに変更。水冷なしの室温動作では電極が10°C以上上昇し10 μm以上の熱変位が発生したため、±0.1°C温度安定化水冷システムを導入。HOM減衰器を空洞2、3、4に追加（各14個）したが、230 mA以上での不安定性閾値電流は大幅には改善せず、さらなる対策が必要。',
            crossDomain: '次世代放射光施設：ESRF-EBS、APS-U、PETRA IVなど既存第三世代光源アップグレードへの4ベンドアクロマット設計の適用\n将来円形衝突型加速器：FCC、CEPCでのサブミクロン軌道安定性を要する精密ビーム診断技術\n小型医療用放射光源：コンパクト設計技術のがん治療用放射光源への応用\n軟X線自由電子レーザー：線形加速器ビームライン拡張による将来FEL計画\n高エネルギー物理実験：低エミッタンス入射器技術の粒子加速器への応用\n半導体製造：先進リソグラフィーと材料評価のための超高輝度軟X線源\n産業材料分析：オペランド分光法による触媒・電池材料のリアルタイム観察',
            industrialPain: '軟X線ユーザーコミュニティ：1-3 keVフォトンエネルギー範囲で10²¹輝度とコヒーレンス比8.1%を提供し、SPring-8の硬X線を補完\n材料科学・ナノサイエンス：1-3 keVの高輝度軟X線による先端材料のin-situ観察と時間分解分光\n半導体産業：次世代チップのための先進リソグラフィーと欠陥評価\n製薬・生命科学：タンパク質結晶構造解析と創薬ターゲット同定\n触媒研究：自動車・化学産業向け環境触媒のオペランド観察\n建設コスト削減：コンパクト設計により放射光施設建設の初期投資を大幅削減\n運用効率：110 m Cバンドライナックと真空内入射により保守性向上とダウンタイム削減',
            abstractPrinciple: '電子を超高速で回す巨大なドーナツ型のトラックを想像してね。NanoTerasuは、このトラックを普通の施設より小さく作ったんだ（周りの長さが349メートル）。電子はほぼ光の速さで走っていて、曲がるときに特別な光（X線）を出すんだ。この光で、科学者たちは物質の中を見ることができるんだよ。電子銃から出た電子は、110メートルの長い直線の道（加速器）で超高速まで加速されてから、ドーナツ型のトラックに入るんだ。トラックには曲がり角が64個もあって（16個のセルに4つずつ）、各曲がり角で電子はX線を出すんだ。この施設は小学校の体育館くらいの大きさに収まるくらいコンパクトだから、街中に作ることもできるんだよ！',
            experimentalReason: '4ベンドアクロマット格子の選択理由：コンパクトな周長349 mで1.14 nm radの低エミッタンスを実現し、軟X線ユーザー要求を満たす\nCバンド加速器（42 MV/m）の採用：110 m長で3 GeV全エネルギー入射を実現し、施設全体を小型化\nB-Q複合型偏向磁石の設計：補助電源なしで全偏向磁石を直列接続し、減衰分配数Jx=1.389を実現\nTM020空洞の開発理由：0.5 m長で0.9 MV加速を達成し、5.44 m直線部に4台設置可能\nオフアクシス入射方式：7.5 mm局所バンプと10 μm以下の蓄積ビーム擾乱でトップアップ運転を実現\n508.76 MHz加速周波数：592ハーモニクス数で適切なバンチ長2.92 mm（設計値）を実現\n50 μm磁石アライメント精度：線形光学応答を保証し、光学補正の収束を確保',
            scalingPossibility: 'エネルギースケール：3 GeV（軟X線）から6 GeV級（SPring-8-II）への拡張が可能。Cバンド加速器の段数追加で対応。\n周長スケール：349 m（NanoTerasu）から500 m超の中型施設、さらに1-2 kmの大型施設まで4ベンドアクロマット設計を適用可能。\n挿入光源数：現在10ビームライン（初年度）から最大28ビームライン（長直線14本、短直線14本）まで拡張可能。\n蓄積電流：現在200 mA安定運転から設計値400 mAへの増強、将来的には500 mA超も可能。\n自由電子レーザー拡張：線形加速器ビームラインを延長し、軟X線FEL施設として機能拡張が計画中。',
            combinationPotential: '機械学習ビーム診断：7×16=112台のBPMデータをリアルタイムAI解析し、軌道予測制御とコミッショニング時間短縮を実現。\nデジタルツイン技術：実測BPMデータと加速器モデルシミュレーションを統合し、仮想加速器での運転最適化と予測保守を実現。\nアダプティブ光学系：ベータ関数・分散関数の自動補正により、挿入光源運転中も光学系を動的に最適化。\nビームベースアライメント：BPMと四極磁石の磁気中心を精密測定し、機械アライメント50 μmをさらに改善。\n高度フィードバック制御：バンチバイバンチフィードバックとアンジュレータ補正の統合により、10 μm以下の軌道安定性を実現。\n量子技術への応用：低エミッタンスビーム生成技術を量子ビーム源や量子情報処理への展開。\nAI故障予測：真空圧力、RF反射、ビーム寿命などの統合監視により、ダウンタイムを最小化。'
        }
    };
    const processFile = async (file)=>{
        if (file && file.type === 'application/pdf') {
            setUploadedFile(file);
            setIsProcessing(true);
            try {
                // Read PDF as base64
                const base64Data = await new Promise((resolve, reject)=>{
                    const reader = new FileReader();
                    reader.onload = ()=>resolve(reader.result.split(',')[1]);
                    reader.onerror = ()=>reject(new Error('Failed to read file'));
                    reader.readAsDataURL(file);
                });
                // Call Claude API to analyze PDF
                const analysis = await analyzePDF(base64Data, file.name);
                setFormData(analysis);
                setIsProcessing(false);
                setCurrentView('form');
            } catch (error) {
                console.error('PDF analysis error:', error);
                alert('PDF分析中にエラーが発生しました: ' + error.message);
                setIsProcessing(false);
            }
        } else {
            alert('PDFファイルのみアップロード可能です');
        }
    };
    const handleFileUpload = (e)=>{
        const file = e.target.files[0];
        processFile(file);
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (!isLoggedIn) {
            setShowLoginModal(true);
            return;
        }
        const file = e.dataTransfer.files[0];
        processFile(file);
    };
    const handleInputChange = (id, value)=>{
        setFormData((prev)=>({
                ...prev,
                [id]: value
            }));
    };
    const handleSubmit = async ()=>{
        try {
            const response = await fetch('http://localhost:8000/api/papers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: formData.title || (uploadedFile ? uploadedFile.name.replace('.pdf', '') : '新規論文'),
                    title_en: formData.title_en || formData.titleEn || '',
                    authors: formData.authors || '',
                    year: formData.year || new Date().getFullYear(),
                    field: formData.field || '材料科学 (Materials Science)',
                    method: formData.method || 'X線回折 (X-ray Diffraction)',
                    beamline: formData.beamline || 'BL19B2',
                    application: formData.application || '自動車産業 (Automotive)',
                    main_conclusion: formData.mainConclusion || '',
                    industrial_application: formData.industrialPain || '',
                    cross_domain: formData.crossDomain || '',
                    failed_approach: formData.failedApproach || '',
                    form_data: {
                        main_conclusion: formData.mainConclusion,
                        prior_work: formData.priorWork,
                        novelty: formData.novelty,
                        unknown_questions: formData.unknownQuestions,
                        failed_approach: formData.failedApproach,
                        cross_domain: formData.crossDomain,
                        industrial_pain: formData.industrialPain,
                        abstract_principle: formData.abstractPrinciple,
                        experimental_reason: formData.experimentalReason,
                        scaling_possibility: formData.scalingPossibility,
                        combination_potential: formData.combinationPotential
                    },
                    related_papers: selectedRelatedPapers.map((r)=>({
                            paper_id: String(r.paperId),
                            relationship_type: r.relationshipType
                        }))
                })
            });
            const newPaper = await response.json();
            // Normalize field names from backend
            const normalized = {
                ...newPaper,
                titleEn: newPaper.title_en,
                mainConclusion: newPaper.main_conclusion,
                industrialApplication: newPaper.industrial_application,
                crossDomain: newPaper.cross_domain,
                failedApproach: newPaper.failed_approach,
                formData: newPaper.form_data ? {
                    priorWork: newPaper.form_data.prior_work,
                    novelty: newPaper.form_data.novelty,
                    unknownQuestions: newPaper.form_data.unknown_questions,
                    failedApproach: newPaper.form_data.failed_approach,
                    crossDomain: newPaper.form_data.cross_domain,
                    abstractPrinciple: newPaper.form_data.abstract_principle,
                    experimentalReason: newPaper.form_data.experimental_reason,
                    scalingPossibility: newPaper.form_data.scaling_possibility,
                    combinationPotential: newPaper.form_data.combination_potential
                } : null
            };
            setPapers((prevPapers)=>[
                    normalized,
                    ...prevPapers
                ]);
        } catch (error) {
            console.error('Submit error:', error);
            alert('登録に失敗しました: ' + error.message);
        }
        setFormData({});
        setUploadedFile(null);
        setSelectedRelatedPapers([]);
        setPdfText('');
        setCurrentView('search');
    };
    const toggleFilter = (category, value)=>{
        setSelectedFilters((prev)=>{
            const current = prev[category];
            const updated = current.includes(value) ? current.filter((v)=>v !== value) : [
                ...current,
                value
            ];
            return {
                ...prev,
                [category]: updated
            };
        });
    };
    const filteredPapers = papers.filter((paper)=>{
        const matchesSearch = searchQuery === '' || paper.title.toLowerCase().includes(searchQuery.toLowerCase()) || paper.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) || paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) || paper.mainConclusion.toLowerCase().includes(searchQuery.toLowerCase()) || paper.industrialApplication.toLowerCase().includes(searchQuery.toLowerCase()) || paper.crossDomain.toLowerCase().includes(searchQuery.toLowerCase()) || paper.field.toLowerCase().includes(searchQuery.toLowerCase()) || paper.method.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesField = selectedFilters.field.length === 0 || selectedFilters.field.includes(paper.field);
        const matchesMethod = selectedFilters.method.length === 0 || selectedFilters.method.includes(paper.method);
        const matchesApplication = selectedFilters.application.length === 0 || selectedFilters.application.includes(paper.application);
        const matchesBeamline = selectedFilters.beamline.length === 0 || selectedFilters.beamline.includes(paper.beamline);
        const matchesYear = selectedFilters.year.length === 0 || selectedFilters.year.includes(paper.year);
        return matchesSearch && matchesField && matchesMethod && matchesApplication && matchesBeamline && matchesYear;
    });
    // Login Modal (variable, not component, to prevent focus loss)
    const loginModal = showLoginModal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        style: {
            backgroundColor: 'rgba(0,0,0,0.25)',
            backdropFilter: 'blur(4px)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-xl p-6",
            style: {
                width: '320px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-gray-900 mb-1",
                    children: "ログイン"
                }, void 0, false, {
                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                    lineNumber: 946,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4 text-xs text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-gray-700",
                            children: "Demo credentials"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 948,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 948,
                            columnNumber: 80
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Username: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "font-mono text-gray-800",
                            children: "spring8"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 949,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        "  |  Password: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "font-mono text-gray-800",
                            children: "article"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 949,
                            columnNumber: 102
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                    lineNumber: 947,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                loginError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mb-3 p-2 bg-red-50 border border-red-200 text-red-600 text-xs rounded",
                    children: loginError
                }, void 0, false, {
                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                    lineNumber: 952,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "block text-xs font-semibold text-gray-600 mb-1",
                            children: "ユーザー名"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 957,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: loginUsername,
                            onChange: (e)=>setLoginUsername(e.target.value),
                            className: "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-red-800 focus:outline-none",
                            placeholder: "username"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 958,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                    lineNumber: 956,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "block text-xs font-semibold text-gray-600 mb-1",
                            children: "パスワード"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 967,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "password",
                            value: loginPassword,
                            onChange: (e)=>setLoginPassword(e.target.value),
                            onKeyDown: (e)=>e.key === 'Enter' && handleLogin(),
                            className: "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-red-800 focus:outline-none",
                            placeholder: "password"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 968,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                    lineNumber: 966,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setShowLoginModal(false);
                                setLoginError('');
                            },
                            className: "flex-1 px-3 py-2 text-sm border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50",
                            children: "キャンセル"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 978,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: handleLogin,
                            className: "flex-1 px-3 py-2 text-sm bg-red-800 text-white rounded-lg hover:bg-red-900 font-semibold",
                            children: "ログイン"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 984,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                    lineNumber: 977,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
            lineNumber: 945,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
        lineNumber: 944,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : null;
    // アップロードビュー (Upload View)
    if (currentView === 'upload') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: [
                loginModal,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-full mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-white border-b border-gray-200 px-8 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: "SPring-8 研究データベース"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1006,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrentView('upload'),
                                                className: "px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$home$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1014,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1010,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700 font-medium",
                                                        children: "ようこそ、Spring-8さん 👋"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1018,
                                                        columnNumber: 5
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsLoggedIn(false),
                                                        className: "px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium",
                                                        children: "ログアウト"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1019,
                                                        columnNumber: 5
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1017,
                                                columnNumber: 3
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowLoginModal(true),
                                                className: "px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium",
                                                children: "ログイン"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1027,
                                                columnNumber: 3
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1009,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1005,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 1004,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "mx-auto p-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "font-serif text-gray-900 mb-5",
                                            style: {
                                                fontSize: '52px'
                                            },
                                            children: "多次元研究コンテキストグラフシステム"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 1041,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 tracking-wide",
                                            style: {
                                                fontSize: '19px'
                                            },
                                            children: "Multi-Dimensional Research Context Graph System"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 1042,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '48px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 1043,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                    lineNumber: 1040,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: '24px',
                                        margin: '0 auto',
                                        justifyContent: 'center',
                                        alignItems: 'stretch'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setCurrentView('search'),
                                            style: {
                                                background: 'white',
                                                border: '1.5px solid #d1d5db',
                                                borderRadius: '20px',
                                                minHeight: '320px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                padding: '40px 24px',
                                                transition: 'box-shadow 0.2s',
                                                flex: '1',
                                                maxWidth: '320px'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)',
                                            onMouseLeave: (e)=>e.currentTarget.style.boxShadow = 'none',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    style: {
                                                        width: '56px',
                                                        height: '56px',
                                                        color: '#7f1d1d',
                                                        marginBottom: '20px',
                                                        strokeWidth: 1.5
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1068,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "                ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: '700',
                                                        fontSize: '20px',
                                                        color: '#111',
                                                        marginBottom: '8px'
                                                    },
                                                    children: "研究を検索"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1068,
                                                    columnNumber: 141
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: '#9ca3af',
                                                        fontSize: '15px',
                                                        marginBottom: '14px'
                                                    },
                                                    children: "Search Research"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1070,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: '#9ca3af',
                                                        fontSize: '13px',
                                                        lineHeight: '1.7',
                                                        textAlign: 'center'
                                                    },
                                                    children: [
                                                        "論文、産業応用、異分野応用を",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                            lineNumber: 1071,
                                                            columnNumber: 121
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "キーワードで検索できます"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1071,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 1048,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            onDragOver: handleDragOver,
                                            onDragLeave: handleDragLeave,
                                            onDrop: handleDrop,
                                            style: {
                                                background: 'white',
                                                border: isDragging ? '1.5px solid #60a5fa' : '1.5px solid #d1d5db',
                                                borderRadius: '20px',
                                                minHeight: '320px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                padding: '40px 24px',
                                                transition: 'box-shadow 0.2s',
                                                flex: '1',
                                                maxWidth: '320px'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)',
                                            onMouseLeave: (e)=>e.currentTarget.style.boxShadow = 'none',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    cursor: 'pointer',
                                                    width: '100%'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: ".pdf",
                                                        onChange: isLoggedIn ? handleFileUpload : (e)=>{
                                                            e.preventDefault();
                                                            setShowLoginModal(true);
                                                        },
                                                        style: {
                                                            display: 'none'
                                                        },
                                                        onClick: !isLoggedIn ? (e)=>{
                                                            e.preventDefault();
                                                            setShowLoginModal(true);
                                                        } : undefined
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1098,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                                        style: {
                                                            width: '56px',
                                                            height: '56px',
                                                            color: '#7f1d1d',
                                                            marginBottom: '20px',
                                                            strokeWidth: 1.5
                                                        },
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1106,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        style: {
                                                            width: '56px',
                                                            height: '56px',
                                                            color: '#7f1d1d',
                                                            marginBottom: '20px',
                                                            strokeWidth: 1.5
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1107,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: '700',
                                                            fontSize: '20px',
                                                            color: '#111',
                                                            marginBottom: '8px'
                                                        },
                                                        children: "論文をアップロード"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1109,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: '#9ca3af',
                                                            fontSize: '15px',
                                                            marginBottom: '14px'
                                                        },
                                                        children: "Upload Paper"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1111,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: '#9ca3af',
                                                            fontSize: '13px'
                                                        },
                                                        children: "AIが解析中..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1113,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: '#9ca3af',
                                                                    fontSize: '13px',
                                                                    lineHeight: '1.7',
                                                                    textAlign: 'center'
                                                                },
                                                                children: [
                                                                    "研究論文をアップロードして",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                        lineNumber: 1115,
                                                                        columnNumber: 128
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "データベースに登録"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1115,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: '#f59e0b',
                                                                    fontSize: '13px',
                                                                    marginTop: '16px'
                                                                },
                                                                children: "🔒 ログインが必要です"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1116,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1097,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 1075,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            onClick: ()=>window.open('https://pressrelease-seven.vercel.app/', '_blank'),
                                            style: {
                                                background: 'white',
                                                border: '1.5px solid #d1d5db',
                                                borderRadius: '20px',
                                                minHeight: '320px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                padding: '40px 24px',
                                                transition: 'box-shadow 0.2s',
                                                flex: '1',
                                                maxWidth: '320px'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)',
                                            onMouseLeave: (e)=>e.currentTarget.style.boxShadow = 'none',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    style: {
                                                        width: '56px',
                                                        height: '56px',
                                                        color: '#7f1d1d',
                                                        marginBottom: '20px',
                                                        strokeWidth: 1.5
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1143,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: '700',
                                                        fontSize: '20px',
                                                        color: '#111',
                                                        marginBottom: '8px'
                                                    },
                                                    children: "プレスリリース"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1144,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: '#9ca3af',
                                                        fontSize: '15px',
                                                        marginBottom: '14px'
                                                    },
                                                    children: "Press Releases"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1146,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: '#9ca3af',
                                                        fontSize: '13px',
                                                        lineHeight: '1.7',
                                                        textAlign: 'center'
                                                    },
                                                    children: [
                                                        "SPring-8の最新",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                            lineNumber: 1147,
                                                            columnNumber: 118
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "プレスリリースを閲覧"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1147,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 1123,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                    lineNumber: 1046,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 1039,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                    lineNumber: 1002,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
            lineNumber: 1000,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // フォームビュー (Form View)
    // フォームビュー (Form View)
    if (currentView === 'form') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            style: {
                backgroundColor: '#f0f0f0'
            },
            children: [
                loginModal,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-full mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-white border-b border-gray-200 px-8 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: "SPring-8 研究データベース"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1169,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-700 font-medium",
                                                    children: "ようこそ、Spring-8さん 👋"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1176,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsLoggedIn(false),
                                                    className: "px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium",
                                                    children: "ログアウト"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1177,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 1175,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowLoginModal(true),
                                            className: "px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium",
                                            children: "ログイン"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 1185,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1172,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1168,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 1167,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-gray-300 rounded-lg p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-bold text-gray-800 mb-2",
                                                children: "MDRCG 情報入力フォーム"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1200,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "Research Context Information Form"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1203,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1199,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    papers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                        className: "w-5 h-5 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1210,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold text-gray-800",
                                                        children: "関連論文の選択 (Related Papers)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1211,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1209,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mb-4",
                                                children: "この論文と関連する既存の論文を選択し、関係性を指定してください"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1215,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 max-h-64 overflow-y-auto",
                                                children: papers.map((paper)=>{
                                                    const existingRelation = selectedRelatedPapers.find((r)=>r.paperId === paper.id);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 p-3 bg-white rounded border border-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: !!existingRelation,
                                                                onChange: (e)=>{
                                                                    if (e.target.checked) {
                                                                        setSelectedRelatedPapers([
                                                                            ...selectedRelatedPapers,
                                                                            {
                                                                                paperId: paper.id,
                                                                                relationshipType: 'Cited'
                                                                            }
                                                                        ]);
                                                                    } else {
                                                                        setSelectedRelatedPapers(selectedRelatedPapers.filter((r)=>r.paperId !== paper.id));
                                                                    }
                                                                },
                                                                className: "w-4 h-4 accent-blue-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1223,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-gray-800",
                                                                        children: paper.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                        lineNumber: 1239,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500",
                                                                        children: [
                                                                            paper.authors,
                                                                            " (",
                                                                            paper.year,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                        lineNumber: 1240,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1238,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            existingRelation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                value: existingRelation.relationshipType,
                                                                onChange: (e)=>{
                                                                    setSelectedRelatedPapers(selectedRelatedPapers.map((r)=>r.paperId === paper.id ? {
                                                                            ...r,
                                                                            relationshipType: e.target.value
                                                                        } : r));
                                                                },
                                                                className: "px-3 py-1 border-2 border-gray-300 rounded text-sm font-medium",
                                                                children: relationshipTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: type,
                                                                        children: type
                                                                    }, type, false, {
                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                        lineNumber: 1253,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1243,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, paper.id, true, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1222,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1218,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1208,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-6 max-h-[600px] overflow-y-auto pr-4",
                                        children: mdrcgQuestions.map((question)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "border-b pb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-semibold text-gray-800",
                                                            children: [
                                                                question.label,
                                                                question.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500 ml-1",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 1270,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                            lineNumber: 1268,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1267,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                                        value: formData[question.id] || '',
                                                        onChange: (e)=>handleInputChange(question.id, e.target.value),
                                                        placeholder: question.placeholder,
                                                        className: "w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none min-h-[120px] bg-yellow-50",
                                                        required: question.required
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1273,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mt-1",
                                                        children: "💡 AIが生成した内容です。必要に応じて修正してください"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1280,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, question.id, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1266,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1264,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-8 flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrentView('upload'),
                                                className: "px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold",
                                                children: "← 戻る"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1288,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: handleSubmit,
                                                className: "flex-1 px-6 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold",
                                                children: "登録して公開"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1294,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1287,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1198,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 1197,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                    lineNumber: 1165,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
            lineNumber: 1163,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // 高度検索ビュー (Advanced Search View)
    if (currentView === 'advancedSearch') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-serif text-gray-900",
                                        children: "高度検索"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1316,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrentView('search'),
                                        className: "text-sm text-blue-700 hover:text-blue-900 underline",
                                        children: "← 簡易検索に戻る"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1317,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1315,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "text-sm text-blue-700 hover:underline",
                                children: "検索ヘルプ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1324,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                        lineNumber: 1314,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "border-b-2 border-gray-300 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "px-6 py-3 text-sm font-semibold border-b-4 border-black -mb-0.5",
                                children: "全コンテンツ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1329,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "px-6 py-3 text-sm text-gray-600 hover:text-gray-900",
                                children: "画像"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1332,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                        lineNumber: 1328,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg border border-gray-300 p-8 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-serif text-gray-900 mb-6",
                                children: "検索クエリを構築"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1339,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            advancedSearchRows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-12 gap-4 items-start",
                                        children: [
                                            index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold text-gray-700 mb-1",
                                                        children: "論理演算子"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1346,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                        value: row.boolean,
                                                        onChange: (e)=>{
                                                            const newRows = [
                                                                ...advancedSearchRows
                                                            ];
                                                            newRows[index].boolean = e.target.value;
                                                            setAdvancedSearchRows(newRows);
                                                        },
                                                        className: "w-full px-3 py-2 border border-gray-400 rounded text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "AND",
                                                                children: "AND"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1356,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "OR",
                                                                children: "OR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1357,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "NOT",
                                                                children: "NOT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1358,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "NEAR 5",
                                                                children: "NEAR 5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1359,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "NEAR 10",
                                                                children: "NEAR 10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1360,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "NEAR 25",
                                                                children: "NEAR 25"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1361,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1347,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1345,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: index === 0 ? 'col-span-6' : 'col-span-5',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold text-gray-700 mb-1",
                                                        children: "検索語句"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1367,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: row.term,
                                                        onChange: (e)=>{
                                                            const newRows = [
                                                                ...advancedSearchRows
                                                            ];
                                                            newRows[index].term = e.target.value;
                                                            setAdvancedSearchRows(newRows);
                                                        },
                                                        className: "w-full px-3 py-2 border border-gray-400 rounded text-sm",
                                                        placeholder: "検索キーワードを入力..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1368,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1366,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "col-span-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold text-gray-700 mb-1",
                                                        children: "検索フィールド"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1382,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                        value: row.field,
                                                        onChange: (e)=>{
                                                            const newRows = [
                                                                ...advancedSearchRows
                                                            ];
                                                            newRows[index].field = e.target.value;
                                                            setAdvancedSearchRows(newRows);
                                                        },
                                                        className: "w-full px-3 py-2 border border-gray-400 rounded text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "all",
                                                                children: "全フィールド"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1392,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "title",
                                                                children: "タイトル"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1393,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "author",
                                                                children: "著者"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1394,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "abstract",
                                                                children: "要旨"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1395,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "caption",
                                                                children: "説明"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1396,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1383,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1381,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "col-span-1 pt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setAdvancedSearchRows(advancedSearchRows.filter((r)=>r.id !== row.id));
                                                    },
                                                    className: "text-gray-600 hover:text-red-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1408,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1402,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1401,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1343,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, row.id, false, {
                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                    lineNumber: 1342,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setAdvancedSearchRows([
                                        ...advancedSearchRows,
                                        {
                                            id: Date.now(),
                                            boolean: 'AND',
                                            term: '',
                                            field: 'all'
                                        }
                                    ]);
                                },
                                className: "mt-4 px-4 py-2 text-sm border border-gray-400 rounded hover:bg-gray-50 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1425,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " 行を追加"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1416,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-gray-700 mb-2",
                                        children: "アクセスタイプを選択"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1430,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                        className: "w-80 px-3 py-2 border border-gray-400 rounded text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                children: "すべて"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1432,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                children: "アクセス可能なコンテンツ"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1433,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1431,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1429,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    // Apply advanced search and go back to results
                                    setCurrentView('search');
                                },
                                className: "mt-6 px-8 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold",
                                children: "高度検索を実行"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1437,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                        lineNumber: 1338,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg border border-gray-300 p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-serif text-gray-900 mb-6",
                                children: "検索結果を絞り込む"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1450,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-900 mb-3",
                                        children: "アイテムタイプ"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1454,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            '論文',
                                            '研究報告',
                                            'レビュー',
                                            'その他',
                                            '書籍'
                                        ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 text-sm cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedItemTypes.includes(type),
                                                        onChange: ()=>{
                                                            setSelectedItemTypes((prev)=>prev.includes(type) ? prev.filter((t)=>t !== type) : [
                                                                    ...prev,
                                                                    type
                                                                ]);
                                                        },
                                                        className: "w-4 h-4 accent-red-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1458,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700",
                                                        children: type
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1468,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, type, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1457,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1455,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1453,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-900 mb-3",
                                        children: "出版日"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1476,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs text-gray-600 mb-1",
                                                        children: "開始日"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1479,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: dateFrom,
                                                        onChange: (e)=>setDateFrom(e.target.value),
                                                        placeholder: "yyyy/mm/dd",
                                                        className: "w-32 px-3 py-2 border border-gray-400 rounded text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1480,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1478,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "pt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600",
                                                    children: "〜"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1489,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1488,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs text-gray-600 mb-1",
                                                        children: " "
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1492,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: dateTo,
                                                        onChange: (e)=>setDateTo(e.target.value),
                                                        placeholder: "yyyy/mm/dd",
                                                        className: "w-32 px-3 py-2 border border-gray-400 rounded text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1493,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1491,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1477,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1475,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-900 mb-3",
                                        children: "学術分野で絞り込む"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1506,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-1 max-h-96 overflow-y-auto border border-gray-300 rounded p-4",
                                        children: Object.entries(disciplines).map(([key, discipline])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                    className: "flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selectedDisciplines.includes(key),
                                                            onChange: ()=>{
                                                                setSelectedDisciplines((prev)=>prev.includes(key) ? prev.filter((d)=>d !== key) : [
                                                                        ...prev,
                                                                        key
                                                                    ]);
                                                            },
                                                            className: "w-4 h-4 mt-0.5 accent-red-800"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                            lineNumber: 1511,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-gray-900",
                                                                    children: discipline.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 1522,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                selectedDisciplines.includes(key) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "ml-6 mt-2 space-y-1",
                                                                    children: discipline.journals.map((journal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-blue-700 hover:underline cursor-pointer",
                                                                            children: journal
                                                                        }, journal, false, {
                                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                            lineNumber: 1526,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 1524,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                            lineNumber: 1521,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1510,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, key, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1509,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1507,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1505,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setCurrentView('search');
                                },
                                className: "px-8 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold",
                                children: "高度検索を実行"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1539,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                        lineNumber: 1449,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                lineNumber: 1312,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
            lineNumber: 1311,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // 論文詳細ビュー (Paper Detail View)
    if (currentView === 'search' && viewingPaper) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-full mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-gray-200 px-8 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "SPring-8 研究データベース"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                    lineNumber: 1561,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setViewingPaper(null),
                                            className: "px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium",
                                            children: "← 検索結果に戻る"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 1565,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-700 font-medium",
                                                    children: "ようこそ、Spring-8さん 👋"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1573,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsLoggedIn(false),
                                                    className: "px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium",
                                                    children: "ログアウト"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1574,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 1572,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowLoginModal(true),
                                            className: "px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium",
                                            children: "ログイン"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 1582,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                    lineNumber: 1564,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                            lineNumber: 1560,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                        lineNumber: 1559,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-gray-300 rounded-lg p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-600 uppercase tracking-wide",
                                                children: "学術論文"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1598,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-serif text-gray-900 mt-2 mb-4",
                                                children: viewingPaper.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1599,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-xl text-gray-600 mb-4",
                                                children: viewingPaper.titleEn
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1602,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 mb-2",
                                                children: [
                                                    "著者: ",
                                                    viewingPaper.authors
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1603,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-sm italic text-gray-600",
                                                children: [
                                                    "SPring-8 Research Journal, Vol. ",
                                                    viewingPaper.id,
                                                    ", No. 1 (",
                                                    viewingPaper.year,
                                                    "), pp. 1-20"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1604,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1597,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 mb-8 pb-8 border-b border-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    if (viewingPaper.uploadedFile) {
                                                        const fileURL = URL.createObjectURL(viewingPaper.uploadedFile);
                                                        window.open(fileURL, '_blank');
                                                    } else {
                                                        alert('この論文のPDFファイルは利用できません');
                                                    }
                                                },
                                                className: "px-6 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold",
                                                children: "PDFを開く"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1611,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold",
                                                children: "保存"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1624,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold",
                                                children: "引用"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1627,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1610,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-6 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-700 mb-2",
                                                        children: "研究分野"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1635,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-900",
                                                        children: viewingPaper.field
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1636,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1634,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-700 mb-2",
                                                        children: "測定手法"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1639,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-900",
                                                        children: viewingPaper.method
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1640,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1638,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-700 mb-2",
                                                        children: "ビームライン"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1643,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-900",
                                                        children: viewingPaper.beamline
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1644,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1642,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-700 mb-2",
                                                        children: "産業応用"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1647,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-900",
                                                        children: viewingPaper.application
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1648,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1646,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1633,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    viewingPaper.formData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300",
                                                children: "MDRCG 詳細情報"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1655,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "主な結論"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1660,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.mainConclusion
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1661,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1659,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.priorWork && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "先行研究との関係"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1666,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed whitespace-pre-line",
                                                        children: viewingPaper.formData.priorWork
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1667,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1665,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.novelty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "新規性"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1673,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.novelty
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1674,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1672,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.unknownQuestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "未解明の課題"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1680,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed whitespace-pre-line",
                                                        children: viewingPaper.formData.unknownQuestions
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1681,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1679,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.failedApproach && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "失敗したアプローチ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1687,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.failedApproach
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1688,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1686,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.crossDomain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "異分野翻訳レイヤー"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1694,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.crossDomain
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1695,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1693,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.industrialApplication && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "産業応用可能性"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1701,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.industrialApplication
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1702,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1700,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.abstractPrinciple && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "抽象化された原理（小学5年生レベル）"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1708,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.abstractPrinciple
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1709,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1707,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.experimentalReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "実験設計の理由"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1715,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.experimentalReason
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1716,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1714,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.scalingPossibility && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "スケーリング可能性"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1722,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.scalingPossibility
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1723,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1721,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.combinationPotential && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "組み合わせ可能性"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1729,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.combinationPotential
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1730,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1728,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1654,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    viewingPaper.relatedPapers && viewingPaper.relatedPapers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-8 pt-8 border-t-2 border-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                        className: "w-6 h-6 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1740,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "関連論文 (Related Papers)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1739,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: viewingPaper.relatedPapers.map((relation)=>{
                                                    const relatedPaper = papers.find((p)=>p.id === relation.paperId);
                                                    return relatedPaper ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "p-4 bg-blue-50 border-l-4 border-blue-500 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-gray-900",
                                                                            children: relatedPaper.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                            lineNumber: 1750,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-600 mt-1",
                                                                            children: [
                                                                                relatedPaper.authors,
                                                                                " (",
                                                                                relatedPaper.year,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                            lineNumber: 1751,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 1749,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "ml-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full",
                                                                    children: relation.relationshipType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 1753,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                            lineNumber: 1748,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, relation.paperId, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1747,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)) : null;
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1743,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1738,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1595,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewingPaper(null),
                                    className: "px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold",
                                    children: "← 検索結果に戻る"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                    lineNumber: 1767,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1766,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                        lineNumber: 1594,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                lineNumber: 1557,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
            lineNumber: 1556,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // 検索ビュー (Search View)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            loginModal,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-full mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-gray-200 px-8 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: "SPring-8 Research Database"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1788,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrentView('upload'),
                                                className: "px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$home$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1796,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1792,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700 font-medium",
                                                        children: "ようこそ、Spring-8さん 👋"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1800,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsLoggedIn(false),
                                                        className: "px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium",
                                                        children: "ログアウト"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1801,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1799,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowLoginModal(true),
                                                className: "px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium",
                                                children: "Log in"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1809,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1791,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1787,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                placeholder: "キーワード、産業応用、異分野応用などで検索...",
                                                className: "w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded focus:border-gray-400 focus:outline-none text-base"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1821,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "absolute right-3 top-3 text-gray-600 hover:text-gray-900",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1829,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 1828,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1820,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrentView('advancedSearch'),
                                        className: "mt-2 text-sm text-blue-700 hover:text-blue-900 underline",
                                        children: "高度検索"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1832,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1819,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                        lineNumber: 1786,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "w-64 border-r border-gray-200 bg-gray-50 p-6 min-h-screen",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-gray-900 mb-4",
                                        children: "Refine Results"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1845,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    showAdvancedSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                                        className: "text-2xl font-bold",
                                                                        children: "高度検索 (Advanced Search)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                        lineNumber: 1854,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm mt-1",
                                                                        children: "階層的なナレッジツリーで探索 (Explore through hierarchical knowledge tree)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                        lineNumber: 1855,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1853,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setShowAdvancedSearch(false);
                                                                    setAdvancedSearchQuery('');
                                                                    setSelectedPath([]);
                                                                    setCurrentBranch(null);
                                                                },
                                                                className: "text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "w-6 h-6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 1866,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1857,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 1852,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1851,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "p-6",
                                                    children: [
                                                        selectedPath.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "mb-4 flex items-center gap-2 text-sm text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setSelectedPath([]);
                                                                        setCurrentBranch(null);
                                                                    },
                                                                    className: "hover:text-blue-600",
                                                                    children: "ホーム (Home)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 1875,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                selectedPath.map((pathItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                children: "→"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                lineNumber: 1886,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    setSelectedPath(selectedPath.slice(0, index + 1));
                                                                                    // Navigate to this level
                                                                                    let branch = searchKnowledgeTree;
                                                                                    for(let i = 0; i <= index; i++){
                                                                                        branch = branch[selectedPath[i]];
                                                                                    }
                                                                                    setCurrentBranch(branch);
                                                                                },
                                                                                className: "hover:text-blue-600 font-semibold",
                                                                                children: pathItem
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                lineNumber: 1887,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                        lineNumber: 1885,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                            lineNumber: 1874,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "relative mb-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                    className: "absolute left-4 top-4 text-gray-400 w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 1908,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: advancedSearchQuery,
                                                                    onChange: (e)=>setAdvancedSearchQuery(e.target.value),
                                                                    placeholder: "キーワードを入力... (Enter keywords...)",
                                                                    className: "w-full pl-12 pr-4 py-4 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none text-lg",
                                                                    autoFocus: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 1909,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                            lineNumber: 1907,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "max-h-[400px] overflow-y-auto",
                                                            children: advancedSearchQuery === '' && selectedPath.length === 0 ? // Show top level categories
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-600 mb-4",
                                                                        children: "カテゴリーを選択するか、キーワードを入力してください (Select a category or enter keywords)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                        lineNumber: 1924,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    Object.keys(searchKnowledgeTree).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            onClick: ()=>{
                                                                                setSelectedPath([
                                                                                    key
                                                                                ]);
                                                                                setCurrentBranch(searchKnowledgeTree[key]);
                                                                            },
                                                                            className: "p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 cursor-pointer transition-all",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                                                className: "font-bold text-gray-800",
                                                                                                children: searchKnowledgeTree[key].label
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                                lineNumber: 1936,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs text-gray-500 mt-1",
                                                                                                children: searchKnowledgeTree[key].branches ? `${Object.keys(searchKnowledgeTree[key].branches).length} サブカテゴリー` : '論文を表示'
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                                lineNumber: 1937,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                        lineNumber: 1935,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                        className: "w-5 h-5 text-gray-400 transform -rotate-90"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                        lineNumber: 1943,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                lineNumber: 1934,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, key, false, {
                                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                            lineNumber: 1926,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1923,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)) : advancedSearchQuery !== '' ? // Show search suggestions
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: getAdvancedSearchSuggestions(advancedSearchQuery)?.length > 0 ? getAdvancedSearchSuggestions(advancedSearchQuery).map((match, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>{
                                                                            setSelectedPath(match.path);
                                                                            setCurrentBranch(match.data);
                                                                            setAdvancedSearchQuery('');
                                                                        },
                                                                        className: "p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 cursor-pointer transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                                            className: "font-bold text-gray-800",
                                                                                            children: match.data.label
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                            lineNumber: 1964,
                                                                                            columnNumber: 35
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-gray-500 mt-1",
                                                                                            children: match.data.branches ? `${Object.keys(match.data.branches).length} サブカテゴリー` : `${match.data.papers?.length || 0} 件の論文`
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                            lineNumber: 1965,
                                                                                            columnNumber: 35
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                    lineNumber: 1963,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                    className: "w-5 h-5 text-gray-400 transform -rotate-90"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                    lineNumber: 1971,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                            lineNumber: 1962,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, index, false, {
                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                        lineNumber: 1953,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-center text-gray-500 py-8",
                                                                    children: "該当する結果が見つかりませんでした (No results found)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 1976,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1950,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)) : currentBranch ? // Show current branch contents
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: [
                                                                    currentBranch.branches && Object.keys(currentBranch.branches).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            onClick: ()=>{
                                                                                setSelectedPath([
                                                                                    ...selectedPath,
                                                                                    key
                                                                                ]);
                                                                                setCurrentBranch(currentBranch.branches[key]);
                                                                            },
                                                                            className: "p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 cursor-pointer transition-all",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                                                className: "font-bold text-gray-800",
                                                                                                children: currentBranch.branches[key].label
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                                lineNumber: 1993,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs text-gray-500 mt-1",
                                                                                                children: currentBranch.branches[key].branches ? `${Object.keys(currentBranch.branches[key].branches).length} サブカテゴリー` : `${currentBranch.branches[key].papers?.length || 0} 件の論文`
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                                lineNumber: 1994,
                                                                                                columnNumber: 33
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                        lineNumber: 1992,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                        className: "w-5 h-5 text-gray-400 transform -rotate-90"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                        lineNumber: 2000,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                lineNumber: 1991,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, key, false, {
                                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                            lineNumber: 1983,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                                    currentBranch.papers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-3 mt-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                                className: "font-bold text-gray-700 border-t pt-4",
                                                                                children: "関連論文 (Related Papers)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                lineNumber: 2006,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            currentBranch.papers.map((paperId)=>{
                                                                                const paper = papers.find((p)=>p.id === paperId);
                                                                                return paper ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                    onClick: ()=>{
                                                                                        setShowAdvancedSearch(false);
                                                                                        // Scroll to paper in main view
                                                                                        document.getElementById(`paper-${paper.id}`)?.scrollIntoView({
                                                                                            behavior: 'smooth'
                                                                                        });
                                                                                    },
                                                                                    className: "p-4 border-2 border-blue-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                                                            className: "font-bold text-gray-800",
                                                                                            children: paper.title
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                            lineNumber: 2019,
                                                                                            columnNumber: 35
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm text-gray-600 mt-1",
                                                                                            children: paper.titleEn
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                            lineNumber: 2020,
                                                                                            columnNumber: 35
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-gray-500 mt-2",
                                                                                            children: [
                                                                                                paper.authors,
                                                                                                " (",
                                                                                                paper.year,
                                                                                                ")"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                            lineNumber: 2021,
                                                                                            columnNumber: 35
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, paper.id, true, {
                                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                                    lineNumber: 2010,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)) : null;
                                                                            })
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                        lineNumber: 2005,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 1981,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)) : null
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                            lineNumber: 1920,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 1871,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 1850,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 1849,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowFilters({
                                                        ...showFilters,
                                                        field: !showFilters.field
                                                    }),
                                                className: "flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: "研究分野 (Research Field)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2041,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    showFilters.field ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2042,
                                                        columnNumber: 38
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2042,
                                                        columnNumber: 74
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 2037,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showFilters.field && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    '材料科学 (Materials Science)',
                                                    '生命科学 (Life Sciences)',
                                                    'ナノサイエンス (Nanoscience)',
                                                    '高分子科学 (Polymer Science)',
                                                    '物性物理学 (Condensed Matter Physics)'
                                                ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-100 p-1 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selectedFilters.field.includes(field),
                                                                onChange: ()=>toggleFilter('field', field),
                                                                className: "mt-0.5 w-4 h-4 accent-red-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 2048,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: field.split(' (')[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 2054,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, field, true, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2047,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 2045,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 2036,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowFilters({
                                                        ...showFilters,
                                                        method: !showFilters.method
                                                    }),
                                                className: "flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: "測定手法 (Method)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2067,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    showFilters.method ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2068,
                                                        columnNumber: 39
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2068,
                                                        columnNumber: 75
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 2063,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showFilters.method && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    'X線回折 (X-ray Diffraction)',
                                                    'X線結晶構造解析 (X-ray Crystallography)',
                                                    '時間分解分光 (Time-Resolved Spectroscopy)',
                                                    '小角X線散乱 (SAXS)'
                                                ].map((method)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-100 p-1 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selectedFilters.method.includes(method),
                                                                onChange: ()=>toggleFilter('method', method),
                                                                className: "mt-0.5 w-4 h-4 accent-red-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 2074,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: method.split(' (')[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 2080,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, method, true, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2073,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 2071,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 2062,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowFilters({
                                                        ...showFilters,
                                                        application: !showFilters.application
                                                    }),
                                                className: "flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: "産業応用 (Application)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2093,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    showFilters.application ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2094,
                                                        columnNumber: 44
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2094,
                                                        columnNumber: 80
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 2089,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showFilters.application && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    '自動車産業 (Automotive)',
                                                    '製薬・医療 (Pharmaceutical)',
                                                    'エネルギー産業 (Energy)',
                                                    '化学産業 (Chemical)'
                                                ].map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-100 p-1 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selectedFilters.application.includes(app),
                                                                onChange: ()=>toggleFilter('application', app),
                                                                className: "mt-0.5 w-4 h-4 accent-red-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 2100,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: app.split(' (')[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 2106,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, app, true, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2099,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 2097,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 2088,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowFilters({
                                                        ...showFilters,
                                                        year: !showFilters.year
                                                    }),
                                                className: "flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: "年度 (Year)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2119,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    showFilters.year ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2120,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2120,
                                                        columnNumber: 73
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 2115,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showFilters.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    2024,
                                                    2023,
                                                    2022
                                                ].map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-100 p-1 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selectedFilters.year.includes(year),
                                                                onChange: ()=>toggleFilter('year', year),
                                                                className: "mt-0.5 w-4 h-4 accent-red-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 2126,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: year
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 2132,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, year, true, {
                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                        lineNumber: 2125,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 2123,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 2114,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 1844,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mb-4 flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    children: filteredPapers.length
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 2144,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " 件の結果"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                            lineNumber: 2143,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 2142,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: filteredPapers.map((paper)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                id: `paper-${paper.id}`,
                                                className: "border-b border-gray-200 pb-6 mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                className: "w-4 h-4 mt-1 accent-red-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                lineNumber: 2153,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                            lineNumber: 2152,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "mb-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-600 uppercase tracking-wide",
                                                                        children: "学術論文"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                        lineNumber: 2158,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 2157,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                    onClick: ()=>setViewingPaper(paper),
                                                                    className: "text-xl font-serif text-gray-900 mb-2 hover:underline cursor-pointer",
                                                                    children: paper.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 2161,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-700 mb-2",
                                                                    children: paper.authors
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 2168,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm italic text-gray-600 mb-3",
                                                                    children: [
                                                                        "SPring-8 Research Journal, Vol. ",
                                                                        paper.id,
                                                                        ", No. 1 (",
                                                                        paper.year,
                                                                        "), pp. 1-20"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 2170,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-800 leading-relaxed mb-3",
                                                                    children: [
                                                                        "...",
                                                                        paper.mainConclusion.substring(0, 150),
                                                                        "..."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 2174,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setViewingPaper(paper),
                                                                    className: "text-sm text-blue-700 hover:underline font-medium",
                                                                    children: "詳細を表示"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 2178,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                            lineNumber: 2156,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0 flex flex-col gap-2 w-32",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        if (paper.uploadedFile) {
                                                                            const fileURL = URL.createObjectURL(paper.uploadedFile);
                                                                            window.open(fileURL, '_blank');
                                                                        } else {
                                                                            alert('この論文のPDFファイルは利用できません');
                                                                        }
                                                                    },
                                                                    className: "px-4 py-2 bg-red-800 text-white text-sm rounded hover:bg-red-900 font-medium",
                                                                    children: "オンライン閲覧"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 2187,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    className: "px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 font-medium",
                                                                    children: "保存"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 2200,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    className: "px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 font-medium",
                                                                    children: "引用"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 2203,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                paper.uploadedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        if (window.confirm('この論文を削除しますか？')) {
                                                                            setPapers((prevPapers)=>prevPapers.filter((p)=>p.id !== paper.id));
                                                                        }
                                                                    },
                                                                    className: "px-4 py-2 border border-red-300 text-red-700 text-sm rounded hover:bg-red-50 font-medium",
                                                                    children: "削除"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                                    lineNumber: 2207,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                            lineNumber: 2186,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                    lineNumber: 2151,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, paper.id, false, {
                                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                                lineNumber: 2150,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                        lineNumber: 2148,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                                lineNumber: 2141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                        lineNumber: 1842,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/research-live/frontend/components/App.js",
                lineNumber: 1784,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/research-live/frontend/components/App.js",
        lineNumber: 1782,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = App;
}),
"[project]/Desktop/research-live/frontend/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$components$2f$App$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/research-live/frontend/components/App.js [ssr] (ecmascript)");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$components$2f$App$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Desktop/research-live/frontend/pages/index.js",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3d3dd2dc._.js.map