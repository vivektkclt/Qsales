/* eslint-disable no-catch-shadow */
// useGetBestSelling.js
import {useEffect, useState} from 'react';
import graphqlClient from '../interceptor';

const useGetHomeBannersFiles = () => {
  const [bannerFiles, setBannerFiles] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBannerFiles = async () => {
      try {
        const response = await graphqlClient.post('', {
          query: `query getMetaObject($id: ID!) {
                  metaobject(id: $id) {
                    fields {
                      value
                    }
                  }
                }
                `,
          variables: {
            id: 'gid://shopify/Metaobject/1163854113',
          },
        });

        const {data} = response;
        if (data?.metaobject?.fields && data?.metaobject?.fields.length > 0) {
          console.log(
            JSON.parse(data?.metaobject?.fields[0].value),
            'BANNER LIST',
          );
          setBannerFiles(JSON.parse(data?.metaobject?.fields[0].value));
        }

        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    getBannerFiles();
  }, []);

  return {bannerFiles, loading, error};
};

export default useGetHomeBannersFiles;
