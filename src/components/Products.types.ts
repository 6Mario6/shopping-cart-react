export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // You could use Date if you convert the date to a Date type when receiving it
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string; // You could use Date if you convert the date to a Date type when receiving it
  updatedAt: string; // You could use Date if you convert the date to a Date type when receiving it
  barcode: string;
  qrCode: string;
}

// Definition of the main Product type
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string | undefined;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export type CartProduct = Product & {
  quantity: number;
};
