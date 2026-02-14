// src/pages/Equipment.jsx
import { useState, useEffect } from "react";
import FocusTrap from "focus-trap-react";

const equipmentList = [
  {
  "name": "Bar Screens/Grit Removers",
  "description": "Top-tier bar screens and grit removers designed for sustainable and effective treatment systems.",
  "image": "https://via.placeholder.com/400x250?text=Bar+Screens%2FGrit+Removers",
  "features": [
    "Bar Screens remove larger objects that may damage pumps and other downstream equipment.",
    "Available in manual and automatic cleaning types.",
    "Grit causes wear and blockages in downstream units; these units minimize such issues.",
    "Optimally designed hydraulics ensure effective grit separation even at peak flows.",
    "Robust design guarantees reliable operation in tough and heavy grit conditions.",
    "Grit withdrawal section removes settled grit efficiently without disturbing the main settling area, minimizing water spillage during disposal."
  ]
}

,
  {
  name: "Oil Skimmers",
  description: "Efficient removal of floating oils and scum from effluent, designed as per API standards to enhance downstream treatment performance and enable oil recovery for reuse.",
  features: [
    "Removes separable oils including waste oils, vegetable oils, animal fats, froths, and dairy scum.",
    "Oil recovered can be reused as raw material, reducing waste and costs.",
    "Tank designed according to American Petroleum Institute (API) standards.",
    "Motorized trolley with four antifriction-bearing wheels travels on side rails with limit switches for precise operation.",
    "API type skimmer option available with top oil skimming and bottom sludge scraping."
  ]
}
,
  {
    name: "Clarifier/Clari-flocculators",
     description: "Robust MS construction clarifier mechanism designed for installation in RCC tanks, providing efficient solid-liquid separation with durable components and safe access.",
  features: [
    "Mild Steel (MS) construction mechanism suitable for RCC tank installation.",
    "Supports MS channel/beam with walkway, handrail, and toe guard spanning to tank center.",
    "Walkway made of MS chequered plate with pipe railing and toe guard for operator safety.",
    "Vertical shaft and rake arms made from MS, equipped with scraper blades and brass squeeze for effective sludge removal.",
    "Steel feed well for controlled influent distribution.",
    "Optional MS overflow weir plate to enhance overflow control.",
    "Holding down bolts securely fix structure to tank and fixtures.",
    "MS guards protect all moving parts for safety.",
    "Drive arrangement includes drive head, gearbox, motor, and chain sprocket for reliable operation."
  ]
},
  {
    name: "Side & Top Entry Mixers",
     description: "Efficient and energy-saving mixer designed specifically for anaerobic digesters, ensuring uniform mixing and reliable operation across diverse applications.",
  features: [
    "Provides uniform mixing within the digester for optimal process performance.",
    "Equipped with a positive tank shut-off device to prevent leakage.",
    "High-efficiency impeller design for effective mixing with minimal energy use.",
    "Durable epoxy paint finish for corrosion resistance.",
    "Low maintenance requirements reduce downtime and costs.",
    "Proven efficiency and reliability in operation.",
    "Allows bearing and seal replacement under full tank conditions, minimizing downtime.",
    "Impeller blades are bolted (not welded) for easy maintenance and replacement.",
    "Locking plates on both sides secure the impeller assembly firmly."
  ]
},
{
  name: "Surface Aerators",
  description: "Market-leading surface aerators offering a wide power range and high oxygen transfer efficiency, ideal for biological sludge aeration.",
  features: [
    "Available in a vast power range from 1.5 kW to 112 kW to suit various applications.",
    "High oxygenation capacity ranging from 2.0 to 2.2 kg O₂/kWh under standard conditions.",
    "Operates on pumping action: water is drawn at the center and propelled in a volute trajectory, creating fine water globules for effective aeration.",
    "Cone-type aerator with curved vanes in a conical skirt enabling smooth gliding of water, reducing blade erosion.",
    "Operates at low speeds (41 - 56 RPM) suitable for biological sludge aeration without damaging the biomass in MLSS.",
    "Low rotational speeds promote efficient oxygen transfer while preserving microbial health."
  ]
}
,
  {
  name: "Air Diffuser Membranes",
  description: "Polymer-based air diffuser membranes designed for energy-efficient oxygen transfer in water and wastewater treatment, enhancing biological oxidation of ammoniacal and nitrite nitrogen.",
  features: [
    "Made from durable polymer materials for long-lasting performance.",
    "Provides superior oxygen transfer efficiency, reducing energy consumption.",
    "Enhances biological oxidation processes for ammoniacal and nitrite nitrogen removal.",
    "Ideal for water and wastewater treatment plants aiming for cost-effective aeration."
  ]
}
,
  {
  name: "Sludge Centrifuges",
  description: "High-performance sludge centrifuges designed to achieve superior solids capture rates, often without the need for polymer additives.",
  features: [
    "Large diameter-to-length ratio of 1:4.2 or more for enhanced separation.",
    "Centrifugal acceleration ranging from 3000 to 5200 x 'g' for efficient dewatering.",
    "Customized designs tailored to specific client requirements.",
    "Combines economy with high-quality performance.",
    "Minimal operator attendance required, reducing labor costs.",
    "Achieves highest cake dryness, significantly lowering disposal expenses.",
    "Equipped with various wear protection systems for extended service life.",
    "Simple, service-friendly design for easy maintenance.",
    "Low specific power consumption per unit of product processed.",
    "Features scroll drive systems with automatic differential speed control.",
    "Drive solutions include frequency converters for optimized operation.",
    "Advanced control units available for all drive configurations."
  ]
}
,
  {
  name: "Fixed Film Media / PVC Media",
  description: "High-efficiency PVC media for fixed film reactors like trickling filters and bio-filters, widely used for biological oxidation of organic wastes.",
  features: [
    "Used in fixed film digesters and aerobic trickling filters for effective wastewater treatment.",
    "Supports biological growth that converts dissolved organic waste into carbon dioxide, nitrates, water, and biological solids.",
    "Treated solids are later removed by clarification processes.",
    "Requires only half the land area compared to activated sludge basins and one-quarter compared to oxidation ditches.",
    "Composed of lightweight, self-supporting plastic modules that are cost-effective and easy to install and maintain.",
    "Globally recognized reliable technology for organic waste oxidation."
  ]
}
,
  {
  name: "Tube Settlers",
  description: "PVC-based tube settlers designed to minimize surface area requirements in clarifiers by enhancing suspended solids settling efficiency.",
  features: [
    "Reduces large surface area needs of conventional clarifiers.",
    "Made from durable PVC for long-lasting performance.",
    "Can be retrofitted in existing or new settling tanks.",
    "Increases effective settling area up to 5.5 m² per m² of tank area (for 500 mm deep modules).",
    "Significantly decreases particle settling distance, improving clarifier efficiency.",
    "Enhances particle agglomeration and growth for better settling.",
    "V-shaped tubes and counter-current flow aid particle contact and settling.",
    "Hexagonal-chevron configuration is a proven superior design for settling applications."
  ]
}
,
  {
  name: "Lamella Clarifiers",
  description: "Modular wastewater settling units using inclined plates or tube packs to maximize settling surface area and maintain laminar flow for efficient sedimentation.",
  features: [
    "Compact sedimentation tank size due to inclined plate design.",
    "Effective settling occurs on media surface area, enhancing capacity.",
    "Laminar flow regime maintained between media layers for better separation.",
    "Modular design allows easy future scale-up.",
    "Sludge handling via scraper mechanism or hopper bottom tank options.",
    "Plates help prevent sludge carry-over, improving effluent quality.",
    "High efficiency separation of suspended solids."
  ]
}
,
  {
    name: "Kitchen Waste Biogas Plant",
    description: "Eco-friendly kitchen waste biogas plants generating renewable energy from organic waste.",
    image: "https://via.placeholder.com/400x250?text=Kitchen+Waste+Biogas+Plant",
  },
  {
    name: "Package Treatment Plant",
    description: "Compact package treatment plants for quick deployment and effective wastewater treatment.",
    image: "https://via.placeholder.com/400x250?text=Package+Treatment+Plant",
  },
];


const Equipment = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    // ...rest of code unchanged

<section
  aria-labelledby="equipment-heading"
  style={{
    maxWidth: "700px",
    margin: "2rem auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "0 1rem",
  }}
>
  <h2
    id="equipment-heading"
    style={{
      fontSize: "2rem",
      fontWeight: "900",
      marginBottom: "1.5rem",
      textAlign: "center",
      color: "#1e4d2b", // darker green heading
    }}
  >
    🌿 Equipment We Provide
  </h2>
  <ul
    style={{
      listStyle: "none",
      padding: 0,
      margin: 0,
    }}
  >
    {equipmentList.map((equipment, idx) => (
      <li
        key={idx}
        tabIndex={0}
        role="button"
        aria-expanded={expandedIndex === idx}
        onClick={() => toggleExpand(idx)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleExpand(idx);
          }
        }}
        style={{
          cursor: "pointer",
          padding: "1rem 1.5rem",
          border: "1px solid #264d26", // darker border
          borderRadius: "8px",
          marginBottom: "1rem",
          backgroundColor: expandedIndex === idx ? "white" : "white", // darker bg on expand
          boxShadow:
            expandedIndex === idx
              ? "0 2px 12px rgba(80, 141, 90, 0.6)" // darker shadow
              : "none",
          outline: "none",
          color: "#1a3a1b", // text color dark green
        }}
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {equipment.name}
          <span
            aria-hidden="true"
            style={{
              fontSize: "1.5rem",
              transform: expandedIndex === idx ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.2s ease",
              color: "#1e4d2b", // darker plus icon
              userSelect: "none",
            }}
          >
            +
          </span>
        </div>

        {expandedIndex === idx && (
          <div
            style={{
              marginTop: "1rem",
              textAlign: "left",
              color: "#2e472e", // slightly lighter dark green for details
              lineHeight: "1.5",
            }}
          >
            {equipment.image && (
              <img
                src={equipment.image}
                alt={equipment.name}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "6px",
                  marginBottom: "1rem",
                  boxShadow: "0 3px 8px rgba(16, 64, 24, 0.4)", // subtle darker shadow
                }}
                loading="lazy"
              />
            )}
            <p style={{ marginBottom: "1rem", fontStyle: "italic" }}>
              {equipment.description}
            </p>
            {equipment.features && (
              <ul
                style={{
                  paddingLeft: "1.25rem",
                  listStyleType: "disc",
                  marginTop: 0,
                }}
              >
                {equipment.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem" }}>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </li>
    ))}
  </ul>
</section>
  );
};


export default Equipment;
