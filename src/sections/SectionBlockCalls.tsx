import {useI18n} from "../context/I18nContext.tsx";

const SectionBlockCalls = () => {
    const { t } = useI18n();
    return (
        <section className="section-1 w-full min-h-[100svh] flex items-center bg-gradient-to-b from-[#181816] to-[#3A322B] text-(--color-accent-3) pt-40 md:pt-0">
            <div className="container mx-auto px-6 w-full">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="hidden md:block order-1 min-h-[320px]" aria-hidden />
                    <div className="order-2">
                        <h2 className="text-4xl md:text-6xl font-norse mb-4 text-center md:text-left">
                            {t('section1.title')}
                        </h2>
                        <p className="md:text-lg leading-relaxed text-center md:text-left" dangerouslySetInnerHTML={{ __html: t('section1.p1') }} />
                        <p className="md:text-xl leading-relaxed text-center md:text-left mt-5">
                            {t('section1.p2')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SectionBlockCalls;
