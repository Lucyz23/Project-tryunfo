import React from 'react';
import PropTypes from 'prop-types';
import { Input, Checkbox, Select } from '.';

// import './Form.css';

function Form({ cardName, cardDescription, cardAttr1, cardAttr2,
  cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
  isSaveButtonDisabled, onInputChange, onSaveButtonClick }) {
  return (
    <div className="flex-1 form flex flex-column">
      <h2
        className="text-primary text-2 font-bold italic uppercase"
      >
        Adicione Nova Carta
      </h2>

      <Input
        type="text"
        label="Nome"
        name="name"
        value={ cardName }
        onChange={ onInputChange }
      />

      <Input
        type="textarea"
        label="Descrição"
        name="description"
        value={ cardDescription }
        onChange={ onInputChange }
      />

      <Input
        type="text"
        label="Foto"
        name="image"
        value={ cardImage }
        onChange={ onInputChange }
      />

      <Input
        type="number"
        label="Atributo 1"
        name="attr1"
        className="row"
        value={ cardAttr1 }
        onChange={ onInputChange }
      />

      <Input
        type="number"
        label="Atributo 2"
        name="attr2"
        className="row"
        value={ cardAttr2 }
        onChange={ onInputChange }
      />

      <Input
        type="number"
        label="Atributo 3"
        name="attr3"
        className="row"
        value={ cardAttr3 }
        onChange={ onInputChange }
      />

      <Select
        label="Escolha o nível de raridade"
        name="rare"
        options={ ['normal', 'raro', 'muito raro'] }
        value={ cardRare }
        onChange={ onInputChange }
      />

      <div className="actions">
        { !hasTrunfo ? <Checkbox
          label="Super Trunfo"
          name="trunfo"
          className="row-reverse"
          value={ cardTrunfo }
          onChange={ onInputChange }
        /> : <p>Você já tem um Super Trunfo em seu baralho</p> }

        <button
          type="button"
          data-testid="save-button"
          className="button bg-primary"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    </div>
  );
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
