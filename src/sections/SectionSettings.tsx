import {useI18n} from "../context/I18nContext.tsx";

const SectionSettings = () => {
    const { t } = useI18n();
    return (
        <section className="section-4 w-full min-h-[100svh] flex items-center bg-gradient-to-b from-[#9C8265] to-[#A68D6E] text-(--color-background) pt-40 md:pt-0">
            <div className="container mx-auto px-6 w-full">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="order-2 min-h-[320px] hidden md:block" aria-hidden />
                    <div className="order-1">
                        <h2 className="text-4xl md:text-6xl font-norse mb-4 text-center md:text-left">
                            {t('section4.title')}
                        </h2>
                        <p className="md:text-lg leading-relaxed text-center md:text-left">
                            {t('section4.p1')}
                        </p>
                        <p className="md:text-2xl leading-relaxed text-center md:text-left mt-5">
                            {t('section4.p2')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SectionSettings;
