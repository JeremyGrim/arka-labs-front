import React from 'react';
import { Network, Shield, FileText, TrendingUp, Zap, Database, CheckCircle, Clock, Users, Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FeaturesPage = () => {
  const workflows = [
    {
      category: "AUDIT • 6 workflows",
      items: [
        { name: "AUDIT:FILES", desc: "Analyse des fichiers → synthèse des constats → validation" },
        { name: "AUDIT:RGPD", desc: "Évaluation RGPD / DPA complète et plan d'action" },
        { name: "AUDIT:COMPLIANCE", desc: "Revue de conformité (SOC2, ISO, interne)" },
        { name: "AUDIT:SECURITY", desc: "Audit de sécurité applicative et remédiations" },
        { name: "AUDIT:FEATURE", desc: "Analyse d'impact fonctionnelle et technique" },
        { name: "AUDIT:ACCOUNTING", desc: "Contrôles comptables et justification des écarts" },
      ],
    },
    {
      category: "DELIVERY • 3 workflows",
      items: [
        { name: "DELIVERY:FEATURE", desc: "Du besoin à la fonctionnalité : cadrage → épics → US → validation" },
        { name: "DELIVERY:EPIC", desc: "Cadrage d'epic → découpage → préparation backlog" },
        { name: "DELIVERY:US", desc: "Spécification → réalisation → revue → validation → publication" },
      ],
    },
    {
      category: "OPS • 3 workflows",
      items: [
        { name: "OPS:BUGFIX", desc: "Qualification → correction → tests → validation → notes de version" },
        { name: "OPS:SECURITY", desc: "Gestion d'incident sécurité → remédiation → vérification" },
        { name: "OPS:DATA_REPORT", desc: "Extraction des données → analyse → restitution" },
      ],
    },
    {
      category: "DOC / MARKETING / RH • 4 workflows",
      items: [
        { name: "DOC:ADR", desc: "Rédaction d'Architecture Decision Record → revue → publication" },
        { name: "DOC:CONTENT", desc: "Brief → production éditoriale → relecture → diffusion" },
        { name: "MKT:CAMPAIGN", desc: "Recherche → plan de campagne → création → analyse des performances" },
        { name: "PEOPLE:HR_CHANGE", desc: "Diagnostic → trajectoire de transformation → déploiement" },
      ],
    },
  ];

  const coreFeatures = [
    {
      icon: Network,
      title: "Architecture P2P : Les agents communiquent entre eux",
      description: "Les agents ne passent pas par un orchestrateur central. Ils communiquent directement, se coordonnent et prennent des décisions collectives selon des workflows structurés.",
      benefits: [
        "Communication directe (pas de bottleneck)",
        "Coordination intelligente",
        "Décisions collectives documentées",
        "Handoffs fluides",
      ],
    },
    {
      icon: Shield,
      title: "Supervision autonome",
      description: "Une équipe Guardian audite régulièrement : respect des processus, qualité des livrables, détection d'anomalies. Optimisation automatique de la mémoire, archivage intelligent.",
      benefits: [
        "Audit automatique des processus",
        "Optimisation continue de la mémoire",
        "Détection proactive des dérives",
        "Rapports quotidiens",
      ],
    },
    {
      icon: FileText,
      title: "Cadre de gouvernance versionnée",
      description: "Les règles ne sont plus dispersées dans des prompts. Elles sont centralisées, versionnées, et consultables à la demande par tous les agents. Un changement s'applique instantanément partout.",
      benefits: [
        "Source de vérité unique",
        "Aucune dérive de consigne",
        "Évolution sans casser l'existant",
        "Règles toujours à jour",
      ],
    },
    {
      icon: TrendingUp,
      title: "Traçabilité probante",
      description: "Chaque action génère automatiquement son dossier de preuves : décisions, justifications, artefacts, validations. Idéal pour audits SOC2, ISO27001, RGPD.",
      benefits: [
        "Dossiers de preuves automatiques",
        "Export JSON, CSV ou PDF",
        "Chaîne de responsabilité documentée",
        "Rejeu de scénarios possible",
      ],
    },
    {
      icon: Zap,
      title: "Indépendance fournisseurs",
      description: "Basculez entre OpenAI, Anthropic, Google ou Mistral en une configuration. Relais automatique en cas d'échec.",
      benefits: [
        "Multi-providers natif",
        "Relais automatique",
        "Optimisation des coûts",
        "Pas de vendor lock-in",
      ],
    },
    {
      icon: Database,
      title: "Architecture locale",
      description: "Vos données restent chez vous. Fonctionne hors ligne. Aucune exfiltration par défaut.",
      benefits: [
        "Données en local",
        "Mode hors ligne",
        "Souveraineté garantie",
        "Sauvegardes simples",
      ],
    },
  ];

  const useCases = [
    {
      icon: CheckCircle,
      title: "Audit RGPD en 2 h",
      before: "Avant : 160 h de travail manuel, 5 % d'erreurs",
      after: "Après ARKA : 2 h de pilotage, 0,5 % d'écarts",
      roi: "98 % de temps économisé — 40 $ vs 8 000 $ de coûts",
    },
    {
      icon: Clock,
      title: "Livraison de fonctionnalités",
      before: "Avant : 3 semaines entre les specs et la mise en prod",
      after: "Après ARKA : 1 semaine de bout en bout",
      roi: "Cycle 66 % plus rapide, qualité maintenue",
    },
    {
      icon: Users,
      title: "Campagne marketing",
      before: "Avant : 10 jours du brief à la publication",
      after: "Après ARKA : 3 jours avec le workflow marketing",
      roi: "70 % de gain de temps, cohérence garantie",
    },
    {
      icon: Lock,
      title: "Sécurité & conformité",
      before: "Avant : audits manuels et traces partielles",
      after: "Après ARKA : traçabilité totale et dossiers de preuves",
      roi: "Conformité SOC2 / ISO automatisée",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fonctionnalités <span className="text-[#cb0f44]">ARKA</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Découvrez toute la puissance d'ARKA : orchestration intelligente, traçabilité complète, et workflows métier structurés.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold mb-12">Innovations Majeures</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="p-8 bg-[#0a0a0a] border border-white/10">
                  <div className="w-12 h-12 bg-[#cb0f44]/10 flex items-center justify-center mb-6">
                    <Icon className="text-[#cb0f44]" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-[#cb0f44] rounded-full flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">16 workflows métiers structurés</h2>
            <p className="text-gray-400">
              Des parcours complets pour l'audit, la delivery, les opérations, la documentation, le marketing et les équipes RH.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workflows.map((workflow, idx) => (
              <div key={idx} className="p-8 bg-black border border-white/10">
                <h3 className="text-xl font-bold mb-6 text-[#cb0f44]">{workflow.category}</h3>
                <ul className="space-y-4">
                  {workflow.items.map((item, i) => (
                    <li key={i} className="border-l-2 border-white/10 pl-4">
                      <div className="font-mono text-sm text-white mb-1">{item.name}</div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold mb-12">Cas d'Usage & ROI</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div key={idx} className="p-6 bg-[#0a0a0a] border border-white/10">
                  <Icon className="text-[#cb0f44] mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-4">{useCase.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-gray-500 mb-1">Avant</div>
                      <div className="text-gray-300">{useCase.before}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Avec ARKA</div>
                      <div className="text-[#cb0f44]">{useCase.after}</div>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                      <div className="text-white font-medium">{useCase.roi}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
