
interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: ProductType[],
  addItem: (item: any) => void,
  removeItem: (id: number) => void,
  clearCart: () => void;
}


export type { ProductType, CartContextType };