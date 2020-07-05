//To get locations
export interface ILocations {
  pincode: number;
  locationName: string;
}

//To get product
export interface IProducts {
  product: IProductDetails[];
}

//To get product's details
export interface IProductDetails {
  quantity: string;
  selling_price: number;
  mrp: number;
  in_stock: boolean;
  brand: string;
  image: string;
}