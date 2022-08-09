import Product from "./Product";
import { ProductType } from "../modules/types";

class UsedProduct extends Product {
  private _discount: number;

  constructor(
    type: ProductType,
    name: string,
    price: number,
    discount: number
  ) {
    super(type, name, price);
    this._discount = discount;
  }

  get discount(): number {
    return this._discount;
  }

  calcPrice(): string {
    const sub = this.price - this.discount;
    return sub.toLocaleString("pt-bt", {
      style: "currency",
      currency: "BRL",
    });
  }
}

export default UsedProduct;
