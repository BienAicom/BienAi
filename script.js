// --- DATA & CONFIGURATION ---
const steps = [
    { id: "skills", type: "multi-select", question: "What skills do you have?", options: ["Admin & organisation", "Social media management", "Design & creative", "Customer support", "Tech & programming skills", "Writing & content creation", "Data entry & research", "Project & team management"] },
    { id: "internet", type: "select", question: "Is your internet reliable?", options: ["Yes, it's fast and stable.", "Sometimes it's slow.", "No, it's unreliable."] },
    { id: "source", type: "select", question: "Where did you find Bien AI?", options: ["Tiktok", "Instagram", "Facebook", "Others"] },
    { id: "ai_exp", type: "select", question: "Have you used AI tools?", options: ["Yes, regularly.", "Tried a few times.", "Not yet."] },
    { id: "roadmap", type: "info", question: "Here's your roadmap to learn AI and grow as a VA.", sub: "📈 Based on your profile, we've optimized your path." },
    { id: "hours", type: "select", question: "How many hours can you learn each day?", options: ["1-2 hours a day", "3-4 hours a day", "Less than 1 hour a day"] },
    { id: "motivation", type: "select", question: "Are you self motivated?", options: ["Yes, i worked definitely.", "Sometimes depend on task.", "No, indeed supervision."] },
    { id: "deadlines", type: "select", question: "Do you meet deadlines?", options: ["Yes, I always meet them.", "Usually, unless emergencies.", "No, often run late."] },
    { id: "ready", type: "select", question: "Are you ready to work from home?", options: ["Yes, I'm ready.", "I'm willing to learn.", "No, I prefer office work."] },
    { id: "name", type: "input", question: "What should I call you?", placeholder: "Write your nickname!" },
    { id: "analyzing", type: "loading", text: "Analyzing your answers...", sub: "Building your Bien AI profile" },
    { id: "potential", type: "info", question: "You have amazing potential!", sub: "📈 I expect you to finish this by this month." },
    { id: "pain_traffic", type: "story", title: "Life wasted in traffic commute", desc: "Hours stolen from your day, energy drained before you even start.", emoji: "🚗" },
    { id: "pain_office", type: "story", title: "You hate your office", desc: "Toxic environment and the feeling of being stuck in a box.", emoji: "🏢" },
    { id: "pain_salary", type: "story", title: "Salary is not enough", desc: "Working hard but barely surviving. You deserve more.", emoji: "💸" },
    { id: "final_onboarding", type: "info", question: "Nice! Here's how you grow as a VA with Bien AI.", sub: "Welcome to the future of work." }
];

const programLevels = {
    1: { title: "Start your journey as a VA", desc: "<p>Welcome to Bien AI! Today is the start of your transformation. Being a VA is not just about tasks, it is about providing value using AI tools.</p>" },
    2: { title: "Pick your niche", desc: "<p>Finding your specialty is the key to higher pay. Don't be a jack of all trades; be a master of one.</p>" },
    3: { title: "Master essential VA tools", desc: "<p>From Google Workspace to Trello, these are the bread and butter of every professional Virtual Assistant.</p>" },
    4: { title: "Build portfolio that gets client", desc: "<p>Show, don't just tell. We will create a visual resume that proves you can do the job.</p>" },
    5: { title: "Cover letters that get hired", desc: "<p>Stop copy-pasting! Learn how to write letters that speak directly to the client's pain points.</p>" },
    6: { title: "Set rates that make real money", desc: "<p>Know your worth. We will calculate your overhead and expertise to find your sweet spot.</p>" },
    7: { title: "Get your first client fast", desc: "<p>The first one is the hardest. Here are the strategies to break the ice and get that first contract.</p>" },
    8: { title: "Find high paying VA jobs", desc: "<p>Beyond Upwork and OLJ, learn where the 'whales' or high-paying clients are hiding.</p>" },
    9: { title: "Write proposals that win jobs", desc: "<p>Structure your proposal to win. Highlight the solution, not just your skills.</p>" },
    10: { title: "Protect yourself with contracts", desc: "<p>Professionalism means having a solid agreement. Learn the basic clauses you need.</p>" },
    11: { title: "Get paid on time, every time", desc: "<p>Invoicing and payment gateways. Never chase a client for your hard-earned money again.</p>" },
    12: { title: "Keep clients coming back", desc: "<p>Retention is easier than acquisition. Learn how to be indispensable to your clients.</p>" },
    13: { title: "Handle difficult clients", desc: "<p>Communication is key when things get tough. Learn how to manage expectations and conflicts.</p>" },
    14: { title: "Master professional communication", desc: "<p>Email etiquette and Slack mastery. Speak like a pro, get paid like a pro.</p>" },
    15: { title: "Work smarter and faster with AI", desc: "<p>This is where Bien AI shines. Automate your repetitive tasks and save hours of work.</p>" },
    16: { title: "Skills that double your rate", desc: "<p>High-income skills like technical setup and automation that clients are willing to pay extra for.</p>" },
    17: { title: "Build reputation that brings clients", desc: "<p>Personal branding. Make the clients find you instead of you finding them.</p>" },
    18: { title: "From side hustle to real income", desc: "<p>Scaling your VA business. Transitioning from part-time to a full-time career.</p>" },
    19: { title: "Master crisis management", desc: "<p>What to do when things go wrong. Reliability is what builds long-term trust.</p>" },
    20: { title: "Your long term success plan", desc: "<p>Congratulations! You reached Level 20. Now, let's plot your path for the next 12 months.</p>" }
};

const featuredCourses = ["The future of works: how ai changes va roles", "How to get your first client", "What is generative ai", "Prompt engineering fundamentals", "Building trust & long term client relationship", "What are AI agents"];
const allCoursesList = ["Building a personal brand as an ai-skilled va", "Building a va portfolio with no experience", "Raising your rates without losing clients", "Understanding your niche as a va", "Retainer clients, structuring long-term engagement", "Tracking your hours deliverables", "Problem solving & critical thinking", "Active listening & understanding client needs", "Emotional intelligence in remote works", "Prompting for work tasks", "Ai tools stack for beginners VAs", "Using ai for client works", "How ai thinks: prompting without overthinking", "Ai + productivity system", "How clients view ai-assisted works", "Building trust before you're hired", "Ai automation fundamentals", "Client research & lead generation using ai", "Direct clients Vs agencies: what the difference?", "Ai tools Vs skills: what actually makes you valuable", "Why a portfolio matters", "Resume Vs online profiles", "How clients finds vas online", "Optimizing online profiles", "How to read job post like a va", "Canva for VA workplace", "Scaling from solo va to ai team manager", "Email management and automation", "Adaptability & learning agility", "Decision making with ai support", "Positioning yourself as an ai skilled va", "Ai for virtual assistant: the new skills era", "Understanding automation & workflow thinking", "Ai powered social media management", "Ai for content writing", "Professional communication", "Chat gpt for virtual assistant", "Va tools masteries"];

const recommendedAITools = [
    { name: "ChatGPT", cat: "General", desc: "Best for research & brainstorming.", link: "https://chat.com" },
    { name: "Claude.ai", cat: "Writing", desc: "Most human-like writing & coding assistance.", link: "https://claude.ai" },
    { name: "Canva Magic Studio", cat: "Design", desc: "AI-powered design & image generation.", link: "https://canva.com" },
    { name: "Perplexity", cat: "Research", desc: "AI search engine with real-time citations.", link: "https://perplexity.ai" },
    { name: "Otter.ai", cat: "Meetings", desc: "Transcribe meetings & summarize notes.", link: "https://otter.ai" },
    { name: "Grammarly AI", cat: "Editing", desc: "Fix grammar & tone in real-time.", link: "https://grammarly.com" }
];

// --- APP STATE ---
let currentStep = 0;
let userLevel = parseInt(localStorage.getItem('bien_user_level')) || 1;
let completedCourses = JSON.parse(localStorage.getItem('bien_completed_courses')) || [];
let selectedSkills = JSON.parse(localStorage.getItem('bien_user_skills')) || [];
let userNickname = localStorage.getItem('bien_user_nickname') || "Freelancer";
let chatMessages = [];

// --- DOM ELEMENTS ---
const app = document.getElementById('app');
const content = document.getElementById('content');
const nextBtn = document.getElementById('nextBtn');
const splash = document.getElementById('splash');
const mainHeader = document.getElementById('mainHeader');
const bottomNav = document.getElementById('bottomNav');
const footerArea = document.getElementById('footer-area');

// --- INITIALIZATION ---
setTimeout(() => {
    splash.classList.add('hidden');
    app.classList.remove('hidden');
    if (localStorage.getItem('bien_onboarding_done')) {
        showDashboard();
    } else {
        renderStep();
    }
}, 2500);

// --- RENDERERS ---
function renderStep() {
    const step = steps[currentStep];
    if (currentStep >= steps.length) { 
        localStorage.setItem('bien_onboarding_done', 'true');
        showDashboard(); 
        return; 
    }
    content.innerHTML = "";
    nextBtn.classList.remove('hidden');

    if (step.type === "multi-select" || step.type === "select") {
        content.innerHTML = `<h2 class="text-3xl font-bold mb-8 leading-tight">${step.question}</h2>`;
        const container = document.createElement('div');
        container.className = "space-y-3";
        step.options.forEach(opt => {
            const btn = document.createElement('button');
            const isSelected = selectedSkills.includes(opt);
            btn.className = `w-full text-left p-5 rounded-2xl bg-zinc-900 border border-zinc-800 transition-all ${isSelected ? 'yellow-border' : ''}`;
            btn.innerText = opt;
            btn.onclick = () => {
                if(step.type === "select") {
                    container.querySelectorAll('button').forEach(b => b.classList.remove('yellow-border'));
                    selectedSkills = [opt];
                } else {
                    btn.classList.toggle('yellow-border');
                    if(selectedSkills.includes(opt)) selectedSkills = selectedSkills.filter(s => s !== opt);
                    else selectedSkills.push(opt);
                }
                localStorage.setItem('bien_user_skills', JSON.stringify(selectedSkills));
            };
            container.appendChild(btn);
        });
        content.appendChild(container);
    } else if (step.id === "name") {
        content.innerHTML = `<h2 class="text-3xl font-bold mb-8">${step.question}</h2><input type="text" id="userInput" oninput="saveNickname(this.value)" class="w-full bg-zinc-900 p-6 rounded-2xl border border-zinc-800 focus:border-yellow-400 outline-none text-xl" placeholder="${step.placeholder}">`;
    } else if (step.type === "loading") {
        nextBtn.classList.add('hidden');
        content.innerHTML = `<div class="flex flex-col items-center justify-center h-full py-20 text-center"><div class="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-8"></div><h2 class="text-2xl font-bold">${step.text}</h2><p class="text-zinc-500 mt-2">${step.sub}</p></div>`;
        setTimeout(() => { currentStep++; renderStep(); }, 3000);
    } else if (step.type === "info" || step.type === "story") {
        content.innerHTML = `<div class="flex flex-col items-center text-center py-10 space-y-6">${step.emoji ? `<span class="text-8xl">${step.emoji}</span>` : '<h1 class="text-4xl font-black text-yellow-400">BIEN AI</h1>'}<h2 class="text-4xl font-bold leading-tight">${step.question || step.title}</h2><p class="text-xl text-zinc-400">${step.sub || step.desc}</p></div>`;
    }
}

function saveNickname(val) {
    userNickname = val;
    localStorage.setItem('bien_user_nickname', val);
}

// --- TABS & NAVIGATION ---
function switchTab(tab) {
    // 1. Tigil agad lahat ng boses paglipat ng tab
    window.speechSynthesis.cancel(); 

    // 2. Listahan ng buttons sa baba
    const navs = ['program', 'course', 'tools', 'chats'];
    
    // 3. I-reset ang kulay ng lahat ng buttons
    navs.forEach(t => {
        const el = document.getElementById(`nav-${t}`);
        if(el) el.classList.remove('text-yellow-400');
    });

    // 4. Highlight yung pinindot na button
    const activeNav = document.getElementById(`nav-${tab}`);
    if(activeNav) activeNav.classList.add('text-yellow-400');

    // 5. Logic para sa paglipat ng screen
    if(tab === 'program') renderProgram();
    else if(tab === 'course') renderCourseTab();
    else if(tab === 'tools') renderTools();
    else if(tab === 'chats') renderChats();
    else if(tab === 'settings') renderSettings(); 

    // 6. Scroll sa pinakataas
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderProgram() {
    const data = programLevels[userLevel] || { title: "Keep Growing!", desc: "<p>Stay consistent!</p>" };
    content.innerHTML = `<div class="fade-in space-y-6"><div class="bg-zinc-900 p-6 rounded-3xl border border-yellow-400/20"><div class="flex justify-between items-start"><span class="text-yellow-400 font-bold text-xs uppercase tracking-widest">Level ${userLevel}</span><button onclick="speak('${data.desc.replace(/'/g, "\\'")}')" class="p-2 bg-zinc-800 rounded-full">🔊</button></div><h2 class="text-2xl font-bold mt-2">${data.title}</h2><div class="text-zinc-400 mt-4 text-sm">${data.desc}</div><div class="mt-8 flex items-center justify-between"><button onclick="completeLevel()" class="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black text-sm">MARK AS DONE</button><span class="text-sm font-bold text-zinc-500">${(userLevel/20 * 100).toFixed(0)}%</span></div></div><h3 class="text-lg font-bold text-zinc-400 pt-4 uppercase text-[10px] tracking-widest">Next Lessons</h3><div class="space-y-3 pb-10">${renderNextLevels()}</div></div>`;
    updateHeaderProgress();
}

function renderNextLevels() {
    let html = "";
    for(let i = userLevel + 1; i <= userLevel + 3; i++) {
        if(i <= 20) html += `<div class="p-5 bg-zinc-900/50 rounded-2xl flex justify-between items-center opacity-40 border border-zinc-800"><span class="text-sm font-medium">Day ${i}: ${programLevels[i].title}</span><span>🔒</span></div>`;
    }
    return html || `<div class="p-5 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl text-yellow-400 text-center font-bold text-xs">Day 21-40 coming soon...</div>`;
}

function renderCourseTab() {
    content.innerHTML = `<div class="fade-in space-y-8 pb-10"><div><div class="flex justify-between items-end mb-4 px-2"><h2 class="text-xl font-black tracking-tighter uppercase">Featured</h2><span class="text-[10px] text-zinc-500 font-bold tracking-widest">SLIDE LEFT →</span></div><div class="flex overflow-x-auto gap-4 hide-scroll px-2 pb-2">${featuredCourses.map(course => `<div onclick="openCourse('${course}')" class="min-w-[260px] bg-zinc-900 rounded-[32px] border border-zinc-800 overflow-hidden active:scale-95 transition-all"><div class="h-32 bg-gradient-to-br from-yellow-400/20 to-zinc-900 flex items-center justify-center text-3xl">${completedCourses.includes(course) ? '✅' : '🚀'}</div><div class="p-5"><span class="text-[9px] font-black text-yellow-400 uppercase tracking-widest">Mastery</span><h3 class="text-sm font-bold mt-1 h-10 line-clamp-2 uppercase">${course}</h3><div class="mt-4 flex justify-between items-center text-[10px] font-bold text-zinc-500"><span>5 LESSONS</span><span class="${completedCourses.includes(course) ? 'text-yellow-400' : ''}">${completedCourses.includes(course) ? 'COMPLETED' : 'START →'}</span></div></div></div>`).join('')}</div></div><div class="px-2"><h2 class="text-xl font-black tracking-tighter uppercase mb-4">All Courses (${allCoursesList.length})</h2><div class="space-y-3">${allCoursesList.map(course => `<div onclick="openCourse('${course}')" class="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-2xl border border-zinc-800 transition-all"><div class="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-xl shrink-0">${completedCourses.includes(course) ? '✅' : '📖'}</div><div class="flex-grow"><h4 class="text-xs font-bold leading-snug uppercase ${completedCourses.includes(course) ? 'text-zinc-500 line-through' : 'text-white'}">${course}</h4><p class="text-[9px] text-zinc-500 mt-1 uppercase font-black tracking-widest">5 Lessons • AI Powered</p></div></div>`).join('')}</div></div></div>`;
}

function renderTools() {
    const recommendedAITools = [
        { name: "ChatGPT", desc: "Best for research & brainstorming.", link: "https://chatgpt.com" },
        { name: "Claude.ai", desc: "Most human-like writing assistance.", link: "https://claude.ai" },
        { name: "Canva Magic Studio", desc: "AI-powered design & image generation.", link: "https://canva.com" },
        { name: "Perplexity", desc: "AI search engine with real-time citations.", link: "https://perplexity.ai" },
        { name: "Otter.ai", desc: "Transcribe meetings & summarize notes.", link: "https://otter.ai" },
        { name: "Grammarly AI", desc: "Fix grammar & tone in real-time.", link: "https://grammarly.com" }
    ];

    content.innerHTML = `
        <div class="fade-in space-y-8 pb-24 px-2">
            <div>
                <h2 class="text-2xl font-black uppercase tracking-tighter">VA Power Tools</h2>
                <p class="text-zinc-500 text-[10px] font-black uppercase tracking-widest mt-1">Efficiency is your edge</p>
            </div>

            <div class="grid grid-cols-2 gap-3">
                <div onclick="openTool('AI & Prompts')" class="bg-zinc-900 p-4 rounded-[28px] border border-zinc-800 active:scale-95 transition-all">
                    <span class="text-2xl">🤖</span>
                    <h3 class="text-xs font-bold mt-3">AI & Prompts</h3>
                    <p class="text-[9px] text-zinc-500 mt-1 uppercase">Ready to use</p>
                </div>
                <div onclick="openTool('Focus Timer')" class="bg-zinc-900 p-4 rounded-[28px] border border-zinc-800 active:scale-95 transition-all">
                    <span class="text-2xl">⏱️</span>
                    <h3 class="text-xs font-bold mt-3">Focus Timer</h3>
                    <p class="text-[9px] text-zinc-500 mt-1 uppercase">25m Sessions</p>
                </div>
                <div onclick="openTool('Tips & Tricks')" class="bg-zinc-900 p-4 rounded-[28px] border border-zinc-800 active:scale-95 transition-all">
                    <span class="text-2xl">💡</span>
                    <h3 class="text-xs font-bold mt-3">Tips & Tricks</h3>
                    <p class="text-[9px] text-zinc-500 mt-1 uppercase">VA Secrets</p>
                </div>
                <div onclick="openTool('Rate Calc')" class="bg-zinc-900 p-4 rounded-[28px] border border-zinc-800 active:scale-95 transition-all">
                    <span class="text-2xl">💰</span>
                    <h3 class="text-xs font-bold mt-3">Rate Calc</h3>
                    <p class="text-[9px] text-zinc-500 mt-1 uppercase">Price your skill</p>
                </div>
                <div onclick="openTool('Cover Letter')" class="bg-zinc-900 p-4 rounded-[28px] border border-zinc-800 active:scale-95 transition-all">
                    <span class="text-2xl">📝</span>
                    <h3 class="text-xs font-bold mt-3">Cover Letter</h3>
                    <p class="text-[9px] text-zinc-500 mt-1 uppercase">Templates</p>
                </div>
                <div onclick="openTool('Invoices')" class="bg-zinc-900 p-4 rounded-[28px] border border-zinc-800 active:scale-95 transition-all">
                    <span class="text-2xl">📄</span>
                    <h3 class="text-xs font-bold mt-3">Invoices</h3>
                    <p class="text-[9px] text-zinc-500 mt-1 uppercase">Pro Billing</p>
                </div>
            </div>

            <div class="pt-4">
                <h2 class="text-lg font-black uppercase tracking-tighter mb-4">Recommended AI</h2>
                <div class="space-y-3">
                    ${recommendedAITools.map(tool => `
                        <div class="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-3xl border border-zinc-800">
                            <div class="w-10 h-10 bg-yellow-400/10 rounded-2xl flex items-center justify-center text-yellow-400 font-bold text-xs shrink-0">${tool.name[0]}</div>
                            <div class="flex-grow">
                                <h4 class="text-xs font-bold">${tool.name}</h4>
                                <p class="text-[10px] text-zinc-500 line-clamp-1">${tool.desc}</p>
                            </div>
                            <a href="${tool.link}" target="_blank" class="p-2 bg-zinc-800 rounded-xl text-zinc-400 active:scale-90 transition-transform">↗</a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>`;
}

// Function para buksan ang bawat tool sa loob ng app
function openTool(name) {
    let toolUI = "";

    if (name === 'AI & Prompts') {
        toolUI = `
            <div class="space-y-4">
                <p class="text-zinc-400 text-[10px] uppercase font-bold text-center">Copy-paste ready AI prompts</p>
                <div class="space-y-2">
                    <button onclick="copyPrompt('Act as a Social Media Manager. Create a 30-day content plan for a real estate client focus on engagement.')" class="w-full bg-zinc-800 p-4 rounded-2xl text-left text-xs border border-zinc-700 active:scale-95 transition-all">📅 Social Media Plan</button>
                    <button onclick="copyPrompt('Write a professional email to a client explaining a minor delay in the project due to technical issues.')" class="w-full bg-zinc-800 p-4 rounded-2xl text-left text-xs border border-zinc-700 active:scale-95 transition-all">📧 Client Update Email</button>
                    <button onclick="copyPrompt('Summarize this long transcript into clear, actionable bullet points for a team meeting.')" class="w-full bg-zinc-800 p-4 rounded-2xl text-left text-xs border border-zinc-700 active:scale-95 transition-all">📝 Meeting Summary</button>
                </div>
                <div id="copyStatus" class="text-center text-yellow-400 text-[10px] font-bold uppercase h-4 mt-2"></div>
            </div>`;
    } 
    else if (name === 'Focus Timer') {
        toolUI = `
            <div class="text-center space-y-6 py-4">
                <div id="timerDisplay" class="text-6xl font-black text-white tracking-tighter font-mono">25:00</div>
                <div class="flex gap-2">
                    <button onclick="startTimer()" id="timerBtn" class="flex-1 bg-yellow-400 p-4 rounded-2xl text-black font-bold uppercase tracking-tighter active:scale-95 transition-all">Start Session</button>
                    <button onclick="resetTimer()" class="bg-zinc-800 px-6 rounded-2xl text-white active:scale-95">Reset</button>
                </div>
                <p class="text-zinc-500 text-[9px] uppercase font-bold tracking-widest">25 Min Work • 5 Min Break</p>
            </div>`;
    } 
    else if (name === 'Tips & Tricks') {
        toolUI = `
            <div class="space-y-3">
                <div class="p-4 bg-zinc-800/50 rounded-2xl border border-zinc-800">
                    <h4 class="text-yellow-400 text-[10px] font-black uppercase tracking-widest">Inbox Zero Tip</h4>
                    <p class="text-zinc-400 text-[11px] mt-1 leading-snug">Use "Snooze" in Gmail for tasks you can't handle yet to keep your focus clear.</p>
                </div>
                <div class="p-4 bg-zinc-800/50 rounded-2xl border border-zinc-800">
                    <h4 class="text-yellow-400 text-[10px] font-black uppercase tracking-widest">Client Management</h4>
                    <p class="text-zinc-400 text-[11px] mt-1 leading-snug">Always send a "End of Day" report. It builds massive trust even without them asking.</p>
                </div>
            </div>`;
    } 
    else if (name === 'Rate Calc') {
        toolUI = `
            <div class="space-y-4">
                <p class="text-zinc-400 text-xs text-center">Calculate your ideal hourly rate.</p>
                <input id="targetIncome" type="number" placeholder="Target Monthly ($)" class="w-full bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-white outline-none focus:border-yellow-400 transition-all">
                <input id="hoursPerWeek" type="number" placeholder="Hours per Week" class="w-full bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-white outline-none focus:border-yellow-400 transition-all">
                <button onclick="calculateRate()" class="w-full bg-yellow-400 p-4 rounded-2xl text-black font-bold uppercase tracking-tighter active:scale-95 transition-all">Calculate Rate</button>
                <div id="rateResult" class="text-center py-6 text-2xl font-black text-yellow-400"></div>
            </div>`;
    } 
    else if (name === 'Cover Letter') {
        toolUI = `
            <div class="space-y-4">
                <p class="text-zinc-400 text-xs text-center">Professional VA Templates</p>
                <div class="space-y-2">
                    <button onclick="copyPrompt('Dear [Hiring Manager], I am writing to apply for the VA position...')" class="w-full bg-zinc-800 p-4 rounded-2xl text-left text-xs border border-zinc-700">📄 General VA Application</button>
                    <button onclick="copyPrompt('Hi! I see you need help with your E-commerce store management...')" class="w-full bg-zinc-800 p-4 rounded-2xl text-left text-xs border border-zinc-700">🛒 E-commerce Specialist</button>
                </div>
                <div id="copyStatus" class="text-center text-yellow-400 text-[10px] font-bold uppercase h-4"></div>
            </div>`;
    } 
    else if (name === 'Invoices') {
        toolUI = `
            <div class="space-y-4">
                <input id="invClient" type="text" placeholder="Client Name" class="w-full bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-white text-xs outline-none">
                <input id="invAmount" type="number" placeholder="Amount ($)" class="w-full bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-white text-xs outline-none">
                <button onclick="generateInvoice()" class="w-full bg-yellow-400 p-4 rounded-2xl text-black font-bold uppercase tracking-tighter text-xs active:scale-95">Generate Receipt</button>
                <div id="invoiceOutput" class="p-4 bg-black rounded-2xl border border-zinc-800 text-[10px] font-mono text-zinc-500 whitespace-pre overflow-x-auto min-h-[100px]"></div>
            </div>`;
    }

    content.innerHTML = `
        <div class="fade-in space-y-6 pb-20">
            <button onclick="switchTab('tools')" class="text-zinc-500 font-bold text-[10px] uppercase flex items-center gap-2">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 6H1m0 0l4-4m-4 4l4 4"/></svg> Back to Tools
            </button>
            <div class="bg-zinc-900 p-6 rounded-[32px] border border-yellow-400/20 shadow-2xl">
                <h2 class="text-xl font-black text-yellow-400 mb-4 uppercase tracking-tighter">${name}</h2>
                ${toolUI}
            </div>
        </div>`;
    window.scrollTo(0, 0);
}

// Logic para sa Rate Calculator
function calculateRate() {
    const income = document.getElementById('targetIncome').value;
    const hours = document.getElementById('hoursPerWeek').value;
    
    if (income && hours) {
        const rate = (income / (hours * 4)).toFixed(2);
        document.getElementById('rateResult').innerHTML = `$${rate} / HR`;
    }
}

function renderChats() {
    if (chatMessages.length === 0) {
        chatMessages.push({ role: "assistant", text: `Hi ${userNickname}! 👋 How are you doing with your 20-day VA program? I'm here to help with anything, lessons, practice, proposals, or just a quick question. How are you feeling right now?` });
    }
    content.innerHTML = `
        <div class="fade-in flex flex-col h-[calc(100vh-160px)] px-2">
            <div class="flex justify-between items-center py-4 px-2">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-black text-black text-xs">B</div>
                    <div><h2 class="text-sm font-black uppercase tracking-tighter text-white">Bien AI</h2><p class="text-[9px] text-green-400 font-bold uppercase tracking-widest">● Unlimited Talk</p></div>
                </div>
                <div class="flex gap-4 text-zinc-500"><button onclick="clearChat()">🗑️</button><button>⚙️</button></div>
            </div>
            <div id="chatBox" class="flex-grow overflow-y-auto space-y-4 py-4 hide-scroll">
                ${chatMessages.map(msg => `<div class="flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}"><div class="${msg.role === 'user' ? 'bg-yellow-400 text-black rounded-tr-none' : 'bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-tl-none'} max-w-[85%] p-4 rounded-[20px] text-[13px] leading-relaxed shadow-sm">${msg.text}</div></div>`).join('')}
            </div>
            <div class="flex gap-2 overflow-x-auto py-3 hide-scroll">
                <button onclick="quickAction('Mock Interview')" class="whitespace-nowrap px-4 py-2 border border-zinc-700 rounded-full text-[11px] font-bold text-zinc-300">🎤 Mock Interview</button>
                <button onclick="quickAction('Cover Letter')" class="whitespace-nowrap px-4 py-2 border border-zinc-700 rounded-full text-[11px] font-bold text-zinc-300">✉️ Cover Letter</button>
                <button onclick="quickAction('Write a Proposal')" class="whitespace-nowrap px-4 py-2 border border-zinc-700 rounded-full text-[11px] font-bold text-zinc-300">📝 Write a Proposal</button>
            </div>
            <div class="relative pb-6"><input type="text" id="chatInput" onkeypress="if(event.key==='Enter') sendMessage()" placeholder="Ask Bien AI anything..." class="w-full bg-zinc-900/50 p-4 pr-12 rounded-2xl border border-zinc-800 outline-none focus:border-yellow-400 text-sm text-white"><button onclick="sendMessage()" class="absolute right-3 top-2.5 p-2 text-zinc-500"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button></div>
        </div>`;
    scrollToBottom();
}

function renderSettings() {
    content.innerHTML = `
        <div class="fade-in space-y-8 pb-24 px-2">
            <div class="bg-zinc-900/50 p-6 rounded-[32px] border border-zinc-800">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black text-2xl font-black">
                        ${userNickname[0].toUpperCase()}
                    </div>
                    <div>
                        <h2 class="text-xl font-black uppercase tracking-tighter">${userNickname}</h2>
                        <p class="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">VA Student • Level ${userLevel}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <p class="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Your Skills</p>
                    <div class="flex flex-wrap gap-2">
                        ${selectedSkills.length > 0 ? selectedSkills.map(s => `<span class="px-3 py-1 bg-zinc-800 rounded-full text-[10px] font-bold text-yellow-400">${s}</span>`).join('') : '<span class="text-zinc-600 text-[10px]">No skills selected</span>'}
                    </div>
                </div>
            </div>
            <div>
                <h3 class="text-sm font-black uppercase tracking-tighter mb-4">Theme Customization</h3>
                <div class="flex gap-3 overflow-x-auto hide-scroll pb-2">
                    <button onclick="changeTheme('black')" class="w-10 h-10 rounded-full bg-black border border-zinc-700 shrink-0"></button>
                    <button onclick="changeTheme('zinc-900')" class="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 shrink-0"></button>
                    <button onclick="changeTheme('yellow-500')" class="w-10 h-10 rounded-full bg-yellow-500 shrink-0"></button>
                    <button onclick="changeTheme('red-600')" class="w-10 h-10 rounded-full bg-red-600 shrink-0"></button>
                    <button onclick="changeTheme('blue-600')" class="w-10 h-10 rounded-full bg-blue-600 shrink-0"></button>
                    <button onclick="changeTheme('green-600')" class="w-10 h-10 rounded-full bg-green-600 shrink-0"></button>
                </div>
            </div>
            <div class="space-y-3">
                <button onclick="alert('Terms: Acceptance of Terms, AI Service informational only...')" class="w-full text-left p-5 bg-zinc-900 rounded-2xl border border-zinc-800 text-[11px] font-bold flex justify-between items-center">TERMS OF SUPPORT <span>→</span></button>
                <button onclick="alert('Privacy: We collect device info and usage patterns to improve your journey.')" class="w-full text-left p-5 bg-zinc-900 rounded-2xl border border-zinc-800 text-[11px] font-bold flex justify-between items-center">PRIVACY POLICY <span>→</span></button>
            </div>
            <div class="pt-4 border-t border-zinc-800">
                <button onclick="resetApp()" class="w-full p-5 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl text-[11px] font-black uppercase tracking-widest active:scale-95 transition-all">Reset Progress</button>
                <p class="text-center text-[8px] text-zinc-700 mt-6 font-bold uppercase tracking-widest">The app is not for sale • Don't recode • Don't copy</p>
            </div>
        </div>`;
}

// --- LOGIC HELPERS ---
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    chatMessages.push({ role: "user", text: text });
    input.value = "";
    renderChats();
    scrollToBottom();

    try {
        // TAMA NA URL PARA SA GROQ
        const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text }) 
});

        const data = await response.json();
        
        let bienReply = "Pasensya na paps, medyo naguluhan ako. Paki-ulit?";

        // Iba ang format ng response ni Groq kesa kay Gemini
        if (data.choices && data.choices[0].message) {
            bienReply = data.choices[0].message.content;
        } else if (data.error) {
            console.error("API Error:", data.error.message);
            bienReply = "Error mula sa API: " + data.error.message;
        }

        chatMessages.push({ role: "assistant", text: bienReply });
        renderChats();
        scrollToBottom();

    } catch (error) {
        console.error("Connection Error:", error);
        chatMessages.push({ role: "assistant", text: "Mukhang nag-offline ang brain ko. Check mo net mo!" });
        renderChats();
    }
}

function quickAction(type) { document.getElementById('chatInput').value = `Help me with ${type}`; sendMessage(); }
function clearChat() { if(confirm("Delete all messages?")) { chatMessages = []; renderChats(); } }
function scrollToBottom() { const chatBox = document.getElementById('chatBox'); if(chatBox) chatBox.scrollTop = chatBox.scrollHeight; }

function toggleCourseComplete(courseName) {
    if (completedCourses.includes(courseName)) completedCourses = completedCourses.filter(c => c !== courseName);
    else completedCourses.push(courseName);
    localStorage.setItem('bien_completed_courses', JSON.stringify(completedCourses));
    renderCourseTab();
}

function completeLevel() { 
    if(userLevel < 20) { 
        userLevel++; 
        localStorage.setItem('bien_user_level', userLevel);
        updateHeaderProgress(); 
        renderProgram(); 
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    } 
}

function updateHeaderProgress() { 
    document.getElementById('lvlDisplay').innerText = userLevel; 
    document.getElementById('lvlBar').style.width = `${(userLevel/20) * 100}%`; 
}

function changeTheme(color) {
    // Kinakabitan ng tailwind class base sa color
    const colors = { 'black': '#000000', 'zinc-900': '#18181b', 'yellow-500': '#eab308', 'red-600': '#dc2626', 'blue-600': '#2563eb', 'green-600': '#16a34a' };
    document.body.style.backgroundColor = colors[color] || '#000000';
    localStorage.setItem('bien_theme', color);
}

function resetApp() {
    if(confirm("Are you sure? This will delete all your progress.")) {
        localStorage.clear();
        location.reload();
    }
}

function showDashboard() {
    mainHeader.classList.remove('hidden');
    bottomNav.classList.remove('hidden');
    footerArea.classList.add('hidden');
    app.style.paddingTop = "100px";
    switchTab('program');
    // Load saved theme
    const savedTheme = localStorage.getItem('bien_theme');
    if(savedTheme) changeTheme(savedTheme);
}

function speak(htmlContent) {
    const tempDiv = document.createElement("div"); tempDiv.innerHTML = htmlContent;
    const cleanText = tempDiv.textContent || tempDiv.innerText || "";
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.9; window.speechSynthesis.speak(utterance);
}

nextBtn.onclick = () => { currentStep++; renderStep(); };
function openCourse(title) {
    const data = courseContent[title] || { desc: "Coming soon!", lessons: [] };
    
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="fade-in space-y-6">
            <button onclick="switchTab('course')" class="text-zinc-500 font-bold text-[10px] uppercase">← Back</button>
            <div class="bg-zinc-900 p-6 rounded-3xl border border-yellow-400/20">
                <h2 class="text-xl font-black text-yellow-400 mb-4 uppercase">${title}</h2>
                <p id="lessonText" class="text-zinc-400 leading-relaxed">${data.desc}</p>
                <button onclick="speakText()" class="mt-4 text-xs bg-zinc-800 px-4 py-2 rounded-full">🔊 Listen</button>
            </div>
        </div>
    `;
    window.scrollTo(0,0);
}

let isSpeaking = false;

function speakText() {
    const btn = event.target; // Kunin yung button na pinindot
    
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        btn.innerHTML = "▶️ Resume";
        return;
    } 
    
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        btn.innerHTML = "⏸️ Pause";
        return;
    }

    // Bagong simula ng pagsasalita
    window.speechSynthesis.cancel();
    const text = document.getElementById('lessonText').innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    
    utterance.onstart = () => {
        isSpeaking = true;
        btn.innerHTML = "⏸️ Pause";
    };
    
    utterance.onend = () => {
        isSpeaking = false;
        btn.innerHTML = "🔊 Listen";
    };

    window.speechSynthesis.speak(utterance);
}
// --- TOOL HELPERS ---

// AI & Cover Letter Copy
function copyPrompt(text) {
    navigator.clipboard.writeText(text);
    const status = document.getElementById('copyStatus');
    status.innerText = "Copied to Clipboard! ✨";
    setTimeout(() => { status.innerText = ""; }, 2000);
}

// Focus Timer Logic
let timerInterval;
function startTimer() {
    let timeLeft = 25 * 60;
    const display = document.getElementById('timerDisplay');
    const btn = document.getElementById('timerBtn');
    
    if (btn.innerText === "STOP SESSION") {
        clearInterval(timerInterval);
        btn.innerText = "START SESSION";
        return;
    }

    btn.innerText = "STOP SESSION";
    timerInterval = setInterval(() => {
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        display.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Take a break.");
        }
        timeLeft--;
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('timerDisplay').innerText = "25:00";
    document.getElementById('timerBtn').innerText = "START SESSION";
}

// Invoice Generator
function generateInvoice() {
    const client = document.getElementById('invClient').value || "Client";
    const amount = document.getElementById('invAmount').value || "0.00";
    const date = new Date().toLocaleDateString();
    
    document.getElementById('invoiceOutput').innerText = `
INVOICE - ${date}
-------------------------
CLIENT: ${client}
SERVICE: VA SERVICES
TOTAL DUE: $${amount}
-------------------------
Thank you for your business!
    `;
}

// --- THE BRAIN OF BIEN AI ---
function getBienResponse(userText) {
    const input = userText.toLowerCase();
    
    // VA Knowledge Base / FAQ Logic
    const qa = [
        { key: ['niche', 'pili'], ans: "Sa pagpili ng niche, tignan mo kung saan ka magaling at kung ano ang demand. Mas malaki ang kita sa 'Technical VA' kesa sa 'General VA'." },
        { key: ['scam', 'ingat'], ans: "Ingat sa mga client na nag-aaya sa Telegram agad. Ang legit na client, may contract at maayos na interview process." },
        { key: ['rate', 'sahod'], ans: "Para sa beginners, $5-$7 per hour ang safe start. Gamitin mo yung 'Rate Calc' tool natin para ma-compute mo ang saktong rate para sa lifestyle mo!" },
        { key: ['portfolio', 'sample'], ans: "Kung wala pang experience, gumawa ka ng 'Mock Projects'. Ipakita mo sa client kung ano ang kaya mong gawin gamit ang samples." }
    ];

    // Check for Commands (Buttons)
    if (input.includes('mock interview')) return "Ready na ako! Question #1: Why should I hire you as my Virtual Assistant?";
    if (input.includes('cover letter')) return "Sige paps, anong niche mo? Gawan natin ng template yan.";

    // Check Knowledge Base
    for (let item of qa) {
        if (item.key.some(k => input.includes(k))) return item.ans;
    }

    // Default Response if unknown
    return "Bilang VA mentor mo, suggest ko na i-apply natin ito sa tools na meron tayo. Ready ka na ba?";
}
