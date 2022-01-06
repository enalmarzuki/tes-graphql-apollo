/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import './CharacterList.css';

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div className="">spinner...</div>;
  if (error) return <div className="">something went wrong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => (
        <Link to={`/${character.id}`} key={character.id}>
          <img src={character.image} />
          <h2>{character.name}</h2>
        </Link>
      ))}
    </div>
  );
}
