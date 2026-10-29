import neemImg from '../assets/neem.jpg';
import lemongrassImg from '../assets/lemongrass.png';
import cinnamonImg from '../assets/cinnamon.webp';
import cloveImg from '../assets/clove1.jpg';
import sodiumBenzoateImg from '../assets/sodium.jpg';
import span80Img from '../assets/span.jpg';
import distilledWaterImg from '../assets/dis.jpg';

export const ingredientsData = [
  {
    id: 'neem',
    commonName: 'Neem Oil',
    botanicalName: 'Azadirachta indica',
    family: 'Meliaceae',
    image: neemImg,
    potentialRole: 'Bioactive plant extract & insect deterrence',
    keyActives: 'Azadirachtin, Salannin, Nimbin, Gedunin',
    shortDescription:
      'A venerable botanical traditionally studied for diverse biological and insect-deterrent properties. In HERBAGUARD, neem is the candidate botanical proposed to substitute clove for enhanced longevity and repellent diversity.',
    detailedText:
      'Neem has a long history of utilization in South Asian traditional ethnobotany and agricultural pest suppression. Its bioactive limonoid constituents, predominantly azadirachtin and salannin, function as insect antifeedants and sensory deterrents rather than synthetic neurotoxins.',
    researchNote: {
      type: 'Independent Evaluation Required',
      text: 'The supplied 2017 reference paper (Sekar & Abd Rahim) investigated cinnamon, clove, and lemongrass; it did not evaluate neem. Consequently, neem’s extraction yield, solvent compatibility, skin safety thresholds, olfactory acceptance, and specific repellency percentages against Aedes aegypti cannot be inferred from that paper and must be experimentally quantified through dedicated trials.',
    },
    characteristics: [
      { label: 'Plant Part', value: 'Mature leaves & seed kernel' },
      { label: 'Primary Volatiles', value: 'Limonoids & sulphur-containing compounds' },
      { label: 'Sensory Profile', value: 'Earthy, bitter, intensely herbal' },
      { label: 'Project Status', value: 'Proposed substitute for clove; pending bioassay' }
    ],
    quantity: '2 ml',
    functionCategory: 'Active Pharmaceutical Ingredient / API'
  },
  {
    id: 'lemongrass',
    commonName: 'Lemongrass Oil',
    botanicalName: 'Cymbopogon citratus',
    family: 'Poaceae',
    image: lemongrassImg,
    potentialRole: 'Volatile vapor repellent & citrus scent masking',
    keyActives: 'Citral (Geranial & Neral), Myrcene, Geraniol',
    shortDescription:
      'An aromatic tropical grass whose volatile essential oil is celebrated for strong olfactory masking and rapid spatial mosquito deterrence against foraging vectors.',
    detailedText:
      'Lemongrass essential oil contains high concentrations of oxygenated monoterpenes—notably citral isomers. When vaporized, these aromatic molecules interfere with the sensory olfactory receptor neurons of mosquitoes, masking host-emitted carbon dioxide and thermal attraction cues.',
    researchNote: {
      type: 'Published Reference Component',
      text: 'Lemongrass was evaluated in the 2017 study by Sekar & Abd Rahim as both a 10% methanolic plant extract and 0.1% essential oil. The published findings confirmed its active contribution to the formulation’s spatial repellent vapor and sensory deterrence under controlled room-temperature bioassays.',
    },
    characteristics: [
      { label: 'Plant Part', value: 'Fresh aromatic stalks & aerial leaves' },
      { label: 'Primary Volatiles', value: 'Citral (up to 75-85%), Geraniol, Nerol' },
      { label: 'Sensory Profile', value: 'Crisp, bright, uplifting lemony aroma' },
      { label: 'Project Status', value: 'Retained from published research framework' }
    ],
    quantity: '1 ml',
    functionCategory: 'API and fragrance'
  },
  {
    id: 'cinnamon',
    commonName: 'Cinnamon Extract',
    botanicalName: 'Cinnamomum cassia',
    family: 'Lauraceae',
    image: cinnamonImg,
    potentialRole: 'Synergistic spatial repellent & botanical preservative',
    keyActives: 'Trans-Cinnamaldehyde, Eugenol, Cinnamic Acid',
    shortDescription:
      'An intensely aromatic botanical bark producing essential oils with demonstrated insect-repellent, larvicidal, and natural preservative qualities.',
    detailedText:
      'Cinnamon essential oil and extracts are distinguished by high levels of cinnamaldehyde. In botanical pest research, cinnamaldehyde exhibits strong repelling properties and synergistic behavior when blended with monoterpenes like citral, while also possessing mild natural antioxidant stability.',
    researchNote: {
      type: 'Published Reference Component',
      text: 'Included in the 2017 study (Sekar & Abd Rahim) at 10% methanolic extract and 0.1% essential oil. The paper’s three-botanical mixture demonstrated a mean repellency of 66.67%. Its synergistic pairing with neem and lemongrass in HERBAGUARD represents an experimental hypothesis that requires custom concentration optimization.',
    },
    characteristics: [
      { label: 'Plant Part', value: 'Dried inner bark & leaf twigs' },
      { label: 'Primary Volatiles', value: 'Cinnamaldehyde (65–80%), Eugenol' },
      { label: 'Sensory Profile', value: 'Warm, sweet-spicy, lingering balsamic base' },
      { label: 'Project Status', value: 'Retained from published research framework' }
    ],
    quantity: '1 ml',
    functionCategory: 'API'
  },
  {
    id: 'clove',
    commonName: 'Clove Oil',
    botanicalName: null,
    family: null,
    image: cloveImg,
    potentialRole: 'Additional repellent component',
    keyActives: 'Eugenol',
    shortDescription: 'Clove oil provides strong aromatic repellent activity.',
    detailedText: 'Clove oil is a traditional botanical repellent rich in eugenol, contributing to spatial deterrence.',
    researchNote: { type: 'N/A', text: '' },
    characteristics: [],
    quantity: '4 ml',
    functionCategory: 'API'
  },
  {
    id: 'sodium_benzoate',
    commonName: 'Sodium Benzoate',
    botanicalName: null,
    family: null,
    image: sodiumBenzoateImg,
    potentialRole: 'Preservative',
    keyActives: 'Sodium benzoate',
    shortDescription: 'Preserves formulation stability.',
    detailedText: 'Acts as a preservative to inhibit microbial growth.',
    researchNote: { type: 'N/A', text: '' },
    characteristics: [],
    quantity: '0.1 g',
    functionCategory: 'Preservative'
  },
  {
    id: 'span80',
    commonName: 'Span 80',
    botanicalName: null,
    family: null,
    image: span80Img,
    potentialRole: 'Surfactant',
    keyActives: 'Sorbitan monooleate',
    shortDescription: 'Improves ingredient miscibility.',
    detailedText: 'Acts a surfactant to stabilize emulsions.',
    researchNote: { type: 'N/A', text: '' },
    characteristics: [],
    quantity: '4–5 ml',
    functionCategory: 'Surfactant'
  },
  {
    id: 'distilled_water',
    commonName: 'Distilled Water',
    botanicalName: null,
    family: null,
    image: distilledWaterImg,
    potentialRole: 'Solvent / Base',
    keyActives: '',
    shortDescription: 'Dilutes the formulation to final volume.',
    detailedText: 'Provides the aqueous base for the final product.',
    researchNote: { type: 'N/A', text: '' },
    characteristics: [],
    quantity: 'q.s.',
    functionCategory: 'Solvent/Base'
  }
];
