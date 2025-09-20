"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { reviewsData, Review } from '@/lib/reviewsData'; // Make sure this path is correct
// ✅ FIX 1: Removed unused 'ChevronDown' import
import { Star, StarHalf, CheckCircle, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

// --- Reusable Star Rating Component (handles half-stars) ---
const StarRating = ({ rating, className = '' }: { rating: number; className?: string }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className={`flex items-center ${className}`}>
            {[...Array(5)].map((_, i) => {
                if (i < fullStars) {
                    return <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />;
                }
                if (i === fullStars && hasHalfStar) {
                    return <StarHalf key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />;
                }
                return <Star key={i} className="w-5 h-5 text-gray-300" fill="currentColor" />;
            })}
        </div>
    );
};


// --- Google & Trustpilot Icons ---
const GoogleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 48 48"><path fill="#fbc02d" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#e53935" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.618-3.354-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1565c0" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C44.434 36.338 48 30.656 48 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>;
const TrustpilotIcon = () => (
    <div className="flex items-center gap-1.5">
        <svg xmlns="http://www.w.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2.5l-2.5 5h-5.5l4.5 3.5-1.5 5.5 4-3.5 4 3.5-1.5-5.5 4.5-3.5h-5.5z"/></svg>
        <span className="font-bold text-lg text-gray-700">Trustpilot</span>
    </div>
);


// --- Summary Cards for Google & Trustpilot ---
const SummaryCard = ({ platform, rating, reviewCount }: { platform: 'Google' | 'Trustpilot'; rating: number; reviewCount: number }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-3">
            {platform === 'Google' ? <GoogleIcon /> : <TrustpilotIcon />}
             {platform === 'Google' && <span className="text-xl font-bold text-slate-800">Google</span>}
        </div>
        <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-slate-900">{rating.toFixed(1)}</span>
            <div className="flex flex-col items-start">
                <StarRating rating={rating} />
                <p className="text-sm text-slate-500">Based on {reviewCount} reviews</p>
            </div>
        </div>
    </div>
);

// --- Individual Review Card ---
const ReviewCard = ({ review }: { review: Review }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-shadow hover:shadow-lg"
    >
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
                <Image src={review.avatar} alt={review.author} width={48} height={48} className="rounded-full" />
                <div>
                    <p className="font-bold text-slate-800">{review.author}</p>
                    <p className="text-sm text-slate-500">
                        {formatDistanceToNow(new Date(review.date), { addSuffix: true })}
                    </p>
                </div>
            </div>
            {review.platform === 'Google' ? <GoogleIcon /> : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2.5l-2.5 5h-5.5l4.5 3.5-1.5 5.5 4-3.5 4 3.5-1.5-5.5 4.5-3.5h-5.5z"/></svg>}
        </div>
        <StarRating rating={review.rating} />
        <p className="text-slate-600 mt-4 leading-relaxed">{review.content}</p>
        {review.platform === 'Trustpilot' && review.verified && (
            <div className="flex items-center gap-1.5 mt-4 text-green-600">
                <CheckCircle size={16} />
                <span className="text-sm font-semibold">Verified</span>
            </div>
        )}
    </motion.div>
);

// Dynamically get all unique years from the data for the year filter
const availableYears = [...new Set(reviewsData.map(r => new Date(r.date).getFullYear()))].sort((a, b) => b - a);

// ✅ FIX 2: Defined specific types for component props to replace 'any'
type FilterState = {
    rating: number | 'all' | 'below-4';
    platform: 'all' | 'Google' | 'Trustpilot';
    sort: 'newest' | 'oldest' | 'highest' | 'lowest';
    year: 'all' | number;
};

type MobileFilterDrawerProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
};

const MobileFilterDrawer = ({ isOpen, setIsOpen, filters, setFilters }: MobileFilterDrawerProps) => {
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    const handleClear = () => {
        setFilters({
            rating: 'all',
            platform: 'all',
            year: 'all',
            sort: 'newest',
        });
        setIsOpen(false);
    }
    
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed bottom-0 left-0 right-0 h-[80vh] bg-slate-50 rounded-t-2xl p-6 flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold">Filter & Sort</h3>
                            <button onClick={() => setIsOpen(false)}><X size={24} /></button>
                        </div>
                        
                        <div className="flex-grow overflow-y-auto space-y-6">
                            {/* Sort By */}
                            <div>
                                <h4 className="font-semibold mb-3">Sort by</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {(['newest', 'oldest', 'highest', 'lowest'] as const).map(sort => (
                                        <button key={sort} onClick={() => setFilters({...filters, sort})} className={`p-3 text-sm rounded-lg capitalize text-left ${filters.sort === sort ? 'bg-primary text-white' : 'bg-white border'}`}>{sort}</button>
                                    ))}
                                </div>
                            </div>
                            {/* Rating */}
                             <div>
                                <h4 className="font-semibold mb-3">Rating</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <button onClick={() => setFilters({...filters, rating: 'all'})} className={`p-3 text-sm rounded-lg ${filters.rating === 'all' ? 'bg-primary text-white' : 'bg-white border'}`}>All Ratings</button>
                                    <button onClick={() => setFilters({...filters, rating: 5})} className={`p-3 text-sm rounded-lg flex items-center gap-1 ${filters.rating === 5 ? 'bg-primary text-white' : 'bg-white border'}`}>5 Stars</button>
                                    <button onClick={() => setFilters({...filters, rating: 4})} className={`p-3 text-sm rounded-lg flex items-center gap-1 ${filters.rating === 4 ? 'bg-primary text-white' : 'bg-white border'}`}>4 Stars</button>
                                    <button onClick={() => setFilters({...filters, rating: 'below-4'})} className={`p-3 text-sm rounded-lg ${filters.rating === 'below-4' ? 'bg-yellow-500 text-white' : 'bg-white border'}`}>3 & Below</button>
                                </div>
                            </div>
                             {/* Platform */}
                            <div>
                                <h4 className="font-semibold mb-3">Platform</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <button onClick={() => setFilters({...filters, platform: 'all'})} className={`p-3 text-sm rounded-lg ${filters.platform === 'all' ? 'bg-primary text-white' : 'bg-white border'}`}>All Platforms</button>
                                    <button onClick={() => setFilters({...filters, platform: 'Google'})} className={`p-3 text-sm rounded-lg ${filters.platform === 'Google' ? 'bg-primary text-white' : 'bg-white border'}`}>Google</button>
                                    <button onClick={() => setFilters({...filters, platform: 'Trustpilot'})} className={`p-3 text-sm rounded-lg ${filters.platform === 'Trustpilot' ? 'bg-primary text-white' : 'bg-white border'}`}>Trustpilot</button>
                                </div>
                            </div>
                             {/* Year */}
                            <div>
                                <h4 className="font-semibold mb-3">Year</h4>
                                <div className="grid grid-cols-3 gap-2">
                                    <button onClick={() => setFilters({...filters, year: 'all'})} className={`p-3 text-sm rounded-lg ${filters.year === 'all' ? 'bg-primary text-white' : 'bg-white border'}`}>All</button>
                                    {availableYears.map(year => (
                                         <button key={year} onClick={() => setFilters({...filters, year})} className={`p-3 text-sm rounded-lg ${filters.year === year ? 'bg-primary text-white' : 'bg-white border'}`}>{year}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t grid grid-cols-2 gap-4">
                            <button onClick={handleClear} className="bg-white border border-slate-300 font-bold py-3 px-4 rounded-lg">Clear All</button>
                            <button onClick={() => setIsOpen(false)} className="bg-secondary text-white font-bold py-3 px-4 rounded-lg">Show Results</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


// --- Main Page Component ---
export default function ReviewsPage() {
    const [filters, setFilters] = useState<FilterState>({
        rating: 'all',
        platform: 'all',
        sort: 'newest',
        year: 'all',
    });
    const [visibleCount, setVisibleCount] = useState(9);
    const [isFilterOpen, setIsFilterOpen] = useState(false); // State for mobile drawer

    const filteredAndSortedReviews = useMemo(() => {
        let reviews = [...reviewsData];

        if (filters.rating === 'below-4') {
            reviews = reviews.filter(r => r.rating < 4);
        } else if (filters.rating !== 'all') {
            reviews = reviews.filter(r => Math.floor(r.rating) === filters.rating);
        }
        if (filters.platform !== 'all') {
            reviews = reviews.filter(r => r.platform === filters.platform);
        }
        if (filters.year !== 'all') {
            reviews = reviews.filter(r => new Date(r.date).getFullYear() === filters.year);
        }

        reviews.sort((a, b) => {
            switch (filters.sort) {
                case 'oldest': return new Date(a.date).getTime() - new Date(b.date).getTime();
                case 'highest': return b.rating - a.rating;
                case 'lowest': return a.rating - b.rating;
                case 'newest':
                default:
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
        });

        return reviews;
    }, [filters]);
    
    const calculateStats = (platform: 'Google' | 'Trustpilot') => {
        const platformReviews = reviewsData.filter(r => r.platform === platform);
        const totalRating = platformReviews.reduce((acc, r) => acc + r.rating, 0);
        return {
            count: platformReviews.length,
            avg: platformReviews.length > 0 ? totalRating / platformReviews.length : 0,
        };
    };

    const googleStats = calculateStats('Google');
    const trustpilotStats = calculateStats('Trustpilot');

    return (
        <>
            <MobileFilterDrawer isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} filters={filters} setFilters={setFilters} />
            <main className="bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Trusted by Families, Loved by Pups</h1>
                        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
                            {/* ✅ FIX 3: Escaped the apostrophe */}
                            We&apos;re proud of the homes our puppies go to. See what our families have to say about their experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
                        <SummaryCard platform="Google" rating={googleStats.avg} reviewCount={googleStats.count} />
                        <SummaryCard platform="Trustpilot" rating={trustpilotStats.avg} reviewCount={trustpilotStats.count} />
                    </div>

                    {/* --- CONTROLS SECTION --- */}
                    <div className="sticky top-20 sm:top-24 z-30 mb-8 sm:mb-12">
                        {/* ✅ DESKTOP CONTROLS */}
                        <div className="hidden md:flex bg-white/80 backdrop-blur-lg p-4 rounded-xl border border-slate-200 shadow-sm flex-wrap items-center justify-between gap-y-4 gap-x-6">
                           {/* Desktop filter implementation remains here */}
                           <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-semibold mr-2 hidden sm:inline">Filter by:</span>
                                <button onClick={() => setFilters({...filters, rating: 'all'})} className={`px-3 py-1 text-sm rounded-full transition ${filters.rating === 'all' ? 'bg-primary text-white' : 'bg-slate-100 hover:bg-slate-200'}`}>All Ratings</button>
                                <button onClick={() => setFilters({...filters, rating: 5})} className={`px-3 py-1 text-sm rounded-full transition flex items-center gap-1 ${filters.rating === 5 ? 'bg-primary text-white' : 'bg-slate-100 hover:bg-slate-200'}`}>5 <Star size={14} /></button>
                                <button onClick={() => setFilters({...filters, rating: 4})} className={`px-3 py-1 text-sm rounded-full transition flex items-center gap-1 ${filters.rating === 4 ? 'bg-primary text-white' : 'bg-slate-100 hover:bg-slate-200'}`}>4 <Star size={14} /></button>
                                <button onClick={() => setFilters({...filters, rating: 'below-4'})} className={`px-3 py-1 text-sm rounded-full transition flex items-center gap-1 ${filters.rating === 'below-4' ? 'bg-yellow-500 text-white' : 'bg-slate-100 hover:bg-slate-200'}`}>3 & Below</button>
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <select onChange={(e) => setFilters({...filters, year: e.target.value === 'all' ? 'all' : Number(e.target.value)})} value={String(filters.year)} className="appearance-none bg-slate-100 border border-slate-200 rounded-full pl-4 pr-8 py-2 text-sm font-semibold cursor-pointer">
                                    <option value="all">All Years</option>
                                    {availableYears.map(year => <option key={year} value={year}>{year}</option>)}
                                </select>
                                {/* ✅ FIX 4: Replaced 'any' with a proper type assertion */}
                                <select onChange={(e) => setFilters({...filters, sort: e.target.value as FilterState['sort']})} value={filters.sort} className="appearance-none bg-slate-100 border border-slate-200 rounded-full pl-4 pr-8 py-2 text-sm font-semibold cursor-pointer">
                                    <option value="newest">Sort by: Newest</option>
                                    <option value="oldest">Sort by: Oldest</option>
                                    <option value="highest">Sort by: Highest Rating</option>
                                    <option value="lowest">Sort by: Lowest Rating</option>
                                </select>
                            </div>
                        </div>
                        {/* ✅ MOBILE CONTROLS */}
                        <div className="md:hidden flex justify-center">
                            <button 
                                onClick={() => setIsFilterOpen(true)}
                                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-lg font-semibold py-3 px-6 rounded-full border border-slate-200 shadow-lg"
                            >
                                <SlidersHorizontal size={16} />
                                Filter & Sort
                            </button>
                        </div>
                    </div>

                    <AnimatePresence>
                        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {filteredAndSortedReviews.slice(0, visibleCount).map(review => (
                                <ReviewCard key={review.id} review={review} />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {visibleCount < filteredAndSortedReviews.length && (
                        <div className="text-center mt-12 sm:mt-16">
                            <button
                                onClick={() => setVisibleCount(prev => prev + 9)}
                                className="bg-secondary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
                            >
                                Load More Reviews
                            </button>
                        </div>
                    )}
                     {filteredAndSortedReviews.length === 0 && (
                        <div className="text-center py-16 text-slate-500">
                            <p className="text-xl font-semibold">No reviews match your filters.</p>
                            <p>Try selecting a different category or clearing your filters.</p>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}