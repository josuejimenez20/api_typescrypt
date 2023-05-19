# api_typescrypt
Learning typescryps creating an api with node js, typescrypt and mongodb.

First step: 
  Write the command "npm install"
That will install all packages the project needed.

Seconst step: 
  Create a file .env with the variables: 
    PORT: The port where the aplication will run
    DB_URL: Your mongodb url for connect the database
      example: DB_URI=mongodb+srv://<user>:<password>@cluster0.x0ienra.mongodb.net/?retryWrites=true&w=majority
    JWT_SECRET: The key authenticacion for create the password encrypt 

Third step: 
  Write the command "npm start".
    You would have to see in the cmd the message "listening PORT 3001" and "db connected".
  
Fourty step: 
  Review the index route logic for understand how to create a request.
  Little explain: If you create a new file in route folder, with the name "images"
  the route index will review the all files in route folder and will create the new route
  the route would be "http://localhost:3002/images".
