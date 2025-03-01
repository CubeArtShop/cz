export interface IProduct {
  id: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  imageUrl: string;
  rating: number;
  stock: number;
  type?: TProductType;
  size?: string;
}

export type TProductType = 'square' | 'horizontal' | 'vertical' | 'small square';

export type Category = 'VANILLA' | 'MINECRAFT_ART' | 'MOBS' | 'NATURE' | 'SIGNBOARDS' | 'MEMES' | 'OTHER';
