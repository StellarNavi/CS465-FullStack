# Travlr Getaways FullStack Application

## Architecture
This project used server-side rendering with Express.js and Handlebars HTML templates for the frontend paired with JavaScript to dynamically manage data on the backend. SPA was used for modular views allowing for fast and seamless interactability, feeling like a highly responsive app instead of waiting for full page refreshes. A MongoDB database, leveraging NoSQL, was incorporated to flexibly store unstructured travel data, supporting scalability beyond the static JSON file originally used.

## Functionality
JSON (JavaScript Object Notation) is a lightweight format for data storage and transport, different from JavaScript because it strictly represents structured data without executable code. In this project, JSON tied the frontend (Handlebars templates) and backend (Express routes/controllers) by providing a consistent way to read and render travel data. Refactoring examples include separating view templates into reusable portions such as headers and footers and modularizing routes and controllers, which improved maintainability, reduced redundancy, and simplified future updates across the UI.

## Testing
In a full stack app, methods like GET and PUT request endpoints were manually tested using browser requests (as well as Postman to better view any errors). Testing became more complex when authentication was added in which required token validation and secured route testing.

## Reflection
This project helped strengthen my understanding of full stack architecture, expand on my understanding of the MVC design model, and server-client data flow. I developed skills in routing, templating, modular JavaScript design, and learned how to prepare a project for database integration which, as a data analyst alreaday, is exciting to see how everything comes together to see how the data is truly allocated and represented. I believe these skills have better prepared me for roles such as web development, backend engineering, or data science, where I can contribute to bringing a product to life by understanding backend data APIs, system pipelines, data usage across applications, and security considerations.
