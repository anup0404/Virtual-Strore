export interface ProductList {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  rating: number |null |undefined;
  description: string;
  brand: string;
  weight: number;
  returnPolicy: string;
  warrantyInformation: string;
  availabilityStatus: string;
  width: number;
  height: number;
  depth: number;
  stock: number;
  minimumOrderQuantity: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
}