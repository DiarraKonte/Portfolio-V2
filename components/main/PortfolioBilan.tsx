"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Competence = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  level: string;
  resources: string[];
  evidence: string[];
  reflection: string;
  next: string;
};

const competences: Competence[] = [
  {
    id: "C1",
    title: "Réaliser",
    subtitle: "Développer des applications informatiques",
    color: "#58a6ff",
    level: "Acquis",
    resources: ["Développement avancé : 14,29", "Maintenance applicative : 10,72"],
    evidence: [
      "BUT 1 — Calculatrice Java : première application complète réalisée en S2.",
      "BUT 2 — PingMe : développement d'une messagerie temps réel avec PHP, JavaScript et WebSockets.(En groupe)",
      "Stage BUT 2 — AriMayi : prise en charge d'une user story front-end en React et Next.js.",
      "Projet personnel BUT 2 — LumnPC : plateforme pédagogique avec comptes, modules et paiement.",
      "BUT 3 — OtakuGO en S5 et générateur de diagrammes de Voronoï en S6. (En groupe)",
      "Refonte de pages WordPress durant le stage, avec prise en compte des besoins métier.",
      "Scripts Python, Bash et PowerShell conçus pour automatiser des tâches réelles.",
    ],
    reflection:
      "Je sais désormais partir d'un besoin, choisir une architecture cohérente et livrer une solution utilisable. Mon stage m'a appris qu'un développement réussi ne se limite pas au code : il doit aussi être maintenable, documenté et adapté aux utilisateurs.",
    next:
      "Mieux formaliser les tests et les critères d'acceptation dès le début d'un projet.",
  },
  {
    id: "C2",
    title: "Optimiser",
    subtitle: "Proposer des applications adaptées et performantes",
    color: "#bc8cff",
    level: "Acquis",
    resources: ["Développement avancé : 14,29", "Maintenance applicative : 10,72"],
    evidence: [
      "BUT 2 — Simplification du modèle de données de PingMe et suppression des informations personnelles non nécessaires.",
      "BUT 3 — Indexation des animés par genre, analyse de complexité et réduction des traitements énergivores dans OtakuGO.",
      "BUT 3 — Analyse des limites du calcul pixel par pixel du diagramme de Voronoï.",
      "Réduction du périmètre des sauvegardes aux données réellement critiques.(Stage BUT3)",
      "Diagnostic d'incidents DNS, de permissions, d'encodage et de chemins Windows.(Stage BUT3)",
      "Repo Architect AI : extraction de métriques et analyse locale de dépôts logiciels.(Projet Personnel)",
    ],
    reflection:
      "J'ai progressé dans l'analyse de cause racine. Au lieu de corriger uniquement le symptôme, je collecte des logs, reproduis le problème et mesure l'effet de la solution. Cette méthode a rendu le système de sauvegarde plus fiable et moins coûteux en stockage.",
    next:
      "Ajouter davantage de mesures avant/après et automatiser les tests de non-régression.",
  },
  {
    id: "C3",
    title: "Administrer",
    subtitle: "Installer, configurer et maintenir des systèmes",
    color: "#3fb950",
    level: "En progression",
    resources: ["Linux / Ubuntu", "Windows Server", "Apache2, SSL, rclone"],
    evidence: [
      "BUT 1 et 2 — Mise en place de services réseau et utilisation de la virtualisation.",
      "BUT 2 — Mise en place de l'environnement PHP, WebSocket et PostgreSQL pour le projet PingMe.(SAE S3 ET S4)",
      "Déploiement de Passbolt Community Edition sur un VPS Ubuntu.(Stage BUT3)",
      "Configuration d'un VirtualHost Apache dédié, de HTTPS et des règles d'accès.(Stage BUT3)",
      "Sauvegarde automatisée de 103 Go de données avec authentification de service Drive.(Stage BUT3)",
    ],
    reflection:
      "Le stage m'a confronté à une infrastructure existante où chaque modification pouvait affecter d'autres services. J'ai appris à vérifier les ports, les droits, les dépendances et à prévoir une procédure de retour arrière avant une mise en production.",
    next:
      "Approfondir la supervision, la conteneurisation et les stratégies de reprise après incident.",
  },
  {
    id: "C4",
    title: "Gérer",
    subtitle: "Concevoir et exploiter les données de l'organisation",
    color: "#e3b341",
    level: "En progression",
    resources: ["MySQL / PostgreSQL", "MariaDB", "Google Workspace"],
    evidence: [
      "BUT 1 — Création et exploitation de premières bases de données relationnelles.",
      "BUT 2 — Modélisation de PingMe : utilisateurs, conversations, messages et annotations.(SAE S3 ET S4)",
      "Normalisation jusqu'à la BCNF et implémentation PostgreSQL avec clés étrangères et contraintes.",
      "Projet personnel LumnPC — Gestion des comptes et de la progression avec Firebase.",
      "Configuration et maintenance de la base MariaDB utilisée par Passbolt.(Stage BUT3)",
      "Inventaire du parc et structuration de données issues de Google Workspace.(Stage BUT3)",
    ],
    reflection:
      "Je distingue mieux les enjeux de disponibilité, de confidentialité et de qualité des données. La mise en place de Passbolt m'a notamment montré qu'une base fonctionnelle n'est pas suffisante sans gestion rigoureuse des droits et des sauvegardes.",
    next:
      "Renforcer ma pratique des migrations, des sauvegardes chiffrées et des contrôles d'intégrité.",
  },
  {
    id: "C5",
    title: "Conduire",
    subtitle: "Piloter un projet informatique",
    color: "#ffa657",
    level: "Acquis",
    resources: ["Agile", "Trello", "GitHub", "Documentation technique"],
    evidence: [
      "BUT 2 — Évolution de PingMe sur deux semestres, du besoin initial à l'application complexe.(SAE S3 ET S4)",
      "Stage ReeWayy — Suivi d'une user story et coordination avec l'équipe back-end en méthode Agile.(Stage BUT2)",
      "Projet personnel LumnPC — Conception progressive d'un produit, de l'idée au déploiement.",
      "BUT 3 — Organisation d'OtakuGO à cinq et comparaison structurée de plusieurs assistants IA pour la SAÉ Voronoï.(SAE S6)",
      "Découpage des projets en besoins, tâches, validations et livrables.(Toute les SAÉ)", 
      "Suivi régulier du stage et priorisation entre sauvegarde, sécurité et support.(Stage BUT3)",
      "Rédaction de guides d'installation, de maintenance et de dépannage.(Stage BUT3)",
    ],
    reflection:
      "J'ai appris à avancer par versions courtes et vérifiables. Sur le système de sauvegarde, les incidents successifs ont transformé le prototype en solution de production. La documentation est devenue un livrable du projet, pas une tâche ajoutée à la fin.",
    next:
      "Évaluer plus tôt les risques et définir des indicateurs de réussite avec le commanditaire.",
  },
  {
    id: "C6",
    title: "Collaborer",
    subtitle: "Travailler au sein d'une équipe informatique",
    color: "#f778ba",
    level: "Acquis",
    resources: ["UE 6.6 : 14,25", "Droit du numérique : 16", "Entrepreneuriat : 12,50"],
    evidence: [
      "BUT 2 — Travail en équipe sur PingMe avec répartition des tâches, relecture et livrable commun.(SAE S3 ET S4)",
      "Stage ReeWayy — Collaboration front-end/back-end et adaptation aux pratiques de l'entreprise.(Stage BUT2)",
      "BUT 3 — Développement d'OtakuGO dans une équipe de cinq et production de livrables collectifs.(SAE S3 ET S4)",
      "Coordination avec les pôles IT, commercial, comptabilité et pédagogie.(Stage BUT3)",
      "Support utilisateur, préparation de postes et validation d'un outil de ticketing.(Stage BUT3)",
      "Transfert de compétences grâce aux documentations et procédures de maintenance.(Stage BUT3)",
    ],
    reflection:
      "Le stage a renforcé ma capacité à expliquer une solution technique à des profils non techniques. J'ai aussi appris à demander une validation au bon moment et à adapter mes priorités aux contraintes des autres équipes.",
    next:
      "Rendre mes comptes rendus plus synthétiques et formaliser davantage les décisions collectives.",
  },
];

const ueResults = [
  { code: "UE 6.1", label: "Réaliser", score: "12,68", rank: "22 / 83" },
  { code: "UE 6.2", label: "Optimiser", score: "12,68", rank: "22 / 83" },
  { code: "UE 6.6", label: "Collaborer", score: "14,25", rank: "13 / 83" },
];

const progression = [
  {
    year: "BUT 1",
    period: "2023 — 2024",
    color: "#8b949e",
    title: "Acquérir les fondamentaux",
    summary:
      "Découverte de la programmation, du web, des systèmes, des bases de données et du travail en projet. Après un S1 irrégulier, car tout etait nouveau et je devais hausser mon niveau, mes notes en S2 ont augmenter quand j'ai commencé a avoir le rythme du BUT.",
    highlights: ["Calculatrice Java en S2", "SAÉ application : 16", "Portfolio : 16"],
  },
  {
    year: "BUT 2",
    period: "2024 — 2025",
    color: "#58a6ff",
    title: "Passer à des applications complexes",
    summary:
      "Conception de PingMe sur deux semestres, approfondissement de l'architecture, de la sécurité et des données, puis première expérience de développement en entreprise chez ReeWayy.",
    highlights: ["PingMe en S3–S4", "Projet personnel LumnPC", "Stage ReeWayy : 13,80"],
  },
  {
    year: "BUT 3",
    period: "2025 — 2026",
    color: "#3fb950",
    title: "Livrer en environnement professionnel",
    summary:
      "Développement avancé avec OtakuGO en S5 et étude comparative humain–IA autour d'un diagramme de Voronoï en S6. Le stage IFFP élargit ensuite mon profil vers l'infrastructure et la sécurité.",
    highlights: ["OtakuGO en S5", "Voronoï / IA en S6", "103 Go sauvegardés"],
  },
];

const YearDivider = ({
  year,
  period,
  title,
  color,
}: {
  year: string;
  period: string;
  title: string;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mt-12 mb-6"
  >
    <div className="shrink-0 py-2">
      <p className="font-mono text-lg sm:text-xl font-bold" style={{ color }}>
        {year}
      </p>
      <p className="font-mono text-[11px] mt-0.5" style={{ color: "#8b949e" }}>
        {period}
      </p>
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm sm:text-base font-semibold" style={{ color: "#e6edf3" }}>
        {title}
      </p>
      <div
        className="h-px mt-2 w-full"
        style={{ background: `linear-gradient(to right, ${color}80, transparent)` }}
      />
    </div>
  </motion.div>
);

const PortfolioBilan = () => {
  const [selected, setSelected] = useState(competences[0]);

  return (
    <section id="bilan" className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="font-mono text-xs mb-2" style={{ color: "#8b949e" }}>
            <span style={{ color: "#3fb950" }}>$</span> npm run bilan-but3
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold font-mono" style={{ color: "#e6edf3" }}>
            Bilan BUT 3
          </h2>
          <p className="mt-4 max-w-4xl leading-7" style={{ color: "#8b949e" }}>
            Cette synthèse relie mes apprentissages universitaires, mes SAÉ, mes projets
            personnels et mon stage de fin d&apos;études. Elle montre mon évolution d&apos;un
            profil débutant vers un développeur capable de concevoir, déployer et maintenir
            une solution dans un environnement professionnel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {progression.map((step, index) => (
            <motion.article
              key={step.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-lg overflow-hidden"
              style={{ border: `1px solid ${step.color}55`, background: "#0d1117" }}
            >
              <div
                className="flex items-center justify-between gap-3 px-4 py-2 font-mono text-xs"
                style={{ background: "#161b22", borderBottom: "1px solid #30363d" }}
              >
                <span style={{ color: step.color }}>{step.year}</span>
                <span style={{ color: "#8b949e" }}>{step.period}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2" style={{ color: "#e6edf3" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-6 mb-4" style={{ color: "#8b949e" }}>
                  {step.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {step.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="font-mono text-[10px] px-2 py-1 rounded-full"
                      style={{
                        color: step.color,
                        border: `1px solid ${step.color}45`,
                        background: `${step.color}10`,
                      }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.6fr] gap-5 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
            style={{ border: "1px solid #30363d", background: "#0d1117" }}
          >
            <div
              className="px-4 py-2 font-mono text-xs"
              style={{ background: "#161b22", borderBottom: "1px solid #30363d", color: "#8b949e" }}
            >
              referentiel/competences.json
            </div>
            <div className="p-2">
              {competences.map((competence) => {
                const active = competence.id === selected.id;
                return (
                  <button
                    key={competence.id}
                    onClick={() => setSelected(competence)}
                    className="w-full text-left p-3 rounded-md transition-colors mb-1"
                    style={{
                      background: active ? "#161b22" : "transparent",
                      border: active ? `1px solid ${competence.color}55` : "1px solid transparent",
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-sm font-semibold" style={{ color: competence.color }}>
                        {competence.id} · {competence.title}
                      </span>
                      <span
                        className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          color: active ? competence.color : "#8b949e",
                          border: `1px solid ${active ? competence.color : "#30363d"}55`,
                        }}
                      >
                        {competence.level}
                      </span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: "#8b949e" }}>
                      {competence.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div
            className="rounded-lg overflow-hidden"
            style={{ border: "1px solid #30363d", background: "#0d1117" }}
          >
            <div
              className="px-4 py-2 font-mono text-xs"
              style={{ background: "#161b22", borderBottom: "1px solid #30363d", color: "#8b949e" }}
            >
              analyse/{selected.id.toLowerCase()}-{selected.title.toLowerCase()}.md
            </div>
            <AnimatePresence mode="wait">
              <motion.article
                key={selected.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="p-5 sm:p-7"
              >
                <p className="font-mono text-xs mb-2" style={{ color: selected.color }}>
                  ## {selected.id} — {selected.title}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold mb-5" style={{ color: "#e6edf3" }}>
                  {selected.subtitle}
                </h3>

                <h4 className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "#8b949e" }}>
                  Preuves mobilisées
                </h4>
                <ul className="space-y-2 mb-6">
                  {selected.evidence.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6" style={{ color: "#c9d1d9" }}>
                      <span style={{ color: selected.color }}>+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="p-4 rounded-md mb-4"
                  style={{ background: "#161b22", borderLeft: `3px solid ${selected.color}` }}
                >
                  <p className="font-mono text-xs mb-2" style={{ color: selected.color }}>
                    AUTO-ÉVALUATION
                  </p>
                  <p className="text-sm leading-6" style={{ color: "#c9d1d9" }}>
                    {selected.reflection}
                  </p>
                </div>

                <p className="text-sm leading-6 mb-4" style={{ color: "#8b949e" }}>
                  <span className="font-semibold" style={{ color: "#e3b341" }}>Point de vigilance : </span>
                  {selected.next}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.resources.map((resource) => (
                    <span
                      key={resource}
                      className="font-mono text-[10px] px-2 py-1 rounded-full"
                      style={{ color: selected.color, border: `1px solid ${selected.color}55`, background: `${selected.color}12` }}
                    >
                      {resource}
                    </span>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <YearDivider
          year="BUT 1"
          period="2023 — 2024"
          title="Acquisition des fondamentaux"
          color="#58a6ff"
        />

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden mb-8"
          style={{ border: "1px solid #00739655", background: "#0d1117" }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 font-mono text-xs"
            style={{ background: "#161b22", borderBottom: "1px solid #30363d" }}
          >
            <span style={{ color: "#58a6ff" }}>but-1/s2-calculatrice-java.md</span>
            <span style={{ color: "#8b949e" }}>SAÉ 2.01</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
            <div className="relative min-h-64 border-b lg:border-b-0 lg:border-r" style={{ borderColor: "#30363d", background: "#05080c" }}>
              <Image
                src="/Java2.png"
                alt="Code de la calculatrice Java"
                fill
                className="object-contain p-3"
              />
            </div>
            <div className="p-5 sm:p-7">
              <p className="font-mono text-xs mb-2" style={{ color: "#58a6ff" }}>
                ## Première application orientée objet
              </p>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#e6edf3" }}>
                Calculatrice Java
              </h3>
              <p className="text-sm leading-7 mb-5" style={{ color: "#c9d1d9" }}>
                Cette SAÉ de S2 consistait à modéliser une calculatrice capable de
                composer et d&apos;évaluer des expressions. Une classe abstraite
                <span className="font-mono" style={{ color: "#58a6ff" }}> Expression</span>
                {" "}est spécialisée par les nombres et les opérations, elles-mêmes
                déclinées en addition, soustraction, multiplication et division.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {[
                  ["Architecture", "Héritage, abstraction et polymorphisme"],
                  ["Fiabilité", "Exception explicite pour la division par zéro"],
                  ["Fonctionnement", "Composition d'expressions imbriquées"],
                  ["Livrable", "Code source, tests simples et Javadoc"],
                ].map(([title, text]) => (
                  <div key={title} className="p-3 rounded-md" style={{ background: "#161b22", border: "1px solid #30363d" }}>
                    <p className="font-mono text-xs mb-1" style={{ color: "#58a6ff" }}>{title}</p>
                    <p className="text-xs leading-5" style={{ color: "#8b949e" }}>{text}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-6 mb-5" style={{ color: "#8b949e" }}>
                <span className="font-semibold" style={{ color: "#e3b341" }}>Recul critique : </span>
                ce projet m&apos;a permis de comprendre l&apos;intérêt de séparer les
                responsabilités plutôt que de placer tous les calculs dans une seule
                classe. Avec mon expérience actuelle, j&apos;ajouterais des tests unitaires
                automatisés et une validation plus rigoureuse des entrées.
              </p>
              <a
                href="https://github.com/DiarraKonte/SAE-Calculatrice"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs hover:underline"
                style={{ color: "#58a6ff" }}
              >
                Consulter la SAÉ sur GitHub ↗
              </a>
            </div>
          </div>
        </motion.article>



        <YearDivider
          year="BUT 2"
          period="2024 — 2025"
          title="Applications complexes et première expérience professionnelle"
          color="#bc8cff"
        />

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden mb-8"
          style={{ border: "1px solid #58a6ff55", background: "#0d1117" }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 font-mono text-xs"
            style={{ background: "#161b22", borderBottom: "1px solid #30363d" }}
          >
            <span style={{ color: "#58a6ff" }}>but-2/pingme-retrospective.md</span>
            <span style={{ color: "#8b949e" }}>SAÉ 3.01 → SAÉ 4.A.01</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0">
            <div className="p-5 sm:p-7 lg:border-r" style={{ borderColor: "#30363d" }}>
              <p className="font-mono text-xs mb-2" style={{ color: "#58a6ff" }}>
                ## Projet majeur du BUT 2
              </p>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#e6edf3" }}>
                PingMe · Messagerie avec annotations émotionnelles
              </h3>
              <p className="text-sm leading-7 mb-5" style={{ color: "#c9d1d9" }}>
                En équipe, nous avons conçu une application de messagerie en temps réel
                destinée à l&apos;analyse d&apos;échanges de service client. Chaque message peut
                recevoir une annotation émotionnelle. Les échanges et annotations sont
                conservés pour constituer un historique exploitable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {[
                  ["Temps réel", "PHP, Ratchet et WebSockets"],
                  ["Données", "PostgreSQL, SQL et pgAdmin"],
                  ["Architecture", "MVC, utilisateurs et conversations"],
                  ["Équipe", "6 membres sur deux semestres"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="p-3 rounded-md"
                    style={{ background: "#161b22", border: "1px solid #30363d" }}
                  >
                    <p className="font-mono text-xs mb-1" style={{ color: "#58a6ff" }}>{title}</p>
                    <p className="text-xs" style={{ color: "#8b949e" }}>{text}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://github.com/Cheick6/SAE_S1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs hover:underline"
                style={{ color: "#58a6ff" }}
              >
                Consulter le dépôt GitHub ↗
              </a>
            </div>

            <div className="p-5 sm:p-7">
              <h4 className="font-mono text-xs mb-2" style={{ color: "#e3b341" }}>
                ### Ma contribution
              </h4>
              <p className="text-sm leading-6 mb-5" style={{ color: "#c9d1d9" }}>
                J&apos;ai mis en place le serveur WebSocket, le serveur HTTP et la liaison avec
                la base de données. J&apos;ai également participé à la définition générale du besoin, à la réalisation du
                modèle entité-association du S4, à la relecture et à la cohérence du
                rapport collectif. Le projet m&apos;a aussi permis de développer et
                d&apos;intégrer les fonctions de l&apos;application avec le reste de l&apos;équipe.
              </p>

              <h4 className="font-mono text-xs mb-2" style={{ color: "#e3b341" }}>
                ### Recul critique
              </h4>
              <p className="text-sm leading-6 mb-5" style={{ color: "#c9d1d9" }}>
                Notre modèle initial collectait des informations personnelles qui
                n&apos;étaient pas indispensables. En S4, nous avons supprimé le nom, le
                prénom et les données de suivi inutilisées afin de simplifier la base et
                de mieux respecter la vie privée. Cette évolution m&apos;a appris à ne
                conserver que les données réellement justifiées par le besoin.
              </p>

              <h4 className="font-mono text-xs mb-2" style={{ color: "#e3b341" }}>
                ### Si c&apos;était à refaire
              </h4>
              <p className="text-sm leading-6" style={{ color: "#8b949e" }}>
                Je définirais plus tôt les règles de confidentialité, les responsabilités
                de chaque membre et des tests d&apos;intégration communs pour réduire les
                écarts entre le front-end, le serveur WebSocket et la base de données.
              </p>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden mb-8"
          style={{ border: "1px solid #bc8cff55", background: "#0d1117" }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 font-mono text-xs"
            style={{ background: "#161b22", borderBottom: "1px solid #30363d" }}
          >
            <span style={{ color: "#bc8cff" }}>but-2/stage-reewayy.md</span>
            <span style={{ color: "#8b949e" }}>Janvier — mars 2025</span>
          </div>
          <div
            className="relative h-56 sm:h-72 border-b"
            style={{ borderColor: "#30363d", background: "#f5f5f5" }}
          >
            <Image
              src="/dashboard.png"
              alt="Tableau de bord de l'espace apprenant AriMayi développé durant le stage ReeWayy"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-0">
            <div className="p-5 sm:p-7 lg:border-r" style={{ borderColor: "#30363d" }}>
              <p className="font-mono text-xs mb-2" style={{ color: "#bc8cff" }}>
                ## Stage de développement front-end React/NextJS
              </p>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#e6edf3" }}>
                ReeWayy · Plateforme AriMayi
              </h3>
              <p className="text-sm leading-7 mb-5" style={{ color: "#c9d1d9" }}>
                J&apos;ai développé une partie de l&apos;espace personnel des apprenants en
                prenant en charge une user story complète. J&apos;ai travaillé avec
                l&apos;équipe back-end dans un environnement Agile et découvert la manière
                dont une équipe professionnelle organise, relit et intègre le code.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Redux", "Axios", "TypeScript", "Agile"].map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[10px] px-2 py-1 rounded-full"
                    style={{ color: "#bc8cff", border: "1px solid #bc8cff55", background: "#bc8cff12" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <h4 className="font-mono text-xs mb-2" style={{ color: "#e3b341" }}>
                ### Un défi technique formateur
              </h4>
              <p className="text-sm leading-6 mb-5" style={{ color: "#c9d1d9" }}>
                À mon arrivée, je ne connaissais ni Next.js, ni React, Redux ou Axios.
                J&apos;ai dû apprendre rapidement en étudiant le projet existant, en
                expérimentant et en sollicitant l&apos;équipe lorsque cela était nécessaire.
                Cette immersion m&apos;a permis de devenir opérationnel sur une stack
                entièrement nouvelle.
              </p>

              <h4 className="font-mono text-xs mb-2" style={{ color: "#e3b341" }}>
                ### Bilan humain
              </h4>
              <p className="text-sm leading-6 mb-5" style={{ color: "#c9d1d9" }}>
                J&apos;ai particulièrement apprécié ce stage grâce à l&apos;ambiance de
                travail, à la bienveillance et à la disponibilité de l&apos;équipe. Ce cadre
                m&apos;a donné confiance pour poser des questions, progresser et prendre
                progressivement davantage d&apos;autonomie.
              </p>

              <h4 className="font-mono text-xs mb-2" style={{ color: "#e3b341" }}>
                ### Acquis pour la suite
              </h4>
              <p className="text-sm leading-6" style={{ color: "#8b949e" }}>
                Cette expérience a confirmé ma capacité d&apos;adaptation. Je ne changerais
                pas ma manière de procéder : observer l&apos;existant, apprendre par la
                pratique, demander de l&apos;aide au bon moment et appliquer rapidement les
                retours reçus.
              </p>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden mb-8"
          style={{ border: "1px solid #6366f155", background: "#0d1117" }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 font-mono text-xs"
            style={{ background: "#161b22", borderBottom: "1px solid #30363d" }}
          >
            <span style={{ color: "#818cf8" }}>but-2/projet-personnel-lumnpc.md</span>
            <span style={{ color: "#8b949e" }}>Mai — juillet 2025</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
            <div className="relative min-h-72 border-b lg:border-b-0 lg:border-r" style={{ borderColor: "#30363d", background: "#111827" }}>
              <Image
                src="/Lumn1.png"
                alt="Page d'accueil de la plateforme LumnPC"
                fill
                className="object-contain"
              />
            </div>
            <div className="p-5 sm:p-7">
              <p className="font-mono text-xs mb-2" style={{ color: "#818cf8" }}>
                ## Initiative personnelle en BUT 2
              </p>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#e6edf3" }}>
                LumnPC · Apprendre à configurer son PC
              </h3>
              <p className="text-sm leading-7 mb-5" style={{ color: "#c9d1d9" }}>
                J&apos;ai imaginé et développé seul une plateforme pédagogique destinée
                aux débutants qui souhaitent comprendre et choisir les composants d&apos;un
                PC gaming. Le contenu est organisé en modules et le compte utilisateur
                permet de retrouver son espace et de suivre sa progression.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {[
                  ["Produit", "Modules, leçons et suivi de progression"],
                  ["Comptes", "Firebase et connexion Google"],
                  ["Paiement", "Stripe Checkout et webhook (Plus d'actualité)"],
                  ["Communication", "Formulaire de contact et envoi d'e-mails"],
                ].map(([title, text]) => (
                  <div key={title} className="p-3 rounded-md" style={{ background: "#161b22", border: "1px solid #30363d" }}>
                    <p className="font-mono text-xs mb-1" style={{ color: "#818cf8" }}>{title}</p>
                    <p className="text-xs leading-5" style={{ color: "#8b949e" }}>{text}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-6 mb-5" style={{ color: "#8b949e" }}>
                <span className="font-semibold" style={{ color: "#e3b341" }}>Apport personnel : </span>
                ce projet m&apos;a appris à faire évoluer un produit complet sur plusieurs
                semaines : améliorer l&apos;interface responsive, sécuriser les routes,
                intégrer des services externes et corriger les problèmes jusqu&apos;à
                obtenir une version déployable. Il m&apos;as aussi permis de mettre en
                pratique mes compétences en React/Next.js apprises durant mon stage
                avec AriMayi en BUT 2.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/DiarraKonte/PC-Module" target="_blank" rel="noopener noreferrer" className="font-mono text-xs hover:underline" style={{ color: "#58a6ff" }}>
                  Consulter le dépôt GitHub ↗
                </a>
                <a href="https://infobusiness-pc.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs hover:underline" style={{ color: "#3fb950" }}>
                  Voir le site ↗
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        <YearDivider
          year="BUT 3"
          period="2025 — 2026"
          title="Développement avancé et mise en production"
          color="#3fb950"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
            style={{ border: "1px solid #e6d8ca55", background: "#0d1117" }}
          >
            <div
              className="flex items-center justify-between gap-3 px-4 py-2 font-mono text-xs"
              style={{ background: "#161b22", borderBottom: "1px solid #30363d" }}
            >
              <span style={{ color: "#e6d8ca" }}>but-3/s5-otakugo.md</span>
              <span style={{ color: "#8b949e" }}>5 étudiants</span>
            </div>
            <div className="relative h-56 border-b" style={{ borderColor: "#30363d", background: "#161b22" }}>
              <Image src="/Otaku.png" alt="Interface de l'application OtakuGO" fill className="object-contain p-3" />
            </div>
            <div className="p-5 sm:p-7">
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#e6edf3" }}>
                S5 · OtakuGO
              </h3>
              <p className="text-sm leading-7 mb-5" style={{ color: "#c9d1d9" }}>
                Application Flutter de découverte d&apos;animés par swipe. Le quiz initial
                et les interactions alimentent un profil de préférences utilisé pour les
                recommandations, les favoris, la tier-list et les tournois.
              </p>
              <h4 className="font-mono text-xs mb-2" style={{ color: "#e3b341" }}>
                ### Contributions vérifiables
              </h4>
              <p className="text-sm leading-6 mb-5" style={{ color: "#8b949e" }}>
                J&apos;ai participé au développement collectif, puis pris en charge la
                publication de la version web, le workflow GitHub Actions et la
                documentation du dépôt. Les rapports montrent également mon travail sur
                l&apos;analyse de complexité, l&apos;indexation par genre et les pistes de
                réduction de la consommation énergétique.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Flutter", "Dart", "Provider", "JSON", "GitHub Actions", "Optimisation"].map((tool) => (
                  <span key={tool} className="font-mono text-[10px] px-2 py-1 rounded-full" style={{ color: "#e6d8ca", border: "1px solid #e6d8ca55" }}>
                    {tool}
                  </span>
                ))}
              </div>
              <a href="https://github.com/DiarraKonte/OtakuGO" target="_blank" rel="noopener noreferrer" className="font-mono text-xs hover:underline" style={{ color: "#58a6ff" }}>
                Dépôt GitHub et historique ↗
              </a>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-lg overflow-hidden"
            style={{ border: "1px solid #ffa65755", background: "#0d1117" }}
          >
            <div
              className="flex items-center justify-between gap-3 px-4 py-2 font-mono text-xs"
              style={{ background: "#161b22", borderBottom: "1px solid #30363d" }}
            >
              <span style={{ color: "#ffa657" }}>but-3/s6a01-voronoi.md</span>
              <span style={{ color: "#8b949e" }}>Humain vs IA</span>
            </div>
            <div className="relative h-56 border-b" style={{ borderColor: "#30363d", background: "#ffffff" }}>
              <Image src="/voronoi.png" alt="Générateur de diagramme de Voronoï" fill className="object-cover object-top" />
            </div>
            <div className="p-5 sm:p-7">
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#e6edf3" }}>
                S6 · Diagramme de Voronoï
              </h3>
              <p className="text-sm leading-7 mb-5" style={{ color: "#c9d1d9" }}>
                Développement d&apos;un générateur HTML, CSS et JavaScript important des
                coordonnées, calculant les cellules sur Canvas et exportant le résultat.
                Une seconde phase compare le développement manuel avec plusieurs IA,
                dont Mistral, puis vérifie les solutions avec Vitest et Playwright.
              </p>
              <h4 className="font-mono text-xs mb-2" style={{ color: "#e3b341" }}>
                ### Mes apports
              </h4>
              <p className="text-sm leading-6 mb-5" style={{ color: "#8b949e" }}>
                J&apos;ai documenté la version Mistral, ses corrections et ses tests,
                participé à la synthèse critique humain–IA et produit l&apos;étude
                individuelle sur les coûts économiques, la souveraineté et la
                géopolitique. La notice technique m&apos;a aussi conduit à analyser la
                distance euclidienne, la mise à l&apos;échelle, l&apos;export PNG et les
                limites de complexité.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["JavaScript", "Canvas", "Mistral", "Vitest", "Playwright", "Analyse critique"].map((tool) => (
                  <span key={tool} className="font-mono text-[10px] px-2 py-1 rounded-full" style={{ color: "#ffa657", border: "1px solid #ffa65755" }}>
                    {tool}
                  </span>
                ))}
              </div>
              <a href="https://github.com/manelbelaidouni/SAE_Voronoi_GroupeJ/tree/main/phase2/phase2-Mistral" target="_blank" rel="noopener noreferrer" className="font-mono text-xs hover:underline" style={{ color: "#58a6ff" }}>
                Voir la phase Mistral ↗
              </a>
            </div>
          </motion.article>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
            style={{ border: "1px solid #30363d", background: "#0d1117" }}
          >
            <div
              className="px-4 py-2 font-mono text-xs"
              style={{ background: "#161b22", borderBottom: "1px solid #30363d", color: "#58a6ff" }}
            >
              stage-iffp/README.md
            </div>
            <div className="p-5 sm:p-7">
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#e6edf3" }}>
                Stage BUT 3 · IFFP
              </h3>
              <p className="font-mono text-xs mb-5" style={{ color: "#8b949e" }}>
                Avril — juin 2026 · Assistant développeur
              </p>
              <p className="text-sm leading-7 mb-5" style={{ color: "#c9d1d9" }}>
                Ma mission principale a été de fiabiliser les services internes. J&apos;ai
                industrialisé la sauvegarde des espaces Google Drive, puis déployé un
                gestionnaire de mots de passe auto-hébergé avec segmentation des accès et
                automatisation de l&apos;intégration des collaborateurs.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  ["103 Go", "de données vérifiées"],
                  ["6 j / 7", "de couverture planifiée"],
                  ["2 systèmes", "documentés et transférables"],
                  ["4 axes", "sécurité, backup, web, support"],
                ].map(([value, label]) => (
                  <div key={value} className="p-3 rounded-md" style={{ background: "#161b22", border: "1px solid #30363d" }}>
                    <p className="font-mono text-lg font-bold" style={{ color: "#3fb950" }}>{value}</p>
                    <p className="text-xs mt-1" style={{ color: "#8b949e" }}>{label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-6" style={{ color: "#8b949e" }}>
                <span className="font-semibold" style={{ color: "#e6edf3" }}>Compétences mobilisées : </span>
                réaliser et optimiser les scripts, administrer les serveurs, gérer les
                données et les droits, conduire les mises en production et collaborer avec
                les équipes métier.
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-lg overflow-hidden"
            style={{ border: "1px solid #30363d", background: "#0d1117" }}
          >
            <div
              className="px-4 py-2 font-mono text-xs"
              style={{ background: "#161b22", borderBottom: "1px solid #30363d", color: "#e3b341" }}
            >
              stage-iffp/retrospective.md
            </div>
            <div className="p-5 sm:p-7 space-y-5">
              {[
                ["Points forts", "Autonomie, persévérance dans le diagnostic, documentation et capacité à transformer un besoin métier en solution exploitable."],
                ["Bonne surprise", "Découvrir que l'administration système et la cybersécurité complètent naturellement mon profil de développeur fullstack."],
                ["Vrais problèmes", "Des incidents difficiles à reproduire : DNS nocturne, permissions, encodage UTF-8 et particularités des raccourcis cloud."],
                ["Si c'était à refaire", "Je définirais dès la première semaine une matrice de tests, des indicateurs de fiabilité et une procédure de retour arrière."],
                ["Acquis pour la suite", "Observer avant d'agir, sécuriser les secrets, documenter en continu et valider chaque changement en conditions proches de la production."],
              ].map(([title, text]) => (
                <div key={title}>
                  <h4 className="font-mono text-xs mb-1.5" style={{ color: "#e3b341" }}>
                    ### {title}
                  </h4>
                  <p className="text-sm leading-6" style={{ color: "#c9d1d9" }}>{text}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-5">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
            style={{ border: "1px solid #30363d", background: "#0d1117" }}
          >
            <div
              className="px-4 py-2 font-mono text-xs"
              style={{ background: "#161b22", borderBottom: "1px solid #30363d", color: "#8b949e" }}
            >
              resultats/semestre-6.log
            </div>
            <div className="p-4 space-y-3">
              {ueResults.map((ue) => (
                <div key={ue.code} className="flex items-center justify-between gap-4 p-3 rounded-md" style={{ background: "#161b22" }}>
                  <div>
                    <p className="font-mono text-xs" style={{ color: "#58a6ff" }}>{ue.code} · {ue.label}</p>
                    <p className="text-[11px] mt-1" style={{ color: "#8b949e" }}>Rang {ue.rank}</p>
                  </div>
                  <span className="font-mono text-lg font-bold" style={{ color: "#e6edf3" }}>{ue.score}</span>
                </div>
              ))}
              <p className="text-[11px] leading-5 px-1" style={{ color: "#8b949e" }}>
                Résultats disponibles au moment de la mise à jour du portfolio.
              </p>
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg p-5 sm:p-7"
            style={{ border: "1px solid #3fb95055", background: "linear-gradient(135deg, #161b22, #0d1117)" }}
          >
            <p className="font-mono text-xs mb-2" style={{ color: "#3fb950" }}>
              {"// conclusion"}
            </p>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#e6edf3" }}>
              De bonnes bases, et encore beaucoup à construire
            </h3>
            <p className="text-sm leading-7 mb-4" style={{ color: "#c9d1d9" }}>
              Ces trois années m&apos;ont donné une vision plus complète du métier :
              développer, c&apos;est comprendre un besoin, faire des choix, tester, sécuriser,
              expliquer et maintenir. Ma force est ma capacité à apprendre rapidement et à
              rester engagé face à un problème complexe.
            </p>
            <p className="text-sm leading-7" style={{ color: "#c9d1d9" }}>
              Mon principal point de vigilance reste l&apos;anticipation : mieux cadrer les
              tests, les risques et les métriques avant l&apos;implémentation. Je souhaite
              poursuivre cette progression en cycle ingénieur à <span className="font-semibold" style={{ color: "#3fb950" }}>l&apos;ESIEA</span>, avec l&apos;objectif
              de devenir <span className="font-semibold" style={{ color: "#3fb950" }}>spécialiste en intelligence artificielle</span> capable de créer des
              systèmes intelligents et autonomes en fonction des besoins des utilisateurs et des entreprises.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBilan;
