# Contact REST API

this project demonstrate how to create REST API using node.js using sequelize as ORM to access data from mysql

## Getting Started

First of all make sure you already installing Node.js and npm in your system. you can download the installer here https://nodejs.org/en/

### Installation

install express-generator and sequelize-cli

```
npm install -g sequelize-cli express-generator
```

next, install all dependencies needed to run the server

```
npm install
```

### Configuration
edit the config.json in config folder file to match your database requirement

then running the database migration (generating table in mysql database)
```
sequelize db:migrate
```

### Running the server
run the server using this command
```
node app.js
```

