import {Svg, Path} from 'react-native-svg';
import React from 'react';

const BannerReturn = ({height = 22, width = 22, fill = '#BDAB35'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
      <Path
        d="M24.6381 5.90853C22.0942 3.36464 18.6928 1.93549 15.0628 1.93549C11.4614 1.93549 8.05995 3.33611 5.48747 5.90853L4.60145 6.79455V4.59361C4.60145 4.19345 4.25852 3.8505 3.85834 3.8505C3.45819 3.8505 3.11523 4.19343 3.11523 4.59361V8.56665C3.11523 8.9668 3.45817 9.30976 3.85834 9.30976H7.83139C8.23154 9.30976 8.57449 8.96682 8.57449 8.56665C8.57449 8.1665 8.23156 7.82354 7.83139 7.82354H5.63044L6.51646 6.93752C8.80316 4.65082 11.8329 3.39317 15.0342 3.39317C18.2357 3.39337 21.3225 4.67956 23.6091 6.96625C26.4389 9.79602 27.6679 13.8262 26.9248 17.7421C26.8391 18.1422 27.125 18.5424 27.5252 18.5996H27.6681C28.011 18.5996 28.3255 18.3424 28.3827 17.9993C29.2115 13.5974 27.8109 9.08135 24.6382 5.90863L24.6381 5.90853Z"
        fill={fill}
      />
      <Path
        d="M26.1817 21.6579H22.2087C21.8085 21.6579 21.4656 22.0008 21.4656 22.401C21.4656 22.8012 21.8085 23.1441 22.2087 23.1441H24.4096L23.5236 24.0301C18.836 28.7178 11.1757 28.7178 6.48809 24.0301C3.65847 21.2005 2.40082 17.1702 3.14387 13.2543C3.22961 12.8542 2.94369 12.454 2.54353 12.3968C2.14337 12.3111 1.7432 12.597 1.68598 12.9971C0.857178 17.3988 2.25759 21.915 5.40183 25.0878C8.03147 27.7174 11.5186 29.0323 14.9772 29.0323C18.4358 29.0323 21.9228 27.7173 24.5525 25.0878L25.4385 24.2017V26.4027C25.4385 26.8028 25.7814 27.1458 26.1816 27.1458C26.5818 27.1458 26.9247 26.8029 26.9247 26.4027L26.9249 22.401C26.9249 21.9723 26.5818 21.6578 26.1816 21.6578L26.1817 21.6579Z"
        fill={fill}
      />
      <Path
        d="M8.63173 19.8286L14.2912 22.8299L14.2914 15.5126L8.11743 12.2542V18.9712C8.11743 19.3428 8.31741 19.6572 8.63182 19.8287L8.63173 19.8286Z"
        fill={fill}
      />
      <Path
        d="M8.91748 10.9964L15.0343 14.2263L21.151 10.9964L15.4916 7.99534C15.2057 7.85238 14.8912 7.85238 14.6056 7.99534L8.91748 10.9964Z"
        fill={fill}
      />
      <Path
        d="M21.9515 18.9711V12.2541L15.7776 15.5126V22.8012L21.437 19.8C21.7517 19.6572 21.9516 19.3428 21.9516 18.9712L21.9515 18.9711Z"
        fill={fill}
      />
    </Svg>
  );
};

export default BannerReturn;
