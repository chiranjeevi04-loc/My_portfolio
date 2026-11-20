/* ===== EDIT YOUR CONTENT HERE ===== */
const skills = [
  { icon: 'fa-code', title: 'Programming', items: ['Python', 'C', 'JavaScript'] },
  { icon: 'fa-globe', title: 'Web Development', items: ['HTML', 'CSS'] },
  { icon: 'fa-screwdriver-wrench', title: 'Tools & Technologies', items: ['Tableau', 'Microsoft Power BI', 'VS Code', 'ChatGPT', 'GitHub Copilot'] },
  { icon: 'fa-brain', title: 'Core Concepts', items: ['Data Structures & Algorithms', 'Generative AI Basics', 'Web Development Fundamentals'] },
  { icon: 'fa-people-group', title: 'Soft Skills', items: ['Teamwork', 'Communication'] }
];

// Add a GitHub link by filling "repo" with a real URL. The GitHub button only appears when "repo" is not empty.
const projects = [
  {
    title: 'Screen Time & Sleep Debt Analysis',
    domain: 'Advanced Python',
    description: 'A Python-based data analysis project studying the relationship between smartphone screen time, sleep patterns, sleep debt and next-day fatigue.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook'],
    features: ['Data cleaning and preprocessing', 'Exploratory data analysis', 'Data visualization', 'Sleep pattern analysis', 'Machine learning classification', 'Model evaluation'],
    status: 'Complete: cleaning, EDA, classification and evaluation',
    details: [
      ['Data cleaning', 'Checked missing values, removed duplicate records and reviewed data types and columns.'],
      ['Exploratory analysis', 'Scatter plots of bedtime phone minutes against total sleep hours and next-day fatigue score, a sleep-debt category count plot and a correlation heatmap.'],
      ['Classification', 'Predicts the sleep-debt category using Decision Tree, Random Forest and Logistic Regression models, built with a scikit-learn pipeline (median/most-frequent imputation, scaling, one-hot encoding) and a stratified 80/20 train-test split.'],
      ['Evaluation', 'Compares models on accuracy, macro precision, macro recall and macro F1-score, with confusion matrices, and selects the best model by macro F1-score.']
    ],
    repo: ''
  },
  {
    title: 'Student Placement Analysis',
    domain: 'Machine Learning',
    description: 'A machine learning and data analysis project that explores student-related data and prepares it for placement outcome analysis.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook'],
    features: ['Dataset analysis', 'Data cleaning', 'Missing value detection', 'Duplicate checking', 'Exploratory data analysis', 'Outlier detection', 'Feature encoding', 'Training and validation data splitting'],
    status: 'Data preparation stage: model training and prediction are not part of this project yet',
    details: [
      ['Completed', 'Dataset analysis, data cleaning, missing value detection, duplicate checking, exploratory data analysis, outlier detection, feature encoding, and splitting into training and validation data.'],
      ['Not yet implemented', 'Model training and placement prediction.']
    ],
    repo: ''
  },
  {
    title: 'Library Management System',
    domain: 'Database Management System (DBMS)',
    description: 'A database management project designed to organize and maintain library records and simplify library operations.',
    tech: [],
    features: ['Book management', 'Book search', 'Book issuing', 'Book returning', 'Record management'],
    status: '',
    details: [['Overview', 'Organizes and maintains library records and covers the core library operations: managing, searching, issuing and returning books.']],
    repo: ''
  }
];

const certifications = [
  { icon: 'fa-python', brand: true, title: 'Python', issuer: 'Infosys Springboard' },
  { icon: 'fa-sitemap', title: 'Data Structures & Algorithms in Python', issuer: 'Infosys Springboard' },
  { icon: 'fa-robot', title: 'Generative AI', issuer: 'Google Skills' }
];
const workshops = [{ icon: 'fa-cloud', title: 'Google Cloud Computing Foundation', issuer: 'Workshop' }];
const interests = ['Technology', 'Finance & Business Strategy', 'Geopolitics', 'Emerging Technologies', 'Analytical Reading'];
const languages = ['English', 'Hindi', 'Telugu'];
/* ===== END OF EDITABLE CONTENT ===== */

const $ = (s) => document.querySelector(s);
const el = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; };
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const chips = (a) => a.map((x) => `<span>${esc(x)}</span>`).join('');

document.documentElement.classList.add('js');
$('#year').textContent = new Date().getFullYear();

skills.forEach((s) => $('#skillGrid').append(el(
  `<article class="glass pad card"><div class="ico"><i class="fa-solid ${s.icon}"></i></div><h3>${esc(s.title)}</h3><div class="chips">${chips(s.items)}</div></article>`)));

projects.forEach((p, i) => {
  const gh = p.repo ? `<a class="btn" href="${esc(p.repo)}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>` : '';
  const tech = p.tech.length ? `<div class="chips">${chips(p.tech)}</div>` : '';
  $('#projectGrid').append(el(
    `<article class="glass pad card project"><div class="ico"><i class="fa-solid fa-folder-open"></i></div>
     <h3>${esc(p.title)}</h3><span class="domain">${esc(p.domain)}</span><p>${esc(p.description)}</p>${tech}
     <ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
     ${p.status ? `<span class="status">${esc(p.status)}</span>` : ''}
     <div class="btn-row"><button class="btn primary" data-i="${i}"><i class="fa-solid fa-eye"></i> View Project</button>${gh}</div></article>`));
});

const dlg = $('#projectDialog');
$('#projectGrid').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-i]'); if (!b) return;
  const p = projects[b.dataset.i];
  $('#dlgBody').innerHTML = `<h3>${esc(p.title)}</h3><p>${esc(p.domain)}</p>
    <h4>About</h4><p>${esc(p.description)}</p>
    ${p.tech.length ? `<h4>Technologies</h4><div class="chips">${chips(p.tech)}</div>` : ''}
    ${p.details.map((d) => `<h4>${esc(d[0])}</h4><p>${esc(d[1])}</p>`).join('')}
    <h4>Key features</h4><ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`;
  dlg.showModal();
});
$('#dlgClose').onclick = () => dlg.close();
dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

const certCard = (c) => el(`<article class="glass pad card"><div class="ico"><i class="${c.brand ? 'fa-brands' : 'fa-solid'} ${c.icon}"></i></div><h3>${esc(c.title)}</h3><p class="muted">${esc(c.issuer)}</p></article>`);
certifications.forEach((c) => $('#certGrid').append(certCard(c)));
workshops.forEach((c) => $('#workshopGrid').append(certCard(c)));
$('#interestChips').innerHTML = chips(interests);
$('#langChips').innerHTML = chips(languages);

/* nav */
const nav = $('#nav'), links = $('#links'), btn = $('#menuBtn'), toTop = $('#toTop');
btn.onclick = () => { const o = links.classList.toggle('open'); btn.setAttribute('aria-expanded', o); };
links.addEventListener('click', () => { links.classList.remove('open'); btn.setAttribute('aria-expanded', false); });
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 30);
  toTop.classList.toggle('show', scrollY > 600);
}, { passive: true });
toTop.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

/* active link + reveal */
const navLinks = [...links.querySelectorAll('a')];
const spy = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
const rev = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); } }), { threshold: .08 });
document.querySelectorAll('main section').forEach((s) => spy.observe(s));
document.querySelectorAll('.reveal').forEach((s) => rev.observe(s));
