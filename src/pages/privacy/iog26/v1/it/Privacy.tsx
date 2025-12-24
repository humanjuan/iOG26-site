import {motion} from 'motion/react';
import iOG26 from '/logo.webp';
import tape from '@/assets/img/tape1.png';
import { useEffect } from 'react';
import { setCanonical, setDescription, setHreflangs, setOgImage, setOgType, setTitle, injectJSONLD, removeJSONLD } from '@/seo/seo';
import { BASE_URL, DEFAULT_OG_IMAGE } from '@/seo/constants';

const Privacy = () => {
    const today = new Date();
    const formatted = today.toLocaleDateString('it-IT', {year: 'numeric', month: '2-digit', day: '2-digit'});

    useEffect(() => {
        document.documentElement.setAttribute('lang', 'it');
        const url = `${BASE_URL}/privacy/iog26/it/v1`;
        const title = 'Informativa sulla Privacy – iOG26 Call Filter';
        const desc = 'Scopri come iOG26 gestisce i dati: non raccogliamo informazioni personali; tutto il filtro avviene sul dispositivo.';
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
            headline: 'Informativa sulla Privacy – iOG26 Call Filter',
            inLanguage: 'it',
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
                <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-(--color-text)">
                    <div className="flex justify-center items-center max-w-5xl mb-15">
                        <div className="relative group">
                            <a href="https://iog26.humanjuan.com" target="_blank" rel="noopener noreferrer" aria-label="Apri iOG26">
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
                        <h1 className="text-3xl font-bold">
                            Informativa sulla Privacy: i<strong className="text-amber-600">OG</strong>26 Call Filter
                        </h1>
                        <p className="mt-2">Ultimo aggiornamento: {formatted}</p>
                    </header>

                    <section className="space-y-6 leading-relaxed">
                        <div>
                            <h2 className="text-xl font-semibold">1. Informazioni generali</h2>
                            <p className="mt-2">
                                L’applicazione iOG26, sviluppata da HumanJuan, ha lo scopo di offrire funzioni di
                                filtraggio
                                e blocco
                                delle chiamate indesiderate sui dispositivi Android. Ci impegniamo a proteggere la
                                privacy
                                degli utenti e
                                a rispettare le politiche di Google Play e le leggi vigenti in materia di protezione dei
                                dati personali.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">2. Dati raccolti</h2>
                            <p className="mt-2">
                                iOG26 non raccoglie, memorizza né condivide informazioni personali. L’applicazione
                                funziona
                                interamente
                                sul dispositivo dell’utente. Accede temporaneamente solo alle informazioni necessarie
                                per
                                svolgere la sua
                                funzione principale:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Stato delle chiamate (per rilevare chiamate in entrata o in uscita).</li>
                                <li>Numero di telefono delle chiamate sconosciute (per applicare le regole di blocco).
                                </li>
                            </ul>
                            <p className="mt-2">Queste informazioni non vengono inviate né salvate su server
                                esterni.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">3. Utilizzo dei dati</h2>
                            <p className="mt-2">I dati vengono utilizzati esclusivamente in locale per:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Determinare se una chiamata deve essere consentita o bloccata.</li>
                                <li>Mostrare notifiche locali sullo stato del filtro.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">4. Autorizzazioni del dispositivo</h2>
                            <p className="mt-2">L’applicazione può richiedere i seguenti permessi:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>READ_PHONE_STATE</li>
                                <li>CALL_SCREENING_SERVICE</li>
                                <li>POST_NOTIFICATIONS</li>
                            </ul>
                            <p className="mt-2">
                                Questi permessi vengono utilizzati esclusivamente per eseguire le funzioni descritte.
                                Non
                                vengono usati
                                per raccogliere dati personali né per tracciare l’attività dell’utente.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">5. Sicurezza</h2>
                            <p className="mt-2">
                                Tutti i processi avvengono all’interno del dispositivo. Nessun dato viene trasmesso al
                                di
                                fuori del
                                telefono né a terze parti.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">6. Contatto</h2>
                            <p className="mt-2">
                                Per domande o dubbi riguardo questa informativa, puoi contattarmi all’indirizzo:
                                <strong> juan.alejandro@humanjuan.com</strong>
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Privacy;
