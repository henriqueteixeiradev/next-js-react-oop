import Product from "./Product";
import { ProductType } from "../modules/types";

class ImportedProduct extends Product {
  private _fee: number;

  constructor(type: ProductType, name: string, price: number, fee: number) {
    super(type, name, price);

    this._fee = fee;
  }

  get fee(): number {
    return this._fee;
  }

  calcPrice(): string {
    const sum = this.price + this._fee;
    return sum.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
}

export default ImportedProduct;
