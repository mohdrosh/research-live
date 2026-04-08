import React, { useState } from 'react';
import { Upload, Search, FileText, Brain, Loader, ChevronDown, ChevronUp, Filter, X, Link2, Home, User } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('upload'); // 'upload', 'form', 'search', 'mypage'
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState({
    field: true,
    method: true,
    application: false,
    beamline: false,
    year: false
  });
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [advancedSearchQuery, setAdvancedSearchQuery] = useState('');
  const [selectedPath, setSelectedPath] = useState([]);
  const [currentBranch, setCurrentBranch] = useState(null);
  const [advancedSearchRows, setAdvancedSearchRows] = useState([
    { id: 1, boolean: 'AND', term: '', field: 'all' }
  ]);
  const [selectedDisciplines, setSelectedDisciplines] = useState([]);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedItemTypes, setSelectedItemTypes] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    field: [],
    method: [],
    application: [],
    beamline: [],
    year: []
  });
const [viewingPaper, setViewingPaper] = useState(null);
  const [papers, setPapers] = useState([]);
  const [selectedRelatedPapers, setSelectedRelatedPapers] = useState([]);
  const [pdfText, setPdfText] = useState('');
  const [pdfDataUrl, setPdfDataUrl] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [isReviewer, setIsReviewer] = useState(false);
const [prRequestNote, setPrRequestNote] = useState('');
const [citationPaper, setCitationPaper] = useState(null);
const [paperSource, setPaperSource] = useState('search');
const [prLoadingId, setPrLoadingId] = useState(null); // 'search' or 'mypage'
const [editingPaper, setEditingPaper] = useState(null);
const [regenLoading, setRegenLoading] = useState({});
const [regenInput, setRegenInput] = useState({});
const [fieldChoices, setFieldChoices] = useState({});
const [selectedChoices, setSelectedChoices] = useState({});
const [showLoginModal, setShowLoginModal] = useState(false);
const [loginUsername, setLoginUsername] = useState('');
const [loggedInUser, setLoggedInUser] = useState('');
const [loginPassword, setLoginPassword] = useState('');
const [loginError, setLoginError] = useState('');

  // AI Analysis Function
  const analyzePDF = async (base64Data, filename) => {
    try {
      console.log('Starting PDF analysis...');
      console.log('PDF filename:', filename);
      
      const response = await fetch('https://publicchemical.spring8.or.jp/research/api/analyze-pdf/', {

  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ base64_data: base64Data })
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

  const handleLogin = () => {
  if (loginUsername === 'spring8' && loginPassword === 'article') {
    setIsLoggedIn(true);
    setIsReviewer(false);
    setLoggedInUser(loginUsername);
    setShowLoginModal(false);
    setLoginError('');
    setLoginUsername('');
    setLoginPassword('');
    setCurrentView('mypage');
  } else if (loginUsername === 'user2' && loginPassword === 'user2pass') {
    setIsLoggedIn(true);
    setIsReviewer(false);
    setLoggedInUser(loginUsername);
    setShowLoginModal(false);
    setLoginError('');
    setLoginUsername('');
    setLoginPassword('');
    setCurrentView('mypage');
  } else if (loginUsername === 'reviewer' && loginPassword === 'review123') {
    setIsLoggedIn(true);
    setIsReviewer(true);
    setLoggedInUser(loginUsername);
    setShowLoginModal(false);
    setLoginError('');
    setLoginUsername('');
    setLoginPassword('');
    setCurrentView('mypage');
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
  React.useEffect(() => {
  fetch('https://publicchemical.spring8.or.jp/research/api/health').catch(() => {});
  fetch('https://publicchemical.spring8.or.jp/pressrelease/health').catch(() => {});
}, []);
  React.useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await fetch('https://publicchemical.spring8.or.jp/research/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: '', filters: {}, page: 1, page_size: 100 })
        });
        const data = await response.json();
        const normalized = data.papers.map(p => ({
          ...p,
          titleEn: p.title_en,
          mainConclusion: p.main_conclusion,
          industrialApplication: p.industrial_application,
          crossDomain: p.cross_domain,
          failedApproach: p.failed_approach,
          uploaded_by: p.uploaded_by || '',
          press_release_status: p.press_release_status || 'none',
          press_release_mongo_id: p.press_release_mongo_id || null,
          press_release_url: p.press_release_url || null,
          press_release_note: p.press_release_note || null,
          formData: p.form_data ? {
            priorWork: p.form_data.prior_work,
            novelty: p.form_data.novelty,
            unknownQuestions: p.form_data.unknown_questions,
            failedApproach: p.form_data.failed_approach,
            crossDomain: p.form_data.cross_domain,
            abstractPrinciple: p.form_data.abstract_principle,
            experimentalReason: p.form_data.experimental_reason,
            scalingPossibility: p.form_data.scaling_possibility,
            combinationPotential: p.form_data.combination_potential,
          } : null,
        }));
        setPapers(normalized);

const toSync = normalized.filter(p => p.press_release_mongo_id);
const synced = await Promise.all(
  toSync.map(async p => {
    try {
      const res = await fetch(`https://publicchemical.spring8.or.jp/research/api/papers/${p.id}/press-release-sync`, { method: 'POST' });
      const d = await res.json();
      return { id: p.id, status: d.status };
    } catch { return null; }
  })
);
synced.filter(Boolean).forEach(({ id, status }) => {
  setPapers(prev => prev.map(p => p.id === id ? { ...p, press_release_status: status } : p));
});
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
              papers: [1]
            },
            '高圧': {
              type: 'subcategory',
              label: '高圧X線回折 (High-Pressure XRD)',
              papers: [8]
            },
            '一般': {
              type: 'subcategory',
              label: '一般X線回折 (General XRD)',
              papers: [1]
            }
          }
        },
        'x線結晶構造解析': {
          type: 'subcategory',
          label: 'X線結晶構造解析 (X-ray Crystallography)',
          papers: [2]
        },
        'x線散乱': {
          type: 'category',
          label: 'X線散乱 (X-ray Scattering)',
          branches: {
            '小角散乱': {
              type: 'subcategory',
              label: '小角X線散乱 (SAXS)',
              papers: [4]
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
              papers: [5]
            },
            '蛍光分析': {
              type: 'subcategory',
              label: 'X線蛍光分析 (XRF)',
              papers: [7]
            }
          }
        },
        'x線イメージング': {
          type: 'subcategory',
          label: 'X線イメージング (X-ray Imaging)',
          papers: [6]
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
          papers: [3]
        },
        '赤外分光': {
          type: 'subcategory',
          label: '赤外分光 (Infrared Spectroscopy)',
          papers: [9]
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
          papers: [1]
        },
        '構造解析': {
          type: 'subcategory',
          label: '触媒構造解析 (Catalyst Structure Analysis)',
          papers: [1]
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
          papers: [2]
        },
        '創薬': {
          type: 'subcategory',
          label: '創薬ターゲット (Drug Targets)',
          papers: [2]
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
          papers: [3]
        },
        '電子状態': {
          type: 'subcategory',
          label: '電子状態解析 (Electronic State Analysis)',
          papers: [3, 5]
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
          papers: [4]
        },
        '階層構造': {
          type: 'subcategory',
          label: '階層構造解析 (Hierarchical Structure)',
          papers: [4]
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
          papers: [5]
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
          papers: [6]
        },
        '熱応力解析': {
          type: 'subcategory',
          label: '熱応力解析 (Thermal Stress Analysis)',
          papers: [6]
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
          papers: [7]
        },
        '陶磁器': {
          type: 'subcategory',
          label: '陶磁器分析 (Ceramic Analysis)',
          papers: [7]
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
          papers: [8]
        },
        'マントル': {
          type: 'subcategory',
          label: 'マントル研究 (Mantle Research)',
          papers: [8]
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
          papers: [9]
        },
        'タンパク質構造': {
          type: 'subcategory',
          label: '食品タンパク質 (Food Proteins)',
          papers: [9]
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
          papers: [1, 6]
        },
        '製薬': {
          type: 'subcategory',
          label: '製薬・医療 (Pharmaceutical)',
          papers: [2]
        },
        'エネルギー': {
          type: 'subcategory',
          label: 'エネルギー (Energy)',
          papers: [3]
        },
        '化学': {
          type: 'subcategory',
          label: '化学産業 (Chemical)',
          papers: [4]
        },
        'エレクトロニクス': {
          type: 'subcategory',
          label: 'エレクトロニクス (Electronics)',
          papers: [5, 6]
        }
      }
    }
  };

  // 高度検索でマッチする項目を取得 (Get matching items for advanced search)
  const getAdvancedSearchSuggestions = (query) => {
    if (!query) return null;
    
    const lowerQuery = query.toLowerCase().trim();
    const matches = [];

    Object.keys(searchKnowledgeTree).forEach(key => {
      if (key.includes(lowerQuery) || searchKnowledgeTree[key].label.toLowerCase().includes(lowerQuery)) {
        matches.push({
          key: key,
          data: searchKnowledgeTree[key],
          path: [key]
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
      label: '異分野への適用可能性 (Cross-Domain Translation)',
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
      label: '拡張性 (Scaling Possibilities)',
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

  const [isDragging, setIsDragging] = useState(false);

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

  const processFile = async (file) => {
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      setIsProcessing(true);
      
      try {
        // Read PDF as base64
        const base64Data = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result.split(',')[1]);
          reader.onerror = () => reject(new Error('Failed to read file'));
          reader.readAsDataURL(file);
        });
        
                // Call Claude API to analyze PDF
        // Generate 3 choices sequentially to avoid overwhelming the backend
        const analysis1 = await analyzePDF(base64Data, file.name);
        await new Promise(r => setTimeout(r, 1000));
        const analysis2 = await analyzePDF(base64Data, file.name);
        await new Promise(r => setTimeout(r, 1000));
        const analysis3 = await analyzePDF(base64Data, file.name);

        // Store PDF data URL for viewing later
        const pdfUrl = 'data:application/pdf;base64,' + base64Data;
        setPdfDataUrl(pdfUrl);

        // Build choices map: { fieldId: [choice1, choice2, choice3] }
        const choices = {};
        const firstSelected = {};
        mdrcgQuestions.forEach(q => {
          choices[q.id] = [
            analysis1[q.id] || '',
            analysis2[q.id] || '',
            analysis3[q.id] || '',
          ].filter(Boolean);
          // Auto-select first choice
          if (choices[q.id].length > 0) firstSelected[q.id] = 0;
        });
        setFieldChoices(choices);
        setSelectedChoices(firstSelected);
        // Set formData to first choices by default
        const defaultFormData = {};
        mdrcgQuestions.forEach(q => {
          defaultFormData[q.id] = choices[q.id][0] || '';
        });
        // Also keep non-question fields from analysis1
        Object.assign(defaultFormData, {
          title: analysis1.title,
          title_en: analysis1.title_en,
          authors: analysis1.authors,
          year: analysis1.year,
          field: analysis1.field,
          method: analysis1.method,
          beamline: analysis1.beamline,
          application: analysis1.application,
        });
        setFormData(defaultFormData);
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

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    processFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
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

  const handleInputChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    console.log('Submitting, has pdf:', !!pdfDataUrl, 'length:', pdfDataUrl.length);
    setIsProcessing(true);
    try {
      const url = editingPaper
        ? `https://publicchemical.spring8.or.jp/research/api/papers/${editingPaper.id}`
        : 'https://publicchemical.spring8.or.jp/research/api/papers/';
      const method = editingPaper ? 'PUT' : 'POST';
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title || (uploadedFile ? uploadedFile.name.replace('.pdf', '') : '新規論文'),
          title_en: formData.title_en || formData.titleEn || '',
          authors: formData.authors || '',
          year: formData.year || new Date().getFullYear(),
          field: formData.field || '材料科学 (Materials Science)',
          method: formData.method || 'X線回折 (X-ray Diffraction)',
          beamline: formData.beamline || 'BL19B2',
          application: formData.application || '自動車産業 (Automotive)',
          uploaded_by: loggedInUser,
          main_conclusion: formData.mainConclusion || '',
          industrial_application: formData.industrialPain || '',
          cross_domain: formData.crossDomain || '',
          failed_approach: formData.failedApproach || '',
          pdf_data: pdfDataUrl ? pdfDataUrl.split(',')[1] : null,
          _debug_has_pdf: !!formData._pdfDataUrl,
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
            combination_potential: formData.combinationPotential,
          },
          related_papers: selectedRelatedPapers.map(r => ({
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
        _pdfDataUrl: formData._pdfDataUrl || null,
        formData: newPaper.form_data ? {
          priorWork: newPaper.form_data.prior_work,
          novelty: newPaper.form_data.novelty,
          unknownQuestions: newPaper.form_data.unknown_questions,
          failedApproach: newPaper.form_data.failed_approach,
          crossDomain: newPaper.form_data.cross_domain,
          abstractPrinciple: newPaper.form_data.abstract_principle,
          experimentalReason: newPaper.form_data.experimental_reason,
          scalingPossibility: newPaper.form_data.scaling_possibility,
          combinationPotential: newPaper.form_data.combination_potential,
        } : null,
      };
      if (editingPaper) {
        setPapers(prevPapers => prevPapers.map(p => p.id === normalized.id ? normalized : p));
      } else {
        setPapers(prevPapers => [normalized, ...prevPapers]);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('登録に失敗しました: ' + error.message);
    }
    setFormData({});
    setUploadedFile(null);
    setSelectedRelatedPapers([]);
    setPdfText('');
    setPdfDataUrl('');
    setEditingPaper(null);
    setIsProcessing(false);
    setCurrentView('mypage');
  };

  const toggleFilter = (category, value) => {
    setSelectedFilters(prev => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const filteredPapers = papers.filter(paper => {
    const searchWords = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const paperText = [
      paper.title,
      paper.titleEn,
      paper.authors,
      paper.mainConclusion,
      paper.industrialApplication,
      paper.crossDomain,
      paper.field,
      paper.method
    ].join(' ').toLowerCase();
    const matchesSearch = searchQuery === '' || searchWords.every(word => paperText.includes(word));
    
    const matchesField = selectedFilters.field.length === 0 || selectedFilters.field.includes(paper.field);
    const matchesMethod = selectedFilters.method.length === 0 || selectedFilters.method.includes(paper.method);
    const matchesApplication = selectedFilters.application.length === 0 || selectedFilters.application.includes(paper.application);
    const matchesBeamline = selectedFilters.beamline.length === 0 || selectedFilters.beamline.includes(paper.beamline);
    const matchesYear = selectedFilters.year.length === 0 || selectedFilters.year.includes(paper.year);
    
    return matchesSearch && matchesField && matchesMethod && matchesApplication && matchesBeamline && matchesYear;
  });
  // Login Modal (variable, not component, to prevent focus loss)
  const loginModal = showLoginModal ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(4px)'}}>
      <div className="bg-white rounded-2xl shadow-xl p-6" style={{width: '320px'}}>
        <h2 className="text-xl font-bold text-gray-900 mb-1">ログイン</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4 text-xs text-gray-500">
          <span className="font-semibold text-gray-700">Demo credentials</span><br/>
          User 1: <span className="font-mono text-gray-800">spring8</span> / <span className="font-mono text-gray-800">article</span><br/>
          User 2: <span className="font-mono text-gray-800">user2</span> / <span className="font-mono text-gray-800">user2pass</span>
        </div>
        {loginError && (
          <div className="mb-3 p-2 bg-red-50 border border-red-200 text-red-600 text-xs rounded">
            {loginError}
          </div>
        )}
        <div className="mb-3">
          <label className="block text-xs font-semibold text-gray-600 mb-1">ユーザー名</label>
          <input
            type="text"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-red-800 focus:outline-none"
            placeholder="username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-600 mb-1">パスワード</label>
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-red-800 focus:outline-none"
            placeholder="password"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => { setShowLoginModal(false); setLoginError(''); }}
            className="flex-1 px-3 py-2 text-sm border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50"
          >
            キャンセル
          </button>
          <button
            onClick={handleLogin}
            className="flex-1 px-3 py-2 text-sm bg-red-800 text-white rounded-lg hover:bg-red-900 font-semibold"
          >
            ログイン
          </button>
        </div>
      </div>
    </div>
  ) : null;



  // アップロードビュー (Upload View)
  if (currentView === 'upload') {
    return (
      <div className="min-h-screen bg-white">
        {loginModal}
        <div className="max-w-full mx-auto">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                SPring-8-II 特設サイト
              </h1>
              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentView('upload')}
                  className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium"
                >
                  <Home className="w-4 h-4" />
                </button>
                {isLoggedIn ? (
  <div className="flex items-center gap-3">
    <button onClick={() => setCurrentView('mypage')} className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium">マイページ</button>
    <span className="text-sm text-gray-700 font-medium">ようこそ、{loggedInUser}さん 👋</span>
    <button
      onClick={() => { setIsLoggedIn(false); setIsReviewer(false); setCurrentView('upload'); setViewingPaper(null); }}
      className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium"
    >
      ログアウト
    </button>
  </div>
) : (
  <button
    onClick={() => setShowLoginModal(true)}
    className="px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium"
  >
    ログイン
  </button>
)}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mx-auto p-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-gray-900 mb-5" style={{fontSize: '52px'}}>SPring-8 研究データベース</h2>
              <p className="text-gray-400 tracking-wide" style={{fontSize: '19px'}}>Multi-Dimensional Research Context Graph System</p>
              <div style={{marginBottom: '48px'}} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', gap: '24px', margin: '0 auto', justifyContent: 'center', alignItems: 'stretch'}}>
              {/* Search Card */}
              <div
                onClick={() => setCurrentView('search')}
                style={{
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
                  maxWidth: '320px',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow='0 8px 32px rgba(0,0,0,0.10)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow='none'}
              >
                <Search style={{width: '56px', height: '56px', color: '#7f1d1d', marginBottom: '20px', strokeWidth: 1.5}} />                <div style={{fontWeight: '700', fontSize: '20px', color: '#111', marginBottom: '8px'}}>
研究を検索</div>
                <div style={{color: '#9ca3af', fontSize: '15px', marginBottom: '14px'}}>Search Research</div>
                <div style={{color: '#9ca3af', fontSize: '13px', lineHeight: '1.7', textAlign: 'center'}}>論文、産業応用、異分野応用を<br/>キーワードで検索できます</div>
              </div>

              {/* My Page Card */}
              {isLoggedIn && (
              <div
                onClick={() => setCurrentView('mypage')}
                style={{
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
                  maxWidth: '320px',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow='0 8px 32px rgba(0,0,0,0.10)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow='none'}
              >
                <User style={{width: '56px', height: '56px', color: '#7f1d1d', marginBottom: '20px', strokeWidth: 1.5}} />
                <div style={{fontWeight: '700', fontSize: '20px', color: '#111', marginBottom: '8px'}}>マイページ</div>
                <div style={{color: '#9ca3af', fontSize: '15px', marginBottom: '14px'}}>My Page</div>
                <div style={{color: '#9ca3af', fontSize: '13px', lineHeight: '1.7', textAlign: 'center'}}>投稿した論文と<br/>プレスリリースの状態</div>
              </div>
              )}

              {/* Press Release Card */}
              <div
                onClick={() => window.open('https://publicchemical.spring8.or.jp/pressrelease/?view=releases', '_blank')}
                style={{
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
                  maxWidth: '320px',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow='0 8px 32px rgba(0,0,0,0.10)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow='none'}
              >
                <FileText style={{width: '56px', height: '56px', color: '#7f1d1d', marginBottom: '20px', strokeWidth: 1.5}} />
                <div style={{fontWeight: '700', fontSize: '20px', color: '#111', marginBottom: '8px'}}>プレスリリースを見る</div>
                <div style={{color: '#9ca3af', fontSize: '15px', marginBottom: '14px'}}>View Press Releases</div>
                <div style={{color: '#9ca3af', fontSize: '13px', lineHeight: '1.7', textAlign: 'center'}}>SPring-8の最新<br/>プレスリリースを閲覧</div>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }

  // Citation Modal
  const citationModal = citationPaper ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)'}}>
      <div className="bg-white rounded-2xl shadow-xl p-6" style={{width: '520px', maxWidth: '90vw', maxHeight: '85vh', overflowY: 'auto'}}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">引用形式</h2>
          <button onClick={() => setCitationPaper(null)} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        
        {/* APA */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">APA</div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-800 leading-relaxed">
            {citationPaper.authors} ({citationPaper.year}). {citationPaper.title}. <em>SPring-8 Research Journal</em>, Vol. {citationPaper.id}, No. 1, pp. 1-20.
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${citationPaper.authors} (${citationPaper.year}). ${citationPaper.title}. SPring-8 Research Journal, Vol. ${citationPaper.id}, No. 1, pp. 1-20.`);
              alert('コピーしました');
            }}
            className="mt-1 text-xs text-blue-600 hover:underline"
          >コピー</button>
        </div>

        {/* MLA */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">MLA</div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-800 leading-relaxed">
            {citationPaper.authors.split(',')[0]}, et al. "{citationPaper.title}." <em>SPring-8 Research Journal</em> ({citationPaper.year}): 1-20.
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${citationPaper.authors.split(',')[0]}, et al. "${citationPaper.title}." SPring-8 Research Journal (${citationPaper.year}): 1-20.`);
              alert('コピーしました');
            }}
            className="mt-1 text-xs text-blue-600 hover:underline"
          >コピー</button>
        </div>

        {/* Chicago */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Chicago</div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-800 leading-relaxed">
            {citationPaper.authors}. "{citationPaper.title}." <em>SPring-8 Research Journal</em> Vol. {citationPaper.id}, no. 1 ({citationPaper.year}): 1-20.
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${citationPaper.authors}. "${citationPaper.title}." SPring-8 Research Journal Vol. ${citationPaper.id}, no. 1 (${citationPaper.year}): 1-20.`);
              alert('コピーしました');
            }}
            className="mt-1 text-xs text-blue-600 hover:underline"
          >コピー</button>
        </div>

        {/* JST */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">JST（科学技術振興機構）</div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-800 leading-relaxed">
            {citationPaper.authors}. {citationPaper.title}. <em>SPring-8 Research Journal</em>. {citationPaper.year}, Vol. {citationPaper.id}, No. 1, p. 1-20.
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${citationPaper.authors}. ${citationPaper.title}. SPring-8 Research Journal. ${citationPaper.year}, Vol. ${citationPaper.id}, No. 1, p. 1-20.`);
              alert('コピーしました');
            }}
            className="mt-1 text-xs text-blue-600 hover:underline"
          >コピー</button>
        </div>

        {/* Vancouver */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Vancouver</div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-800 leading-relaxed">
            {citationPaper.authors}. {citationPaper.title}. <em>SPring-8 Res J</em>. {citationPaper.year};{citationPaper.id}(1):1-20.
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${citationPaper.authors}. ${citationPaper.title}. SPring-8 Res J. ${citationPaper.year};${citationPaper.id}(1):1-20.`);
              alert('コピーしました');
            }}
            className="mt-1 text-xs text-blue-600 hover:underline"
          >コピー</button>
        </div>

        {/* IEEE */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">IEEE</div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-800 leading-relaxed">
            {citationPaper.authors}, "{citationPaper.title}," <em>SPring-8 Research Journal</em>, vol. {citationPaper.id}, no. 1, pp. 1-20, {citationPaper.year}.
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${citationPaper.authors}, "${citationPaper.title}," SPring-8 Research Journal, vol. ${citationPaper.id}, no. 1, pp. 1-20, ${citationPaper.year}.`);
              alert('コピーしました');
            }}
            className="mt-1 text-xs text-blue-600 hover:underline"
          >コピー</button>
        </div>

        <button
          onClick={() => setCitationPaper(null)}
          className="w-full mt-2 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 text-sm font-medium"
        >閉じる</button>
      </div>
    </div>
  ) : null;

  // マイページビュー (My Page View)
  if (currentView === 'mypage') {
    const myPapers = papers.filter(p => p.uploaded_by === loggedInUser);
    return (
      <div className="min-h-screen bg-white">
        {loginModal}
      {citationModal}
      <div className="max-w-full mx-auto">
        <div className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">SPring-8 研究データベース</h1>
              <div className="flex gap-3">
                <button onClick={() => setCurrentView('upload')} className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1">
                  <Home className="w-4 h-4" />
                </button>
                {isLoggedIn ? (
                  <div className="flex items-center gap-3">
                    <button onClick={() => setCurrentView('mypage')} className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium">マイページ</button>
                    <span className="text-sm text-gray-700 font-medium">ようこそ、{loggedInUser}さん 👋</span>
                    <button onClick={() => { setIsLoggedIn(false); setIsReviewer(false); setCurrentView('upload'); setViewingPaper(null); }} className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium">ログアウト</button>
                  </div>
                ) : (
                  <button onClick={() => setShowLoginModal(true)} className="px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium">ログイン</button>
                )}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-serif text-gray-900 mb-2">マイページ</h2>
                <p className="text-gray-500 text-sm">投稿した論文とプレスリリース申請の状態一覧</p>
              </div>
              <label className={`flex items-center gap-2 px-4 py-2 bg-red-800 text-white rounded-lg font-medium text-sm ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-900 cursor-pointer'}`}>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  style={{display: 'none'}}
                  disabled={isProcessing}
                />
                {isProcessing ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    AI解析中...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    論文をアップロード
                  </>
                )}
              </label>
            </div>

            <div className="space-y-5">
              {myPapers.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                  <FileText className="w-12 h-12 mb-4 text-gray-300" />
                  <p className="text-base font-medium text-gray-400">まだ論文が登録されていません</p>
                  <p className="text-sm text-gray-300 mt-1">上のボタンから論文をアップロードしてください</p>
                </div>
              ) : (
                myPapers.map((paper, index) => {
                  const status = paper.press_release_status || 'none';
                  const statusConfig = {
                    none:     { label: '未申請',   style: { background: '#f3f4f6', color: '#6b7280', border: '1px solid #e5e7eb' }, dotStyle: { background: '#9ca3af' } },
                    pending:  { label: '審査中',   style: { background: '#fef3c7', color: '#d97706', border: '1px solid #fcd34d' }, dotStyle: { background: '#f59e0b' } },
                    approved: { label: '承認済み', style: { background: '#dcfce7', color: '#16a34a', border: '1px solid #86efac' }, dotStyle: { background: '#22c55e' } },
                  };
                  const s = statusConfig[status] || statusConfig.none;
                  return (
                    <div key={paper.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                      {/* Card top accent bar based on status */}
                      <div style={{height: '3px', background: status === 'approved' ? '#22c55e' : status === 'pending' ? '#f59e0b' : '#e5e7eb'}} />
                      
                      <div className="p-6">
                        {/* Top row: index + title + status */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center mt-0.5">
                              {index + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <h3
                                onClick={() => { setViewingPaper(paper); setPaperSource('mypage'); setCurrentView('search'); }}
                                className="text-base font-serif text-gray-900 hover:text-red-800 cursor-pointer leading-snug mb-1 transition-colors"
                              >
                                {paper.title}
                              </h3>
                              <div className="flex items-center gap-3 flex-wrap mt-1">
                                <p className="text-xs text-gray-400 font-medium">{paper.authors} · {paper.year}</p>
                              </div>
                            </div>
                          </div>
                          <span style={{...s.style, fontSize: '11px', fontWeight: '600', padding: '4px 10px', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', gap: '5px', flexShrink: 0}}>
                            <span style={{...s.dotStyle, width: '6px', height: '6px', borderRadius: '50%', display: 'inline-block'}}></span>
                            {s.label}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-100 mb-3" />

                        {/* Action buttons row */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                          {/* Edit button — first */}
                          <button
                            onClick={() => {
                              const fd = paper.formData || {};
                              setEditingPaper(paper);
                              setFormData({
                                title: paper.title,
                                title_en: paper.titleEn,
                                authors: paper.authors,
                                year: paper.year,
                                field: paper.field,
                                method: paper.method,
                                beamline: paper.beamline,
                                application: paper.application,
                                mainConclusion: paper.mainConclusion,
                                industrialPain: paper.industrialApplication,
                                crossDomain: paper.crossDomain,
                                failedApproach: paper.failedApproach,
                                priorWork: fd.priorWork || '',
                                novelty: fd.novelty || '',
                                unknownQuestions: fd.unknownQuestions || '',
                                abstractPrinciple: fd.abstractPrinciple || '',
                                experimentalReason: fd.experimentalReason || '',
                                scalingPossibility: fd.scalingPossibility || '',
                                combinationPotential: fd.combinationPotential || '',
                              });
                              // Pre-populate choices and selections so fields are visible in edit mode
                              const editChoices = {};
                              const editSelected = {};
                              mdrcgQuestions.forEach(q => {
                                const val = {
                                  mainConclusion: paper.mainConclusion,
                                  industrialPain: paper.industrialApplication,
                                  crossDomain: paper.crossDomain,
                                  failedApproach: paper.failedApproach,
                                  priorWork: fd.priorWork || '',
                                  novelty: fd.novelty || '',
                                  unknownQuestions: fd.unknownQuestions || '',
                                  abstractPrinciple: fd.abstractPrinciple || '',
                                  experimentalReason: fd.experimentalReason || '',
                                  scalingPossibility: fd.scalingPossibility || '',
                                  combinationPotential: fd.combinationPotential || '',
                                }[q.id] || '';
                                editChoices[q.id] = val ? [val] : [];
                                editSelected[q.id] = val ? 0 : null;
                              });
                              setFieldChoices(editChoices);
                              setSelectedChoices(editSelected);
                              setCurrentView('form');
                            }}
                            className="px-3 py-1.5 text-xs border border-blue-200 text-blue-600 bg-blue-50 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                          >
                            ✏️ 編集
                          </button>

                          {/* Delete button — second */}
                          <button
                            onClick={async () => {
                              if (window.confirm('この論文を削除しますか？')) {
                                try {
                                  const res = await fetch(`https://publicchemical.spring8.or.jp/research/api/papers/${paper.id}`, { method: 'DELETE' });
                                  if (res.ok) {
                                    setPapers(prevPapers => prevPapers.filter(p => p.id !== paper.id));
                                  } else {
                                    alert('削除に失敗しました');
                                  }
                                } catch {
                                  alert('削除に失敗しました');
                                }
                              }
                            }}
                            className="px-3 py-1.5 text-xs border border-red-200 text-red-500 bg-red-50 rounded-lg hover:bg-red-100 font-medium transition-colors"
                          >
                            削除
                          </button>

                          {/* Press release link if approved — uniform style */}
                          {status === 'approved' && (paper.press_release_url || paper.press_release_mongo_id) && (
                            <a
                            
                              href={paper.press_release_url || `https://publicchemical.spring8.or.jp/pressrelease/release.html?id=${paper.press_release_mongo_id}`}
                          
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 text-xs border border-gray-200 text-gray-700 bg-white rounded-lg hover:bg-gray-50 font-medium transition-colors"
                              style={{textDecoration: 'none'}}
                            >
                              📰 プレスリリースを見る
                            </a>
                          )}

                          {/* Press release apply button */}
                          {status === 'none' && (
                            <button
                              onClick={async () => {
                                try {
                                  setPrLoadingId(paper.id);
                                  const pdfRes = await fetch(`https://publicchemical.spring8.or.jp/research/api/papers/${paper.id}/pdf`);
                                  if (!pdfRes.ok) throw new Error('PDFが見つかりません');
                                  const pdfBlob = await pdfRes.blob();
                                  const base64 = await new Promise((resolve, reject) => {
                                    const reader = new FileReader();
                                    reader.onload = () => resolve(reader.result.split(',')[1]);
                                    reader.onerror = reject;
                                    reader.readAsDataURL(pdfBlob);
                                  });
                                  const sys = `あなたはSPring-8・SACLAの研究成果を一般市民・報道機関向けに伝える、日本語サイエンスコミュニケーションの専門家です。

実際のSPring-8公式プレスリリース（https://new.spring8.or.jp）と同じ形式・水準で、学術論文をもとに完全な日本語プレスリリース原稿を生成してください。

【絶対に守るルール】
1. 必ず有効なJSONのみを返してください。コードブロック（\`\`\`json等）・前置き・説明文は一切不要です。JSONの最初の文字は { でなければなりません。
2. background・results・futureは各セクション必ず4〜6段落、各段落3〜5文の充実した内容にしてください。短い要約は禁止です。
3. 【最重要】glossaryに登録する各用語は、必ずbackground・results・futureの本文中に、まったく同じ表記で1回以上使用してください。用語が本文に一度も登場しない場合、クリックリンクが機能しません。
4. 本文中で各用語が初めて登場する箇所の直後に、「注１）」「注２）」のように注番号を付けてください（例：「ABC輸送体注１）は…」「SACLA注２）の高輝度X線を…」）。番号はglossary配列の順番（1から）に対応させてください。
5. summaryは5〜6文で背景・方法・発見・意義をすべて含む詳細な要約にしてください。
6. backgroundには研究分野の社会的背景・既存研究の限界・本研究の動機を詳しく4〜6段落で書いてください。
7. resultsには実験方法・具体的な数値・発見内容・メカニズムの解明を詳しく4〜6段落で書いてください。
8. futureには本研究が開く可能性・応用分野・次のステップを2〜3段落で書いてください。

出力するJSONの構造（これ以外の形式は禁止）:
{"title":"一般向けの魅力的な見出し","date":"発表日","institution":"研究機関名","summary":"5〜6文の詳細要約","background":"研究背景（4〜6段落、\\n区切り、各用語を使用し注番号付き）","results":"研究内容と成果（4〜6段落、\\n区切り、各用語を使用し注番号付き）","future":"今後の展開（2〜3段落、\\n区切り）","significance":[{"icon":"🏥","text":"医療への意義（2〜3文）"},{"icon":"🔬","text":"技術への貢献（2〜3文）"},{"icon":"🌏","text":"社会への波及（2〜3文）"}],"glossary":[{"term":"用語1（本文中に必ず登場する表記）","definition":"一般向け詳細説明（3〜4文）"},{"term":"用語2","definition":"説明"},{"term":"用語3","definition":"説明"},{"term":"用語4","definition":"説明"},{"term":"用語5","definition":"説明"},{"term":"用語6","definition":"説明"}],"figureConcepts":[{"title":"図1タイトル","description":"デザイナー向け詳細説明（色・ラベル・レイアウト含む）"},{"title":"図2タイトル","description":"説明"},{"title":"図3タイトル","description":"説明"}],"paperInfo":{"title":"論文タイトル（英語）","authors":"著者全員","journal":"掲載誌","doi":"DOI"},"quote":{"text":"研究者コメント（です・ます調、2〜3文）","author":"氏名・所属・役職"}}`;
                                  const prRes = await fetch('https://publicchemical.spring8.or.jp/pressrelease', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                      model: 'claude-sonnet-4-20250514',
                                      max_tokens: 16000,
                                      system: sys,
                                      messages: [{
                                        role: 'user',
                                        content: [
                                          { type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: base64 } },
                                          { type: 'text', text: '以下の論文内容をもとに、SPring-8公式プレスリリースと同じ水準の詳細な原稿を生成してください。各セクションは十分な長さ（4〜6段落）で書いてください。・用語解説（6項目、必ず本文中で使用すること）\n・図のコンセプト（3項目）\n・社会的意義を詳しく\n・研究者コメントを含める' }                                        ]
                                      }]
                                    })
                                  });
                                  const prData = await prRes.json();
                                  if (!prData.content) throw new Error('PR生成に失敗しました');
                                  let raw = prData.content.map(x => x.text || '').join('').trim();
                                  raw = raw.replace(/^```json\s*/, '').replace(/^```\s*/, '').replace(/\s*```$/, '').trim();
                                  const s2 = raw.indexOf('{');
                                  const e2 = raw.lastIndexOf('}');
                                  if (s2 !== -1 && e2 !== -1) raw = raw.slice(s2, e2 + 1);
                                  const prJson = JSON.parse(raw);
                                  const saveRes = await fetch('https://publicchemical.spring8.or.jp/pressrelease/saves', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                      title: prJson.title || paper.title,
                                      institution: prJson.institution || '',
                                      date: prJson.date || '',
                                      category: '',
                                      subcategory: '',
                                      status: 'draft',
                                      pr: prJson
                                    })
                                  });
                                  const saveData = await saveRes.json();
                                  if (!saveData._id) throw new Error('IDの取得に失敗しました');
                                  window.open(`https://publicchemical.spring8.or.jp/pressrelease/release.html?id=${saveData._id}`, '_blank');
                                  await fetch(`https://publicchemical.spring8.or.jp/research/api/papers/${paper.id}/press-release-mongo-id`, {
                                    method: 'PATCH',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ mongo_id: saveData._id })
                                  });
                                  setPapers(prev => prev.map(p =>
                                    p.id === paper.id ? { ...p, press_release_status: 'pending' } : p
                                  ));
                                  setPrLoadingId(null);
                                } catch (err) {
                                  alert('プレスリリース生成に失敗しました: ' + err.message);
                                  setPrLoadingId(null);
                                }
                              }}
                              className={`px-3 py-1.5 text-xs rounded-lg font-medium flex items-center gap-1.5 border transition-colors ${prLoadingId === paper.id ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'}`}
                              disabled={prLoadingId === paper.id}
                            >
                              {prLoadingId === paper.id ? (
                                <><Loader className="w-3 h-3 animate-spin" /> 生成中...</>
                              ) : (
                                <>✏️ プレスリリース作成</>
                              )}
                            </button>
                          )}

                          </div>

                          {/* View PDF — pinned rightmost */}
                          <button
                            onClick={async (e) => {
                              e.stopPropagation();
                              try {
                                const res = await fetch(`https://publicchemical.spring8.or.jp/research/api/papers/${paper.id}/pdf`);
                                if (!res.ok) throw new Error('not found');
                                const blob = await res.blob();
                                const url = URL.createObjectURL(blob);
                                window.open(url, '_blank');
                              } catch {
                                alert('この論文のPDFファイルは利用できません');
                              }
                            }}
                            className="px-3 py-1.5 text-xs border border-gray-200 text-gray-700 bg-white rounded-lg hover:bg-gray-50 font-medium transition-colors flex-shrink-0"
                          >
                            📄 論文を見る
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // フォームビュー (Form View)

  // フォームビュー (Form View)
  if (currentView === 'form') {
    return (
      <div className="min-h-screen" style={{backgroundColor: '#f0f0f0'}}>
        {loginModal}
        <div className="max-w-full mx-auto">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                SPring-8 研究データベース
              </h1>
              <div className="flex gap-3">
                
                {isLoggedIn ? (
  <div className="flex items-center gap-3">
    <button onClick={() => setCurrentView('mypage')} className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium">マイページ</button>
    <span className="text-sm text-gray-700 font-medium">ようこそ、{loggedInUser}さん 👋</span>
    <button
      onClick={() => { setIsLoggedIn(false); setIsReviewer(false); setCurrentView('upload'); setViewingPaper(null); }}
      className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium"
    >
      ログアウト
    </button>
  </div>
) : (
  <button
    onClick={() => setShowLoginModal(true)}
    className="px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium"
  >
    ログイン
  </button>
)}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto p-8">
            <div className="bg-white border border-gray-300 rounded-lg p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {editingPaper ? '論文を編集' : 'MDRCG 情報入力フォーム'}
              </h1>
              <p className="text-gray-600">{editingPaper ? 'Edit Paper' : 'Research Context Information Form'}</p>
            </div>

            {/* Paper Relationships Section */}
            {papers.length > 0 && (
              <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Link2 className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-800">
                    関連論文の選択 (Related Papers)
                  </h2>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  この論文と関連する既存の論文を選択し、関係性を指定してください
                </p>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {papers.map(paper => {
                    const existingRelation = selectedRelatedPapers.find(r => r.paperId === paper.id);
                    return (
                      <div key={paper.id} className="flex items-center gap-3 p-3 bg-white rounded border border-gray-300">
                        <input
                          type="checkbox"
                          checked={!!existingRelation}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRelatedPapers([...selectedRelatedPapers, {
                                paperId: paper.id,
                                relationshipType: 'Cited'
                              }]);
                            } else {
                              setSelectedRelatedPapers(selectedRelatedPapers.filter(r => r.paperId !== paper.id));
                            }
                          }}
                          className="w-4 h-4 accent-blue-600"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-800">{paper.title}</p>
                          <p className="text-xs text-gray-500">{paper.authors} ({paper.year})</p>
                        </div>
                        {existingRelation && (
                          <select
                            value={existingRelation.relationshipType}
                            onChange={(e) => {
                              setSelectedRelatedPapers(selectedRelatedPapers.map(r =>
                                r.paperId === paper.id ? { ...r, relationshipType: e.target.value } : r
                              ));
                            }}
                            className="px-3 py-1 border-2 border-gray-300 rounded text-sm font-medium"
                          >
                            {relationshipTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="space-y-3">
              {mdrcgQuestions.map((question) => {
                const isOpen = formData[`_open_${question.id}`] !== false;
                return (
                  <div key={question.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => handleInputChange(`_open_${question.id}`, !isOpen)}
                      className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 text-left transition-colors"
                    >
                      <span className="text-base font-semibold text-gray-800">
                        {question.label}
                        {question.required && <span className="text-red-500 ml-1">*</span>}
                      </span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 bg-white">
                        {/* 3 AI choice cards */}
                        {fieldChoices[question.id] && fieldChoices[question.id].length > 1 && (
                          <div className="mb-4">
                            <p className="text-xs font-semibold text-gray-500 mb-2">💡 AIが生成した3つの案から選んでください</p>
                            <div className="grid grid-cols-1 gap-2">
                              {fieldChoices[question.id].map((choice, i) => (
                                <div
                                  key={i}
                                  onClick={() => {
                                    if (selectedChoices[question.id] === i) {
                                      setSelectedChoices(prev => ({ ...prev, [question.id]: null }));
                                      handleInputChange(question.id, '');
                                    } else {
                                      setSelectedChoices(prev => ({ ...prev, [question.id]: i }));
                                      handleInputChange(question.id, choice);
                                    }
                                  }}
                                  style={{
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: selectedChoices[question.id] === i ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                                    background: selectedChoices[question.id] === i ? '#eff6ff' : '#f9fafb',
                                    cursor: 'pointer',
                                    fontSize: '12px',
                                    lineHeight: '1.6',
                                    whiteSpace: 'pre-line',
                                    color: '#111827',
                                    display: 'block',
                                    width: '100%',
                                    textAlign: 'left',
                                  }}
                                >
                                  <div className="flex items-center gap-2 mb-1">
                                    <span style={{fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '9999px', background: selectedChoices[question.id] === i ? '#dbeafe' : '#e5e7eb', color: '#111827', display: 'inline-block'}}>
                                      案 {i + 1}
                                    </span>
                                    {selectedChoices[question.id] === i && <span style={{fontSize: '11px', fontWeight: '600', color: '#2563eb'}}>✓ 選択中</span>}
                                  </div>
                                  {choice}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {selectedChoices[question.id] != null && (
                          <>
                            <textarea
                              value={formData[question.id] || ''}
                              onChange={(e) => handleInputChange(question.id, e.target.value)}
                              placeholder={question.placeholder}
                              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none bg-yellow-50 resize-none"
                              style={{ minHeight: '120px', height: 'auto' }}
                              rows={Math.max(4, ((formData[question.id] || '').match(/\n/g) || []).length + 3)}
                              required={question.required}
                            />
                            <p className="text-xs text-gray-500 mt-1">✏️ 選択した案を自由に編集できます</p>
                          </>
                        )}
                        <div className="mt-3 flex gap-2 items-center">
                          <input
                            type="text"
                            value={regenInput[question.id] || ''}
                            onChange={(e) => setRegenInput(prev => ({ ...prev, [question.id]: e.target.value }))}
                            onKeyDown={async (e) => {
                              if (e.key === 'Enter' && regenInput[question.id]?.trim()) {
                                setRegenLoading(prev => ({ ...prev, [question.id]: true }));
                                try {
                                  const res = await fetch('https://publicchemical.spring8.or.jp/research/api/analyze-pdf/regenerate-field/', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                      field_name: question.label,
                                      current_text: formData[question.id] || '',
                                      instruction: regenInput[question.id]
                                    })
                                  });
                                  const data = await res.json();
                                  handleInputChange(question.id, data.result);
                                  setRegenInput(prev => ({ ...prev, [question.id]: '' }));
                                } catch {
                                  alert('再生成に失敗しました');
                                } finally {
                                  setRegenLoading(prev => ({ ...prev, [question.id]: false }));
                                }
                              }
                            }}
                            placeholder="指示を入力... 例: もっと長く、より丁寧に (Enterで実行)"
                            className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none bg-white"
                            disabled={regenLoading[question.id]}
                          />
                          <button
                            onClick={async () => {
                              if (!regenInput[question.id]?.trim()) return;
                              setRegenLoading(prev => ({ ...prev, [question.id]: true }));
                              try {
                                const res = await fetch('https://publicchemical.spring8.or.jp/research/api/analyze-pdf/regenerate-field/', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({
                                    field_name: question.label,
                                    current_text: formData[question.id] || '',
                                    instruction: regenInput[question.id]
                                  })
                                });
                                const data = await res.json();
                                handleInputChange(question.id, data.result);
                                setRegenInput(prev => ({ ...prev, [question.id]: '' }));
                              } catch {
                                alert('再生成に失敗しました');
                              } finally {
                                setRegenLoading(prev => ({ ...prev, [question.id]: false }));
                              }
                            }}
                            disabled={regenLoading[question.id] || !regenInput[question.id]?.trim()}
                            className="px-3 py-2 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 font-medium"
                          >
                            {regenLoading[question.id] ? <><Loader className="w-3 h-3 animate-spin" />生成中</> : '✨ 再生成'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => { setEditingPaper(null); setFormData({}); setCurrentView('mypage'); }}
                className="px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold"
              >
                ← 戻る
              </button>
              <button
                onClick={handleSubmit}
                disabled={isProcessing}
                className={`flex-1 px-6 py-3 bg-red-800 text-white rounded font-semibold flex items-center justify-center gap-2 ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-900'}`}
              >
                {isProcessing ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    登録中...
                  </>
                ) : (
                  '登録'
                )}
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 論文詳細ビュー (Paper Detail View)
  if (currentView === 'search' && viewingPaper) {
    return (
      <div className="min-h-screen bg-white">
        {citationModal}
        <div className="max-w-full mx-auto">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                SPring-8 研究データベース
              </h1>
              <div className="flex gap-3">
                <button
                  onClick={() => { setViewingPaper(null); setCurrentView(paperSource); window.scrollTo(0, 0); }}
                  className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium"
                >
                  {paperSource === 'mypage' ? '← マイページに戻る' : '← 検索結果に戻る'}
                </button>
                {isLoggedIn ? (
  <div className="flex items-center gap-3">
    <button onClick={() => setCurrentView('mypage')} className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium">マイページ</button>
    <span className="text-sm text-gray-700 font-medium">ようこそ、{loggedInUser}さん 👋</span>
    <button
      onClick={() => { setIsLoggedIn(false); setIsReviewer(false); setCurrentView('upload'); setViewingPaper(null); }}
      className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium"
    >
      ログアウト
    </button>
  </div>
) : (
  <button
    onClick={() => setShowLoginModal(true)}
    className="px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium"
  >
    ログイン
  </button>
)}
              </div>
            </div>
          </div>

          {/* Paper Detail Content */}
          <div className="max-w-5xl mx-auto p-8">
            <div className="bg-white border border-gray-300 rounded-lg p-8">
              {/* Title Section */}
              <div className="mb-6">
                <span className="text-xs text-gray-600 uppercase tracking-wide">学術論文</span>
                <h1 className="text-3xl font-serif text-gray-900 mt-2 mb-4">
                  {viewingPaper.title}
                </h1>
                <p className="text-xl text-gray-600 mb-4">{viewingPaper.titleEn}</p>
                <p className="text-gray-700 mb-2">著者: {viewingPaper.authors}</p>
                <p className="text-sm italic text-gray-600">
                  SPring-8 Research Journal, Vol. {viewingPaper.id}, No. 1 ({viewingPaper.year}), pp. 1-20
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-8 pb-8 border-b border-gray-300 flex-wrap">
                <button
                  onClick={async () => {
                    try {
                      const res = await fetch(`https://publicchemical.spring8.or.jp/research/api/papers/${viewingPaper.id}/pdf`);
                      if (!res.ok) throw new Error('not found');
                      const blob = await res.blob();
                      const url = URL.createObjectURL(blob);
                      window.open(url, '_blank');
                    } catch {
                      alert('この論文のPDFファイルは利用できません');
                    }
                  }}
                  className="px-6 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold"
                >
                  論文PDF
                </button>
                <button
                  onClick={() => {
                    const p = viewingPaper;
                    const fd = p.formData || {};
                    const lines = [
                      'SPring-8 研究データベース — MDRCG 分析レポート',
                      '═══════════════════════════════════════════════════════',
                      '',
                      `タイトル: ${p.title}`,
                      `英語タイトル: ${p.titleEn || ''}`,
                      `著者: ${p.authors}`,
                      `年度: ${p.year}`,
                      `研究分野: ${p.field}`,
                      `測定手法: ${p.method}`,
                      `ビームライン: ${p.beamline}`,
                      `産業応用: ${p.application}`,
                      '',
                      '───────────────────────────────────────────────────────',
                      'MDRCG 詳細情報',
                      '───────────────────────────────────────────────────────',
                      '',
                      '【主な結論】',
                      p.mainConclusion || '',
                      '',
                      fd.priorWork ? `【先行研究との関係】\n${fd.priorWork}\n` : '',
                      fd.novelty ? `【新規性】\n${fd.novelty}\n` : '',
                      fd.unknownQuestions ? `【未解明の課題】\n${fd.unknownQuestions}\n` : '',
                      p.failedApproach ? `【失敗したアプローチ】\n${p.failedApproach}\n` : '',
                      p.crossDomain ? `【異分野翻訳レイヤー】\n${p.crossDomain}\n` : '',
                      p.industrialApplication ? `【産業応用可能性】\n${p.industrialApplication}\n` : '',
                      fd.abstractPrinciple ? `【抽象化された原理（小学5年生レベル）】\n${fd.abstractPrinciple}\n` : '',
                      fd.experimentalReason ? `【実験設計の理由】\n${fd.experimentalReason}\n` : '',
                      fd.scalingPossibility ? `【スケーリング可能性】\n${fd.scalingPossibility}\n` : '',
                      fd.combinationPotential ? `【組み合わせ可能性】\n${fd.combinationPotential}\n` : '',
                      '───────────────────────────────────────────────────────',
                      `生成日時: ${new Date().toLocaleString('ja-JP')}`,
                      'SPring-8 研究データベース',
                    ].filter(l => l !== undefined).join('\n');

                    const printFrame = document.createElement('iframe');
                    printFrame.style.position = 'fixed';
                    printFrame.style.top = '-10000px';
                    printFrame.style.left = '-10000px';
                    printFrame.style.width = '800px';
                    printFrame.style.height = '600px';
                    document.body.appendChild(printFrame);
                    const doc = printFrame.contentDocument;
                    doc.open();
                    doc.write(`
                      <html>
                        <head>
                          <title>${p.title} — MDRCG分析</title>
                          <style>
                            body { font-family: 'Hiragino Sans', sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; color: #111; font-size: 13px; line-height: 1.8; }
                            h1 { font-size: 20px; font-weight: bold; border-bottom: 2px solid #111; padding-bottom: 8px; margin-bottom: 4px; }
                            .meta { color: #555; font-size: 12px; margin-bottom: 24px; }
                            .meta span { margin-right: 16px; }
                            .divider { border-top: 1px solid #ccc; margin: 20px 0; }
                            .section { margin-bottom: 20px; }
                            .section-title { font-weight: bold; font-size: 13px; background: #f5f5f5; padding: 4px 10px; border-left: 3px solid #7f1d1d; margin-bottom: 8px; }
                            .section-body { white-space: pre-wrap; color: #333; padding: 0 10px; }
                            .footer { margin-top: 40px; padding-top: 12px; border-top: 1px solid #ccc; font-size: 11px; color: #888; }
                          </style>
                        </head>
                        <body>
                          <h1>${p.title}</h1>
                          <div class="meta">
                            <span>著者: ${p.authors}</span>
                            <span>年度: ${p.year}</span>
                            <span>分野: ${p.field}</span>
                            <span>手法: ${p.method}</span>
                            <span>ビームライン: ${p.beamline}</span>
                          </div>
                          <div class="divider"></div>
                          ${[
                            ['主な結論', p.mainConclusion],
                            ['先行研究との関係', fd.priorWork],
                            ['新規性', fd.novelty],
                            ['未解明の課題', fd.unknownQuestions],
                            ['失敗したアプローチ', p.failedApproach],
                            ['異分野翻訳レイヤー', p.crossDomain],
                            ['産業応用可能性', p.industrialApplication],
                            ['抽象化された原理', fd.abstractPrinciple],
                            ['実験設計の理由', fd.experimentalReason],
                            ['スケーリング可能性', fd.scalingPossibility],
                            ['組み合わせ可能性', fd.combinationPotential],
                          ].filter(([_, v]) => v).map(([title, body]) => `
                            <div class="section">
                              <div class="section-title">【${title}】</div>
                              <div class="section-body">${body}</div>
                            </div>
                          `).join('')}
                          <div class="footer">生成日時: ${new Date().toLocaleString('ja-JP')} — SPring-8 研究データベース</div>
                        </body>
                      </html>
                    `);
                    doc.close();
                    setTimeout(() => {
                      printFrame.contentWindow.print();
                      setTimeout(() => document.body.removeChild(printFrame), 1000);
                    }, 500);
                  }}
                  className="px-6 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold"
                >
                  AI分析をPDF保存
                </button>
                
                <button
                  onClick={() => setCitationPaper(viewingPaper)}
                  className="px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold">
                  引用
                </button>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">研究分野</h3>
                  <p className="text-gray-900">{viewingPaper.field}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">測定手法</h3>
                  <p className="text-gray-900">{viewingPaper.method}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">ビームライン</h3>
                  <p className="text-gray-900">{viewingPaper.beamline}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">産業応用</h3>
                  <p className="text-gray-900">{viewingPaper.application}</p>
                </div>
              </div>

              {/* MDRCG Information */}
              {viewingPaper.formData && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
                    MDRCG 詳細情報
                  </h2>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">主な結論</h3>
                    <p className="text-gray-700 leading-relaxed">{viewingPaper.mainConclusion}</p>
                  </div>

                  {viewingPaper.formData.priorWork && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">先行研究との関係</h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{viewingPaper.formData.priorWork}</p>
                    </div>
                  )}

                  {viewingPaper.formData.novelty && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">新規性</h3>
                      <p className="text-gray-700 leading-relaxed">{viewingPaper.formData.novelty}</p>
                    </div>
                  )}

                  {viewingPaper.formData.unknownQuestions && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">未解明の課題</h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{viewingPaper.formData.unknownQuestions}</p>
                    </div>
                  )}

                  {viewingPaper.failedApproach && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">失敗したアプローチ</h3>
                      <p className="text-gray-700 leading-relaxed">{viewingPaper.failedApproach}</p>
                    </div>
                  )}

                  {viewingPaper.crossDomain && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">異分野翻訳レイヤー</h3>
                      <p className="text-gray-700 leading-relaxed">{viewingPaper.crossDomain}</p>
                    </div>
                  )}

                  {viewingPaper.industrialApplication && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">産業応用可能性</h3>
                      <p className="text-gray-700 leading-relaxed">{viewingPaper.industrialApplication}</p>
                    </div>
                  )}

                  {viewingPaper.formData.abstractPrinciple && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">抽象化された原理（小学5年生レベル）</h3>
                      <p className="text-gray-700 leading-relaxed">{viewingPaper.formData.abstractPrinciple}</p>
                    </div>
                  )}

                  {viewingPaper.formData.experimentalReason && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">実験設計の理由</h3>
                      <p className="text-gray-700 leading-relaxed">{viewingPaper.formData.experimentalReason}</p>
                    </div>
                  )}

                  {viewingPaper.formData.scalingPossibility && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">スケーリング可能性</h3>
                      <p className="text-gray-700 leading-relaxed">{viewingPaper.formData.scalingPossibility}</p>
                    </div>
                  )}

                  {viewingPaper.formData.combinationPotential && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">組み合わせ可能性</h3>
                      <p className="text-gray-700 leading-relaxed">{viewingPaper.formData.combinationPotential}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Related Papers Section */}
              {viewingPaper.relatedPapers && viewingPaper.relatedPapers.length > 0 && (
                <div className="mt-8 pt-8 border-t-2 border-gray-300">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Link2 className="w-6 h-6 text-blue-600" />
                    関連論文 (Related Papers)
                  </h2>
                  <div className="space-y-3">
                    {viewingPaper.relatedPapers.map(relation => {
                      const relatedPaper = papers.find(p => p.id === relation.paperId);
                      return relatedPaper ? (
                        <div key={relation.paperId} className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900">{relatedPaper.title}</p>
                              <p className="text-sm text-gray-600 mt-1">{relatedPaper.authors} ({relatedPaper.year})</p>
                            </div>
                            <span className="ml-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                              {relation.relationshipType}
                            </span>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Press Release Section */}
            <div className="mt-8 p-6 border-2 border-blue-200 rounded-lg bg-blue-50" style={{display: 'none'}}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">📰 プレスリリース</h2>

              {/* No request yet */}
              {(!viewingPaper.press_release_status || viewingPaper.press_release_status === 'none') && (
                <div>
                  <p className="text-sm text-gray-600 mb-3">プレスリリースの作成がまだありません。</p>
                  {isLoggedIn && !isReviewer && (
                    <div className="space-y-3">
                      <textarea
                        value={prRequestNote}
                        onChange={(e) => setPrRequestNote(e.target.value)}
                        placeholder="審査担当者へのメッセージを入力してください（任意）例：この研究は一般向けに発信する価値があります..."
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 min-h-[80px] bg-white"
                      />
                      <button
                        onClick={async () => {
                          await fetch(`https://publicchemical.spring8.or.jp/research/api/papers/${viewingPaper.id}/press-release-status`, {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ status: 'pending', note: prRequestNote })
                          });
                          setViewingPaper({ ...viewingPaper, press_release_status: 'pending', press_release_note: prRequestNote });
                          setPapers(papers.map(p => p.id === viewingPaper.id ? { ...p, press_release_status: 'pending', press_release_note: prRequestNote } : p));
                          setPrRequestNote('');
                        }}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 font-medium"
                      >
                        申請する
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Pending */}
              {viewingPaper.press_release_status === 'pending' && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm font-semibold rounded-full">
                      ⏳ 申請済み・審査中
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">審査担当者が確認次第、結果をお知らせします。</p>
                  {viewingPaper.press_release_note && (
                    <div className="mb-4 p-3 bg-white border border-gray-200 rounded text-sm text-gray-700">
                      <span className="font-semibold text-gray-500 text-xs block mb-1">申請メッセージ:</span>
                      {viewingPaper.press_release_note}
                    </div>
                  )}
                  {isReviewer && (
                    <div className="flex gap-3 mt-3">
                      <button
                        onClick={async () => {
                          await fetch(`https://publicchemical.spring8.or.jp/research/api/papers/${viewingPaper.id}/press-release-status`, {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ status: 'approved' })
                          });
                          setViewingPaper({ ...viewingPaper, press_release_status: 'approved' });
                          setPapers(papers.map(p => p.id === viewingPaper.id ? { ...p, press_release_status: 'approved' } : p));
                        }}
                        className="px-5 py-2.5 bg-green-500 text-white text-sm font-bold rounded-lg hover:bg-green-600 border-2 border-green-600 shadow-sm flex items-center gap-2"
                      >
                        ✓ 承認する
                      </button>
                      <button
                        onClick={async () => {
                          await fetch(`https://publicchemical.spring8.or.jp/research/api/papers/${viewingPaper.id}/press-release-status`, {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ status: 'rejected' })
                          });
                          setViewingPaper({ ...viewingPaper, press_release_status: 'rejected' });
                          setPapers(papers.map(p => p.id === viewingPaper.id ? { ...p, press_release_status: 'rejected' } : p));
                        }}
                        className="px-5 py-2.5 bg-white text-red-600 text-sm font-bold rounded-lg hover:bg-red-50 border-2 border-red-500 shadow-sm flex items-center gap-2"
                      >
                        ✕ 却下する
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Rejected */}
              {viewingPaper.press_release_status === 'rejected' && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-100 border border-red-300 text-red-700 text-sm font-semibold rounded-full">
                      ✕ 申請が却下されました
                    </span>
                  </div>
                  {isLoggedIn && !isReviewer && (
                    <div className="space-y-3 mt-3">
                      <textarea
                        value={prRequestNote}
                        onChange={(e) => setPrRequestNote(e.target.value)}
                        placeholder="再申請のメッセージを入力してください（任意）"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 min-h-[80px] bg-white"
                      />
                      <button
                        onClick={async () => {
                          await fetch(`https://publicchemical.spring8.or.jp/research/api/papers/${viewingPaper.id}/press-release-status`, {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ status: 'pending', note: prRequestNote })
                          });
                          setViewingPaper({ ...viewingPaper, press_release_status: 'pending', press_release_note: prRequestNote });
                          setPapers(papers.map(p => p.id === viewingPaper.id ? { ...p, press_release_status: 'pending', press_release_note: prRequestNote } : p));
                          setPrRequestNote('');
                        }}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 font-medium"
                      >
                        再申請する
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Approved */}
              {viewingPaper.press_release_status === 'approved' && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 border border-green-300 text-green-700 text-sm font-semibold rounded-full">
                      ✓ 承認されました
                    </span>
                  </div>
                  {viewingPaper.press_release_url ? (
                    <a href={viewingPaper.press_release_url} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 font-medium">
                      📰 プレスリリースを見る
                    </a>
                  ) : (
                    isLoggedIn && !isReviewer && (
                      <div className="space-y-2 mt-2">
                        <p className="text-xs text-gray-500">プレスリリースを作成後、URLをこちらに登録してください。</p>
                        <div className="flex gap-2 items-center">
                          <input
                            type="text"
                            placeholder="プレスリリースのURLを貼り付け..."
                            className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                            id="pr-url-input"
                          />
                          <button
                            onClick={async () => {
                              const url = document.getElementById('pr-url-input').value.trim();
                              if (!url) return;
                              await fetch(`https://publicchemical.spring8.or.jp/research/api/papers/${viewingPaper.id}/press-release-url`, {
                                method: 'PATCH',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ url })
                              });
                              setViewingPaper({ ...viewingPaper, press_release_url: url });
                              setPapers(papers.map(p => p.id === viewingPaper.id ? { ...p, press_release_url: url } : p));
                            }}
                            className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 font-medium"
                          >
                            保存
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Back Button */}
            <div className="mt-6">
              <button
                onClick={() => { setViewingPaper(null); setCurrentView(paperSource); window.scrollTo(0, 0); }}
                  className="px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold"
                >
                  {paperSource === 'mypage' ? '← マイページに戻る' : '← 検索結果に戻る'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 検索ビュー (Search View)
  return (
    <div className="min-h-screen bg-white">
      {loginModal}
      {citationModal}
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              SPring-8 Research Database
            </h1>
            <div className="flex gap-3">
              <button
                onClick={() => setCurrentView('upload')}
                className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1"
              >
                <Home className="w-4 h-4" />
              </button>
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <button onClick={() => setCurrentView('mypage')} className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium">マイページ</button>
                  <span className="text-sm text-gray-700 font-medium">ようこそ、{loggedInUser}さん 👋</span>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 font-medium"
                  >
                    ログアウト
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium"
                >
                  Log in
                </button>
              )}
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="キーワード、産業応用、異分野応用などで検索..."
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded focus:border-gray-400 focus:outline-none text-base"
              />
              <button className="absolute right-3 top-3 text-gray-600 hover:text-gray-900">
                <Search className="w-5 h-5" />
              </button>
            </div>
            
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex">
          {/* Left Sidebar - Filters */}
          <div className="w-64 border-r border-gray-200 bg-gray-50 p-6 min-h-screen">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Refine Results</h2>

          {/* Research Field Filter */}
            <div className="mb-6">
              <button
                onClick={() => setShowFilters({...showFilters, field: !showFilters.field})}
                className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2"
              >
                <span>研究分野 (Research Field)</span>
                {showFilters.field ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {showFilters.field && (
                <div className="space-y-1">
                  {['材料科学 (Materials Science)', '生命科学 (Life Sciences)', 'ナノサイエンス (Nanoscience)', '高分子科学 (Polymer Science)', '物性物理学 (Condensed Matter Physics)'].map(field => (
                    <label key={field} className="flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-100 p-1 rounded">
                      <input
                        type="checkbox"
                        checked={selectedFilters.field.includes(field)}
                        onChange={() => toggleFilter('field', field)}
                        className="mt-0.5 w-4 h-4 accent-red-800"
                      />
                      <span className="text-gray-700">{field.split(' (')[0]}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Method Filter */}
            <div className="mb-6">
              <button
                onClick={() => setShowFilters({...showFilters, method: !showFilters.method})}
                className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2"
              >
                <span>測定手法 (Method)</span>
                {showFilters.method ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {showFilters.method && (
                <div className="space-y-1">
                  {['X線回折 (X-ray Diffraction)', 'X線結晶構造解析 (X-ray Crystallography)', '時間分解分光 (Time-Resolved Spectroscopy)', '小角X線散乱 (SAXS)'].map(method => (
                    <label key={method} className="flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-100 p-1 rounded">
                      <input
                        type="checkbox"
                        checked={selectedFilters.method.includes(method)}
                        onChange={() => toggleFilter('method', method)}
                        className="mt-0.5 w-4 h-4 accent-red-800"
                      />
                      <span className="text-gray-700">{method.split(' (')[0]}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Application Filter */}
            <div className="mb-6">
              <button
                onClick={() => setShowFilters({...showFilters, application: !showFilters.application})}
                className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2"
              >
                <span>産業応用 (Application)</span>
                {showFilters.application ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {showFilters.application && (
                <div className="space-y-1">
                  {['自動車産業 (Automotive)', '製薬・医療 (Pharmaceutical)', 'エネルギー産業 (Energy)', '化学産業 (Chemical)'].map(app => (
                    <label key={app} className="flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-100 p-1 rounded">
                      <input
                        type="checkbox"
                        checked={selectedFilters.application.includes(app)}
                        onChange={() => toggleFilter('application', app)}
                        className="mt-0.5 w-4 h-4 accent-red-800"
                      />
                      <span className="text-gray-700">{app.split(' (')[0]}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Year Filter */}
            <div className="mb-6">
              <button
                onClick={() => setShowFilters({...showFilters, year: !showFilters.year})}
                className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2"
              >
                <span>年度 (Year)</span>
                {showFilters.year ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {showFilters.year && (
                <div className="space-y-1">
                  {[2024, 2023, 2022].map(year => (
                    <label key={year} className="flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-100 p-1 rounded">
                      <input
                        type="checkbox"
                        checked={selectedFilters.year.includes(year)}
                        onChange={() => toggleFilter('year', year)}
                        className="mt-0.5 w-4 h-4 accent-red-800"
                      />
                      <span className="text-gray-700">{year}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Content Area - Results */}
          <div className="flex-1 p-8">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                <strong>{filteredPapers.length}</strong> 件の結果
              </p>
            </div>

            <div className="space-y-6">
            {filteredPapers.map(paper => (
              <div key={paper.id} id={`paper-${paper.id}`} className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <input type="checkbox" className="w-4 h-4 mt-1 accent-red-800" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-xs text-gray-600 uppercase tracking-wide">学術論文</span>
                    </div>
                    
                    <h3 
                      onClick={() => { setViewingPaper(paper); setPaperSource('search'); }}
                      className="text-xl font-serif text-gray-900 mb-2 hover:underline cursor-pointer"
                    >
                      {paper.title}
                    </h3>
                    
                    <p className="text-sm text-gray-700 mb-2">{paper.authors}</p>
                    
                    <p className="text-sm italic text-gray-600 mb-3">
                      SPring-8 Research Journal, Vol. {paper.id}, No. 1 ({paper.year}), pp. 1-20
                    </p>
                    
                    <p className="text-sm text-gray-800 leading-relaxed mb-3">
                      ...{paper.mainConclusion.substring(0, 150)}...
                    </p>
                    
                    <div className="flex items-center gap-3 flex-wrap">
                      {paper.press_release_status === 'approved' && (paper.press_release_url || paper.press_release_mongo_id) && (
  <a href={paper.press_release_url || `https://publicchemical.spring8.or.jp/pressrelease/release.html?id=${paper.press_release_mongo_id}`} target="_blank" rel="noopener noreferrer" className="text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 font-medium">
    📰 プレスリリース
  </a>
)}
                      
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 flex flex-col gap-2 w-32">
                    <button 
                      onClick={async () => {
                        try {
                          const res = await fetch(`https://publicchemical.spring8.or.jp/research/api/papers/${paper.id}/pdf`);
                          if (!res.ok) throw new Error('not found');
                          const blob = await res.blob();
                          const url = URL.createObjectURL(blob);
                          window.open(url, '_blank');
                        } catch {
                          alert('この論文のPDFファイルは利用できません');
                        }
                      }}
                      className="px-4 py-2 bg-red-800 text-white text-sm rounded hover:bg-red-900 font-medium"
                    >
                      オンライン閲覧
                    </button>
                    
                    <button
                      onClick={() => setCitationPaper(paper)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 font-medium">
                      引用
                    </button>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;