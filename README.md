# bionic-reader-api-frontend
A frontend to convert text to Bionic Reader format via API built with node, webpack and JS

Provides a frontend interface to paste text into a textarea window and generate text formatted in the Bionic Reader style using their API.

The App is built with Node using Webpack. The API is accessed via RapidAPI and the program will need an .env file adding to the root and an "API_KEY" creating with a vlid key.

Running "npm run build" will create the dist folder and all needed source files.

The settings are in place to run a local instance of this test App using "npm run dev" which will compile all files and open a browser navigating to http://localhost:3000 where you can test out the App.
