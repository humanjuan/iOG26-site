import {motion} from 'motion/react';
import {ChileFlag, ItalyFlag, USAFlag} from "./Icons.tsx";
import {useI18n} from "../context/I18nContext.tsx";

const Languages = () => {
    const { lang, setLang } = useI18n();

    const socialLinks = [
        {
            component: ChileFlag,
            size: 40,
            rotate: 5,
            extraClass: 'p-2',
            lang: 'es' as const,
        },
        {
            component: USAFlag,
            size: 40,
            rotate: -5,
            extraClass: 'p-2',
            lang: 'en' as const,
        },
        {
            component: ItalyFlag,
            size: 40,
            rotate: 5,
            extraClass: 'p-2',
            lang: 'it' as const,
        },
    ];

    return (
        <div className="fixed top-1/2 right-2 transform -translate-y-1/2 flex flex-col space-y-0 z-50">
            {socialLinks.map(({component: Icon, size, rotate, extraClass, lang: code}, index) => (
                <motion.button
                    key={index}
                    onClick={() => setLang(code)}
                    aria-label={`Change language to ${code}`}
                    className={`rounded-md focus:outline-none ${lang === code ? 'opacity-100' : 'opacity-80'}`}
                    whileHover={{
                        scale: 1.2,
                        rotate: rotate,
                    }}
                    whileTap={{scale: 0.9}}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 10,
                    }}
                >
                    <Icon size={size} className={extraClass || ''}/>
                </motion.button>
            ))}
        </div>
    );
};

export default Languages;
