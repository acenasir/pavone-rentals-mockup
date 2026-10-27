// Single source of truth for every Pavone property.
// Adding a new rental = adding one object here. It appears on the map and gets its own page.
const IMG = "https://pavonerentals.com/wp-content/uploads/2026/03/";

window.PROPERTIES = [
  {
    slug: "queen-alexandra",
    name: "Pavone Queen Alexandra",
    type: "apartment",
    typeLabel: "Apartment Community",
    status: "Now Leasing",
    address: "7804 107 Street NW, Edmonton, AB T6E 1P6",
    neighbourhood: "Queen Alexandra",
    lat: 53.5146,
    lng: -113.5052,
    priceFrom: 1438,
    beds: "1–2",
    baths: "1",
    sqft: "564–888",
    occupancy: "July 31, 2026",
    tagline: "Refined, brand-new luxury residences minutes from Whyte Ave.",
    description:
      "Brand-new luxury apartments about 10 minutes from the University of Alberta. Each suite has a private balcony, air conditioning, in-suite laundry and on-site storage, in a neighbourhood rated Very Walkable.",
    hero: IMG + "UNIT-C-1.jpg",
    gallery: [
      IMG + "UNIT-C-3.jpg", IMG + "UNIT-C-4.jpg", IMG + "UNIT-C-5.jpg",
      IMG + "UNIT-D-1.jpg", IMG + "UNIT-D-3.jpg", IMG + "UNIT-D-bath-1.jpg",
    ],
    promo: {
      title: "Move-in incentives",
      note: "On leases signed by June 30. Limited units.",
      items: ["1 month free rent", "$500 utility credit", "3 months free Gigabit Internet + Optik TV", "Reduced security deposit"],
    },
    amenities: [
      "Air conditioning", "Gym / workout area", "On-site storage", "In-suite washer & dryer",
      "Stainless steel appliances", "Private balcony", "9' ceilings", "Floor-to-ceiling windows",
      "Luxury vinyl plank flooring", "Quartz countertops", "Digital building access", "Pet friendly",
      "Smart thermostat", "Online tenant portal",
    ],
    units: [
      { name: "Unit A", beds: 1, baths: 1, sqft: 564, rent: 1438, available: "Jul 31, 2026" },
      { name: "Unit B", beds: 2, baths: 1, sqft: 807, rent: 1884, available: "Jul 31, 2026" },
      { name: "Unit C", beds: 2, baths: 1, sqft: 888, rent: 1884, available: "Jul 31, 2026" },
      { name: "Unit D", beds: 1, baths: 1, sqft: 625, rent: 1438, available: "Jul 31, 2026" },
      { name: "Unit E", beds: 2, baths: 1, sqft: 798, rent: 2400, available: "Jul 31, 2026" },
      { name: "Unit F", beds: 1, baths: 1, sqft: 574, rent: 2175, available: "Jul 31, 2026" },
    ],
    docs: [
      { label: "Rate sheet (PDF)", href: "https://pavonerentals.com/wp-content/uploads/2026/06/Pavone-Queen-Alexandra-Rental-Sheet-updated-3.pdf" },
      { label: "Floor & unit layouts (PDF)", href: "https://pavonerentals.com/wp-content/uploads/2026/04/Aria-Queen-Alexandra-Floor-Plans.pdf" },
    ],
  },
  {
    slug: "home-one",
    name: "Pavone Residence — Home One",
    type: "house",
    typeLabel: "Single-Family Home",
    status: "Coming Soon",
    placeholder: true,
    address: "Address TBD, Edmonton, AB",
    neighbourhood: "South Edmonton (placeholder pin)",
    lat: 53.4955,
    lng: -113.5290,
    priceFrom: 2650,
    beds: "3",
    baths: "2.5",
    sqft: "1,650",
    occupancy: "TBD",
    tagline: "A detached family home with a private yard and garage.",
    description:
      "Placeholder content. Swap in the real address, photos, rent and features for the first new single-family rental. The page layout is the same as every other property.",
    hero: null,
    gallery: [],
    amenities: ["Detached garage", "Fenced backyard", "In-suite laundry", "Central A/C", "Finished basement", "Pet friendly"],
    units: [{ name: "Entire home", beds: 3, baths: 2.5, sqft: 1650, rent: 2650, available: "TBD" }],
    docs: [],
  },
  {
    slug: "home-two",
    name: "Pavone Residence — Home Two",
    type: "house",
    typeLabel: "Single-Family Home",
    status: "Coming Soon",
    placeholder: true,
    address: "Address TBD, Edmonton, AB",
    neighbourhood: "West Edmonton (placeholder pin)",
    lat: 53.5385,
    lng: -113.5645,
    priceFrom: 2895,
    beds: "4",
    baths: "3",
    sqft: "1,900",
    occupancy: "TBD",
    tagline: "Space for the whole family, close to parks and schools.",
    description:
      "Placeholder content. Swap in the real address, photos, rent and features for the second new single-family rental.",
    hero: null,
    gallery: [],
    amenities: ["Double attached garage", "Large backyard", "In-suite laundry", "Central A/C", "Open-concept kitchen", "Near schools & parks"],
    units: [{ name: "Entire home", beds: 4, baths: 3, sqft: 1900, rent: 2895, available: "TBD" }],
    docs: [],
  },
];

window.CONTACT = {
  phone: "780 993 7249",
  email: "hello@pavonerentals.com",
  office: "8104 160 Ave, Edmonton, AB T5Z 3J8",
};

window.fmtMoney = (n) => "$" + n.toLocaleString("en-CA");
