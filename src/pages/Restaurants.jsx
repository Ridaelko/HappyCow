import { useState, useEffect } from "react";
import axios from "axios";

import { IoMdStar } from "react-icons/io";

const Restaurants = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
        );
        // console.log(response.data);
        // const firstTenRestaurants = response.data.slice(0, 10);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("error =>", error);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <p>Chargement ...</p>
  ) : (
    <main>
      <div className="container">
        <div className="h1-restaurant">
          <h1>Vegan Food</h1>
        </div>

        <div className="resto">
          {data.map((restaurant) => {
            return (
              <div key={restaurant.placeId} className="restaurant">
                {restaurant.pictures[0] ? (
                  <img src={restaurant.pictures[0]} alt={restaurant.name} />
                ) : (
                  <img src="../src/assets/plaholder.png" alt="" />
                )}

                <h2>{restaurant.name} </h2>
                <span>{restaurant.address.split(",")[1]}</span>
                <span>{restaurant.address.split(",")[2]} </span>
                <p>{restaurant.description} </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Restaurants;
