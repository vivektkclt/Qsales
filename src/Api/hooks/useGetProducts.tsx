/* eslint-disable no-catch-shadow */
// useGetBestSelling.js
import {useEffect, useState} from 'react';
import graphqlClient from '../interceptor';

const useGetProducts = (handle: any, count: any) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(handle, 'Handle======');
    const getProducts = async () => {
      try {
        const response = await graphqlClient.post('', {
          query:
            `
            query getProductsInCollection($handle: String!) {
  collection(handle: $handle) {
    id
    title
    products(first:` +
            Number(count) +
            `) {
      edges {
        node {
          id
          title
          handle
          vendor
          availableForSale
          images(first: 1) {
            edges {
              node {
                id
                url
                width
                height
                altText
              }
            }
          }
          priceRange { # Returns range of prices for a product in the shop's currency.
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
}
          `,
          variables: {
            handle: handle,
            count: count,
          },
        });

        const {data} = response;
        setProducts(data?.collection?.products?.edges);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    getProducts();
  }, [handle, count]);

  return {products, loading, error};
};

export default useGetProducts;
