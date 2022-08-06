import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { toast } from "react-toastify";
import BuyPage from "./Components/BuyPage";
import BottomNav from "./Components/BottomNav";
import { random, commerce } from "faker";
import axios from "axios";

const apiKey = "563492ad6f91700001000001d8ef04807aed4d98a31bb19cc3af17d5";
const url = "https://api.pexels.com/v1/search?query=toy&per_page=6&page=1";

const App = () => {
  const [product, setProduct] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const response = await axios(url, {
      headers: {
        Authorization: apiKey,
      },
    });

    const { photos } = response.data;

    const allProducts = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,

      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));
    setProduct(allProducts);
  };

  const addInCart = (item) => {
    if (cartItem.indexOf(item) !== -1) return;
    setCartItem([...cartItem, item]);
    console.log(cartItem);
  };

  return (
    <div className="App">
      <BuyPage addInCart={addInCart} product={product} />
      <BottomNav />
    </div>
  );
};

export default App;
