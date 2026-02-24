module.exports = [
"[project]/components/App.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.mjs [ssr] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.mjs [ssr] (ecmascript) <export default as Link2>");
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
                        failedApproach: p.failed_approach
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
                    title: uploadedFile ? uploadedFile.name.replace('.pdf', '') : '新規論文',
                    title_en: 'New Research Paper',
                    authors: 'Kitagawa, H.',
                    year: new Date().getFullYear(),
                    field: '材料科学 (Materials Science)',
                    method: 'X線回折 (X-ray Diffraction)',
                    beamline: 'BL19B2',
                    application: '自動車産業 (Automotive)',
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
                failedApproach: newPaper.failed_approach
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
    // アップロードビュー (Upload View)
    if (currentView === 'upload') {
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
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 907,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentView('search'),
                                            className: "px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium",
                                            children: "検索"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 911,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium",
                                            children: "ログイン"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 917,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 910,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 906,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 905,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-serif text-gray-900 mb-2",
                                        children: "研究論文アップロード"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 927,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "多次元研究コンテキストグラフシステム"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 928,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 926,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "bg-white border-2 border-gray-300 rounded-lg p-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        onDragOver: handleDragOver,
                                        onDragLeave: handleDragLeave,
                                        onDrop: handleDrop,
                                        className: `border-4 border-dashed rounded-lg p-16 text-center transition-all ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: `w-20 h-20 mx-auto mb-6 transition-colors ${isDragging ? 'text-blue-500' : 'text-gray-400'}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 942,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold text-gray-800 mb-3",
                                                children: isDragging ? 'ここにドロップしてください' : '研究論文をアップロード'
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 945,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 mb-8 max-w-2xl mx-auto",
                                                children: isDragging ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-600 font-semibold",
                                                    children: "ファイルをドロップ"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 950,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                    children: [
                                                        "PDFファイルをドラッグ&ドロップ、またはクリックしてアップロード",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 953,
                                                            columnNumber: 56
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "text-sm",
                                                            children: "(Drag & drop or click to upload PDF)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 954,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 948,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                className: "inline-block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: ".pdf",
                                                        onChange: handleFileUpload,
                                                        className: "hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 960,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "px-8 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold cursor-pointer inline-block",
                                                        children: "PDFファイルを選択"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 966,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 959,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            uploadedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "mt-8 inline-flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "w-6 h-6 text-red-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 973,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-800",
                                                        children: uploadedFile.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 974,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 972,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 932,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-12 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                                className: "w-16 h-16 mx-auto animate-spin text-red-800 mb-6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 981,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-xl font-semibold text-gray-800 mb-2",
                                                children: "AIが論文を解析中..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 982,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: "MDRCG情報を自動生成しています"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 985,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 980,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 931,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-gray-900 mb-3",
                                        children: "アップロード後の流れ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 994,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 mt-1",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 997,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: "AIが研究論文を分析し、重要な情報を抽出します"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 998,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 996,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 mt-1",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1001,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: "自動生成されたMDRCGフォームを確認・編集できます"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1002,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1000,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 mt-1",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1005,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: "あなたの研究が多次元で検索可能になります"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1006,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1004,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 mt-1",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1009,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: "異分野との関連性が自動的に特定されます"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1010,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1008,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 995,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 993,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 925,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/App.js",
                lineNumber: 903,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/App.js",
            lineNumber: 902,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // フォームビュー (Form View)
    if (currentView === 'form') {
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
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1028,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentView('search'),
                                            className: "px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium",
                                            children: "検索"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1032,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium",
                                            children: "ログイン"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1038,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1031,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1027,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1026,
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
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1049,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Research Context Information Form"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1052,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1048,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                papers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                    className: "w-5 h-5 text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1059,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-bold text-gray-800",
                                                    children: "関連論文の選択 (Related Papers)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1060,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1058,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-4",
                                            children: "この論文と関連する既存の論文を選択し、関係性を指定してください"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1064,
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
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1072,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold text-gray-800",
                                                                    children: paper.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1088,
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
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1089,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1087,
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
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1102,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1092,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, paper.id, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1071,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1067,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1057,
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
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1119,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1117,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1116,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                                    value: formData[question.id] || '',
                                                    onChange: (e)=>handleInputChange(question.id, e.target.value),
                                                    placeholder: question.placeholder,
                                                    className: "w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none min-h-[120px] bg-yellow-50",
                                                    required: question.required
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1122,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "💡 AIが生成した内容です。必要に応じて修正してください"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1129,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, question.id, true, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1115,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1113,
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
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1137,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            className: "flex-1 px-6 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold",
                                            children: "登録して公開"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1143,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1136,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1047,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1046,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/App.js",
                lineNumber: 1024,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/App.js",
            lineNumber: 1023,
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
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1165,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrentView('search'),
                                        className: "text-sm text-blue-700 hover:text-blue-900 underline",
                                        children: "← 簡易検索に戻る"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1166,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1164,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "text-sm text-blue-700 hover:underline",
                                children: "検索ヘルプ"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1173,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1163,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "border-b-2 border-gray-300 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "px-6 py-3 text-sm font-semibold border-b-4 border-black -mb-0.5",
                                children: "全コンテンツ"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1178,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "px-6 py-3 text-sm text-gray-600 hover:text-gray-900",
                                children: "画像"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1181,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1177,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg border border-gray-300 p-8 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-serif text-gray-900 mb-6",
                                children: "検索クエリを構築"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1188,
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
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1195,
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
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1205,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "OR",
                                                                children: "OR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1206,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "NOT",
                                                                children: "NOT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1207,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "NEAR 5",
                                                                children: "NEAR 5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1208,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "NEAR 10",
                                                                children: "NEAR 10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1209,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "NEAR 25",
                                                                children: "NEAR 25"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1210,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1196,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1194,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: index === 0 ? 'col-span-6' : 'col-span-5',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold text-gray-700 mb-1",
                                                        children: "検索語句"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1216,
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
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1217,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1215,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "col-span-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold text-gray-700 mb-1",
                                                        children: "検索フィールド"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1231,
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
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1241,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "title",
                                                                children: "タイトル"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1242,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "author",
                                                                children: "著者"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1243,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "abstract",
                                                                children: "要旨"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1244,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "caption",
                                                                children: "説明"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1245,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1232,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1230,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "col-span-1 pt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setAdvancedSearchRows(advancedSearchRows.filter((r)=>r.id !== row.id));
                                                    },
                                                    className: "text-gray-600 hover:text-red-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1257,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1251,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1250,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1192,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, row.id, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1191,
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
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1274,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " 行を追加"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1265,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-gray-700 mb-2",
                                        children: "アクセスタイプを選択"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1279,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                        className: "w-80 px-3 py-2 border border-gray-400 rounded text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                children: "すべて"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1281,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                children: "アクセス可能なコンテンツ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1282,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1280,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1278,
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
                                fileName: "[project]/components/App.js",
                                lineNumber: 1286,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1187,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg border border-gray-300 p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-serif text-gray-900 mb-6",
                                children: "検索結果を絞り込む"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1299,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-900 mb-3",
                                        children: "アイテムタイプ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1303,
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
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1307,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700",
                                                        children: type
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1317,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, type, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1306,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1304,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1302,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-900 mb-3",
                                        children: "出版日"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1325,
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
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1328,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: dateFrom,
                                                        onChange: (e)=>setDateFrom(e.target.value),
                                                        placeholder: "yyyy/mm/dd",
                                                        className: "w-32 px-3 py-2 border border-gray-400 rounded text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1329,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1327,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "pt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600",
                                                    children: "〜"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1338,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1337,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs text-gray-600 mb-1",
                                                        children: " "
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1341,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: dateTo,
                                                        onChange: (e)=>setDateTo(e.target.value),
                                                        placeholder: "yyyy/mm/dd",
                                                        className: "w-32 px-3 py-2 border border-gray-400 rounded text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1342,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1340,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1326,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1324,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-900 mb-3",
                                        children: "学術分野で絞り込む"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1355,
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
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1360,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-gray-900",
                                                                    children: discipline.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1371,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                selectedDisciplines.includes(key) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "ml-6 mt-2 space-y-1",
                                                                    children: discipline.journals.map((journal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-blue-700 hover:underline cursor-pointer",
                                                                            children: journal
                                                                        }, journal, false, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1375,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1373,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1370,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1359,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, key, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1358,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1356,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1354,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setCurrentView('search');
                                },
                                className: "px-8 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold",
                                children: "高度検索を実行"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1388,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1298,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/App.js",
                lineNumber: 1161,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/App.js",
            lineNumber: 1160,
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
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1410,
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
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1414,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium",
                                            children: "ログイン"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1420,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1413,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1409,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1408,
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
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1432,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-serif text-gray-900 mt-2 mb-4",
                                                children: viewingPaper.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1433,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-xl text-gray-600 mb-4",
                                                children: viewingPaper.titleEn
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1436,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 mb-2",
                                                children: [
                                                    "著者: ",
                                                    viewingPaper.authors
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1437,
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
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1438,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1431,
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
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1445,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold",
                                                children: "保存"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1458,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold",
                                                children: "引用"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1461,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1444,
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
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1469,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-900",
                                                        children: viewingPaper.field
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1470,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1468,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-700 mb-2",
                                                        children: "測定手法"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1473,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-900",
                                                        children: viewingPaper.method
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1474,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1472,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-700 mb-2",
                                                        children: "ビームライン"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1477,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-900",
                                                        children: viewingPaper.beamline
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1478,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1476,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-700 mb-2",
                                                        children: "産業応用"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1481,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-900",
                                                        children: viewingPaper.application
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1482,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1480,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1467,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    viewingPaper.formData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300",
                                                children: "MDRCG 詳細情報"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1489,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "主な結論"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1494,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.mainConclusion
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1495,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1493,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.priorWork && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "先行研究との関係"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1500,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed whitespace-pre-line",
                                                        children: viewingPaper.formData.priorWork
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1501,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1499,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.novelty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "新規性"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1507,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.novelty
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1508,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1506,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.unknownQuestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "未解明の課題"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1514,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed whitespace-pre-line",
                                                        children: viewingPaper.formData.unknownQuestions
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1515,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1513,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.failedApproach && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "失敗したアプローチ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1521,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.failedApproach
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1522,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1520,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.crossDomain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "異分野翻訳レイヤー"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1528,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.crossDomain
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1529,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1527,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.industrialApplication && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "産業応用可能性"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1535,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.industrialApplication
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1536,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1534,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.abstractPrinciple && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "抽象化された原理（小学5年生レベル）"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1542,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.abstractPrinciple
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1543,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1541,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.experimentalReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "実験設計の理由"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1549,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.experimentalReason
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1550,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1548,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.scalingPossibility && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "スケーリング可能性"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1556,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.scalingPossibility
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1557,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1555,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            viewingPaper.formData.combinationPotential && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "組み合わせ可能性"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1563,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.combinationPotential
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1564,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1562,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1488,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    viewingPaper.relatedPapers && viewingPaper.relatedPapers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-8 pt-8 border-t-2 border-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                        className: "w-6 h-6 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1574,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "関連論文 (Related Papers)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1573,
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
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1584,
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
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1585,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1583,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "ml-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full",
                                                                    children: relation.relationshipType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1587,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1582,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, relation.paperId, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1581,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)) : null;
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1577,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1572,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1429,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewingPaper(null),
                                    className: "px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold",
                                    children: "← 検索結果に戻る"
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1601,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1600,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1428,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/App.js",
                lineNumber: 1406,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/App.js",
            lineNumber: 1405,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // 検索ビュー (Search View)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1621,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentView('upload'),
                                            className: "px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium",
                                            children: "論文登録 (Upload)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1625,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium",
                                            children: "Log in"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1631,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1624,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1620,
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
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1639,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            className: "absolute right-3 top-3 text-gray-600 hover:text-gray-900",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1647,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1646,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1638,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentView('advancedSearch'),
                                    className: "mt-2 text-sm text-blue-700 hover:text-blue-900 underline",
                                    children: "高度検索"
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1650,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1637,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/App.js",
                    lineNumber: 1619,
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
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1663,
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
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1672,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm mt-1",
                                                                    children: "階層的なナレッジツリーで探索 (Explore through hierarchical knowledge tree)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1673,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1671,
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
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "w-6 h-6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1684,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1675,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1670,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1669,
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
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1693,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            selectedPath.map((pathItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            children: "→"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1704,
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
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1705,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1703,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1692,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "relative mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                className: "absolute left-4 top-4 text-gray-400 w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1726,
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
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1727,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1725,
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
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1742,
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
                                                                                            fileName: "[project]/components/App.js",
                                                                                            lineNumber: 1754,
                                                                                            columnNumber: 33
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-gray-500 mt-1",
                                                                                            children: searchKnowledgeTree[key].branches ? `${Object.keys(searchKnowledgeTree[key].branches).length} サブカテゴリー` : '論文を表示'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/App.js",
                                                                                            lineNumber: 1755,
                                                                                            columnNumber: 33
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/App.js",
                                                                                    lineNumber: 1753,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                    className: "w-5 h-5 text-gray-400 transform -rotate-90"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/App.js",
                                                                                    lineNumber: 1761,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1752,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, key, false, {
                                                                        fileName: "[project]/components/App.js",
                                                                        lineNumber: 1744,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1741,
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
                                                                                        fileName: "[project]/components/App.js",
                                                                                        lineNumber: 1782,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-500 mt-1",
                                                                                        children: match.data.branches ? `${Object.keys(match.data.branches).length} サブカテゴリー` : `${match.data.papers?.length || 0} 件の論文`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/App.js",
                                                                                        lineNumber: 1783,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/App.js",
                                                                                lineNumber: 1781,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                className: "w-5 h-5 text-gray-400 transform -rotate-90"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/App.js",
                                                                                lineNumber: 1789,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/App.js",
                                                                        lineNumber: 1780,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, index, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1771,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "text-center text-gray-500 py-8",
                                                                children: "該当する結果が見つかりませんでした (No results found)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1794,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1768,
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
                                                                                            fileName: "[project]/components/App.js",
                                                                                            lineNumber: 1811,
                                                                                            columnNumber: 33
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-gray-500 mt-1",
                                                                                            children: currentBranch.branches[key].branches ? `${Object.keys(currentBranch.branches[key].branches).length} サブカテゴリー` : `${currentBranch.branches[key].papers?.length || 0} 件の論文`
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/App.js",
                                                                                            lineNumber: 1812,
                                                                                            columnNumber: 33
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/App.js",
                                                                                    lineNumber: 1810,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                    className: "w-5 h-5 text-gray-400 transform -rotate-90"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/App.js",
                                                                                    lineNumber: 1818,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1809,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, key, false, {
                                                                        fileName: "[project]/components/App.js",
                                                                        lineNumber: 1801,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                                currentBranch.papers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3 mt-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                            className: "font-bold text-gray-700 border-t pt-4",
                                                                            children: "関連論文 (Related Papers)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1824,
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
                                                                                        fileName: "[project]/components/App.js",
                                                                                        lineNumber: 1837,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-600 mt-1",
                                                                                        children: paper.titleEn
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/App.js",
                                                                                        lineNumber: 1838,
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
                                                                                        fileName: "[project]/components/App.js",
                                                                                        lineNumber: 1839,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, paper.id, true, {
                                                                                fileName: "[project]/components/App.js",
                                                                                lineNumber: 1828,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)) : null;
                                                                        })
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1823,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1799,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)) : null
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1738,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1689,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1668,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1667,
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
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1859,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                showFilters.field ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1860,
                                                    columnNumber: 38
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1860,
                                                    columnNumber: 74
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1855,
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
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1866,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: field.split(' (')[0]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1872,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, field, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1865,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1863,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1854,
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
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1885,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                showFilters.method ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1886,
                                                    columnNumber: 39
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1886,
                                                    columnNumber: 75
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1881,
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
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1892,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: method.split(' (')[0]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1898,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, method, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1891,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1889,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1880,
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
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1911,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                showFilters.application ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1912,
                                                    columnNumber: 44
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1912,
                                                    columnNumber: 80
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1907,
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
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1918,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: app.split(' (')[0]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1924,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, app, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1917,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1915,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1906,
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
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1937,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                showFilters.year ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1938,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1938,
                                                    columnNumber: 73
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1933,
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
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1944,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: year
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1950,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, year, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1943,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1941,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1932,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1662,
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
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1962,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " 件の結果"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1961,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1960,
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
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1971,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1970,
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
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1976,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1975,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                onClick: ()=>setViewingPaper(paper),
                                                                className: "text-xl font-serif text-gray-900 mb-2 hover:underline cursor-pointer",
                                                                children: paper.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1979,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-700 mb-2",
                                                                children: paper.authors
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1986,
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
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1988,
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
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1992,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setViewingPaper(paper),
                                                                className: "text-sm text-blue-700 hover:underline font-medium",
                                                                children: "詳細を表示"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1996,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1974,
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
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 2005,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                className: "px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 font-medium",
                                                                children: "保存"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 2018,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                className: "px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 font-medium",
                                                                children: "引用"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 2021,
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
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 2025,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 2004,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1969,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, paper.id, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1968,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1966,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1959,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/App.js",
                    lineNumber: 1660,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/App.js",
            lineNumber: 1617,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/App.js",
        lineNumber: 1616,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = App;
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$App$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/App.js [ssr] (ecmascript)");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$App$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/pages/index.js",
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

//# sourceMappingURL=%5Broot-of-the-server%5D__eab5096a._.js.map