/* eslint-disable no-catch-shadow */
// useGetBestSelling.js
import {useEffect, useState} from 'react';
import graphqlClient from '../interceptor';

const useGetProductImages = (productId: string) => {
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(productId, 'PRODUCT ID=======');
    const getProductImages = async () => {
      try {
        const response = await graphqlClient.post('', {
          query: `query GetImageSource($id: ID!) {
                    node(id: $id) {
                      ...on Product {
                        id
                          media(first: 10) {
                          edges {
                            node {
                              mediaContentType
                              alt
                              ...mediaFieldsByType
                            }
                          }
                        }
                      }
                    }
                  }
                  fragment mediaFieldsByType on Media {
                    ...on ExternalVideo {
                      id
                      host
                          originUrl
                    }
                    ...on MediaImage {
                      image {
                        url
                      }
                    }
                  
                  
                  }
                `,
          variables: {
            id: productId,
          },
        });

        const {data} = response;
        console.log(data?.node?.media?.edges, 'IMAGES=====11');
        setProductImages(data?.node?.media?.edges);

        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    getProductImages();
  }, [productId]);

  return {productImages, loading, error};
};

export default useGetProductImages;
