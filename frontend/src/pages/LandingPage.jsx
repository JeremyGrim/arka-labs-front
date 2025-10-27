import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Network, Shield, FileText, TrendingUp, Zap, Database, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { features, benefits, experts, categories } from '../data/mock';

const LandingPage = () => {
  const heroImage = `${process.env.PUBLIC_URL}/asset/futuristic-3d-5120x3413-13107.jpg`;
  const featuredExperts = experts.filter(e => ['tech', 'marketing', 'commerce', 'rh'].includes(e.category)).slice(0, 8);

  const iconMap = {
    Network,
    Shield,
    FileText,
    TrendingUp,
    Zap,
    Database
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - DARK */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-black">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Tech background abstract"
            className="w-full h-full object-cover "
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#cb0f44]/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/80" />
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="max-w-4xl animate-fadeIn">
            <div className="inline-block mb-6 px-4 py-2 bg-[#cb0f44]/20 border border-[#cb0f44]/40 rounded backdrop-blur-sm">
              <span className="text-[#cb0f44] text-sm font-medium">Orchestrateur d'Équipes IA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Transformer des LLMs en
              <span className="block text-[#cb0f44]"> équipes coordonnées</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed">
              ARKA coordonne 24 agents spécialisés pour transformer vos projets en résultats mesurables. Une architecture locale par défaut, une gouvernance explicite et une traçabilité complète.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/beta"
                className="group px-8 py-4 bg-[#cb0f44] text-white font-medium flex items-center justify-center gap-2 rounded transition-all hover:bg-[#a00c37] hover:scale-105 hover:shadow-xl hover:shadow-[#cb0f44]/30"
              >
                Rejoindre la bêta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/experts"
                className="px-8 py-4 bg-white/10 text-white font-medium border border-white/30 rounded backdrop-blur-sm flex items-center justify-center gap-2 transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105"
              >
                Découvrir les experts
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="animate-slideIn" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl font-bold text-[#cb0f44] mb-2">24</div>
                <div className="text-gray-300 text-sm">Agents experts</div>
              </div>
              <div className="animate-slideIn" style={{animationDelay: '0.4s'}}>
                <div className="text-4xl font-bold text-[#cb0f44] mb-2">16</div>
                <div className="text-gray-300 text-sm">Parcours métiers prêts à l'emploi</div>
              </div>
              <div className="animate-slideIn" style={{animationDelay: '0.6s'}}>
                <div className="text-4xl font-bold text-[#cb0f44] mb-2">98%</div>
                <div className="text-gray-300 text-sm">Gain de temps</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Invitation */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-float">
          <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <span className="text-gray-400 text-sm tracking-wider">Découvrir</span>
            <svg className="w-6 h-6 text-[#cb0f44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Problem/Solution - WHITE BG + GRAY CONTAINERS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fadeIn p-10 bg-gray-100 rounded-sm">
              <div className="inline-block mb-6 px-3 py-1 bg-red-50 border border-red-200 text-red-600 text-xs font-medium rounded">
                LE PROBLÈME
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Les LLMs seuls ne suffisent pas</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Un seul LLM + 1000 lignes de prompt = dérive créative et hallucinations</p>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Aucun audit possible, aucune coordination d'équipe</p>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Confiance impossible : sans règles ni traces, rien ne se capitalise</p>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Outils éparpillés : documents et consignes restent isolés</p>
                </li>
              </ul>
            </div>

            <div className="animate-fadeIn p-10 bg-gray-100 rounded-sm" style={{animationDelay: '0.2s'}}>
              <div className="inline-block mb-6 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-medium rounded">
                LA SOLUTION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">ARKA : Constitution + Équipe d'agents</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Une équipe d'agents orchestrée avec des règles claires et des jalons de validation</p>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Traçabilité complète : journal unifié, dossiers de preuves, décisions documentées</p>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Architecture locale en premier : vos données restent chez vous, souveraineté garantie</p>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Core Guardian : optimisation nocturne de l'architecture et alertes proactives</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - ASH GREY BG + WHITE CONTAINERS */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Fonctionnalités clés</h2>
            <p className="text-xl text-gray-300">
              ARKA réinvente l'orchestration d'équipes IA avec des briques prêtes pour le terrain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={feature.id} className="group p-8 bg-white border-2 border-gray-200 rounded hover:border-[#cb0f44]/70 transition-all hover:scale-105 hover:shadow-xl animate-fadeIn" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="w-12 h-12 bg-[#cb0f44]/10 flex items-center justify-center mb-6 rounded group-hover:bg-[#cb0f44]/20 group-hover:scale-110 transition-all">
                    <Icon className="text-[#cb0f44]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#cb0f44] transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 border-2 border-white font-medium rounded hover:bg-gray-100 hover:scale-105 transition-all"
            >
              Voir toutes les fonctionnalités
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Concept Presentation - WHITE BG */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Comment fonctionne ARKA ?
              </h2>
              <p className="text-xl text-gray-700">
                Une méthode éprouvée qui transforme des IA dispersées en une véritable équipe structurée
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center animate-fadeIn" style={{animationDelay: '0.1s'}}>
                <div className="w-20 h-20 bg-[#cb0f44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-[#cb0f44]">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Constitution as Code</h3>
                <p className="text-gray-600">
                  Des règles versionnées qui gouvernent chaque agent. Une seule source de vérité, zéro dérive.
                </p>
              </div>

              <div className="text-center animate-fadeIn" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-[#cb0f44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-[#cb0f44]">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Orchestration PMO</h3>
                <p className="text-gray-600">
                  Le PMO coordonne jusqu'à 8 agents simultanément selon vos besoins métier.
                </p>
              </div>

              <div className="text-center animate-fadeIn" style={{animationDelay: '0.3s'}}>
                <div className="w-20 h-20 bg-[#cb0f44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-[#cb0f44]">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Traçabilité intégrale</h3>
                <p className="text-gray-600">
                  Chaque décision produit un dossier de preuves : traçabilité totale et audits simplifiés.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#cb0f44]/5 to-emerald-500/5 p-10 rounded-sm border-l-4 border-[#cb0f44] animate-fadeIn" style={{animationDelay: '0.4s'}}>
              <p className="text-2xl font-semibold text-gray-900 mb-4">
                « Pas d'improvisation. Pas d'IA hors de contrôle. »
              </p>
              <p className="text-gray-700 text-lg">
                ARKA impose une discipline collective aux LLMs grâce à des jalons de validation, des rôles explicites et une architecture qui maintient l'ordre — même quand vous dormez, grâce au Core Guardian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Preview - ASH GREY BG + WHITE CONTAINERS */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">24 Experts à votre service</h2>
            <p className="text-xl text-gray-300">
              Des spécialistes prêts à collaborer sur tous vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredExperts.map((expert, idx) => (
              <div key={expert.id} className="p-6 bg-white border-2 border-gray-200 rounded hover:border-[#cb0f44]/70 transition-all group hover:scale-105 hover:shadow-xl animate-fadeIn" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="mb-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {categories.find(c => c.id === expert.category)?.label}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#cb0f44] transition-colors">{expert.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{expert.baseline}</p>
                <div className="flex flex-wrap gap-2">
                  {expert.strengths.slice(0, 2).map((strength, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/experts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#cb0f44] text-white font-medium rounded hover:bg-[#a00c37] hover:scale-105 transition-all hover:shadow-xl hover:shadow-[#cb0f44]/30"
            >
              Découvrir tous les experts
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits - WHITE BG + GRAY CONTAINERS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Des résultats mesurables</h2>
            <p className="text-xl text-gray-700">
              ARKA transforme radicalement votre productivité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={benefit.id} className="text-center p-8 bg-gray-50 rounded border-2 border-gray-200 hover:border-[#cb0f44]/70 transition-all hover:scale-105 animate-fadeIn" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="text-6xl font-bold text-[#cb0f44] mb-4">{benefit.stat}</div>
                <div className="text-xl font-semibold mb-2 text-gray-900">{benefit.label}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - HERO STYLE */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Tech background abstract"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#cb0f44]/25 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeIn">
            <div className="inline-block mb-6 px-4 py-2 bg-[#cb0f44]/20 border border-[#cb0f44]/40 rounded backdrop-blur-sm">
              <span className="text-[#cb0f44] text-sm font-medium">Programme Bêta Ouvert</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Prêt à transformer votre<br />façon de travailler ?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Rejoignez le programme bêta et découvrez ARKA en avant-première.<br />
              Accès anticipé, support dédié et tarifs préférentiels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/beta"
                className="group px-10 py-5 bg-[#cb0f44] text-white text-lg font-medium rounded flex items-center justify-center gap-2 hover:bg-[#a00c37] hover:scale-105 transition-all hover:shadow-xl hover:shadow-[#cb0f44]/30"
              >
                Demander un accès bêta
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="px-10 py-5 bg-white/10 text-white text-lg font-medium border border-white/30 rounded backdrop-blur-sm flex items-center justify-center gap-2 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
