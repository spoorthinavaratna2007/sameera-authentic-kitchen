// Business Information
export const BUSINESS_INFO = {
  name: "Sameera's Authentic Kitchen",
  tagline: "Pure • Traditional • Homemade",
  email: "Sowmyakiran80@gmail.com",
  phones: [
    { number: "9902896323", display: "+91 99028 96323", waLink: "https://wa.me/919902896323", callLink: "tel:+919902896323" },
    { number: "6361910139", display: "+91 63619 10139", waLink: "https://wa.me/916361910139", callLink: "tel:+916361910139" }
  ],
  location: {
    address: "Srirampura, Mysore, Karnataka, India",
    mapsUrl: "https://maps.app.goo.gl/3EJvE7E2j6HRA2NL8",
    city: "Mysore",
    state: "Karnataka",
    country: "India"
  },
  description: "Enjoy the authentic taste of traditional Indian pickles. Made with carefully selected ingredients, aromatic spices and a perfect blend of flavours.",
  highlights: [
    {
      title: "Authentic Traditional Flavours",
      desc: "Inspired by age-old recipes passed down through generations."
    },
    {
      title: "Carefully Prepared",
      desc: "Small-batch preparation ensuring the highest care and hygiene."
    },
    {
      title: "Rich Taste & Aroma",
      desc: "Made with authentic spices that create an irresistible aromatic experience."
    },
    {
      title: "Homemade Goodness",
      desc: "Pure, wholesome ingredients with zero shortcuts, just like home."
    }
  ]
};

// All 10 Client Images Reference
export const IMAGES = {
  priceChart: "/images/Image1.jpeg",     // Image 1: Original Price List
  pickleJars: "/images/Image2.jpeg",     // Image 2: Three pickle jars with white lids
  sakkareAcchuMoulds: "/images/Image3.jpeg", // Image 3: Traditional sugar figurines on moulds
  pickleCollection: "/images/Image4.jpeg",  // Image 4: Labelled pickle jars (Hero visual)
  logo: "/images/Image5.jpeg",           // Image 5: Official logo
  dosaMixes: "/images/Image6.jpeg",      // Image 6: Regular, Ade & Rava Dosa Flour packets
  freshPicklePrep: "/images/Image7.jpeg",// Image 7: Fresh mango pickle preparation
  sakkareAcchuBox: "/images/Image8.jpeg", // Image 8: Sakkare Acchu packaging
  yelluBella: "/images/Image9.jpeg",     // Image 9: Sesame, groundnuts, jaggery mixture
  araluSandige: "/images/Image10.jpeg"   // Image 10: Aralu Sandige sun-dried preparation
};

// Product Categories
export const CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "pickles", label: "Pickles & Condiments" },
  { id: "dosa", label: "Instant Dosa Mixes" },
  { id: "traditional", label: "Traditional Delicacies" }
];

// Complete Product Catalog
export const PRODUCTS = [
  // CATEGORY 1: PICKLES & CONDIMENTS
  {
    id: "herelekayi",
    name: "Herelekayi",
    subtitle: "Citron Pickle",
    category: "pickles",
    categoryLabel: "Pickles & Condiments",
    price: 200,
    priceDisplay: "₹200",
    packaging: "Bottle",
    weight: "500 grams",
    image: IMAGES.pickleJars,
    badge: "Traditional Favorite",
    description: "Traditional South Indian citron pickle prepared with aromatic spices and authentic flavours."
  },
  {
    id: "mavinkayi",
    name: "Mavinkayi",
    subtitle: "Raw Mango Pickle",
    category: "pickles",
    categoryLabel: "Pickles & Condiments",
    price: 200,
    priceDisplay: "₹200",
    packaging: "Bottle",
    weight: "500 grams",
    image: IMAGES.freshPicklePrep,
    badge: "Bestseller",
    description: "Classic raw mango pickle prepared with carefully selected green mangoes and homemade spice blend."
  },
  {
    id: "nimbekayi",
    name: "Nimbekayi",
    subtitle: "Lemon Pickle",
    category: "pickles",
    categoryLabel: "Pickles & Condiments",
    price: 200,
    priceDisplay: "₹200",
    packaging: "Bottle",
    weight: "500 grams",
    image: IMAGES.pickleJars,
    badge: "Tangy & Aromatic",
    description: "Sun-cured juicy lemons steeped in hand-ground spices for an appetizing, traditional tang."
  },
  {
    id: "puliyogre-gojju",
    name: "Puliyogre Gojju",
    subtitle: "Tamarind Rice Paste",
    category: "pickles",
    categoryLabel: "Pickles & Condiments",
    price: 330,
    priceDisplay: "₹330",
    packaging: "Box",
    weight: "500 grams",
    image: IMAGES.priceChart,
    badge: "Mysore Style",
    description: "Authentic Karnataka temple-style thick tamarind paste with roasted sesame, peanuts and hand-roasted spices."
  },
  {
    id: "puliyogre-powder",
    name: "Puliyogre Powder",
    subtitle: "Tamarind Spice Blend",
    category: "pickles",
    categoryLabel: "Pickles & Condiments",
    price: 330,
    priceDisplay: "₹330",
    packaging: "Box",
    weight: "500 grams",
    image: IMAGES.priceChart,
    badge: "Spice Blend",
    description: "Aromatic dry spice blend crafted to prepare traditional tamarind rice or enrich authentic curries."
  },
  {
    id: "hunsekayi-rasa",
    name: "Hunsekayi Rasa",
    subtitle: "Raw Tamarind Extract",
    category: "pickles",
    categoryLabel: "Pickles & Condiments",
    price: 250,
    priceDisplay: "₹250",
    packaging: "Bottle",
    weight: "500 grams",
    image: IMAGES.pickleCollection,
    badge: "Rich & Tangy",
    description: "Pure raw tamarind extract prepared with traditional spices, perfect for authentic curries and rasam."
  },
  {
    id: "mavinkayi-tokku",
    name: "Mavinkayi Tokku",
    subtitle: "Grated Mango Relish",
    category: "pickles",
    categoryLabel: "Pickles & Condiments",
    price: 330,
    priceDisplay: "₹330",
    packaging: "Box",
    weight: "500 grams",
    image: IMAGES.pickleCollection,
    badge: "Popular Relish",
    description: "Finely grated raw mango cooked with cold-pressed oil, mustard seeds and fenugreek. Sublime with curd rice."
  },
  {
    id: "mavinkayi-tokku-chilli",
    name: "Mavinkayi Tokku (Green Chilli)",
    subtitle: "Spiced Grated Mango Relish",
    category: "pickles",
    categoryLabel: "Pickles & Condiments",
    price: 300,
    priceDisplay: "₹300",
    packaging: "Box",
    weight: "500 grams",
    image: IMAGES.priceChart,
    badge: "Spicy & Fiery",
    description: "Fiery grated mango relish enriched with hand-selected fresh green chillies and traditional seasoning."
  },

  // CATEGORY 2: INSTANT DOSA MIXES
  {
    id: "rava-dosa-mix",
    name: "Rava Dosa Mix",
    subtitle: "Instant Semolina Dosa Flour",
    category: "dosa",
    categoryLabel: "Instant Dosa Mixes",
    price: 100,
    priceDisplay: "₹100",
    packaging: "Packet",
    weight: "500 grams",
    image: IMAGES.dosaMixes,
    badge: "Crispy Delight",
    description: "Instant semolina flour blend seasoned with cumin and crushed pepper for paper-crisp restaurant style rava dosas."
  },
  {
    id: "regular-dosa-mix",
    name: "Regular Dosa Mix",
    subtitle: "Traditional Crispy Dosa Flour",
    category: "dosa",
    categoryLabel: "Instant Dosa Mixes",
    price: 100,
    priceDisplay: "₹100",
    packaging: "Packet",
    weight: "500 grams",
    image: IMAGES.dosaMixes,
    badge: "Breakfast Essential",
    description: "Balanced traditional rice and urad dal flour mix to make golden, crispy and fluffy homemade dosas in minutes."
  },
  {
    id: "ade-dosa-mix",
    name: "Ade Dosa Mix",
    subtitle: "Protein-Rich Multi-Lentil Flour",
    category: "dosa",
    categoryLabel: "Instant Dosa Mixes",
    price: 150,
    priceDisplay: "₹150",
    packaging: "Packet",
    weight: "500 grams",
    image: IMAGES.dosaMixes,
    badge: "Nutrient Rich",
    description: "Wholesome multi-lentil spiced Adai/Ade flour packed with plant protein and authentic South Indian herbs."
  },

  // CATEGORY 3: TRADITIONAL HOMEMADE PRODUCTS
  {
    id: "aralu-sandige",
    name: "Aralu Sandige",
    subtitle: "Sun-Dried Paddy Crisps",
    category: "traditional",
    categoryLabel: "Traditional Homemade Products",
    price: null,
    priceDisplay: "Contact for Price",
    packaging: "Traditional Pack",
    weight: null,
    image: IMAGES.araluSandige,
    badge: "Handcrafted Heritage",
    description: "Traditional homemade sun-dried delicacy made with puffed paddy, prepared with love and care for festive feasts."
  },
  {
    id: "sakkare-acchu",
    name: "Sakkare Acchu",
    subtitle: "Decorative Sugar Figurines",
    category: "traditional",
    categoryLabel: "Traditional Homemade Products",
    price: null,
    priceDisplay: "Contact for Price",
    packaging: "Box Packaging",
    weight: null,
    image: IMAGES.sakkareAcchuMoulds,
    secondaryImage: IMAGES.sakkareAcchuBox,
    badge: "Festive Specialty",
    description: "Traditional moulded sugar figurines made using decorative wooden moulds, enjoyed and shared during festive celebrations."
  },
  {
    id: "yellu-bella",
    name: "Yellu Bella",
    subtitle: "Sankranti Auspicious Mix",
    category: "traditional",
    categoryLabel: "Traditional Homemade Products",
    price: null,
    priceDisplay: "Contact for Price",
    packaging: "Traditional Pack",
    weight: null,
    image: IMAGES.yelluBella,
    badge: "Sankranti Special",
    description: "Traditional Sankranti festive mixture made with white sesame seeds, roasted groundnuts, and pure jaggery."
  }
];

// Helper to generate dynamic WhatsApp link for a single product
export function getProductWhatsAppUrl(product, primaryPhone = "919902896323") {
  let message = "";
  if (product.price) {
    message = `Hello Sameera's Authentic Kitchen! I am interested in ordering ${product.name}${product.weight ? ` (${product.weight})` : ""} for ${product.priceDisplay}. Please share its availability and ordering details.`;
  } else {
    message = `Hello Sameera's Authentic Kitchen! I am interested in ${product.name}. Could you please share its price and availability?`;
  }
  return `https://wa.me/${primaryPhone}?text=${encodeURIComponent(message)}`;
}

// Helper to generate dynamic WhatsApp link for the entire cart
export function getCartWhatsAppUrl(cartItems, primaryPhone = "919902896323") {
  if (!cartItems || cartItems.length === 0) {
    return `https://wa.me/${primaryPhone}?text=${encodeURIComponent("Hello Sameera's Authentic Kitchen! I am interested in ordering homemade products. Please share your catalog.")}`;
  }

  let text = "Hello Sameera's Authentic Kitchen! I would like to place an order for the following homemade items:\n\n";
  let total = 0;
  let hasContactForPrice = false;

  cartItems.forEach((item, index) => {
    if (item.price) {
      const lineTotal = item.price * item.quantity;
      total += lineTotal;
      text += `${index + 1}. ${item.name} (${item.weight || "500g"}) x ${item.quantity} = ₹${lineTotal}\n`;
    } else {
      hasContactForPrice = true;
      text += `${index + 1}. ${item.name} x ${item.quantity} (Contact for Price)\n`;
    }
  });

  text += `\nEstimated Total: ₹${total}`;
  if (hasContactForPrice) {
    text += " (+ seasonal items to be quoted)";
  }
  text += "\n\nPlease share availability, payment details and delivery options. Thank you!";

  return `https://wa.me/${primaryPhone}?text=${encodeURIComponent(text)}`;
}

// General enquiry WhatsApp url
export function getGeneralWhatsAppUrl(primaryPhone = "919902896323") {
  const message = "Hello Sameera's Authentic Kitchen! I am interested in your homemade products. Could you please share more details about the available products and ordering process?";
  return `https://wa.me/${primaryPhone}?text=${encodeURIComponent(message)}`;
}
