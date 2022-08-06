// import logo from './logo.svg';
import './App.css';
import requests from './requests';
import Row from "./Row";
import Banner from './Banner';
import Navbar from './Navbar'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* NAVBAR */}
        <Navbar/>
      {/* BANNER */}
        <Banner />
        
        <Row title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
        isLargerow 
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </header>
    </div>
  );
}
export default App;
