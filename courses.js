const courseContent = {
    // FEATURED COURSES
    "The future of works: how ai changes va roles": {
        desc: "Ang AI ay hindi kalaban kundi tool. Ang mga VA na marunong gumamit nito ay mas mabilis magtrabaho at mas malaki ang kita.",
        lessons: ["Mindset Shift", "AI vs Human Skills", "Automation Basics"]
    },
    "How to get your first client": {
        desc: "Ang pinakamahirap na part ay ang simula. Ituturo dito ang strategy kung saan hahanap ng mga clients na ready na mag-hire ng AI-skilled VA.",
        lessons: ["Direct Outreach", "Platform Optimization", "First Pitch Script"]
    },
    "What is generative ai": {
        desc: "Alamin kung paano gumagawa ang AI ng text, images, at videos. Ito ang pundasyon ng lahat ng AI tools na gagamitin mo.",
        lessons: ["LLM Basics", "Image Gen Intro", "Creative AI"]
    },
    "Prompt engineering fundamentals": {
        desc: "Huwag lang mag-type. Matuto ng tamang structure ng prompt para makuha ang perfect na result mula sa ChatGPT o Claude.",
        lessons: ["Context Setting", "Role Prompting", "Iterative Refinement"]
    },
    "Building trust & long term client relationship": {
        desc: "Paano maging indispensable sa client. Ang tiwala ay nabubuo sa consistency at pagbibigay ng value gamit ang AI.",
        lessons: ["Client Onboarding", "Reporting Value", "Retention Tactics"]
    },
    "What are AI agents": {
        desc: "Ang susunod na level ng AI. Alamin kung paano gumawa ng AI na kayang gumalaw mag-isa para tapusin ang mga tasks mo.",
        lessons: ["Autonomous Agents", "Task Delegation", "Agentic Workflows"]
    },
    "Ai tools for VAs": {
        desc: "Mula sa scheduling hanggang sa research. Kilalanin ang mga top AI tools na dapat alam ng bawat modernong Virtual Assistant.",
        lessons: ["Admin Tools", "Research AI", "Workflow Sync"]
    },
    "Social media va specialist program": {
        desc: "Maging expert sa pag-manage ng social media gamit ang AI para sa content planning, scheduling, at analytics.",
        lessons: ["Content Calendar AI", "Auto-Posting", "Engagement Hacks"]
    },
    "Ai as a productivity multiplier": {
        desc: "Paano gawin ang 8-hour task sa loob lamang ng 1 oras. Dito mo matututunan ang tunay na lakas ng AI efficiency.",
        lessons: ["Time Auditing", "Batch Processing", "Focus Systems"]
    },
    "From employe to freelance va": {
        desc: "Ang transition guide mula sa 9-to-5 patungo sa freelancing. Alamin ang mindset at systems na kailangan mo.",
        lessons: ["Financial Planning", "Client Acquisition", "Work-Life Balance"]
    },
    "Effective communication with clients": {
        desc: "I-polish ang iyong communication skills. Gamitin ang AI para masiguro na professional at malinaw ang bawat email o chat mo.",
        lessons: ["Email Etiquette", "Conflict Resolution", "Active Communication"]
    },
    "Attention to detail & quality control": {
        desc: "Huwag i-asa lahat sa AI. Matutunan kung paano mag-double check at mag-proofread para laging high quality ang output mo.",
        lessons: ["AI Hallucination Check", "Final Review", "Quality Standards"]
    },

    // ALL COURSES (ADDITIONAL)
    "Building a personal brand as an ai-skilled va": {
        desc: "Dito mo matututunan kung paano ibenta ang sarili mo sa LinkedIn at portfolio gamit ang AI tools.",
        lessons: ["LinkedIn Optimization", "Content Strategy", "Portfolio AI"]
    },
    "Building a va portfolio with no experience": {
        desc: "Wala pang experience? Walang problema. Gamitin ang AI para gumawa ng 'Mock Projects' na magpapakita ng skills mo.",
        lessons: ["Case Study Creation", "Visual Portfolio", "Skill Proof"]
    },
    "Raising your rates without losing clients": {
        desc: "Matutunan ang value-based pricing. Paano mag-negotiate sa client na imbes na per hour, ay per project ang bayad dahil sa bilis mo.",
        lessons: ["Negotiation Skills", "Price Anchoring", "Value Proposition"]
    },
    "Understanding your niche as a va": {
        desc: "Huwag maging 'General VA'. Gamitin ang AI para maging expert sa isang specific na field gaya ng Real Estate o E-commerce.",
        lessons: ["Niche Research", "Specialized Tools", "Market Demand"]
    },
    "Retainer clients, structuring long-term engagement": {
        desc: "Paano makuha ang tiwala ng client para gawin kang long-term partner at hindi lang one-time project.",
        lessons: ["Retainer Models", "Loyalty Building", "Service Expansion"]
    },
    "Tracking your hours develirables": {
        desc: "Maging transparent sa iyong trabaho. Alamin ang mga tools at systems para ma-track ang progress at oras mo nang maayos.",
        lessons: ["Time Tracking Tools", "Activity Logs", "Billing Systems"]
    },
    "Problem solving & critical thinking": {
        desc: "Gamitin ang AI bilang sounding board para sa mga complex na problema. Matutong mag-isip ng solusyon, hindi lang sumunod.",
        lessons: ["Logical Frameworks", "Brainstorming AI", "Decision Matrix"]
    },
    "Active listening & understanding client needs": {
        desc: "Paano intindihin ang 'pahiwatig' ng client. Matutong mag-analyze ng meeting notes gamit ang AI para sa better results.",
        lessons: ["Meeting Summarization", "Client Psychology", "Requirement Gathering"]
    },
    "Emotional intelligence in remote works": {
        desc: "Ang pagtatrabaho sa bahay ay nangangailangan ng mataas na EQ. Paano makisama sa iba't ibang kultura ng clients.",
        lessons: ["Cultural Sensitivity", "Stress Management", "Empathy in Chat"]
    },
    "Promptingfor works task": {
        desc: "Deep dive sa workflow prompting. Mula sa paggawa ng reports hanggang sa data cleaning gamit ang AI.",
        lessons: ["Data Analysis", "Report Generation", "Workflow Prompts"]
    },
    "Ai tools stack for begginers Vas": {
        desc: "Ang listahan ng mga 'Must-Have' tools para sa mga nagsisimula pa lang sa mundo ng AI-assisted VA work.",
        lessons: ["Chrome Extensions", "Free AI Tools", "Security Basics"]
    },
    "Using ai for client works": {
        desc: "Ang ethical at effective na paggamit ng AI sa actual na trabaho. Paano i-disclose sa client at paano i-manage ang data.",
        lessons: ["Ethical AI", "Data Privacy", "Client Disclosure"]
    },
    "How ai thinks: prompting without overthinking": {
        desc: "Pasimplehin ang paggamit ng AI. Alamin ang core logic sa likod ng bawat model para hindi ka na mahirapan sa prompting.",
        lessons: ["Mental Models", "Simple Prompts", "AI Logic"]
    },
    "Ai + productivity system": {
        desc: "Pagsamahin ang AI at ang iyong personal na productivity system gaya ng Notion o Trello para sa seamless na trabaho.",
        lessons: ["Second Brain AI", "Task Automation", "System Integration"]
    },
    "How clients view ai-assisted works": {
        desc: "Alamin ang perspective ng mga nag-ha-hire. Ano ang kinatatakutan nila at ano ang hinahanap nila sa isang AI VA.",
        lessons: ["Client Concerns", "Value of Human Touch", "Trust Building"]
    },
    "Building trust before your hired": {
        desc: "Paano ipakita ang galing mo bago pa man mag-interview. Gamitin ang social media para mag-post ng AI value content.",
        lessons: ["Content Marketing", "Cold Outreach", "Pre-selling Skills"]
    },
    "Ai automation fundamentals": {
        desc: "Intro sa pag-connect ng iba't ibang apps gamit ang Zapier o Make para mag-automate ng repetitive tasks.",
        lessons: ["Automation Triggers", "Logic Paths", "API Basics"]
    },
    // PART 2: ALL COURSES CONTINUATION
    "Client and research & lead generation using ai": {
        desc: "Huwag mag-mano-mano sa paghahanap ng leads. Gamitin ang AI para i-scrape, i-verify, at i-organize ang listahan ng potential clients para sa iyong employer.",
        lessons: ["Lead Scraping AI", "Data Verification", "CRM Management"]
    },
    "Direct clients Vs agencies: what the difference?": {
        desc: "Alamin kung saan mas okay magsimula. Sa agency ba na may ready-made workflow, o sa direct client na mas malaki ang bayad pero mas maraming responsibility?",
        lessons: ["Agency Pros & Cons", "Direct Client Prep", "Career Pathing"]
    },
    "Ai tools Vs skills: what actually makes you valuable.": {
        desc: "Ang tool ay napapalitan, pero ang skill ay hindi. Matutunan kung paano maging valuable sa pamamagitan ng pag-intindi sa strategy, hindi lang sa pagpindot ng buttons.",
        lessons: ["Human-in-the-loop", "Strategic Thinking", "Tool Adaptability"]
    },
    "Why a portfolio matters": {
        desc: "Ang portfolio ang iyong 'Social Proof'. Kahit wala kang experience, ang portfolio na gawa sa AI projects ay sapat na para patunayan ang galing mo.",
        lessons: ["Proof of Concept", "Visual Storytelling", "Project Selection"]
    },
    "Resume Vs online profiles": {
        desc: "Sa modernong freelancing, mas tinitingnan ang LinkedIn at Upwork profile kaysa sa lumang resume. Alamin kung paano i-optimize ang mga ito gamit ang AI.",
        lessons: ["Profile SEO", "Keyword Optimization", "Headline Crafting"]
    },
    "How clients finds vas online": {
        desc: "Baligtarin natin ang mundo—paano ka nila mahahanap? Intindihin ang algorithm ng freelancing platforms para ikaw ang lumabas sa top search results nila.",
        lessons: ["Search Algorithms", "Inbound Marketing", "Tagging Strategy"]
    },
    "Optimizing online profiles": {
        desc: "Aayusin natin ang iyong profile picture, bio, at work history. Gamitin ang AI para gumawa ng description na 'magnet' sa mga premium clients.",
        lessons: ["Bio Rewriting", "Portfolio Layout", "Skill Endorsements"]
    },
    "How to read job post like a va": {
        desc: "Huwag basta apply nang apply. Matutong mag-analyze ng job posts gamit ang AI para malaman kung 'red flag' ba ang client o kung perfect match kayo.",
        lessons: ["Red Flag Detection", "Requirement Analysis", "Tailored Applications"]
    },
    "Canva for VA workplace": {
        desc: "Maging instant graphic designer. Gamitin ang Magic Studio ng Canva para pabilisin ang paggawa ng social media posts, presentations, at documents.",
        lessons: ["Magic Edit & Resize", "Brand Kit Setup", "AI Image Generation"]
    },
    "Scaling from solo va to ai team manager": {
        desc: "Pag marami ka na client, kailangan mo na ng team. Matutunan kung paano mag-manage ng ibang VAs at gumamit ng AI para i-monitor ang buong team workflow.",
        lessons: ["Delegation Logic", "Team Automation", "Operations Management"]
    },
    "Email management and automation": {
        desc: "Zero Inbox strategy. Gamitin ang AI para mag-filter ng emails, gumawa ng draft replies, at mag-schedule ng follow-ups nang hindi ka nai-stress.",
        lessons: ["Inbox Filters", "Smart Replies", "Email Workflows"]
    },
    "Adaptability & learning agility": {
        desc: "Dahil mabilis magbago ang AI, kailangan mong maging mabilis matuto. Ituturo dito ang 'Learning how to learn' technique para hindi ka mapag-iwanan.",
        lessons: ["Trend Spotting", "Fast-Track Learning", "Future-Proofing"]
    },
    "Decision making with ai support": {
        desc: "Huwag manghula. Gamitin ang data at AI insights para tulungan ang client mo sa paggawa ng mahahalagang desisyon para sa kanilang business.",
        lessons: ["Data-Driven Insights", "Risk Assessment", "Option Analysis"]
    },
    "Positioning yourself as an ai skilled va": {
        desc: "Ito ang final step. Paano mo tatantiyahin ang iyong sarili sa market? Alamin kung paano maging 'Go-to Expert' sa mundo ng AI Virtual Assistance.",
        lessons: ["Expert Branding", "Market Positioning", "Authority Building"]
    },
    "Ai for virtual assistant: the new skills era": {
        desc: "Isang recap ng lahat ng natutunan. Paano pagdugtung-dugtungin ang lahat ng AI skills para maging isang elite at high-earning Virtual Assistant.",
        lessons: ["Skill Synthesis", "Career Roadmap", "Continuous Growth"]
    }
};
