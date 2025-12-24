import {motion} from "motion/react";
import {BuyMeACoffee, Github, GooglePlay} from "../components/Icons.tsx";
import {useI18n} from "../context/I18nContext.tsx";
import { EXTERNAL_LINKS } from "@/constants/links";
import { useEffect } from "react";
import { setTitle, setDescription, setCanonical, setHreflangs, setOgType, setOgImage } from "@/seo/seo";
import { BASE_URL, DEFAULT_OG_IMAGE } from "@/seo/constants";

const HomeSection = () => {
    const { t, lang } = useI18n();

    useEffect(() => {
        const title = `iOG26 – ${t('home.title')}`;
        const desc = `${t('home.tagline.part1')} ${t('home.tagline.part2')}`;
        setTitle(title);
        setDescription(desc);
        setCanonical(`${BASE_URL}/`);
        setOgType('website');
        setOgImage(DEFAULT_OG_IMAGE);
        // hreflang alternates (single URL, localized by JS)
        setHreflangs({
            'x-default': `${BASE_URL}/`,
            en: `${BASE_URL}/`,
            es: `${BASE_URL}/`,
            it: `${BASE_URL}/`,
        });
    }, [lang, t]);

    return (
        <section
            className="home min-h-[100svh] flex items-center justify-center bg-(--color-background) text-(--color-accent-3)">
            <motion.div
                className="relative z-10 flex items-center justify-center flex-col min-h-[100svh] w-full p-6 overflow-hidden"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                <motion.img
                    src="/logo.webp"
                    alt="iOG26 logo"
                    className="md:w-[350px] sm:w-[50px] w-[250px] object-contain select-none"
                    initial={{opacity: 0, scale: 0.8, y: 20}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: 1.2, ease: "easeOut"}}
                />

                {/* === Título principal === */}
                <motion.h1
                    className="relative text-5xl md:text-8xl font-norse select-none mt-8 text-transparent bg-clip-text
                    bg-gradient-to-b from-(--color-accent) via-(--color-accent-2) to-(--color-accent-3) drop-shadow-[0_2px_12px_var(--color-shadow)]"
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                >
                    {t('home.title')}
                </motion.h1>

                {/* === Subtítulo / Eslogan === */}
                <motion.p
                    className="mt-4 text-lg md:text-2xl text-(--color-text-secondary) font-light tracking-wide italic select-none max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1, duration: 0.8, ease: "easeOut" }}
                >
                    {t('home.tagline.part1')}{" "}
                    <span className="text-(--color-accent-2) font-medium not-italic">
                        {t('home.tagline.part2')}
                    </span>
                </motion.p>

                {/* === Línea decorativa === */}
                <motion.div
                    className="mt-8 w-24 h-[2px] bg-gradient-to-r from-(--color-accent) via-(--color-accent-2) to-(--color-accent-3) rounded-full opacity-90"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2.6, duration: 0.6, ease: "easeOut" }}
                />

                {/* === Íconos decorativos === */}
                <motion.div
                    className="flex justify-center gap-10 mt-10 text-(--color-accent-2)"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.0, duration: 0.8, ease: 'easeOut' }}
                >
                    <a
                        href={EXTERNAL_LINKS.googlePlay}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open on Google Play"
                        title="Google Play"
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent-2) rounded"
                    >
                        <GooglePlay size={40} className="drop-shadow-[0_0_10px_var(--color-shadow)] hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                        href={EXTERNAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open GitHub repository"
                        title="GitHub"
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent-2) rounded"
                    >
                        <Github size={40} color="#fafbfc" className="drop-shadow-[0_0_10px_var(--color-shadow)] hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                        href={EXTERNAL_LINKS.buyMeACoffee}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Support on Buy Me a Coffee"
                        title="Buy Me a Coffee"
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent-2) rounded"
                    >
                        <BuyMeACoffee size={40} color="#fafbfc" className="drop-shadow-[0_0_10px_var(--color-shadow)] hover:scale-110 transition-transform duration-300" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HomeSection;
