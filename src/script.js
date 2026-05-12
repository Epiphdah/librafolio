/* ============================================================
   PUBLIKA — SPA Principal
   Architecture : Router Hash-based, Pages modulaires, Animations
   ============================================================ */

/* ── Données fictives ─────────────────────────────────────── */
const MOCK_DOCS = [
  { id: 1, title: "Rapport Annuel 2025", pages: 48, category: "Rapport", views: 1284, likes: 87, date: "12 mai 2025", status: "published", color: "#2563EB" },
  { id: 2, title: "Guide Marketing Digital", pages: 32, category: "Guide", views: 956, likes: 62, date: "8 mai 2025", status: "published", color: "#8B5CF6" },
  { id: 3, title: "Catalogue Produits 2026", pages: 64, category: "Catalogue", views: 2103, likes: 134, date: "5 mai 2025", status: "published", color: "#10B981" },
  { id: 4, title: "Présentation Stratégique", pages: 22, category: "Présentation", views: 789, likes: 45, date: "2 mai 2025", status: "draft", color: "#F59E0B" },
  { id: 5, title: "Manuel d'Utilisation", pages: 86, category: "Manuel", views: 3421, likes: 198, date: "28 avr. 2025", status: "published", color: "#EF4444" },
  { id: 6, title: "Newsletter Printemps", pages: 12, category: "Newsletter", views: 445, likes: 28, date: "25 avr. 2025", status: "processing", color: "#06B6D4" },
  { id: 7, title: "Bilan Financier Q1", pages: 28, category: "Rapport", views: 678, likes: 41, date: "20 avr. 2025", status: "published", color: "#2563EB" },
  { id: 8, title: "Formation Équipe RH", pages: 54, category: "Formation", views: 1102, likes: 73, date: "15 avr. 2025", status: "published", color: "#8B5CF6" },
];

const ACTIVITY_FEED = [
  { icon: "👁️", type: "view", desc: "<strong>Marie Dupont</strong> a consulté <strong>Rapport Annuel 2025</strong>", time: "Il y a 2 min" },
  { icon: "⬆️", type: "upload", desc: "Nouveau document uploadé : <strong>Newsletter Printemps</strong>", time: "Il y a 18 min" },
  { icon: "📤", type: "share", desc: "<strong>Guide Marketing Digital</strong> partagé sur LinkedIn", time: "Il y a 45 min" },
  { icon: "❤️", type: "like", desc: "<strong>Thomas Martin</strong> a aimé <strong>Catalogue Produits 2026</strong>", time: "Il y a 1h" },
  { icon: "👁️", type: "view", desc: "<strong>Sophie Laurent</strong> a consulté <strong>Manuel d'Utilisation</strong>", time: "Il y a 2h" },
];

const CHART_DATA = [45, 72, 58, 90, 65, 88, 76, 95, 82, 70, 105, 98];
const CHART_MONTHS = ["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Aoû","Sep","Oct","Nov","Déc"];

/* ── State ────────────────────────────────────────────────── */
let currentUser = { name: "Alex Moreau", email: "alex.moreau@email.com", initials: "AM", plan: "PRO" };
let currentFilter = "all";
let currentView = "grid";
let currentPage = 1;
let totalPages = 24;
let zoomLevel = 100;
let isFullscreen = false;
let sidebarOpen = false;

/* ── Router ───────────────────────────────────────────────── */
const routes = {
  "/"           : renderHome,
  "/login"      : renderLogin,
  "/register"   : renderRegister,
  "/dashboard"  : renderDashboard,
  "/publications": renderPublications,
  "/reader"     : renderReader,
};

function getHash() {
  const hash = location.hash.slice(1) || "/";
  return hash.split("?")[0];
}

function navigate(path) {
  location.hash = "#" + path;
}

function router() {
  const path = getHash();
  const render = routes[path] || renderNotFound;
  const container = document.getElementById("page-container");
  const footer = document.getElementById("footer");
  const navbar = document.getElementById("navbar");

  container.innerHTML = "";
  container.style.animation = "none";
  requestAnimationFrame(() => {
    container.style.animation = "";
    container.classList.add("page-enter");
    setTimeout(() => container.classList.remove("page-enter"), 400);
  });

  // Navbar & footer visibility
  const hiddenFooterPages = ["/reader"];
  const dashboardPages = ["/dashboard", "/publications", "/reader"];
  footer.className = "footer";
  if (hiddenFooterPages.includes(path)) { footer.style.display = "none"; }
  else { footer.style.display = ""; }

  // Navbar style
  if (path === "/") {
    navbar.className = "navbar transparent";
    setupScrollNavbar();
  } else {
    navbar.className = "navbar solid";
    removeScrollNavbar();
  }

  // Active nav link
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href")?.replace("#", "");
    link.classList.toggle("active", href === path);
  });

  render(container);
  scrollRevealInit();
  window.scrollTo(0, 0);
}

function setupScrollNavbar() {
  const onScroll = () => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    if (window.scrollY > 50) { navbar.className = "navbar solid"; }
    else { navbar.className = "navbar transparent"; }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window._scrollHandler = onScroll;
}

function removeScrollNavbar() {
  if (window._scrollHandler) {
    window.removeEventListener("scroll", window._scrollHandler);
    window._scrollHandler = null;
  }
}

/* ── Scroll Reveal ────────────────────────────────────────── */
function scrollRevealInit() {
  const items = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => observer.observe(el));
}

/* ── Toast ────────────────────────────────────────────────── */
function showToast(title, msg, type = "info", duration = 4000) {
  const icons = { success: "✅", error: "❌", warning: "⚠️", info: "💡" };
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || "💡"}</span>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      ${msg ? `<div class="toast-msg">${msg}</div>` : ""}
    </div>
    <button class="toast-close" onclick="removeToast(this.parentElement)">✕</button>
  `;
  container.appendChild(toast);
  setTimeout(() => removeToast(toast), duration);
}

function removeToast(el) {
  if (!el || !el.parentElement) return;
  el.classList.add("removing");
  setTimeout(() => el.remove(), 300);
}
window.removeToast = removeToast;

/* ── Navbar Hamburger ─────────────────────────────────────── */
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("navbar-menu");
  if (!hamburger) return;
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    menu.classList.toggle("open");
  });
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
      hamburger.classList.remove("open");
      menu.classList.remove("open");
    }
  });
}

/* ══════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════ */
function renderHome(container) {
  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-grid"></div>
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
      </div>
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badge"><span class="badge-dot"></span> Plateforme n°1 en Europe</div>
          <h1 class="hero-title">Publiez vos documents en <span class="highlight">toute élégance</span></h1>
          <p class="hero-subtitle">La plateforme premium pour transformer vos PDFs en publications numériques captivantes. Lecteur flipbook intégré, analytics avancés, partage instantané.</p>
          <div class="hero-cta">
            <a href="#/register" class="btn btn-white btn-lg" data-link>🚀 Commencer gratuitement</a>
            <a href="#/reader" class="btn btn-ghost btn-lg" data-link>👁️ Voir la démo</a>
          </div>
          <div class="hero-stats">
            <div>
              <div class="hero-stat-value">50K+</div>
              <div class="hero-stat-label">PUBLICATIONS</div>
            </div>
            <div>
              <div class="hero-stat-value">12K+</div>
              <div class="hero-stat-label">UTILISATEURS</div>
            </div>
            <div>
              <div class="hero-stat-value">98%</div>
              <div class="hero-stat-label">SATISFACTION</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-device">
            <div class="device-bar">
              <div class="device-dot"></div>
              <div class="device-dot"></div>
              <div class="device-dot"></div>
            </div>
            <div class="device-content">
              ${MOCK_DOCS.slice(0, 5).map(d => `
                <div class="device-doc">
                  <div class="doc-thumb" style="background:linear-gradient(135deg,${d.color} 0%,${d.color}99 100%)"></div>
                  <div class="doc-info">
                    <div class="doc-title">${d.title}</div>
                    <div class="doc-meta">${d.pages} pages · ${d.category}</div>
                  </div>
                  <div class="doc-views">👁️ ${(d.views/1000).toFixed(1)}K</div>
                </div>
              `).join("")}
            </div>
          </div>
          <div class="floating-card floating-card-1">
            <span class="floating-icon">📈</span>
            <span class="floating-text">
              <span class="floating-value">+247%</span>
              <span class="floating-label">Engagement ce mois</span>
            </span>
          </div>
          <div class="floating-card floating-card-2">
            <span class="floating-icon">⚡</span>
            <span class="floating-text">
              <span class="floating-value">0.8s</span>
              <span class="floating-label">Temps de chargement</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features-section">
      <div class="section-container">
        <div class="section-header">
          <div class="section-tag reveal">Fonctionnalités</div>
          <h2 class="section-title reveal">Tout ce dont vous avez besoin</h2>
          <p class="section-subtitle reveal">Une suite complète d'outils pour publier, partager et analyser vos documents numériques.</p>
        </div>
        <div class="features-grid">
          ${[
            { icon: "📖", title: "Lecteur Flipbook Premium", desc: "Un lecteur immersif avec effet de tournage de page réaliste, zoom HD et mode plein écran pour une expérience de lecture unique." },
            { icon: "⬆️", title: "Upload Intelligent", desc: "Importez vos PDFs en quelques secondes. Conversion automatique, optimisation des images et génération de miniatures." },
            { icon: "📊", title: "Analytics Avancés", desc: "Suivez en temps réel les vues, le temps de lecture, les partages et l'engagement de chaque publication." },
            { icon: "🔒", title: "Confidentialité Totale", desc: "Contrôlez qui accède à vos documents : public, privé ou partagé par lien sécurisé avec expiration." },
            { icon: "📱", title: "100% Responsive", desc: "Vos publications s'adaptent parfaitement à tous les écrans : mobile, tablette et desktop, sans compromis." },
            { icon: "🚀", title: "Partage Instantané", desc: "Un lien unique pour chaque publication. Intégrez vos documents sur n'importe quel site en un copier-coller." },
          ].map(f => `
            <div class="feature-card reveal">
              <div class="feature-icon">${f.icon}</div>
              <h3 class="feature-title">${f.title}</h3>
              <p class="feature-desc">${f.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- How it Works -->
    <section class="section how-section">
      <div class="section-container">
        <div class="section-header">
          <div class="section-tag reveal">Comment ça marche</div>
          <h2 class="section-title reveal">Publiez en 3 étapes simples</h2>
          <p class="section-subtitle reveal">De votre PDF à une publication professionnelle en moins de 2 minutes.</p>
        </div>
        <div class="steps-grid">
          ${[
            { n: 1, title: "Importez votre PDF", desc: "Glissez-déposez votre document ou choisissez-le depuis votre ordinateur. Formats supportés : PDF, DOC, PPTX." },
            { n: 2, title: "Personnalisez", desc: "Ajoutez un titre, une description, choisissez la catégorie et définissez les options de confidentialité." },
            { n: 3, title: "Publiez", desc: "Partagez votre publication avec un lien unique ou intégrez-la directement sur votre site web." },
            { n: 4, title: "Analysez", desc: "Suivez les performances de vos publications en temps réel avec nos analytics détaillés." },
          ].map(s => `
            <div class="step-card reveal">
              <div class="step-num">${s.n}</div>
              <h3 class="step-title">${s.title}</h3>
              <p class="step-desc">${s.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats-section">
      <div class="stats-grid">
        ${[
          { val: "50K+", label: "Publications actives" },
          { val: "12K+", label: "Utilisateurs actifs" },
          { val: "2.5M", label: "Lectures par mois" },
          { val: "99.9%", label: "Disponibilité" },
        ].map(s => `
          <div class="reveal">
            <div class="stat-value">${s.val}</div>
            <div class="stat-label">${s.label}</div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="hero-orb hero-orb-1" style="opacity:0.3"></div>
      <div class="hero-orb hero-orb-2" style="opacity:0.3"></div>
      <div class="cta-content">
        <h2 class="cta-title reveal">Prêt à publier votre premier document ?</h2>
        <p class="cta-sub reveal">Rejoignez 12 000+ professionnels qui font confiance à Librafolio.</p>
        <div class="cta-btns reveal">
          <a href="#/register" class="btn btn-white btn-lg" data-link>Créer mon compte gratuit</a>
          <a href="#/login" class="btn btn-ghost btn-lg" data-link>Me connecter</a>
        </div>
      </div>
    </section>
  `;
  initDataLinks(container);
}

/* ══════════════════════════════════════════════════════════
   LOGIN PAGE
══════════════════════════════════════════════════════════ */
function renderLogin(container) {
  container.innerHTML = `
    <div class="auth-page" style="padding-top:65px">
      <div class="auth-side">
        <div class="auth-side-orb auth-side-orb-1"></div>
        <div class="auth-side-orb auth-side-orb-2"></div>
        <div class="auth-side-content">
          <div class="auth-side-logo">📖 <span>Librafolio</span></div>
          <h2 class="auth-side-title">Bienvenue !</h2>
          <p class="auth-side-text">Connectez-vous pour accéder à vos publications et gérer votre espace numérique.</p>
          <div class="auth-side-features">
            ${[
              { icon: "📊", text: "Analytics en temps réel" },
              { icon: "📖", text: "Lecteur flipbook premium" },
              { icon: "🔒", text: "Sécurité maximale" },
              { icon: "🚀", text: "Performance ultra-rapide" },
            ].map(f => `
              <div class="auth-side-feature">
                <div class="auth-side-feature-icon">${f.icon}</div>
                <span style="font-size:0.875rem">${f.text}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
      <div class="auth-form-side">
        <div class="auth-form-box">
          <div class="auth-form-header">
            <h1 class="auth-form-title">Connexion</h1>
            <p class="auth-form-sub">Pas encore de compte ? <a href="#/register" data-link>S'inscrire gratuitement</a></p>
          </div>

          <div class="social-btns">
            <button class="btn-social" onclick="handleSocialLogin('Google')">
              <span>🔵</span> Google
            </button>
            <button class="btn-social" onclick="handleSocialLogin('LinkedIn')">
              <span>🔷</span> LinkedIn
            </button>
          </div>
          <div class="form-divider">ou continuez avec votre email</div>

          <form id="login-form" novalidate>
            <div class="form-group">
              <label class="form-label" for="email">Adresse email</label>
              <div class="form-input-wrap">
                <span class="form-input-icon">✉️</span>
                <input class="form-input has-icon" type="email" id="email" name="email" placeholder="vous@exemple.com" autocomplete="email" />
              </div>
              <div class="form-error" id="email-error">Adresse email invalide</div>
            </div>

            <div class="form-group">
              <label class="form-label" for="password">Mot de passe</label>
              <div class="form-input-wrap">
                <span class="form-input-icon">🔒</span>
                <input class="form-input has-icon" type="password" id="password" name="password" placeholder="••••••••" autocomplete="current-password" style="padding-right:2.8rem" />
                <button type="button" class="password-toggle" id="pwd-toggle" aria-label="Afficher le mot de passe">👁️</button>
              </div>
              <div class="form-error" id="password-error">Mot de passe requis (min. 6 caractères)</div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem">
              <label class="form-checkbox">
                <input type="checkbox" id="remember" /> Se souvenir de moi
              </label>
              <a href="#" style="font-size:0.85rem;color:var(--accent);font-weight:600">Mot de passe oublié ?</a>
            </div>

            <button type="submit" class="btn btn-primary btn-lg form-submit" id="login-btn">
              <span id="login-btn-text">Se connecter</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  `;

  initDataLinks(container);
  initLoginForm();
}

function initLoginForm() {
  const form = document.getElementById("login-form");
  const toggleBtn = document.getElementById("pwd-toggle");
  const pwdInput = document.getElementById("password");

  toggleBtn?.addEventListener("click", () => {
    const isText = pwdInput.type === "text";
    pwdInput.type = isText ? "password" : "text";
    toggleBtn.textContent = isText ? "👁️" : "🙈";
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const emailError = document.getElementById("email-error");
    const pwdError = document.getElementById("password-error");
    const emailInput = document.getElementById("email");
    const pwdInput = document.getElementById("password");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailInput.classList.add("error");
      emailError.classList.add("visible");
      valid = false;
    } else {
      emailInput.classList.remove("error");
      emailError.classList.remove("visible");
    }

    if (!password || password.length < 6) {
      pwdInput.classList.add("error");
      pwdError.classList.add("visible");
      valid = false;
    } else {
      pwdInput.classList.remove("error");
      pwdError.classList.remove("visible");
    }

    if (!valid) return;

    const btn = document.getElementById("login-btn");
    const btnText = document.getElementById("login-btn-text");
    btn.disabled = true;
    btnText.textContent = "Connexion en cours...";

    setTimeout(() => {
      btn.disabled = false;
      btnText.textContent = "Se connecter";
      showToast("Connexion réussie !", "Bienvenue sur Librafolio, " + email.split("@")[0], "success");
      setTimeout(() => navigate("/dashboard"), 800);
    }, 1600);
  });

  document.querySelectorAll(".form-input").forEach(input => {
    input.addEventListener("input", () => {
      input.classList.remove("error");
      const errorEl = document.getElementById(input.id + "-error");
      if (errorEl) errorEl.classList.remove("visible");
    });
  });
}

function handleSocialLogin(provider) {
  showToast("Redirection...", `Connexion via ${provider} en cours`, "info", 2000);
  setTimeout(() => {
    showToast("Connexion réussie !", `Bienvenue ! Connecté via ${provider}`, "success");
    setTimeout(() => navigate("/dashboard"), 800);
  }, 2000);
}
window.handleSocialLogin = handleSocialLogin;

/* ══════════════════════════════════════════════════════════
   REGISTER PAGE
══════════════════════════════════════════════════════════ */
function renderRegister(container) {
  container.innerHTML = `
    <div class="auth-page" style="padding-top:65px">
      <div class="auth-side">
        <div class="auth-side-orb auth-side-orb-1"></div>
        <div class="auth-side-orb auth-side-orb-2"></div>
        <div class="auth-side-content">
          <div class="auth-side-logo">📖 <span>Librafolio</span></div>
          <h2 class="auth-side-title">Rejoignez Librafolio</h2>
          <p class="auth-side-text">Créez votre compte gratuit et commencez à publier vos documents dès aujourd'hui.</p>
          <div class="auth-side-features">
            ${[
              { icon: "✅", text: "Plan gratuit à vie" },
              { icon: "⚡", text: "Configuration en 2 minutes" },
              { icon: "🎯", text: "10 publications offertes" },
              { icon: "💬", text: "Support prioritaire 24/7" },
            ].map(f => `
              <div class="auth-side-feature">
                <div class="auth-side-feature-icon">${f.icon}</div>
                <span style="font-size:0.875rem">${f.text}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
      <div class="auth-form-side">
        <div class="auth-form-box">
          <div class="auth-form-header">
            <h1 class="auth-form-title">Créer un compte</h1>
            <p class="auth-form-sub">Déjà inscrit ? <a href="#/login" data-link>Se connecter</a></p>
          </div>

          <div class="social-btns">
            <button class="btn-social" onclick="handleSocialLogin('Google')">
              <span>🔵</span> Google
            </button>
            <button class="btn-social" onclick="handleSocialLogin('LinkedIn')">
              <span>🔷</span> LinkedIn
            </button>
          </div>
          <div class="form-divider">ou créez avec votre email</div>

          <form id="register-form" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="firstname">Prénom</label>
                <div class="form-input-wrap">
                  <span class="form-input-icon">👤</span>
                  <input class="form-input has-icon" type="text" id="firstname" placeholder="Jean" />
                </div>
                <div class="form-error" id="firstname-error">Prénom requis</div>
              </div>
              <div class="form-group">
                <label class="form-label" for="lastname">Nom</label>
                <div class="form-input-wrap">
                  <span class="form-input-icon">👤</span>
                  <input class="form-input has-icon" type="text" id="lastname" placeholder="Dupont" />
                </div>
                <div class="form-error" id="lastname-error">Nom requis</div>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="reg-email">Adresse email</label>
              <div class="form-input-wrap">
                <span class="form-input-icon">✉️</span>
                <input class="form-input has-icon" type="email" id="reg-email" placeholder="vous@exemple.com" />
              </div>
              <div class="form-error" id="reg-email-error">Adresse email invalide</div>
            </div>

            <div class="form-group">
              <label class="form-label" for="reg-password">Mot de passe</label>
              <div class="form-input-wrap">
                <span class="form-input-icon">🔒</span>
                <input class="form-input has-icon" type="password" id="reg-password" placeholder="Minimum 8 caractères" style="padding-right:2.8rem" oninput="checkPasswordStrength(this.value)" />
                <button type="button" class="password-toggle" id="reg-pwd-toggle" aria-label="Afficher">👁️</button>
              </div>
              <div class="strength-bar"><div class="strength-fill" id="strength-fill"></div></div>
              <div class="strength-text" id="strength-text">Entrez un mot de passe</div>
              <div class="form-error" id="reg-password-error">Minimum 8 caractères requis</div>
            </div>

            <div class="form-group">
              <label class="form-label" for="confirm-password">Confirmer le mot de passe</label>
              <div class="form-input-wrap">
                <span class="form-input-icon">🔒</span>
                <input class="form-input has-icon" type="password" id="confirm-password" placeholder="Répétez votre mot de passe" />
              </div>
              <div class="form-error" id="confirm-password-error">Les mots de passe ne correspondent pas</div>
            </div>

            <label class="form-checkbox" style="margin-bottom:1.25rem">
              <input type="checkbox" id="terms" />
              <span>J'accepte les <a href="#">Conditions d'utilisation</a> et la <a href="#">Politique de confidentialité</a></span>
            </label>
            <div class="form-error" id="terms-error" style="margin-top:-0.75rem;margin-bottom:1rem">Vous devez accepter les conditions</div>

            <button type="submit" class="btn btn-primary btn-lg form-submit" id="register-btn">
              <span id="register-btn-text">Créer mon compte</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  `;

  initDataLinks(container);
  initRegisterForm();
}

function checkPasswordStrength(val) {
  const fill = document.getElementById("strength-fill");
  const text = document.getElementById("strength-text");
  if (!fill || !text) return;
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  const levels = [
    { pct: "25%", color: "#EF4444", label: "Très faible" },
    { pct: "50%", color: "#F59E0B", label: "Faible" },
    { pct: "75%", color: "#3B82F6", label: "Moyen" },
    { pct: "100%", color: "#10B981", label: "Fort" },
  ];
  const level = levels[Math.max(0, score - 1)] || { pct: "0%", color: "#E2E8F0", label: "Entrez un mot de passe" };
  fill.style.width = val.length ? level.pct : "0%";
  fill.style.background = level.color;
  text.textContent = val.length ? level.label : "Entrez un mot de passe";
  text.style.color = val.length ? level.color : "#94A3B8";
}
window.checkPasswordStrength = checkPasswordStrength;

function initRegisterForm() {
  const toggleBtn = document.getElementById("reg-pwd-toggle");
  const pwdInput = document.getElementById("reg-password");
  toggleBtn?.addEventListener("click", () => {
    const isText = pwdInput.type === "text";
    pwdInput.type = isText ? "password" : "text";
    toggleBtn.textContent = isText ? "👁️" : "🙈";
  });

  const form = document.getElementById("register-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    const fields = [
      { id: "firstname", check: v => v.length >= 2, error: "firstname-error" },
      { id: "lastname",  check: v => v.length >= 2, error: "lastname-error" },
      { id: "reg-email", check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), error: "reg-email-error" },
      { id: "reg-password", check: v => v.length >= 8, error: "reg-password-error" },
    ];

    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const errEl = document.getElementById(f.error);
      if (!input) return;
      if (!f.check(input.value.trim())) {
        input.classList.add("error");
        errEl?.classList.add("visible");
        valid = false;
      } else {
        input.classList.remove("error");
        errEl?.classList.remove("visible");
      }
    });

    const pwd = document.getElementById("reg-password")?.value;
    const confirm = document.getElementById("confirm-password")?.value;
    const confirmInput = document.getElementById("confirm-password");
    const confirmError = document.getElementById("confirm-password-error");
    if (pwd !== confirm) {
      confirmInput?.classList.add("error");
      confirmError?.classList.add("visible");
      valid = false;
    } else {
      confirmInput?.classList.remove("error");
      confirmError?.classList.remove("visible");
    }

    const terms = document.getElementById("terms");
    const termsError = document.getElementById("terms-error");
    if (!terms?.checked) {
      termsError?.classList.add("visible");
      valid = false;
    } else {
      termsError?.classList.remove("visible");
    }

    if (!valid) return;

    const btn = document.getElementById("register-btn");
    const btnText = document.getElementById("register-btn-text");
    btn.disabled = true;
    btnText.textContent = "Création en cours...";

    setTimeout(() => {
      btn.disabled = false;
      btnText.textContent = "Créer mon compte";
      showToast("Compte créé !", "Bienvenue sur Librafolio. Votre compte est prêt.", "success");
      setTimeout(() => navigate("/dashboard"), 900);
    }, 1800);
  });
}

/* ══════════════════════════════════════════════════════════
   DASHBOARD PAGE
══════════════════════════════════════════════════════════ */
function renderDashboard(container) {
  container.innerHTML = `
    <div class="dashboard-layout">
      ${renderSidebar("dashboard")}
      <div class="dashboard-main">
        ${renderTopbar("Dashboard")}
        <div class="dashboard-content">
          <div class="welcome-bar">
            <span class="welcome-icon">👋</span>
            <div class="welcome-text">
              <div class="welcome-title">Bonjour, ${currentUser.name} !</div>
              <div class="welcome-sub">Vous avez 3 nouvelles publications cette semaine. Continuez comme ça !</div>
            </div>
            <a href="#/publications" class="btn btn-white btn-sm" data-link>📤 Nouvelle publication</a>
          </div>

          <div class="stats-row">
            ${[
              { icon: "📄", color: "blue",   val: "47",    label: "Publications totales", change: "+3", dir: "up",   bar: "78%" },
              { icon: "👁️", color: "green",  val: "12.4K", label: "Vues ce mois",        change: "+18%", dir: "up", bar: "65%" },
              { icon: "❤️", color: "orange", val: "643",   label: "J'aime reçus",         change: "+24", dir: "up",  bar: "54%" },
              { icon: "📤", color: "purple", val: "289",   label: "Partages",             change: "-4%", dir: "down",bar: "42%" },
            ].map(s => `
              <div class="stat-card">
                <div class="stat-card-top">
                  <div class="stat-card-icon ${s.color}">${s.icon}</div>
                  <span class="stat-change ${s.dir}">${s.dir === "up" ? "↑" : "↓"} ${s.change}</span>
                </div>
                <div class="stat-card-value">${s.val}</div>
                <div class="stat-card-label">${s.label}</div>
                <div class="stat-card-bar">
                  <div class="stat-bar-fill ${s.color}" data-width="${s.bar}"></div>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="dashboard-grid">
            <div>
              <!-- Chart Card -->
              <div class="dash-card" style="margin-bottom:1.5rem">
                <div class="dash-card-header">
                  <span style="font-size:1.1rem">📈</span>
                  <div class="dash-card-title">Vues mensuelles</div>
                  <span style="font-size:0.75rem;color:#94A3B8">12 derniers mois</span>
                </div>
                <div class="dash-card-body">
                  <div class="chart-area" id="chart-area">
                    ${CHART_DATA.map((v, i) => `
                      <div class="chart-bar" data-height="${v / Math.max(...CHART_DATA) * 100}%" title="${CHART_MONTHS[i]}: ${(v * 120).toLocaleString()} vues" style="height:20px"></div>
                    `).join("")}
                  </div>
                  <div style="display:flex;justify-content:space-between;margin-top:0.5rem;font-size:0.65rem;color:#94A3B8">
                    ${CHART_MONTHS.map(m => `<span>${m}</span>`).join("")}
                  </div>
                </div>
              </div>

              <!-- Recent Documents -->
              <div class="dash-card">
                <div class="dash-card-header">
                  <span style="font-size:1.1rem">📑</span>
                  <div class="dash-card-title">Publications récentes</div>
                  <a href="#/publications" class="dash-card-action" data-link>Voir tout</a>
                </div>
                <div class="dash-card-body">
                  <div class="doc-table">
                    <div class="doc-table-row doc-table-head">
                      <span>Document</span>
                      <span>Catégorie</span>
                      <span>Vues</span>
                      <span>Statut</span>
                      <span>Actions</span>
                    </div>
                    ${MOCK_DOCS.slice(0, 5).map(d => `
                      <div class="doc-table-row">
                        <div class="doc-cell doc-cell-name">
                          <div class="doc-mini-thumb" style="background:linear-gradient(135deg,${d.color}88 0%,${d.color} 100%)"></div>
                          <div>
                            <div class="doc-name-text">${d.title}</div>
                            <div class="doc-name-pages">${d.pages} pages · ${d.date}</div>
                          </div>
                        </div>
                        <div class="doc-cell muted">${d.category}</div>
                        <div class="doc-cell">${d.views.toLocaleString()}</div>
                        <div class="doc-cell">
                          <span class="doc-status ${d.status}">
                            ${{published:"✅ Publié", draft:"✏️ Brouillon", processing:"⏳ En traitement"}[d.status]}
                          </span>
                        </div>
                        <div class="doc-cell">
                          <div class="doc-action-btns">
                            <div class="doc-action-btn view" onclick="navigate('/reader')" title="Lire">👁️</div>
                            <div class="doc-action-btn edit" title="Modifier">✏️</div>
                            <div class="doc-action-btn del" onclick="confirmDelete(${d.id})" title="Supprimer">🗑️</div>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                  <!-- Mobile card list -->
                  <div class="mobile-doc-list" style="display:none">
                    ${MOCK_DOCS.slice(0, 5).map(d => `
                      <div style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem 0;border-bottom:1px solid #F1F5FB">
                        <div style="width:36px;height:44px;border-radius:4px;background:linear-gradient(135deg,${d.color}88 0%,${d.color} 100%);flex-shrink:0"></div>
                        <div style="flex:1">
                          <div style="font-size:0.85rem;font-weight:600;color:var(--primary)">${d.title}</div>
                          <div style="font-size:0.72rem;color:#94A3B8">${d.views.toLocaleString()} vues · ${d.date}</div>
                        </div>
                        <span class="doc-status ${d.status}" style="font-size:0.68rem">
                          ${{published:"Publié",draft:"Brouillon",processing:"Traitement"}[d.status]}
                        </span>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div>
              <!-- Activity Feed -->
              <div class="dash-card" style="margin-bottom:1.5rem">
                <div class="dash-card-header">
                  <span style="font-size:1.1rem">🔔</span>
                  <div class="dash-card-title">Activité récente</div>
                </div>
                <div class="dash-card-body">
                  <div class="activity-feed">
                    ${ACTIVITY_FEED.map(a => `
                      <div class="activity-item">
                        <div class="activity-icon ${a.type}">${a.icon}</div>
                        <div class="activity-text">
                          <div class="activity-desc">${a.desc}</div>
                          <div class="activity-time">${a.time}</div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </div>

              <!-- Storage Card -->
              <div class="dash-card">
                <div class="dash-card-header">
                  <span style="font-size:1.1rem">💾</span>
                  <div class="dash-card-title">Stockage</div>
                  <a href="#" class="dash-card-action">Upgrader</a>
                </div>
                <div class="dash-card-body">
                  <div style="margin-bottom:1rem">
                    <div style="display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:0.5rem">
                      <span style="color:var(--primary);font-weight:600">6.8 Go utilisés</span>
                      <span style="color:#64748B">sur 10 Go</span>
                    </div>
                    <div class="storage-bar" style="height:8px">
                      <div class="storage-fill" style="width:68%"></div>
                    </div>
                    <div style="font-size:0.72rem;color:#94A3B8;margin-top:0.4rem">3.2 Go disponibles (32%)</div>
                  </div>
                  ${[
                    { name: "PDFs", pct: 45, color: "#2563EB" },
                    { name: "Images", pct: 30, color: "#8B5CF6" },
                    { name: "Autres", pct: 25, color: "#10B981" },
                  ].map(t => `
                    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.6rem">
                      <div style="width:10px;height:10px;border-radius:50%;background:${t.color};flex-shrink:0"></div>
                      <span style="font-size:0.8rem;color:#64748B;flex:1">${t.name}</span>
                      <span style="font-size:0.8rem;font-weight:600;color:var(--primary)">${t.pct}%</span>
                    </div>
                  `).join("")}
                  <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center;margin-top:1rem">
                    🚀 Passer à PRO — 20 Go
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  initDataLinks(container);
  initDashboard();
}

function initDashboard() {
  // Animate stat bars
  setTimeout(() => {
    document.querySelectorAll(".stat-bar-fill[data-width]").forEach(el => {
      el.style.width = el.dataset.width;
    });
    // Animate chart bars
    document.querySelectorAll(".chart-bar[data-height]").forEach(el => {
      el.style.height = el.dataset.height;
    });
  }, 300);

  // Sidebar toggle for mobile
  const sidebarEl = document.querySelector(".sidebar");
  const menuBtn = document.getElementById("sidebar-toggle");
  menuBtn?.addEventListener("click", () => {
    sidebarEl?.classList.toggle("open");
  });
}

function confirmDelete(id) {
  const doc = MOCK_DOCS.find(d => d.id === id);
  if (!doc) return;
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <span style="font-size:1.5rem">🗑️</span>
        <div class="modal-title">Supprimer la publication</div>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>
      <p style="font-size:0.9rem;color:#64748B;margin-bottom:1.5rem">
        Êtes-vous sûr de vouloir supprimer <strong>"${doc.title}"</strong> ? Cette action est irréversible.
      </p>
      <div style="display:flex;gap:0.75rem;justify-content:flex-end">
        <button class="btn btn-outline" onclick="this.closest('.modal-overlay').remove()">Annuler</button>
        <button class="btn btn-danger" onclick="deleteDoc(${id});this.closest('.modal-overlay').remove()">Supprimer définitivement</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}
window.confirmDelete = confirmDelete;

function deleteDoc(id) {
  const idx = MOCK_DOCS.findIndex(d => d.id === id);
  if (idx >= 0) MOCK_DOCS.splice(idx, 1);
  showToast("Publication supprimée", "Le document a été supprimé avec succès.", "success");
}
window.deleteDoc = deleteDoc;

/* ══════════════════════════════════════════════════════════
   PUBLICATIONS PAGE
══════════════════════════════════════════════════════════ */
function renderPublications(container) {
  const filtered = currentFilter === "all"
    ? MOCK_DOCS
    : MOCK_DOCS.filter(d => d.status === currentFilter || d.category.toLowerCase() === currentFilter);

  container.innerHTML = `
    <div class="dashboard-layout">
      ${renderSidebar("publications")}
      <div class="dashboard-main">
        <div class="pub-page">
          <div class="pub-header">
            <div class="pub-header-container">
              <div class="pub-header-top">
                <div>
                  <h1 class="pub-header-title">Mes Publications</h1>
                  <p class="pub-header-sub">${MOCK_DOCS.length} documents publiés · 6.8 Go utilisés</p>
                </div>
                <button class="btn btn-white" id="upload-btn" onclick="document.getElementById('upload-zone').scrollIntoView({behavior:'smooth'})">
                  📤 Uploader un document
                </button>
              </div>
              <div class="pub-controls">
                <div class="pub-search-bar">
                  <span class="pub-search-icon">🔍</span>
                  <input type="search" placeholder="Rechercher une publication..." id="pub-search" oninput="filterDocs(this.value)" />
                </div>
              </div>
              <div class="filter-tabs">
                ${[
                  { val: "all",        label: "Toutes" },
                  { val: "published",  label: "✅ Publiées" },
                  { val: "draft",      label: "✏️ Brouillons" },
                  { val: "processing", label: "⏳ En traitement" },
                  { val: "Rapport",    label: "📊 Rapports" },
                  { val: "Catalogue",  label: "📦 Catalogues" },
                ].map(f => `
                  <button class="filter-tab ${currentFilter === f.val ? "active" : ""}"
                    onclick="setFilter('${f.val}')">${f.label}</button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="pub-body">
            <!-- Upload Zone -->
            <div class="upload-zone" id="upload-zone"
              ondragover="handleDragOver(event)"
              ondragleave="handleDragLeave(event)"
              ondrop="handleDrop(event)"
              onclick="triggerUpload()">
              <div class="upload-icon">📂</div>
              <div class="upload-title">Glissez et déposez votre document ici</div>
              <div class="upload-sub">ou <span>cliquez pour parcourir</span> vos fichiers</div>
              <div class="upload-formats">Formats acceptés : PDF, DOC, DOCX, PPTX · Max 50 Mo</div>
              <div class="upload-progress" id="upload-progress">
                <div class="upload-progress-bar"><div class="upload-progress-fill" id="upload-fill"></div></div>
                <div class="upload-progress-text" id="upload-progress-text">Préparation...</div>
              </div>
              <input type="file" id="file-input" accept=".pdf,.doc,.docx,.pptx" style="display:none" onchange="simulateUpload(this)" />
            </div>

            <!-- Toolbar -->
            <div class="pub-toolbar">
              <div class="pub-results" id="pub-results">${filtered.length} publication${filtered.length !== 1 ? "s" : ""}</div>
              <div class="view-toggle">
                <button class="view-btn ${currentView === "grid" ? "active" : ""}" onclick="setView('grid')" title="Grille">▦</button>
                <button class="view-btn ${currentView === "list" ? "active" : ""}" onclick="setView('list')" title="Liste">☰</button>
              </div>
              <select class="sort-select" onchange="sortDocs(this.value)">
                <option value="date">Date (récent)</option>
                <option value="views">Vues</option>
                <option value="title">Titre A-Z</option>
                <option value="likes">Likes</option>
              </select>
            </div>

            <!-- Docs Grid -->
            <div class="docs-grid ${currentView === "list" ? "list-view" : ""}" id="docs-grid">
              ${filtered.length ? filtered.map(d => renderDocCard(d)).join("") : `
                <div style="grid-column:1/-1;text-align:center;padding:4rem 2rem;color:#64748B">
                  <div style="font-size:3rem;margin-bottom:1rem">📭</div>
                  <div style="font-size:1.1rem;font-weight:700;margin-bottom:0.5rem">Aucune publication trouvée</div>
                  <div style="font-size:0.875rem">Modifiez vos filtres ou uploadez un nouveau document.</div>
                </div>
              `}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  initDataLinks(container);
}

function renderDocCard(d) {
  return `
    <div class="doc-card" onclick="navigate('/reader')">
      <div class="doc-card-thumb" style="background:linear-gradient(135deg,${d.color}cc 0%,${d.color} 100%)">
        <div class="doc-thumb-cover">📄</div>
        <div class="doc-thumb-overlay">
          <div class="doc-thumb-btns">
            <button class="doc-thumb-btn primary-btn" onclick="event.stopPropagation();navigate('/reader')">👁️ Lire</button>
            <button class="doc-thumb-btn" onclick="event.stopPropagation();showShareModal(${d.id})">📤 Partager</button>
          </div>
        </div>
        <span class="doc-category-badge">${d.category}</span>
      </div>
      <div class="doc-card-body">
        <div class="doc-card-title">${d.title}</div>
        <div class="doc-card-meta">
          <span>${d.pages} pages</span>
          <span>·</span>
          <span>${d.date}</span>
        </div>
        <div class="doc-card-stats">
          <div class="doc-card-stat">👁️ ${d.views.toLocaleString()}</div>
          <div class="doc-card-stat">❤️ ${d.likes}</div>
          <div class="doc-card-stat">
            <span class="doc-status ${d.status}" style="font-size:0.65rem">
              ${{published:"Publié",draft:"Brouillon",processing:"Traitement"}[d.status]}
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setFilter(val) {
  currentFilter = val;
  renderPublications(document.getElementById("page-container"));
}
window.setFilter = setFilter;

function setView(val) {
  currentView = val;
  const grid = document.getElementById("docs-grid");
  if (grid) grid.className = `docs-grid ${val === "list" ? "list-view" : ""}`;
  document.querySelectorAll(".view-btn").forEach((btn, i) => {
    btn.classList.toggle("active", (i === 0 && val === "grid") || (i === 1 && val === "list"));
  });
}
window.setView = setView;

function filterDocs(query) {
  const grid = document.getElementById("docs-grid");
  const results = document.getElementById("pub-results");
  const q = query.toLowerCase();
  const filtered = MOCK_DOCS.filter(d =>
    d.title.toLowerCase().includes(q) || d.category.toLowerCase().includes(q)
  );
  if (grid) grid.innerHTML = filtered.length
    ? filtered.map(d => renderDocCard(d)).join("")
    : `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:#64748B"><div style="font-size:2rem">🔍</div><div>Aucun résultat pour "${query}"</div></div>`;
  if (results) results.textContent = `${filtered.length} publication${filtered.length !== 1 ? "s" : ""}`;
}
window.filterDocs = filterDocs;

function sortDocs(by) {
  const sorted = [...MOCK_DOCS].sort((a, b) => {
    if (by === "views") return b.views - a.views;
    if (by === "title") return a.title.localeCompare(b.title);
    if (by === "likes") return b.likes - a.likes;
    return 0;
  });
  const grid = document.getElementById("docs-grid");
  if (grid) grid.innerHTML = sorted.map(d => renderDocCard(d)).join("");
}
window.sortDocs = sortDocs;

function handleDragOver(e) {
  e.preventDefault();
  document.getElementById("upload-zone")?.classList.add("dragging");
}
window.handleDragOver = handleDragOver;

function handleDragLeave() {
  document.getElementById("upload-zone")?.classList.remove("dragging");
}
window.handleDragLeave = handleDragLeave;

function handleDrop(e) {
  e.preventDefault();
  document.getElementById("upload-zone")?.classList.remove("dragging");
  const file = e.dataTransfer?.files[0];
  if (file) simulateUploadFile(file.name);
}
window.handleDrop = handleDrop;

function triggerUpload() {
  document.getElementById("file-input")?.click();
}
window.triggerUpload = triggerUpload;

function simulateUpload(input) {
  const file = input.files[0];
  if (!file) return;
  simulateUploadFile(file.name);
}
window.simulateUpload = simulateUpload;

function simulateUploadFile(filename) {
  const progress = document.getElementById("upload-progress");
  const fill = document.getElementById("upload-fill");
  const text = document.getElementById("upload-progress-text");
  if (!progress || !fill) return;
  progress.classList.add("visible");
  fill.style.width = "0%";
  const steps = [
    { pct: 20, msg: "Analyse du fichier..." },
    { pct: 45, msg: "Conversion en cours..." },
    { pct: 70, msg: "Génération des miniatures..." },
    { pct: 90, msg: "Optimisation des pages..." },
    { pct: 100, msg: "Finalisation..." },
  ];
  let i = 0;
  const interval = setInterval(() => {
    if (i >= steps.length) {
      clearInterval(interval);
      setTimeout(() => {
        progress.classList.remove("visible");
        fill.style.width = "0%";
        showToast("Upload réussi !", `"${filename}" a été publié avec succès.`, "success");
        const newDoc = {
          id: MOCK_DOCS.length + 1,
          title: filename.replace(/\.[^/.]+$/, ""),
          pages: Math.floor(Math.random() * 40) + 8,
          category: "Nouveau",
          views: 0, likes: 0,
          date: "Aujourd'hui",
          status: "processing",
          color: "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0"),
        };
        MOCK_DOCS.unshift(newDoc);
        const grid = document.getElementById("docs-grid");
        if (grid) grid.insertAdjacentHTML("afterbegin", renderDocCard(newDoc));
      }, 500);
      return;
    }
    fill.style.width = steps[i].pct + "%";
    if (text) text.textContent = steps[i].msg;
    i++;
  }, 600);
}

function showShareModal(id) {
  const doc = MOCK_DOCS.find(d => d.id === id);
  if (!doc) return;
  const link = `https://librafolio.io/docs/${id}-${doc.title.toLowerCase().replace(/\s+/g, "-")}`;
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <span style="font-size:1.5rem">📤</span>
        <div class="modal-title">Partager "${doc.title}"</div>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>
      <div style="margin-bottom:1.5rem">
        <label style="font-size:0.8rem;font-weight:600;color:#64748B;display:block;margin-bottom:0.4rem">Lien de partage</label>
        <div style="display:flex;gap:0.5rem">
          <input type="text" value="${link}" readonly style="flex:1;padding:0.6rem 0.8rem;border:1px solid #E2E8F0;border-radius:8px;font-size:0.8rem;font-family:var(--font);color:var(--primary);background:#F8FAFF" />
          <button class="btn btn-primary btn-sm" onclick="copyLink('${link}')">Copier</button>
        </div>
      </div>
      <div style="display:flex;gap:0.75rem">
        ${["LinkedIn","Twitter","Facebook","Email"].map(p => `
          <button class="btn btn-outline btn-sm" style="flex:1;justify-content:center" onclick="shareOn('${p}')">
            ${{"LinkedIn":"🔷","Twitter":"🐦","Facebook":"🔵","Email":"✉️"}[p]} ${p}
          </button>
        `).join("")}
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}
window.showShareModal = showShareModal;

function copyLink(link) {
  navigator.clipboard?.writeText(link).then(() => {
    showToast("Copié !", "Lien copié dans le presse-papiers.", "success", 2000);
  });
}
window.copyLink = copyLink;

function shareOn(platform) {
  showToast(`Partagé sur ${platform}`, "Votre publication a été partagée.", "success", 2000);
  document.querySelector(".modal-overlay")?.remove();
}
window.shareOn = shareOn;

/* ══════════════════════════════════════════════════════════
   READER PAGE (Flipbook)
══════════════════════════════════════════════════════════ */
function renderReader(container) {
  const doc = MOCK_DOCS[0];
  totalPages = doc?.pages || 24;
  currentPage = 1;
  zoomLevel = 100;

  container.innerHTML = `
    <div class="reader-page">
      <!-- Reader Toolbar -->
      <div class="reader-toolbar">
        <a href="#/publications" class="reader-btn" data-link title="Retour">←</a>
        <div class="reader-doc-title">${doc?.title || "Document"}</div>

        <div class="reader-nav-btns">
          <button class="reader-btn" id="r-first" onclick="goToPage(1)" title="Première page">⇤</button>
          <button class="reader-btn" id="r-prev" onclick="prevPage()" title="Page précédente">‹</button>
          <div class="reader-page-indicator">
            <input class="reader-page-input" type="number" id="page-input" value="1" min="1" max="${totalPages}" onchange="goToPage(parseInt(this.value))" />
            <span>/ ${totalPages}</span>
          </div>
          <button class="reader-btn" id="r-next" onclick="nextPage()" title="Page suivante">›</button>
          <button class="reader-btn" id="r-last" onclick="goToPage(${totalPages})" title="Dernière page">⇥</button>
        </div>

        <div class="reader-zoom">
          <button class="reader-btn" onclick="changeZoom(-10)" title="Dézoomer">−</button>
          <span id="zoom-label">${zoomLevel}%</span>
          <button class="reader-btn" onclick="changeZoom(10)" title="Zoomer">+</button>
          <button class="reader-btn" onclick="resetZoom()" title="Adapter">⊡</button>
        </div>

        <button class="reader-btn" onclick="toggleFullscreen()" id="fs-btn" title="Plein écran">⛶</button>
        <button class="reader-btn" onclick="showShareModal(${doc?.id || 1})" title="Partager">📤</button>
      </div>

      <!-- Book Area -->
      <div class="reader-area" id="reader-area">
        <div class="flipbook" id="flipbook" style="transform:scale(${zoomLevel/100})">
          <div class="book-container">
            <div class="book-page left-page" id="left-page" style="width:min(320px,42vw);height:min(450px,60vw)">
              ${renderPageContent(1)}
            </div>
            <div class="book-page right-page" id="right-page" style="width:min(320px,42vw);height:min(450px,60vw)">
              ${renderPageContent(2)}
            </div>
          </div>
        </div>
      </div>

      <!-- Thumbnails -->
      <div class="reader-thumbnails" id="reader-thumbnails">
        ${Array.from({ length: Math.min(totalPages, 20) }, (_, i) => `
          <div class="thumb-item ${i === 0 ? "active" : ""}" onclick="goToPage(${i + 1})">
            <div class="thumb-preview">
              <div class="thumb-lines">
                <div class="thumb-line dark"></div>
                <div class="thumb-line"></div>
                <div class="thumb-line"></div>
                <div class="thumb-line" style="width:60%"></div>
                <div class="thumb-line"></div>
              </div>
            </div>
            <div class="thumb-num">${i + 1}</div>
          </div>
        `).join("")}
        ${totalPages > 20 ? `<div class="thumb-item" style="display:flex;align-items:center;padding:0 0.5rem;color:var(--white-60);font-size:0.75rem">+${totalPages - 20} pages</div>` : ""}
      </div>
    </div>
  `;

  initDataLinks(container);
  addKeyboardNav();
}

function renderPageContent(pageNum) {
  const patterns = [
    `<div class="page-content">
      <div class="page-text-line title"></div>
      <div class="page-text-line"></div>
      <div class="page-text-line"></div>
      <div class="page-text-line short"></div>
      <div class="page-image-placeholder"></div>
      <div class="page-text-line"></div>
      <div class="page-text-line shorter"></div>
      <div class="page-num">— ${pageNum} —</div>
    </div>`,
    `<div class="page-content">
      <div class="page-text-line title"></div>
      <div class="page-text-line"></div>
      <div class="page-text-line short"></div>
      <div class="page-text-line"></div>
      <div class="page-text-line shorter"></div>
      <div class="page-text-line"></div>
      <div class="page-image-placeholder" style="height:100px"></div>
      <div class="page-text-line"></div>
      <div class="page-num">— ${pageNum} —</div>
    </div>`,
    `<div class="page-content" style="background:linear-gradient(135deg,#F8FAFF 0%,#EEF2FF 100%)">
      <div class="page-text-line title"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0">
        <div class="page-image-placeholder" style="height:80px;margin:0"></div>
        <div class="page-image-placeholder" style="height:80px;margin:0"></div>
      </div>
      <div class="page-text-line"></div>
      <div class="page-text-line short"></div>
      <div class="page-num">— ${pageNum} —</div>
    </div>`,
  ];
  return patterns[pageNum % patterns.length];
}

function goToPage(page) {
  if (page < 1 || page > totalPages) return;
  const oldPage = currentPage;
  currentPage = Math.max(1, Math.min(page, totalPages));

  const leftPage = document.getElementById("left-page");
  const rightPage = document.getElementById("right-page");
  const pageInput = document.getElementById("page-input");

  if (!leftPage || !rightPage) return;

  const direction = page > oldPage ? 1 : -1;
  const overlay = document.createElement("div");
  overlay.className = "page-turn-animation";
  if (direction > 0) rightPage.appendChild(overlay);
  else leftPage.appendChild(overlay);
  setTimeout(() => overlay.remove(), 800);

  leftPage.innerHTML = renderPageContent(currentPage);
  rightPage.innerHTML = renderPageContent(Math.min(currentPage + 1, totalPages));
  leftPage.style.animation = "none";
  rightPage.style.animation = "none";
  requestAnimationFrame(() => {
    leftPage.style.animation = "fadeIn 0.5s ease";
    rightPage.style.animation = "fadeIn 0.5s ease";
  });

  if (pageInput) pageInput.value = currentPage;

  document.querySelectorAll(".thumb-item").forEach((el, i) => {
    el.classList.toggle("active", i === currentPage - 1);
  });
  const thumbItem = document.querySelector(`.thumb-item:nth-child(${currentPage})`);
  thumbItem?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}
window.goToPage = goToPage;

function prevPage() { goToPage(currentPage - 2); }
function nextPage() { goToPage(currentPage + 2); }
window.prevPage = prevPage;
window.nextPage = nextPage;

function changeZoom(delta) {
  zoomLevel = Math.max(50, Math.min(200, zoomLevel + delta));
  const flipbook = document.getElementById("flipbook");
  if (flipbook) flipbook.style.transform = `scale(${zoomLevel / 100})`;
  const label = document.getElementById("zoom-label");
  if (label) label.textContent = zoomLevel + "%";
}
window.changeZoom = changeZoom;

function resetZoom() {
  zoomLevel = 100;
  const flipbook = document.getElementById("flipbook");
  if (flipbook) flipbook.style.transform = "scale(1)";
  const label = document.getElementById("zoom-label");
  if (label) label.textContent = "100%";
}
window.resetZoom = resetZoom;

function toggleFullscreen() {
  const el = document.getElementById("reader-area");
  if (!document.fullscreenElement) {
    el?.requestFullscreen?.();
    document.getElementById("fs-btn").textContent = "⊠";
    showToast("Plein écran", "Appuyez sur Échap pour quitter", "info", 2000);
  } else {
    document.exitFullscreen?.();
    document.getElementById("fs-btn").textContent = "⛶";
  }
}
window.toggleFullscreen = toggleFullscreen;

function addKeyboardNav() {
  const handler = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") nextPage();
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") prevPage();
    if (e.key === "+" || e.key === "=") changeZoom(10);
    if (e.key === "-") changeZoom(-10);
    if (e.key === "Escape") document.exitFullscreen?.();
  };
  document.addEventListener("keydown", handler);
  window._readerKeyHandler = handler;
}

/* ══════════════════════════════════════════════════════════
   SIDEBAR & TOPBAR HELPERS
══════════════════════════════════════════════════════════ */
function renderSidebar(activePage) {
  const links = [
    { href: "/dashboard",    icon: "🏠", label: "Dashboard" },
    { href: "/publications", icon: "📄", label: "Publications",  badge: "8" },
    { href: "/reader",       icon: "📖", label: "Lecteur" },
  ];
  const bottomLinks = [
    { href: "#", icon: "⚙️",  label: "Paramètres" },
    { href: "#", icon: "❓",  label: "Aide & Support" },
    { href: "/login",  icon: "🚪", label: "Déconnexion" },
  ];
  return `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-user">
        <div class="sidebar-avatar">${currentUser.initials}</div>
        <div class="sidebar-name">${currentUser.name}</div>
        <div class="sidebar-plan">
          <span class="plan-badge">${currentUser.plan}</span>
          <span>${currentUser.email}</span>
        </div>
      </div>
      <nav class="sidebar-nav">
        <div class="sidebar-section-label">Navigation</div>
        ${links.map(l => `
          <a href="#${l.href}" class="sidebar-link ${activePage === l.href.slice(1) ? "active" : ""}" data-link>
            <span class="sidebar-link-icon">${l.icon}</span>
            ${l.label}
            ${l.badge ? `<span class="sidebar-badge">${l.badge}</span>` : ""}
          </a>
        `).join("")}
        <div class="sidebar-section-label" style="margin-top:1rem">Compte</div>
        ${bottomLinks.map(l => `
          <a href="#${l.href}" class="sidebar-link" data-link>
            <span class="sidebar-link-icon">${l.icon}</span>
            ${l.label}
          </a>
        `).join("")}
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-storage">
          <div class="sidebar-storage-label">Stockage</div>
          <div class="storage-bar"><div class="storage-fill"></div></div>
          <div class="storage-text">6.8 Go / 10 Go utilisés</div>
        </div>
      </div>
    </aside>
  `;
}

function renderTopbar(title) {
  return `
    <div class="dashboard-topbar">
      <button class="reader-btn" id="sidebar-toggle" onclick="document.getElementById('sidebar').classList.toggle('open')" title="Menu" style="display:none">☰</button>
      <div class="topbar-title">${title}</div>
      <div class="topbar-search">
        <span>🔍</span>
        <input type="search" placeholder="Rechercher..." />
      </div>
      <div class="topbar-actions">
        <button class="topbar-btn" title="Notifications">
          🔔 <span class="notif-dot"></span>
        </button>
        <button class="topbar-btn" title="Messages">💬</button>
        <div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--accent) 0%,#818CF8 100%);display:flex;align-items:center;justify-content:center;font-size:0.8rem;font-weight:800;color:white;cursor:pointer">${currentUser.initials}</div>
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════════════════════════
   404 PAGE
══════════════════════════════════════════════════════════ */
function renderNotFound(container) {
  container.innerHTML = `
    <div class="not-found" style="padding-top:65px">
      <div>
        <div class="not-found-icon">🗺️</div>
        <h1 class="not-found-title">404</h1>
        <p class="not-found-sub">Cette page n'existe pas ou a été déplacée.</p>
        <a href="#/" class="btn btn-primary btn-lg" data-link>← Retour à l'accueil</a>
      </div>
    </div>
  `;
  initDataLinks(container);
}

/* ── Link Delegation ──────────────────────────────────────── */
function initDataLinks(container = document) {
  container.querySelectorAll("[data-link]").forEach(el => {
    el.addEventListener("click", (e) => {
      const href = el.getAttribute("href");
      if (href && href.startsWith("#")) {
        // Let hash change handle it
      }
    });
  });
}

function initGlobalLinks() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (link) {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        location.hash = href;
        const menu = document.getElementById("navbar-menu");
        const hamburger = document.getElementById("hamburger");
        menu?.classList.remove("open");
        hamburger?.classList.remove("open");
      }
    }
  });
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // Loader animation
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader?.classList.add("hidden");
    setTimeout(() => loader?.remove(), 500);
  }, 2000);

  initHamburger();
  initGlobalLinks();

  window.addEventListener("hashchange", () => {
    if (window._readerKeyHandler) {
      document.removeEventListener("keydown", window._readerKeyHandler);
      window._readerKeyHandler = null;
    }
    router();
  });

  router();
});

// Make navigate globally available
window.navigate = navigate;
