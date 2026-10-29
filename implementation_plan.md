# Add New Ingredients and Formulation Details

## Goal
Update the HerbaGuard frontend to display a full list of seven ingredients with quantities, functions, and images, and add a dedicated "HerbaGuard Formulation" section showing the complete formulation.

## User Review Required
- Confirm the visual style for the new ingredient cards (e.g., keep existing card design, add quantity and function badge).  
- Approve the addition of a new `FormulationList` component/table to the Formulation section.

---
### Data Updates
- **[MODIFY] [ingredients.js](file:///c:/Users/HP/Downloads/Navneet/src/data/ingredients.js)**
  - Add `quantity` and `functionCategory` fields to each ingredient object.
  - Add new ingredient objects for Clove Oil, Sodium Benzoate, Span 80, and Distilled Water with the supplied quantities and functions.
  - Update existing Neem, Lemongrass, Cinnamon entries to include their quantities and function categories.

---
### Component Updates
- **[MODIFY] [IngredientCard.jsx](file:///c:/Users/HP/Downloads/Navneet/src/components/IngredientCard.jsx)**
  - Display a badge for `functionCategory` (e.g., Active Ingredient, Fragrance, Preservative, Surfactant, Solvent/Base).
  - Show the `quantity` beneath the name.
  - Ensure layout remains responsive and matches the current botanical theme.

- **[NEW] [FormulationList.jsx](file:///c:/Users/HP/Downloads/Navneet/src/components/FormulationList.jsx)**
  - Render a simple responsive table/grid listing each ingredient, its quantity, and its function.
  - Use the same color palette and typography as the rest of the site.

- **[MODIFY] [FormulationSection.jsx](file:///c:/Users/HP/Downloads/Navneet/src/sections/FormulationSection.jsx)**
  - Import and embed the new `FormulationList` component under the existing header, titled "HerbaGuard Formulation".
  - Keep the existing comparative table/flowchart unchanged.

---
### Asset Management
- Place new ingredient images (e.g., `clove.png`, `sodium_benzoate.png`, `span80.png`, `distilled_water.png`) in `src/assets/`.
- Update image paths in the new ingredient objects (`image: '../assets/clove.png'`, etc.).

---
### Verification Plan
- Run `npm run dev` and open the site locally.
- Verify that the Ingredients page shows six cards (three original + three new) with correct quantities, function badges, and images.
- Verify that the Formulation section displays a table with all seven ingredients and their quantities.
- Test on desktop width and a mobile viewport (e.g., 375 px) to ensure responsive layout.

---
### Open Questions
> [!IMPORTANT]
> Do you want each ingredient card to include an icon in addition to the image, or is the image sufficient?

---
### Timeline
- Data and component updates: ~30 min.
- Asset copying and UI polishing: ~15 min.
- Local testing and bug fixing: ~15 min.

Please review and approve the plan so we can proceed.
