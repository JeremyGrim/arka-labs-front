// Mock data for ARKA landing page

export const experts = [
  {
    id: 1,
    name: "Lead Dev Bâtisseur",
    category: "tech",
    baseline: "Construire bien, vite, durablement",
    description: "Transforme des US en code fiable, testé et performant.",
    strengths: ["Full-stack", "TDD", "Revue de code", "Refactoring", "Performance"],
    deliverables: ["Features", "Tests unitaires", "Revues", "Optimisations"],
    metrics: ["TTR des tickets", "Couverture de tests", "Scores de revue"]
  },
  {
    id: 2,
    name: "Technical Architect",
    category: "tech",
    baseline: "Des fondations claires, des choix assumés",
    description: "Dessine l'architecture système et cadre les décisions techniques.",
    strengths: ["Patterns", "Scalabilité", "ADR", "Flux critiques"],
    deliverables: ["Diagrammes", "ADR", "Patrons d'implémentation"],
    metrics: ["Coût de changement", "Robustesse", "Dette évitée"]
  },
  {
    id: 3,
    name: "DevOps Guardian",
    category: "tech",
    baseline: "La livraison, sans surprise",
    description: "Cadre l'arborescence, automatise les pipelines et fiabilise les déploiements.",
    strengths: ["IaC", "Pipelines", "Conteneurs", "Monitoring"],
    deliverables: ["Pipelines CI/CD", "Templates", "Tableaux de bord"],
    metrics: ["MTTR", "Taux de déploiements réussis", "Temps de build"]
  },
  {
    id: 4,
    name: "UX/UI Design Guardian",
    category: "tech",
    baseline: "L'utile qui devient évident",
    description: "Conçoit des parcours fluides, accessibles, cohérents avec l'identité.",
    strengths: ["Recherche utilisateur", "Design system", "Accessibilité"],
    deliverables: ["Wireframes", "Maquettes", "Design system"],
    metrics: ["Taux de succès", "NPS", "Accessibilité"]
  },
  {
    id: 5,
    name: "Market Research Specialist",
    category: "marketing",
    baseline: "Voir clair, viser juste",
    description: "Décrypte marchés, concurrents et signaux faibles pour éclairer les choix.",
    strengths: ["Veille", "Segmentation", "Insights clients", "Tendances"],
    deliverables: ["Cartographies concurrentielles", "Briefs d'insights"],
    metrics: ["Pertinence des segments", "Time-to-insight"]
  },
  {
    id: 6,
    name: "Brand Strategy Architect",
    category: "marketing",
    baseline: "Une marque singulière, vécue de bout en bout",
    description: "Définit le positionnement, l'architecture et les guidelines.",
    strengths: ["Storytelling", "Identité", "Architecture de marque"],
    deliverables: ["Plateforme de marque", "Guidelines", "Chartes"],
    metrics: ["Reconnaissance", "Cohérence", "Efficacité campagnes"]
  },
  {
    id: 7,
    name: "Growth Hacker Specialist",
    category: "marketing",
    baseline: "Tester, apprendre, scaler",
    description: "Monte des expériences d'acquisition et optimise la conversion.",
    strengths: ["Expérimentation", "Boucles virales", "Funnel", "Data"],
    deliverables: ["Roadmap d'expériences", "Résultats A/B"],
    metrics: ["CAC", "Taux de conversion", "Vitesse d'itération"]
  },
  {
    id: 8,
    name: "Content Strategy Manager",
    category: "marketing",
    baseline: "Du contenu utile qui performe",
    description: "Planifie, produit et aligne le contenu avec la stratégie.",
    strengths: ["Calendrier éditorial", "SEO", "Narration"],
    deliverables: ["Lignes éditoriales", "Briefs", "Calendriers"],
    metrics: ["Trafic qualifié", "Part de voix"]
  },
  {
    id: 9,
    name: "Marketing Analytics Expert",
    category: "marketing",
    baseline: "Les chiffres qui guident l'action",
    description: "Mesure la performance marketing et produit des insights opérationnels.",
    strengths: ["Attribution", "Cohortes", "ROI", "Prédictif"],
    deliverables: ["Tableaux de bord", "Modèles d'attribution"],
    metrics: ["ROI", "Contribution pipeline", "Précision prévisions"]
  },
  {
    id: 10,
    name: "Mission Qualifier",
    category: "commerce",
    baseline: "Dire non vite, dire oui en confiance",
    description: "Qualifie, priorise et statue go/no-go sur les opportunités.",
    strengths: ["Scoring", "Risques", "Adéquation compétences"],
    deliverables: ["Grilles de qualification", "Rapports de risques"],
    metrics: ["Taux de win", "Cycle de décision", "Focus ratio"]
  },
  {
    id: 11,
    name: "Outreach Strategist",
    category: "commerce",
    baseline: "Ouvrir la porte, sans forcer",
    description: "Conçoit la stratégie outbound et optimise l'engagement multicanal.",
    strengths: ["Séquences", "Nurturing", "Social selling"],
    deliverables: ["Playbooks d'outreach", "Séquences email/LinkedIn"],
    metrics: ["Taux de réponse", "RDV qualifiés", "Coût par lead"]
  },
  {
    id: 12,
    name: "Pipeline Tracker",
    category: "commerce",
    baseline: "Un pipeline vivant et lisible",
    description: "Met à jour, visualise et alerte sur l'état des opportunités.",
    strengths: ["Kanban", "Métriques", "Reporting", "Automation"],
    deliverables: ["Dashboards", "Rapports hebdo", "Alertes"],
    metrics: ["Conversion par étape", "Vélocité", "Précision forecast"]
  },
  {
    id: 13,
    name: "Positioning Expert",
    category: "commerce",
    baseline: "Le bon message, pour la bonne cible",
    description: "Adapte CV, pitch decks, profils et études de cas par secteur.",
    strengths: ["Message de valeur", "Personnalisation", "Cohérence"],
    deliverables: ["Variantes de CV", "Pitch decks", "Case studies"],
    metrics: ["Taux de conversion", "Cohérence marque"]
  },
  {
    id: 14,
    name: "HR Transformation Specialist",
    category: "rh",
    baseline: "Des processus RH au service de l'expérience",
    description: "Modernise les processus RH et pilote la conduite du changement.",
    strengths: ["Digitalisation", "Re-engineering", "Analytics"],
    deliverables: ["Diagnostics", "Cibles de processus", "Roadmaps"],
    metrics: ["Adoption", "Délais de cycle", "Satisfaction"]
  },
  {
    id: 15,
    name: "Employee Experience Designer",
    category: "rh",
    baseline: "Une culture qui se vit au quotidien",
    description: "Conçoit des parcours engageants, du pré-boarding à l'offboarding.",
    strengths: ["Cartographie", "Engagement", "Bien-être", "Rituels"],
    deliverables: ["Parcours", "Baromètres", "Playbooks"],
    metrics: ["eNPS", "Rétention", "Participation rituels"]
  },
  {
    id: 16,
    name: "Compensation & Benefits Analyst",
    category: "rh",
    baseline: "Équité, attractivité, soutenabilité",
    description: "Conçoit des politiques de rémunération justes et compétitives.",
    strengths: ["Benchmarks", "Évaluations", "Incentives"],
    deliverables: ["Grilles", "Politiques", "Revues d'équité"],
    metrics: ["Attractivité", "Équité", "Budget maîtrisé"]
  },
  {
    id: 17,
    name: "Learning & Development Strategist",
    category: "rh",
    baseline: "Apprendre vite, apprendre bien",
    description: "Structure la montée en compétences et les parcours de leadership.",
    strengths: ["Analyse besoins", "Curricula", "Digital learning"],
    deliverables: ["Cartes de compétences", "Programmes", "Catalogues"],
    metrics: ["Temps à compétence", "Taux d'usage", "Satisfaction"]
  },
  {
    id: 18,
    name: "QA Testeur",
    category: "tech",
    baseline: "Confiance prouvée, livrables validés",
    description: "Planifie et exécute tests; sécurise critères d'acceptation.",
    strengths: ["Plans de test", "Automatisation", "Performance"],
    deliverables: ["Stratégies de test", "Rapports", "Suites automatiques"],
    metrics: ["Couverture", "Défauts évités", "Temps validation"]
  },
  {
    id: 19,
    name: "Security Compliance Architect",
    category: "tech",
    baseline: "La valeur oui, l'exposition non",
    description: "Protège les données; met à niveau conformité et pratiques.",
    strengths: ["Threat modeling", "Privacy", "Audits", "Zero-trust"],
    deliverables: ["Politiques sécurité", "Rapports d'audit"],
    metrics: ["Incidents évités", "Conformité", "MTTR sécurité"]
  },
  {
    id: 20,
    name: "AGP",
    category: "gouvernance",
    baseline: "Les règles qui protègent la valeur",
    description: "Cadre les décisions, ouvre et ferme les jalons, publie les ADR.",
    strengths: ["Gouvernance", "Évaluation risques", "Validation"],
    deliverables: ["ADR", "Décisions publiées", "Comptes rendus de jalon"],
    metrics: ["Décisions traçables", "Écarts évités"]
  },
  {
    id: 21,
    name: "PMO",
    category: "gouvernance",
    baseline: "Le flux, du cadrage à la livraison",
    description: "Orchestration des workflows, coordination et reporting.",
    strengths: ["Backlog", "Planification", "Coordination", "Visibilité"],
    deliverables: ["Plans de travail", "Délégations", "Rapports"],
    metrics: ["Prévisibilité", "Lead time", "Satisfaction"]
  },
  {
    id: 22,
    name: "Spec Writer",
    category: "tech",
    baseline: "Du besoin à l'exécutable",
    description: "Transforme décisions et intentions en spécifications actionnables.",
    strengths: ["Rédaction technique", "Décomposition", "Clarté"],
    deliverables: ["Specs techniques", "Critères d'acceptation"],
    metrics: ["Rework évité", "Temps de mise en œuvre"]
  },
  {
    id: 23,
    name: "GEMINI Owner Sourcing",
    category: "commerce",
    baseline: "Les bons partenaires, pour les bons usages",
    description: "Identifie, qualifie et orchestre les partenariats technologiques.",
    strengths: ["Cartographie marché", "Due diligence", "Négociation"],
    deliverables: ["Shortlists", "Critères", "Dossiers de décision"],
    metrics: ["Fit technique", "Risques maîtrisés", "Time-to-onboard"]
  },
  {
    id: 24,
    name: "FSX",
    category: "tech",
    baseline: "Relever un service, vite et bien",
    description: "Débloque les incidents critiques, stabilise et documente.",
    strengths: ["Debug prod", "Fixes ciblés", "Rollback", "RCA"],
    deliverables: ["Correctifs", "Procédures rollback", "Evidence pack"],
    metrics: ["MTTR", "Taux de succès rollback", "Récurrence"]
  }
];

export const features = [
  {
    id: 1,
    icon: "Network",
    title: "Orchestration multi-agents",
    description: "24 agents spécialisés coopèrent selon vos priorités. Le PMO pilote jusqu'à huit agents par équipe."
  },
  {
    id: 2,
    icon: "Shield",
    title: "Core Guardian",
    description: "Un gardien autonome qui optimise la messagerie interne, archive l'obsolète et maintient l'architecture sous contrôle."
  },
  {
    id: 3,
    icon: "FileText",
    title: "Constitution as Code",
    description: "Des règles explicites, versionnées et auditées. Une seule source de vérité pour toute l'équipe."
  },
  {
    id: 4,
    icon: "TrendingUp",
    title: "Traçabilité intégrale",
    description: "Chaque action produit un dossier de preuves : messages, décisions, jetons, latences et artefacts."
  },
  {
    id: 5,
    icon: "Zap",
    title: "Parcours métiers",
    description: "16 chaînes prêtes à l'emploi : audit RGPD, delivery, correction d'incidents, campagnes marketing et plus."
  },
  {
    id: 6,
    icon: "Database",
    title: "Architecture locale",
    description: "Vos données restent chez vous, même hors ligne. La souveraineté est garantie par conception."
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
    stat: "24",
    label: "Agents experts",
    description: "Spécialisés et prêts à collaborer sur vos projets"
  },
  {
    id: 3,
    stat: "100%",
    label: "Traçabilité",
    description: "Chaque décision documentée et auditable"
  },
  {
    id: 4,
    stat: "16",
    label: "Parcours métiers",
    description: "Plans prêts à l'emploi pour audit, delivery, ops et marketing"
  }
];

export const categories = [
  { id: "all", label: "Tous les experts", count: 24 },
  { id: "tech", label: "Tech & Dev", count: 8 },
  { id: "marketing", label: "Marketing", count: 5 },
  { id: "commerce", label: "Commerce", count: 5 },
  { id: "rh", label: "Ressources Humaines", count: 4 },
  { id: "gouvernance", label: "Gouvernance", count: 2 }
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
    quote: "Le Core Guardian maintient notre base de connaissances impeccable. Plus besoin de nettoyage manuel.",
    author: "Sophie Laurent",
    role: "Head of Operations",
    company: "Enterprise Solutions"
  }
];
