import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Video({ match }) {
  const { id } = useParams();

  useEffect(() => {
    const domain = 'https://homeservice.daily.co/';

    axios
      .get(`/video-call/${id}`)
      .then(res => {
        if (res.status === 200) {
          const script = document.createElement('script');
          script.innerHTML = `window.DailyIframe.createFrame({
            iframeStyle: {
              position: "relative",
              width: "1360px",
              height: "500px",
              border: "0",
              zIndex: 1000
            },
            theme: {
              colors: {
      accent: '#e83551',
      accentText: '#FFFFFF',
      background: '#FFFFFF',
      backgroundAccent: '#FBFCFD',
      baseText: '#000000',
      border: '#ebeff4',
      mainAreaBg: '#ebeff4',
      mainAreaBgAccent: '#EC407A',
      mainAreaText: '#FFFFFF',
      supportiveText: '#808080',
              },
            },
            showLeaveButton: true,
            showFullscreenButton: true,
          }).join({
            url: "${domain}${id}",
          });`;

          document.body.appendChild(script);
        }
      })
      .catch(err => console.log(err));
  }, [id]);

  return <div></div>;
}
