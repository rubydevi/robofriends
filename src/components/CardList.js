import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ robots }) => {
  const robotCards = robots.map((robot) => (
    <Card
      key={robot.id}
      id={robot.id}
      name={robot.name}
      email={robot.email}
    />
  ));

  return (
    <div>
      {robotCards}
    </div>
  );
};

CardList.propTypes = {
  robots: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
};

export default CardList;
