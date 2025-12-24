import {motion} from 'motion/react';
import iOG26 from '/logo.webp';
import tape from '@/assets/img/tape1.png';
import { useEffect } from 'react';
import { setCanonical, setDescription, setHreflangs, setOgImage, setOgType, setTitle, injectJSONLD, removeJSONLD } from '@/seo/seo';
import { BASE_URL, DEFAULT_OG_IMAGE } from '@/seo/constants';

const Privacy = () => {
    const today = new Date();
    const formatted = today.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'});

    useEffect(() => {
        // Ensure correct <html lang>
        document.documentElement.setAttribute('lang', 'en');
        const url = `${BASE_URL}/privacy/iog26/en/v1`;
        const title = 'Privacy Policy – iOG26 Call Filter';
        const desc = 'Learn how iOG26 handles data: we do not collect personal information; all filtering happens on-device.';
        setTitle(title);
        setDescription(desc);
        setCanonical(url);
        setOgType('article');
        setOgImage(DEFAULT_OG_IMAGE);
        setHreflangs({
            en: `${BASE_URL}/privacy/iog26/en/v1`,
            es: `${BASE_URL}/privacy/iog26/es/v1`,
            it: `${BASE_URL}/privacy/iog26/it/v1`,
            'x-default': `${BASE_URL}/privacy/iog26/en/v1`,
        });
        injectJSONLD('ld-privacy', {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Privacy Policy – iOG26 Call Filter',
            inLanguage: 'en',
            dateModified: new Date().toISOString(),
            mainEntityOfPage: url,
            image: `${BASE_URL}/logo.webp`,
        });
        return () => removeJSONLD('ld-privacy');
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-(--color-background) text-(--color-text)">
            <div className="bg-noise"></div>
            <main className="relative min-h-screen">
                <div className="relative z-10  max-w-5xl mx-auto px-6 py-16 text-(--color-text)">

                    <div className="flex justify-center items-center max-w-5xl mb-15">
                        <div className="relative group">
                            <a href="https://iog26.humanjuan.com" target="_blank" rel="noopener noreferrer" aria-label="Open iOG26">
                                <motion.div
                                    className="relative mb-0 w-[200px] h-[200px] rounded-lg -rotate-2"
                                    style={{
                                        transformOrigin: 'top center',
                                        boxShadow: '6px 12px 16px rgba(0,0,0,0.25), -3px -2px 4px rgba(0,0,0,0.05)',
                                    }}
                                >
                                    <img
                                        src={iOG26}
                                        alt="iOG26 Call Filter"
                                        className="w-full h-full object-cover rounded-lg transition-opacity duration-300 bg-(--color-text)"
                                        loading="lazy"
                                    />
                                </motion.div>
                            </a>
                            <img
                                src={tape}
                                alt="Tape"
                                className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-[80px] z-10 pointer-events-none -rotate-10"
                            />
                        </div>
                    </div>

                    <header className="mb-8">
                        <h1 className="text-3xl font-bold">Privacy Policy: i<strong
                            className="text-amber-600">OG</strong>26 Call Filter</h1>
                        <p className="mt-2">Last updated: {formatted}</p>
                    </header>

                    <section className="space-y-6 leading-relaxed">
                        <div>
                            <h2 className="text-xl font-semibold">1. General Information</h2>
                            <p className="mt-2">
                                The iOG26 application, developed by HumanJuan, is designed to provide call filtering and
                                blocking features on Android devices. We are committed to protecting user privacy and
                                complying with Google Play policies and applicable data protection laws.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">2. Data Collected</h2>
                            <p className="mt-2">iOG26 does not collect, store, or share personal information. The app
                                operates entirely on the user's device. It only accesses, temporarily and locally, the
                                information needed to perform its core function:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Call state (to detect incoming or outgoing calls).</li>
                                <li>Phone number of unknown calls (to apply blocking rules).</li>
                            </ul>
                            <p className="mt-2">This information is not sent to nor stored on external servers.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">3. Use of Data</h2>
                            <p className="mt-2">Data is used only locally to:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Determine whether a call should be allowed or blocked.</li>
                                <li>Display local notifications about the filter status.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">4. Device Permissions</h2>
                            <p className="mt-2">The app may request permissions such as:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>READ_PHONE_STATE</li>
                                <li>CALL_SCREENING_SERVICE</li>
                                <li>POST_NOTIFICATIONS</li>
                            </ul>
                            <p className="mt-2">These permissions are used exclusively to perform the described
                                functions. They are not used to collect personal data or track the user.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">5. Security</h2>
                            <p className="mt-2">All processes occur on the device. Data is not transmitted outside the
                                phone nor to third parties.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">6. Contact</h2>
                            <p className="mt-2">If you have questions or concerns about this policy, you can contact me
                                at: <strong>juan.alejandro@humanjuan.com</strong></p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Privacy;
