import React, { useState } from 'react';
import { Book, Search, ChevronRight, Code, Terminal, Zap, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DocumentationPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    {
      id: 'getting-started',
      title: 'Démarrage Rapide',
      icon: Zap,
      topics: [
        { id: 'installation', title: 'Installation', content: 'Guide d\'installation d\'ARKA sur votre environnement local.' },
        { id: 'first-mission', title: 'Première Mission', content: 'Créez votre première mission avec ARKA.' },
        { id: 'configuration', title: 'Configuration', content: 'Configurez ARKA selon vos besoins.' }
      ]
    },
    {
      id: 'core-concepts',
      title: 'Concepts Fondamentaux',
      icon: Book,
      topics: [
        { id: 'constitution', title: 'Constitution as Code', content: 'Comprendre la constitution et les règles gouvernant les agents.' },
        { id: 'agents', title: '38 Agents Experts', content: 'Découvrez les 38 agents spécialisés et leurs rôles.' },
        { id: 'workflows', title: '16 Workflows Métier', content: 'Les workflows prêts à l\'emploi pour chaque besoin.' },
        { id: 'p2p', title: 'Architecture P2P', content: 'Comment les agents communiquent entre eux.' }
      ]
    },
    {
      id: 'guides',
      title: 'Guides Pratiques',
      icon: Terminal,
      topics: [
        { id: 'audit-rgpd', title: 'Audit RGPD', content: 'Réalisez un audit RGPD complet en 2 heures.' },
        { id: 'delivery-us', title: 'Delivery US', content: 'Livrez une user story de A à Z avec validation.' },
        { id: 'marketing-campaign', title: 'Campagne Marketing', content: 'Créez et déployez une campagne marketing complète.' }
      ]
    },
    {
      id: 'api-reference',
      title: 'Référence API',
      icon: Code,
      topics: [
        { id: 'missions-api', title: 'Missions API', content: 'API pour créer et gérer les missions.' },
        { id: 'agents-api', title: 'Agents API', content: 'Interagir avec les agents programmatiquement.' },
        { id: 'evidence-api', title: 'Evidence API', content: 'Récupérer les evidence packs et traces.' }
      ]
    },
    {
      id: 'security',
      title: 'Sécurité & Conformité',
      icon: Shield,
      topics: [
        { id: 'local-first', title: 'Local-First', content: 'Comment ARKA garantit la souveraineté de vos données.' },
        { id: 'evidence-based', title: 'Evidence-Based', content: 'Traçabilité et audit complet de chaque action.' },
        { id: 'compliance', title: 'Conformité SOC2/ISO', content: 'Conformité automatique aux standards.' }
      ]
    }
  ];

  const activeContent = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fadeIn">
            Documentation ARKA
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Tout ce dont vous avez besoin pour maîtriser ARKA
          </p>

          {/* Search */}
          <div className="mt-8 max-w-2xl animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher dans la documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded backdrop-blur-sm focus:outline-none focus:border-[#cb0f44]/50 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <nav className="space-y-2 sticky top-24">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded transition-all flex items-center gap-3 ${
                        activeSection === section.id
                          ? 'bg-[#cb0f44] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{section.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="animate-fadeIn">
                <h2 className="text-4xl font-bold mb-8 text-gray-900">{activeContent?.title}</h2>
                <div className="space-y-8">
                  {activeContent?.topics.map((topic) => (
                    <div key={topic.id} className="p-8 bg-gray-50 rounded border-l-4 border-[#cb0f44] hover:shadow-lg transition-all">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                        {topic.title}
                        <ChevronRight size={20} className="text-[#cb0f44]" />
                      </h3>
                      <p className="text-gray-700 mb-4">{topic.content}</p>
                      <button className="text-[#cb0f44] font-medium hover:underline">
                        Lire la suite →
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coming Soon */}
              <div className="mt-12 p-8 bg-gradient-to-r from-[#cb0f44]/10 to-emerald-500/10 rounded border-l-4 border-[#cb0f44]">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Documentation Complète Bientôt Disponible</h3>
                <p className="text-gray-700 mb-4">
                  La documentation détaillée sera publiée avec le lancement de la version publique d'ARKA.
                </p>
                <p className="text-gray-700">
                  En attendant, les participants au programme bêta ont accès à une documentation dédiée et un support personnalisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocumentationPage;
