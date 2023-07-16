import { useState } from 'react';
import Card from './components/Card.jsx';

function App() {
  const [rapAlbums, setRapAlbums] = useState(
    [
    {
      title: 'The Slim Shady LP',
      author: 'Eminem',
      year: 1999, 
      cover: "slim-shady.jpg",
    },
    {
      title: 'Кара-Тэ',
      year: 2004,
      cover: "kara-te.jpg",
    },
  ]
  )

  return (
    <div className="App bg-orange-400">
      <div className='max-w-1200 mx-auto p-5 '>
        {rapAlbums.map((card, index) => (
          <Card card={card} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default App;
