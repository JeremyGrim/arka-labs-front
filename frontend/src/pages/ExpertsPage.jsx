import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { experts, categories } from '../data/mock';

const ExpertsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExperts = experts.filter(expert => {
    const matchesCategory = selectedCategory === 'all' || expert.category === selectedCategory;
    const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         expert.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            38 experts <span className="text-[#cb0f44]">spécialisés</span> organisés en équipe
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Découvrez notre équipe d'agents IA, chacun expert dans son domaine, organisés pour collaborer efficacement sur vos projets les plus ambitieux.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un expert..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#cb0f44]/50 transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-[#cb0f44] text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-8">
            <p className="text-gray-400">
              {filteredExperts.length} expert{filteredExperts.length > 1 ? 's' : ''} trouvé{filteredExperts.length > 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperts.map((expert) => (
              <div key={expert.id} className="group p-8 bg-[#0a0a0a] border border-white/10 hover:border-[#cb0f44]/50 transition-all">
                <div className="mb-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {categories.find(c => c.id === expert.category)?.label}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#cb0f44] transition-colors">
                  {expert.name}
                </h3>
                
                <p className="text-sm text-[#cb0f44] mb-4 font-medium">{expert.baseline}</p>
                
                <p className="text-gray-400 mb-6 leading-relaxed">{expert.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Forces clés</h4>
                    <div className="flex flex-wrap gap-2">
                      {expert.strengths.map((strength, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-white/5 text-gray-300">
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Livrables</h4>
                    <ul className="space-y-1">
                      {expert.deliverables.slice(0, 3).map((deliverable, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                          <div className="w-1 h-1 bg-[#cb0f44] rounded-full" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Indicateurs</h4>
                    <ul className="space-y-1">
                      {expert.metrics.slice(0, 2).map((metric, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                          <div className="w-1 h-1 bg-gray-600 rounded-full" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpertsPage;
