export interface MenuItem {
  name: string;
  nameAm?: string;
  nameAr?: string;
  nameFr?: string;
  nameEs?: string;
  nameZh?: string;
  nameDe?: string;
  price: number;
  description: string;
  descriptionAm?: string;
  descriptionAr?: string;
  descriptionFr?: string;
  descriptionEs?: string;
  descriptionZh?: string;
  descriptionDe?: string;
  image: string;
  category: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  nameAm: string;
  nameAr: string;
  nameFr: string;
  nameEs: string;
  nameZh: string;
  nameDe: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'hot-drinks',
    name: 'Hot Drinks',
    nameAm: 'ትኩስ መጠጦች',
    nameAr: 'مشروبات ساخنة',
    nameFr: 'Boissons Chaudes',
    nameEs: 'Bebidas Calientes',
    nameZh: '热饮',
    nameDe: 'Heißgetränke',
    items: [
      { 
        name: 'Espresso', 
        nameAr: 'إسبريسو',
        nameFr: 'Espresso',
        price: 90, 
        description: 'A concentrated shot of coffee, brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.', 
        descriptionAr: 'جرعة مركزة من القهوة، يتم تحضيرها عن طريق دفع كمية صغيرة من الماء المغلي عبر حبوب القهوة المطحونة ناعماً.',
        descriptionFr: 'Un shot de café concentré, préparé en forçant une petite quantité d\'eau presque bouillante à travers des grains de café finement moulus.',
        image: '/images/espresso.jpg', 
        category: 'Hot Drinks' 
      },
      { name: 'Double Espresso', price: 130, description: 'Two shots of our premium espresso for a bolder kick.', image: '/images/espresso.jpg', category: 'Hot Drinks' },
      { name: 'Americano', price: 80, description: 'Espresso shots topped with hot water to produce a light layer of crema.', image: '/images/americano.jpg', category: 'Hot Drinks' },
      { name: 'Coffee', price: 100, description: 'Our signature house blend, brewed to perfection.', image: '/images/coffee.jpg', category: 'Hot Drinks' },
      { name: 'Cortado', price: 120, description: 'Equal parts espresso and warm milk to reduce the acidity.', image: '/images/latte.jpg', category: 'Hot Drinks' },
      { name: 'Macchiato', price: 120, description: 'Espresso stained with a small amount of foamed milk.', image: '/images/latte.jpg', category: 'Hot Drinks' },
      { name: 'Double Macchiato', price: 170, description: 'A double shot of espresso with a touch of milk foam.', image: '/images/latte.jpg', category: 'Hot Drinks' },
      { name: 'Hot Milk', price: 150, description: 'Steamed milk, perfect for a cozy moment.', image: '/images/milk.jpg', category: 'Hot Drinks' },
      { name: 'Cafe Latte', price: 200, description: 'A smooth blend of espresso and steamed milk, topped with a light layer of foam.', image: '/images/latte.jpg', category: 'Hot Drinks' },
      { 
        name: 'Cappuccino', 
        nameAr: 'كابتشينو',
        nameFr: 'Cappuccino',
        price: 210, 
        description: 'Espresso with equal parts steamed milk and deep, velvety foam.', 
        descriptionAr: 'إسبريسو مع أجزاء متساوية من الحليب المبخر ورغوة عميقة ومخملية.',
        descriptionFr: 'Espresso avec des parts égales de lait vaporisé et une mousse profonde et veloutée.',
        image: '/images/cappuccino.jpg', 
        category: 'Hot Drinks' 
      },
      { name: 'Hot Chocolate', price: 230, description: 'Rich, creamy chocolate melted into steamed milk.', image: '/images/hot-chocolate.jpg', category: 'Hot Drinks' },
      { name: 'Tea Latte', price: 170, description: 'A soothing blend of tea and steamed milk.', image: '/images/latte.jpg', category: 'Hot Drinks' },
      { name: 'Special Tea', price: 200, description: 'Our curator\'s choice of premium loose-leaf tea.', image: '/images/tea.jpg', category: 'Hot Drinks' },
      { name: 'Hibiscus Tea', price: 100, description: 'A vibrant, tart infusion of hibiscus flowers.', image: '/images/hibiscus.jpg', category: 'Hot Drinks' },
      { name: 'Flavor Tea', price: 120, description: 'Infused with natural fruit flavors.', image: '/images/tea.jpg', category: 'Hot Drinks' },
      { name: 'Black Tea', price: 70, description: 'Strong and classic brewed black tea.', image: '/images/tea.jpg', category: 'Hot Drinks' },
      { name: 'Fasting Macchiato', price: 150, description: 'Dairy-free macchiato using premium plant-based milk.', image: '/images/latte.jpg', category: 'Hot Drinks' },
      { 
        name: 'V60', 
        nameAr: 'في 60',
        nameFr: 'V60',
        price: 220, 
        description: 'Precision pour-over coffee, highlighting subtle flavor notes.', 
        descriptionAr: 'قهوة مقطرة بدقة، تبرز نكهات القهوة الخفيفة والمميزة.',
        descriptionFr: 'Café filtré avec précision, mettant en avant des notes aromatiques subtiles.',
        image: '/images/v60.jpg', 
        category: 'Hot Drinks', 
        featured: true 
      },
      { name: 'Syphon Coffee', price: 250, description: 'A theatrical brewing method that produces a clean, tea-like cup.', image: '/images/syphon.jpg', category: 'Hot Drinks', featured: true },
      { name: 'French Press', price: 240, description: 'Full-bodied coffee brewed with a traditional press.', image: '/images/french-press.jpg', category: 'Hot Drinks' },
      { name: 'Spriss', price: 180, description: 'A traditional layered coffee and tea drink.', image: '/images/spriss.jpg', category: 'Hot Drinks' },
    ]
  },
  {
    id: 'cold-beverages',
    name: 'Cold Beverages',
    nameAm: 'ቀዝቃዛ መጠጦች',
    nameAr: 'مشروبات باردة',
    nameFr: 'Boissons Froides',
    nameEs: 'Bebidas Frías',
    nameZh: '冷饮',
    nameDe: 'Kaltgetränke',
    items: [
      { name: 'Iced Hibiscus Tea', price: 150, description: 'Chilled hibiscus infusion over ice.', image: '/images/hibiscus.jpg', category: 'Cold Beverages' },
      { name: 'Iced Mocha Latte', price: 250, description: 'Rich espresso and chocolate over ice with cold milk.', image: '/images/iced-coffee.jpg', category: 'Cold Beverages' },
      { name: 'Iced Caramel Latte', price: 250, description: 'Sweet caramel and espresso over ice.', image: '/images/iced-coffee.jpg', category: 'Cold Beverages' },
      { name: 'Iced Latte', price: 220, description: 'Chilled espresso and milk over ice.', image: '/images/iced-coffee.jpg', category: 'Cold Beverages' },
      { name: 'Fasting Iced Latte', price: 270, description: 'Plant-based milk and espresso over ice.', image: '/images/iced-coffee.jpg', category: 'Cold Beverages' },
      { name: 'Iced Americano', price: 120, description: 'Espresso and cold water over ice.', image: '/images/iced-coffee.jpg', category: 'Cold Beverages' },
      { name: 'Mocha Frappe', price: 230, description: 'Blended coffee, chocolate, and ice topped with cream.', image: '/images/frappe.jpg', category: 'Cold Beverages', featured: true },
      { name: 'Caramel Frappe', price: 230, description: 'Blended coffee, caramel, and ice.', image: '/images/frappe.jpg', category: 'Cold Beverages' },
    ]
  },
  {
    id: 'mojito',
    name: 'Mojito',
    nameAm: 'ሞሂቶ',
    nameAr: 'موهيتو',
    nameFr: 'Mojito',
    nameEs: 'Mojito',
    nameZh: '莫吉托',
    nameDe: 'Mojito',
    items: [
      { name: 'Strawberry Mojito', price: 250, description: 'Fresh strawberries, mint, lime, and soda.', image: '/images/mojito.jpg', category: 'Mojito', featured: true },
      { name: 'Mint Lemonade', price: 250, description: 'Refreshing blend of mint and lime.', image: '/images/mojito.jpg', category: 'Mojito' },
      { name: 'Mango Mojito', price: 250, description: 'Tropical mango twist on the classic mojito.', image: '/images/mojito.jpg', category: 'Mojito' },
      { name: 'Pineapple Mojito', price: 250, description: 'Zesty pineapple with fresh mint.', image: '/images/mojito.jpg', category: 'Mojito' },
      { name: 'Watermelon Mojito', price: 250, description: 'Cool watermelon and mint infusion.', image: '/images/mojito.jpg', category: 'Mojito' },
    ]
  },
  {
    id: 'juices',
    name: 'Juices',
    nameAm: 'ጭማቂዎች',
    nameAr: 'عصائر',
    nameFr: 'Jus',
    nameEs: 'Jugos',
    nameZh: '果汁',
    nameDe: 'Säfte',
    items: [
      { name: 'Avocado', price: 200, description: 'Creamy, thick avocado juice.', image: '/images/juice.jpg', category: 'Juices' },
      { name: 'Papaya', price: 200, description: 'Sweet and refreshing papaya juice.', image: '/images/juice.jpg', category: 'Juices' },
      { name: 'Mixed Fruit Juice', price: 250, description: 'A seasonal blend of fresh local fruits.', image: '/images/juice.jpg', category: 'Juices', featured: true },
      { name: 'Strawberry Banana Smoothie', price: 250, description: 'Blended strawberries and bananas with a creamy base.', image: '/images/smoothie.jpg', category: 'Juices' },
    ]
  },
  {
    id: 'snacks',
    name: 'Snacks',
    nameAm: 'መክሰስ',
    nameAr: 'وجبات خفيفة',
    nameFr: 'Snacks',
    nameEs: 'Aperitivos',
    nameZh: '小吃',
    nameDe: 'Snacks',
    items: [
      { name: 'Croissant Plain', price: 100, description: 'Flaky, buttery traditional croissant.', image: '/images/croissant.jpg', category: 'Snacks' },
      { name: 'Croissant Chocolate', price: 120, description: 'Buttery croissant filled with rich chocolate.', image: '/images/croissant.jpg', category: 'Snacks' },
      { name: 'Sambussa (Meat)', price: 50, description: 'Savory pastry filled with spiced meat.', image: '/images/sambussa.jpg', category: 'Snacks' },
      { name: 'Sambussa (Lentil)', price: 50, description: 'Vegan-friendly spiced lentil filling.', image: '/images/sambussa.jpg', category: 'Snacks' },
      { name: 'Spring Roll (Veg.)', price: 50, description: 'Crispy rolls with fresh vegetable filling.', image: '/images/spring-roll.jpg', category: 'Snacks' },
      { name: '3 Piece in One', price: 120, description: 'A selection of our three most popular snacks.', image: '/images/snacks-plate.jpg', category: 'Snacks', featured: true },
      { name: 'English Cake', price: 120, description: 'Classic moist English sponge cake.', image: '/images/cake.jpg', category: 'Snacks' },
      { name: 'Banana Cake', price: 120, description: 'Sweet and moist banana bread style cake.', image: '/images/cake.jpg', category: 'Snacks' },
    ]
  },
  {
    id: 'drinks',
    name: 'Drinks',
    nameAm: 'መጠጦች',
    nameAr: 'مشروبات',
    nameFr: 'Boissons',
    nameEs: 'Bebidas',
    nameZh: '饮料',
    nameDe: 'Getränke',
    items: [
      { name: 'Soft Drinks', price: 70, description: 'Assorted bottled sodas.', image: '/images/soft-drink.jpg', category: 'Drinks' },
      { name: 'Ambo Water', price: 80, description: 'Sparkling mineral water.', image: '/images/water.jpg', category: 'Drinks' },
      { name: 'Water 500ml', price: 60, description: 'Still spring water.', image: '/images/water.jpg', category: 'Drinks' },
    ]
  }
];

