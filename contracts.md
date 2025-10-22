# ARKA Landing Page - Contrats & Architecture

## 📋 Vue d'ensemble

Landing page complète en français pour ARKA - Orchestrateur d'Équipes IA.

**Stack:**
- Frontend: React + TailwindCSS + Shadcn UI
- Design: Thème dark contrasté avec accent rouge/rose (#cb0f44)
- Navigation: React Router

---

## 🎨 Design System

### Palette de couleurs
- **Principal:** `#cb0f44` (rouge/rose) - CTAs, accents, highlights
- **Fond:** `#000000` (noir), `#0a0a0a` (noir légèrement plus clair)
- **Texte:** `#FFFFFF` (blanc), `#gray-300/400` (texte secondaire)
- **Bordures:** `white/10`, `white/20` pour séparation subtile

### Typographie
- **Titres:** 5xl-6xl (48-60px) font-bold
- **Sous-titres:** 3xl-4xl (30-36px) font-bold
- **Corps:** xl-2xl (20-24px) pour lead text, base (16px) pour corps
- **Labels:** sm-xs (12-14px) uppercase tracking-wider

### Composants
- **Buttons Primary:** bg-[#cb0f44] hover:bg-[#cb0f44]/90 hover:scale-105
- **Buttons Secondary:** bg-white/5 border-white/20 hover:bg-white/10
- **Cards:** bg-[#0a0a0a] border-white/10 hover:border-[#cb0f44]/50
- **Inputs:** bg-white/5 border-white/10 focus:border-[#cb0f44]/50

---

## 📁 Structure des fichiers

```
/app/frontend/src/
├── data/
│   └── mock.js              # Données mock (experts, features, benefits)
├── components/
│   ├── Header.jsx           # Navigation fixe avec logo
│   └── Footer.jsx           # Footer avec liens et réseaux sociaux
├── pages/
│   ├── LandingPage.jsx      # Page d'accueil complète
│   ├── ExpertsPage.jsx      # 24 experts avec filtres
│   ├── FeaturesPage.jsx     # Fonctionnalités détaillées
│   ├── BetaPage.jsx         # Formulaire inscription bêta
│   ├── ContactPage.jsx      # Formulaire de contact
│   └── HistoryPage.jsx      # Histoire d'ARKA
├── App.js                   # Routes principales
├── App.css                  # Styles personnalisés
└── index.css                # TailwindCSS + variables
```

---

## 🔗 Routes

| Route | Description | Composant |
|-------|-------------|-----------|
| `/` | Landing page | LandingPage |
| `/experts` | Liste des 24 experts | ExpertsPage |
| `/features` | Fonctionnalités | FeaturesPage |
| `/beta` | Inscription bêta | BetaPage |
| `/contact` | Contact | ContactPage |
| `/histoire` | Histoire ARKA | HistoryPage |

---

## 📊 Données Mock (mock.js)

### Experts (24 agents)
```javascript
{
  id: number,
  name: string,
  category: "tech" | "marketing" | "commerce" | "rh" | "gouvernance",
  baseline: string,
  description: string,
  strengths: string[],
  deliverables: string[],
  metrics: string[]
}
```

**Catégories:**
- Tech & Dev (8): Lead Dev, Technical Architect, DevOps Guardian, UX/UI, QA, Security, Spec Writer, FSX
- Marketing (5): Market Research, Brand Strategy, Growth Hacker, Content Strategy, Analytics
- Commerce (5): Mission Qualifier, Outreach, Pipeline Tracker, Positioning, GEMINI Owner
- RH (4): HR Transformation, Employee Experience, Compensation, Learning & Development
- Gouvernance (2): AGP, PMO

### Features (6 principales)
```javascript
{
  id: number,
  icon: string, // lucide-react icon name
  title: string,
  description: string
}
```

### Benefits (4 métriques clés)
```javascript
{
  id: number,
  stat: string, // "98%", "24", "100%", "16"
  label: string,
  description: string
}
```

---

## 🎯 Sections de la Landing Page

### 1. Hero
- Titre principal avec accent rouge sur "équipes coordonnées"
- Description (24 agents, local-first, gouverné)
- 2 CTAs: "Rejoindre la bêta" (primary), "Découvrir les experts" (secondary)
- 3 statistiques: 24 agents, 16 workflows, 98% gain
- Image tech 3D en arrière-plan avec overlay

### 2. Problème/Solution
- Grid 2 colonnes
- Problème: 4 points avec bullets rouges
- Solution: 4 points avec bullets #cb0f44

### 3. Fonctionnalités Clés
- Grid 3 colonnes
- 6 cards avec icônes
- Lien vers page /features

### 4. Experts Preview
- Grid 4 colonnes
- 8 premiers experts (mix catégories)
- CTA vers /experts

### 5. Bénéfices
- Grid 4 colonnes
- Stats avec descriptions

### 6. CTA Final
- Centré
- Message d'appel à l'action
- Bouton inscription bêta

---

## 🔍 Page Experts - Fonctionnalités

### Filtres
- Barre de recherche (nom, description)
- 6 boutons catégories:
  - Tous les experts (24)
  - Tech & Dev (8)
  - Marketing (5)
  - Commerce (5)
  - Ressources Humaines (4)
  - Gouvernance (2)

### Affichage
- Grid 3 colonnes
- Cards détaillées pour chaque expert:
  - Catégorie (badge)
  - Nom
  - Baseline
  - Description
  - Forces clés (tags)
  - Livrables (liste)
  - Indicateurs (liste)

### État filtré
- `useState` pour selectedCategory et searchQuery
- Filtrage côté client en temps réel
- Compteur d'experts trouvés

---

## 📝 Formulaires

### Formulaire Bêta
**Champs:**
- Prénom* / Nom*
- Email professionnel*
- Entreprise* / Rôle*
- Cas d'usage* (select: audit, delivery, marketing, rh, ops, other)
- Taille équipe* (select: 1-10, 11-50, 51-200, 201+)
- Message (textarea, optionnel)

**Validation:**
- Tous les champs avec * sont required
- Type email pour validation

**État:**
- Success screen avec CheckCircle après soumission

### Formulaire Contact
**Champs:**
- Nom complet*
- Email*
- Sujet* (select: demo, beta, partnership, support, other)
- Message* (textarea)

**État:**
- Message success inline après soumission (3s)

---

## 🎨 Composants Réutilisables

### Header
- Logo ARKA (SVG inline)
- Navigation desktop (5 liens + CTA bêta)
- Menu mobile (hamburger icon)
- Fixed top, backdrop blur

### Footer
- 4 colonnes:
  1. Brand + description + social icons
  2. Produit (links)
  3. Entreprise (links)
  4. Légal (links)
- Copyright bar en bas

---

## 🖼️ Assets

### Images
- **Hero background:** Image 3D tech fournie par l'utilisateur
  - URL: https://customer-assets.emergentagent.com/.../futuristic-3d-5120x3413-13107.jpg
  - Opacité: 20%, overlay gradient noir

### Logo
- SVG ARKA inline dans Header et Footer
- Couleurs: Blanc (#FFFFFF) + accent rouge (#cb0f44)

---

## 🚀 Prochaines Étapes (Backend)

**Actuellement:** Tout en mock data

**À implémenter:**
1. API Backend (FastAPI)
   - POST /api/beta-request (formulaire bêta)
   - POST /api/contact (formulaire contact)
   - GET /api/experts (liste experts)

2. Base de données (MongoDB)
   - Collection: beta_requests
   - Collection: contact_messages
   - Collection: experts (pré-remplie avec les 24 experts)

3. Intégration
   - Remplacer mock.js par appels API
   - Gestion des erreurs
   - Loading states

---

## ✅ Features Complétées

- ✅ Landing page complète avec Hero, Problème/Solution, Features, Experts, Benefits, CTA
- ✅ Page Experts avec 24 agents + filtres catégories + recherche
- ✅ Page Features détaillée avec 16 workflows
- ✅ Page Bêta avec formulaire complet
- ✅ Page Contact avec formulaire
- ✅ Page Histoire avec timeline
- ✅ Header responsive avec navigation
- ✅ Footer complet avec liens
- ✅ Design contrasté dark avec accent #cb0f44
- ✅ Mock data structuré pour tous les experts
- ✅ Routing React Router
- ✅ Responsive design (mobile, tablet, desktop)

---

## 🎯 Notes de Design

### Respect des Guidelines
- ✅ Palette #cb0f44 utilisée pour tous les accents
- ✅ Thème dark contrasté (noir + gris cendré + blanc)
- ✅ Pas de gradients surchargés (règle 80/20 respectée)
- ✅ Icônes Lucide React (pas d'emojis)
- ✅ Transitions et hover states fluides
- ✅ Image hero en arrière-plan discret avec overlay

### Améliorations UX
- Boutons avec hover:scale-105 pour feedback tactile
- Focus states bien visibles (#cb0f44 borders)
- Transitions 0.4s ease-in-out
- Cartes avec hover:border-[#cb0f44]/50
- Scrollbar personnalisée (#cb0f44)
