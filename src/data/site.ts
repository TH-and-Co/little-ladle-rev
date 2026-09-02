const heroImg = "/malatang-bowl.webp";
const ingredientWallImg = "/ingredient-wall-real.webp";
const brothsImg = "/food-bowls.webp";
const servedImg = "/hero.webp";
const sauceStationImg = "/sauce-bar.webp";
const togetherImg = "/interior-dining.webp";
const meatsImg = "/ingredient-wall-real.webp";
const seafoodImg = "/interior-counter.webp";
const vegImg = "/ingredient-wall-real.webp";
const noodlesImg = "/interior-dining.webp";
const foundersImg = "/owners.webp";
const stirFryDishImg = "/dry-stir-fry.webp";
const sidesImg = "/sides.webp";
const icyPolesImg = "/icy-poles.webp";
const brothChickenImg = "/broth-chicken.webp";
const counterImg = "/interior-counter.webp";
const exteriorImg = "/exterior.webp";
const signatureBaseImg = "/signature-soup-base.webp";
const mushroomBaseImg = "/mushroom-soup-base.webp";
const tomYumBaseImg = "/tom-yum-soup-base.webp";
const tomatoBaseImg = "/tomato-soup-base.webp";

export const business = {
  name: "Little Ladle Hotpot",
  tagline: "Build your own malatang, bowl by bowl.",
  description:
    "Walk-up ingredient wall, five broths, free sauce bar. Pick what you love, we cook it fresh at Westfield West Lakes.",
  owners: ["Anthony Bui", "Michael Du"],
  shop: "Shop 127",
  phone: "+61 8 8000 0000",
  address: {
    street: "111 West Lakes Boulevard",
    suburb: "West Lakes",
    state: "South Australia",
    postcode: "5021",
    country: "AU",
    entrance: "Food Court Entrance",
  },
  hours: "Monday to Sunday, 11am – 9pm",
  hoursSchema: {
    opens: "11:00",
    closes: "21:00",
  },
  uberEatsUrl: "https://www.ubereats.com/",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Shop+127,+Westfield+West+Lakes,+111+West+Lakes+Boulevard,+West+Lakes+SA+5021+(Food+Court+Entrance)",
} as const;

export const images = {
  hero: {
    src: heroImg,
    alt: "Steaming bowl of Little Ladle Signature Malatang with noodles, greens and seafood",
  },
  ingredientWall: {
    src: ingredientWallImg,
    alt: "Little Ladle fresh ingredient wall stocked with vegetables, noodles and tofu",
  },
  broth: {
    src: brothsImg,
    alt: "Little Ladle malatang soup bowl and dry stir fry served side by side",
  },
  served: {
    src: servedImg,
    alt: "Little Ladle hotpot spread with a signature malatang bowl, side dishes, sauces and drinks",
  },
  sauces: {
    src: sauceStationImg,
    alt: "Little Ladle free DIY sauce bar with chilli oil, sesame, garlic and herbs",
  },
  sides: {
    src: sidesImg,
    alt: "A plate of crispy fried sides at Little Ladle Hotpot",
  },
  table: {
    src: togetherImg,
    alt: "Little Ladle dining area with timber tables beside the fresh ingredient fridge",
  },
  interior: {
    src: counterImg,
    alt: "Little Ladle order counter with neon ladle sign and menu boards",
  },
  exterior: {
    src: exteriorImg,
    alt: "Little Ladle Hotpot shopfront entrance at Westfield West Lakes",
  },
  icyPole: {
    src: icyPolesImg,
    alt: "Colourful icy poles in a frosty freezer",
  },
} as const;

export const broths = [
  {
    id: "malatang",
    name: "Signature Malatang",
    badge: "Signature",
    flavour: "Rich · numbing · milky",
    description:
      "Slow-cooked beef and pork bone broth turned rich and milky, layered with chilli bean paste and Sichuan peppercorns for that numbing málà hum.",
    spiceLevels: ["No Spice", "Mild", "Medium", "Hot"],
    tags: [],
    image: {
      src: signatureBaseImg,
      alt: "Little Ladle Signature Malatang soup base with prawns, broccoli, tofu puff and baby corn",
    },
  },
  {
    id: "tom-yum",
    name: "Tom Yum",
    flavour: "Bright · sour · fragrant",
    description:
      "Bright and aromatic with lemongrass, lime and a clean chilli kick that lifts every ingredient.",
    spiceLevels: null,
    tags: [],
    image: {
      src: tomYumBaseImg,
      alt: "Little Ladle Tom Yum soup base with prawns, enoki, shiitake and baby corn",
    },
  },
  {
    id: "mushroom",
    name: "Mushroom",
    flavour: "Earthy · savoury · clean",
    description: "A deep, earthy broth simmered with a medley of mushrooms for savoury comfort.",
    spiceLevels: null,
    tags: ["Vegetarian", "Gluten Free"],
    image: {
      src: mushroomBaseImg,
      alt: "Little Ladle Mushroom soup base with shiitake, enoki, tofu puff and broccoli",
    },
  },
  {
    id: "tomato",
    name: "Tomato",
    flavour: "Sweet · tangy · gentle",
    description:
      "Sweet, tangy and gently rounded — the crowd pleaser that kids and chilli-shy friends go back for.",
    spiceLevels: null,
    tags: ["Vegetarian", "Gluten Free"],
    image: {
      src: tomatoBaseImg,
      alt: "Little Ladle Tomato soup base with prawns, shiitake, tofu puff and broccoli",
    },
  },
  {
    id: "chicken",
    name: "Chicken",
    flavour: "Golden · clean · comforting",
    description:
      "A clean, golden classic — slow-simmered and comforting, letting the ingredients you picked do the talking.",
    spiceLevels: null,
    tags: [],
    image: {
      src: brothChickenImg,
      alt: "A bowl of clear golden chicken hotpot broth with bok choy and wontons",
    },
  },
] as const;

export const stirFry = {
  id: "stir-fry",
  name: "Stir Fry",
  badge: "No broth",
  flavour: "Glossy · punchy · dry",
  description:
    "Everything you picked, wok-tossed to order in our málà spice blend — glossy, punchy and completely broth-free.",
  note: "Made to order at the counter, just like the hotpot.",
  spiceLevels: null,
  tags: ["Vegetarian option available"],
  image: {
    src: stirFryDishImg,
    alt: "Little Ladle dry stir fry bowl with prawns, broccoli, fish balls, enoki and baby corn beside a dipping sauce dish",
  },
} as const;

export const finishes = [...broths, stirFry] as const;

export const steps = [
  {
    n: "01",
    title: "Walk the ingredient wall",
    body: "Bowl in one hand, tongs in the other, wander the fresh wall and fill up on everything from leafy greens and mushrooms to marinated meats, seafood, noodles and plump wontons.",
    image: images.ingredientWall,
  },
  {
    n: "02",
    title: "Pick your broth",
    body: "Your bowl, your flavour, your way. Choose from five distinct broths to match your mood or take a different route with our dry stir fry, tossed through with bold seasoning for a rich, flavoured finish.",
    image: images.broth,
  },
  {
    n: "03",
    title: "We cook, you sit down",
    body: "Weigh in at the counter, take a seat, and our kitchen brings your bowl out steaming hot.",
    image: images.served,
  },
] as const;

export const sauces = [
  "Sesame paste",
  "Chilli oil",
  "Soy",
  "Black vinegar",
  "Minced garlic",
  "Spring onion",
  "Coriander",
  "Peanut crush",
  "Oyster sauce",
  "Fermented tofu",
  "Toasted sesame seeds",
  "Sha cha",
] as const;

export const sides = [
  {
    title: "Free icy poles",
    body: "Dessert is on us. Cool the málà down on the way out.",
  },
] as const;

export const faqs = [
  {
    q: "How do I build my bowl?",
    a: "Take a bowl and fill it from the fresh ingredient wall with exactly what you want, then tell us your broth and spice level at the counter.",
  },
  {
    q: "Do I cook it myself?",
    a: "No. This isn't tabletop hotpot. You choose the ingredients, our kitchen cooks them and brings the bowl to your table.",
  },
  {
    q: "Can I book a table?",
    a: "We are walk in dine in only, no bookings. Come as you are — solo, or with the whole crew.",
  },
  {
    q: "Is there delivery?",
    a: "Delivery is handled separately through UberEats.",
  },
] as const;

export const socials = [
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/littleladlehotpot/" },
  {
    name: "Facebook",
    icon: "facebook",
    url: "https://www.facebook.com/profile.php?id=61581660749929",
  },
] as const;

export const founders = {
  image: {
    src: foundersImg,
    alt: "Little Ladle Hotpot owners Anthony Bui and Michael Du in front of the fresh ingredient wall",
  },
  quote:
    "It's a place where friends and families can come together to enjoy a dining experience that's as much about connection as it is about food.",
} as const;

export const menuCategories = [
  {
    id: "meats",
    title: "Meats",
    intro: "Thin-sliced and marinated daily, ready to drop straight into your bowl.",
    items: [
      "Sliced beef",
      "Marinated lamb",
      "Pork belly",
      "Chicken thigh",
      "Beef meatballs",
      "Pork luncheon",
      "Beef tripe",
      "Cocktail sausage",
    ],
    photos: [
      {
        src: meatsImg,
        alt: "Little Ladle fresh ingredient fridge stocked with meats and produce trays",
      },
      {
        src: ingredientWallImg,
        alt: "Little Ladle fresh ingredient wall stocked with fresh trays",
      },
    ],
  },
  {
    id: "seafood",
    title: "Seafood",
    intro: "Prawns, squid, mussels and more, pick your favourites and make it yours.",
    items: [
      "Prawns",
      "Squid rings",
      "Mussels",
      "Scallops",
      "Fish tofu",
      "Crab stick",
      "Fish balls",
      "Prawn dumplings",
    ],
    photos: [
      {
        src: seafoodImg,
        alt: "Little Ladle counter and chilled seafood display with neon ladle sign",
      },
      { src: servedImg, alt: "A Little Ladle malatang bowl with seafood, noodles and greens" },
    ],
  },
  {
    id: "vegetables",
    title: "Vegetables",
    intro: "Daily fresh greens, mushrooms and everything in between.",
    items: [
      "Bok choy",
      "Baby spinach",
      "Enoki mushrooms",
      "Shiitake mushrooms",
      "Lotus root",
      "Sweet corn",
      "Potato slices",
      "Tofu puffs",
      "Seaweed knots",
      "Wood ear fungus",
    ],
    photos: [
      {
        src: vegImg,
        alt: "Little Ladle ingredient wall rows of bok choy, mushrooms and fresh vegetables",
      },
      {
        src: ingredientWallImg,
        alt: "Rows of fresh vegetables on the Little Ladle ingredient wall",
      },
    ],
  },
  {
    id: "noodles",
    title: "Noodles & Wontons",
    intro: "The base of the bowl. One serve is plenty, two if you're hungry.",
    items: [
      "Sweet potato glass noodles",
      "Udon",
      "Instant ramen",
      "Rice noodles",
      "Vermicelli",
      "Pork wontons",
      "Prawn wontons",
      "Fish dumplings",
    ],
    photos: [
      { src: noodlesImg, alt: "Little Ladle dining room beside the noodle and produce fridge" },
      { src: sidesImg, alt: "Crispy youtiao dough sticks, sesame doughnuts and spring rolls" },
    ],
  },
  {
    id: "sauces",
    title: "Sauces",
    intro: "Twelve sauces at the DIY station, completely free. Build your formula.",
    items: [...sauces],
    photos: [
      {
        src: sauceStationImg,
        alt: "Little Ladle free DIY sauce bar with chilli oil, sesame and fresh herbs",
      },
      { src: icyPolesImg, alt: "Colourful free icy poles in a frosty freezer" },
    ],
  },
] as const;

export const differences = [
  {
    title: "Self-serve ingredient wall",
    body: "Shop it like a produce aisle. Take exactly what you love and nothing you don't — no set combos, no menu maths.",
  },
  {
    title: "Your spice, your portion",
    body: "Choose your own heat level and how much goes in the bowl. A light lunch or a mountain of a bowl — it is entirely your call.",
  },
  {
    title: "Family-friendly pace",
    body: "No burners, no raw plates to juggle. Our kitchen cooks it and brings it out hot, so everyone eats together.",
  },
] as const;

export const arrivalSteps = [
  {
    n: "01",
    title: "Grab a bowl",
    body: "Walk the fresh wall and fill it with vegetables, meats, seafood, noodles and wontons.",
    image: images.ingredientWall,
  },
  {
    n: "02",
    title: "Pick your broth",
    body: "Tell us at the counter — Signature Malatang (No Spice to Hot), tom yum, mushroom, tomato, chicken or stir fry.",
    image: images.broth,
  },
  {
    n: "03",
    title: "Hand it over and sit down",
    body: "We take your bowl to the counter, you take a seat and hit the free sauce bar. The bowl comes out steaming.",
    image: images.served,
  },
] as const;
