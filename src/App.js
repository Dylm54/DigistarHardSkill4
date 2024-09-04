
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import ErrorBoundary from './ErrorBoundary';


function App() {
  const [lists, setLists] = useState([])
  const [inputData, setInputData] = useState()

  const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=d64465f835d027114fd469afd4e2de72'

  useEffect(() => {
    const getData = async () => {
      try {
        const fetch = await axios.get(apiUrl)
        const data = await fetch.data.results
        console.log(data)
        setLists(data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])

  const handleSearch = async () => {
    try {
      const fetch = await axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=d64465f835d027114fd469afd4e2de72&query=${inputData}`)
      const data = await fetch.data.results
      setLists(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(inputData)

  return (
    <ErrorBoundary>
      <div className='wrapper'>
        <div>
          <h1>Movies</h1>
          <div>
            <input type="text" onChange={e => setInputData(e.target.value)}></input>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        {lists.map((item, i) => (
          <div key={i}>
            <h2>Title: {item.title}</h2>
            <p>{item.overview}</p>
            <img width={100} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}></img>
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}

export default App;
