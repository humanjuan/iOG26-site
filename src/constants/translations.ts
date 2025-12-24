export type LangKey = 'en' | 'es' | 'it';

export type TranslationDict = Record<string, string>;

export type Translations = Record<LangKey, TranslationDict>;

// Keys list
// home.title
// home.tagline.part1
// home.tagline.part2
// section1.title
// section1.p1
// section1.p2
// section2.title
// section2.p1
// section2.p2
// section3.title
// section3.p1
// section3.p2
// section4.title
// section4.p1
// section4.p2
// section5.title
// 404.title
// 404.subtitle

export const translations: Translations = {
    en: {
        'home.title': 'Call Filter',
        'home.tagline.part1': 'Block the unnecessary.',
        'home.tagline.part2': 'Answer what matters',

        'section1.title': 'Block unwanted calls',
        'section1.p1': 'iOG26 scans every incoming number and compares it with your <strong class="text-(--color-accent)">local</strong> and <strong class="text-(--color-accent)">private</strong> database, automatically identifying the numbers you’ve marked as annoying. You’ll only receive the calls that truly matter.',
        'section1.p2': 'Peace begins when your phone knows how to say no.',

        'section2.title': 'Prefix blocking',
        'section2.p1': 'No more spam variants. Create custom prefix rules and let iOG26 automatically block repeated attempts from similar numbers.',
        'section2.p2': 'Your filter, your rules.',

        'section3.title': 'Real-time statistics',
        'section3.p1': 'With iOG26, see your filter’s performance instantly: how many calls were blocked, where they came from, private or unknown numbers, and more. Dynamic charts show your filter in action, second by second.',
        'section3.p2': 'Information is also protection.',

        'section4.title': 'Total control',
        'section4.p1': 'Switch to dark mode or choose from different visual styles to match your personality. Adjust notifications, review your blocking history, and keep full control of every detail. Enable the advanced (Regex) mode to create precise custom rules, or activate hard blocks for private and unknown numbers with ease.',
        'section4.p2': 'Powerful inside. Calm outside.',

        'section5.title': 'Install',
        'section5.privacyPolicy': 'Privacy Policy',
        '404.title': '404',
        '404.subtitle': 'The page you are looking for does not exist.'
    },
    es: {
        'home.title': 'Call Filter',
        'home.tagline.part1': 'Bloquea lo innecesario.',
        'home.tagline.part2': 'Responde lo importante',

        'section1.title': 'Bloquea llamadas no deseadas',
        'section1.p1': 'iOG26 analiza cada número entrante y lo contrasta con su base de datos <strong class="text-(--color-accent)">local</strong> y <strong class="text-(--color-accent)">privada</strong>, identificando automáticamente los números que tú definiste como molestos. Tú solo recibirás las llamadas que realmente importan.',
        'section1.p2': 'La tranquilidad empieza cuando tu teléfono sabe decir no.',

        'section2.title': 'Bloqueo por prefijo',
        'section2.p1': 'No más variantes del mismo spam. Define reglas personalizadas por prefijos y deja que iOG26 se encargue de neutralizar cualquier intento repetido de llamada.',
        'section2.p2': 'Tu filtro, tus reglas.',

        'section3.title': 'Estadísticas en tiempo real',
        'section3.p1': 'Con iOG26 Visualiza el rendimiento de tu filtro al instante: cuántas llamadas fueron bloqueadas, desde dónde provienen, números privados o desconocidos y más. Gráficos dinámicos te muestran el poder de tu filtro en acción, segundo a segundo.',
        'section3.p2': 'La información también es defensa.',

        'section4.title': 'Control total',
        'section4.p1': 'Configura el modo oscuro o elige entre distintos estilos visuales para reflejar tu personalidad. Ajusta las notificaciones, revisa el resumen de bloqueos y mantén el control total de cada evento. Activa el modo avanzado (Regex) para definir reglas personalizadas con precisión milimétrica o aplica bloqueos duros contra números privados y desconocidos sin complicaciones.',
        'section4.p2': 'Potente por dentro. Sereno por fuera.',

        'section5.title': 'Instalar',
        'section5.privacyPolicy': 'Politicas de Privacidad',
        '404.title': '404',
        '404.subtitle': 'La página que buscas no existe.',
    },
    it: {
        'home.title': 'Call Filter',
        'home.tagline.part1': 'Blocca ciò che non serve.',
        'home.tagline.part2': 'Rispondi solo a ciò che conta',

        'section1.title': 'Blocca le chiamate indesiderate',
        'section1.p1': 'iOG26 analizza ogni numero in arrivo e lo confronta con il tuo database <strong class="text-(--color-accent)">locale</strong> e <strong class="text-(--color-accent)">privato</strong>, identificando automaticamente i numeri che hai segnalato come fastidiosi. Riceverai solo le chiamate che contano davvero.',
        'section1.p2': 'La tranquillità inizia quando il tuo telefono sa dire di no.',

        'section2.title': 'Blocco per prefisso',
        'section2.p1': 'Basta varianti dello stesso spam. Crea regole personalizzate per prefissi e lascia che iOG26 blocchi automaticamente ogni tentativo ripetuto.',
        'section2.p2': 'Il tuo filtro, le tue regole.',

        'section3.title': 'Statistiche in tempo reale',
        'section3.p1': 'Con iOG26 puoi visualizzare subito l’efficacia del tuo filtro: quante chiamate sono state bloccate, da dove provengono, numeri privati o sconosciuti e molto altro. Grafici dinamici mostrano il potere del tuo filtro in azione, secondo dopo secondo.',
        'section3.p2': 'Anche l’informazione è una difesa.',

        'section4.title': 'Controllo totale',
        'section4.p1': 'Attiva la modalità scura o scegli tra diversi stili visivi per riflettere la tua personalità. Regola le notifiche, consulta il riepilogo dei blocchi e mantieni il pieno controllo su ogni dettaglio. Attiva la modalità avanzata (Regex) per creare regole precise o applica blocchi rigidi per numeri privati e sconosciuti in modo semplice.',
        'section4.p2': 'Potente dentro. Sereno fuori.',

        'section5.title': 'Installa',
        'section5.privacyPolicy': 'Informativa sulla Privacy',
        '404.title': '404',
        '404.subtitle': 'La pagina che stai cercando non esiste.',
    },
};

export const DEFAULT_LANG: LangKey = 'en';
