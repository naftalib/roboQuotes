import React from 'react';

const Card = ({ name, email,id}) => {
  return (
    <div className='tc grow bg-lightest-blue br4 pa3 ma3 dib'>
      <img alt='robots' src={`https://robohash.org/${id}?size=150x150`} />
      <div className='card_content'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
