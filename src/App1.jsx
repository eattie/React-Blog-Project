import { useState } from 'react';
import Article from './Article';
import pugImage from './assets/pug.jpeg';
import './App.css';
import './article.css';

function App1() {
  const articles = [
    {
      id: 1,
      image: pugImage,
      title: "Why Pugs Are Man's Best Friend",
      content: (
        <>
          <span style={{ fontSize: '18px' }}>
            Pugs, with their <strong>wrinkly faces</strong> and <strong>endearing personalities</strong>, have won the hearts of many. Here's why they're considered one of the best dog breeds:
          </span>
            
          <ol style={{ fontSize: '18px' }}>
            <li><strong>Their Loving Nature</strong>: Pugs are known for their affectionate nature. They thrive on human companionship and are often described as "shadows" because they like to stick close to their owners.</li>
      
            <li><strong>They're Great with Kids</strong>: Thanks to their gentle temperament, pugs usually get along splendidly with children, making them perfect family pets.</li>
      
            <li><strong>Easy to Maintain</strong>: While they may need regular cleaning around their facial wrinkles, pugs generally require less grooming compared to long-haired breeds.</li>
          </ol>
        </>
      ),
      author: "EtaiGPT"
      
      
    },
  ];

  const DogLoverButton = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Press if you love PUGS!</button>
            <p>{count} people have pressed this button!</p>
        </div>
    );
  }

  return (
    <div className="App">
      <h1>Pug Blog</h1>
      {articles.map(article => (
        <Article key={article.id} data={article} />
      ))}
      <DogLoverButton />
    </div>
  );
}

export default App1;


