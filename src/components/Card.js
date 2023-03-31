import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

function Card({ cardName, cardDescription, cardAttr1, cardAttr2,
  cardAttr3, cardImage, cardRare, cardTrunfo }) {
  return (
    <div className="card">
      <div>
        <h2
          data-testid="name-card"
          className="card-header"
        >
          {cardName !== '' ? cardName : 'Sem Nome'}
        </h2>

        <div className="card-image--wrapper">
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="card-image"
          />
        </div>

        <p
          data-testid="description-card"
          className="card-description"
        >
          {cardDescription !== '' ? cardDescription : 'Sem nenhuma descrição'}
        </p>
        <div className="card-attrs">
          <p data-testid="attr1-card">
            <span>Atributo 1</span>
            <span className="attr-number">{cardAttr1}</span>
          </p>
          <p data-testid="attr2-card">
            <span>Atributo 2</span>
            <span className="attr-number">{cardAttr2}</span>
          </p>
          <p data-testid="attr3-card">
            <span>Atributo 3</span>
            <span className="attr-number">{cardAttr3}</span>
          </p>
        </div>
        <p style={ { display: 'none' } } data-testid="rare-card">{cardRare}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
};

export default Card;
