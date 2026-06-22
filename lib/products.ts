export type Product = {
  id: string;
  name: string;
  price: number;
  category: "rings" | "earrings" | "bracelets" | "necklaces";
  metal: "gold" | "silver" | "platinum";
  description: string;
  image: string;
  images: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Кольцо «Вечность»",
    price: 48500,
    category: "rings",
    metal: "gold",
    description: "Классическое кольцо из жёлтого золота 585 пробы с бриллиантом огранки «принцесса». Символ вечной любви, созданный мастерами вручную.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "2",
    name: "Серьги «Роса»",
    price: 32000,
    category: "earrings",
    metal: "gold",
    description: "Изящные серьги-капли из белого золота с жемчугом и бриллиантовой россыпью. Утончённость в каждой детали.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "3",
    name: "Браслет «Солнечный»",
    price: 27800,
    category: "bracelets",
    metal: "gold",
    description: "Тонкий браслет из жёлтого золота с чередованием полированных и матовых звеньев. Лёгкость и элегантность.",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94f4cf8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9519f94f4cf8?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "4",
    name: "Колье «Звёздная ночь»",
    price: 56000,
    category: "necklaces",
    metal: "platinum",
    description: "Колье из платины с сапфирами и бриллиантами, созданное по мотивам звёздного неба. Каждый камень вправлен вручную.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    ],
  },
  {
    id: "5",
    name: "Кольцо «Минимал»",
    price: 18500,
    category: "rings",
    metal: "silver",
    description: "Тонкое кольцо из серебра 925 пробы с матовой полировкой. Лаконичная форма для ежедневного образа.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    ],
  },
  {
    id: "6",
    name: "Серьги «Империя»",
    price: 44000,
    category: "earrings",
    metal: "gold",
    description: "Массивные серьги-люстры из жёлтого золота с рубинами. Для тех, кто не боится быть замеченным.",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
    ],
  },
  {
    id: "7",
    name: "Браслет «Нить»",
    price: 15200,
    category: "bracelets",
    metal: "silver",
    description: "Серебряный браслет-нить с тонкой гравировкой. Минималистичный дизайн, максимальный характер.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    ],
  },
  {
    id: "8",
    name: "Колье «Золотая цепь»",
    price: 38000,
    category: "necklaces",
    metal: "gold",
    description: "Классическая золотая цепочка плетения «якорь» из жёлтого золота 585 пробы. Вневременная классика.",
    image: "https://images.unsplash.com/photo-1509941943102-10c232535736?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1509941943102-10c232535736?w=800&q=80",
    ],
  },
  {
    id: "9",
    name: "Кольцо «Инфинити»",
    price: 62000,
    category: "rings",
    metal: "platinum",
    description: "Кольцо из платины с дорожкой бриллиантов в форме знака бесконечности. Воплощение вечной любви.",
    image: "https://images.unsplash.com/photo-1567201089878-9a4b4e3c70aa?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1567201089878-9a4b4e3c70aa?w=800&q=80",
    ],
  },
  {
    id: "10",
    name: "Серьги «Капля»",
    price: 22000,
    category: "earrings",
    metal: "silver",
    description: "Серебряные серьги в форме капли с черной эмалью. Смелый контраст для уверенных натур.",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    ],
  },
  {
    id: "11",
    name: "Браслет «Шарм»",
    price: 34500,
    category: "bracelets",
    metal: "gold",
    description: "Золотой браслет с авторскими подвесками-шармами. Каждая подвеска создаётся вручную и несёт свой символ.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    ],
  },
  {
    id: "12",
    name: "Колье «Луна»",
    price: 29000,
    category: "necklaces",
    metal: "silver",
    description: "Колье с лунным камнем в серебряной оправе ручной работы. Мистический блеск природного камня.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    ],
  },
];

export const categoryLabels: Record<Product["category"], string> = {
  rings: "Кольца",
  earrings: "Серьги",
  bracelets: "Браслеты",
  necklaces: "Колье",
};

export const metalLabels: Record<Product["metal"], string> = {
  gold: "Золото",
  silver: "Серебро",
  platinum: "Платина",
};

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  }).format(price);
}
