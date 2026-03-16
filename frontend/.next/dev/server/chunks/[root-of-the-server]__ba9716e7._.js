module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/research-live/frontend/pages/api/analyze-pdf.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$anthropic$2d$ai$2f$sdk__$5b$external$5d$__$2840$anthropic$2d$ai$2f$sdk$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$29$__ = __turbopack_context__.i("[externals]/@anthropic-ai/sdk [external] (@anthropic-ai/sdk, esm_import, [project]/Desktop/research-live/frontend/node_modules/@anthropic-ai/sdk)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$anthropic$2d$ai$2f$sdk__$5b$external$5d$__$2840$anthropic$2d$ai$2f$sdk$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$anthropic$2d$ai$2f$sdk__$5b$external$5d$__$2840$anthropic$2d$ai$2f$sdk$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb'
        }
    }
};
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    const anthropic = new __TURBOPACK__imported__module__$5b$externals$5d2f40$anthropic$2d$ai$2f$sdk__$5b$external$5d$__$2840$anthropic$2d$ai$2f$sdk$2c$__esm_import$2c$__$5b$project$5d2f$Desktop$2f$research$2d$live$2f$frontend$2f$node_modules$2f40$anthropic$2d$ai$2f$sdk$29$__["default"]({
        apiKey: process.env.ANTHROPIC_API_KEY
    });
    try {
        const { base64Data } = req.body;
        console.log('Analyzing PDF...');
        const message = await anthropic.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 4000,
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "document",
                            source: {
                                type: "base64",
                                media_type: "application/pdf",
                                data: base64Data
                            }
                        },
                        {
                            type: "text",
                            text: `この研究論文を詳しく分析し、以下の質問に日本語で回答してください。

回答はJSON形式で返してください。マークダウンのバッククォート(\`\`\`json)は使わず、純粋なJSONのみを返してください。

{
  "mainConclusion": "この研究で明らかになった最も重要な発見を1-2文で記述",
  "priorWork": "この研究が基づいている3-5つの重要な先行研究を改行区切りで列挙",
  "novelty": "この研究の独自の貢献と新規性を詳しく説明",
  "unknownQuestions": "この研究では答えられなかった2-3の具体的な疑問を改行区切りで",
  "failedApproach": "うまくいかなかった手法とその理由",
  "crossDomain": "他分野での類似問題や応用可能性を詳しく",
  "industrialPain": "この研究が解決できる具体的な産業課題",
  "abstractPrinciple": "小学5年生でも理解できるように簡単に説明",
  "experimentalReason": "なぜこのパラメータ・手法を選んだのか",
  "scalingPossibility": "この技術は異なるスケールで機能するか",
  "combinationPotential": "他の技術と組み合わせる可能性"
}

重要: 回答は必ず上記のJSON形式で、\`\`\`jsonや\`\`\`などのマークダウン記号なしで返してください。`
                        }
                    ]
                }
            ]
        });
        const text = message.content.find((item)=>item.type === "text")?.text || "";
        if (!text) {
            throw new Error('No text response from API');
        }
        const cleanText = text.trim().replace(/```json\n?/g, "").replace(/```\n?/g, "");
        const parsedData = JSON.parse(cleanText);
        console.log('Analysis complete!');
        res.status(200).json(parsedData);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({
            error: error.message,
            details: 'PDF analysis failed. Please try again.'
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ba9716e7._.js.map