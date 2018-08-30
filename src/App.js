import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">

        <table class="title-bar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="45" src="camera.png" />
              </td>
              <td>
                <h1>Movie Searcher</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input class="search-bar" placeholder="Search for a movie" />

      </div>
    );
  }
}

export default App;
