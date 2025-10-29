import React, { useState } from 'react';
import { FileText, Shield, Lock, Scale } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LegalPage = () => {
  const [activeTab, setActiveTab] = useState('cgu');

  const tabs = [
    { id: 'cgu', label: 'Conditions Générales', icon: FileText },
    { id: 'privacy', label: 'Confidentialité', icon: Shield },
    { id: 'security', label: 'Sécurité', icon: Lock },
    { id: 'legal', label: 'Mentions Légales', icon: Scale }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Informations Légales
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Transparence et conformité au cœur d'ARKA
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap gap-4 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded flex items-center gap-2 font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#cb0f44] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="max-w-4xl">
            {activeTab === 'cgu' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Conditions Générales d'Utilisation</h2>
                <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Objet</h3>
                    <p>Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de la plateforme ARKA, un orchestrateur d'équipes IA gouvernées.</p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptation des CGU</h3>
                    <p>L'utilisation d'ARKA implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ARKA.</p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Description du Service</h3>
                    <p>ARKA est une application desktop qui orchestre 38 agents IA spécialisés pour transformer vos projets en succès auditables. Le service fonctionne en local-first, garantissant la souveraineté de vos données.</p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété Intellectuelle</h3>
                    <p>ARKA, sa documentation, ses agents, workflows et constitution sont protégés par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation est strictement interdite.</p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Responsabilités</h3>
                    <p>ARKA fournit une plateforme d'orchestration IA. L'utilisateur reste responsable de l'utilisation qu'il fait des agents et des décisions prises sur la base des résultats produits.</p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Modification des CGU</h3>
                    <p>Nous nous réservons le droit de modifier ces CGU à tout moment. Les utilisateurs seront informés des changements significatifs.</p>
                  </section>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Politique de Confidentialité</h2>
                <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Collecte des Données</h3>
                    <p>ARKA fonctionne en local-first. Vos données de projet, missions, et evidence packs restent sur votre machine locale. Nous ne collectons aucune donnée de projet.</p>
                    <p className="mt-4">Données collectées :</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Informations d'inscription (email, nom, entreprise) pour le programme bêta</li>
                      <li>Données d'usage anonymisées (optionnel) pour améliorer ARKA</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Utilisation des Données</h3>
                    <p>Les données collectées sont utilisées exclusivement pour :</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Gérer votre accès au programme bêta</li>
                      <li>Vous fournir un support technique</li>
                      <li>Améliorer les fonctionnalités d'ARKA</li>
                      <li>Vous informer des mises à jour importantes</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Partage des Données</h3>
                    <p>Nous ne partageons, ne vendons, ni ne louons vos données personnelles à des tiers. Vos données projet restent strictement confidentielles et locales.</p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Sécurité</h3>
                    <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé.</p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Vos Droits (RGPD)</h3>
                    <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Droit d'accès à vos données personnelles</li>
                      <li>Droit de rectification de vos données</li>
                      <li>Droit à l'effacement (droit à l'oubli)</li>
                      <li>Droit à la portabilité de vos données</li>
                      <li>Droit d'opposition au traitement</li>
                    </ul>
                    <p className="mt-4">Pour exercer ces droits : <a href="mailto:privacy@arka.ai" className="text-[#cb0f44] hover:underline">privacy@arka.ai</a></p>
                  </section>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Sécurité et Souveraineté</h2>
                <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Architecture Local-First</h3>
                    <p>ARKA est conçu avec une philosophie local-first :</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Vos données restent sur votre machine</li>
                      <li>Fonctionnement hors-ligne possible</li>
                      <li>Aucune synchronisation cloud obligatoire</li>
                      <li>Contrôle total sur vos données</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Evidence-Based AI</h3>
                    <p>Chaque action dans ARKA génère un evidence pack complet :</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Traçabilité complète de chaque décision</li>
                      <li>Logs horodatés et signés</li>
                      <li>Chaîne de custody juridique</li>
                      <li>Exports conformes SOC2/ISO27001/RGPD</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Multi-Provider Sécurisé</h3>
                    <p>ARKA supporte plusieurs fournisseurs LLM (OpenAI, Claude, Gemini) :</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Vos clés API restent locales</li>
                      <li>Chiffrement des communications</li>
                      <li>Pas de stockage des clés sur nos serveurs</li>
                      <li>Rotation de clés facilitée</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Conformité</h3>
                    <p>ARKA est conçu pour faciliter votre conformité :</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>RGPD : Données locales, droit à l'oubli simplifié</li>
                      <li>SOC2 : Traçabilité et audit automatiques</li>
                      <li>ISO27001 : Gestion des accès et logs</li>
                      <li>HIPAA-ready : Architecture compatible santé</li>
                    </ul>
                  </section>
                </div>
              </div>
            )}

            {activeTab === 'legal' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Mentions Légales</h2>
                <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Éditeur</h3>
                    <p>
                      ARKA Labs SAS<br />
                      Capital social : 50 000 €<br />
                      RCS Paris : XXX XXX XXX<br />
                      Siège social : 123 Avenue des Champs-Élysées, 75008 Paris, France<br />
                      Email : <a href="mailto:contact@arka.ai" className="text-[#cb0f44] hover:underline">contact@arka.ai</a><br />
                      Téléphone : +33 1 23 45 67 89
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Directeur de Publication</h3>
                    <p>M. [Nom du Directeur], Président</p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Hébergement</h3>
                    <p>
                      Application Desktop : Hébergement local sur la machine de l'utilisateur<br />
                      Site Web : Hébergé par [Nom de l'hébergeur]<br />
                      Adresse : [Adresse complète de l'hébergeur]
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Propriété Intellectuelle</h3>
                    <p>
                      L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation est strictement interdite sans autorisation préalable.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Licence</h3>
                    <p>
                      ARKA est distribué sous licence propriétaire. Le code source de la constitution et certains composants sont disponibles sous licence MIT sur GitHub.
                    </p>
                  </section>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalPage;
