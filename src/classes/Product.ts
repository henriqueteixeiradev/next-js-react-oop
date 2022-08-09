import { ProductType } from "../hooks/types";

class Product {
  private _type: ProductType;
  private _name: string;
  private _price: number;

  constructor(type: ProductType, name: string, price: number) {
    this._type = type;
    this._name = name;
    this._price = price;
  }

  get type(): ProductType {
    return this._type;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  calcPrice(): string {
    return this.price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
}

export default Product;
