"""
Seed script: populates the database with the 9 sample papers from the frontend.
Run: python seed_data.py
"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timezone

MONGODB_URL = "mongodb://localhost:27017"
DB_NAME = "spring8_mdrcg"

SAMPLE_PAPERS = [
    {
        "title": "高エネルギーX線回折による新規触媒材料の構造解析",
        "title_en": "Structural Analysis of Novel Catalyst Materials using High-Energy X-ray Diffraction",
        "authors": "Hatsui, T., Takeshita, K.",
        "year": 2024,
        "field": "材料科学 (Materials Science)",
        "method": "X線回折 (X-ray Diffraction)",
        "beamline": "BL19B2",
        "application": "自動車産業 (Automotive)",
        "main_conclusion": "新規Pt-Co合金触媒の原子配列構造を解明し、触媒活性が30%向上することを実証",
        "industrial_application": "自動車用燃料電池の効率向上、環境触媒技術",
        "cross_domain": "化学工学、エネルギー工学への応用可能",
        "failed_approach": "従来のTEM観察では動的変化を捉えられなかった",
        "form_data": None,
        "related_papers": [],
    },
    {
        "title": "タンパク質結晶構造解析による創薬ターゲット同定",
        "title_en": "Drug Target Identification through Protein Crystal Structure Analysis",
        "authors": "Yamamoto, M., Tanaka, Y.",
        "year": 2024,
        "field": "生命科学 (Life Sciences)",
        "method": "X線結晶構造解析 (X-ray Crystallography)",
        "beamline": "BL41XU",
        "application": "製薬・医療 (Pharmaceutical)",
        "main_conclusion": "新規抗がん剤標的タンパク質の活性部位構造を原子レベルで解明",
        "industrial_application": "製薬業界における新薬開発、個別化医療",
        "cross_domain": "構造生物学、計算化学への展開",
        "failed_approach": "低温凍結条件では生理的構造が維持できなかった",
        "form_data": None,
        "related_papers": [],
    },
    {
        "title": "ナノ材料の時間分解分光による電子状態ダイナミクス研究",
        "title_en": "Electronic State Dynamics of Nanomaterials via Time-Resolved Spectroscopy",
        "authors": "Sato, K., Nakamura, H.",
        "year": 2023,
        "field": "ナノサイエンス (Nanoscience)",
        "method": "時間分解分光 (Time-Resolved Spectroscopy)",
        "beamline": "BL43IR",
        "application": "エネルギー産業 (Energy)",
        "main_conclusion": "量子ドットの励起状態寿命が表面修飾により10倍延長可能",
        "industrial_application": "高効率太陽電池、量子コンピュータ素子開発",
        "cross_domain": "半導体工学、光エレクトロニクス",
        "failed_approach": "室温測定では熱揺らぎの影響が大きすぎた",
        "form_data": None,
        "related_papers": [],
    },
    {
        "title": "高分子材料の放射光X線小角散乱による階層構造解析",
        "title_en": "Hierarchical Structure Analysis of Polymer Materials by Synchrotron SAXS",
        "authors": "Kobayashi, R., Ishida, M.",
        "year": 2023,
        "field": "高分子科学 (Polymer Science)",
        "method": "小角X線散乱 (SAXS)",
        "beamline": "BL40B2",
        "application": "化学産業 (Chemical)",
        "main_conclusion": "新規生分解性プラスチックのナノ構造制御により強度が2倍向上",
        "industrial_application": "環境対応型プラスチック製品、包装材料の高性能化",
        "cross_domain": "材料工学、環境科学への応用",
        "failed_approach": "従来のDSC測定では階層構造の詳細が不明瞭だった",
        "form_data": None,
        "related_papers": [],
    },
    {
        "title": "磁性材料のX線磁気円二色性による電子状態観察",
        "title_en": "Electronic State Observation of Magnetic Materials by XMCD",
        "authors": "Fujimoto, S., Watanabe, K.",
        "year": 2024,
        "field": "物性物理学 (Condensed Matter Physics)",
        "method": "X線磁気円二色性 (XMCD)",
        "beamline": "BL25SU",
        "application": "エレクトロニクス (Electronics)",
        "main_conclusion": "スピントロニクス材料の磁気異方性起源を原子レベルで解明",
        "industrial_application": "次世代ハードディスク、磁気メモリの高密度化",
        "cross_domain": "情報工学、量子技術への展開",
        "failed_approach": "SQUID測定では局所的な磁気構造が観測できなかった",
        "form_data": None,
        "related_papers": [],
    },
    {
        "title": "半導体デバイスの高速X線イメージングによる動作解析",
        "title_en": "Operational Analysis of Semiconductor Devices by High-Speed X-ray Imaging",
        "authors": "Suzuki, H., Ito, T.",
        "year": 2022,
        "field": "半導体工学 (Semiconductor Engineering)",
        "method": "高速X線イメージング (High-Speed X-ray Imaging)",
        "beamline": "BL20XU",
        "application": "エレクトロニクス (Electronics)",
        "main_conclusion": "次世代パワー半導体の熱応力分布をリアルタイムで可視化",
        "industrial_application": "電気自動車用パワーデバイスの信頼性向上",
        "cross_domain": "電気工学、熱工学への応用",
        "failed_approach": "可視光観察では内部構造の変化が観測不可能だった",
        "form_data": None,
        "related_papers": [],
    },
    {
        "title": "文化財の非破壊X線分析による製作技法の解明",
        "title_en": "Non-Destructive X-ray Analysis for Understanding Cultural Heritage Production Techniques",
        "authors": "Nakamura, Y., Kimura, A.",
        "year": 2023,
        "field": "文化財科学 (Cultural Heritage Science)",
        "method": "X線蛍光分析 (XRF)",
        "beamline": "BL08W",
        "application": "文化・芸術 (Culture & Arts)",
        "main_conclusion": "江戸時代の陶磁器の釉薬組成と焼成温度を非破壊で特定",
        "industrial_application": "文化財保存技術、伝統工芸の復元",
        "cross_domain": "考古学、歴史学への応用",
        "failed_approach": "従来の顕微鏡観察では内部構造が分からなかった",
        "form_data": None,
        "related_papers": [],
    },
    {
        "title": "地球深部物質の高圧X線回折実験",
        "title_en": "High-Pressure X-ray Diffraction Experiments on Deep Earth Materials",
        "authors": "Takahashi, N., Mori, D.",
        "year": 2024,
        "field": "地球科学 (Earth Science)",
        "method": "高圧X線回折 (High-Pressure XRD)",
        "beamline": "BL10XU",
        "application": "資源探査 (Resource Exploration)",
        "main_conclusion": "マントル遷移層の鉱物相転移圧力を精密決定し、地震波速度異常を説明",
        "industrial_application": "鉱物資源探査、地震予測技術への貢献",
        "cross_domain": "地震学、鉱物学への展開",
        "failed_approach": "常圧実験では高圧相の構造が再現できなかった",
        "form_data": None,
        "related_papers": [],
    },
    {
        "title": "食品成分の放射光赤外分光による分子構造解析",
        "title_en": "Molecular Structure Analysis of Food Components by Synchrotron Infrared Spectroscopy",
        "authors": "Tanaka, M., Saito, E.",
        "year": 2023,
        "field": "食品科学 (Food Science)",
        "method": "赤外分光 (Infrared Spectroscopy)",
        "beamline": "BL43IR",
        "application": "食品産業 (Food Industry)",
        "main_conclusion": "発酵食品中のタンパク質構造変化と風味の相関を解明",
        "industrial_application": "機能性食品開発、発酵プロセス最適化",
        "cross_domain": "栄養学、微生物学への応用",
        "failed_approach": "通常の赤外分光では微量成分の検出が困難だった",
        "form_data": None,
        "related_papers": [],
    },
]


async def seed():
    client = AsyncIOMotorClient(MONGODB_URL)
    db = client[DB_NAME]
    collection = db.papers

    existing = await collection.count_documents({})
    if existing > 0:
        print(f"Database already has {existing} papers. Skipping seed.")
        client.close()
        return

    now = datetime.now(timezone.utc)
    for paper in SAMPLE_PAPERS:
        paper["created_at"] = now
        paper["updated_at"] = now

    result = await collection.insert_many(SAMPLE_PAPERS)
    print(f"✅ Inserted {len(result.inserted_ids)} sample papers into '{DB_NAME}'")
    client.close()


if __name__ == "__main__":
    asyncio.run(seed())