import Head from 'next/head';
import Image from 'next/image';
import blank from '../assets/blank.gif';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');

const [apiOutput, setApiOutput] = useState('');
const [isGenerating, setIsGenerating] = useState(false);

const callGenerateEndpoint = async () => {
  setIsGenerating(true);

  console.log('Calling OpenAI...');
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log('OpenAI replied...', output.text);

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
};


  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>The Complimentorrrr</title>
      </Head>
      <div className="container">
        <div className="header">
          <h2>
            ˚ 　.　 ✦˚　　 　　.　　˚　　. ✦　　˚　.🌍　˚　　　. ✦ 　　　.   　
            　　　˚　　　　　*　🌒　 　　✦　　　.　　.　　　 　　.
            　　　˚　　　. 　˚　　.🪐　*　　. 　˚˚　　　. 　˚　　.　*　　. ✦ ˚
          </h2>
          <div className="header-title">
            <h1>The Complimentorrrr</h1>
          </div>
          <div className="header-subtitle">
            <h2>
              Hey I'm a friendly AI bot 🤖 <br /> I'm powered by GPT-3 🚀 <br />
              <br />
              Hmu with a person's name and I'll compliment them ✨ <br />I also
              like to add emojis to my compliments 🤩
            </h2>
            <h2>⋆ 。゜☁︎ 。⋆You're Welcome 。゜☾゜。⋆</h2>
            <h2>༼ つ ◕_◕ ༽つ🍪</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea
            placeholder="start typing here"
            className="prompt-box"
            value={userInput}
            onChange={onUserChangedText}
          />
          <div className="prompt-buttons">
            <a
              className={
                isGenerating ? 'generate-button loading' : 'generate-button'
              }
              onClick={callGenerateEndpoint}
            >
              <div className="generate">
                <p>Generate</p>
              </div>
            </a>
          </div>
        </div>
        {apiOutput && (
          <div className="output">
            <div className="output-header-container">
              <div className="output-header">
                <h3>Output</h3>
              </div>
            </div>
            <div className="output-content">
              <p>{apiOutput}</p>
            </div>
          </div>
        )}
      </div>
      <div className="badge-container grow">
        <a
          href="https://alexdphan.com"
          // target="_blank"
          // rel="noreferrer"
        >
          <div className="badge">
            <Image src={blank} alt="buildspace logo" />
            <p>Alex Phan</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
