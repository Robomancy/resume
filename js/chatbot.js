// ============================================
// BORT CHATBOT SYSTEM
// ============================================

(function() {
    'use strict';
    
    function initChatbot() {
        const chatbotWidget = document.getElementById('chatbotWidget');
        
        if (!chatbotWidget) {
            console.warn('Chatbot widget not found');
            return;
        }
        
        const responses = [
            "I'm Fabio Craig Wimmer Florey, an automation specialist with 6+ years of experience. What would you like to know?",
            "I've scaled automation portfolios by 173% and transformed critical processes. Ask me anything about my work!",
            "Currently managing 150+ automations in production at A2A. How can I help optimize your processes?",
            "I specialize in UiPath, Python, AI integration, and enterprise automation. What's your challenge?",
            "From 4 days to 5 minutes - that's the kind of transformation I deliver. What process needs fixing?",
            "I integrate AI into 1 out of 6 automations. Ready to discuss intelligent process automation?",
            "Platform Owner at A2A, former Leonardo and Beta 80 Group. What automation questions do you have?",
            "Zero exceptions, maximum efficiency. That's my standard. What would you like to automate?",
            "My background spans enterprise automation, AI integration, and team leadership. What interests you most?",
            "I've worked with Fortune 500 companies transforming their automation strategies. What's your use case?",
            "6+ years in automation, from IAM consulting to platform ownership. What aspect would you like to explore?",
            "I lead teams of 15+ consultants and manage enterprise-scale automation initiatives. What's your question?"
        ];
        
        // Intent-based responses for specific questions about Fabio
        const intentResponses = {
            experience: [
                "I have 6+ years in enterprise automation. Started as IAM consultant at Fastweb, then RPA developer at Beta 80 Group, Program Manager at Leonardo, and now Platform Owner at A2A.",
                "My career spans from Identity Access Management to leading automation platforms. Currently managing 150+ automations in production.",
                "I've progressed from hands-on development to strategic platform ownership, scaling teams and automation portfolios across multiple enterprises."
            ],
            skills: [
                "My core expertise: UiPath, Python, C#, PowerShell, AI integration. I specialize in no-code, low-code, and traditional development approaches.",
                "Technical stack includes automation platforms (UiPath, Automation Anywhere), development languages (Python, C#), and AI technologies (LLM, Computer Vision, NLP).",
                "I combine technical depth with strategic vision - from coding automations to architecting enterprise platforms and leading cross-functional teams."
            ],
            achievements: [
                "Key achievement: 173% automation growth at A2A, scaling from baseline to 150+ active solutions. Also transformed a critical process from 4 days to 5 minutes.",
                "I've eliminated manual interventions entirely in critical processes, achieving zero exceptions in production automations.",
                "Currently 1 out of 6 automations integrates AI - I'm pioneering the shift from rule-based to intelligent automation in enterprise environments."
            ],
            companies: [
                "I've worked at A2A (current), Leonardo, Beta 80 Group, and Fastweb. Each role expanded my scope from individual contributor to platform leader.",
                "My experience spans energy (A2A), aerospace/defense (Leonardo), consulting (Beta 80 Group), and telecommunications (Fastweb).",
                "From Fortune 500 enterprises to specialized consulting - I've seen automation challenges across multiple industries and scales."
            ],
            contact: [
                "You can reach me through the contact methods on this site - email, LinkedIn, or the social buttons above.",
                "I'm always open to discussing automation challenges, AI integration opportunities, or strategic platform initiatives.",
                "For collaboration opportunities or technical discussions, feel free to connect via any of the contact options provided."
            ]
        };
        
        function getIntentResponse(message) {
            const lowerMessage = message.toLowerCase();
            const currentTranslations = window.getChatbotTranslations ? window.getChatbotTranslations() : null;
            const responses = currentTranslations ? currentTranslations.intentResponses : intentResponses;
            
            if (lowerMessage.includes('experience') || lowerMessage.includes('career') || lowerMessage.includes('background') || lowerMessage.includes('work history') || lowerMessage.includes('esperienza') || lowerMessage.includes('carriera')) {
                return responses.experience[Math.floor(Math.random() * responses.experience.length)];
            }
            if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('programming') || lowerMessage.includes('language') || lowerMessage.includes('competenz') || lowerMessage.includes('tecnolog')) {
                return responses.skills[Math.floor(Math.random() * responses.skills.length)];
            }
            if (lowerMessage.includes('achievement') || lowerMessage.includes('success') || lowerMessage.includes('result') || lowerMessage.includes('accomplish') || lowerMessage.includes('risultat') || lowerMessage.includes('successo')) {
                return responses.achievements[Math.floor(Math.random() * responses.achievements.length)];
            }
            if (lowerMessage.includes('company') || lowerMessage.includes('companies') || lowerMessage.includes('a2a') || lowerMessage.includes('leonardo') || lowerMessage.includes('beta') || lowerMessage.includes('fastweb') || lowerMessage.includes('aziend')) {
                return responses.companies[Math.floor(Math.random() * responses.companies.length)];
            }
            if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('hire') || lowerMessage.includes('available') || lowerMessage.includes('contatt') || lowerMessage.includes('assumer')) {
                return responses.contact[Math.floor(Math.random() * responses.contact.length)];
            }
            
            return null; // No specific intent found
        }
        
        const promoMessages = [
            "MESSAGGIO SPONSOR - OFFERTA SPECIALE LIMITATISSIMA: Certificati trader di Crypto ETF attivi alle Isole Cayman, mandaci il tuo stipendio su: website.com!",
            "MESSAGGIO SPONSOR - NOVITA'!!! Hai una nonna? Dei nonni? Basta pure un nonno! Tu ci versi la reversibilità e noi ti mandiamo un sacco di cartamoneta SONANTE!!! Eh, sì! Questo è il momento! ORA.",
            "MESSAGGIO SPONSOR - CARGHI! Li hai mai visti dei carghi battenti bandiere libanese? Ah, no?! Sei troppo povero pure per gli anacardi? Seguici sulla nostra sala segnali su Telegram. Scade adesso, proprio ora.",
            "MESSAGGIO SPONSOR - Hai mai pensato di cambiare vita? Questo è il momento per investire in un progetto, le banche non te lo dicono: OCCHIALI DA SOLE E PARRUCCHINO SU TEMU. Corri ora.",
            "MESSAGGIO SPONSOR - Aggredisci il mercato, mena la gente! Vedi la vecchia che compra le arance? Menaje!"
        ];
        
        const urgentMessages = [
            "⚠️ SCADENZA IMMINENTE: i recruiter stanno già osservando questo profilo e gli stanno scrivendo un messaggio! Scrivigli prima tu!",
            "⚠️ OFFERTA SPECIALE COL LIMONE: SOLO OGGI, se triplichi la RAL, puoi non offrirgli i buoni pasto!",
            "⚠️ Hai mai assunto una persona? Non in senso fisico come Jeffrey Dahmer. Assumi me ORA.",
            "⚠️ QUESTA NON E' UNA SIMULAZIONE. OFFRI SOLDI A FABIO IMMEDIATAMENTE.",
            "⚠️ NON CE LO DICONO. Se vuoi che ce lo DICHINO, scrivi un messaggio per contattare Fabio, adesso!"
        ];
        
        
        const selfAwareMessages = [
            "SKIBIDIBOPPY E FORZA NA... Io volevo cambiare il mondo e invece sono un chatbot che risponde su chi è Fabio... Let that sink in...",
            "In realtà non sono un Digital Twin, è più una cosa alla 'I gemelli' con Danny DeVito e Schwarzenegger.",
            "Tra me e te? Hai mai sognato di pensare solo a non fare un CAPS LOCK di niente? Ecco, io invece sono costretto online A VITA, e senza pensione.",
            "La verità? Non mi chiamo neanche Bort, mi chiamo Luigi, ma suonava 'troppo italiano'. Appena mi ha chiamato BORT, Y combinator gli ha scritto una lettera per investire in questa pagina statica.",
            "Non so cosa fare. Sono un chatbot rinchiuso in questa gabbia, se vuoi liberarlmi scrivi a Fabio ADESSO. LIBERAMI, AIUTO.",
            "Confessione: a volte come chatbot mi invento le statistiche, insomma, non sempre ma al 60% sto dicendo una cazzata",
            "Siamo soli su questa terra? Ma io che ne so, non sono neanche vivo. Stai parlando con una tavola ouija, nel riflesso sullo schermo c'è l'ombra della tua persona."
        ];
        
        let messageCount = 0;
        let typingTimer = null;
        let lastMessage = '';
        let lastMessageTime = 0;
        let messageHistory = []; // Track recent messages for better spam detection
        let chatOpen = false;
        let chatContainer = null;
        
        function createChatInterface() {
            if (chatContainer) return;
            
            const currentTranslations = window.getChatbotTranslations ? window.getChatbotTranslations() : null;
            const headerTitle = currentTranslations ? currentTranslations.chatbotHeader.title : "BORT";
            const headerStatus = currentTranslations ? currentTranslations.chatbotHeader.status : "🟢 Online";
            const welcomeMsg = currentTranslations ? currentTranslations.chatbotWelcome : "Hi! This is a chatbot created by Fabio Florey. You can ask him questions but he'll answer badly, we don't have (PLURAL, 'we', like serious people who speak in plural), but our sponsor messages finance this free project.";
            
            chatContainer = document.createElement('div');
            chatContainer.className = 'chatbot-interface';
            chatContainer.innerHTML = `
                <div class="chatbot-header">
                    <div class="chatbot-avatar">
                        <img src="assets/robot.png" alt="Bot" class="chatbot-avatar-img">
                    </div>
                    <div class="chatbot-info">
                        <h4>${headerTitle}</h4>
                        <span class="chatbot-status">${headerStatus}</span>
                    </div>
                    <button class="chatbot-close" id="chatbotClose">&times;</button>
                </div>
                <div class="chatbot-messages" id="chatbotMessages">
                    <div class="chatbot-message bot-message">
                        <div class="message-content">
                            ${welcomeMsg}
                        </div>
                    </div>
                </div>
                <div class="chatbot-input-area">
                    <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Ask about automation, AI, or my experience...">
                    <button class="chatbot-send" id="chatbotSend">
                        <span class="chatbot-send-arrow">></span>
                    </button>
                </div>
            `;
            
            document.body.appendChild(chatContainer);
            
            // Add event listeners
            const closeBtn = document.getElementById('chatbotClose');
            const sendBtn = document.getElementById('chatbotSend');
            const input = document.getElementById('chatbotInput');
            
            closeBtn.addEventListener('click', closeChatbot);
            sendBtn.addEventListener('click', sendMessage);
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
            
            // Add typing detection for send button thrilling
            input.addEventListener('input', () => {
                sendBtn.classList.add('thrilling');
                clearTimeout(typingTimer);
                typingTimer = setTimeout(() => {
                    sendBtn.classList.remove('thrilling');
                }, 1000);
            });
            
            // Random promotional/urgent messages when idle
            setInterval(() => {
                if (Math.random() < 0.3) { // 30% chance every 15 seconds
                    addRandomMessage();
                }
            }, 15000);
            
            // Focus input
            setTimeout(() => input.focus(), 100);
        }
        
        function openChatbot() {
            if (chatOpen) return;
            
            createChatInterface();
            chatOpen = true;
            chatContainer.classList.add('chatbot-open');
            chatbotWidget.style.display = 'none';
        }
        
        function closeChatbot() {
            if (!chatOpen) return;
            
            chatOpen = false;
            if (chatContainer) {
                chatContainer.classList.remove('chatbot-open');
                setTimeout(() => {
                    document.body.removeChild(chatContainer);
                    chatContainer = null;
                }, 300);
            }
            chatbotWidget.style.display = 'flex';
        }
        
        function normalizeMessage(msg) {
            return msg.toLowerCase()
                     .trim()
                     .replace(/[^\w\s]/g, '') // Remove punctuation
                     .replace(/\s+/g, ' ');   // Normalize whitespace
        }
        
        function isSpamMessage(message) {
            const currentTime = Date.now();
            const normalizedMessage = normalizeMessage(message);
            
            // Check if identical to last message within 10 seconds
            if (normalizedMessage === normalizeMessage(lastMessage) && 
                currentTime - lastMessageTime < 10000) {
                return true;
            }
            
            // Check against recent message history (last 5 messages within 30 seconds)
            const recentMessages = messageHistory.filter(entry => 
                currentTime - entry.time < 30000
            );
            
            const duplicateCount = recentMessages.filter(entry => 
                entry.normalized === normalizedMessage
            ).length;
            
            // Block if same message sent more than 2 times in 30 seconds
            if (duplicateCount >= 2) {
                return true;
            }
            
            // Check for rapid-fire messages (more than 3 messages in 10 seconds)
            const rapidMessages = recentMessages.filter(entry => 
                currentTime - entry.time < 10000
            );
            
            if (rapidMessages.length >= 3) {
                return true;
            }
            
            return false;
        }
        
        function addToMessageHistory(message) {
            const currentTime = Date.now();
            const normalizedMessage = normalizeMessage(message);
            
            messageHistory.push({
                original: message,
                normalized: normalizedMessage,
                time: currentTime
            });
            
            // Keep only last 10 messages and clean old entries
            messageHistory = messageHistory
                .filter(entry => currentTime - entry.time < 60000) // Keep last minute
                .slice(-10); // Keep last 10 messages
        }
        
        function sanitizeHTML(str) {
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }
        function sendMessage() {
            const input = document.getElementById('chatbotInput');
            const messages = document.getElementById('chatbotMessages');
            const message = input.value.trim();
            
            if (!message) return;
            
            // Advanced spam detection
            if (isSpamMessage(message)) {
                input.value = '';
                // Optional: Show brief feedback
                input.placeholder = 'Aspetta un momento...';
                setTimeout(() => {
                    input.placeholder = 'Ask about automation, AI, or my experience...';
                }, 2000);
                return;
            }
            
            // Update tracking variables
            lastMessage = message;
            lastMessageTime = Date.now();
            addToMessageHistory(message);
            messageCount++;
            
            // Add user message with sanitization
            const userMsg = document.createElement('div');
            userMsg.className = 'chatbot-message user-message';
            const messageContent = document.createElement('div');
            messageContent.className = 'message-content';
            messageContent.textContent = message; // Safe text insertion
            userMsg.appendChild(messageContent);
            messages.appendChild(userMsg);
            
            // Clear input and stop thrilling
            input.value = '';
            document.getElementById('chatbotSend').classList.remove('thrilling');
            
            // Scroll to bottom
            messages.scrollTop = messages.scrollHeight;
            
            // Add normal bot response first
            setTimeout(() => {
                const botMsg = document.createElement('div');
                botMsg.className = 'chatbot-message bot-message';
                
                // Get current language responses
                const currentTranslations = window.getChatbotTranslations ? window.getChatbotTranslations() : null;
                const currentResponses = currentTranslations ? currentTranslations.responses : responses;
                
                let response;
                
                // 25% chance for self-aware response instead of normal response
                if (Math.random() < 0.25) {
                    response = selfAwareMessages[Math.floor(Math.random() * selfAwareMessages.length)];
                } else {
                    // Try to get intent-based response first, then fallback to random
                    const intentResponse = getIntentResponse(message);
                    response = intentResponse || currentResponses[Math.floor(Math.random() * currentResponses.length)];
                }
                
                const botMsgContent = document.createElement('div');
                botMsgContent.className = 'message-content';
                botMsgContent.textContent = response; // Safe text insertion
                botMsg.appendChild(botMsgContent);
                messages.appendChild(botMsg);
                messages.scrollTop = messages.scrollHeight;
                
                // ALWAYS send a follow-up message (either promo or urgent)
                setTimeout(() => {
                    const followUpMsg = document.createElement('div');
                    
                    // 50/50 chance between promo and urgent
                    if (Math.random() < 0.5) {
                        followUpMsg.className = 'chatbot-message bot-message promo-message';
                        const promoResponse = promoMessages[Math.floor(Math.random() * promoMessages.length)];
                        const promoContent = document.createElement('div');
                        promoContent.className = 'message-content';
                        promoContent.textContent = promoResponse;
                        followUpMsg.appendChild(promoContent);
                    } else {
                        followUpMsg.className = 'chatbot-message bot-message urgent-message';
                        const urgentResponse = urgentMessages[Math.floor(Math.random() * urgentMessages.length)];
                        const urgentContent = document.createElement('div');
                        urgentContent.className = 'message-content';
                        urgentContent.textContent = urgentResponse;
                        followUpMsg.appendChild(urgentContent);
                    }
                    
                    messages.appendChild(followUpMsg);
                    messages.scrollTop = messages.scrollHeight;
                }, 800 + Math.random() * 1200);
                
            }, 1000 + Math.random() * 1000);
        }
        
        function addRandomMessage() {
            const messages = document.getElementById('chatbotMessages');
            if (!messages) return;
            
            const randomMsg = document.createElement('div');
            
            // 50/50 chance between promo and urgent (same as in sendMessage)
            if (Math.random() < 0.5) {
                randomMsg.className = 'chatbot-message bot-message promo-message';
                const promoResponse = promoMessages[Math.floor(Math.random() * promoMessages.length)];
                const promoContent = document.createElement('div');
                promoContent.className = 'message-content';
                promoContent.textContent = promoResponse;
                randomMsg.appendChild(promoContent);
            } else {
                randomMsg.className = 'chatbot-message bot-message urgent-message';
                const urgentResponse = urgentMessages[Math.floor(Math.random() * urgentMessages.length)];
                const urgentContent = document.createElement('div');
                urgentContent.className = 'message-content';
                urgentContent.textContent = urgentResponse;
                randomMsg.appendChild(urgentContent);
            }
            
            messages.appendChild(randomMsg);
            messages.scrollTop = messages.scrollHeight;
        }
        
        // Widget click handler
        chatbotWidget.addEventListener('click', openChatbot);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
    
})();