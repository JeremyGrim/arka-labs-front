import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Network, Shield, FileText, TrendingUp, Zap, Database, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { features, benefits, experts, categories } from '../data/mock';

const LandingPage = () => {
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
            src="https://customer-assets.emergentagent.com/job_05361509-02f2-4a4e-9f01-a81e730fa397/artifacts/2z5gyy3v_futuristic-3d-5120x3413-13107.jpg"
            alt="Tech Background"
            className="w-full h-full object-cover opacity-25"
          />
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
              ARKA orchestre 24 agents spécialisés pour transformer vos projets en succès auditables. Local-first, gouverné et traçable.
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
                <div className="text-gray-300 text-sm">Workflows métier</div>
              </div>
              <div className="animate-slideIn" style={{animationDelay: '0.6s'}}>
                <div className="text-4xl font-bold text-[#cb0f44] mb-2">98%</div>
                <div className="text-gray-300 text-sm">Gain de temps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution - ANTHRACITE BG + WHITE CONTAINERS */}
      <section className="py-24 bg-[#2a2a2a]">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fadeIn p-10 bg-white rounded-sm">
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
                  <p className="text-gray-700">Impossible à auditer, impossible à coordonner en équipe</p>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Manque de confiance : sans règles ni traces, pas de capitalisation</p>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Outils dispersés : documents et consignes ne travaillent pas ensemble</p>
                </li>
              </ul>
            </div>

            <div className="animate-fadeIn p-10 bg-white rounded-sm" style={{animationDelay: '0.2s'}}>
              <div className="inline-block mb-6 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-medium rounded">
                LA SOLUTION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">ARKA : Constitution + Équipe d'agents</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Une équipe d'agents orchestrée avec règles explicites et gates de validation</p>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Traçabilité complète : journal unifié, evidence packs, décisions documentées</p>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Local-first : vos données restent chez vous, souveraineté garantie</p>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-700">Core Guardian : optimisation nocturne automatique de l'architecture</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - WHITE BG + GRAY CONTAINERS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Fonctionnalités clés</h2>
            <p className="text-xl text-gray-700">
              ARKA révolutionne l'orchestration IA avec des innovations uniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={feature.id} className="group p-8 bg-gray-50 border-2 border-gray-200 rounded hover:border-[#cb0f44]/70 transition-all hover:scale-105 hover:shadow-xl animate-fadeIn" style={{animationDelay: `${idx * 0.1}s`}}>
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 border-2 border-gray-900 text-white font-medium rounded hover:bg-gray-800 hover:scale-105 transition-all"
            >
              Voir toutes les fonctionnalités
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experts Preview - ANTHRACITE BG + WHITE CONTAINERS */}
      <section className="py-24 bg-[#2a2a2a]">
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

      {/* CTA Section - WHITE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Prêt à transformer votre façon de travailler ?
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Rejoignez le programme bêta et découvrez ARKA en avant-première
            </p>
            <Link
              to="/beta"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#cb0f44] text-white text-lg font-medium rounded hover:bg-[#a00c37] hover:scale-105 transition-all hover:shadow-xl hover:shadow-[#cb0f44]/30"
            >
              Demander un accès bêta
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
