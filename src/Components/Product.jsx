import React from "react";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";
import Head from "./Head";

const Product = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchData(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (erro) {
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;
  return (
    <section className={`${styles.product} animeLeft`}>
      <Head
        title={`Store | ${product.nome}`}
        description={`Store | This is a product:${product.nome}`}
      />
      <div>
        {product.fotos.map((pic) => (
          <img key={pic.src} src={pic.src} alt={pic.titulo} />
        ))}
      </div>
      <div>
        <h1>{product.name}</h1>
        <span className={styles.price}>${product.preco}</span>
        <p className={styles.description}>{product.descricao}</p>
      </div>
    </section>
  );
};

export default Product;
