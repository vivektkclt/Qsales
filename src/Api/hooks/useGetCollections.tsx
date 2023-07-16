import {useEffect, useState} from 'react';
import graphqlClient from '../interceptor';

const useGetCollections = (count: number) => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCollections = async () => {
      try {
        const response = await graphqlClient.post('', {
          query:
            `
            query getCollections {
              collections(first:` +
            count +
            `) {
                edges {
                  cursor
                  node {
                    id
                    handle
                    title
                    image {
                      originalSrc
                    }
                  }
                }
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
              }
            }
          `,
        });

        const {data} = response;
        if (data && data.collections && data.collections.edges) {
          setCollections(data.collections.edges);
        }
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    getCollections();
  }, [count]);

  return {collections, loading, error};
};

export default useGetCollections;
