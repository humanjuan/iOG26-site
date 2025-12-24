import {useI18n} from "../context/I18nContext.tsx";

const SectionStats = () => {
    const { t } = useI18n();
    return (
        <section className="section-3 w-full min-h-[100svh] flex items-center bg-gradient-to-b from-[#5E4F42] to-[#9C8265] text-(--color-accent-3) pt-28 md:pt-0">
            <div className="container mx-auto px-6 w-full">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="hidden md:block order-1 min-h-[320px]" aria-hidden />
                    <div className="order-2">
                        <h2 className="text-4xl md:text-6xl font-norse  mb-4 text-center md:text-left">
                            {t('section3.title')}
                        </h2>
                        <p className="md:text-lg leading-relaxed text-center md:text-left">
                            {t('section3.p1')}
                        </p>
                        <p className="md:text-2xl leading-relaxed text-center md:text-left mt-5">
                            {t('section3.p2')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SectionStats;
