import React, { useState } from 'react';

function App() {
  const [responseData, setResponseData] = useState(null);

  const sendPostRequest = async () => {
    const url = 'https://recipe-recommender-w5nk.onrender.com/recommend_recipes'; // Replace with your API endpoint
    const data = {
      key1: 'value1',
      key2: 'value2'
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      setResponseData(result); // Update state with the response data
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Send POST Request with Fetch</h1>
        <button onClick={sendPostRequest}>Send Request</button>
        {responseData && (
          <div>
            <h2>Response:</h2>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
