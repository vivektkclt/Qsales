/* eslint-disable no-catch-shadow */
// useGetBestSelling.js
import {useEffect, useState} from 'react';
import graphqlClient from '../interceptor';
import {useGetHomeBannersFiles} from '.';

const useGetHomeBannerList = () => {
  const [bannerImages, setBannerImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {bannerFiles} = useGetHomeBannersFiles();
  useEffect(() => {
    console.log(bannerFiles, 'FILES======', bannerFiles.length);
    const getBannerImages = async () => {
      try {
        let images: any = [];
        if (bannerFiles && bannerFiles.length > 0) {
          await bannerFiles.map(async (item: any) => {
            console.log(item, 'DATA======Id===');
            const response = await graphqlClient.post('', {
              query: `query GetImageSource($id: ID!) {
                    node(id: $id) {
                        ... on MediaImage {
                        image {
                            originalSrc
                        }
                        }
                    }
                    }
                `,
              variables: {
                id: item,
              },
            });
            const {data} = response;
            images = [data?.node?.image?.originalSrc, ...images];
            if (images.length === bannerFiles.length) {
              setBannerImages(images);
            }
          });
        }

        // setBannerImages(data?.metaobject?.fields[0].value);

        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    getBannerImages();
  }, [bannerFiles]);

  return {bannerImages, loading, error};
};

export default useGetHomeBannerList;
