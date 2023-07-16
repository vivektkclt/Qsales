/* eslint-disable no-catch-shadow */
// useGetBestSelling.js
import {useEffect, useState} from 'react';
import graphqlClient from '../interceptor';

const useGetCart = () => {
  const [cartDetails, setcartDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCartData = async () => {
      try {
        const response = await graphqlClient.post('', {
          query: `mutation {
          checkoutLineItemsAdd(lineItems: [{ variantId: "gid://shopify/Product/8128164200737", quantity: 1 }], checkoutId: "gid://shopify/Checkout/d44e2700c567fdd9cc9d3b48c9a879ba?key=09e75260c924bbcf54e6138122ea9ce3") {
            checkout {
              id
              lineItems(first: 5) {
                edges {
                  node {
                    title
                    quantity
                  }
                }
              }
            }
            checkoutUserErrors {
              message
            }
          }
        }
                `,
          //   variables: {
          //     handle: productHandle,
          //   },
        });

        const {data} = response;
        console.log(data, 'Details=====11');
        setcartDetails(data?.product);

        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    getCartData();
  }, []);

  return {cartDetails, loading, error};
};

export default useGetCart;
