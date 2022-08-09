import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import * as S from "./styles";

import { ProductType } from "../../hooks/types";
import { useProduct } from "../../hooks/useProductContext";
import Product from "../../classes/Product";
import UsedProduct from "../../classes/UsedProduct";
import ImportedProduct from "../../classes/ImportedProduct";

export function CreateProducts() {
  const { saveProduct } = useProduct();
  const [type, setType] = useState<ProductType>(ProductType.Common);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [fee, setFee] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  const handleSubmith = (event: SyntheticEvent) => {
    event.preventDefault();

    if (type.toString() === ProductType.Common.toString()) {
      saveProduct(new Product(type, name, price));
    }

    if (type.toString() === ProductType.Used.toString()) {
      saveProduct(new UsedProduct(type, name, price, discount));
    }

    if (type.toString() === ProductType.Imported.toString()) {
      saveProduct(new ImportedProduct(type, name, price, fee));
    }

    setType(ProductType.Common);
    setName("");
    setPrice(0);
    setFee(0);
  };

  const changeSelectItem = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    const target = event.target as any;

    if (!target.value) {
      alert("Selecione um tipo de produto");
    }

    setType(target.value);
  };

  return (
    <S.Form onSubmit={handleSubmith}>
      <label htmlFor="type">Tipo de Produto</label>
      <select onChange={changeSelectItem} value={type} name="type">
        <option value={ProductType.Common}>Comum</option>
        <option value={ProductType.Imported}>Importado</option>
        <option value={ProductType.Used}>Usado</option>
      </select>

      <label htmlFor="name">Nome do Produto</label>
      <input
        value={name}
        name="name"
        onChange={(event) => setName(event.currentTarget.value)}
      />

      <label htmlFor="price">Preço</label>
      <input
        value={price}
        name="price"
        onChange={(event) => setPrice(parseFloat(event.currentTarget.value))}
      />

      {type.toString() === ProductType.Imported.toPrecision() && (
        <>
          <label htmlFor="fee">Taxa do Produo</label>
          <input
            value={fee}
            name="fee"
            onChange={(event) => setFee(parseFloat(event.currentTarget.value))}
          />
        </>
      )}

      {type.toString() === ProductType.Used.toString() && (
        <>
          <label htmlFor="discount">Desconto do Produto</label>
          <input
            value={discount}
            name="discount"
            onChange={(event) =>
              setDiscount(parseFloat(event.currentTarget.value))
            }
          />
        </>
      )}

      <button type="submit">Cadastrar</button>
    </S.Form>
  );
}
