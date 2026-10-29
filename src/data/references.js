export const primaryResearchReference = {
  authors: 'Sekar, Mahendran, & Abd Rahim, Farah Nurliyana',
  year: '2017',
  title: 'Formulation and Evaluation of Novel and Natural Mosquito Repellent Liquid to Prevent Dengue Mosquitoes',
  journal: 'Annual Research & Review in Biology',
  volume: '18(1)',
  pages: '1–6',
  doi: 'https://doi.org/10.9734/ARRB/2017/36834',
  keyFindings: [
    'Investigated methanolic extracts (10% each) and essential oils (0.1% each) of Cinnamon, Clove, and Lemongrass.',
    'Formulated liquid using mechanical stirring for one hour in ethanol (25 mL), hexane (1 mL), and distilled water (q.s. 100 mL).',
    'Reported a mean repellency rate of 66.67% against adult Aedes aegypti mosquitoes under specified lab conditions.'
  ],
  vitalDistinction:
    'Distinction from HERBAGUARD: This paper utilized Clove (Syzygium aromaticum), Cinnamon, and Lemongrass. It did not test Neem (Azadirachta indica). The reported 66.67% repellency rate and physicochemical properties are unique to their clove-containing formula and must NOT be attributed to the HERBAGUARD concept. The HERBAGUARD project adapts this academic foundation as a comparative baseline while exploring neem as an alternative bio-active agent.'
};

export const additionalResearchRequired = [
  {
    topic: 'Neem-Specific Repellency & Dosing Trials',
    summary:
      'Quantify the minimal effective concentration (MEC) of Azadirachta indica extract against Aedes aegypti, establishing whether limonoid content (azadirachtin) provides sustained contact and spatial deterrence comparable or superior to the published clove baseline.'
  },
  {
    topic: 'Safety & Dermatological Patch Testing',
    summary:
      'Evaluate human dermal irritation, repeat-insult patch test (HRIPT), and phototoxicity profiles. Ensure cinnamaldehyde levels remain below dermatological sensitization thresholds (IFRA safety limits) and assess neem extract tolerability.'
  },
  {
    topic: 'Formulation Stability & Non-Toxic Carrier Design',
    summary:
      'Replace industrial laboratory solvents (hexane, methanol) with green, skin-compatible solubilizers (e.g., polyglyceryl esters, vegetable glycerin, or botanical hydrosols). Conduct accelerated freeze-thaw and centrifugal stability assays.'
  },
  {
    topic: 'Tri-Botanical Synergy Bioassays',
    summary:
      'Investigate whether combining Neem, Lemongrass, and Cinnamon produces synergistic, additive, or antagonistic repellency kinetics using standardized Y-tube olfactometers and arm-in-cage protocols.'
  },
  {
    topic: 'Packaging Compatibility & Terpene Permeation',
    summary:
      'Perform long-term container interaction studies measuring sorption into pump gaskets, UV light degradation through amber glass, and evaporative terpene loss over 6-month shelf evaluations.'
  },
  {
    topic: 'Regulatory & Labelling Compliance Framework',
    summary:
      'Review compliance under international biocidal product regulations (e.g., US EPA 25(b) minimum risk pesticides, EU Biocidal Products Regulation BPR, and national drug/cosmetics acts) for botanical repellent claims.'
  }
];

export const supplementaryVerifiedReferences = [
  {
    authors: 'Sharma, V. P., Ansari, M. A., & Razdan, R. K.',
    year: '1993',
    title: 'Mosquito repellent action of neem (Azadirachta indica) oil',
    journal: 'Journal of the American Mosquito Control Association',
    volume: '9(3)',
    pages: '359–360',
    link: 'https://pubmed.ncbi.nlm.nih.gov/8245949/',
    relevance: 'Benchmark study establishing baseline field repellency of neem oil formulations against anopheline mosquitoes.'
  },
  {
    authors: 'Kumar, S., Wahab, N., & Warikoo, R.',
    year: '2011',
    title: 'Bioefficacy of Mentha piperita and Cymbopogon citratus essential oils against dengue vector Aedes aegypti L.',
    journal: 'Parasitology Research',
    volume: '108(4)',
    pages: '1073–1078',
    doi: 'https://doi.org/10.1007/s00436-010-2150-1',
    relevance: 'Demonstrates the adulticidal and repellent efficacy of volatile monoterpenes in Cymbopogon citratus against dengue vectors.'
  },
  {
    authors: 'World Health Organization (WHO)',
    year: '2009',
    title: 'Guidelines for efficacy testing of mosquito repellents for human skin',
    journal: 'WHO Pesticide Evaluation Scheme (WHOPES)',
    volume: 'WHO/HTM/NTD/WHOPES/2009.4',
    pages: '1–30',
    link: 'https://www.who.int/publications/i/item/WHO-HTM-NTD-WHOPES-2009.4',
    relevance: 'Standardized international protocol for laboratory cage and field efficacy bioassays on topical repellents.'
  }
];
