import Item from './components/Item';
import React, {useState} from "react";
import "./styleAddNew.css"
let puzzles = [
  {
      "id": 0,
      "description": "Зимой белый, летом зелёный, весной розовый, а осенью красный. Что это?",
      "options": [
          "Снег",
          "Елка",
          "Цветок",
          "Яблоко"
      ],
      "correct": 1
  },
  {
      "id": 1,
      "description": "Без окон и дверей, полна народа. Кто это?",
      "options": [
          "Книга",
          "Школа",
          "Комната",
          "Мышеловка"
      ],
      "correct": 0
  },
  {
      "id": 2,
      "description": "Что утром идёт на четырёх ногах, днём на двух, а вечером на трёх?",
      "options": [
          "Человек",
          "Собака",
          "Муравей",
          "Тень"
      ],
      "correct": 0
  },
  {
      "id": 3,
      "description": "Висит груша, нельзя сказать, что съедобна. Что это?",
      "options": [
          "Лампа",
          "Колокольчик",
          "Тряпка",
          "Сковородка"
      ],
      "correct": 0
  },
  {
      "id": 4,
      "description": "Бездна чёрная, в ней глаза светятся. Что это?",
      "options": [
          "Кот",
          "Звезды",
          "Лампа",
          "Пещера"
      ],
      "correct": 3
  }
]

function AddPuzzleForm({ onAddPuzzle }) {
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState(0);

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeOption = (index, e) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleChangeCorrectOption = (e) => {
    setCorrectOption(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPuzzle = {
      id: puzzles.length,
      description: description,
      options: options,
      correct: correctOption
    };
    onAddPuzzle(newPuzzle);
    setDescription('');
    setOptions(['', '', '', '']);
    setCorrectOption(0);
  };

  return (
    <form onSubmit={handleSubmit} className='addForm'>
      <div className='describeDiv'>
        <label for="describe">Описание загадки:</label>
        <textarea id='describe' value={description} onChange={handleChangeDescription} required />
      </div>
      <div className='optionDiv'>
        <label for="option">Варианты ответов:</label>
        {options.map((option, index) => (
          <input
            id='option'
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleChangeOption(index, e)}
            required
          />
        ))}
      </div>
      <div className='rightDiv'>
        <label for='right'>Правильный ответ:</label>
        <select id='right' value={correctOption} onChange={handleChangeCorrectOption}>
          {options.map((option, index) => (
            <option key={index} value={index}>Вариант {index + 1}</option>
          ))}
        </select>
      </div>
      <button type="submit">Добавить загадку</button>
    </form>
  );
}

function AddNewPuzzleToBD(newPuzzle){
  console.log(newPuzzle);
  puzzles.push(newPuzzle);
}

function App() {
  return (
    <div>
    <Item puzzles={puzzles}/>
    <p className='addPuzzleP'>Добавление загадки</p>
    <AddPuzzleForm onAddPuzzle={AddNewPuzzleToBD}/>
    </div>
  );
}

export default App;
