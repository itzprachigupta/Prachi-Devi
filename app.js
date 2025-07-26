// Portfolio Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
  
  // ================= DATA ================= 
  const portfolioData = {
    "personalInfo": {
      "name": "Prachi Devi", 
      "title": "Data Analyst & BI Developer",
      "subtitle": "Transforming Data into Strategic Insights",
      "location": "Gurgaon, India",
      "email": "prachi.devi@email.com",
      "linkedin": "https://linkedin.com/in/prachi-devi",
      "github": "https://github.com/prachi-devi",
      "bio": "I'm Prachi Devi, a Data Analyst and BI Developer with over 1.5 years of experience at Bharti Airtel, driving data-backed decision-making across 21 telecom circles with a strong foundation in Power BI, SQL, DAX, Excel/VBA, and Python. I've analyzed 248K+ OBD calls, optimized SLA resolution time by 60%, improved manual workflows by 40%, and supported decision-makers with real-time visibility and reporting. \n I thrive at the intersection of data, processes, and business impact and I'm passionate about using data storytelling and BI tools to translate complex datasets into clear, impactful outcomes."
    },
  "metrics": [
  {
    label: "Total Projects Delivered",
    value: "10+",
    description: "End-to-end ownership of dashboards, automation flows, and analytics use cases across Airtel NOC, Infra, and Field operations."
  },
  {
    label: "Operational Efficiency Improved",
    value: "40%+",
    description: "Achieved through process automation, field ticket logic redesign, and AI-based solutions like the Remedy Chatbot."
  },
  {
    label: "SLA Turnaround Time Reduced",
    value: "60%-",
    description: "Reduced escalation delays via logic-driven ownership mapping and real-time visibility of 30+ escalation flows."
  },
  {
    label: "Power BI Dashboards Published",
    value: "5+",
    description: "Interactive dashboards visualizing ticket health, OBD insights, and SLA trends; adopted by leadership and 20+ circle teams."
  },
  {
    label: "OBD Follow-up Improvement",
    value: "15%+",
    description: "Improved resolution adherence by highlighting role-wise call gaps via drillable Power BI views, reducing missed follow-ups."
  },
  {
    label: "User Acceptance Testing Cycles Conducted",
    value: "12+",
    description: "Led structured UATs across Remedy and JIRA, ensuring bug-free releases and higher adoption of internal tools."
  },
  {
    label: "Values of Dataset Analyzed",
    value: "264M+",
    description: "Handled and transformed large-scale datasets across alarms, ticket flows, and incident history for dashboarding and insights."
  },
  {
    label: "Certifications Earned",
    value: "6+",
    description: "Completed certifications in Power BI, Advanced Excel, Generative AI, and Process Optimization to deepen domain and technical expertise."
  }
],
  "skills": {
  "technical": [
    { "name": "Power BI", "level": 95, "category": "Expert" },
    { "name": "DAX", "level": 85, "category": "Advanced" },
    { "name": "SQL", "level": 85, "category": "Advanced" },
    { "name": "Excel/VBA", "level": 90, "category": "Expert" },
    { "name": "Power Query", "level": 85, "category": "Advanced" },
    { "name": "Python for Data Analysis", "level": 85, "category": "Intermediate" },
    { "name": "Streamlit", "level": 65, "category": "Intermediate" },
    { "name": "C++", "level": 60, "category": "Intermediate" },
    { "name": "JavaScript", "level": 60, "category": "Beginner" },
    { "name": "HTML", "level": 70, "category": "Intermediate" },
    { "name": "CSS", "level": 70, "category": "Intermediate" },
    { "name": "GitHub", "level": 60, "category": "Beginner" },
    { "name": "Figma", "level": 60, "category": "Beginner" }
  ],
  "soft": [
    "Problem Solving",
    "Data Storytelling",
    "Process Optimization",
    "Cross-functional Collaboration",
    "Stakeholder Communication",
    "Fast Learning",
    "Analytical Thinking"
  ]
},
    // "projects": [
    //   {
    //     "id": 1,
    //     "title": "Advanced OBD Calling Analytics Dashboard",
    //     "description": "Comprehensive Power BI dashboard analyzing 248K+ calls across 18 telecom circles, resulting in 15% reduction in missed follow-ups and 40% improvement in manual processes.",
    //     "technologies": ["Power BI", "DAX", "SQL", "Excel"],
    //     "metrics": [
    //       "248K+ calls analyzed",
    //       "18 circles covered", 
    //       "15% missed follow-up reduction",
    //       "40% manual process improvement"
    //     ],
    //     "category": "Business Intelligence",
    //     "impact": "Reduced missed follow-ups by 15% post operational changes and improved overall call management efficiency",
    //     "stakeholders": "NOC Heads, Operations Teams, Circle Management across 18 telecom circles"
    //   },
    //   {
    //     "id": 2,
    //     "title": "MTTR Optimization & Incident Resolution",
    //     "description": "Advanced Excel-based analysis system for tracking Mean Time to Resolution (MTTR) and optimizing incident escalation processes across field operations.",
    //     "technologies": ["Advanced Excel", "VBA", "Statistical Analysis"],
    //     "metrics": [
    //       "25% reduction in resolution delays",
    //       "Real-time MTTR tracking",
    //       "Automated escalation workflows"
    //     ],
    //     "category": "Process Optimization",
    //     "impact": "Achieved 25% reduction in incident resolution delays through optimized escalation processes",
    //     "stakeholders": "Field Teams, NOC Operations, Infrastructure Management"
    //   },
    //   {
    //     "id": 3,
    //     "title": "UDAAN Centralized Escalation Matrix",
    //     "description": "Comprehensive escalation management system covering 30+ flows across 21 telecom circles with integrated error tracking and resolution optimization.",
    //     "technologies": ["Excel", "Process Mapping", "Data Visualization", "Automation"],
    //     "metrics": [
    //       "30+ flows covered",
    //       "21 circles integrated",
    //       "60% error reduction"
    //     ],
    //     "category": "System Design",
    //     "impact": "Ensured SLA adherence and reduced escalation turnaround time by 60% with real-time visibility",
    //     "stakeholders": "NOC, Infrastructure, and Field teams across all 21 telecom circles"
    //   },
    //         {
    //     "id": 4,
    //     "title": "Visuals and Graphs",
    //     "description": "Comprehensive escalation management system covering 30+ flows across 21 telecom circles with integrated error tracking and resolution optimization.",
    //     "technologies": ["Excel", "Process Mapping", "Data Visualization", "Automation"],
    //     "metrics": [
    //       "30+ flows covered",
    //       "21 circles integrated",
    //       "60% error reduction"
    //     ],
    //     "category": "Excel Dashboards and Graphs",
    //     "impact": "Ensured SLA adherence and reduced escalation turnaround time by 60% with real-time visibility",
    //     "stakeholders": "NOC, Infrastructure, and Field teams across all 21 telecom circles"
    //   }
    // ],

  "projects": [
  {
    "id": 1,
    "title": "Advanced OBD Calling Analytics Dashboard",
    "description": "Designed an end-to-end Power BI dashboard that analyzed over 248K outbound calls across 18 telecom circles. Enabled visibility into performance gaps and agent compliance, leading to a 15% drop in missed follow-ups and 40% improvement in manual workload handling.",
    "technologies": ["Power BI", "DAX", "SQL", "Excel"],
    "metrics": [
      "248K+ calls analyzed",
      "18 circles covered", 
      "15% missed follow-up reduction",
      "40% manual process improvement"
    ],
    "category": "Business Intelligence",
    "impact": "Accelerated operational efficiency and reduced manual interventions using real-time dashboards with actionable insights.",
    "stakeholders": "NOC Heads, Operations Teams, Circle Management",
    "link": {
      "github": "https://github.com/prachi-devi/obd-dashboard",
      "demo": "https://prachi-devi.github.io/obd-dashboard-demo"
    }
  },
  {
    "id": 2,
    "title": "MTTR Optimization & Incident Resolution",
    "description": "Built a dynamic Excel-based tracking system with VBA automation to monitor and reduce MTTR across 10+ categories of field escalations. Resulted in a 25% decrease in SLA breaches.",
    "technologies": ["Advanced Excel", "VBA", "Statistical Analysis"],
    "metrics": [
      "25% reduction in resolution delays",
      "Real-time MTTR tracking",
      "Automated escalation workflows"
    ],
    "category": "Process Optimization",
    "impact": "Reduced incident backlog and escalations by enhancing visibility and accountability.",
    "stakeholders": "Field Teams, NOC Operations",
    "link": {
      "github": "https://github.com/prachi-devi/mttr-tracker",
      "demo": ""
    }
  },
  {
    "id": 3,
    "title": "UDAAN Centralized Escalation Matrix",
    "description": "Designed a centralized escalation matrix covering 30+ flows across 21 telecom circles, embedding logic for roles, timelines, and error handling.",
    "technologies": ["Excel", "Process Mapping", "Data Visualization"],
    "metrics": [
      "30+ flows covered",
      "21 circles integrated",
      "60% error reduction"
    ],
    "category": "System Design",
    "impact": "Enabled seamless escalation governance with SLA adherence.",
    "stakeholders": "NOC, Infra, Field Teams",
    "link": {
      "github": "https://github.com/prachi-devi/udaan-matrix",
      "demo": ""
    }
  },
  {
    "id": 4,
    "title": "Interactive Excel Dashboards & Visuals",
    "description": "Built reusable Excel dashboards and visuals for RCA & operational reports using slicers, KPIs, and automated charts.",
    "technologies": ["Excel", "Pivot Charts", "VBA"],
    "metrics": [
      "Used in 20+ reviews",
      "Auto-updated visuals",
      "Zero manual rework"
    ],
    "category": "Excel Dashboards and Graphs",
    "impact": "Streamlined reporting and analytics communication.",
    "stakeholders": "Circle Leadership, NOC, RCA Teams",
    "link": {
      "github": "",
      "demo": ""
    }
  }
  ],
    // "experience": [
    //   {
    //     "title": "Process Analyst",
    //     "company": "Bharti Airtel",
    //     "duration": "July, 2024 - Present",
    //     "location": "Manesar, India",
    //     "description": "Specialized in data analysis and process optimization for telecom operations, with focus on transitioning to advanced BI development role.",
    //     "achievements": [
    //       "Created a Interactive Dashbaord to analyse the OBD alls across 19 telecom circles using Power BI, Excel and Python",
    //       "Led process optimization and automation initiatives across NOC, Field, and Infra domains, improving operational efficiency and reducing manual follow-ups by 40%",
    //       "Designed and implemented a centralized escalation matrix (UDAAN Project) covering 30+ escalation flows across 21 telecom circles , ensuring SLA adherence for 20000+ monthly field operations and enabling real-time visibility across NOC, Infra, and Field teams",
    //       "Developed a BRD and logic for Remedy ticket ownership automation, minimizing incorrect assignment errors by 60% and reducing escalation turnaround time.",
    //       "Developed a JIRA-based alarm testing platform, improving inter-team coordination for 10+ monthly test cases reducing dependency on email chains.",
    //       "Initiated and currently building an AI Chatbot for Remedy users to assist 2000+ engineers with field descriptions, ticket guidance, and predictive resolutions",
    //       "Conducted 12+ User Acceptance Testing (UAT) cycles for Remedy and JIRA enhancements, ensuring production readiness and early defect identification",
    //       "Built interactive dashboards using Power BI for monitoring ticket escalations, resolution timelines, and SLA compliance, enhancing shift lead visibility and reducing resolution delays by 25%",
    //       "Delivered 15+ Knowledge Transfer (KT) sessions and hands-on training workshops for internal stakeholders, ensuring smooth adoption of new tools and processe",
    //       "Created and documented 10+ Business Requirement Documents (BRDs) to drive system enhancements and cross-functional alignment"
    //     ]
    //   },
    //    {
    //     "title": "GET INTERN",
    //     "company": "Bharti Airtel",
    //     "duration": "Feb - June'24",
    //     "location": "Manesar, India",
    //     "description": "Specialized in data analysis and process optimization for telecom operations, with focus on transitioning to advanced BI development role.",
    //     "achievements": [
    //       "Analyzed 1200+ service alarms using Excel, SQL, and internal NOC tools reducing false alarms by 17% through structured RCA",
    //       "Gained foundational experience in telecom network architecture, alarm lifecycle management, and real-time fault monitoring systems.",
    //       "Collaborated with 6+ cross-functional teams to document alarm behavior patterns, create RCA reports, and improve reporting accuracy. ",
    //       "Strengthened skills in data cleaning, dash boarding, and alarm trend identification, laying the groundwork for advanced NOC analytics"
    //     ]
    //   }
    // ],

"experience": [
  {
    "title": "Process Analyst",
    "company": "Bharti Airtel",
    "duration": "July 2024 - Present",
    "location": "Manesar, India",
    "description": "Driving process excellence and business intelligence initiatives across telecom operations by leveraging data analytics, automation, and cross-functional collaboration.",
    "achievements": [
      "Built an interactive Power BI dashboard analyzing 248K+ OBD calls across 19 telecom circles, leading to a 15% reduction in missed follow-ups and 40% improvement in manual workflows.",
      "Led process automation initiatives across NOC, Field, and Infra domains, enhancing operational efficiency and reducing manual efforts significantly.",
      "Designed and implemented UDAAN: a centralized escalation matrix covering 30+ flows across 21 circles, ensuring SLA adherence for 20K+ monthly field tickets.",
      "Created detailed BRDs and logic documentation for Remedy ticket ownership automation, reducing misassignments by 60% and cutting escalation TAT.",
      "Built a JIRA-based alarm testing workflow system, streamlining test planning and execution across 10+ monthly test cases with reduced email dependency.",
      "Currently developing an AI Chatbot for Remedy to assist 2,000+ engineers with ticket diagnostics, resolution guidance, and predictive suggestions.",
      "Conducted 12+ UAT cycles for JIRA and Remedy enhancements, enabling smooth deployments and early bug identification.",
      "Built multiple Power BI dashboards for real-time SLA monitoring, ticket escalations, and incident resolutions, reducing delay in decision-making by 25%.",
      "Delivered 15+ KT sessions and hands-on training workshops for internal teams to accelerate tool adoption and change management.",
      "Documented 10+ Business Requirement Documents (BRDs) for cross-functional system enhancements and stakeholder alignment."
    ]
  },
  {
    "title": "GET Intern",
    "company": "Bharti Airtel",
    "duration": "Feb-June'24",
    "location": "Manesar, India",
    "description": "Supported NOC operations and alarm analytics through structured data analysis, reporting, and inter-team collaboration.",
    "achievements": [
      "Analyzed 1,200+ service alarms using Excel and SQL, contributing to a 17% reduction in false positives through root cause identification.",
      "Acquired hands-on exposure to telecom network topologies, alarm lifecycle management, and live fault-monitoring protocols.",
      "Collaborated with 6+ internal teams to document alarm behavior patterns, contributing to improved RCA reporting and data accuracy.",
      "Built foundational skills in Excel automation, dashboarding, and alarm trend analysis, setting the stage for advanced BI development."
    ]
  }
],
    "certifications": [
      {"name": "Microsoft Power BI Desktop for Business Intellegence", "issuer": "Udemy", "year": "June 2025"},
      {"name": "Generative AI for Beginners", "issuer": "Udemy", "year": "June 2025"},
      {"name": "Process Optimization & Operational Excellence", "issuer": "Mercury Solutions Limited", "year": "March 2025"},
      {"name": "AI PRIMER CERTIFICATION", "issuer": "Infosys Springboard", "year": "Jul 2023"},
      {"name": "Intro to Data science", "issuer": "Infosys Springboard", "year": "July 2023"},
      {"name": "AWS Academy Introduction to Cloud Semester 1", "issuer": "Amazon Web Services (AWS)", "year": "June, 2022"}
    ]
  };

  // ================= UTILITY FUNCTIONS ================= 
  function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  // ================= LOADING SCREEN ================= 
  const loadingScreen = document.getElementById('loadingScreen');
  
  function hideLoadingScreen() {
    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.classList.add('hidden');
      }
      document.body.classList.add('loaded');
    }, 1500);
  }

  // ================= THEME TOGGLE ================= 
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  function updateThemeIcon(isDark) {
    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        if (isDark) {
          icon.className = 'fas fa-sun';
        } else {
          icon.className = 'fas fa-moon';
        }
      }
    }
  }

  // Initialize theme
  const savedTheme = localStorage.getItem('color-scheme') || 'dark';
  html.setAttribute('data-color-scheme', savedTheme);
  updateThemeIcon(savedTheme === 'dark');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-color-scheme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-color-scheme', newTheme);
      localStorage.setItem('color-scheme', newTheme);
      updateThemeIcon(newTheme === 'dark');
    });
  }

  // ================= MOBILE MENU TOGGLE ================= 
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navbar = document.getElementById('navbar');

  if (mobileMenuToggle && navbar) {
    mobileMenuToggle.addEventListener('click', () => {
      navbar.classList.toggle('mobile-open');
      const icon = mobileMenuToggle.querySelector('i');
      if (navbar.classList.contains('mobile-open')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });
  }

  // ================= HEADER SCROLL EFFECT ================= 
  const header = document.querySelector('.header');
  
  function handleHeaderScroll() {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }

  window.addEventListener('scroll', handleHeaderScroll);

  // ================= TYPING ANIMATION ================= 
  const typingElement = document.getElementById('typingText');
  const titles = [
    'Data Analyst & BI Developer',
    'Power BI Specialist',
    'Process Optimization Expert',
    'Telecom Analytics Expert',
    'Dashboard Creator',
    'Data Storyteller',
    'Process Analyst'
  ];
  
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeTitle() {
    if (!typingElement) return;
    
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentTitle.length) {
      speed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      speed = 500; // Pause before next title
    }

    setTimeout(typeTitle, speed);
  }

  // Start typing animation after loading
  setTimeout(typeTitle, 2000);

  // ================= SMOOTH SCROLLING NAVIGATION ================= 
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      
      // Smooth scroll to target
      smoothScrollTo(targetId);
      
      // Close mobile menu if open
      if (navbar) {
        navbar.classList.remove('mobile-open');
        const mobileIcon = mobileMenuToggle?.querySelector('i');
        if (mobileIcon) {
          mobileIcon.className = 'fas fa-bars';
        }
      }
    });
  });

  // Update active nav link on scroll
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);

  // ================= HERO CTA BUTTONS ================= 
  function setupHeroCTAButtons() {
    const heroCTAButtons = document.querySelectorAll('.hero__cta .btn');
    
    heroCTAButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const href = btn.getAttribute('href');
        
        if (href === '#projects') {
          smoothScrollTo('#projects');
        } 
      });
    });
  }

  // ================= POPULATE CONTENT ================= 
  
  // About section
  const aboutText = document.getElementById('aboutText');
  if (aboutText) {
    // aboutText.textContent = portfolioData.personalInfo.bio;
    aboutText.innerHTML = portfolioData.personalInfo.bio.replace(/\n/g, '<br>');

  }

  // Achievement counters
  // function populateCounters() {
  //   const counterGrid = document.getElementById('counterGrid');
  //   if (!counterGrid) return;
    
  //   counterGrid.innerHTML = `
  //    <span class="counter-number" data-target="${metric.value}" title="${metric.tooltip || ''}"> ${metric.value} </span> <span class="counter-label">${metric.label}</span> `;

  //   portfolioData.metrics.forEach(metric => {
  //     const counterCard = document.createElement('div');
  //     counterCard.className = 'counter-card';
  //     counterCard.innerHTML = `
  //       <span class="counter-number" data-target="${metric.value}">${metric.value}</span>
  //       <span class="counter-label">${metric.label}</span>
  //     `;
  //     counterGrid.appendChild(counterCard);
  //   });
  // }

function populateCounters() {
  const counterGrid = document.getElementById('counterGrid');
  if (!counterGrid) return;

  counterGrid.innerHTML = '';

  portfolioData.metrics.forEach(metric => {
    const counterCard = document.createElement('div');
    counterCard.className = 'counter-card hover-switch';

    counterCard.innerHTML = `
      <div class="kpi-content kpi-front">
        <span class="counter-number" data-target="${metric.value}">${metric.value}</span>
        <span class="counter-label">${metric.label}</span>
      </div>
      <div class="kpi-content kpi-back">
        <p class="kpi-description">${metric.description}</p>
      </div>
    `;

    counterGrid.appendChild(counterCard);
  });
}

  // Skills section
  function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    const softSkillsList = document.getElementById('softSkillList');
    
    if (!skillsGrid || !softSkillsList) return;

    // Group technical skills by category
    const skillCategories = {
  'Data Analysis & BI': [],
  'Programming & Database': [],
  'Web & UI Tools': [],
  'Automation & Platforms': []
};

portfolioData.skills.technical.forEach(skill => {
  const name = skill.name;

  if (['Power BI', 'DAX', 'Power Query', 'Excel/VBA'].includes(name)) {
    skillCategories['Data Analysis & BI'].push(skill);
  } else if (['SQL', 'Python for Data Analysis', 'C++'].includes(name)) {
    skillCategories['Programming & Database'].push(skill);
  } else if (['HTML', 'CSS', 'JavaScript', 'Figma'].includes(name)) {
    skillCategories['Web & UI Tools'].push(skill);
  } else if (['Power Automate', 'GitHub', 'Streamlit'].includes(name)) {
    skillCategories['Automation & Platforms'].push(skill);
  } else {
    skillCategories['Tools & Platforms'].push(skill); // fallback if missed
  }
});

    // Create skill cards for each category
    Object.entries(skillCategories).forEach(([category, skills]) => {
      if (skills.length > 0) {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        
        const skillsHTML = skills.map(skill => `
          <div class="skill-progress">
            <div class="skill-name">
              <span>${skill.name}</span>
              <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" data-width="${skill.level}"></div>
            </div>
          </div>
        `).join('');

        skillCard.innerHTML = `
          <h4>${category}</h4>
          ${skillsHTML}
        `;
        
        skillsGrid.appendChild(skillCard);
      }
    });

    // Soft skills
    portfolioData.skills.soft.forEach(skill => {
      const skillElement = document.createElement('li');
      skillElement.className = 'soft-skill';
      skillElement.textContent = skill;
      softSkillsList.appendChild(skillElement);
    });
  }

  // Projects section
  // function populateProjects() {
  //   const projectGrid = document.getElementById('projectGrid');
  //   const filterContainer = document.getElementById('projectFilters');
    
  //   if (!projectGrid || !filterContainer) return;

  //   // Get unique categories for filters
  //   const allCategories = new Set(['All']);
  //   portfolioData.projects.forEach(project => {
  //     allCategories.add(project.category);
  //   });

  //   // Create filter buttons
  //   Array.from(allCategories).forEach(filter => {
  //     const button = document.createElement('button');
  //     button.textContent = filter;
  //     button.className = filter === 'All' ? 'active' : '';
  //     button.addEventListener('click', () => filterProjects(filter, button));
  //     filterContainer.appendChild(button);
  //   });

  //   // Create project cards
  //   portfolioData.projects.forEach(project => {
  //     const projectCard = document.createElement('div');
  //     projectCard.className = 'project-card';
  //     projectCard.setAttribute('data-category', project.category);
      
  //     const techTags = project.technologies.map(tech => 
  //       `<span class="tech-tag">${tech}</span>`
  //     ).join('');

  //     const metrics = project.metrics.slice(0, 3).map(metric => 
  //       `<div class="metric">${metric}</div>`
  //     ).join('');

  //     projectCard.innerHTML = `
  //       <div class="project-card__header">
  //         <i class="fas fa-chart-line fa-3x"></i>
  //       </div>
  //       <div class="project-card__body">
  //         <h4>${project.title}</h4>
  //         <p>${project.description}</p>
  //         <div class="project-tech">${techTags}</div>
  //         <div class="project-metrics">${metrics}</div>
  //       </div>
  //     `;

  //     // Add click handler for modal
  //     projectCard.addEventListener('click', () => showProjectModal(project));
  //     projectGrid.appendChild(projectCard);
  //   });
  // }

function populateProjects() {
  const projectGrid = document.getElementById('projectGrid');
  const filterContainer = document.getElementById('projectFilters');
  
  if (!projectGrid || !filterContainer) return;

  // Get unique categories for filters
  const allCategories = new Set(['All']);
  portfolioData.projects.forEach(project => {
    allCategories.add(project.category);
  });

  // Create filter buttons
  filterContainer.innerHTML = ''; // Clear existing filters
  Array.from(allCategories).forEach(filter => {
    const button = document.createElement('button');
    button.textContent = filter;
    button.className = filter === 'All' ? 'active' : '';
    button.addEventListener('click', () => filterProjects(filter, button));
    filterContainer.appendChild(button);
  });

  // Create project cards
  projectGrid.innerHTML = ''; // Clear previous cards
  portfolioData.projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-category', project.category);

    const techTags = project.technologies.map(tech => 
      `<span class="tech-tag">${tech}</span>`
    ).join('');

    const metrics = project.metrics.slice(0, 3).map(metric => 
      `<div class="metric">${metric}</div>`
    ).join('');

    const githubBtn = project.link?.github
      ? `<a href="${project.link.github}" class="btn btn--sm btn--outline" target="_blank" onclick="event.stopPropagation()">GitHub</a>`
      : '';
    
    const demoBtn = project.link?.demo
      ? `<a href="${project.link.demo}" class="btn btn--sm btn--primary" target="_blank" onclick="event.stopPropagation()">Live Demo</a>`
      : '';

    projectCard.innerHTML = `
      <div class="project-card__header">
        <i class="fas fa-chart-line fa-3x"></i>
      </div>
      <div class="project-card__body">
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <div class="project-tech">${techTags}</div>
        <div class="project-metrics">${metrics}</div>
        <div class="project-links">${githubBtn} ${demoBtn}</div>
      </div>
    `;

    // Show modal on card click
    projectCard.addEventListener('click', () => showProjectModal(project));
    projectGrid.appendChild(projectCard);
  });
}

  // Filter projects
  function filterProjects(filter, activeButton) {
    const projectCards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('#projectFilters button');

    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');

    // Filter cards
    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (filter === 'All' || cardCategory === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Experience timeline
  function populateExperience() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    portfolioData.experience.forEach(exp => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      
      const achievements = exp.achievements.map(achievement => 
        `<div class="achievement">${achievement}</div>`
      ).join('');

      timelineItem.innerHTML = `
        <div class="timeline-content">
          <h4>${exp.title}</h4>
          <h5>${exp.company} - ${exp.location}</h5>
          <p>${exp.description}</p>
          <div class="achievements">
            ${achievements}
          </div>
        </div>
        <div class="timeline-date">${exp.duration}</div>
      `;
      
      timeline.appendChild(timelineItem);
    });
  }

  // Certifications
  function populateCertifications() {
    const certGrid = document.getElementById('certificationsGrid');
    if (!certGrid) return;
    
    portfolioData.certifications.forEach(cert => {
      const certCard = document.createElement('div');
      certCard.className = 'cert-card';
      
      certCard.innerHTML = `
        <div class="cert-icon">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
        <h4>${cert.name}</h4>
        <p>${cert.issuer} • ${cert.year}</p>
      `;
      
      certGrid.appendChild(certCard);
    });
  }

  // ================= MODAL FUNCTIONALITY ================= 
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');

  function showProjectModal(project) {
    if (!modal) return;
    
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTechStack = document.getElementById('modalTechStack');
    const modalMetrics = document.getElementById('modalMetrics');
    const modalImpact = document.getElementById('modalImpact');
    const modalStakeholders = document.getElementById('modalStakeholders');
    
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDescription) modalDescription.textContent = project.description;
    
    // Populate tech stack
    if (modalTechStack) {
      modalTechStack.innerHTML = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
      ).join('');
    }
    
    // Populate metrics
    if (modalMetrics) {
      modalMetrics.innerHTML = '';
      project.metrics.forEach(metric => {
        const li = document.createElement('li');
        li.textContent = metric;
        modalMetrics.appendChild(li);
      });
    }

    if (modalImpact) modalImpact.innerHTML = `<strong>Impact:</strong> ${project.impact}`;
    if (modalStakeholders) modalStakeholders.innerHTML = `<strong>Stakeholders:</strong> ${project.stakeholders}`;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    if (modalClose) {
      setTimeout(() => modalClose.focus(), 100);
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  // Close modal on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // ================= SCROLL ANIMATIONS ================= 
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate skill progress bars
        const progressBars = entry.target.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.width = width + '%';
        });

        // Animate counters
        const counters = entry.target.querySelectorAll('.counter-number');
        counters.forEach(counter => {
          if (!counter.classList.contains('animated')) {
            counter.classList.add('animated');
            animateCounter(counter);
          }
        });

        // Add fade-in animation class
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe sections for animations
  const animatedSections = document.querySelectorAll('.skills, .counters, .about, .projects, .experience, .certifications');
  animatedSections.forEach(section => {
    observer.observe(section);
  });

  // Counter animation
  // function animateCounter(element) {
  //   const target = element.getAttribute('data-target');
  //   const isPercent = target.includes('%');
  //   const isPlus = target.includes('+');
  //   const numericValue = parseInt(target.replace(/[^\d]/g, ''));
    
  //   let current = 0;
  //   const increment = numericValue / 50;
  //   const duration = 2000;
  //   const stepTime = duration / 50;

  //   const timer = setInterval(() => {
  //     current += increment;
  //     if (current >= numericValue) {
  //       current = numericValue;
  //       clearInterval(timer);
  //     }
      
  //     let displayValue = Math.floor(current);
  //     if (isPercent) displayValue += '%';
  //     if (isPlus && current >= numericValue) displayValue += '+';
  //     if (target.includes('K')) displayValue = Math.floor(current) + 'K+';
      
  //     element.textContent = displayValue;
  //   }, stepTime);
  // }

  function animateCounter(element) {
  const target = element.getAttribute('data-target');
  
  const match = target.match(/^(\d+)/); // Extract leading number
  const number = match ? parseInt(match[1]) : 0;
  const suffix = target.slice(match ? match[1].length : 0); // Keep the rest as suffix

  let current = 0;
  const increment = number / 50;
  const duration = 2000;
  const stepTime = duration / 50;

  const timer = setInterval(() => {
    current += increment;
    if (current >= number) {
      current = number;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
  }, stepTime);
}


  // ================= CONTACT FORM ================= 
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name')?.value;
      const email = document.getElementById('email')?.value;
      const subject = document.getElementById('subject')?.value;
      const message = document.getElementById('message')?.value;

      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitButton.disabled = true;

      setTimeout(() => {
        alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
        contactForm.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      }, 2000);
    });
  }

  // ================= PARTICLES ANIMATION ================= 
  function createParticles() {
    const particlesContainer = document.querySelector('.hero__particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '2px';
      particle.style.height = '2px';
      particle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      particlesContainer.appendChild(particle);
    }
  }

  // ================= FOOTER YEAR ================= 
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ================= INITIALIZE ================= 
  function initializePortfolio() {
    populateCounters();
    populateSkills();
    populateProjects();
    populateExperience();
    populateCertifications();
    createParticles();
    setupHeroCTAButtons();
    hideLoadingScreen();
    
    // Initial scroll check
    setTimeout(() => {
      updateActiveNavLink();
      handleHeaderScroll();
    }, 100);
  }

  // Start initialization
  initializePortfolio();
  
  // ================= PERFORMANCE OPTIMIZATIONS ================= 
  
  // Debounced scroll handler for better performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
    handleHeaderScroll();
  }, 10);

  window.addEventListener('scroll', debouncedScrollHandler);

  // ================= ERROR HANDLING ================= 
  window.addEventListener('error', (e) => {
    console.error('Portfolio error:', e.error);
  });

  // ================= ACCESSIBILITY ENHANCEMENTS ================= 
  
  // Skip to main content link for screen readers
  const skipLink = document.createElement('a');
  skipLink.href = '#about';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only';
  skipLink.style.position = 'absolute';
  skipLink.style.top = '-40px';
  skipLink.style.left = '6px';
  skipLink.style.background = 'var(--color-primary)';
  skipLink.style.color = 'white';
  skipLink.style.padding = '8px';
  skipLink.style.textDecoration = 'none';
  skipLink.style.borderRadius = '4px';
  skipLink.style.zIndex = '10001';
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px';
  });
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  
  skipLink.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScrollTo('#about');
  });
  
  document.body.insertBefore(skipLink, document.body.firstChild);

  console.log('Portfolio initialized successfully!');
});