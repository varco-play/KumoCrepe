export interface MenuItem {
  id: string
  name: string
  category: 'sweet-crepe' | 'specialty-drink'
  description: string
  price: string
  imageUrl: string
  badge?: string
}

export const menuItems: MenuItem[] = [
  // ─── Sweet Crepes ───────────────────────────────────────────────────────────
  {
    id: 'strawberry-dream',
    name: 'Strawberry Dream',
    category: 'sweet-crepe',
    description:
      'Fresh strawberries, house-made whipped cream, and Nutella drizzle folded in a delicate French crepe.',
    price: '$10.50',
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80',
    badge: 'Fan Favorite',
  },
  {
    id: 'paris-morning',
    name: 'Paris Morning',
    category: 'sweet-crepe',
    description:
      'Lemon curd, powdered sugar, and fresh blueberries in our classic thin-fold crepe.',
    price: '$9.75',
    imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80',
    badge: "Chef's Pick",
  },
  {
    id: 'bananas-foster',
    name: 'Bananas Foster',
    category: 'sweet-crepe',
    description:
      'Caramelized bananas, brown sugar butter sauce, cinnamon, and a drizzle of vanilla cream.',
    price: '$11.25',
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
  },
  // ─── Specialty Drinks ───────────────────────────────────────────────────────
  {
    id: 'kumo-cloud-latte',
    name: 'Kumo Cloud Latte',
    category: 'specialty-drink',
    description:
      'Espresso, oat milk, vanilla, and our signature cloud foam — silky-smooth and soul-warming.',
    price: '$6.50',
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80',
    badge: 'Signature',
  },
  {
    id: 'lavender-earl-grey',
    name: 'Lavender Earl Grey',
    category: 'specialty-drink',
    description:
      'Steeped Earl Grey tea with house lavender syrup, steamed oat milk, and dried lavender garnish.',
    price: '$5.75',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
  },
  {
    id: 'caramel-cascade',
    name: 'Caramel Cascade',
    category: 'specialty-drink',
    description:
      'Cold brew layered with house caramel, fresh cream, and a salted caramel dust finish.',
    price: '$7.00',
    imageUrl: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&q=80',
    badge: 'New',
  },
]
