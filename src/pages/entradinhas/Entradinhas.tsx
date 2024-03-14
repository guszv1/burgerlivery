import { useEffect, useState } from "react";
import { Button, CategoryList, Layout, ProductCard } from "../../components";
import { ProductCategories, ProductWrapper } from "./Entradinhas.style";
import { ProductCardContent,ProductCardPrice,} from "../../components/ProductCard/ProductCard.style";

export default function Entradinhas() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);


return (
    <Layout>
      <h1>Entradinhas</h1>
      <ProductCategories>
        {categories.map((item, index) => (
          <CategoryList key={index} data={item} />
        ))}
      </ProductCategories>
      <ProductWrapper>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductCardContent>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <Button onClick={() => {}}>Adicionar</Button>
            </ProductCardContent>
            <ProductCardPrice>
              {priceFormat(product.values.single)}
            </ProductCardPrice>
            <img src={product.image[0]} alt={product.title} />
          </ProductCard>
        ))}
      </ProductWrapper>
    </Layout>
  );