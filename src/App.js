import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';

// import './App.css';

function App() {
  const [state, setState] = useState({
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  });

  const [cards, setCards] = useState([]);

  const [hasTrunfo, setHasTrunfo] = useState(false);

  const onSaveButtonClick = () => {
    if (state.cardTrunfo) setHasTrunfo(true);

    setCards((prevState) => [...prevState, state]);

    setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  const onDeleteButtonClick = (index) => {
    setCards([...cards.filter((card, i) => {
      if (i === index && card.cardTrunfo) setHasTrunfo(false);

      return i !== index;
    })]);
  };

  useEffect(() => {
    const isValid = () => {
      const maxAttr = 90;
      const sumMaxAttr = 210;

      if ([
        state.cardName,
        state.cardDescription,
        state.cardImage,
      ].some((value) => value === '')) return false;

      if ([
        state.cardAttr1,
        state.cardAttr2,
        state.cardAttr3,
      ].some((value) => value < 0)) return false;

      if ([
        state.cardAttr1,
        state.cardAttr2,
        state.cardAttr3,
      ].some((value) => value > maxAttr)) return false;

      if (hasTrunfo && state.cardTrunfo) return false;

      return (Number(state.cardAttr1) + Number(state.cardAttr2) + Number(state.cardAttr3)
        <= sumMaxAttr);
    };

    const validState = isValid();

    if (state.isSaveButtonDisabled && validState) {
      setState((prevState) => ({ ...prevState, isSaveButtonDisabled: false }));
    } else if (!state.isSaveButtonDisabled && !validState) {
      setState((prevState) => ({ ...prevState, isSaveButtonDisabled: true }));
    }
  }, [state, hasTrunfo]);

  return (
    <>
      <header className="flex my-60 justify-center">
        <div className="box-header liner-gradient shadow rounded-sm">
          <h1
            className="box-header--inner
              px-20 text-7 font-bold uppercase liner-gradient my-25"
          >
            Tryunfo
          </h1>
        </div>
      </header>

      <div className="flex mx-60 p-50 bg-white rounded-sm gap-y-25">
        <Form
          { ...state }
          hasTrunfo={ hasTrunfo }
          onInputChange={ setState }
          onSaveButtonClick={ onSaveButtonClick }
        />

        <div className="flex flex-1 align-center flex-column">
          <h2
            className="text-primary text-2 font-bold italic uppercase mb-15"
          >
            Pré-visualização
          </h2>

          <Card { ...state } />
        </div>
      </div>

      <h2
        className="text-align-center
        text-white text-2 font-bold italic uppercase my-25 mt-60"
      >
        Pré-visualização
      </h2>

      <div className="cards">
        {
          cards.map((card, index) => (
            <div key={ `${card.cardName}-${index}` }>
              <Card { ...card } />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => onDeleteButtonClick(index) }
              >
                Excluir
              </button>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
