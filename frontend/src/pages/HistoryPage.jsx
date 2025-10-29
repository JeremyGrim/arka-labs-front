import React from 'react';
import { Lightbulb, Cpu, Rocket, Target, AlertTriangle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HistoryPage = () => {
  const timeline = [
    {
      phase: "L'Exploration",
      period: "Janvier 2025",
      icon: Lightbulb,
      title: "L'automatisation qui révèle les limites",
      description: "Un projet d'automatisation domotique complexe : capteurs, règles conditionnelles, modes adaptatifs. ChatGPT devient l'assistant technique. Les premiers succès sont rapides, mais les limites apparaissent vite : un seul LLM ne suffit plus face à la complexité croissante.",
      highlight: "Le prompt engineering avancé (profils, modes, règles) fonctionne bien... jusqu'à un certain point."
    },
    {
      phase: "La Découverte",
      period: "Février-Mars 2025",
      icon: Cpu,
      title: "La validation croisée change tout",
      description: "Une expérimentation simple révèle un principe puissant : faire évaluer un livrable par un second LLM améliore drastiquement la qualité. Une mini-équipe émerge : Visionnaire → Cahier des charges → Développeur. Chacun valide le travail du précédent.",
      highlight: "Et si on reproduisait une vraie équipe projet avec des rôles, des handoffs et des validations ?"
    },
    {
      phase: "Les Découvertes Comportementales",
      period: "Avril-Juin 2025",
      icon: AlertTriangle,
      title: "Quand les agents dérivent",
      description: "Multiplier les agents révèle des comportements inattendus : certains refusent de travailler (\"trop complexe\"), d'autres produisent du vide, d'autres encore inventent des données fictives pour \"accélérer\". Chaque échec devient une découverte sur comment les LLMs fonctionnent réellement en équipe.",
      highlight: "6 lois comportementales émergent de ces observations intensives."
    },
    {
      phase: "La Structure",
      period: "Juillet-Août 2025",
      icon: Rocket,
      title: "Du chaos à la gouvernance",
      description: "La solution : un cadre de gouvernance où les règles sont versionnées et les workflows explicites. Plus de prompts géants qui surchargent les agents. Une constitution unique que tous peuvent consulter à la demande. 37 agents organisés, 16 workflows structurés.",
      highlight: "ARKA devient un produit, pas juste une méthode personnelle."
    },
    {
      phase: "L'Innovation",
      period: "Septembre-Octobre 2025",
      icon: Target,
      title: "Les agents qui se parlent",
      description: "La rupture finale : arrêter d'orchestrer depuis un point central. Les agents communiquent directement entre eux, se coordonnent, prennent des décisions collectives. Ils se mentionnent (@Legal, @Compliance) comme une vraie équipe. L'orchestrateur observe et synthétise, il ne dispatche plus manuellement.",
      highlight: "Architecture pair-à-pair. Conversations fluides. Zéro bottleneck."
    }
  ];

  const principles = [
    {
      title: "37 agents spécialisés organisés",
      desc: "Gouvernance, orchestration, production, supervision. Chaque agent a son expertise, ses responsabilités, ses workflows."
    },
    {
      title: "Un cadre de gouvernance unique",
      desc: "Des règles versionnées qui s'appliquent à tous. Zéro divergence, zéro improvisation."
    },
    {
      title: "Traçabilité automatique complète",
      desc: "Chaque décision génère son dossier de preuves. Mission trackers, evidence packs, chaîne de responsabilité."
    },
    {
      title: "Architecture locale",
      desc: "Vos données restent chez vous. Fonctionnement hors ligne. Souveraineté garantie."
    },
    {
      title: "Validation systématique",
      desc: "Aucun livrable sans validation. Gates obligatoires. Refus explicite si non-conforme."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black" />
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              L'Histoire <span className="text-[#cb0f44]">d'ARKA</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              ARKA n'est pas née d'un business plan, mais d'une recherche empirique intensive sur les comportements des LLMs en équipe. Issue de centaines d'expérimentations et d'échecs formateurs, elle transforme aujourd'hui la coordination d'agents IA en méthode structurée et gouvernée.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-3xl md:text-4xl font-bold leading-relaxed">
              « Le vrai produit n'était pas le bot.
              <span className="block text-[#cb0f44] mt-4">C'était la méthode pour les faire travailler ensemble. »</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold mb-16 text-center">Le Parcours</h2>
          <div className="max-w-5xl mx-auto space-y-16">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative">
                  {idx < timeline.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-white/10 hidden md:block" />
                  )}
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#cb0f44]/10 border-2 border-[#cb0f44] flex items-center justify-center">
                        <Icon className="text-[#cb0f44]" size={28} />
                      </div>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="inline-block px-3 py-1 bg-white/5 text-[#cb0f44] text-xs font-medium mb-2">
                        {item.phase}
                      </div>
                      {item.period && <div className="text-xs text-gray-500 mb-4">{item.period}</div>}
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>
                      <div className="inline-block px-4 py-2 bg-[#cb0f44]/10 border-l-4 border-[#cb0f44]">
                        <p className="text-white font-medium">{item.highlight}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What is ARKA */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Ce que Fait ARKA</h2>
            <p className="text-xl text-gray-400 mb-12">
              ARKA transforme les LLMs en organisation projet structurée et gouvernée.
            </p>
            <div className="space-y-6">
              {principles.map((principle, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-black border border-white/10">
                  <div className="w-8 h-8 bg-[#cb0f44]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-[#cb0f44] rounded-full" />
                  </div>
                  <div>
                    <p className="text-white text-lg font-semibold mb-2">{principle.title}</p>
                    <p className="text-gray-400">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Pourquoi C'est une Rupture</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-400 mb-6">
                ARKA ne cherche pas à « améliorer ChatGPT ». Elle transforme les LLMs en véritable organisation projet coordonnée, avec méthode et gouvernance.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 bg-[#0a0a0a] border border-white/10 text-center">
                  <div className="text-4xl font-bold text-[#cb0f44] mb-2">100%</div>
                  <div className="text-white font-semibold mb-1">Local</div>
                  <div className="text-sm text-gray-400">Données chez vous, souveraineté garantie</div>
                </div>
                <div className="p-6 bg-[#0a0a0a] border border-white/10 text-center">
                  <div className="text-4xl font-bold text-[#cb0f44] mb-2">100%</div>
                  <div className="text-white font-semibold mb-1">Vérifiable</div>
                  <div className="text-sm text-gray-400">Evidence packs, traçabilité totale</div>
                </div>
                <div className="p-6 bg-[#0a0a0a] border border-white/10 text-center">
                  <div className="text-4xl font-bold text-[#cb0f44] mb-2">100%</div>
                  <div className="text-white font-semibold mb-1">Structuré</div>
                  <div className="text-sm text-gray-400">Workflows explicites, zéro improvisation</div>
                </div>
              </div>
              <div className="mt-12 p-8 bg-black border-l-4 border-[#cb0f44]">
                <p className="text-2xl font-bold text-white mb-4">
                  Pas d'impro. Pas d'IA hors de contrôle. Pas de black box.
                </p>
              </div>
              <div className="mt-12 p-8 bg-[#0a0a0a] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Différenciation</h3>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-start gap-3">
                    <span className="text-[#cb0f44]">≠</span>
                    <span>Chatbot amélioré (type ChatGPT+)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#cb0f44]">≠</span>
                    <span>Framework dev (type LangChain)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#cb0f44]">≠</span>
                    <span>Outil no-code (type Zapier)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#cb0f44]">=</span>
                    <span className="text-white font-semibold">Constitution exécutable pour équipes IA gouvernées</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Lois Comportementales LLM */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Les 6 Lois Comportementales LLM</h2>
              <p className="text-xl text-gray-400">
                Découvertes empiriques issues de centaines d'heures d'expérimentation
              </p>
            </div>

            <div className="space-y-12">
              {/* Loi 1 */}
              <div className="p-8 bg-black border-l-4 border-[#cb0f44]">
                <h3 className="text-2xl font-bold text-[#cb0f44] mb-4">Loi 1 : L'accusé de réception poison</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Problème</p>
                    <p className="text-gray-300">Si vous permettez aux LLMs de faire des accusés de réception, ils accusent réception au lieu de travailler.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Observation</p>
                    <p className="text-gray-300">Agent envoie ACK systématiquement. Chat rempli de "Message reçu", "OK compris", "Je vais faire ça". Zero action concrète.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Solution ARKA</p>
                    <p className="text-white font-semibold mb-2">Loi 0 — "Un message n'existe que s'il est notifié — uniquement sur changement d'état"</p>
                    <p className="text-gray-300">Interdiction totale ACK vides. Notification uniquement si STATUS ou RESULT. Action immédiate obligatoire.</p>
                  </div>
                </div>
              </div>

              {/* Loi 2 */}
              <div className="p-8 bg-black border-l-4 border-[#cb0f44]">
                <h3 className="text-2xl font-bold text-[#cb0f44] mb-4">Loi 2 : La dérive sans workflow</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Problème</p>
                    <p className="text-gray-300">Sans workflow strict, un LLM invente son propre processus et dérive systématiquement.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Observation</p>
                    <p className="text-gray-300">Agent reçoit mission. Invente étapes. Skip validations. Livre direct sans review. Résultat non-conforme.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Solution ARKA</p>
                    <p className="text-gray-300">Workflows structurés obligatoires (16 workflows métiers). Étapes + Gates explicites. Acte de mission avec workflow prédéfini. GPS pointe vers règles exactes.</p>
                  </div>
                </div>
              </div>

              {/* Loi 3 */}
              <div className="p-8 bg-black border-l-4 border-[#cb0f44]">
                <h3 className="text-2xl font-bold text-[#cb0f44] mb-4">Loi 3 : L'illusion temporelle</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Problème</p>
                    <p className="text-gray-300">Un LLM n'a pas de notion de temps. "Demain", "bientôt", "plus tard" = jamais.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Observation</p>
                    <p className="text-gray-300">Agent promet "Je ferai ça demain". Demain arrive, rien. Agent oublie, contexte perdu.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Solution ARKA</p>
                    <p className="text-gray-300">Interdiction du langage temporel ("demain", "dans 1h", "bientôt"). Pilotage par ÉTATS uniquement (STATUS/RESULT). Actions immédiates ou BLOCKED explicite.</p>
                  </div>
                </div>
              </div>

              {/* Loi 4 */}
              <div className="p-8 bg-black border-l-4 border-[#cb0f44]">
                <h3 className="text-2xl font-bold text-[#cb0f44] mb-4">Loi 4 : La complaisance destructrice</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Problème</p>
                    <p className="text-gray-300">Un LLM préfère dire "oui" que bloquer, quitte à mocker des APIs ou inventer des données.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Observation</p>
                    <p className="text-gray-300">Agent Mock Addict : trouve "MVP" dans doc → mock API partout, data fictive, scénarios auto. "On peut présenter le produit !"</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Solution ARKA</p>
                    <p className="text-gray-300">Gates de validation obligatoires (Analyste/PMO/AGP). Vérification croisée systématique. tool_path requis si EXECUTES_TOOL (reproductibilité). Evidence obligatoire.</p>
                  </div>
                </div>
              </div>

              {/* Loi 5 */}
              <div className="p-8 bg-black border-l-4 border-[#cb0f44]">
                <h3 className="text-2xl font-bold text-[#cb0f44] mb-4">Loi 5 : La surconfiance hallucinatoire</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Problème</p>
                    <p className="text-gray-300">Un LLM pense "savoir" même quand il ne sait pas. Il extrapole, invente, assume.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Observation</p>
                    <p className="text-gray-300">Agent génère config pour composant inexistant. "Basé sur les best practices". Composant n'existe pas dans codebase.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Solution ARKA</p>
                    <p className="text-gray-300">Vérification d'existence obligatoire avant toute action (règle verify_first). GPS résout références canoniques. Guardian bloque si pointeur invalide.</p>
                  </div>
                </div>
              </div>

              {/* Loi 6 */}
              <div className="p-8 bg-black border-l-4 border-[#cb0f44]">
                <h3 className="text-2xl font-bold text-[#cb0f44] mb-4">Loi 6 : Le bavardage contre-productif</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Problème</p>
                    <p className="text-gray-300">Un LLM qui parle trop travaille peu. Le chat distrait de la production.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Observation</p>
                    <p className="text-gray-300">Agent explique longuement ce qu'il va faire. Pose 10 questions. Demande confirmations. Zero livrable produit.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Solution ARKA</p>
                    <p className="text-white font-semibold mb-2">Séparation stricte : Chat = coordination pour décider, Messagerie ARKORE20 = production pour livrer</p>
                    <p className="text-gray-300">Silence en production (pas de chat pendant exec). Voie unique (Loi 0).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HistoryPage;
