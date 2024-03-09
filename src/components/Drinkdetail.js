import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const url = "https://api.punkapi.com/v2/beers";

function Drinkdetail() {
    const [drinks, setDrinks] = useState([]);
    const [searchValue, setsearchValue] = useState(""); 

    const fetchDrinks = async () => {

            const response = await fetch(url);
            const data = await response.json();
            setDrinks(data);
        
    };

    useEffect(() => {
        fetchDrinks();
    }, []);

    const handleSearch = (event) => {
        setsearchValue(event.target.value.toLowerCase());
    }

    const filteredDrinks = drinks.filter(drink => drink.name.toLowerCase().includes(searchValue)); 

    return (
        <div>
            <div className="container hero my-4">
  <div className="row">
    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
      <h1> <b>Get your Drinks🍹 Right</b> </h1>
       <h2><span>with React Drinks App</span></h2> 
       {/* <a href="#choose-semester" class="btn btn-primary get-started">Get Started</a> */}
    </div>
    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
    <img src="beer-react.png" class="img-fluid hero-image" alt=""/>
    </div>
  </div>
</div>
            <input type="text" className="form-control mb-3" placeholder="Search Drinks..." onChange={handleSearch} />
            <div className="row">
                {filteredDrinks.map(drink => ( 
                    <div className="col-md-3 my-3" key={drink.id}>
                        <div className="card text-center shadow" style={{ width: '16rem', height: '32rem' }}>
                            <img src={drink.image_url} className="card-img-top mx-auto my-4" alt={drink.name} style={{ height: '320px', width: '140px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{drink.name}</h5>
                                <p className="card-text">{drink.tagline.substring(0, 50)}</p>
                                <Link to={`/product/${drink.id}`} className="btn btn-primary">More Info</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Drinkdetail;
