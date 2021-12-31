Recomendacion: copia el archivo package.json y usalo para futuros proyectos, solo cambia el nombre del archivo que se ejecutará

1. npm init -y


2. añadir en package.json en scripts : 
    "start": "npm run build && node ./build/server.js",
    "dev": "nodemon --exec ./node_modules/.bin/babel-node src/server.js",
    "build:babel": "babel -d ./build ./src -s",
    "build": "npm run build:babel",
    "prettier": "prettier src/**/*.js",
    "prettier:fix": "prettier --write src/**/*.js"


3. instalar babel
npm install @babel/cli @babel/core @babel/node @babel/preset-env --save-dev


4. instalamos nodemon, para no subir y bajar el servidor cada vez que hagamos un cambio
npm install nodemon


5. instalamos express
npm install express --save

6. instalamos cors
npm install cors

BASE DE DATOS MONGODB

7. instalamos mongoose para manejar el CRUD
npm install mongoose 

Nota: usamos bcrypt para obtener los hash de contraseñas

8. instalamos bcrypt para hacer el checkHash
npm install bcryptjs

9. instalamos jsonwebtoken
npm install jsonwebtoken

10. instalamos libreria para manejar variables de entorno
npm install dotenv


11. en el front instalamos libreria para decodificar el jsonwebtoken
npm install jwt-decode
