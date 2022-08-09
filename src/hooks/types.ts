import { ReactNode } from "react";
import ImportedProduct from "../classes/ImportedProduct";
import Product from "../classes/Product";
import UsedProduct from "../classes/UsedProduct";

export type ProductList = Product | ImportedProduct | UsedProduct;

export enum ProductType {
  Common = 1,
  Imported = 2,
  Used = 3,
}

export interface ProductContextType {
  products: ProductList[];
  saveProduct: (prod: ProductList) => void;
}

export interface Props {
  children: ReactNode;
}
