import React from 'react';

const Metadata = ({ title, description, keywords }) => (
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11453676363"></script> 
    <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11453676363'); </script>
  </head>
);

export default Metadata;
