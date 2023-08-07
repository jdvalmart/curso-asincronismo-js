import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';


function postData (urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode:'cors',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}


const data = {
    "title": "samsung galaxy a54 5g ",
    "price": 2500000,
    "description": "8 gb de ram, 256 de rom, pantalla super amoled, bateria de 5000 mah",
    "categoryId": 1,
    "images": [
        "https://i.linio.com/p/aa120e03881434113ed7d99b3d387019-product.webp"]
  }

  postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))