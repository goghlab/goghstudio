"use client";

import { motion } from "framer-motion";
import { Code, Layers, Zap, ArrowRight, Video, Globe, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

function ServicesSection() {
    const { t } = useLanguage();
    
    return (
        <section className="relative py-20 bg-[#030303] overflow-hidden">
            {/* Aurora 光球背景 */}
            <div className="aurora-bg">
                <div className="aurora-blob aurora-blob-1" />
                <div className="aurora-blob aurora-blob-2" />
                <div className="aurora-blob aurora-blob-3" />
            </div>
            
            {/* 原有背景漸變 */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-white/[0.02] to-white/[0.01]" />
            
            {/* 右上角漸變圓形 */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl" />
            
            {/* 左下角漸變圓形 */}
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* 我們的優勢部分 */}
                <div className="my-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-gray-400 font-sans">
                            {t('services.title') || '我們的與眾不同之處'}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 mr-3 rounded-lg bg-gradient-to-b from-purple-500/20 to-purple-500/10">
                                    <Zap className="h-5 w-5 text-purple-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white font-sans">
                                    {t('services.ai.title') || 'AI驅動的創意'}
                                </h3>
                            </div>
                            <p className="text-white/60 font-sans">
                                {t('services.ai.description') || '我們結合人工智能與人類創意，探索傳統設計方法無法實現的可能性。'}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 mr-3 rounded-lg bg-gradient-to-b from-pink-500/20 to-pink-500/10">
                                    <Layers className="h-5 w-5 text-pink-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white font-sans">
                                    {t('services.aesthetics.title') || '東西方美學融合'}
                                </h3>
                            </div>
                            <p className="text-white/60 font-sans">
                                {t('services.aesthetics.description') || '我們的團隊將東方禪意美學與西方設計原則融為一體，創造獨特作品。'}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 mr-3 rounded-lg bg-gradient-to-b from-blue-500/20 to-blue-500/10">
                                    <Code className="h-5 w-5 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white font-sans">
                                    {t('services.tech.title') || '技術與設計的結合'}
                                </h3>
                            </div>
                            <p className="text-white/60 font-sans">
                                {t('services.tech.description') || '我們不僅是設計師，還是技術專家，創造美觀且功能強大的解決方案。'}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 mr-3 rounded-lg bg-gradient-to-b from-cyan-500/20 to-cyan-500/10">
                                    <Video className="h-5 w-5 text-cyan-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white font-sans">
                                    AI影片/廣告製作
                                </h3>
                            </div>
                            <p className="text-white/60 font-sans">
                                AI輔助影視製作，從策劃到後期一站式完成，讓創意快速落地並產生影響力。
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 mr-3 rounded-lg bg-gradient-to-b from-green-500/20 to-green-500/10">
                                    <Globe className="h-5 w-5 text-green-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white font-sans">
                                    網站/程式/APP開發
                                </h3>
                            </div>
                            <p className="text-white/60 font-sans">
                                現代化網站、應用程式開發，定製化解決方案，打造流暢用戶體驗。
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 mr-3 rounded-lg bg-gradient-to-b from-orange-500/20 to-orange-500/10">
                                    <Users className="h-5 w-5 text-orange-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white font-sans">
                                    專案經理一對一
                                </h3>
                            </div>
                            <p className="text-white/60 font-sans">
                                每個項目配備專屬專案經理，全程貼身跟進，確保需求精準落地。
                            </p>
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        >
                            <Link 
                                href="/what" 
                                className="inline-flex items-center gap-2 bg-gradient-to-b from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all font-medium font-sans border border-white/10 shadow-lg"
                            >
                                {t('services.learnMoreButton')}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                .aurora-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    pointer-events: none;
                }
                
                .aurora-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.3;
                    animation: auroraFloat 20s ease-in-out infinite;
                }
                
                .aurora-blob-1 {
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(147, 112, 219, 0.4) 0%, transparent 70%);
                    top: -20%;
                    left: -10%;
                    animation-delay: 0s;
                }
                
                .aurora-blob-2 {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(0, 191, 255, 0.3) 0%, transparent 70%);
                    top: 10%;
                    right: -10%;
                    animation-delay: -7s;
                }
                
                .aurora-blob-3 {
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(255, 105, 180, 0.25) 0%, transparent 70%);
                    bottom: -20%;
                    left: 20%;
                    animation-delay: -14s;
                }
                
                @keyframes auroraFloat {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                        opacity: 0.3;
                    }
                    25% {
                        transform: translate(30px, 20px) scale(1.1);
                        opacity: 0.4;
                    }
                    50% {
                        transform: translate(-20px, -30px) scale(0.9);
                        opacity: 0.25;
                    }
                    75% {
                        transform: translate(-30px, 10px) scale(1.05);
                        opacity: 0.35;
                    }
                }
            `}</style>
        </section>
    );
}

export { ServicesSection }; 