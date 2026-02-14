import React, { useState } from "react";
import "./Clients.css"; // Make sure to create this file or add styles inline

const clients = {
  "Distillery – CSTR Digesters, Thermophilic Digesters, Fixed Film Digesters & UASB": [
    "Aska Co-Op. Sugar Ind; Orissa",
    "Asmoli Sugar Mills Ltd; Asmoli, UP",
    "Aurangabad Distilleries Pvt. Ltd; MS",
    "Bajaj Hindusthan Ltd; Khambarkheda, UP",
    "Bhairavnath Sugars Ltd, Sonari, MS",
    "Busia Sugar & Allied Ltd; Uganda",
    "Bwendero Ltd. Uganda",
    "Cavite Biofuels Inc, Philippines",
    "Chatrapati Shahu SSK, Kagal, MS",
    "Core Green Ltd; KS",
    "Dhampur Sugar Mills Ltd; UP",
    "Dr. Babasaheb Ambedkar SSK Ltd; MS",
    "Fabtech Proj. & Engrs Ltd; Pune, MS",
    "Gangamai Ind Ltd; MS",
    "Gayatri Sugar Mills Ltd; Adloor, Yellareddy",
    "Ghodganga SSK Ltd; Shirur, MS",
    "GMR Technologies, Sankili, Srikakulam",
    "Godavari Biorefineries Ltd; Sameerwadi, KS",
    "Hoima Sugars Ltd; Uganda",
    "Jain Distilleries, Bijnor, UP",
    "Karthika Agro Ltd;",
    "Kedarnath Distillery Ltd; Baglkot, KS",
    "Kibos Distillers Ltd; Kenya",
    "Manjara SSK Ltd; Latur, MS",
    "NIVL Limited, Vietnam",
    "NSL Sugar Ltd; Koppa, KS",
    "Oasis Alcohol Ltd; Satara, MS",
    "Pak Ethanol, Pakistan",
    "Parli Vaidyanath SSK Ltd; Parli, MS",
    "RBNSS Ltd. Lacksar, Uttarakhand",
    "Rena SSK Ltd; Latur, MS",
    "Riga Sugar Ltd; Bihar",
    "Saikrupa SSK Ltd; Shrigonda, MS",
    "SCOUL, Uganda",
    "Shamnur Sugars Ltd; Dawangiri, KS",
    "Shree Makai SSK Ltd; Solapur, MS",
    "Simbhaoli Sugars Ltd; UP",
    "Som Distilleries Pvt Ltd; Bhopal, MP",
    "Sonhira SSK Ltd; Sangli, MS",
    "SSML Ltd; Chilwaria; UP",
    "Tern Distilleries Pvt. Ltd. Thallepalem, AP",
    "The Seksaria Sugar Ltd; Biswan, UP",
    "United Spirits, Nasik, MS",
    "United Spirits, Goa",
    "Yedeshwari Agro SSK Ltd. MS"
  ],
  "Distillery – Thermophilic Digesters": ["SCBI, Philippines"],
  "Distillery – Fixed Film Digesters": ["Kesar Enterprises, Baheri, UP"],
  "Distillery – UASB": [
    "Globus Spirits, West Bengal",
    "Globus Spirits, Bihar",
    "Piccadily Agro Industries Ltd, Karnal"
  ],
  "Distillery – CPU - UASB": [
    "Bhaurao Chavan SSK Yelegaon",
    "Bhausaheb Thorat SSK Ltd, MS",
    "Dharni Sugars",
    "Fabtech Projects & Engrs, MS",
    "Hemes Distillery, KS",
    "Jarendeshwar Sugar Mill, Kopergaon",
    "Karthika Agro Ltd.",
    "Kedarnath Distillery, KS",
    "Kibos Distillers Ltd, Kisumu, Kenya",
    "Kisan Sahakari Chini Mills, Azamgarh",
    "Kopargaon SSK Ltd, Gautamnagar",
    "Krantiagrani Dr. G.D. SSK, Kundal, MS",
    "Malegaon SSK Ltd, Baramati",
    "Modern Distillers Uganda",
    "NSL Sugars Ltd Unit II, Gulbarga",
    "Pearl Distillery, AP",
    "RBNSS Ltd. Laksar",
    "Riga Sugar Company Ltd",
    "S V Sugar Mills Ltd, Tamilnadu",
    "Shree Makai SSK, Bhilarwadi",
    "Shree Renuka SL, Athani, KS",
    "Shri Dnyaneshwar SSK Newasa",
    "Shri Sai Priya Sugars Ltd, Maigur",
    "Sonhira SSK, MS",
    "Vitthalrao Shinde SSK, Gangamainagar"
  ],
  "Distillery – CPU - CSTR": [
    "Balrampur Chini Mils Ltd, Unit- Babhnan",
    "Bhalkeshwar Sugars Ltd, KS",
    "Kesar Enterprises Limited"
  ],
  "Distillery – CPU – BioFilter": [
    "Haryana Liquors, Karnal, Haryana",
    "Simbholi Sugars Limited, Chilwaria"
  ],
  "Brewery, Food & Beverages": {
    Brewery: [
      "Cheers Breweries, KS",
      "Mohan Gold Water Breweries; UP",
      "ITC Trichy; TN",
      "United Breweries, Chamundi, KS",
      "SICA Breweries; Pondecherry",
      "Woodpecker Breweries Ltd , Hassan"
    ],
    Food: [
      "Abbott Cold Stores Pvt Ltd; Bassi, Punjab",
      "Ceylon Cold Storage, Sri Lanka",
      "Modern Foods Ltd, Nagpur, MS",
      "Mohan Rice Mills; Raipur, CG",
      "Mohan Gold Water Breweries; UP",
      "ITC Trichy; TN",
      "Mondelez Foods, MP",
      "Tata Coffee Ltd; AP",
      "Yashwant Glucose Ltd; MS"
    ],
    Beverages: [
      "Varun Bevarages Ltd, UP",
      "Varun Beverages Ltd.; Goa",
      "Varun Beverages; Sri Lanka",
      "Varun Beverages; Zambia"
    ]
  },
  "Sugar & Sugar - CPU": {
    Sugar: [
      "Hasanpur Sugar Mills",
      "Bharat Sugar Mills, Bihar",
      "Hemaurs Technologies Ltd, Hyderabad",
      "Core Green Sugar , KS",
      "Godavari Biorefineries Ltd, KS",
      "NSL Sugar, KS",
      "Jay Mahesh Sugar , MS",
      "Sadashiva Sugars Ltd, KS",
      "KPR sugar Mills , KS",
      "Coromandel Sugars KS",
      "UniWorld Sugars Bhuj, GS",
      "Kamuli Sugars, Uganda",
      "SCOUL, Lugazi, Uganda",
      "OM Sugars Limited, Belgum",
      "Indian Sugar, Barshi, Solapur",
      "Shri Gurudatta Sugars Ltd, Takaliwadi",
      "Kisan S Chini Mills, Azamgarh, UP",
      "Vitthal Refined Sugars, Panda, Solapur",
      "Kisan Sahakari chini mills, Naziababad",
      "UP Rajya Chini AGVM, Pipraich (ISGEC)"
    ],
    "Sugar - CPU": ["Baramati Agro Ltd, MS", "NSL Sugars, KS", "Gurudutta Sugars, MS"]
  },
  "Pulp & Paper, Dairy & Pharma": {
    "Pulp & Paper": ["Venkata N L Paper Mills Pvt. Ltd.", "Kibos paper mill, Uganda"],
    Dairy: [
      "B.G. Chitale, Bhilwadi",
      "Gopalganj Milk Chilling Centre",
      "Indotech Industries Ltd, Pune",
      "NDDB, Habibganj, MP",
      "NDDB, Jalgaon, MS",
      "PR Dairy Tech",
      "Sameer Agriculture, Kenya",
      "Sanjay Dairy (Chapra Plant)",
      "Sarda Dairy & Food, Raipur"
    ],
    Pharma: [
      "Unijules Life Sciences Ltd., MS",
      "Embio Ltd, Mahad, MS",
      "Patanjali Ayurveda Ltd, Uttarakhand",
      "Lupin Ltd, MP",
      "Zim Laboratories Ltd, MS",
      "Akry Organics, Mumbai",
      "Asahi Kasei Chemfield, MS"
    ]
  },
  "Sewage Treatment Plants": [
    "ACC Ltd.; Chaibasa, Jharkhand",
    "Airport Authority India, Nagpur, MS",
    "Airport Authority India, Gondia, MS",
    "Central Railway, Nagpur, MS",
    "Ordinance Factory, Nagpur, MS",
    "Datta Meghe Medical College, Wardha, MS",
    "G.H. Raisoni College Of Engg.; Nagpur, MS",
    "BVM School; Nagpur, MS",
    "Govt. Medical College, Akola, MS",
    "High Court of J&K, Sringar",
    "Govt. of Jammu & Kashmir; Jammu",
    "Grasim Cement; Ravan, CG",
    "Grasim Cement, CG",
    "Hotel Bundela, Khajuraho, MP",
    "IIT Kharagpur, WB",
    "Jindal Power Ltd.; Raigarh, CG",
    "Lafarge India, Champa, CG",
    "Larsen & Turbo Ltd., Awarpur, MS",
    "Leverage Green, Nagpur, MS",
    "MADC Nagpur, MS",
    "MAHAGENCO, Bhusawal, MS",
    "NADT, Nagpur, MS",
    "Nav Jeevan Sanstha, Nagpur, MS",
    "Nirmal Nagari, Nagpur, MS",
    "Pioneer Housing Scheme, Hingna, MS",
    "Pix Transmission Ltd. MS",
    "Prakash Industries Ltd., Champa, CG",
    "Sarda Mines Pvt.Ltd., Orissa",
    "South Central Railway, Secunderabad, TS",
    "Taj Business Hotels, Mangalore, KS",
    "Tata Consultancy Services, Nagpur, MS",
    "TISCO Ltd, Jamshedpur, JH",
    "Vidarbha Irrigation Development Corp., Nagpur, MS",
    "Vidarbha Irrigation Development Corp., Nagpur, MS",
    "Vitthal Refineries, Nagpur, MS",
    "Yavatmal City Council, MS"
  ],
  "Biogas Plants": [
    "Aarti Drugs, Ankleshwar, GJ",
    "Bajaj Hindustan Ltd., Khamarkheda, UP",
    "Binani Cement, Kota, RJ",
    "Cement Corporation of India, Chandrapur, MS",
    "Cement Corporation of India, Mandla, MP",
    "Grasim Cement, Rawan, CG",
    "Indorama Industries, Nagda, MP",
    "Jayaswal Neco Ltd., Nagda, MP",
    "J.K. Cement Works Ltd., Mangrol, RJ",
    "Kalyani Forge Ltd., Pune, MS",
    "Laxmi Engineers, Pune, MS",
    "Larsen & Toubro Ltd., Awarpur, MS",
    "MAHAGENCO, Bhusawal, MS",
    "Manorama SSK Ltd., Latur, MS",
    "MSS Ltd., Ankleshwar, GJ",
    "MSS Ltd., Ankleshwar, GJ",
    "Nirma Industries Ltd., Ahmedabad, GJ",
    "Nirma Industries Ltd., Ahmedabad, GJ",
    "RPG Cables, Bhiwandi, MS",
    "RPG Cables, Bhiwandi, MS",
    "Ruchi Soya Ltd., Raipur, CG",
    "Sahakar Maharshi Shankarrao Mohite Patil SSK Ltd., Akluj, MS",
    "Sai Shree Sugars Ltd., Athani, KS",
    "Shivam Autotech, Pune, MS",
    "Som Distilleries, Bhopal, MP",
    "Sunil Agro Ltd., Hoshangabad, MP",
    "Suryoday SSK Ltd., Miraj, MS",
    "Tirupati Inks & Resins, Pune, MS",
    "Universal Agro Industries, Ankleshwar, GJ",
    "Wipro Ltd., Bangalore, KA"
  ],
  "Other Equipments & Plants": [
    "Bajaj Hindusthan Ltd., Khambarkheda, UP",
    "Bharat Coking Coal Ltd., Dhanbad, JH",
    "Bilaspur Cement, CG",
    "Cement Corporation of India, Nagda, MP",
    "Hindustan Zinc Ltd., Udaipur, RJ",
    "J.K. Cement Works Ltd., Mangrol, RJ",
    "Kalyani Forge Ltd., Pune, MS",
    "Larsen & Toubro Ltd., Awarpur, MS",
    "MSS Ltd., Ankleshwar, GJ",
    "Nirma Industries Ltd., Ahmedabad, GJ",
    "Orissa Sponge Iron, Orissa",
    "Ruchi Soya Ltd., Raipur, CG",
    "Som Distilleries, Bhopal, MP",
    "Sunflag Iron & Steel Ltd., Latur, MS",
    "Vikram Cement Ltd., Udaipur, RJ"
  ]
};

// Recursive component to render categories and clients
const ClientCategory = ({ category, clients }) => {
  const [open, setOpen] = useState(false);

  const isArray = Array.isArray(clients);
  const isObject = typeof clients === "object" && !isArray;

  return (
    <div className="category-container">
      <div
        className="category-title"
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
      >
        <span className={`arrow ${open ? "open" : ""}`}>▶</span>
        {category}
      </div>

      {open && (
        <div className="clients-list">
          {isArray &&
            clients.map((client, i) => (
              <div key={i} className="client-item">
                • {client}
              </div>
            ))}

          {isObject &&
            Object.entries(clients).map(([subCat, subClients]) => (
              <ClientCategory key={subCat} category={subCat} clients={subClients} />
            ))}
        </div>
      )}
    </div>
  );
};

const ClientsPage = () => {
  return (
    <div className="clients-page">
      <div className="container" style={{ padding: '4rem 0' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>MM Enviro Projects Pvt. Ltd. - Clients</h1>
        <div className="card">
          {Object.entries(clients).map(([category, clients]) => (
            <ClientCategory key={category} category={category} clients={clients} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="section bg-primary text-center" style={{ color: 'white', marginTop: '4rem' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Need a customized solution?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', opacity: 0.9 }}>
            Our engineers are ready to design the perfect system for your requirements.
            Download our detailed catalog or request a quote today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn" style={{ background: 'white', color: 'var(--color-primary)' }}>Request Consultation</a>
            <button className="btn" style={{ background: 'transparent', border: '1px solid white', color: 'white' }}>Download Catalog</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;
