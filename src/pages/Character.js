import React from 'react';
import './Character.css';
import { useCharacter } from '../hooks/useCharacter';
import { useParams } from 'react-router';

export default function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (loading) return <div className="">spinner...</div>;
  if (error) return <div className="">something went wrong</div>;

  return (
    <div className="Character">
      <img src={data.character.image} alt="" />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => (
            <div key={episode.id} className="">
              {episode.name} - <b>{episode.episode}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
