import React from "react";
import { CreateProducts } from "../components/CreateProducts";
import { ProductsList } from "../components/ProductsList";

import * as S from "./styled";

export function Main() {
  return (
    <S.Container>
      <CreateProducts />
      <ProductsList />
    </S.Container>
  );
}
