module.exports = {

"[project]/src/components/ui/InquiryButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InquiryButton": (()=>InquiryButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client"; // This marks the component as a Client Component
;
;
const InquiryButton = ({ puppyName, puppyStatus })=>{
    const isSoldOrReserved = puppyStatus === 'Sold' || puppyStatus === 'Reserved';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/contact?subject=Inquiry about ${puppyName}`,
        className: `w-full text-center text-white font-bold text-xl py-4 px-8 rounded-md transition duration-300 block ${isSoldOrReserved ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`,
        // Prevents clicking if the puppy is not available
        onClick: (e)=>{
            if (isSoldOrReserved) {
                e.preventDefault();
            }
        },
        children: isSoldOrReserved ? puppyStatus.toUpperCase() : 'SEND INQUIRY'
    }, void 0, false, {
        fileName: "[project]/src/components/ui/InquiryButton.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
}}),

};

//# sourceMappingURL=src_components_ui_InquiryButton_tsx_af84504e._.js.map