import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Article from './Article';
import pugImage from './assets/pug.jpeg';


function App() {
  const articles = [
    {
      id: 1,
      image: pugImage,
      title: "Why Pug's Are Man's Best Friend",
      content: `Pugs, with their wrinkly faces and endearing personalities, have won the hearts of many. Here's why they're considered one of the best dog breeds:
      
      1. **Their Loving Nature**: Pugs are known for their affectionate nature. They thrive on human companionship and are often described as "shadows" because they like to stick close to their owners.

      2. **They're Great with Kids**: Thanks to their gentle temperament, pugs usually get along splendidly with children, making them perfect family pets.

      3. **Easy to Maintain**: While they may need regular cleaning around their facial wrinkles, pugs generally require less grooming compared to long-haired breeds.`,
      author: "EtaiGPT"
    },
  ];

  return (
    <div className="App">
      <h1>Pug Blog</h1>
      {articles.map(article => (
        <Article key={article.id} data={article} />
      ))}
    </div>
  );
}

export default App;

