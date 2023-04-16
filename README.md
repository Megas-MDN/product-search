# Project Product Search

Fullstack application! By combining the product APIs from Buscapé and Mercado Livre, I have created a platform that allows you to view products from different categories and marketplaces. Additionally, you can use the search bar to find a specific product and filter the results by category and marketplace to help you find the right product.

The deployment of this application can be found at the following address: [Deploy-frontend](https://product-search-production.up.railway.app/).

The link to the backend repository that serves this application can be found at the following address: [Repo-backend](https://github.com/Megas-MDN/buscape-api-web-scraping). As for the backend deployment link, it can be accessed at the following address: [Deploy-backend](https://buscape-api-web-scraping-production.up.railway.app/).

<hr>

## Application flow

![application-running](https://i.imgur.com/eDGfN6H.gif)

Firstly, upon entering the application's homepage ( / ), the frontend requests the products within the categories (cellphone, TV, and refrigerator) from the backend. The backend retrieves this information from the online platforms of Buscape and Mercado Livre, with the request being made upon loading the initial page. The backend will always consult these sites (Buscape and Mercado Livre).

When performing a search on the application, the frontend sends information such as the category (TV, cell phone, refrigerator, or all) and the store (Buscapé, Mercado Livre, or all), in addition to the content entered in the search field. The request also includes a secret authentication key in the header, as the backend needs to check if a search with the same fields has been performed previously.

If the search has been performed previously, the backend returns the results stored in the database. Otherwise, the backend performs the search on the official platforms (Buscapé and Mercado Livre) and checks if the secret key sent in the request header matches the secret key stored in the backend. If the keys match, the result of the new search will be stored in the database. If they do not match, the search result will be sent but not stored in the database, in order to protect against malicious inputs.

The search results are displayed in cards on the frontend, including information such as name, description, price, image, and origin of the information (Buscapé or Mercado Livre). If there are more than 58 results, the pagination button will be enabled.

The globe icon in the header indicates that the data was fetched from online platforms, while a rectangle icon indicates that the origin of the information was the database.

<hr>

## 🧐 Features

- **Homepage with categories (celular, tv e geladeira) and products requested from the backend.**
- **Search field with a text input and two drop-downs to select category and store.**
- **Cards showing the search results, with product information such as name, description, price, image, and site of origin (buscapé or mercado livre).**
- **Pagination button to move forward or backward through the result pages.**
- **Buttons on the left side for quick scrolling to the beginning or end of the page.**
<hr>

## 🛠️ Install project

1. Clone the repository

```bash
git clone https://github.com/Megas-MDN/product-search.git
```

2. Enter the cloned folder

```bash
cd product-search
```

3. Install the dependencies

```bash
npm install
```

4. Build the project

```bash
npm start
```

5. Run in development mode

```bash
npm run dev
```

6. Run tests

```bash
npm run test
```

<hr>

## 📦 Environment variables

To run this project, you will need to add the following environment variables to your .env file.

`VITE_URL_GETALL`=Endpoint to fetch all products.

`VITE_URL_SEARCH`=Endpoint that accepts query parameters to fetch the results of a search.

`VITE_HASH_ATT`=secret_keys

🌟 Ready to use!

<hr>

## 💻 Built with:

- [javascript](https://www.w3schools.com/js/js_es6.asp) : Language
- [Vite](https://vitejs.dev/) : Frontend build tooling
- [React](https://expressjs.com/pt-br/) : Framework
- [Mongo DB Atlas](https://www.mongodb.com/atlas/database) : Data base
- [Vitest](https://vitest.dev/) : Tests
- [Railway](https://railway.app/) : Deploy developer mode
- [Vercel](https://vercel.com/) : Deploy production mode

<hr>
<p align="center">
Developed with ❤️ by Megas
</p>
