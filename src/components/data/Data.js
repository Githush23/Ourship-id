import F1 from "./hero/776588.png";
import F2 from "./hero/sugar.png";
import F3 from "./hero/shipping-icon-png-15.png";
import F4 from "./hero/6522962.png";
import F5 from "./hero/1788822.png";

import R1 from "./recent/1680740215p.jpg";
import R2 from "./recent/a5a11_buka-giling.jpg";
import R3 from "./recent/maxresdefault.jpg";
import R4 from "./recent/gula-1.jpg";
import R5 from "./recent/EKSPEDISI-PANGAN-PETROKIMIA-3.jpg";
import R6 from "./recent/gula.jpeg";

import L1 from "./gallery/hqdefault.jpg";
import L2 from "./gallery/trucking.jpg";
import L3 from "./gallery/1610347053960.jpg";
import L4 from "./gallery/sewa-truk-tronton-6-pgpvzqmlqm9ampa0exh69447t7h07lz0bsjldtlvum.jpeg";
import L5 from "./gallery/WhatsApp-Image-2021-08-06-at-10.05.30-14.jpeg";
import L6 from "./gallery/angkutan-logistik-naik-antarafoto_ratio-16x9-1.jpg";

export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "Location",
    path: "/blog",
  },
  {
    text: "contact",
    path: "/contact",
  },
];

export const featured = [
  {
    cover: F1,
    name: "Transportation",
    total: "122 Vehicle",
  },
  {
    cover: F2,
    name: "Any Package",
    total: "155 Type",
  },
  {
    cover: F3,
    name: "Ocean Freight",
    total: "300 On Going",
  },
  {
    cover: F4,
    name: "Your Package",
    total: "80 Package",
  },
  {
    cover: F5,
    name: "Delivery to Customer",
    total: "3412 Customer",
  },
];

export const list = [
  {
    id: 1,
    cover: R1,
    name: "PT. Tanaman Makmur Tbk.",
    location: "Pakualam, Yogyakarta",
    category: "Shipping",
    type: "Commercial",
    price: "Tracking",
  },
  {
    id: 2,
    cover: R2,
    name: "PT. Sukseskan Indah Lestari ",
    location: "Sunter, Tanjung Priok",
    category: "Received",
    type: "Commercial",
    price: "Tracking",
  },
  {
    id: 3,
    cover: R3,
    name: "PT. Sinar Terang Jaya",
    location: "Way Jepara, Lampung Timur",
    category: "Shipping",
    type: "Commercial",
    price: "Tracking",
  },
  {
    id: 4,
    cover: R4,
    name: "PT. Sari Gula Murni",
    location: "Duri Kelapa, Jakarta Barat",
    category: "Received",
    type: "Commercial",
    price: "Tracking",
  },
  {
    id: 5,
    cover: R5,
    name: "PT. Kesemakmuran Sejahtera",
    location: "Jati Asih, Bekasi",
    category: "Shipping",
    type: "Commercial",
    price: "Tracking",
  },
  {
    id: 6,
    cover: R6,
    name: "PT. Sobat Sukses Sentosa",
    location: "Rancaekek, Bandung",
    category: "Received",
    type: "Commercial",
    price: "Tracking",
  },
];

export const awards = [
  {
    icon: <i class="fa-solid fa-trophy"></i>,
    num: "32 M	",
    name: "Blue Burmin Award",
  },
  {
    icon: <i class="fa-solid fa-briefcase"></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i class="fa-solid fa-lightbulb"></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i class="fa-solid fa-heart"></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
];

export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "5GB Cloud Storage",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "10GB Cloud Storage",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "20GB Cloud Storage",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
];

export const location = [
  {
    id: 1,
    name: "Duri Kelapa, Jakarta Barat",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: L1,
  },
  {
    id: 2,
    name: "Jati Asih, Bekasi",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: L2,
  },
  {
    id: 3,
    name: "Sunter, Tanjung Priok",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: L3,
  },
  {
    id: 4,
    name: "Antapani, Bandung",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: L4,
  },
  {
    id: 5,
    name: "Pakualam, Yogyakarta",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: L5,
  },
  {
    id: 6,
    name: "Way Jepara, Lampung",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: L6,
  },
];

export const footer = [
  {
    title: "Our Product",
    text: [
      { list: "Express Shipment" },
      { list: "Reguler Shipment" },
      { list: "Economic Shipment" },
    ],
  },
  {
    title: "Shipment",
    text: [
      { list: "Jakarta" },
      { list: "Bandung" },
      { list: "Yogyakarta" },
      { list: "Lampung" },
    ],
  },
  {
    title: "About Us",
    text: [{ list: "Who We Are" }, { list: "Contact Us" }],
  },
];
