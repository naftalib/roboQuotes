import React from 'react';

const Card = ({ name, email,id}) => {
  return (
    <div className='tc grow bg-lightest-blue br4 pa1 ma2 dib'>
      <img alt='robots' src={`https://robohash.org/${id}?size=100x100`} />
      <div className='card_content'>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
