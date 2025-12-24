import { useI18n } from "@/context/I18nContext.tsx";
import enImageBlock from "@/assets/img/en_block.webp";
import esImageBlock from "@/assets/img/es_block.webp";
import itImageBlock from "@/assets/img/it_block.webp";
import enImagePrefix from "@/assets/img/en_prefix.webp";
import esImagePrefix from "@/assets/img/es_prefix.webp";
import itImagePrefix from "@/assets/img/it_prefix.webp";
import enImageStats from "@/assets/img/en_stats.webp";
import esImageStats from "@/assets/img/es_stats.webp";
import itImageStats from "@/assets/img/it_stats.webp";
import enImageSetting from "@/assets/img/en_setting.webp";
import esImageSetting from "@/assets/img/es_setting.webp";
import itImageSetting from "@/assets/img/it_setting.webp";
import logo from "/logo.webp"

const PhoneMockup = () => {
    const { lang } = useI18n();
    return (
        <div className="phone3d relative w-full aspect-[9/19.5] rounded-4xl md:-mt-26">

            <div className="absolute inset-0 bg-[#0d0d0d] rounded-4xl shadow-xl backface-hidden"
                 style={{ transform: "translateZ(4px)" }}>

                {/* Sección 1: Bloqueo por número */}
                <img
                    src={lang === 'en' ? enImageBlock : lang == 'es' ? esImageBlock : itImageBlock}
                    alt="Pantalla de bloqueo por número"
                    className="phone-screen absolute inset-0 w-full h-full object-cover rounded-4xl p-1"
                    style={{ opacity: 1 }}
                />

                {/* Sección 2: Bloqueo por prefijo */}
                <img
                    src={lang === 'en' ? enImagePrefix : lang == 'es' ? esImagePrefix : itImagePrefix}
                    alt="Pantalla de bloqueo por prefijo"
                    className="phone-screen absolute inset-0 w-full h-full object-cover rounded-4xl p-1"
                    style={{ opacity: 0 }}
                />

                {/* Sección 3: Estadísticas */}
                <img
                    src={lang === 'en' ? enImageStats : lang == 'es' ? esImageStats : itImageStats}
                    alt="Pantalla de estadísticas"
                    className="phone-screen absolute inset-0 w-full h-full object-cover rounded-4xl p-1"
                    style={{ opacity: 0 }}
                />

                {/* Sección 4: Configuración */}
                <img
                    src={lang === 'en' ? enImageSetting : lang == 'es' ? esImageSetting : itImageSetting}
                    alt="Pantalla de ajustes"
                    className="phone-screen absolute inset-0 w-full h-full object-cover rounded-4xl p-1"
                    style={{ opacity: 0 }}
                />

                {/* Sección 5: Install */}
                <img
                    src={logo}
                    alt="Pantalla de ajustes"
                    className="phone-screen absolute inset-0 w-full h-auto object-center mt-26  p-1"
                    style={{ opacity: 0 }}
                />
            </div>
        </div>
    );
};
export default PhoneMockup;