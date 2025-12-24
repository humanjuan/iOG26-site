import {motion} from "motion/react";
import {BuyMeACoffee, Github, GooglePlay} from "../components/Icons.tsx";
import {useI18n} from "../context/I18nContext.tsx";
import { Link } from "react-router-dom";
import { EXTERNAL_LINKS } from "@/constants/links";

const SectionInstall = () => {
    const {t} = useI18n();
    return (
        <section
            className="section-5 w-full min-h-[100svh] flex flex-col justify-end items-center bg-gradient-to-b from-[#A68D6E] to-[#F4E1C1] text-(--color-background) pb-2">

            <motion.div
                className="relative z-10 flex items-center justify-end flex-col min-h-[100svh] w-full p-2 overflow-hidden "
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                {/* === Íconos decorativos === */}
                <motion.div
                    className="flex justify-center gap-10 mt-10 text-(--color-accent-2)"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 3.0, duration: 0.8, ease: 'easeOut'}}
                >
                    <a
                        href={EXTERNAL_LINKS.googlePlay}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open on Google Play"
                        title="Google Play"
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent-2) rounded"
                    >
                        <GooglePlay size={40} className="hover:scale-110 transition-transform duration-300"/>
                    </a>
                    <a
                        href={EXTERNAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open GitHub repository"
                        title="GitHub"
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent-2) rounded"
                    >
                        <Github size={40} color="#1b1f24" className="hover:scale-110 transition-transform duration-300"/>
                    </a>
                    <a
                        href={EXTERNAL_LINKS.buyMeACoffee}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Support on Buy Me a Coffee"
                        title="Buy Me a Coffee"
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent-2) rounded"
                    >
                        <BuyMeACoffee size={40} color="#1b1f24" className="hover:scale-110 transition-transform duration-300"/>
                    </a>
                </motion.div>

                {/* === Línea decorativa === */}
                <motion.div
                    className="mt-4 w-24 h-[2px] bg-gradient-to-r from-(--color-accent) via-(--color-accent-2) to-(--color-accent-3) rounded-full opacity-90"
                    initial={{scaleX: 0}}
                    animate={{scaleX: 1}}
                    transition={{delay: 2.6, duration: 0.6, ease: "easeOut"}}
                />

                {/* === politicas === */}
                <motion.p
                    className="mt-2 text-sm text-(--color-text-secondary) font-light tracking-wide italic select-none max-w-xl"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 2.1, duration: 0.8, ease: "easeOut"}}
                >
                    <Link to="/privacy/iog26" className="text-(--color-accent) font-medium not-italic">
                        {t('section5.privacyPolicy')}
                    </Link>
                </motion.p>
            </motion.div>
        </section>

    );
};
export default SectionInstall;
