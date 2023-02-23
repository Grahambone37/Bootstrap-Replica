import React from 'react'

import NavbarDiv from './components/Navbar'
import LocationForm from './components/Location-Form'
import StoreListings from './components/Store-Listings'

function App() {


  return (
    <div className="App">
      <header>
        <NavbarDiv />
      </header>
      <main>
        <div>
          <LocationForm />
        </div>
        <div>
          <StoreListings />
        </div>
      </main>
    </div>
  );
}

export default App;
