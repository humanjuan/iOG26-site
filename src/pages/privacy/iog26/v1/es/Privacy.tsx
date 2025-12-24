import {motion} from 'motion/react';
import iOG26 from '/logo.webp';
import tape from '@/assets/img/tape1.png';
import { useEffect } from 'react';
import { setCanonical, setDescription, setHreflangs, setOgImage, setOgType, setTitle, injectJSONLD, removeJSONLD } from '@/seo/seo';
import { BASE_URL, DEFAULT_OG_IMAGE } from '@/seo/constants';

const Privacy = () => {
    const today = new Date();
    const formatted = today.toLocaleDateString('es-ES', {year: 'numeric', month: '2-digit', day: '2-digit'});

    useEffect(() => {
        document.documentElement.setAttribute('lang', 'es');
        const url = `${BASE_URL}/privacy/iog26/es/v1`;
        const title = 'Política de Privacidad – iOG26 Call Filter';
        const desc = 'Conoce cómo iOG26 trata los datos: no recopilamos información personal; todo el filtrado ocurre en el dispositivo.';
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
            headline: 'Política de Privacidad – iOG26 Call Filter',
            inLanguage: 'es',
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
                            <a href="/"  rel="noopener noreferrer" aria-label="Abrir iOG26">
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
                        <h1 className="text-3xl font-bold">Política de Privacidad: i<strong
                            className="text-amber-600">OG</strong>26 Call Filter</h1>
                        <p className="mt-2">Última actualización: {formatted}</p>
                    </header>

                    <section className="space-y-6 leading-relaxed">
                        <div>
                            <h2 className="text-xl font-semibold">1. Información general</h2>
                            <p className="mt-2">
                                La aplicación iOG26, desarrollada por HumanJuan, tiene como propósito ofrecer funciones
                                de
                                filtrado y bloqueo de llamadas no deseadas en dispositivos Android. Nos comprometemos a
                                proteger la privacidad de los usuarios y a cumplir con las políticas de Google Play y
                                las
                                leyes de protección de datos aplicables.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">2. Datos recopilados</h2>
                            <p className="mt-2">iOG26 no recopila, almacena ni comparte información personal. La
                                aplicación
                                opera completamente en el dispositivo del usuario. Solo accede temporalmente a la
                                información necesaria para cumplir su función principal:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Estado de llamadas (para detectar llamadas entrantes o salientes).</li>
                                <li>Número de teléfono de llamadas desconocidas (para aplicar las reglas de bloqueo).
                                </li>
                            </ul>
                            <p className="mt-2">Esta información no se envía ni se guarda en servidores externos.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">3. Uso de los datos</h2>
                            <p className="mt-2">Los datos se usan únicamente de forma local para:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Determinar si una llamada debe ser permitida o bloqueada.</li>
                                <li>Mostrar notificaciones locales sobre el estado del filtro.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">4. Permisos del dispositivo</h2>
                            <p className="mt-2">La aplicación puede solicitar permisos como:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>READ_PHONE_STATE</li>
                                <li>CALL_SCREENING_SERVICE</li>
                                <li>POST_NOTIFICATIONS</li>
                            </ul>
                            <p className="mt-2">Estos permisos se utilizan exclusivamente para ejecutar las funciones
                                descritas. No se utilizan para recopilar datos personales ni realizar seguimiento del
                                usuario.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">5. Seguridad</h2>
                            <p className="mt-2">Todos los procesos ocurren en el dispositivo. No se transmiten datos
                                fuera
                                del teléfono ni a terceros.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">6. Contacto</h2>
                            <p className="mt-2">Si tienes preguntas o inquietudes sobre esta política, puedes
                                contactarme
                                en: <strong>juan.alejandro@humanjuan.com</strong></p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Privacy;
