import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          id
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState('');

  const [getLocations, { error, loading, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div className="">Spinner...</div>}
      {error && <div className="">Something when wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => (
            <li key={character.id}>{character.location.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
