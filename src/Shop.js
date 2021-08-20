import React, {useEffect, useState} from "react";
import "./App.css";
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItem()
  }, []);
  const [items, setItems] = useState([])
   
  const fetchItem = async () => {
    const data = await fetch("https://reqres.in/api/users?page=1");
    const items = await data.json();
    setItems(items.data)
    console.log(items.data);
  }
    return (
      <div className="App">
        {items.map(item => {
          return <h1 key={item.id}>
            <Link to={`/shop/${item.id}`}>
              {item.first_name} {item.last_name}
            </Link>
            </h1>
        })}
      </div>
    );
  }
  
  export default Shop;