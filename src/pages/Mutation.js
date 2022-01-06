import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: String!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
        quantityPerUnit
      }
    }
  }
`;

export default function Mutation() {
  const [productName, setProductName] = useState('');
  const [quantityUnit, setQuantityUnit] = useState('');

  const [createProduct, { error, loading, data }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: productName,
        quantityPerUnit: quantityUnit,
      },
    }
  );

  console.log({ error, loading, data });
  return (
    <div>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        value={quantityUnit}
        onChange={(e) => setQuantityUnit(e.target.value)}
      />
      <button onClick={() => createProduct()}>Add Product</button>

      {loading && <p>Spinner...</p>}
      {error && <p>Something when wrong !</p>}
      {data && (
        <p>
          {data.createProduct.record.name} unit{' '}
          {data.createProduct.record.quantityPerUnit}
        </p>
      )}
    </div>
  );
}
