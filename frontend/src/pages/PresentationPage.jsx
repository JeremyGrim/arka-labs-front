import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, AlertCircle, Users, CheckCircle, Zap, Network, Shield, GitBranch, TrendingUp, Target, Award } from 'lucide-react';

const PresentationPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // SLIDE 1 - COVER
    {
      id: 1,
      theme: 'dark',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center relative">
          {/* Geometric decoration */}
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#cb0f44]/20 rounded-sm rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-emerald-500/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#cb0f44]/5 rounded-sm -rotate-6"></div>
          
          <div className="mb-16 animate-fadeIn">
            <svg viewBox="0 0 699 222" className="w-80 h-auto mx-auto">
              <path fill="#FFFFFF" d="M216.51,100.12c4.58-8.55,10.88-15.19,18.89-19.9c8.01-4.71,16.94-7.07,26.77-7.07c9.7,0,18.11,2.09,25.25,6.26c7.14,4.18,12.46,9.43,15.96,15.76v-20.2h18.59v110.71h-18.59v-20.61c-3.64,6.47-9.06,11.82-16.26,16.06c-7.21,4.24-15.59,6.36-25.15,6.36c-9.83,0-18.72-2.42-26.67-7.27c-7.95-4.85-14.21-11.65-18.79-20.41c-4.58-8.75-6.87-18.72-6.87-29.9C209.64,118.61,211.93,108.68,216.51,100.12z M298.33,108.31c-3.37-6.2-7.91-10.94-13.64-14.25c-5.73-3.3-12.02-4.95-18.89-4.95c-6.87,0-13.13,1.62-18.79,4.85c-5.66,3.24-10.17,7.95-13.54,14.14c-3.37,6.2-5.05,13.47-5.05,21.82c0,8.49,1.68,15.86,5.05,22.13c3.37,6.26,7.88,11.04,13.54,14.34c5.66,3.3,11.92,4.95,18.79,4.95c6.87,0,13.16-1.65,18.89-4.95c5.72-3.3,10.27-8.08,13.64-14.34c3.37-6.27,5.05-13.57,5.05-21.92S301.7,114.5,298.33,108.31z"/>
              <path fill="#FFFFFF" d="M389.14,77.3c5.59-3.16,12.22-4.75,19.9-4.75v23.84h-5.86c-9.03,0-15.86,2.29-20.51,6.87c-4.65,4.58-6.97,12.53-6.97,23.84v58.59h-23.03V74.36h23.03v16.16C379.07,84.87,383.55,80.46,389.14,77.3z"/>
              <path fill="#FFFFFF" d="M496.52,185.68l-34.35-47.27v47.27h-34.55V36.18h34.55v82.63l34.15-45.86h42.63l-46.87,56.57l47.27,56.16H496.52z"/>
              <path fill="#FFFFFF" d="M551.17,98.2c4.24-8.75,10.03-15.49,17.37-20.2c7.34-4.71,15.52-7.07,24.55-7.07c7.81,0,14.54,1.55,20.2,4.65c5.65,3.1,10.03,7.27,13.13,12.53V72.34h39.6v113.34h-39.6v-15.76c-3.1,5.25-7.51,9.43-13.23,12.53c-5.73,3.1-12.42,4.65-20.1,4.65c-9.03,0-17.21-2.35-24.55-7.07c-7.34-4.71-13.13-11.48-17.37-20.3c-4.24-8.82-6.36-19.09-6.36-30.81S546.93,106.96,551.17,98.2z M620.47,111.74c-3.97-4.17-8.86-6.26-14.65-6.26c-5.93,0-10.84,2.06-14.75,6.16c-3.91,4.11-5.86,9.86-5.86,17.27c0,7.27,1.95,13.03,5.86,17.28c3.91,4.24,8.82,6.36,14.75,6.36c5.79,0,10.67-2.09,14.65-6.27c3.97-4.17,5.96-9.96,5.96-17.37C626.43,121.64,624.44,115.92,620.47,111.74z"/>
              <path fill="#cb0f44" d="M111.03,144.12l-35.72,41.56L111.03,144.12z"/>
              <path fill="#FFFFFF" d="M33.58,185.68H71.3c2.55,0,4.98-1.11,6.64-3.05l33.1-38.52l-0.13,32.78c-0.02,4.85,3.91,8.79,8.75,8.79h26.12c4.83,0,8.75-3.92,8.75-8.75V36.5L28.72,174.7C24.89,178.92,27.88,185.68,33.58,185.68z"/>
              <path fill="#FFFFFF" d="M100.29,65.57L75.32,36.5H33.58c-5.7,0-8.69,6.77-4.85,10.98l43.05,47.29L100.29,65.57z"/>
            </svg>
          </div>
          <p className="text-4xl text-gray-300 mb-4 animate-fadeIn" style={{animationDelay: '0.2s'}}>L'Orchestrateur d'Équipes IA Gouvernées</p>
          <p className="text-2xl text-[#cb0f44] mb-12 animate-fadeIn" style={{animationDelay: '0.4s'}}>Transformez des LLMs en équipe coordonnée</p>
          <p className="text-gray-400 animate-fadeIn" style={{animationDelay: '0.6s'}}>v1.1 Beta • Octobre 2025</p>
        </div>
      )
    },
    // SLIDE 2 - LE PROBLÈME
    {
      id: 2,
      theme: 'light',
      content: (
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-6xl font-bold mb-16 text-gray-900">Les LLMs seuls ne suffisent pas</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-gray-100 rounded-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <AlertCircle className="text-red-500" size={32} />
                </div>
                <div className="text-3xl font-bold text-red-500">1</div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Dérive et hallucination</h3>
              <p className="text-gray-700">Un seul LLM perd le fil sur des projets complexes. Mock APIs, data fictive, illusion de résultat.</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="text-red-500" size={32} />
                </div>
                <div className="text-3xl font-bold text-red-500">2</div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Zéro coordination</h3>
              <p className="text-gray-700">Chaque agent travaille en silo. Ignore les décisions des autres. Refait le même travail.</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="text-red-500" size={32} />
                </div>
                <div className="text-3xl font-bold text-red-500">3</div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Impossible à auditer</h3>
              <p className="text-gray-700">Livrables dispersés dans le chat. Aucune trace, aucune reproductibilité.</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GitBranch className="text-red-500" size={32} />
                </div>
                <div className="text-3xl font-bold text-red-500">4</div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Consignes fragmentées</h3>
              <p className="text-gray-700">Règles dispersées dans des prompts. Aucune source unique. Dérive garantie.</p>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 3 - LA SOLUTION
    {
      id: 3,
      theme: 'dark',
      content: (
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-6xl font-bold mb-16 text-white">Une équipe gouvernée qui livre avec méthode</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-sm">
              <div className="text-4xl font-bold text-emerald-500 mb-4">38</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Experts spécialisés</h3>
              <p className="text-gray-700">Agents qui communiquent directement, se coordonnent, se valident mutuellement.</p>
            </div>
            <div className="p-8 bg-white rounded-sm">
              <div className="text-4xl font-bold text-emerald-500 mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Traçabilité automatique</h3>
              <p className="text-gray-700">Chaque décision génère son dossier de preuves. Mission trackers, evidence packs.</p>
            </div>
            <div className="p-8 bg-white rounded-sm">
              <div className="text-4xl font-bold text-emerald-500 mb-4">📦</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Architecture locale</h3>
              <p className="text-gray-700">Vos données restent chez vous. Fonctionnement hors ligne. Souveraineté garantie.</p>
            </div>
            <div className="p-8 bg-white rounded-sm">
              <div className="text-4xl font-bold text-emerald-500 mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Supervision autonome</h3>
              <p className="text-gray-700">Équipe Guardian : audit processus, optimisation mémoire, détection anomalies.</p>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 4 - COMMENT ÇA MARCHE
    {
      id: 4,
      theme: 'light',
      content: (
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-6xl font-bold mb-16 text-gray-900">De l'intention au livrable en 3 étapes</h2>
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#cb0f44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl font-bold text-[#cb0f44]">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">CADRAGE</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#cb0f44]">→</span>
                  <span>Vous décrivez le besoin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#cb0f44]">→</span>
                  <span>ARKA structure la mission</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#cb0f44]">→</span>
                  <span>Validation rapide</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#cb0f44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl font-bold text-[#cb0f44]">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">EXÉCUTION</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#cb0f44]">→</span>
                  <span>38 experts se coordonnent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#cb0f44]">→</span>
                  <span>Workflows structurés (16)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#cb0f44]">→</span>
                  <span>Communication P2P directe</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#cb0f44]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl font-bold text-[#cb0f44]">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">LIVRAISON</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#cb0f44]">→</span>
                  <span>Evidence packs automatiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#cb0f44]">→</span>
                  <span>Gates de validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#cb0f44]">→</span>
                  <span>Traçabilité complète</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center p-8 bg-gradient-to-r from-[#cb0f44]/10 to-emerald-500/10 rounded-sm border-l-4 border-[#cb0f44]">
            <p className="text-3xl font-bold text-gray-900">« Pas d'improvisation. Pas d'IA hors de contrôle. »</p>
          </div>
        </div>
      )
    },
    // SLIDE 5 - ARCHITECTURE P2P
    {
      id: 5,
      theme: 'dark',
      content: (
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-6xl font-bold mb-16 text-white">Les agents communiquent entre eux</h2>
          <div className="grid grid-cols-2 gap-12 mb-12">
            <div>
              <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-400 text-sm font-medium rounded mb-6">
                ❌ Systèmes classiques
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Hub-and-spoke</h3>
              <p className="text-gray-300 text-xl mb-4">Orchestrateur central dispatche</p>
              <p className="text-gray-300 text-xl mb-4">↓</p>
              <p className="text-gray-300 text-xl mb-4">Agents isolés</p>
              <p className="text-gray-300 text-xl mb-4">↓</p>
              <p className="text-red-400 text-xl font-bold">Bottleneck</p>
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-sm font-medium rounded mb-6">
                ✅ ARKA
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Pair-à-pair</h3>
              <p className="text-gray-300 text-xl mb-4">Agents communiquent directement</p>
              <p className="text-gray-300 text-xl mb-4">↓</p>
              <p className="text-gray-300 text-xl mb-4">Coordination intelligente</p>
              <p className="text-gray-300 text-xl mb-4">↓</p>
              <p className="text-emerald-400 text-xl font-bold">Zéro bottleneck</p>
            </div>
          </div>
          <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
            <p className="text-gray-300 text-lg font-mono">
              Compliance: "@Legal, confirme interprétation point 3 ?"<br />
              Legal: "Confirmé. @Compliance, vérifie effectif pour DPO."<br />
              DataArch: "@Legal, fuite #2 analytics bloquante ?"<br />
              <span className="text-emerald-400">AGP: "Gate validé. Evidence pack complet."</span>
            </p>
          </div>
        </div>
      )
    },
    // SLIDE 6 - 38 EXPERTS
    {
      id: 6,
      theme: 'light',
      content: (
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-6xl font-bold mb-12 text-gray-900">Une équipe complète à votre service</h2>
          <div className="space-y-8">
            <div className="p-8 bg-gray-100 rounded-sm">
              <h3 className="text-3xl font-bold mb-4 text-[#cb0f44]">GOUVERNANCE & ORCHESTRATION</h3>
              <p className="text-gray-700 text-lg">AGP • PMO • Business Owner • Leads métiers (Tech, Data, Marketing, Ops, RH, Conformité...)</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-sm">
              <h3 className="text-3xl font-bold mb-4 text-[#cb0f44]">PRODUCTION & EXPERTISE</h3>
              <p className="text-gray-700 text-lg">Développement (Lead Dev, DevOps, QA, Architecte) • Sécurité & Conformité • Marketing & Communication • Data & IA • Support & Documentation</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-sm">
              <h3 className="text-3xl font-bold mb-4 text-[#cb0f44]">SUPERVISION</h3>
              <p className="text-gray-700 text-lg">Archiviste (traçabilité, mémoire) • Scribe (documentation, evidence)</p>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 7 - 16 WORKFLOWS
    {
      id: 7,
      theme: 'dark',
      content: (
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-6xl font-bold mb-12 text-white">Des parcours structurés pour chaque besoin</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#cb0f44]">AUDIT (6 workflows)</h3>
              <p className="text-gray-700">Files • RGPD • Compliance • Security • Feature • Accounting</p>
            </div>
            <div className="p-8 bg-white rounded-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#cb0f44]">DELIVERY (3 workflows)</h3>
              <p className="text-gray-700">Feature • Epic • User Story</p>
            </div>
            <div className="p-8 bg-white rounded-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#cb0f44]">OPS (3 workflows)</h3>
              <p className="text-gray-700">Bugfix • Security Incident • Data Report</p>
            </div>
            <div className="p-8 bg-white rounded-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#cb0f44]">DOC / MKT / RH (4 workflows)</h3>
              <p className="text-gray-700">ADR • Content • Campaign • HR Change</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-2xl text-gray-300">Chaque workflow impose <span className="text-emerald-400 font-bold">étapes + gates + validations</span></p>
            <p className="text-xl text-gray-400 mt-2">Zéro improvisation</p>
          </div>
        </div>
      )
    },
    // SLIDE 8 - ROI
    {
      id: 8,
      theme: 'light',
      content: (
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-6xl font-bold mb-12 text-gray-900">Des résultats concrets</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-gray-100 rounded-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Audit RGPD</h3>
              <p className="text-gray-600 mb-2">Avant : <span className="line-through">160h • 8 000€</span></p>
              <p className="text-emerald-600 font-bold mb-4">Avec ARKA : 2h • 40€</p>
              <p className="text-4xl font-bold text-[#cb0f44]">98% de temps économisé</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Livraison features</h3>
              <p className="text-gray-600 mb-2">Avant : <span className="line-through">3 semaines</span></p>
              <p className="text-emerald-600 font-bold mb-4">Avec ARKA : 1 semaine</p>
              <p className="text-4xl font-bold text-[#cb0f44]">66% plus rapide</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Campagne marketing</h3>
              <p className="text-gray-600 mb-2">Avant : <span className="line-through">10 jours</span></p>
              <p className="text-emerald-600 font-bold mb-4">Avec ARKA : 3 jours</p>
              <p className="text-4xl font-bold text-[#cb0f44]">70% de gain</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Conformité</h3>
              <p className="text-gray-600 mb-2">Avant : <span className="line-through">Audits manuels</span></p>
              <p className="text-emerald-600 font-bold mb-4">Avec ARKA : Traçabilité totale</p>
              <p className="text-4xl font-bold text-[#cb0f44]">SOC2/ISO auto</p>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 9 - DIFFÉRENCIATION
    {
      id: 9,
      theme: 'dark',
      content: (
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-6xl font-bold mb-12 text-white">Ce qui rend ARKA unique</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">vs Multi-agents classiques</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Voie unique de production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Constitution versionnée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Architecture P2P</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Traçabilité automatique</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">vs LangChain / CrewAI</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Pour PM/PO</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Gouvernance stricte</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Prêt production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Multi-provider</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">vs Claude / ChatGPT</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>38 experts spécialisés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Communication P2P</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>16 workflows structurés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Evidence-based</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-3xl font-bold text-white">Constitution exécutable pour équipes IA gouvernées</p>
          </div>
        </div>
      )
    },
    // SLIDE 10 - CTA
    {
      id: 10,
      theme: 'hero',
      content: (
        <div className="h-full flex flex-col items-center justify-center text-center relative">
          <div className="absolute inset-0 z-0">
            <img
              src="https://customer-assets.emergentagent.com/job_05361509-02f2-4a4e-9f01-a81e730fa397/artifacts/2z5gyy3v_futuristic-3d-5120x3413-13107.jpg"
              alt="Tech Background"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
          </div>
          <div className="relative z-10">
            <div className="inline-block mb-6 px-4 py-2 bg-[#cb0f44]/20 border border-[#cb0f44]/40 rounded backdrop-blur-sm">
              <span className="text-[#cb0f44] text-lg font-medium">Programme Bêta Ouvert</span>
            </div>
            <h2 className="text-7xl font-bold mb-8 text-white">Rejoignez ARKA</h2>
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Bénéfices bêta</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>✓ Accès anticipé avant lancement</li>
                  <li>✓ Support dédié équipe ARKA</li>
                  <li>✓ Influence directe roadmap</li>
                  <li>✓ Formation personnalisée</li>
                  <li>✓ Tarifs préférentiels</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-[#cb0f44]">Statistiques</h3>
                <ul className="space-y-2 text-gray-200 text-xl">
                  <li><span className="font-bold text-white">38</span> Agents experts</li>
                  <li><span className="font-bold text-white">16</span> Workflows métiers</li>
                  <li><span className="font-bold text-white">98%</span> Gain de temps</li>
                  <li><span className="font-bold text-white">100%</span> Local & Vérifiable</li>
                </ul>
              </div>
            </div>
            <a
              href="/beta"
              className="inline-block px-12 py-6 bg-[#cb0f44] text-white text-2xl font-bold rounded hover:bg-[#a00c37] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#cb0f44]/30"
            >
              Demander un accès bêta
            </a>
            <p className="mt-8 text-2xl text-gray-300 font-bold">« Pas d'impro. Pas d'IA hors de contrôle. »</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSlideData = slides[currentSlide];
  
  const bgClass = currentSlideData.theme === 'dark' || currentSlideData.theme === 'hero'
    ? 'bg-[#1a1a1a]'
    : 'bg-white';

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-500`}>
      {/* Slide Content */}
      <div className="h-screen w-screen p-20 flex flex-col">
        <div className="flex-1 overflow-hidden">
          {currentSlideData.content}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-4 rounded transition-all ${
              currentSlide === 0
                ? 'opacity-30 cursor-not-allowed'
                : currentSlideData.theme === 'light'
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft size={32} />
          </button>

          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-12 bg-[#cb0f44]'
                    : currentSlideData.theme === 'light'
                    ? 'w-2 bg-gray-400 hover:bg-gray-600'
                    : 'w-2 bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-4 rounded transition-all ${
              currentSlide === slides.length - 1
                ? 'opacity-30 cursor-not-allowed'
                : currentSlideData.theme === 'light'
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className={currentSlideData.theme === 'light' ? 'text-gray-500' : 'text-gray-400'}>
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PresentationPage;
