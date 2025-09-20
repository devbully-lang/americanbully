module.exports = {

"[project]/src/components/sections/Hero.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Hero": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// --- Slideshow Images ---
const heroImages = [
    '/images/hero/baby.png',
    '/images/hero/pup.png',
    '/images/hero/adult.png'
];
const Hero = ()=>{
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setCurrentImageIndex((prevIndex)=>(prevIndex + 1) % heroImages.length);
        }, 5000);
        return ()=>clearTimeout(timer);
    }, [
        currentImageIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-screen text-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 2
                    },
                    className: "absolute inset-0 z-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: heroImages[currentImageIndex],
                        alt: `Hero background slide ${currentImageIndex + 1}`,
                        fill: true,
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, currentImageIndex, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 z-10"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex flex-col items-center justify-center h-full text-center px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.5
                        },
                        className: "text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight",
                        style: {
                            textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
                        },
                        children: "WELCOME TO 601 BULLIES LLC"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.8
                        },
                        className: "mt-4 text-lg md:text-xl font-light max-w-2xl",
                        style: {
                            textShadow: '1px 1px 4px rgba(0,0,0,0.6)'
                        },
                        children: "Built Strong. Raised Right."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7,
                            delay: 1.1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/puppies",
                            className: "inline-block mt-8 bg-green-600 text-white font-bold py-3 px-8 text-lg rounded-full shadow-xl hover:bg-green-700 transition duration-300",
                            children: "View Our Puppies"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/lib/reviewsData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// lib/reviewsData.ts
__turbopack_context__.s({
    "reviewsData": (()=>reviewsData)
});
const reviewsData = [
    {
        id: 31,
        author: 'Samuel Baker',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Samuel Baker',
        rating: 5,
        platform: 'Google',
        date: '2025-09-18T10:00:00Z',
        content: 'Our puppy is a bundle of joy and has clearly been well-socialized. He got along with our older dog from day one. Fantastic breeder.'
    },
    {
        id: 1,
        author: 'Michael Thompson',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Michael Thompson',
        rating: 5,
        platform: 'Google',
        date: '2025-09-15T08:30:00Z',
        content: 'An absolutely seamless experience from start to finish. The team at 601 Bullies are true professionals. Our puppy, Zeus, is healthy, happy, and has the best temperament. You can tell these dogs are raised with love.'
    },
    {
        id: 34,
        author: 'Lauren Cook',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Lauren Cook',
        rating: 5,
        platform: 'Google',
        date: '2025-09-14T11:00:00Z',
        content: 'The entire experience felt very personal and not transactional at all. They really take the time to get to know you and make sure the puppy is going to a good home.'
    },
    {
        id: 35,
        author: 'Henry Morris',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Henry Morris',
        rating: 5,
        platform: 'Trustpilot',
        date: '2025-09-13T09:45:00Z',
        content: 'Our vet commented on the exceptional quality of our pup\'s bone structure and overall health. A testament to a great breeding program.',
        verified: true
    },
    {
        id: 2,
        author: 'Jessica Chen',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Jessica Chen',
        rating: 5,
        platform: 'Trustpilot',
        date: '2025-09-12T14:00:00Z',
        content: 'We were nervous about buying a puppy online, but 601 Bullies made us feel comfortable every step of the way. Constant updates, photos, and they answered all our questions. Our little Athena is a dream come true. Highly recommended!',
        verified: true
    },
    {
        id: 36,
        author: 'Angela Peterson',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Angela Peterson',
        rating: 5,
        platform: 'Google',
        date: '2025-09-11T20:00:00Z',
        content: 'The weekly video updates of our puppy were the highlight of our month! It was amazing to watch him grow before he came home.'
    },
    {
        id: 3,
        author: 'The Rodriguez Family',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=The Rodriguez Family',
        rating: 5,
        platform: 'Google',
        date: '2025-09-10T11:20:00Z',
        content: 'The quality of these American Bullies is second to none. Our vet was incredibly impressed with the puppy\'s health records and structure. A trustworthy breeder that genuinely cares about their dogs.'
    },
    {
        id: 37,
        author: 'Patrick Murphy',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Patrick Murphy',
        rating: 4,
        platform: 'Trustpilot',
        date: '2025-09-09T17:10:00Z',
        content: 'The dog is an absolute superstar, couldn\'t be happier with him. The only reason for 4 stars is that the delivery, which was scheduled for the morning, was delayed until late in the evening on the same day. The delivery driver kept in touch, so it wasn\'t a huge issue, just made for a long day of waiting. The pup arrived safe and happy.',
        verified: true
    },
    {
        id: 4,
        author: 'David Lee',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=David Lee',
        rating: 5,
        platform: 'Trustpilot',
        date: '2025-09-08T18:45:00Z',
        content: 'Top-tier service and exceptional dogs. The entire process was transparent and professional. Our boy is a perfect example of the breed.',
        verified: true
    },
    {
        id: 38,
        author: 'Katherine Bailey',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Katherine Bailey',
        rating: 5,
        platform: 'Google',
        date: '2025-09-07T13:00:00Z',
        content: 'A truly professional and ethical breeder. The health guarantee they provide is comprehensive and shows they stand behind their dogs 100%.'
    },
    {
        id: 39,
        author: 'Dennis Rivera',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Dennis Rivera',
        rating: 5,
        platform: 'Google',
        date: '2025-09-06T10:20:00Z',
        content: 'Our puppy is so intelligent! He learned basic commands within a week. Clearly comes from a great line of smart, trainable dogs.'
    },
    {
        id: 5,
        author: 'Emily White',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Emily White',
        rating: 5,
        platform: 'Google',
        date: '2025-09-05T09:00:00Z',
        content: 'We are so in love with our new family member. Thank you, 601 Bullies, for your dedication and for breeding such wonderful, well-socialized puppies.'
    },
    {
        id: 40,
        author: 'Janet Cooper',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Janet Cooper',
        rating: 5,
        platform: 'Trustpilot',
        date: '2025-09-04T16:50:00Z',
        content: 'The level of care and cleanliness at their facility (which they showed us via video call) was impressive. It’s clear the dogs are raised in a wonderful environment.',
        verified: true
    },
    {
        id: 41,
        author: 'Walter Richardson',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Walter Richardson',
        rating: 3,
        platform: 'Google',
        date: '2025-09-03T19:00:00Z',
        content: 'We had a lot of questions about the American Bully breed, and they answered every single one with patience and expertise. Great resource for new owners.'
    },
    {
        id: 21,
        author: 'Chris Evans',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Chris Evans',
        rating: 4,
        platform: 'Google',
        date: '2025-09-02T16:00:00Z',
        content: 'The puppy is amazing, absolutely perfect and healthy. My only issue was that communication was a bit slow at times; sometimes it took a day or two to get a response. I understand they are very busy, and in the end, everything worked out great. The quality of the dog is undeniable.'
    },
    {
        id: 42,
        author: 'Heather Cox',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Heather Cox',
        rating: 5,
        platform: 'Google',
        date: '2025-09-01T12:00:00Z',
        content: 'Our beautiful girl has brought so much love and laughter into our home. The entire process with 601 Bullies was a pleasure.'
    },
    {
        id: 22,
        author: 'Megan Turner',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Megan Turner',
        rating: 4,
        platform: 'Trustpilot',
        date: '2025-08-30T19:20:00Z',
        content: 'We love our new girl, she\'s beautiful. The shipping took a little longer than we initially expected. It was scheduled for a Tuesday but she ended up arriving Wednesday evening. The team was apologetic and kept us updated, and she arrived safely, which is all that matters.',
        verified: true
    },
    {
        id: 43,
        author: 'Terry Howard',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Terry Howard',
        rating: 5,
        platform: 'Trustpilot',
        date: '2025-08-29T21:30:00Z',
        content: 'From the pedigree to the personality, everything about our puppy is top-notch. You get what you pay for, and this was worth every penny.',
        verified: true
    },
    {
        id: 6,
        author: 'Brian Green',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Brian Green',
        rating: 5,
        platform: 'Google',
        date: '2025-08-28T12:10:00Z',
        content: 'The health guarantee and support they offer gave us peace of mind. A fantastic breeder that stands behind their program.'
    },
    {
        id: 44,
        author: 'Brenda Ward',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Brenda Ward',
        rating: 4,
        platform: 'Google',
        date: '2025-08-27T15:45:00Z',
        content: 'The puppy is perfect and the service was great overall. I just had to follow up once to get the tracking information for the shipping, as it wasn\'t sent automatically when I expected. A minor detail in an otherwise excellent process. The pup arrived safely and on the scheduled day.'
    },
    {
        id: 45,
        author: 'Adam Torres',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Adam Torres',
        rating: 5,
        platform: 'Google',
        date: '2025-08-26T10:00:00Z',
        content: 'The temperament of our pup is just incredible. So calm and loving. It\'s a testament to their careful breeding and early socialization.'
    },
    {
        id: 7,
        author: 'Sophia Martinez',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sophia Martinez',
        rating: 5,
        platform: 'Trustpilot',
        date: '2025-08-25T16:30:00Z',
        content: 'The shipping process was straightforward, and our puppy arrived safe and sound. The communication was excellent throughout.',
        verified: true
    },
    {
        id: 46,
        author: 'Carlos Gomez',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Carlos Gomez',
        rating: 3.5,
        platform: 'Google',
        date: '2025-08-24T18:00:00Z',
        content: 'The puppy himself is a 5-star dog, no question. He\'s healthy and has a wonderful personality. However, the process was quite frustrating. We were given conflicting information about the pickup date from two different people, which caused us to reschedule our plans twice. It felt a bit disorganized. While we are ultimately happy with our dog, the communication process needs significant improvement.'
    },
    {
        id: 47,
        author: 'Russell Coleman',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Russell Coleman',
        rating: 5,
        platform: 'Google',
        date: '2025-08-23T11:50:00Z',
        content: 'Our bully has the most stunning coat and beautiful eyes. A real head-turner! And his personality is just as wonderful.'
    },
    {
        id: 8,
        author: 'Kevin Harris',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Kevin Harris',
        rating: 5,
        platform: 'Google',
        date: '2025-08-22T20:00:00Z',
        content: 'Our bully has the most amazing personality. Gentle with our kids but still has that confident bully look. Exactly what we wanted.'
    },
    {
        id: 48,
        author: 'Jacqueline Gray',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Jacqueline Gray',
        rating: 5,
        platform: 'Google',
        date: '2025-08-21T09:10:00Z',
        content: 'They provided helpful tips on diet and training that have been invaluable for us as first-time bully owners. Great post-adoption support.'
    },
    {
        id: 23,
        author: 'Jordan Phillips',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Jordan Phillips',
        rating: 4,
        platform: 'Google',
        date: '2025-08-20T10:30:00Z',
        content: 'The dog himself is 5 stars. He\'s healthy, well-behaved, and everything we wanted. The initial response to my inquiry took a few days which made me a bit anxious, but once we got talking, the process was smooth. They are clearly in high demand, so a little patience is needed. Worth it in the end.'
    },
    {
        id: 9,
        author: 'Olivia Clark',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Olivia Clark',
        rating: 5,
        platform: 'Google',
        date: '2025-08-19T13:25:00Z',
        content: 'Incredible experience. You can see the passion they have for the breed. Our puppy was already well on his way with potty training when he arrived!'
    },
    {
        id: 49,
        author: 'Carl James',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Carl James',
        rating: 4,
        platform: 'Trustpilot',
        date: '2025-08-18T18:00:00Z',
        content: 'The dog is 10/10 perfect. The only small snag was that the initial video call to see the puppies had to be rescheduled. They were very apologetic and it was quickly sorted out for the next day. Everything after that was flawless. Very happy overall.',
        verified: true
    },
    {
        id: 50,
        author: 'Diana Watson',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Diana Watson',
        rating: 5,
        platform: 'Google',
        date: '2025-07-17T16:00:00Z',
        content: 'An honest and transparent breeder. All health clearances for the parents were provided without us even having to ask. Highly trustworthy.'
    },
    {
        id: 51,
        author: 'Jonathan Brooks',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Jonathan Brooks',
        rating: 5,
        platform: 'Google',
        date: '2025-06-16T12:45:00Z',
        content: 'Our puppy adjusted to our home so quickly. You can tell he was raised in a stable and loving environment from the very beginning.'
    },
    {
        id: 10,
        author: 'James Walker',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=James Walker',
        rating: 5,
        platform: 'Trustpilot',
        date: '2025-05-15T10:55:00Z',
        content: 'If you want a high-quality American Bully from a breeder you can trust, look no further. 601 Bullies is the real deal.',
        verified: true
    },
    {
        id: 52,
        author: 'Sara Kelly',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sara Kelly',
        rating: 5,
        platform: 'Trustpilot',
        date: '2025-04-14T15:00:00Z',
        content: 'The entire litter of puppies looked healthy and happy in the videos. It was hard to choose just one! We are thrilled with our choice.',
        verified: true
    },
    {
        id: 53,
        author: 'Alice Johnson',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Alice Johnson',
        rating: 3.5,
        platform: 'Trustpilot',
        date: '2025-03-13T14:00:00Z',
        content: 'Let me be clear: the puppy is wonderful and we love her. But the process was a headache. The shipping was delayed twice, pushing delivery back by almost 3 days. We were also sent the wrong brand of starter food, which led to some minor stomach upset for the pup. For the price, I expected the logistics to be much smoother. The quality of the dog is the only reason this isn\'t a lower score.',
        verified: true
    },
    {
        id: 11,
        author: 'Chloe Robinson',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Chloe Robinson',
        rating: 5,
        platform: 'Google',
        date: '2025-02-11T19:15:00Z',
        content: 'The most beautiful puppy I have ever seen. The pictures didn\'t do her justice. Healthy, active, and so smart!'
    },
    {
        id: 54,
        author: 'Christina Price',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Christina Price',
        rating: 5,
        platform: 'Google',
        date: '2025-01-12T08:00:00Z',
        content: 'We are so grateful for the care and effort they put into their dogs. It truly shows in the quality and temperament of our puppy.'
    },
    {
        id: 55,
        author: 'Aaron Bennett',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Aaron Bennett',
        rating: 4,
        platform: 'Trustpilot',
        date: '2024-12-10T19:20:00Z',
        content: 'The dog is fantastic, a truly beautiful animal. The shipping company they used was professional, but they gave us a 4-hour delivery window and arrived right at the end of it, which made for a bit of a long wait. Not the breeder\'s fault directly, and the main thing is he arrived safely.',
        verified: true
    },
    {
        id: 12,
        author: 'Thomas Allen',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Thomas Allen',
        rating: 5,
        platform: 'Google',
        date: '2024-11-07T14:40:00Z',
        content: 'Professionalism at its best. They provided all the paperwork, vet records, and a puppy starter pack. Made the whole process easy.'
    },
    {
        id: 56,
        author: 'Rebecca Wood',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Rebecca Wood',
        rating: 5,
        platform: 'Google',
        date: '2024-10-09T14:00:00Z',
        content: 'They have a real passion for the American Bully breed and it shines through in everything they do. I wouldn\'t go anywhere else.'
    },
    {
        id: 57,
        author: 'Jose Perry',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Jose Perry',
        rating: 5,
        platform: 'Google',
        date: '2024-09-08T11:15:00Z',
        content: 'Our puppy has a clean bill of health from our vet and a heart of gold. The perfect combination. Thank you 601 Bullies!'
    },
    {
        id: 13,
        author: 'Grace Hall',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Grace Hall',
        rating: 5,
        platform: 'Trustpilot',
        date: '2024-08-02T11:00:00Z',
        content: 'The payment plan option was a huge help for our family. It made getting our dream dog possible. Thank you for being so accommodating!',
        verified: true
    },
    {
        id: 58,
        author: 'Shirley Hughes',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Shirley Hughes',
        rating: 5,
        platform: 'Trustpilot',
        date: '2024-07-06T17:00:00Z',
        content: 'The process of reserving our puppy and making payments was simple and secure. Very professional from a business standpoint.',
        verified: true
    },
    {
        id: 24,
        author: 'Victoria Adams',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Victoria Adams',
        rating: 4,
        platform: 'Google',
        date: '2024-06-05T22:00:00Z',
        content: 'Fantastic puppy, really top quality. The only reason for 4 stars instead of 5 is that the final travel crate was different from the one shown in the prep photos, which caused a minor confusion at pickup. Not a big deal at all, and the puppy was safe and happy. Just a small detail.'
    },
    {
        id: 59,
        author: 'Scott Washington',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Scott Washington',
        rating: 5,
        platform: 'Google',
        date: '2024-05-04T13:30:00Z',
        content: 'Our pup is confident, curious, and incredibly loving. He has been a joy to train. A testament to his great start in life.'
    },
    {
        id: 60,
        author: 'Laura Simmons',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Laura Simmons',
        rating: 5,
        platform: 'Google',
        date: '2024-04-03T09:45:00Z',
        content: 'We were looking for a bully with a specific look and temperament, and they matched us with the perfect puppy. They really listen to what you\'re looking for.'
    },
    {
        id: 61,
        author: 'Steven Foster',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Steven Foster',
        rating: 4,
        platform: 'Trustpilot',
        date: '2024-03-01T18:50:00Z',
        content: 'Our puppy is a gem and we are so happy. The response to my final payment confirmation email was delayed by a day, which caused a little stress, but they were very busy with a new litter. They apologized and confirmed everything was set for shipping, which went smoothly. A small communication blip in a great experience.',
        verified: true
    },
    {
        id: 62,
        author: 'Maria Gonzales',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Maria Gonzales',
        rating: 5,
        platform: 'Google',
        date: '2024-02-28T12:00:00Z',
        content: 'They raise incredible dogs. Period. The quality is evident in every way. We are thrilled to be part of the 601 Bullies family.'
    },
    {
        id: 14,
        author: 'Daniel Young',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Daniel Young',
        rating: 5,
        platform: 'Google',
        date: '2024-01-29T17:20:00Z',
        content: 'Our bully is the star of the neighborhood. Everyone comments on his stunning looks and friendly nature. We couldn\'t be happier.'
    },
    {
        id: 63,
        author: 'Paul Bryant',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Paul Bryant',
        rating: 5,
        platform: 'Google',
        date: '2023-12-20T10:00:00Z',
        content: 'Our puppy gets along wonderfully with our cats and children. He has such a gentle and patient nature. Couldn\'t ask for a better fit for our family.'
    },
    {
        id: 64,
        author: 'Kevin Mitchell',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Kevin Mitchell',
        rating: 3.5,
        platform: 'Google',
        date: '2023-11-18T18:30:00Z',
        content: 'The dog is great, very healthy and happy. The administrative side of things was a real struggle, though. The registration paperwork had the wrong birthdate, and it took over a month and three follow-up emails to get the corrected documents sent to us. It was a frustrating process that overshadowed an otherwise good experience. Love the dog, but the paperwork headache was significant.'
    },
    {
        id: 15,
        author: 'Zoe King',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Zoe King',
        rating: 5,
        platform: 'Google',
        date: '2023-10-25T09:30:00Z',
        content: 'The health and structure of these dogs are phenomenal. A breeder who truly prioritizes the well-being of their animals.'
    },
    {
        id: 65,
        author: 'Joshua Jenkins',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Joshua Jenkins',
        rating: 5,
        platform: 'Google',
        date: '2023-09-27T19:00:00Z',
        content: 'The entire journey, from first contact to puppy pickup, was a five-star experience. True professionals who love what they do.'
    },
    {
        id: 16,
        author: 'Matthew Wright',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Matthew Wright',
        rating: 5,
        platform: 'Trustpilot',
        date: '2023-08-21T21:00:00Z',
        content: 'I was kept informed throughout the entire process. The weekly pup-dates were something my whole family looked forward to!',
        verified: true
    },
    {
        id: 66,
        author: 'Amanda Ross',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Amanda Ross',
        rating: 5,
        platform: 'Google',
        date: '2023-07-26T14:10:00Z',
        content: 'We are constantly stopped on walks by people admiring our beautiful dog. His structure and coloring are just perfect.'
    },
    {
        id: 67,
        author: 'Jason Powell',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Jason Powell',
        rating: 4,
        platform: 'Trustpilot',
        date: '2023-06-24T11:30:00Z',
        content: 'The puppy is absolutely flawless and has settled in so well. The only minor issue was that shipping, which was planned for Friday, got pushed to Saturday morning due to a flight scheduling issue with the pet carrier. The breeder was communicative about it, but it did change our weekend plans. He arrived safe and sound, which is the main thing.',
        verified: true
    },
    {
        id: 17,
        author: 'Lily Scott',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Lily Scott',
        rating: 5,
        platform: 'Google',
        date: '2023-05-18T12:00:00Z',
        content: 'Absolutely worth the wait. Our puppy is everything we hoped for and more. A perfect addition to our family.'
    },
    {
        id: 68,
        author: 'Michelle Long',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Michelle Long',
        rating: 5,
        platform: 'Google',
        date: '2023-04-23T09:00:00Z',
        content: 'The advice they gave on socializing our puppy was spot on. He is confident and friendly with new people and dogs. A great foundation.'
    },
    {
        id: 25,
        author: 'Ben Campbell',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ben Campbell',
        rating: 4,
        platform: 'Trustpilot',
        date: '2023-03-15T13:00:00Z',
        content: 'The entire experience was very positive, and the dog is perfect. The only small issue was a delay in receiving the official ABKC paperwork by mail; it arrived about two weeks after the puppy. They were responsive when I followed up. I would still recommend them to anyone.',
        verified: true
    },
    {
        id: 18,
        author: 'Andrew Nelson',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Andrew Nelson',
        rating: 5,
        platform: 'Google',
        date: '2023-02-14T15:10:00Z',
        content: 'The knowledge and expertise of the 601 Bullies team is impressive. They were able to answer all my questions about the breed and care.'
    },
    {
        id: 69,
        author: 'Gary Patterson',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Gary Patterson',
        rating: 5,
        platform: 'Google',
        date: '2023-01-22T15:00:00Z',
        content: 'They delivered exactly what they promised: a healthy, beautiful, well-tempered American Bully. We are extremely satisfied customers.'
    },
    {
        id: 70,
        author: 'Sandra Hughes',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sandra Hughes',
        rating: 5,
        platform: 'Trustpilot',
        date: '2022-12-20T17:45:00Z',
        content: 'I was impressed by their commitment to the breed standard while prioritizing health and temperament above all else. A truly responsible breeder.',
        verified: true
    },
    {
        id: 19,
        author: 'Ella Carter',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ella Carter',
        rating: 5,
        platform: 'Trustpilot',
        date: '2022-11-10T18:45:00Z',
        content: 'Our puppy arrived clean, healthy, and happy. The shipping was handled very professionally. A very positive experience.',
        verified: true
    },
    {
        id: 71,
        author: 'Mark Russell',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Mark Russell',
        rating: 5,
        platform: 'Google',
        date: '2022-10-19T10:20:00Z',
        content: 'Our family is complete now, thanks to our wonderful pup from 601 Bullies. The joy he brings is immeasurable. Worth every bit of the investment.'
    },
    {
        id: 26,
        author: 'Hannah Perez',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Hannah Perez',
        rating: 5,
        platform: 'Google',
        date: '2022-09-08T16:45:00Z',
        content: 'The best of the best. From the moment we inquired, we were treated like family. The care and attention to detail is unmatched.'
    },
    {
        id: 72,
        author: 'Elizabeth Griffin',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Elizabeth Griffin',
        rating: 4,
        platform: 'Google',
        date: '2022-08-17T12:00:00Z',
        content: 'We adore our puppy! She is healthy and has a great personality. The communication was a little slow in the beginning, likely due to how busy they are. Once we put our deposit down, the updates were much more frequent. Overall, we are very happy and would recommend them.'
    },
    {
        id: 27,
        author: 'Joshua Edwards',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Joshua Edwards',
        rating: 5,
        platform: 'Trustpilot',
        date: '2022-07-01T11:30:00Z',
        content: 'An investment in quality. Our vet continues to be impressed by our pup\'s health and structure at every check-up. 601 Bullies sets the standard.',
        verified: true
    },
    {
        id: 73,
        author: 'George Butler',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=George Butler',
        rating: 5,
        platform: 'Trustpilot',
        date: '2022-05-16T09:30:00Z',
        content: 'The whole process was a class act. From the detailed information on their website to the final handover, everything was handled with professionalism.',
        verified: true
    },
    {
        id: 20,
        author: 'Ryan Mitchell',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ryan Mitchell',
        rating: 5,
        platform: 'Google',
        date: '2022-04-05T10:00:00Z',
        content: 'The best decision we ever made. Our bully has brought so much joy into our home. Thank you 601 Bullies!'
    },
    {
        id: 28,
        author: 'Ashley Collins',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ashley Collins',
        rating: 5,
        platform: 'Google',
        date: '2021-11-28T09:00:00Z',
        content: 'They patiently answered my million questions and made sure I was ready for a bully. The post-adoption support has been amazing too.'
    },
    {
        id: 74,
        author: 'Susan Henderson',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Susan Henderson',
        rating: 5,
        platform: 'Google',
        date: '2021-07-13T14:00:00Z',
        content: 'They breed for temperament, and it shows. Our bully is the sweetest, most gentle dog we\'ve ever owned. He\'s amazing with our grandchildren.'
    },
    {
        id: 29,
        author: 'Justin Stewart',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Justin Stewart',
        rating: 5,
        platform: 'Google',
        date: '2021-02-22T14:50:00Z',
        content: 'Our puppy has the most loving and goofy personality. He fits into our active lifestyle perfectly. Couldn\'t have asked for a better dog.'
    },
    {
        id: 75,
        author: 'Larry Bell',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Larry Bell',
        rating: 5,
        platform: 'Google',
        date: '2020-10-12T16:15:00Z',
        content: 'I\'m a repeat customer, and my second experience was just as fantastic as the first. Consistent quality and service. 601 Bullies is the only breeder I\'ll ever work with.'
    },
    {
        id: 30,
        author: 'Nicole Sanchez',
        avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Nicole Sanchez',
        rating: 5,
        platform: 'Trustpilot',
        date: '2020-09-25T18:00:00Z',
        content: 'The entire experience exceeded our expectations. Professional, honest, and they breed incredible dogs. We will be back for our next one!',
        verified: true
    }
];
}}),
"[project]/src/components/sections/Testimonials.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Testimonials": (()=>Testimonials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reviewsData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/reviewsData.ts [app-ssr] (ecmascript)"); // Using your main reviews data
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2d$half$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StarHalf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star-half.js [app-ssr] (ecmascript) <export default as StarHalf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
// Import Swiper React components and styles
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript) <export default as Pagination>");
"use client";
;
;
;
;
;
;
;
;
;
// --- Reusable Star Rating Component (handles half-stars) ---
const StarRating = ({ rating })=>{
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center",
        children: [
            ...Array(5)
        ].map((_, i)=>{
            if (i < fullStars) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: "w-5 h-5 text-yellow-400",
                    fill: "currentColor"
                }, i, false, {
                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                    lineNumber: 24,
                    columnNumber: 28
                }, this);
            }
            if (i === fullStars && hasHalfStar) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2d$half$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StarHalf$3e$__["StarHalf"], {
                    className: "w-5 h-5 text-yellow-400",
                    fill: "currentColor"
                }, i, false, {
                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                    lineNumber: 27,
                    columnNumber: 28
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                className: "w-5 h-5 text-gray-600",
                fill: "currentColor"
            }, i, false, {
                fileName: "[project]/src/components/sections/Testimonials.tsx",
                lineNumber: 29,
                columnNumber: 24
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Testimonials.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
};
// --- Platform Icons ---
const GoogleIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-6 w-6",
        viewBox: "0 0 48 48",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#fbc02d",
                d: "M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Testimonials.tsx",
                lineNumber: 36,
                columnNumber: 106
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#e53935",
                d: "M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Testimonials.tsx",
                lineNumber: 36,
                columnNumber: 393
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#4caf50",
                d: "M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.618-3.354-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Testimonials.tsx",
                lineNumber: 36,
                columnNumber: 587
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#1565c0",
                d: "M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C44.434 36.338 48 30.656 48 24c0-1.341-.138-2.65-.389-3.917z"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Testimonials.tsx",
                lineNumber: 36,
                columnNumber: 777
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Testimonials.tsx",
        lineNumber: 36,
        columnNumber: 26
    }, this);
const TrustpilotIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-6 w-6",
        viewBox: "0 0 24 24",
        fill: "#00b67a",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2.5l-2.5 5h-5.5l4.5 3.5-1.5 5.5 4-3.5 4 3.5-1.5-5.5 4.5-3.5h-5.5z"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Testimonials.tsx",
            lineNumber: 37,
            columnNumber: 125
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Testimonials.tsx",
        lineNumber: 37,
        columnNumber: 30
    }, this);
const Testimonials = ()=>{
    // ✅ Sort reviews by date and get the 7 most recent
    const recentReviews = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$reviewsData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reviewsData"]
    ].sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 7);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 text-white",
        style: {
            background: 'linear-gradient(180deg, rgb(var(--secondary)) 0%, #0a0a0a 100%)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl lg:text-5xl font-bold mb-4",
                            children: "What Our Families Say"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg opacity-80 max-w-2xl mx-auto",
                            children: "Real stories from families who have welcomed a 601 Bully into their homes."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                    ],
                    spaceBetween: 30,
                    slidesPerView: 1,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        clickable: true,
                        dynamicBullets: true
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        }
                    },
                    className: "pb-12" // Add padding-bottom for pagination bullets
                    ,
                    children: recentReviews.map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            className: "h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "bg-white/5 border border-white/10 rounded-xl p-8 h-full flex flex-col justify-between backdrop-blur-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                        className: "mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg opacity-90 italic line-clamp-5",
                                            children: [
                                                '"',
                                                review.content,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                            lineNumber: 86,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 85,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                        className: "flex items-center gap-4 border-t border-white/10 pt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: review.avatar,
                                                alt: review.author,
                                                width: 48,
                                                height: 48,
                                                className: "rounded-full border-2 border-primary/50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                lineNumber: 89,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-grow",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-lg text-white",
                                                        children: review.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRating, {
                                                        rating: review.rating
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                lineNumber: 96,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: review.platform === 'Google' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GoogleIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 61
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustpilotIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 78
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                lineNumber: 100,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 88,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this)
                        }, review.id, false, {
                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/testimonials" // <-- Make sure this path is correct!
                        ,
                        className: "inline-flex items-center group text-white font-bold py-3 px-8 rounded-lg border-2 border-white/50 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-secondary shadow-lg",
                        children: [
                            "Read All 75+ Reviews",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                lineNumber: 116,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Testimonials.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Testimonials.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/sections/KnowYourPup.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KnowYourPup": (()=>KnowYourPup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const KnowYourPup = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold text-gray-800",
                            children: "Discover the American Bully"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/KnowYourPup.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-600 mt-2",
                            children: "An educated owner is the best owner."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/KnowYourPup.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/KnowYourPup.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    transition: {
                        duration: 0.7
                    },
                    className: "bg-white p-4 sm:p-8 rounded-lg shadow-xl border border-black/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/know-your-pup-infographic.svg",
                        alt: "American Bullies Infographic",
                        width: 2048,
                        height: 2048,
                        className: "w-full h-auto rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/KnowYourPup.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/KnowYourPup.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: true,
                        amount: 0.5
                    },
                    transition: {
                        duration: 1.0
                    },
                    className: "mt-12 text-center text-lg text-gray-700 prose lg:prose-xl max-w-4xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: `This chart provides a wonderful overview of the American Bully breed, covering key traits, history, and care. We encourage all potential families to familiarize themselves with this information to ensure a happy and healthy life for their new companion.`
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/KnowYourPup.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/KnowYourPup.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/KnowYourPup.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/KnowYourPup.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
}}),

};

//# sourceMappingURL=src_36d3458e._.js.map