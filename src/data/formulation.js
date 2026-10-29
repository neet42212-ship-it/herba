export const publishedResearchFormulation = {
  title: 'Published Research Formulation (Table 1, Page 3)',
  paperCitation: 'Sekar, M., & Abd Rahim, F. N. (2017). Annual Research & Review in Biology, 18(1), 1–6.',
  doi: 'https://doi.org/10.9734/ARRB/2017/36834',
  targetVector: 'Aedes aegypti (Dengue mosquito vector)',
  reportedMeanRepellency: '66.67%',
  components: [
    {
      component: 'Methanolic Extracts (Cinnamon, Clove, Lemongrass)',
      amount: '10% each plant extract',
      role: 'Active botanical crude fractions containing non-volatile phytochemicals'
    },
    {
      component: 'Essential Oils (Cinnamon, Clove, Lemongrass)',
      amount: '0.1% each essential oil',
      role: 'Aromatic volatile terpenes for spatial vapor deterrence'
    },
    {
      component: 'Hexane',
      amount: '1 mL',
      role: 'Non-polar laboratory co-solvent for lipid fraction dispersion'
    },
    {
      component: 'Absolute Ethanol',
      amount: '25 mL',
      role: 'Organic solvent and co-solubilizer'
    },
    {
      component: 'Distilled Water',
      amount: 'Up to 100 mL',
      role: 'Aqueous diluent / base vehicle'
    }
  ],
  mixingProcedure:
    'The published study mixed the extracts and essential oils into ethanol and hexane, diluted with distilled water to 100 mL, and subjected the blend to continuous mechanical stirring for 1 hour at room temperature.',
  criticalDisclaimer:
    'Notice: The published research formulation utilized Clove (Syzygium aromaticum), NOT Neem (Azadirachta indica). The reported 66.67% mean repellency and experimental stability reflect that specific cinnamon-clove-lemongrass formulation under laboratory bioassay conditions. Neither this formulation nor the 66.67% figure can be claimed for the proposed neem-based HERBAGUARD concept.',
  solventWarning:
    'Important Safety Note: Methanol and hexane are industrial extraction solvents that pose human toxicity risks. In a consumer or topical repellent, extracts must undergo complete solvent removal (via rotary vacuum evaporation) and reconstitution in skin-safe, dermatologically compliant cosmetic vehicles.'
};

export const proposedHerbaguardFormulation = {
  title: 'Proposed HERBAGUARD Formulation — Experimental Concept',
  subtitle: 'A botanical academic hypothesis exploring Neem, Lemongrass, and Cinnamon',
  conceptStatus: 'Experimental Concept (Pre-Clinical Academic Proposal)',
  components: [
    {
      ingredient: 'Neem Extract / Characterized Active Fraction',
      botanicalName: 'Azadirachta indica',
      proposedAmount: 'To be determined through formulation trials',
      functionalHypothesis:
        'Provides sustained insect antifeedant action and mosquito sensory disorientation via limonoids (azadirachtin). Proposed to substitute clove.',
      validationNeeded: 'Extraction yield, solvent residue limits, skin non-irritancy threshold, and olfactory masking ratio.'
    },
    {
      ingredient: 'Lemongrass Essential Oil',
      botanicalName: 'Cymbopogon citratus',
      proposedAmount: 'To be determined through formulation trials',
      functionalHypothesis:
        'Provides immediate volatile spatial deterrence through high citral content, masking human carbon dioxide and thermal attraction cues.',
      validationNeeded: 'Evaporation kinetics, sensory longevity, synergistic ratio with cinnamon.'
    },
    {
      ingredient: 'Cinnamon Essential Oil / Extract',
      botanicalName: 'Cinnamomum cassia',
      proposedAmount: 'To be determined through formulation trials',
      functionalHypothesis:
        'Contributes cinnamaldehyde for multi-receptor deterrence, larvicidal synergy, and natural botanical antimicrobial stabilization.',
      validationNeeded: 'Safe dermal threshold (cinnamaldehyde sensitization limit) and emulsification stability.'
    },
    {
      ingredient: 'Compatible Carrier / Botanical Solubilizer Base',
      botanicalName: 'Cosmetic-grade green vehicle (e.g., vegetable glycerin / plant-derived solubilizer / purified water)',
      proposedAmount: 'To be determined through formulation trials',
      functionalHypothesis:
        'Replaces harsh toxic solvents (methanol, hexane) with a gentle, skin-compatible or spatial-safe emulsion matrix.',
      validationNeeded: 'Phase separation resistance, cloud point, droplet size distribution.'
    },
    {
      ingredient: 'Packaging-Compatible Protective Container',
      botanicalName: 'Amber Type III borosilicate / soda-lime glass with phenolic mist atomizer',
      proposedAmount: '1 Unit (100 mL nominal capacity)',
      functionalHypothesis:
        'Filters actinic UV radiation to prevent photo-oxidation of delicate terpenes and cinnamaldehyde.',
      validationNeeded: 'Extract-liner compatibility, spray pattern atomization, seal integrity.'
    }
  ],
  academicNote:
    'To maintain scientific rigor, exact percentages are NOT fabricated. Determining the ideal concentration requires multi-stage cage olfactometer bioassays, phase equilibrium testing, and dermatological patch testing.'
};

export const formulationFlowchartSteps = [
  {
    step: 1,
    title: 'Ingredient Selection',
    subtitle: 'Botanical Identification',
    description: 'Systematic selection of Neem, Lemongrass, and Cinnamon based on ethnobotanical literature and phytochemical synergy hypotheses.',
    iconName: 'Leaf',
    category: 'Sourcing'
  },
  {
    step: 2,
    title: 'Botanical Identification & Quality Checking',
    subtitle: 'Taxonomy Verification',
    description: 'Herbarium voucher verification, sensory evaluation, moisture content testing, and screening for extraneous matter.',
    iconName: 'CheckCircle2',
    category: 'Quality Control'
  },
  {
    step: 3,
    title: 'Preparation & Extraction of Plant Actives',
    subtitle: 'Characterized Sourcing',
    description: 'Green solvent extraction / steam distillation followed by GC-MS chromatographic profiling to verify active marker compounds.',
    iconName: 'FlaskConical',
    category: 'Phytochemistry'
  },
  {
    step: 4,
    title: 'Selection of Compatible Formulation Base',
    subtitle: 'Green Carrier Design',
    description: 'Screening skin-friendly biodegradable solubilizers to eliminate toxic industrial solvents like hexane and methanol.',
    iconName: 'Layers',
    category: 'Formulation'
  },
  {
    step: 5,
    title: 'Controlled Laboratory Protocol Mixing',
    subtitle: 'Homogenization Protocol',
    description: 'Regulated low-temperature mixing and magnetic/mechanical agitation to achieve uniform micellar dispersion without volatile thermal degradation.',
    iconName: 'RotateCw',
    category: 'Laboratory'
  },
  {
    step: 6,
    title: 'Stability & Compatibility Assessment',
    subtitle: 'Accelerated Aging Trials',
    description: 'Centrifuge stress testing, thermal cycling (4°C to 45°C), pH monitoring, and visual inspection for phase separation or precipitation.',
    iconName: 'Hourglass',
    category: 'Analytical Testing'
  },
  {
    step: 7,
    title: 'Safety & Efficacy Evaluation',
    subtitle: 'Arm-in-Cage / Olfactometer',
    description: 'In-vitro cage olfactometer repellency screening against target mosquitoes, followed by human patch safety testing (ethics-approved).',
    iconName: 'ShieldAlert',
    category: 'Bioassay'
  },
  {
    step: 8,
    title: 'Packaging Compatibility Testing',
    subtitle: 'Container & Closure Integrity',
    description: 'Evaluation of amber glass UV absorption, spray mechanism atomization performance, and gasket compatibility with volatile essential oils.',
    iconName: 'PackageCheck',
    category: 'Packaging'
  },
  {
    step: 9,
    title: 'Final Evaluation & Academic Documentation',
    subtitle: 'Project Technical Dossier',
    description: 'Synthesis of analytical data, smart label QR verification, regulatory gap analysis, and compilation of the college engineering thesis.',
    iconName: 'FileText',
    category: 'Documentation'
  }
];
