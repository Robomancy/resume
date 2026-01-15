// ============================================
// MULTILINGUAL SYSTEM
// ============================================

(function() {
    'use strict';
    
    const translations = {
        en: {
            'hero.subtitle': 'Platform Owner & Enterprise Automation Specialist',
            'hero.tagline': 'Transforming complexity into clarity. 150+ automations in production. Zero compromises.',
            'countdown.title': 'FOR HIRE',
            'countdown.days': 'Days',
            'countdown.hours': 'Hours',
            'countdown.minutes': 'Minutes',
            'countdown.seconds': 'Seconds',
            'companies.title': 'Where I Worked At',
            'tools.title': 'Tools',
            'summary.title': 'Professional Summary',
            'summary.content': 'Platform Owner and Enterprise Automation Specialist with over six years of experience in business process automation and optimization within corporate environments. Proven expertise in no-code, low-code, and traditional solutions. Currently managing over 150 active automations at A2A, coordinating efforts with a dedicated team.',
            'skills.title': 'Skills',
            'skills.automation': 'Automation Platforms',
            'skills.development': 'Development',
            'skills.ai': 'AI & Advanced Tech',
            'experience.title': 'Experience',
            'experience.a2a.title': 'Platform Owner | Enterprise Automation Specialist',
            'experience.a2a.period': 'May 2023 — Present',
            'experience.a2a.company': 'A2A — Milan | Remote',
            'experience.a2a.desc1': 'Managing the Intelligent Automation area alongside two colleagues, coordinating a team of ~15 external consultants. Overseeing the full lifecycle of automation initiatives across the organization. Increased active automations by 173% over the past two years, with more than 150 solutions in production.',
            'experience.a2a.desc2': 'Leading technical refactoring initiatives to improve performance, scalability, and operational efficiency. Introduced version control, code review, modular robots, and advanced features. Transformed a critical process from 4 days to less than 5 minutes with zero exceptions.',
            'experience.leonardo.title': 'Platform Owner | Program Manager: Hyper-Automation',
            'experience.leonardo.period': 'December 2022 — May 2023',
            'experience.leonardo.company': 'Leonardo — Nerviano | Rome | Hybrid',
            'experience.leonardo.desc1': 'Managed the hyper-automation team and the automation platform (UiPath) with a team of ~10 external consultants. Led technology scouting for automation and analysis solutions, including ServiceNow Automation Engine and Process Mining software.',
            'experience.leonardo.desc2': 'Built a prioritized backlog of automation initiatives in collaboration with UiPath, generating over 20 potential automation use cases through structured and interactive meetings.',
            'experience.beta80.title': 'Software Developer | Robotic Process Automation Developer',
            'experience.beta80.period': 'September 2019 — December 2022',
            'experience.beta80.company': 'Beta 80 Group — Milan | Hybrid',
            'experience.beta80.desc1': 'Managed the full lifecycle of projects for large enterprises across various sectors, combining low-code technologies with traditional programming languages. Gained solid experience with RPA platforms (UiPath, Automation Anywhere), Microsoft Power Platform, and development languages (Python, C#, PowerShell, VB.NET, SQL).',
            'experience.beta80.desc2': 'Developed advanced Python solutions focused on emerging technologies: data and web scraping, NLP, IBM Watson, computer vision (OCR and image recognition) using Tesseract, OpenCV, MediaPipe, and data visualization solutions with Docker and Podman.',
            'experience.fastweb.title': 'Identity and Access Management (IAM) Consultant',
            'experience.fastweb.period': 'May 2018 — September 2019',
            'experience.fastweb.company': 'Beta 80 Group at Fastweb — Milan | On-Site',
            'experience.fastweb.desc1': 'Provided second-level IAM support for Fastweb as part of a four-person team. Handled interventions on Active Directory, Microsoft Exchange, Dell/Quest Security Explorer, and RSA Security Console.',
            'experience.fastweb.desc2': 'Developed internal automation tools for one-off and mass requests related to users, mailboxes, network shares, and tokens using Python, PowerShell, and VBScript.',
            'achievements.title': 'Key Achievements',
            'achievements.lead': 'Measurable impact. Proven results. No fluff.',
            'achievements.growth.title': 'Automation Growth',
            'achievements.growth.desc': 'Scaled A2A\'s automation portfolio from baseline to 150+ active solutions in production over two years. Coordinated cross-functional teams and established structured governance frameworks that became the operational standard.',
            'achievements.growth.tag1': 'Team Leadership',
            'achievements.growth.tag2': 'Governance',
            'achievements.transformation.metric': '4 Days → 5 Min',
            'achievements.transformation.title': 'Critical Process Transformation',
            'achievements.transformation.desc': 'Converted a GUI-based Excel process into an API-driven solution using LINQ. Reduced execution time from 4 days to under 5 minutes with zero application exceptions to date. Eliminated manual intervention entirely.',
            'achievements.transformation.tag': 'Performance',
            'achievements.ai.metric': '1 in 6',
            'achievements.ai.title': 'AI Integration Pioneer',
            'achievements.ai.desc': 'Currently 1 out of 6 automations integrates Artificial Intelligence or advanced technologies including LLM, Document Understanding, Computer Vision, Semantic Matching, and Agentic systems. Leading the shift from rule-based to intelligent automation.',
            'contact.title': 'Contact',
            'footer.copyright': '© 2026 — All rights reserved',
            'modal.title': 'Let\'s Work Together',
            'modal.text': 'Ready to transform your automation strategy? Let\'s discuss how we can optimize your business processes.',
            'modal.email': 'Send Email'
        },
        it: {
            'hero.subtitle': 'Platform Owner & Specialista Automazione Aziendale',
            'hero.tagline': 'Trasformo la complessità in chiarezza. 150+ automazioni in produzione. Zero compromessi.',
            'countdown.title': 'ASSUMIMI',
            'countdown.days': 'Giorni',
            'countdown.hours': 'Ore',
            'countdown.minutes': 'Minuti',
            'countdown.seconds': 'Secondi',
            'companies.title': 'Dove Ho Lavorato',
            'tools.title': 'Strumenti',
            'summary.title': 'Profilo Professionale',
            'summary.content': 'Platform Owner e Specialista di Automazione Aziendale con oltre sei anni di esperienza nell\'automazione e ottimizzazione dei processi aziendali in ambienti corporate. Comprovata expertise in soluzioni no-code, low-code e tradizionali. Attualmente gestisco oltre 150 automazioni attive in A2A, coordinando gli sforzi con un team dedicato.',
            'skills.title': 'Competenze',
            'skills.automation': 'Piattaforme di Automazione',
            'skills.development': 'Sviluppo',
            'skills.ai': 'AI & Tecnologie Avanzate',
            'experience.title': 'Esperienza',
            'experience.a2a.title': 'Platform Owner | Specialista Automazione Aziendale',
            'experience.a2a.period': 'Maggio 2023 — Presente',
            'experience.a2a.company': 'A2A — Milano | Remoto',
            'experience.a2a.desc1': 'Gestisco l\'area Intelligent Automation insieme a due colleghi, coordinando un team di ~15 consulenti esterni. Supervisiono l\'intero ciclo di vita delle iniziative di automazione nell\'organizzazione. Ho aumentato le automazioni attive del 173% negli ultimi due anni, con oltre 150 soluzioni in produzione.',
            'experience.a2a.desc2': 'Guido iniziative di refactoring tecnico per migliorare performance, scalabilità ed efficienza operativa. Ho introdotto version control, code review, robot modulari e funzionalità avanzate. Ho trasformato un processo critico da 4 giorni a meno di 5 minuti con zero eccezioni.',
            'experience.leonardo.title': 'Platform Owner | Program Manager: Hyper-Automation',
            'experience.leonardo.period': 'Dicembre 2022 — Maggio 2023',
            'experience.leonardo.company': 'Leonardo — Nerviano | Roma | Ibrido',
            'experience.leonardo.desc1': 'Ho gestito il team di hyper-automation e la piattaforma di automazione (UiPath) con un team di ~10 consulenti esterni. Ho guidato il technology scouting per soluzioni di automazione e analisi, inclusi ServiceNow Automation Engine e software di Process Mining.',
            'experience.leonardo.desc2': 'Ho costruito un backlog prioritizzato di iniziative di automazione in collaborazione con UiPath, generando oltre 20 potenziali casi d\'uso di automazione attraverso meeting strutturati e interattivi.',
            'experience.beta80.title': 'Software Developer | Sviluppatore Robotic Process Automation',
            'experience.beta80.period': 'Settembre 2019 — Dicembre 2022',
            'experience.beta80.company': 'Beta 80 Group — Milano | Ibrido',
            'experience.beta80.desc1': 'Ho gestito l\'intero ciclo di vita di progetti per grandi aziende in vari settori, combinando tecnologie low-code con linguaggi di programmazione tradizionali. Ho acquisito solida esperienza con piattaforme RPA (UiPath, Automation Anywhere), Microsoft Power Platform e linguaggi di sviluppo (Python, C#, PowerShell, VB.NET, SQL).',
            'experience.beta80.desc2': 'Ho sviluppato soluzioni Python avanzate focalizzate su tecnologie emergenti: data e web scraping, NLP, IBM Watson, computer vision (OCR e riconoscimento immagini) usando Tesseract, OpenCV, MediaPipe, e soluzioni di visualizzazione dati con Docker e Podman.',
            'experience.fastweb.title': 'Consulente Identity and Access Management (IAM)',
            'experience.fastweb.period': 'Maggio 2018 — Settembre 2019',
            'experience.fastweb.company': 'Beta 80 Group presso Fastweb — Milano | In Sede',
            'experience.fastweb.desc1': 'Ho fornito supporto IAM di secondo livello per Fastweb come parte di un team di quattro persone. Ho gestito interventi su Active Directory, Microsoft Exchange, Dell/Quest Security Explorer e RSA Security Console.',
            'experience.fastweb.desc2': 'Ho sviluppato strumenti di automazione interni per richieste singole e massive relative a utenti, mailbox, condivisioni di rete e token usando Python, PowerShell e VBScript.',
            'achievements.title': 'Risultati Chiave',
            'achievements.lead': 'Impatto misurabile. Risultati comprovati. Niente fronzoli.',
            'achievements.growth.title': 'Crescita Automazione',
            'achievements.growth.desc': 'Ho scalato il portfolio di automazione di A2A da baseline a 150+ soluzioni attive in produzione in due anni. Ho coordinato team cross-funzionali e stabilito framework di governance strutturati che sono diventati lo standard operativo.',
            'achievements.growth.tag1': 'Leadership di Team',
            'achievements.growth.tag2': 'Governance',
            'achievements.transformation.metric': '4 Giorni → 5 Min',
            'achievements.transformation.title': 'Trasformazione Processo Critico',
            'achievements.transformation.desc': 'Ho convertito un processo Excel basato su GUI in una soluzione API-driven usando LINQ. Ho ridotto il tempo di esecuzione da 4 giorni a meno di 5 minuti con zero eccezioni applicative ad oggi. Ho eliminato completamente l\'intervento manuale.',
            'achievements.transformation.tag': 'Performance',
            'achievements.ai.metric': '1 su 6',
            'achievements.ai.title': 'Pioniere Integrazione AI',
            'achievements.ai.desc': 'Attualmente 1 automazione su 6 integra Intelligenza Artificiale o tecnologie avanzate inclusi LLM, Document Understanding, Computer Vision, Semantic Matching e sistemi Agentici. Sto guidando il passaggio dall\'automazione basata su regole a quella intelligente.',
            'contact.title': 'Contatti',
            'footer.copyright': '© 2026 — Tutti i diritti riservati',
            'modal.title': 'Lavoriamo Insieme',
            'modal.text': 'Pronto a trasformare la tua strategia di automazione? Discutiamo di come possiamo ottimizzare i tuoi processi aziendali.',
            'modal.email': 'Invia Email'
        }
    };
    
    // Chatbot translations
    const chatbotTranslations = {
        en: {
            responses: [
                "This is Fabio Craig Wimmer Florey's bot. Programmed to explode in 3... 2... 1...",
                "Fabio Craig Wimmer Florey isn't a professional, he's from the streets, yet he's been working with computers for 10 years.",
                "Fabio Florey mainly deals with RPA and IT automation, tools, scripts, process flows, all incredibly boring stuff.",
                "Fabio Florey? I remember him. He's a beautiful guy with an enchanting gaze and magnetic personality, I think he worked in RPA.",
                "Did you know the name Fabio comes from Latin? Specifically from 'hire him now'. Ah, I made you read it! Now you have to do it!",
                "I'm BORT, the chatbot. I'll answer badly because we don't have (PLURAL, 'we', like serious people who speak in plural), but our sponsor messages finance this free project.",
                "Fun fact: I'm programmed to be sarcastic. It's not a bug, it's a feature. Fabio thought it would be 'funny'.",
                "Between you and me, Fabio probably coded me during a coffee break. The quality shows, doesn't it?"
            ],
            intentResponses: {
                experience: [
                    "He has 6+ years in enterprise automation. Started as IAM consultant at Fastweb, then RPA developer at Beta 80 Group, Program Manager at Leonardo, and now works at A2A.",
                    "His career spans from Identity Access Management to leading automation platforms. Currently managing 150+ automations in production.",
                    "Fabio started from hands-on development and now handles A2A's automation area. Still codes in his free time."
                ],
                skills: [
                    "His core expertise: UiPath, Python, C#, PowerShell, AI integration. He specializes in no-code, low-code and traditional development approaches.",
                    "His technical stack includes automation platforms (UiPath, Automation Anywhere), development languages (Python, C#), and AI technologies (LLM, Computer Vision, NLP).",
                    "He combines technical depth with strategic vision - from coding automations to architecting enterprise platforms and leading cross-functional teams."
                ],
                achievements: [
                    "Key result: 173% automation growth at A2A, scaling from baseline to 150+ active solutions. Also transformed a critical process from 4 days to 5 minutes.",
                    "He's completely eliminated manual interventions in critical processes to achieve zero (approximately, eh, let's not be picky) exceptions in production automations."
                ],
                companies: [
                    "He worked at A2A (current), Leonardo, Beta 80 Group, and Fastweb. Each role expanded his scope from individual contributor to platform leader.",
                    "His experience spans energy (A2A), aerospace/defense (Leonardo), to consulting (Beta 80 Group)."
                ],
                contact: [
                    "Write to Fabio Craig Wimmer Florey using the buttons above!",
                    "If you want to contact Fabio Craig Wimmer Florey: send CONTACT. Just kidding, I'm not an agent, use the buttons above.",
                    "You can unlock the contact function for only €999.97 or scroll up and click the button."
                ]
            },
            chatbotHeader: {
                title: "BORT",
                status: "🟢 Online"
            },
            chatbotWelcome: "Hi! This is a chatbot created by Fabio Florey. You can ask him questions but he'll answer badly, we have (PLURAL, 'we', like serious people who speak in plural), but our sponsor messages finance this free project."
        },
        it: {
            responses: [
                "Questo è un bot di Fabio Craig Wimmer Florey. Programmato per esplodere in 3... 2... 1...",
                "Fabio Craig Wimmer Florey non è un professionista, ma è preso dalla strada, eppure sono 10 anni che lavora con i computer.",
                "Fabio Florey si occupa principalmente di RPA ed automazione IT, tool, script, flussi di processo, tutta roba noiosissima.",
                "Fabio Florey? Me lo ricordo. E' un bellissimo ragazzo dallo sguardo ammaliante e con una personalità magnetica, mi pare si occupasse di RPA.",
                "Sapevi che il nome Fabio deriva dal latino? In particolare da assumilo adesso. Ah, te lo fatto leggere! Adesso lo devi fare!"
            ],
            intentResponses: {
                experience: [
                    "Ho 6+ anni nell'automazione aziendale. Ho iniziato come consulente IAM in Fastweb, poi sviluppatore RPA in Beta 80 Group, Leonardo, e adesso lavora in A2A.",
                    "La mia carriera spazia dall'Identity Access Management alla guida di piattaforme di automazione. Attualmente gestisco 150+ automazioni in produzione.",
                    "Fabio è partito dallo sviluppo hands-on e adesso si occupa dell'area di automazione di A2A. Scrive ancora nel tempo libero."
                ],
                skills: [
                    "Le mie competenze core: UiPath, Python, C#, PowerShell, integrazione AI. Mi specializzo in approcci no-code, low-code e sviluppo tradizionale.",
                    "Il mio stack tecnico include piattaforme di automazione (UiPath, Automation Anywhere), linguaggi di sviluppo (Python, C#), e tecnologie AI (LLM, Computer Vision, NLP).",
                    "Combino profondità tecnica con visione strategica - dal coding di automazioni all'architettura di piattaforme aziendali e guida di team cross-funzionali."
                ],
                achievements: [
                    "Risultato chiave: 173% di crescita automazione in A2A, scalando da baseline a 150+ soluzioni attive. Ho anche trasformato un processo critico da 4 giorni a 5 minuti.",
                    "Sta eliminato completamente gli interventi manuali nei processi critici allo scopo di raggiungere zero (circa, eh, ora non facciamo i pignoli) eccezioni nelle automazioni in produzione."
                ],
                companies: [
                    "Ha lavorato in A2A (attuale), Leonardo, Beta 80 Group, e Fastweb. Ogni ruolo ha espanso il mio scope da contributore individuale a leader di piattaforma.",
                    "La sua esperienza spazia dall'energia (A2A), aerospazio/difesa (Leonardo), alla consulenza (Beta 80 Group)"
                ],
                contact: [
                    "Scrivi a Fabio Craig Wimmer Florey usando i pulsanti sopra!",
                    "Se vuoi contattare Fabio Craig Wimmer Florey: invia CONTATTO. Scherzo, non sono un agente, usa i bottoni sopra.",
                    "Puoi sbloccare la funzione contatti a soli 999,97€ o scrollare sopra e cliccare sul bottone."
                ]
            },
            chatbotHeader: {
                title: "BORT",
                status: "🟢 Online"
            },
            chatbotWelcome: "Ciao! Questo è un chatbot creato da Fabio Florey. Puoi fargli delle domande ma risponderà male, noi abbiamo (PLURALE, 'abbiamo', come la gente seria che parla al plurale), in compenso i messaggi dei nostri sponsor finanziano questo progetto gratuito."
        }
    };
    
    let currentLang = 'en';
    
    // Get language from URL parameter or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const storedLang = localStorage.getItem('preferred-language');
    
    if (urlLang && (urlLang === 'en' || urlLang === 'it')) {
        currentLang = urlLang;
    } else if (storedLang && (storedLang === 'en' || storedLang === 'it')) {
        currentLang = storedLang;
    }
    
    function updateContent(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update chatbot content if it exists
        updateChatbotContent(lang);
    }
    
    function updateChatbotContent(lang) {
        // Update global chatbot variables if they exist
        if (window.responses && chatbotTranslations[lang]) {
            window.responses = chatbotTranslations[lang].responses;
            window.intentResponses = chatbotTranslations[lang].intentResponses;
        }
        
        // Update chatbot interface if open
        const chatbotTitle = document.querySelector('.chatbot-info h4');
        const chatbotStatus = document.querySelector('.chatbot-status');
        const welcomeMessage = document.querySelector('.bot-message .message-content');
        
        if (chatbotTitle && chatbotTranslations[lang]) {
            chatbotTitle.textContent = chatbotTranslations[lang].chatbotHeader.title;
        }
        if (chatbotStatus && chatbotTranslations[lang]) {
            chatbotStatus.textContent = chatbotTranslations[lang].chatbotHeader.status;
        }
        if (welcomeMessage && chatbotTranslations[lang]) {
            welcomeMessage.textContent = chatbotTranslations[lang].chatbotWelcome;
        }
    }
    
    function setActiveLanguage(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }
    
    function switchLanguage(lang) {
        currentLang = lang;
        updateContent(lang);
        setActiveLanguage(lang);
        
        // Store preference
        localStorage.setItem('preferred-language', lang);
        
        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
    }
    
    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        updateContent(currentLang);
        setActiveLanguage(currentLang);
        
        // Add event listeners to language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                switchLanguage(lang);
            });
        });
    });
    
    // Export for chatbot use
    window.getCurrentLanguage = () => currentLang;
    window.getChatbotTranslations = () => chatbotTranslations[currentLang];
    
})();