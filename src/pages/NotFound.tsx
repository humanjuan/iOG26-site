import {useEffect} from 'react';
import {motion} from "motion/react";
import {useI18n} from "../context/I18nContext.tsx";


const NotFound = () => {
    const {t} = useI18n();
    useEffect(() => {
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex, nofollow';
        document.head.appendChild(meta);
        return () => {
            document.head.removeChild(meta);
        };
    }, []);

    return (
        <main
            className="relative min-h-screen flex items-center justify-center bg-(--color-background) text-(--color-text)">
            <section className="relative z-10 max-w-prose px-6 py-10 text-center">
                <h1 className="text-3xl md:text-6xl font-bold mb-3">404</h1>
                {/* === Título principal === */}
                <motion.h1
                    className="relative text-5xl md:text-8xl font-norse select-none mt-8 text-transparent bg-clip-text
                    bg-gradient-to-b from-(--color-accent) via-(--color-accent-2) to-(--color-accent-3) drop-shadow-[0_2px_12px_var(--color-shadow)]"
                    initial={{opacity: 0, scale: 0.8, y: 40}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{delay: 1.2, duration: 0.8, ease: "easeOut"}}
                >
                    {t('404.title')}
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg md:text-2xl text-(--color-text-secondary) font-light tracking-wide italic select-none max-w-xl"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 2.1, duration: 0.8, ease: "easeOut"}}
                >
                    {t('404.subtitle')}
                </motion.p>
            </section>
        </main>
    );
}

export default NotFound;