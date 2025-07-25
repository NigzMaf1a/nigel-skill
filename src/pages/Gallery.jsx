import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import fetchMovies from '../scripts/fetchMovies';

export default function Gallery() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      navigate('/login');
    }
  }, [loggedIn, navigate])

  useEffect(() => {
    setTimeout(() => {
      setMovies(fetchMovies());
      setLoading(false);
    }, 5000)
  }, []);
  return (
    <div className="container py-4">
        <h2 className="text-center mb-4 ">Gallery</h2>
        { 
          loading ? (<p className="text-center text-muted">Loading</p>):(
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {movies.map((movie) => (
                <div className="col" key={movie.id}>
                  <div className="card h-100">
                    <img src={movie.image} className="card-img-top" alt={movie.title} />
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">{movie.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        }
        <button type="button" className="btn btn-primary" onClick={() => {
                    localStorage.clear();
                    navigate('/login');
                  }
          }>Logout</button>
    </div>
  );
}
