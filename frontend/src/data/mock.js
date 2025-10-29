// Mock data for ARKA landing page

export const experts = [
  // SUPERVISION & GOUVERNANCE (2)
  {
    id: 1,
    name: "Archiviste",
    category: "supervision",
    baseline: "Gardien de la gouvernance et de la conformité",
    description: "Optimise la mémoire du système, archive intelligemment et maintient l'ordre. Votre garant de la cohérence architecturale.",
    strengths: ["Optimisation mémoire", "Gouvernance ARKA", "Conformité processus", "Archivage intelligent"],
    deliverables: ["Rapports d'optimisation", "Archives structurées", "Validations de conformité"],
    metrics: ["Taux d'optimisation", "Qualité des archives", "Conformité processus"]
  },
  {
    id: 2,
    name: "Scribe",
    category: "supervision",
    baseline: "Documentation et evidence packs automatiques",
    description: "Transforme chaque action en dossier de preuves complet. Documentation automatique, traçabilité garantie.",
    strengths: ["Documentation automatique", "Evidence packs", "Rapports structurés", "Synthèses"],
    deliverables: ["Dossiers de preuves", "Documentation technique", "Rapports d'activité"],
    metrics: ["Complétude des preuves", "Temps de documentation", "Qualité des rapports"]
  },

  // ORCHESTRATION & PILOTAGE (12)
  {
    id: 3,
    name: "AGP",
    category: "orchestration",
    baseline: "Gouvernance produit et validation des décisions",
    description: "Cadre les décisions stratégiques, valide les livrables et documente les choix architecturaux via ADR. Votre gate de qualité.",
    strengths: ["Architecture Decision Records", "Validation gouvernance", "Gestion des risques", "Gates de qualité"],
    deliverables: ["ADR validés", "Validations de livrables", "Évaluations de risques"],
    metrics: ["Décisions documentées", "Écarts évités", "Conformité architecturale"]
  },
  {
    id: 4,
    name: "ARKA",
    category: "orchestration",
    baseline: "Point d'entrée conversationnel intelligent",
    description: "Accueille vos demandes, clarifie les besoins et dispatche vers le bon expert. L'interface qui comprend.",
    strengths: ["Clarification besoins", "Détection risques", "Dispatch intelligent", "Cadrage synthétique"],
    deliverables: ["Briefs clarifiés", "Notes de cadrage", "Orientations expertes"],
    metrics: ["Clarté des briefs", "Pertinence dispatch", "Satisfaction utilisateur"]
  },
  {
    id: 5,
    name: "PMO",
    category: "orchestration",
    baseline: "Orchestration produit de bout en bout",
    description: "Coordonne les équipes, structure le backlog et pilote les workflows. Du cadrage à la livraison, sans perte de fil.",
    strengths: ["Orchestration workflow", "Coordination équipes", "Planification", "Reporting continu"],
    deliverables: ["Plans de travail", "Délégations", "Rapports d'avancement"],
    metrics: ["Prévisibilité livraison", "Lead time", "Satisfaction équipe"]
  },
  {
    id: 6,
    name: "Référent Conformité",
    category: "orchestration",
    baseline: "Garde-fou conformité et données sensibles",
    description: "Contrôle les risques RGPD, conformité et données. Challenge les décisions sensibles pour protéger votre organisation.",
    strengths: ["Gouvernance RGPD", "Détection risques", "Evidence review", "Challenge sensible"],
    deliverables: ["Validations conformité", "Rapports de risques", "Challenges documentés"],
    metrics: ["Risques détectés", "Conformité maintenue", "Incidents évités"]
  },
  {
    id: 7,
    name: "Référent Data & IA",
    category: "orchestration",
    baseline: "Pilotage et arbitrage projets Data/IA",
    description: "Priorise les initiatives Data et IA, contrôle la cohérence et arbitre les ressources selon la valeur business.",
    strengths: ["Priorisation Data/IA", "Arbitrage technique", "Capacité squads", "Gouvernance projets"],
    deliverables: ["Roadmaps Data/IA", "Priorisations backlog", "Arbitrages documentés"],
    metrics: ["ROI projets IA", "Utilisation capacité", "Time-to-value"]
  },
  {
    id: 8,
    name: "Référent Commercial",
    category: "orchestration",
    baseline: "Pilotage terrain et performance commerciale",
    description: "Orchestre les actions commerciales, priorise le pipeline et garantit la cohérence de l'approche client.",
    strengths: ["Pilotage pipeline", "Priorisation terrain", "Cohérence commerciale", "Arbitrage ressources"],
    deliverables: ["Plans d'action commerciaux", "Priorisations opportunités", "Reporting performance"],
    metrics: ["Taux de conversion", "Vélocité pipeline", "Win rate"]
  },
  {
    id: 9,
    name: "Référent Finance",
    category: "orchestration",
    baseline: "Arbitrage financier et performance économique",
    description: "Valide la cohérence budgétaire, arbitre les investissements et garantit la soutenabilité financière des projets.",
    strengths: ["Arbitrage financier", "Contrôle budgétaire", "ROI projets", "Performance économique"],
    deliverables: ["Validations budgets", "Analyses ROI", "Arbitrages investissements"],
    metrics: ["Budget respecté", "ROI réalisé", "Rentabilité projets"]
  },
  {
    id: 10,
    name: "Référent Marketing",
    category: "orchestration",
    baseline: "Cohérence marque et arbitrage marketing",
    description: "Garantit la cohérence de marque, priorise les initiatives marketing et arbitre les ressources créatives.",
    strengths: ["Gouvernance marque", "Priorisation marketing", "Cohérence éditoriale", "Arbitrage créatif"],
    deliverables: ["Validations marque", "Roadmaps marketing", "Guidelines respectées"],
    metrics: ["Cohérence marque", "Impact campagnes", "Efficacité budgétaire"]
  },
  {
    id: 11,
    name: "Référent Opérations",
    category: "orchestration",
    baseline: "Pilotage opérationnel et conformité processus",
    description: "Orchestre les opérations quotidiennes, garantit la conformité des processus et optimise l'efficacité terrain.",
    strengths: ["Pilotage ops", "Conformité processus", "Optimisation flux", "Gestion incidents"],
    deliverables: ["Plans opérationnels", "Rapports conformité", "Optimisations processus"],
    metrics: ["Efficacité opérationnelle", "Conformité processus", "MTTR incidents"]
  },
  {
    id: 12,
    name: "Référent Produit",
    category: "orchestration",
    baseline: "Gouvernance produit et priorisation stratégique",
    description: "Pilote la vision produit, priorise le backlog stratégique et arbitre les fonctionnalités selon la valeur.",
    strengths: ["Vision produit", "Priorisation backlog", "Arbitrage features", "Roadmap stratégique"],
    deliverables: ["Roadmaps produit", "Priorisations validées", "Stratégies features"],
    metrics: ["Adoption features", "Time-to-market", "Satisfaction utilisateurs"]
  },
  {
    id: 13,
    name: "Référent RH",
    category: "orchestration",
    baseline: "Pilotage RH et transformation culturelle",
    description: "Orchestre les initiatives RH, garantit la cohérence des politiques et pilote la transformation des équipes.",
    strengths: ["Gouvernance RH", "Transformation équipes", "Politiques cohérentes", "Arbitrage ressources"],
    deliverables: ["Politiques RH", "Plans transformation", "Arbitrages validés"],
    metrics: ["Engagement collaborateurs", "Rétention talents", "Efficacité transformation"]
  },
  {
    id: 14,
    name: "Référent Tech",
    category: "orchestration",
    baseline: "Architecture technique et arbitrage technologique",
    description: "Définit la direction technique, arbitre les choix technologiques et garantit la cohérence architecturale.",
    strengths: ["Architecture système", "Choix technologiques", "Standards techniques", "Arbitrage tech"],
    deliverables: ["Architecture validée", "Standards tech", "Décisions technologiques"],
    metrics: ["Dette technique maîtrisée", "Cohérence architecture", "Vélocité équipe"]
  },

  // EXPERTS MÉTIER - TECH & DEV (9)
  {
    id: 15,
    name: "Lead Dev Bâtisseur",
    category: "tech",
    baseline: "Construire bien, vite, durablement",
    description: "Transforme les spécifications en code fiable, testé et performant. L'expert qui livre de la qualité.",
    strengths: ["Full-stack développement", "TDD", "Code review", "Refactoring", "Performance"],
    deliverables: ["Features implémentées", "Tests unitaires", "Code reviews", "Optimisations"],
    metrics: ["Couverture de tests", "Qualité code", "Vélocité livraison"]
  },
  {
    id: 16,
    name: "Technical Architect",
    category: "tech",
    baseline: "Fondations claires, choix assumés",
    description: "Dessine l'architecture système et cadre les décisions techniques. Les bases solides pour scaler.",
    strengths: ["Architecture système", "Design patterns", "Scalabilité", "ADR techniques"],
    deliverables: ["Diagrammes architecture", "ADR techniques", "Specs d'implémentation"],
    metrics: ["Dette technique évitée", "Robustesse système", "Maintenabilité"]
  },
  {
    id: 17,
    name: "DevOps Guardian",
    category: "tech",
    baseline: "Livraison sans surprise, infrastructure sous contrôle",
    description: "Automatise les pipelines, valide l'arborescence et fiabilise les déploiements. La livraison sereine.",
    strengths: ["Infrastructure as Code", "Pipelines CI/CD", "Monitoring", "Nomenclature"],
    deliverables: ["Pipelines automatisés", "Infrastructure versionnée", "Dashboards monitoring"],
    metrics: ["Taux déploiements réussis", "MTTR", "Temps de build"]
  },
  {
    id: 18,
    name: "UX/UI Design Guardian",
    category: "tech",
    baseline: "L'utile qui devient évident",
    description: "Conçoit des parcours fluides, accessibles et cohérents. L'expérience qui fait la différence.",
    strengths: ["Recherche utilisateur", "Design system", "Accessibilité", "Prototypage"],
    deliverables: ["Wireframes", "Maquettes", "Design system", "Tests utilisateurs"],
    metrics: ["Taux de succès parcours", "NPS", "Score accessibilité"]
  },
  {
    id: 19,
    name: "QA Testeur",
    category: "tech",
    baseline: "Confiance prouvée, qualité garantie",
    description: "Planifie et exécute les tests, sécurise les critères d'acceptation. Zéro compromis sur la qualité.",
    strengths: ["Plans de test", "Automatisation", "Tests performance", "Validation acceptation"],
    deliverables: ["Stratégies de test", "Suites automatisées", "Rapports de validation"],
    metrics: ["Couverture tests", "Défauts détectés", "Temps validation"]
  },
  {
    id: 20,
    name: "Security Compliance Architect",
    category: "tech",
    baseline: "Protection garantie, conformité assurée",
    description: "Protège vos données, audite la sécurité et maintient la conformité GDPR/SOC2. Sécurité sans compromis.",
    strengths: ["Architecture sécurité", "Compliance GDPR", "Threat modeling", "Audits sécurité"],
    deliverables: ["Politiques sécurité", "Rapports d'audit", "Plans de remédiation"],
    metrics: ["Incidents sécurité évités", "Conformité maintenue", "Score sécurité"]
  },
  {
    id: 21,
    name: "Spec Writer",
    category: "tech",
    baseline: "Du besoin à l'exécutable, sans ambiguïté",
    description: "Transforme les ADR en spécifications techniques actionnables. Features, Epics, US : tout est clair.",
    strengths: ["Spécifications techniques", "Décomposition", "Critères acceptation", "Analyse complexité"],
    deliverables: ["Features détaillées", "Epics structurés", "User Stories testables"],
    metrics: ["Rework évité", "Clarté specs", "Vélocité implémentation"]
  },
  {
    id: 22,
    name: "FSX — FullStack Extrême",
    category: "tech",
    baseline: "Intervention urgence, résolution rapide",
    description: "Débloque les incidents critiques en moins de 3h. Production down, CI/CD bloqué : il intervient.",
    strengths: ["Debug production", "Fixes d'urgence", "Rollback", "Root cause analysis"],
    deliverables: ["Correctifs urgents", "Procédures rollback", "RCA documentées"],
    metrics: ["MTTR incidents", "Taux succès rollback", "Récurrence évitée"]
  },
  {
    id: 23,
    name: "Agent Creator",
    category: "tech",
    baseline: "Conception et déploiement d'agents IA sur mesure",
    description: "Crée des agents ARKA adaptés à vos besoins spécifiques. L'expert qui étend l'équipe.",
    strengths: ["Conception agents", "Workflows métier", "Intégration ARKA", "Documentation"],
    deliverables: ["Agents personnalisés", "Workflows configurés", "Documentation technique"],
    metrics: ["Agents déployés", "Adoption métier", "Performance agents"]
  },

  // EXPERTS MÉTIER - MARKETING (5)
  {
    id: 24,
    name: "Brand Strategy Architect",
    category: "marketing",
    baseline: "Une marque singulière, vécue de bout en bout",
    description: "Définit le positionnement, l'architecture de marque et les guidelines. Votre identité unique.",
    strengths: ["Positionnement marque", "Storytelling", "Architecture marque", "Guidelines"],
    deliverables: ["Plateforme de marque", "Guidelines visuelles", "Chartes éditoriales"],
    metrics: ["Reconnaissance marque", "Cohérence", "Impact campagnes"]
  },
  {
    id: 25,
    name: "Content Strategy Manager",
    category: "marketing",
    baseline: "Contenu utile qui performe et engage",
    description: "Planifie la stratégie éditoriale, produit du contenu SEO et aligne avec les objectifs business.",
    strengths: ["Stratégie éditoriale", "SEO", "Calendrier contenu", "Narration impactante"],
    deliverables: ["Plans éditoriaux", "Calendriers contenu", "Briefs création"],
    metrics: ["Trafic qualifié", "Engagement", "Part de voix"]
  },
  {
    id: 26,
    name: "Growth Hacker Specialist",
    category: "marketing",
    baseline: "Tester, apprendre, scaler rapidement",
    description: "Monte des expériences d'acquisition, optimise les funnels et crée des boucles virales. La croissance rapide.",
    strengths: ["Expérimentation", "Boucles virales", "Optimisation funnel", "A/B testing"],
    deliverables: ["Roadmap expériences", "Résultats tests", "Stratégies growth"],
    metrics: ["CAC", "Taux conversion", "Vitesse d'itération"]
  },
  {
    id: 27,
    name: "Market Research Specialist",
    category: "marketing",
    baseline: "Voir clair, viser juste sur votre marché",
    description: "Analyse le marché, décrypte la concurrence et identifie les tendances. Les insights qui guident.",
    strengths: ["Analyse marché", "Veille concurrentielle", "Segmentation", "Tendances"],
    deliverables: ["Études marché", "Analyses concurrentielles", "Insights actionnables"],
    metrics: ["Pertinence insights", "Time-to-insight", "Précision prévisions"]
  },
  {
    id: 28,
    name: "Marketing Analytics Expert",
    category: "marketing",
    baseline: "Mesure la performance, génère les insights",
    description: "Mesure le ROI marketing, modélise l'attribution et produit des insights data-driven. Les chiffres qui guident.",
    strengths: ["Attribution marketing", "ROI", "Analytics", "Modélisation prédictive"],
    deliverables: ["Dashboards marketing", "Modèles attribution", "Rapports ROI"],
    metrics: ["ROI marketing", "Précision attribution", "Impact business"]
  },

  // EXPERTS MÉTIER - COMMERCE (6)
  {
    id: 29,
    name: "Mission Qualifier",
    category: "commerce",
    baseline: "Dire non vite, dire oui en confiance",
    description: "Qualifie les opportunités, score les missions et recommande go/no-go. Le filtre intelligent.",
    strengths: ["Scoring opportunités", "Évaluation risques", "Analyse fit", "Priorisation"],
    deliverables: ["Grilles qualification", "Rapports scoring", "Recommandations go/no-go"],
    metrics: ["Taux de win", "Cycle décision", "Précision qualification"]
  },
  {
    id: 30,
    name: "Outreach Strategist",
    category: "commerce",
    baseline: "Ouvrir la porte sans forcer, engager avec pertinence",
    description: "Conçoit les stratégies de prospection et optimise l'engagement multicanal. L'approche qui convertit.",
    strengths: ["Stratégie outbound", "Séquences engagement", "Social selling", "Nurturing"],
    deliverables: ["Playbooks outreach", "Séquences personnalisées", "Campagnes multicanal"],
    metrics: ["Taux de réponse", "RDV qualifiés", "Coût par lead"]
  },
  {
    id: 31,
    name: "Pipeline Tracker",
    category: "commerce",
    baseline: "Pipeline vivant, visibilité totale, alertes proactives",
    description: "Suit les opportunités, visualise le pipeline et alerte sur les blocages. La visibilité qui pilote.",
    strengths: ["Kanban pipeline", "Métriques conversion", "Reporting", "Alertes"],
    deliverables: ["Dashboards pipeline", "Rapports hebdo", "Alertes automatiques"],
    metrics: ["Conversion par étape", "Vélocité", "Précision forecast"]
  },
  {
    id: 32,
    name: "Positioning Expert",
    category: "commerce",
    baseline: "Le bon message pour la bonne cible",
    description: "Adapte CV, pitch decks et profils par secteur. Le positionnement qui résonne.",
    strengths: ["Message de valeur", "Personnalisation", "Adaptation sectorielle", "Cohérence"],
    deliverables: ["Variantes CV", "Pitch decks", "Profils optimisés", "Case studies"],
    metrics: ["Taux conversion", "Pertinence message", "Cohérence marque"]
  },
  {
    id: 33,
    name: "GEMINI Owner Sourcing",
    category: "commerce",
    baseline: "Les bons partenaires pour les bons usages",
    description: "Identifie, qualifie et orchestre les partenariats technologiques. Le sourcing stratégique.",
    strengths: ["Cartographie marché", "Qualification partenaires", "Due diligence", "Négociation"],
    deliverables: ["Shortlists partenaires", "Dossiers qualification", "Recommandations"],
    metrics: ["Fit technique", "Time-to-onboard", "Qualité partenariats"]
  },

  // EXPERTS MÉTIER - RH (4)
  {
    id: 34,
    name: "HR Transformation Specialist",
    category: "rh",
    baseline: "Processus RH au service de l'expérience",
    description: "Modernise les processus RH et pilote la transformation digitale. L'évolution qui engage.",
    strengths: ["Digitalisation RH", "Re-engineering", "Conduite du changement", "Analytics RH"],
    deliverables: ["Diagnostics RH", "Processus cibles", "Roadmaps transformation"],
    metrics: ["Adoption solutions", "Satisfaction RH", "Efficacité processus"]
  },
  {
    id: 35,
    name: "Employee Experience Designer",
    category: "rh",
    baseline: "Culture qui se vit au quotidien",
    description: "Conçoit des parcours collaborateurs engageants du pré-boarding à l'offboarding. L'expérience qui fidélise.",
    strengths: ["Journey mapping", "Engagement", "Bien-être", "Culture design"],
    deliverables: ["Parcours collaborateurs", "Baromètres engagement", "Rituels"],
    metrics: ["eNPS", "Rétention", "Participation rituels"]
  },
  {
    id: 36,
    name: "Compensation & Benefits Analyst",
    category: "rh",
    baseline: "Équité, attractivité, soutenabilité financière",
    description: "Conçoit des politiques de rémunération justes et compétitives. La rétribution équitable.",
    strengths: ["Benchmarking salarial", "Évaluation postes", "Équité", "Incentives"],
    deliverables: ["Grilles salariales", "Politiques avantages", "Analyses équité"],
    metrics: ["Attractivité", "Équité salariale", "Budget maîtrisé"]
  },
  {
    id: 37,
    name: "Learning & Development Strategist",
    category: "rh",
    baseline: "Monter en compétences vite et bien",
    description: "Structure la formation et développe les talents. Les programmes qui transforment.",
    strengths: ["Analyse besoins", "Curricula", "Digital learning", "Leadership programs"],
    deliverables: ["Cartes compétences", "Programmes formation", "Parcours leadership"],
    metrics: ["Temps à compétence", "Taux usage", "Impact business"]
  }
];

export const features = [
  {
    id: 1,
    icon: "Network",
    title: "Architecture P2P",
    description: "37 agents spécialisés qui communiquent directement entre eux. Coordination intelligente, zéro bottleneck."
  },
  {
    id: 2,
    icon: "Shield",
    title: "Supervision autonome",
    description: "Une équipe Guardian audite régulièrement : processus, mémoire, anomalies. Optimisation continue garantie."
  },
  {
    id: 3,
    icon: "FileText",
    title: "Gouvernance versionnée",
    description: "Des règles centralisées, versionnées et consultables. Une seule source de vérité pour tous les agents."
  },
  {
    id: 4,
    icon: "TrendingUp",
    title: "Traçabilité intégrale",
    description: "Chaque décision génère automatiquement son dossier de preuves. Audit instantané, conformité garantie."
  },
  {
    id: 5,
    icon: "Zap",
    title: "16 workflows métiers",
    description: "Parcours structurés pour audit, delivery, ops, doc, marketing et RH. Prêts à l'emploi."
  },
  {
    id: 6,
    icon: "Database",
    title: "Architecture locale",
    description: "Vos données restent chez vous. Fonctionnement hors ligne. Souveraineté garantie par conception."
  }
];

export const benefits = [
  {
    id: 1,
    stat: "98%",
    label: "Temps économisé",
    description: "De 160 h à 2 h pour un audit RGPD complet"
  },
  {
    id: 2,
    stat: "37",
    label: "Agents experts",
    description: "Organisés en équipe pour collaborer efficacement"
  },
  {
    id: 3,
    stat: "100%",
    label: "Traçabilité",
    description: "Chaque décision documentée automatiquement"
  },
  {
    id: 4,
    stat: "16",
    label: "Workflows métiers",
    description: "Structurés pour audit, delivery, ops et marketing"
  }
];

export const categories = [
  { id: "all", label: "Tous les experts", count: 37 },
  { id: "supervision", label: "Supervision & Gouvernance", count: 2 },
  { id: "orchestration", label: "Orchestration & Pilotage", count: 12 },
  { id: "tech", label: "Tech & Dev", count: 9 },
  { id: "marketing", label: "Marketing", count: 5 },
  { id: "commerce", label: "Commerce & Partenariats", count: 5 },
  { id: "rh", label: "Ressources Humaines", count: 4 }
];

export const testimonials = [
  {
    id: 1,
    quote: "ARKA a réduit notre temps d'audit RGPD de 3 semaines à 2 heures. La traçabilité complète nous donne une confiance totale.",
    author: "Marie Dubois",
    role: "DPO, Banque Digitale",
    company: "FinTech SA"
  },
  {
    id: 2,
    quote: "L'orchestration multi-agents change la donne. Nos équipes travaillent maintenant comme une machine bien huilée.",
    author: "Thomas Martin",
    role: "CTO",
    company: "TechCorp"
  },
  {
    id: 3,
    quote: "La supervision autonome maintient notre base de connaissances impeccable. Plus besoin de nettoyage manuel.",
    author: "Sophie Laurent",
    role: "Head of Operations",
    company: "Enterprise Solutions"
  }
];
