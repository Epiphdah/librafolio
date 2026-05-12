(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const l=[{id:1,title:"Rapport Annuel 2025",pages:48,category:"Rapport",views:1284,likes:87,date:"12 mai 2025",status:"published",color:"#2563EB"},{id:2,title:"Guide Marketing Digital",pages:32,category:"Guide",views:956,likes:62,date:"8 mai 2025",status:"published",color:"#8B5CF6"},{id:3,title:"Catalogue Produits 2026",pages:64,category:"Catalogue",views:2103,likes:134,date:"5 mai 2025",status:"published",color:"#10B981"},{id:4,title:"Présentation Stratégique",pages:22,category:"Présentation",views:789,likes:45,date:"2 mai 2025",status:"draft",color:"#F59E0B"},{id:5,title:"Manuel d'Utilisation",pages:86,category:"Manuel",views:3421,likes:198,date:"28 avr. 2025",status:"published",color:"#EF4444"},{id:6,title:"Newsletter Printemps",pages:12,category:"Newsletter",views:445,likes:28,date:"25 avr. 2025",status:"processing",color:"#06B6D4"},{id:7,title:"Bilan Financier Q1",pages:28,category:"Rapport",views:678,likes:41,date:"20 avr. 2025",status:"published",color:"#2563EB"},{id:8,title:"Formation Équipe RH",pages:54,category:"Formation",views:1102,likes:73,date:"15 avr. 2025",status:"published",color:"#8B5CF6"}],R=[{icon:"👁️",type:"view",desc:"<strong>Marie Dupont</strong> a consulté <strong>Rapport Annuel 2025</strong>",time:"Il y a 2 min"},{icon:"⬆️",type:"upload",desc:"Nouveau document uploadé : <strong>Newsletter Printemps</strong>",time:"Il y a 18 min"},{icon:"📤",type:"share",desc:"<strong>Guide Marketing Digital</strong> partagé sur LinkedIn",time:"Il y a 45 min"},{icon:"❤️",type:"like",desc:"<strong>Thomas Martin</strong> a aimé <strong>Catalogue Produits 2026</strong>",time:"Il y a 1h"},{icon:"👁️",type:"view",desc:"<strong>Sophie Laurent</strong> a consulté <strong>Manuel d'Utilisation</strong>",time:"Il y a 2h"}],T=[45,72,58,90,65,88,76,95,82,70,105,98],F=["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Aoû","Sep","Oct","Nov","Déc"];let h={name:"Alex Moreau",email:"alex.moreau@email.com",initials:"AM",plan:"PRO"},w="all",k="grid",v=1,u=24,m=100;const N={"/":_,"/login":Z,"/register":X,"/dashboard":ee,"/publications":S,"/reader":be};function O(){return(location.hash.slice(1)||"/").split("?")[0]}function E(t){location.hash="#"+t}function A(){const t=O(),e=N[t]||$e,s=document.getElementById("page-container"),i=document.getElementById("footer"),a=document.getElementById("navbar");s.innerHTML="",s.style.animation="none",requestAnimationFrame(()=>{s.style.animation="",s.classList.add("page-enter"),setTimeout(()=>s.classList.remove("page-enter"),400)});const o=["/reader"];i.className="footer",o.includes(t)?i.style.display="none":i.style.display="",t==="/"?(a.className="navbar transparent",U()):(a.className="navbar solid",G()),document.querySelectorAll(".nav-link").forEach(n=>{const d=n.getAttribute("href")?.replace("#","");n.classList.toggle("active",d===t)}),e(s),V(),window.scrollTo(0,0)}function U(){const t=()=>{const e=document.getElementById("navbar");e&&(window.scrollY>50?e.className="navbar solid":e.className="navbar transparent")};window.addEventListener("scroll",t,{passive:!0}),window._scrollHandler=t}function G(){window._scrollHandler&&(window.removeEventListener("scroll",window._scrollHandler),window._scrollHandler=null)}function V(){const t=document.querySelectorAll(".reveal, .reveal-left, .reveal-right");if(!t.length)return;const e=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),e.unobserve(i.target))})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});t.forEach(s=>e.observe(s))}function p(t,e,s="info",i=4e3){const a={success:"✅",error:"❌",warning:"⚠️",info:"💡"},o=document.getElementById("toast-container"),n=document.createElement("div");n.className=`toast ${s}`,n.innerHTML=`
    <span class="toast-icon">${a[s]||"💡"}</span>
    <div class="toast-body">
      <div class="toast-title">${t}</div>
      ${e?`<div class="toast-msg">${e}</div>`:""}
    </div>
    <button class="toast-close" onclick="removeToast(this.parentElement)">✕</button>
  `,o.appendChild(n),setTimeout(()=>D(n),i)}function D(t){!t||!t.parentElement||(t.classList.add("removing"),setTimeout(()=>t.remove(),300))}window.removeToast=D;function K(){const t=document.getElementById("hamburger"),e=document.getElementById("navbar-menu");t&&(t.addEventListener("click",()=>{t.classList.toggle("open"),e.classList.toggle("open")}),document.addEventListener("click",s=>{!t.contains(s.target)&&!e.contains(s.target)&&(t.classList.remove("open"),e.classList.remove("open"))}))}function _(t){t.innerHTML=`
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
              ${l.slice(0,5).map(e=>`
                <div class="device-doc">
                  <div class="doc-thumb" style="background:linear-gradient(135deg,${e.color} 0%,${e.color}99 100%)"></div>
                  <div class="doc-info">
                    <div class="doc-title">${e.title}</div>
                    <div class="doc-meta">${e.pages} pages · ${e.category}</div>
                  </div>
                  <div class="doc-views">👁️ ${(e.views/1e3).toFixed(1)}K</div>
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
          ${[{icon:"📖",title:"Lecteur Flipbook Premium",desc:"Un lecteur immersif avec effet de tournage de page réaliste, zoom HD et mode plein écran pour une expérience de lecture unique."},{icon:"⬆️",title:"Upload Intelligent",desc:"Importez vos PDFs en quelques secondes. Conversion automatique, optimisation des images et génération de miniatures."},{icon:"📊",title:"Analytics Avancés",desc:"Suivez en temps réel les vues, le temps de lecture, les partages et l'engagement de chaque publication."},{icon:"🔒",title:"Confidentialité Totale",desc:"Contrôlez qui accède à vos documents : public, privé ou partagé par lien sécurisé avec expiration."},{icon:"📱",title:"100% Responsive",desc:"Vos publications s'adaptent parfaitement à tous les écrans : mobile, tablette et desktop, sans compromis."},{icon:"🚀",title:"Partage Instantané",desc:"Un lien unique pour chaque publication. Intégrez vos documents sur n'importe quel site en un copier-coller."}].map(e=>`
            <div class="feature-card reveal">
              <div class="feature-icon">${e.icon}</div>
              <h3 class="feature-title">${e.title}</h3>
              <p class="feature-desc">${e.desc}</p>
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
          ${[{n:1,title:"Importez votre PDF",desc:"Glissez-déposez votre document ou choisissez-le depuis votre ordinateur. Formats supportés : PDF, DOC, PPTX."},{n:2,title:"Personnalisez",desc:"Ajoutez un titre, une description, choisissez la catégorie et définissez les options de confidentialité."},{n:3,title:"Publiez",desc:"Partagez votre publication avec un lien unique ou intégrez-la directement sur votre site web."},{n:4,title:"Analysez",desc:"Suivez les performances de vos publications en temps réel avec nos analytics détaillés."}].map(e=>`
            <div class="step-card reveal">
              <div class="step-num">${e.n}</div>
              <h3 class="step-title">${e.title}</h3>
              <p class="step-desc">${e.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats-section">
      <div class="stats-grid">
        ${[{val:"50K+",label:"Publications actives"},{val:"12K+",label:"Utilisateurs actifs"},{val:"2.5M",label:"Lectures par mois"},{val:"99.9%",label:"Disponibilité"}].map(e=>`
          <div class="reveal">
            <div class="stat-value">${e.val}</div>
            <div class="stat-label">${e.label}</div>
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
  `,b(t)}function Z(t){t.innerHTML=`
    <div class="auth-page" style="padding-top:65px">
      <div class="auth-side">
        <div class="auth-side-orb auth-side-orb-1"></div>
        <div class="auth-side-orb auth-side-orb-2"></div>
        <div class="auth-side-content">
          <div class="auth-side-logo">📖 <span>Librafolio</span></div>
          <h2 class="auth-side-title">Bienvenue !</h2>
          <p class="auth-side-text">Connectez-vous pour accéder à vos publications et gérer votre espace numérique.</p>
          <div class="auth-side-features">
            ${[{icon:"📊",text:"Analytics en temps réel"},{icon:"📖",text:"Lecteur flipbook premium"},{icon:"🔒",text:"Sécurité maximale"},{icon:"🚀",text:"Performance ultra-rapide"}].map(e=>`
              <div class="auth-side-feature">
                <div class="auth-side-feature-icon">${e.icon}</div>
                <span style="font-size:0.875rem">${e.text}</span>
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
  `,b(t),J()}function J(){const t=document.getElementById("login-form"),e=document.getElementById("pwd-toggle"),s=document.getElementById("password");e?.addEventListener("click",()=>{const i=s.type==="text";s.type=i?"password":"text",e.textContent=i?"👁️":"🙈"}),t?.addEventListener("submit",i=>{i.preventDefault();let a=!0;const o=document.getElementById("email").value.trim(),n=document.getElementById("password").value,d=document.getElementById("email-error"),c=document.getElementById("password-error"),g=document.getElementById("email"),$=document.getElementById("password");if(!o||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?(g.classList.add("error"),d.classList.add("visible"),a=!1):(g.classList.remove("error"),d.classList.remove("visible")),!n||n.length<6?($.classList.add("error"),c.classList.add("visible"),a=!1):($.classList.remove("error"),c.classList.remove("visible")),!a)return;const f=document.getElementById("login-btn"),y=document.getElementById("login-btn-text");f.disabled=!0,y.textContent="Connexion en cours...",setTimeout(()=>{f.disabled=!1,y.textContent="Se connecter",p("Connexion réussie !","Bienvenue sur Librafolio, "+o.split("@")[0],"success"),setTimeout(()=>E("/dashboard"),800)},1600)}),document.querySelectorAll(".form-input").forEach(i=>{i.addEventListener("input",()=>{i.classList.remove("error");const a=document.getElementById(i.id+"-error");a&&a.classList.remove("visible")})})}function W(t){p("Redirection...",`Connexion via ${t} en cours`,"info",2e3),setTimeout(()=>{p("Connexion réussie !",`Bienvenue ! Connecté via ${t}`,"success"),setTimeout(()=>E("/dashboard"),800)},2e3)}window.handleSocialLogin=W;function X(t){t.innerHTML=`
    <div class="auth-page" style="padding-top:65px">
      <div class="auth-side">
        <div class="auth-side-orb auth-side-orb-1"></div>
        <div class="auth-side-orb auth-side-orb-2"></div>
        <div class="auth-side-content">
          <div class="auth-side-logo">📖 <span>Librafolio</span></div>
          <h2 class="auth-side-title">Rejoignez Librafolio</h2>
          <p class="auth-side-text">Créez votre compte gratuit et commencez à publier vos documents dès aujourd'hui.</p>
          <div class="auth-side-features">
            ${[{icon:"✅",text:"Plan gratuit à vie"},{icon:"⚡",text:"Configuration en 2 minutes"},{icon:"🎯",text:"10 publications offertes"},{icon:"💬",text:"Support prioritaire 24/7"}].map(e=>`
              <div class="auth-side-feature">
                <div class="auth-side-feature-icon">${e.icon}</div>
                <span style="font-size:0.875rem">${e.text}</span>
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
  `,b(t),Q()}function Y(t){const e=document.getElementById("strength-fill"),s=document.getElementById("strength-text");if(!e||!s)return;let i=0;t.length>=8&&i++,/[A-Z]/.test(t)&&i++,/[0-9]/.test(t)&&i++,/[^A-Za-z0-9]/.test(t)&&i++;const o=[{pct:"25%",color:"#EF4444",label:"Très faible"},{pct:"50%",color:"#F59E0B",label:"Faible"},{pct:"75%",color:"#3B82F6",label:"Moyen"},{pct:"100%",color:"#10B981",label:"Fort"}][Math.max(0,i-1)]||{pct:"0%",color:"#E2E8F0",label:"Entrez un mot de passe"};e.style.width=t.length?o.pct:"0%",e.style.background=o.color,s.textContent=t.length?o.label:"Entrez un mot de passe",s.style.color=t.length?o.color:"#94A3B8"}window.checkPasswordStrength=Y;function Q(){const t=document.getElementById("reg-pwd-toggle"),e=document.getElementById("reg-password");t?.addEventListener("click",()=>{const i=e.type==="text";e.type=i?"password":"text",t.textContent=i?"👁️":"🙈"}),document.getElementById("register-form")?.addEventListener("submit",i=>{i.preventDefault();let a=!0;[{id:"firstname",check:r=>r.length>=2,error:"firstname-error"},{id:"lastname",check:r=>r.length>=2,error:"lastname-error"},{id:"reg-email",check:r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),error:"reg-email-error"},{id:"reg-password",check:r=>r.length>=8,error:"reg-password-error"}].forEach(r=>{const x=document.getElementById(r.id),C=document.getElementById(r.error);x&&(r.check(x.value.trim())?(x.classList.remove("error"),C?.classList.remove("visible")):(x.classList.add("error"),C?.classList.add("visible"),a=!1))});const n=document.getElementById("reg-password")?.value,d=document.getElementById("confirm-password")?.value,c=document.getElementById("confirm-password"),g=document.getElementById("confirm-password-error");n!==d?(c?.classList.add("error"),g?.classList.add("visible"),a=!1):(c?.classList.remove("error"),g?.classList.remove("visible"));const $=document.getElementById("terms"),f=document.getElementById("terms-error");if($?.checked?f?.classList.remove("visible"):(f?.classList.add("visible"),a=!1),!a)return;const y=document.getElementById("register-btn"),z=document.getElementById("register-btn-text");y.disabled=!0,z.textContent="Création en cours...",setTimeout(()=>{y.disabled=!1,z.textContent="Créer mon compte",p("Compte créé !","Bienvenue sur Librafolio. Votre compte est prêt.","success"),setTimeout(()=>E("/dashboard"),900)},1800)})}function ee(t){t.innerHTML=`
    <div class="dashboard-layout">
      ${H("dashboard")}
      <div class="dashboard-main">
        ${we("Dashboard")}
        <div class="dashboard-content">
          <div class="welcome-bar">
            <span class="welcome-icon">👋</span>
            <div class="welcome-text">
              <div class="welcome-title">Bonjour, ${h.name} !</div>
              <div class="welcome-sub">Vous avez 3 nouvelles publications cette semaine. Continuez comme ça !</div>
            </div>
            <a href="#/publications" class="btn btn-white btn-sm" data-link>📤 Nouvelle publication</a>
          </div>

          <div class="stats-row">
            ${[{icon:"📄",color:"blue",val:"47",label:"Publications totales",change:"+3",dir:"up",bar:"78%"},{icon:"👁️",color:"green",val:"12.4K",label:"Vues ce mois",change:"+18%",dir:"up",bar:"65%"},{icon:"❤️",color:"orange",val:"643",label:"J'aime reçus",change:"+24",dir:"up",bar:"54%"},{icon:"📤",color:"purple",val:"289",label:"Partages",change:"-4%",dir:"down",bar:"42%"}].map(e=>`
              <div class="stat-card">
                <div class="stat-card-top">
                  <div class="stat-card-icon ${e.color}">${e.icon}</div>
                  <span class="stat-change ${e.dir}">${e.dir==="up"?"↑":"↓"} ${e.change}</span>
                </div>
                <div class="stat-card-value">${e.val}</div>
                <div class="stat-card-label">${e.label}</div>
                <div class="stat-card-bar">
                  <div class="stat-bar-fill ${e.color}" data-width="${e.bar}"></div>
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
                    ${T.map((e,s)=>`
                      <div class="chart-bar" data-height="${e/Math.max(...T)*100}%" title="${F[s]}: ${(e*120).toLocaleString()} vues" style="height:20px"></div>
                    `).join("")}
                  </div>
                  <div style="display:flex;justify-content:space-between;margin-top:0.5rem;font-size:0.65rem;color:#94A3B8">
                    ${F.map(e=>`<span>${e}</span>`).join("")}
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
                    ${l.slice(0,5).map(e=>`
                      <div class="doc-table-row">
                        <div class="doc-cell doc-cell-name">
                          <div class="doc-mini-thumb" style="background:linear-gradient(135deg,${e.color}88 0%,${e.color} 100%)"></div>
                          <div>
                            <div class="doc-name-text">${e.title}</div>
                            <div class="doc-name-pages">${e.pages} pages · ${e.date}</div>
                          </div>
                        </div>
                        <div class="doc-cell muted">${e.category}</div>
                        <div class="doc-cell">${e.views.toLocaleString()}</div>
                        <div class="doc-cell">
                          <span class="doc-status ${e.status}">
                            ${{published:"✅ Publié",draft:"✏️ Brouillon",processing:"⏳ En traitement"}[e.status]}
                          </span>
                        </div>
                        <div class="doc-cell">
                          <div class="doc-action-btns">
                            <div class="doc-action-btn view" onclick="navigate('/reader')" title="Lire">👁️</div>
                            <div class="doc-action-btn edit" title="Modifier">✏️</div>
                            <div class="doc-action-btn del" onclick="confirmDelete(${e.id})" title="Supprimer">🗑️</div>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                  <!-- Mobile card list -->
                  <div class="mobile-doc-list" style="display:none">
                    ${l.slice(0,5).map(e=>`
                      <div style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem 0;border-bottom:1px solid #F1F5FB">
                        <div style="width:36px;height:44px;border-radius:4px;background:linear-gradient(135deg,${e.color}88 0%,${e.color} 100%);flex-shrink:0"></div>
                        <div style="flex:1">
                          <div style="font-size:0.85rem;font-weight:600;color:var(--primary)">${e.title}</div>
                          <div style="font-size:0.72rem;color:#94A3B8">${e.views.toLocaleString()} vues · ${e.date}</div>
                        </div>
                        <span class="doc-status ${e.status}" style="font-size:0.68rem">
                          ${{published:"Publié",draft:"Brouillon",processing:"Traitement"}[e.status]}
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
                    ${R.map(e=>`
                      <div class="activity-item">
                        <div class="activity-icon ${e.type}">${e.icon}</div>
                        <div class="activity-text">
                          <div class="activity-desc">${e.desc}</div>
                          <div class="activity-time">${e.time}</div>
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
                  ${[{name:"PDFs",pct:45,color:"#2563EB"},{name:"Images",pct:30,color:"#8B5CF6"},{name:"Autres",pct:25,color:"#10B981"}].map(e=>`
                    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.6rem">
                      <div style="width:10px;height:10px;border-radius:50%;background:${e.color};flex-shrink:0"></div>
                      <span style="font-size:0.8rem;color:#64748B;flex:1">${e.name}</span>
                      <span style="font-size:0.8rem;font-weight:600;color:var(--primary)">${e.pct}%</span>
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
  `,b(t),te()}function te(){setTimeout(()=>{document.querySelectorAll(".stat-bar-fill[data-width]").forEach(s=>{s.style.width=s.dataset.width}),document.querySelectorAll(".chart-bar[data-height]").forEach(s=>{s.style.height=s.dataset.height})},300);const t=document.querySelector(".sidebar");document.getElementById("sidebar-toggle")?.addEventListener("click",()=>{t?.classList.toggle("open")})}function se(t){const e=l.find(i=>i.id===t);if(!e)return;const s=document.createElement("div");s.className="modal-overlay",s.innerHTML=`
    <div class="modal">
      <div class="modal-header">
        <span style="font-size:1.5rem">🗑️</span>
        <div class="modal-title">Supprimer la publication</div>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>
      <p style="font-size:0.9rem;color:#64748B;margin-bottom:1.5rem">
        Êtes-vous sûr de vouloir supprimer <strong>"${e.title}"</strong> ? Cette action est irréversible.
      </p>
      <div style="display:flex;gap:0.75rem;justify-content:flex-end">
        <button class="btn btn-outline" onclick="this.closest('.modal-overlay').remove()">Annuler</button>
        <button class="btn btn-danger" onclick="deleteDoc(${t});this.closest('.modal-overlay').remove()">Supprimer définitivement</button>
      </div>
    </div>
  `,document.body.appendChild(s)}window.confirmDelete=se;function ie(t){const e=l.findIndex(s=>s.id===t);e>=0&&l.splice(e,1),p("Publication supprimée","Le document a été supprimé avec succès.","success")}window.deleteDoc=ie;function S(t){const e=w==="all"?l:l.filter(s=>s.status===w||s.category.toLowerCase()===w);t.innerHTML=`
    <div class="dashboard-layout">
      ${H("publications")}
      <div class="dashboard-main">
        <div class="pub-page">
          <div class="pub-header">
            <div class="pub-header-container">
              <div class="pub-header-top">
                <div>
                  <h1 class="pub-header-title">Mes Publications</h1>
                  <p class="pub-header-sub">${l.length} documents publiés · 6.8 Go utilisés</p>
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
                ${[{val:"all",label:"Toutes"},{val:"published",label:"✅ Publiées"},{val:"draft",label:"✏️ Brouillons"},{val:"processing",label:"⏳ En traitement"},{val:"Rapport",label:"📊 Rapports"},{val:"Catalogue",label:"📦 Catalogues"}].map(s=>`
                  <button class="filter-tab ${w===s.val?"active":""}"
                    onclick="setFilter('${s.val}')">${s.label}</button>
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
              <div class="pub-results" id="pub-results">${e.length} publication${e.length!==1?"s":""}</div>
              <div class="view-toggle">
                <button class="view-btn ${k==="grid"?"active":""}" onclick="setView('grid')" title="Grille">▦</button>
                <button class="view-btn ${k==="list"?"active":""}" onclick="setView('list')" title="Liste">☰</button>
              </div>
              <select class="sort-select" onchange="sortDocs(this.value)">
                <option value="date">Date (récent)</option>
                <option value="views">Vues</option>
                <option value="title">Titre A-Z</option>
                <option value="likes">Likes</option>
              </select>
            </div>

            <!-- Docs Grid -->
            <div class="docs-grid ${k==="list"?"list-view":""}" id="docs-grid">
              ${e.length?e.map(s=>I(s)).join(""):`
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
  `,b(t)}function I(t){return`
    <div class="doc-card" onclick="navigate('/reader')">
      <div class="doc-card-thumb" style="background:linear-gradient(135deg,${t.color}cc 0%,${t.color} 100%)">
        <div class="doc-thumb-cover">📄</div>
        <div class="doc-thumb-overlay">
          <div class="doc-thumb-btns">
            <button class="doc-thumb-btn primary-btn" onclick="event.stopPropagation();navigate('/reader')">👁️ Lire</button>
            <button class="doc-thumb-btn" onclick="event.stopPropagation();showShareModal(${t.id})">📤 Partager</button>
          </div>
        </div>
        <span class="doc-category-badge">${t.category}</span>
      </div>
      <div class="doc-card-body">
        <div class="doc-card-title">${t.title}</div>
        <div class="doc-card-meta">
          <span>${t.pages} pages</span>
          <span>·</span>
          <span>${t.date}</span>
        </div>
        <div class="doc-card-stats">
          <div class="doc-card-stat">👁️ ${t.views.toLocaleString()}</div>
          <div class="doc-card-stat">❤️ ${t.likes}</div>
          <div class="doc-card-stat">
            <span class="doc-status ${t.status}" style="font-size:0.65rem">
              ${{published:"Publié",draft:"Brouillon",processing:"Traitement"}[t.status]}
            </span>
          </div>
        </div>
      </div>
    </div>
  `}function ae(t){w=t,S(document.getElementById("page-container"))}window.setFilter=ae;function oe(t){k=t;const e=document.getElementById("docs-grid");e&&(e.className=`docs-grid ${t==="list"?"list-view":""}`),document.querySelectorAll(".view-btn").forEach((s,i)=>{s.classList.toggle("active",i===0&&t==="grid"||i===1&&t==="list")})}window.setView=oe;function ne(t){const e=document.getElementById("docs-grid"),s=document.getElementById("pub-results"),i=t.toLowerCase(),a=l.filter(o=>o.title.toLowerCase().includes(i)||o.category.toLowerCase().includes(i));e&&(e.innerHTML=a.length?a.map(o=>I(o)).join(""):`<div style="grid-column:1/-1;text-align:center;padding:3rem;color:#64748B"><div style="font-size:2rem">🔍</div><div>Aucun résultat pour "${t}"</div></div>`),s&&(s.textContent=`${a.length} publication${a.length!==1?"s":""}`)}window.filterDocs=ne;function le(t){const e=[...l].sort((i,a)=>t==="views"?a.views-i.views:t==="title"?i.title.localeCompare(a.title):t==="likes"?a.likes-i.likes:0),s=document.getElementById("docs-grid");s&&(s.innerHTML=e.map(i=>I(i)).join(""))}window.sortDocs=le;function re(t){t.preventDefault(),document.getElementById("upload-zone")?.classList.add("dragging")}window.handleDragOver=re;function de(){document.getElementById("upload-zone")?.classList.remove("dragging")}window.handleDragLeave=de;function ce(t){t.preventDefault(),document.getElementById("upload-zone")?.classList.remove("dragging");const e=t.dataTransfer?.files[0];e&&M(e.name)}window.handleDrop=ce;function ve(){document.getElementById("file-input")?.click()}window.triggerUpload=ve;function ue(t){const e=t.files[0];e&&M(e.name)}window.simulateUpload=ue;function M(t){const e=document.getElementById("upload-progress"),s=document.getElementById("upload-fill"),i=document.getElementById("upload-progress-text");if(!e||!s)return;e.classList.add("visible"),s.style.width="0%";const a=[{pct:20,msg:"Analyse du fichier..."},{pct:45,msg:"Conversion en cours..."},{pct:70,msg:"Génération des miniatures..."},{pct:90,msg:"Optimisation des pages..."},{pct:100,msg:"Finalisation..."}];let o=0;const n=setInterval(()=>{if(o>=a.length){clearInterval(n),setTimeout(()=>{e.classList.remove("visible"),s.style.width="0%",p("Upload réussi !",`"${t}" a été publié avec succès.`,"success");const d={id:l.length+1,title:t.replace(/\.[^/.]+$/,""),pages:Math.floor(Math.random()*40)+8,category:"Nouveau",views:0,likes:0,date:"Aujourd'hui",status:"processing",color:"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")};l.unshift(d);const c=document.getElementById("docs-grid");c&&c.insertAdjacentHTML("afterbegin",I(d))},500);return}s.style.width=a[o].pct+"%",i&&(i.textContent=a[o].msg),o++},600)}function pe(t){const e=l.find(a=>a.id===t);if(!e)return;const s=`https://librafolio.io/docs/${t}-${e.title.toLowerCase().replace(/\s+/g,"-")}`,i=document.createElement("div");i.className="modal-overlay",i.innerHTML=`
    <div class="modal">
      <div class="modal-header">
        <span style="font-size:1.5rem">📤</span>
        <div class="modal-title">Partager "${e.title}"</div>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>
      <div style="margin-bottom:1.5rem">
        <label style="font-size:0.8rem;font-weight:600;color:#64748B;display:block;margin-bottom:0.4rem">Lien de partage</label>
        <div style="display:flex;gap:0.5rem">
          <input type="text" value="${s}" readonly style="flex:1;padding:0.6rem 0.8rem;border:1px solid #E2E8F0;border-radius:8px;font-size:0.8rem;font-family:var(--font);color:var(--primary);background:#F8FAFF" />
          <button class="btn btn-primary btn-sm" onclick="copyLink('${s}')">Copier</button>
        </div>
      </div>
      <div style="display:flex;gap:0.75rem">
        ${["LinkedIn","Twitter","Facebook","Email"].map(a=>`
          <button class="btn btn-outline btn-sm" style="flex:1;justify-content:center" onclick="shareOn('${a}')">
            ${{LinkedIn:"🔷",Twitter:"🐦",Facebook:"🔵",Email:"✉️"}[a]} ${a}
          </button>
        `).join("")}
      </div>
    </div>
  `,document.body.appendChild(i)}window.showShareModal=pe;function me(t){navigator.clipboard?.writeText(t).then(()=>{p("Copié !","Lien copié dans le presse-papiers.","success",2e3)})}window.copyLink=me;function ge(t){p(`Partagé sur ${t}`,"Votre publication a été partagée.","success",2e3),document.querySelector(".modal-overlay")?.remove()}window.shareOn=ge;function be(t){const e=l[0];u=e?.pages||24,v=1,m=100,t.innerHTML=`
    <div class="reader-page">
      <!-- Reader Toolbar -->
      <div class="reader-toolbar">
        <a href="#/publications" class="reader-btn" data-link title="Retour">←</a>
        <div class="reader-doc-title">${e?.title||"Document"}</div>

        <div class="reader-nav-btns">
          <button class="reader-btn" id="r-first" onclick="goToPage(1)" title="Première page">⇤</button>
          <button class="reader-btn" id="r-prev" onclick="prevPage()" title="Page précédente">‹</button>
          <div class="reader-page-indicator">
            <input class="reader-page-input" type="number" id="page-input" value="1" min="1" max="${u}" onchange="goToPage(parseInt(this.value))" />
            <span>/ ${u}</span>
          </div>
          <button class="reader-btn" id="r-next" onclick="nextPage()" title="Page suivante">›</button>
          <button class="reader-btn" id="r-last" onclick="goToPage(${u})" title="Dernière page">⇥</button>
        </div>

        <div class="reader-zoom">
          <button class="reader-btn" onclick="changeZoom(-10)" title="Dézoomer">−</button>
          <span id="zoom-label">${m}%</span>
          <button class="reader-btn" onclick="changeZoom(10)" title="Zoomer">+</button>
          <button class="reader-btn" onclick="resetZoom()" title="Adapter">⊡</button>
        </div>

        <button class="reader-btn" onclick="toggleFullscreen()" id="fs-btn" title="Plein écran">⛶</button>
        <button class="reader-btn" onclick="showShareModal(${e?.id||1})" title="Partager">📤</button>
      </div>

      <!-- Book Area -->
      <div class="reader-area" id="reader-area">
        <div class="flipbook" id="flipbook" style="transform:scale(${m/100})">
          <div class="book-container">
            <div class="book-page left-page" id="left-page" style="width:min(320px,42vw);height:min(450px,60vw)">
              ${L(1)}
            </div>
            <div class="book-page right-page" id="right-page" style="width:min(320px,42vw);height:min(450px,60vw)">
              ${L(2)}
            </div>
          </div>
        </div>
      </div>

      <!-- Thumbnails -->
      <div class="reader-thumbnails" id="reader-thumbnails">
        ${Array.from({length:Math.min(u,20)},(s,i)=>`
          <div class="thumb-item ${i===0?"active":""}" onclick="goToPage(${i+1})">
            <div class="thumb-preview">
              <div class="thumb-lines">
                <div class="thumb-line dark"></div>
                <div class="thumb-line"></div>
                <div class="thumb-line"></div>
                <div class="thumb-line" style="width:60%"></div>
                <div class="thumb-line"></div>
              </div>
            </div>
            <div class="thumb-num">${i+1}</div>
          </div>
        `).join("")}
        ${u>20?`<div class="thumb-item" style="display:flex;align-items:center;padding:0 0.5rem;color:var(--white-60);font-size:0.75rem">+${u-20} pages</div>`:""}
      </div>
    </div>
  `,b(t),ye()}function L(t){const e=[`<div class="page-content">
      <div class="page-text-line title"></div>
      <div class="page-text-line"></div>
      <div class="page-text-line"></div>
      <div class="page-text-line short"></div>
      <div class="page-image-placeholder"></div>
      <div class="page-text-line"></div>
      <div class="page-text-line shorter"></div>
      <div class="page-num">— ${t} —</div>
    </div>`,`<div class="page-content">
      <div class="page-text-line title"></div>
      <div class="page-text-line"></div>
      <div class="page-text-line short"></div>
      <div class="page-text-line"></div>
      <div class="page-text-line shorter"></div>
      <div class="page-text-line"></div>
      <div class="page-image-placeholder" style="height:100px"></div>
      <div class="page-text-line"></div>
      <div class="page-num">— ${t} —</div>
    </div>`,`<div class="page-content" style="background:linear-gradient(135deg,#F8FAFF 0%,#EEF2FF 100%)">
      <div class="page-text-line title"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0">
        <div class="page-image-placeholder" style="height:80px;margin:0"></div>
        <div class="page-image-placeholder" style="height:80px;margin:0"></div>
      </div>
      <div class="page-text-line"></div>
      <div class="page-text-line short"></div>
      <div class="page-num">— ${t} —</div>
    </div>`];return e[t%e.length]}function P(t){if(t<1||t>u)return;const e=v;v=Math.max(1,Math.min(t,u));const s=document.getElementById("left-page"),i=document.getElementById("right-page"),a=document.getElementById("page-input");if(!s||!i)return;const o=t>e?1:-1,n=document.createElement("div");n.className="page-turn-animation",o>0?i.appendChild(n):s.appendChild(n),setTimeout(()=>n.remove(),800),s.innerHTML=L(v),i.innerHTML=L(Math.min(v+1,u)),s.style.animation="none",i.style.animation="none",requestAnimationFrame(()=>{s.style.animation="fadeIn 0.5s ease",i.style.animation="fadeIn 0.5s ease"}),a&&(a.value=v),document.querySelectorAll(".thumb-item").forEach((c,g)=>{c.classList.toggle("active",g===v-1)}),document.querySelector(`.thumb-item:nth-child(${v})`)?.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}window.goToPage=P;function q(){P(v-2)}function j(){P(v+2)}window.prevPage=q;window.nextPage=j;function B(t){m=Math.max(50,Math.min(200,m+t));const e=document.getElementById("flipbook");e&&(e.style.transform=`scale(${m/100})`);const s=document.getElementById("zoom-label");s&&(s.textContent=m+"%")}window.changeZoom=B;function he(){m=100;const t=document.getElementById("flipbook");t&&(t.style.transform="scale(1)");const e=document.getElementById("zoom-label");e&&(e.textContent="100%")}window.resetZoom=he;function fe(){const t=document.getElementById("reader-area");document.fullscreenElement?(document.exitFullscreen?.(),document.getElementById("fs-btn").textContent="⛶"):(t?.requestFullscreen?.(),document.getElementById("fs-btn").textContent="⊠",p("Plein écran","Appuyez sur Échap pour quitter","info",2e3))}window.toggleFullscreen=fe;function ye(){const t=e=>{(e.key==="ArrowRight"||e.key==="ArrowDown")&&j(),(e.key==="ArrowLeft"||e.key==="ArrowUp")&&q(),(e.key==="+"||e.key==="=")&&B(10),e.key==="-"&&B(-10),e.key==="Escape"&&document.exitFullscreen?.()};document.addEventListener("keydown",t),window._readerKeyHandler=t}function H(t){const e=[{href:"/dashboard",icon:"🏠",label:"Dashboard"},{href:"/publications",icon:"📄",label:"Publications",badge:"8"},{href:"/reader",icon:"📖",label:"Lecteur"}],s=[{href:"#",icon:"⚙️",label:"Paramètres"},{href:"#",icon:"❓",label:"Aide & Support"},{href:"/login",icon:"🚪",label:"Déconnexion"}];return`
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-user">
        <div class="sidebar-avatar">${h.initials}</div>
        <div class="sidebar-name">${h.name}</div>
        <div class="sidebar-plan">
          <span class="plan-badge">${h.plan}</span>
          <span>${h.email}</span>
        </div>
      </div>
      <nav class="sidebar-nav">
        <div class="sidebar-section-label">Navigation</div>
        ${e.map(i=>`
          <a href="#${i.href}" class="sidebar-link ${t===i.href.slice(1)?"active":""}" data-link>
            <span class="sidebar-link-icon">${i.icon}</span>
            ${i.label}
            ${i.badge?`<span class="sidebar-badge">${i.badge}</span>`:""}
          </a>
        `).join("")}
        <div class="sidebar-section-label" style="margin-top:1rem">Compte</div>
        ${s.map(i=>`
          <a href="#${i.href}" class="sidebar-link" data-link>
            <span class="sidebar-link-icon">${i.icon}</span>
            ${i.label}
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
  `}function we(t){return`
    <div class="dashboard-topbar">
      <button class="reader-btn" id="sidebar-toggle" onclick="document.getElementById('sidebar').classList.toggle('open')" title="Menu" style="display:none">☰</button>
      <div class="topbar-title">${t}</div>
      <div class="topbar-search">
        <span>🔍</span>
        <input type="search" placeholder="Rechercher..." />
      </div>
      <div class="topbar-actions">
        <button class="topbar-btn" title="Notifications">
          🔔 <span class="notif-dot"></span>
        </button>
        <button class="topbar-btn" title="Messages">💬</button>
        <div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--accent) 0%,#818CF8 100%);display:flex;align-items:center;justify-content:center;font-size:0.8rem;font-weight:800;color:white;cursor:pointer">${h.initials}</div>
      </div>
    </div>
  `}function $e(t){t.innerHTML=`
    <div class="not-found" style="padding-top:65px">
      <div>
        <div class="not-found-icon">🗺️</div>
        <h1 class="not-found-title">404</h1>
        <p class="not-found-sub">Cette page n'existe pas ou a été déplacée.</p>
        <a href="#/" class="btn btn-primary btn-lg" data-link>← Retour à l'accueil</a>
      </div>
    </div>
  `,b(t)}function b(t=document){t.querySelectorAll("[data-link]").forEach(e=>{e.addEventListener("click",s=>{const i=e.getAttribute("href");i&&i.startsWith("#")})})}function xe(){document.addEventListener("click",t=>{const e=t.target.closest("[data-link]");if(e){const s=e.getAttribute("href");if(s&&s.startsWith("#")){t.preventDefault(),location.hash=s;const i=document.getElementById("navbar-menu"),a=document.getElementById("hamburger");i?.classList.remove("open"),a?.classList.remove("open")}}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("loader");setTimeout(()=>{t?.classList.add("hidden"),setTimeout(()=>t?.remove(),500)},2e3),K(),xe(),window.addEventListener("hashchange",()=>{window._readerKeyHandler&&(document.removeEventListener("keydown",window._readerKeyHandler),window._readerKeyHandler=null),A()}),A()});window.navigate=E;
