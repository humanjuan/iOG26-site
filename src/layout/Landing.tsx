import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Footer from "./Footer.tsx";
import Home from "../sections/Home.tsx";
import SectionBlockCalls from "../sections/SectionBlockCalls.tsx";
import SectionStats from "../sections/SectionStats.tsx";
import SectionBlockPrefixes from "../sections/SectionBlockPrefixes.tsx";
import SectionSettings from "../sections/SectionSettings.tsx";
import PhoneMockup from "../components/PhoneMockup.tsx";
import SectionInstall from "../sections/SectionInstall.tsx";
import Languages from "../components/Languages.tsx";
import {I18nProvider} from "../context/I18nContext.tsx";

gsap.registerPlugin(ScrollTrigger);

const Landing = ({includeLayout = false}) => {
    const phoneRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
/*
    useEffect(() => {
        const phone = phoneRef.current;
        const container = containerRef.current;
        if (!phone || !container) return;

        const isAndroid = /Android/i.test(navigator.userAgent);
        let originalViewportContent: string | null = null;
        if (isAndroid) {
            try {
                const vp = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
                if (vp) {
                    originalViewportContent = vp.getAttribute('content');
                    // Preserve width=device-width and add/override initial-scale
                    const content = new URLSearchParams(
                        (vp.content || 'width=device-width, initial-scale=1.0')
                            .split(',')
                            .map(s => s.trim())
                            .filter(Boolean)
                            .map(kv => {
                                const [k, v] = kv.split('=');
                                return [k.trim(), (v ?? '').trim()] as const;
                            })
                            .reduce<Record<string, string>>((acc, [k, v]) => {
                                acc[k] = v || '';
                                return acc;
                            }, {})
                    );
                    content.set('width', 'device-width');
                    content.set('initial-scale', '0.80');
                    vp.setAttribute('content', Array.from(content.entries()).map(([k, v]) => v ? `${k}=${v}` : k).join(', '));
                }
            } catch (error) {
                console.error("Error setting viewport meta:", error);
            }
        }

        ScrollTrigger.getAll().forEach((st) => st.kill());
        gsap.killTweensOf(phone);

        ScrollTrigger.defaults({scroller: container, invalidateOnRefresh: true});

        const setInitialState = (rotateX: number) => {
            gsap.set(phone, {
                opacity: 0,
                x: 0,
                rotateY: 0,
                rotateX,
                scale: 0.96,
                boxShadow:
                    "0 80px 160px rgba(0,0,0,0.25), 24px 70px 90px rgba(0,0,0,0.35), 0 10px 20px rgba(0,0,0,0.5)",
                transformPerspective: 1400,
                transformOrigin: "50% 50% -8px",
                "--lightX": -1,
                "--tilt": 0,
            });
        };

        const movePhone = (cfg: {
            x: string | number;
            rotateY: number;
            rotateX?: number;
            scale?: number;
            duration?: number;
        }) => {
            const {x, duration = 0.9} = cfg;
            let {rotateY, rotateX = -6} = cfg;
            rotateY = gsap.utils.clamp(-24, 24, rotateY);
            rotateX = gsap.utils.clamp(-10, -2, rotateX);

            // Luz virtual proveniente desde arriba y ligeramente del lado del texto
            const lightX = rotateY > 0 ? 1 : -1; // 1 derecha, -1 izquierda

            // Sombra compuesta
            const dirOffsetX = gsap.utils.mapRange(-24, 24, 36, -36)(rotateY);
            const dirOffsetY = 64 - Math.abs(rotateY) * 1.2;
            const dirBlur = 90 - Math.abs(rotateY) * 2.0;
            const dirAlpha = 0.28 + Math.abs(rotateY) * 0.004;

            const ambient = `0 90px 160px rgba(0,0,0,0.18)`; // volumen general
            const directional = `${dirOffsetX}px ${dirOffsetY}px ${dirBlur}px rgba(0,0,0,${dirAlpha})`;
            const contact = `0 8px 22px rgba(0,0,0,0.55)`; // contacto con "suelo"

            gsap.to(phone, {
                x,
                rotateY,
                rotateX,
                boxShadow: `${ambient}, ${directional}, ${contact}`,
                // Variables CSS para reflejos/specular del vidrio
                "--lightX": lightX,
                "--tilt": gsap.utils.normalize(-24, 24, Math.abs(rotateY)),
                ease: "power3.inOut",
                duration,
                overwrite: "auto",
            });
        };

        // Trigger global para ocultar el teléfono en Home (cubre solapes y refresh)
        const homeST = ScrollTrigger.create({
            trigger: ".home",
            start: "top bottom",
            end: "bottom top",
            onEnter: () => {
                gsap.killTweensOf(phone);
                gsap.to(phone, {opacity: 0, duration: 0.25, ease: "power2.out", overwrite: "auto"});
            },
            onEnterBack: () => {
                gsap.killTweensOf(phone);
                gsap.to(phone, {opacity: 0, duration: 0.25, ease: "power2.out", overwrite: "auto"});
            },
            onToggle: (self) => {
                if (self.isActive) {
                    gsap.killTweensOf(phone);
                    gsap.set(phone, {opacity: 0});
                }
            },
            onRefresh: (self) => {
                if (self.isActive) {
                    gsap.killTweensOf(phone);
                    gsap.set(phone, {opacity: 0});
                }
            },
            invalidateOnRefresh: true,
        });

        // Agrupación por Media Queries para que GSAP gestione montar/desmontar triggers
        const mm = gsap.matchMedia();

        // Desktop ≥768px
        mm.add("(min-width: 768px)", () => {
            setInitialState(-6);

            // Aparición en desktop (desde sección 1)
            ScrollTrigger.create({
                trigger: ".section-1",
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    gsap.killTweensOf(phone);
                    gsap.to(phone, {opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", overwrite: "auto"});
                },
                onEnterBack: () => {
                    gsap.killTweensOf(phone);
                    gsap.to(phone, {opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", overwrite: "auto"});
                },
                onLeaveBack: () => gsap.to(phone, {opacity: 0, duration: 0.5, ease: "power2.inOut"}),
                invalidateOnRefresh: true,
            });

            // 1 → texto derecha → teléfono izquierda
            ScrollTrigger.create({
                trigger: ".section-1",
                start: "top center",
                end: "bottom center",
                onEnter: () => movePhone({x: "-25vw", rotateY: 22, rotateX: -6}),
                onEnterBack: () => movePhone({x: "-25vw", rotateY: 22, rotateX: -6}),
                invalidateOnRefresh: true,
            });

            // 2 → texto izquierda → teléfono derecha
            ScrollTrigger.create({
                trigger: ".section-2",
                start: "top center",
                end: "bottom center",
                onEnter: () => movePhone({x: "25vw", rotateY: -22, rotateX: -6}),
                onEnterBack: () => movePhone({x: "25vw", rotateY: -22, rotateX: -6}),
                invalidateOnRefresh: true,
            });

            // 3 → texto derecha → teléfono izquierda
            ScrollTrigger.create({
                trigger: ".section-3",
                start: "top center",
                end: "bottom center",
                onEnter: () => movePhone({x: "-25vw", rotateY: 22, rotateX: -6}),
                onEnterBack: () => movePhone({x: "-25vw", rotateY: 22, rotateX: -6}),
                invalidateOnRefresh: true,
            });

            // 4 → texto izquierda → teléfono derecha
            ScrollTrigger.create({
                trigger: ".section-4",
                start: "top center",
                end: "bottom center",
                onEnter: () => movePhone({x: "25vw", rotateY: -22, rotateX: -6}),
                onEnterBack: () => movePhone({x: "25vw", rotateY: -22, rotateX: -6}),
                invalidateOnRefresh: true,
            });

            // 5 → texto centrado → teléfono recto
            ScrollTrigger.create({
                trigger: ".section-5",
                start: "top center",
                end: "bottom center",
                onEnter: () => movePhone({x: 0, rotateY: 0, rotateX: 0, scale: 1}),
                onEnterBack: () => movePhone({x: 0, rotateY: 0, rotateX: 0, scale: 1}),
                invalidateOnRefresh: true,
            });

            return () => {
                // nada especial; GSAP matará estos triggers al revertir el MQ
            };
        });

        // Mobile <768px
        mm.add("(max-width: 767px)", () => {
            setInitialState(0);

            // En mobile solo opacidad a partir de la sección 1
            ScrollTrigger.create({
                trigger: ".section-1",
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    gsap.killTweensOf(phone);
                    gsap.to(phone, {opacity: 1, scale: 1, duration: 0.7, ease: "power3.out", overwrite: "auto"});
                },
                onEnterBack: () => {
                    gsap.killTweensOf(phone);
                    gsap.to(phone, {opacity: 1, scale: 1, duration: 0.7, ease: "power3.out", overwrite: "auto"});
                },
                onLeaveBack: () => gsap.to(phone, {opacity: 0, duration: 0.4, ease: "power2.inOut"}),
                invalidateOnRefresh: true,
            });

            return () => {};
        });

        // Cambio de pantallas (independiente del MQ)
        const screens = gsap.utils.toArray<HTMLImageElement>(".phone-screen");
        const screenTriggers = screens.map((screen, i) =>
            ScrollTrigger.create({
                trigger: `.section-${i + 1}`,
                start: "top center",
                end: "bottom center",
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(screens, {opacity: 0, duration: 0.6, overwrite: "auto"});
                        gsap.to(screen, {opacity: 1, duration: 0.6, overwrite: "auto"});
                    }
                },
                invalidateOnRefresh: true,
            })
        );

        // Forzar refresh en cambios de tamaño/orientación para recalcular correctamente
        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener('resize', handleResize, {passive: true});
        window.addEventListener('orientationchange', handleResize, {passive: true});

        // Recalcular posiciones tras registrar todos los triggers
        ScrollTrigger.refresh();

        return () => {
            // Restore original viewport meta on Android to avoid affecting other routes/pages
            if (isAndroid) {
                try {
                    const vp = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
                    if (vp && originalViewportContent !== null) {
                        vp.setAttribute('content', originalViewportContent);
                    }
                } catch (error) {
                    console.error("Error restaurando viewport meta:", error);
                }
            }

            homeST.kill();
            screenTriggers.forEach((st) => st.kill());
            mm.revert();
            window.removeEventListener('resize', handleResize as EventListener);
            window.removeEventListener('orientationchange', handleResize as EventListener);
            gsap.killTweensOf(phone);
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);
*/

    useEffect(() => {
        const phone = phoneRef.current;
        const container = containerRef.current;
        if (!phone || !container) return;

        const isAndroid = /Android/i.test(navigator.userAgent);
        let originalViewportContent: string | null = null;
        if (isAndroid) {
            try {
                const vp = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
                if (vp) {
                    originalViewportContent = vp.getAttribute('content');
                    const content = new URLSearchParams(
                        (vp.content || 'width=device-width, initial-scale=1.0')
                            .split(',')
                            .map(s => s.trim())
                            .filter(Boolean)
                            .map(kv => {
                                const [k, v] = kv.split('=');
                                return [k.trim(), (v ?? '').trim()] as const;
                            })
                            .reduce<Record<string, string>>((acc, [k, v]) => {
                                acc[k] = v || '';
                                return acc;
                            }, {})
                    );
                    content.set('width', 'device-width');
                    content.set('initial-scale', '0.80');
                    vp.setAttribute('content', Array.from(content.entries()).map(([k, v]) => v ? `${k}=${v}` : k).join(', '));
                }
            } catch (error) {
                console.error("Error setting viewport meta:", error);
            }
        }

        // Limpiar triggers y animaciones previas
        ScrollTrigger.getAll().forEach((st) => st.kill());
        gsap.killTweensOf(phone);

        ScrollTrigger.defaults({ scroller: container, invalidateOnRefresh: true });

        const setInitialState = (rotateX: number) => {
            gsap.set(phone, {
                opacity: 0,
                x: 0,
                rotateY: 0,
                rotateX,
                scale: 0.96,
                boxShadow:
                    "0 80px 160px rgba(0,0,0,0.25), 24px 70px 90px rgba(0,0,0,0.35), 0 10px 20px rgba(0,0,0,0.5)",
                transformPerspective: 1400,
                transformOrigin: "50% 50% -8px",
                "--lightX": -1,
                "--tilt": 0,
            });
        };

        const movePhone = (cfg: {
            x: string | number;
            rotateY: number;
            rotateX?: number;
            scale?: number;
            duration?: number;
        }) => {
            const { x, duration = 0.9 } = cfg;
            let { rotateY, rotateX = -6 } = cfg;
            rotateY = gsap.utils.clamp(-24, 24, rotateY);
            rotateX = gsap.utils.clamp(-10, -2, rotateX);

            const lightX = rotateY > 0 ? 1 : -1;
            const dirOffsetX = gsap.utils.mapRange(-24, 24, 36, -36)(rotateY);
            const dirOffsetY = 64 - Math.abs(rotateY) * 1.2;
            const dirBlur = 90 - Math.abs(rotateY) * 2.0;
            const dirAlpha = 0.28 + Math.abs(rotateY) * 0.004;

            const ambient = `0 90px 160px rgba(0,0,0,0.18)`;
            const directional = `${dirOffsetX}px ${dirOffsetY}px ${dirBlur}px rgba(0,0,0,${dirAlpha})`;
            const contact = `0 8px 22px rgba(0,0,0,0.55)`;

            gsap.to(phone, {
                x,
                rotateY,
                rotateX,
                boxShadow: `${ambient}, ${directional}, ${contact}`,
                "--lightX": lightX,
                "--tilt": gsap.utils.normalize(-24, 24, Math.abs(rotateY)),
                ease: "power3.inOut",
                duration,
                overwrite: true,
            });
        };

        // Trigger para controlar visibilidad global
        ScrollTrigger.create({
            trigger: ".home",
            start: "top bottom",
            end: "bottom 90%",
            onEnter: () => {
                gsap.killTweensOf(phone);
                gsap.to(phone, { opacity: 0, duration: 0.25, ease: "power2.out", overwrite: true });
            },
            onEnterBack: () => {
                gsap.killTweensOf(phone);
                gsap.to(phone, { opacity: 0, duration: 0.25, ease: "power2.out", overwrite: true});
            },
            onLeave: () => {
                gsap.to(phone, { opacity: 1, scale: 1, duration: 0.2, ease: "power3.out", overwrite: true });
            },
            onLeaveBack: () => {
                gsap.to(phone, { opacity: 1, scale: 1, duration: 0.2, ease: "power3.out", overwrite: true });
            },
            onRefresh: (self) => {
                if (self.isActive) {
                    gsap.killTweensOf(phone);
                    gsap.set(phone, { opacity: 0 });
                } else {
                    gsap.set(phone, { opacity: 1, scale: 1 });
                }
            },
            invalidateOnRefresh: true,
        });

        const mm = gsap.matchMedia();

        // Desktop ≥768px
        mm.add("(min-width: 768px)", () => {
            setInitialState(-6);

            // Movimientos por sección
            ScrollTrigger.create({
                trigger: ".section-1",
                start: "top center",
                end: "bottom center",
                onEnter: () => movePhone({ x: "-25vw", rotateY: 22, rotateX: -6 }),
                onEnterBack: () => movePhone({ x: "-25vw", rotateY: 22, rotateX: -6 }),
                invalidateOnRefresh: true,
            });

            ScrollTrigger.create({
                trigger: ".section-2",
                start: "top center",
                end: "bottom center",
                onEnter: () => movePhone({ x: "25vw", rotateY: -22, rotateX: -6 }),
                onEnterBack: () => movePhone({ x: "25vw", rotateY: -22, rotateX: -6 }),
                invalidateOnRefresh: true,
            });

            ScrollTrigger.create({
                trigger: ".section-3",
                start: "top center",
                end: "bottom center",
                onEnter: () => movePhone({ x: "-25vw", rotateY: 22, rotateX: -6 }),
                onEnterBack: () => movePhone({ x: "-25vw", rotateY: 22, rotateX: -6 }),
                invalidateOnRefresh: true,
            });

            ScrollTrigger.create({
                trigger: ".section-4",
                start: "top center",
                end: "bottom center",
                onEnter: () => movePhone({ x: "25vw", rotateY: -22, rotateX: -6 }),
                onEnterBack: () => movePhone({ x: "25vw", rotateY: -22, rotateX: -6 }),
                invalidateOnRefresh: true,
            });

            ScrollTrigger.create({
                trigger: ".section-5",
                start: "top center",
                end: "bottom center",
                onEnter: () => movePhone({ x: 0, rotateY: 0, rotateX: 0, scale: 1 }),
                onEnterBack: () => movePhone({ x: 0, rotateY: 0, rotateX: 0, scale: 1 }),
                invalidateOnRefresh: true,
            });

            return () => {};
        });

        // Mobile <768px
        mm.add("(max-width: 767px)", () => {
            setInitialState(0);

            // En mobile solo opacidad
            ScrollTrigger.create({
                trigger: ".section-1",
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    gsap.killTweensOf(phone);
                    gsap.to(phone, { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out", overwrite: true });
                },
                onEnterBack: () => {
                    gsap.killTweensOf(phone);
                    gsap.to(phone, { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out", overwrite: true });
                },
                invalidateOnRefresh: true,
            });

            return () => {};
        });

        // Cambio de pantallas
        const screens = gsap.utils.toArray<HTMLImageElement>(".phone-screen");
        const screenTriggers = screens.map((screen, i) =>
            ScrollTrigger.create({
                trigger: `.section-${i + 1}`,
                start: "top center",
                end: "bottom center",
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(screens, { opacity: 0, duration: 0.6, overwrite: true });
                        gsap.to(screen, { opacity: 1, duration: 0.6, overwrite: true });
                    }
                },
                invalidateOnRefresh: true,
            })
        );

        // Forzar refresh en resize/orientation
        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener('resize', handleResize, { passive: true });
        window.addEventListener('orientationchange', handleResize, { passive: true });

        ScrollTrigger.refresh();

        return () => {
            if (isAndroid) {
                try {
                    const vp = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
                    if (vp && originalViewportContent !== null) {
                        vp.setAttribute('content', originalViewportContent);
                    }
                } catch (error) {
                    console.error("Error restaurando viewport meta:", error);
                }
            }

            screenTriggers.forEach((st) => st.kill());
            mm.revert();
            window.removeEventListener('resize', handleResize as EventListener);
            window.removeEventListener('orientationchange', handleResize as EventListener);
            gsap.killTweensOf(phone);
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-(--color-background) text-(--color-text)">
            <div className="bg-noise"></div>

            <main
                id="scroller"
                ref={containerRef}
                className="h-[100svh] overflow-y-scroll overflow-x-hidden snap-y snap-mandatory no-scrollbar"
            >
                <I18nProvider>
                    <Languages/>
                    <Home/>

                    {/* Teléfono persistente */}
                    <div
                        className="fixed left-1/2 -translate-x-1/2 top-5 md:top-1/2 md:-translate-y-1/2 z-30 pointer-events-none"
                        style={{
                            perspective: "3000px",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <div
                            ref={phoneRef}
                            className="w-[210px] sm:w-[240px] md:w-[260px] rounded-[2rem]"
                            style={{
                                transformStyle: "preserve-3d",
                                transformOrigin: "center center",
                            }}
                        >
                            <PhoneMockup/>
                        </div>
                    </div>

                    {/* Secciones */}
                    <SectionBlockCalls/>
                    <SectionBlockPrefixes/>
                    <SectionStats/>
                    <SectionSettings/>
                    <SectionInstall/>
                </I18nProvider>
            </main>

            <p className="sr-only">
                iOG26 Call Filter is an Android application created by Human Juan (Juan Alejandro),
                designed to block unwanted phone calls such as spam, anonymous callers, unknown callers,
                and custom numbers or prefixes chosen by the user.
                All filtering logic is performed on-device using Android's CallScreeningService,
                ensuring full privacy and zero data upload.
                The app includes a dashboard with blocking statistics, a daily digest notification,
                translation support in English, Spanish, and Italian,
                and customizable settings for call log visibility and notification behavior.
                Learn more about the creator at https://humanjuan.com.
            </p>

            {!includeLayout && <Footer/>}
        </div>
    );
};

export default Landing;
