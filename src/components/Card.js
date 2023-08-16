import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, email, id }) => (
  <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
    <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
