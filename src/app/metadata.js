import React from 'react';

const Metadata = ({ title, description, keywords }) => (
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </head>
);

export default Metadata;