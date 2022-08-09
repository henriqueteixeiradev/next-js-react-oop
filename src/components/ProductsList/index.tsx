import React from "react";

import * as S from "./styled";

import { useProduct } from "../../hooks/useProductContext";
import ImportedProduct from "../../classes/ImportedProduct";
import UsedProduct from "../../classes/UsedProduct";

export function ProductsList() {
  const { products } = useProduct();

  const mask = (num: number) => {
    return num.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <S.Container>
      <S.List>
        {products.map((prod, index) => (
          <S.ContentList key={index}>
            {prod instanceof ImportedProduct ? (
              <S.ProductItem>
                <S.ProductCol>
                  <div>Nome: {prod.name}</div>
                  <div>Tipo: {prod.type}</div>
                </S.ProductCol>

                <S.ProductCol>
                  <div>Preço: {mask(prod.price)}</div>
                  <div>Taxa: {mask(prod.fee)}</div>
                  <S.LabelPrice>Preço Final: {prod.calcPrice()}</S.LabelPrice>
                </S.ProductCol>
              </S.ProductItem>
            ) : (
              <>
                {prod instanceof UsedProduct ? (
                  <S.ProductItem>
                    <S.ProductCol>
                      <div>Nome: {prod.name}</div>
                      <div>Tipo: {prod.type}</div>
                    </S.ProductCol>

                    <S.ProductCol>
                      <div>Preço: {mask(prod.price)}</div>
                      <div>Disconto: {mask(prod.discount)}</div>
                      <S.LabelPrice>
                        Preço Final: {prod.calcPrice()}
                      </S.LabelPrice>
                    </S.ProductCol>
                  </S.ProductItem>
                ) : (
                  <S.ProductItem>
                    <S.ProductCol>
                      <div>Nome: {prod.name}</div>
                      <div>Tipo: {prod.type}</div>
                    </S.ProductCol>

                    <S.ProductCol>
                      <div>Preço: {mask(prod.price)}</div>
                      <S.LabelPrice>
                        Preço Final: {prod.calcPrice()}
                      </S.LabelPrice>
                    </S.ProductCol>
                  </S.ProductItem>
                )}
              </>
            )}
          </S.ContentList>
        ))}
      </S.List>
    </S.Container>
  );
}
