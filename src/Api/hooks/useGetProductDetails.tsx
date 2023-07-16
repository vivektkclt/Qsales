/* eslint-disable no-catch-shadow */
// useGetBestSelling.js
import {useEffect, useState} from 'react';
import graphqlClient from '../interceptor';

const useGetProductDetails = (productHandle: string) => {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(productHandle, 'PRODUCT HANDEL=======');
    const getProductDetails = async () => {
      try {
        const response = await graphqlClient.post('', {
          query: `query getProductByHandle($handle: String!) {
                    product(handle: $handle) {
                        id
                        title
                        description
                        variants(first: 3) {
                        edges {
                            cursor
                            node {
                            id
                            title
                            quantityAvailable
                            price {
                                amount
                                currencyCode
                            }
                            }
                        }
                        }
                    }
                    }
                `,
          variables: {
            handle: productHandle,
          },
        });

        const {data} = response;
        console.log(data, 'Details=====11');
        setProductDetails(data?.product);

        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    getProductDetails();
  }, [productHandle]);

  return {productDetails, loading, error};
};

export default useGetProductDetails;
