<div align=center>

<img src="https://github.com/melissaveraherbst/boss-machine/assets/84316275/86742e26-be27-4534-a296-1cfecf7a0c84" width=350px />
  
# A Codecademy Project from the Backend Engineer Career Path

![Static Badge](https://img.shields.io/badge/HTML5-grey?style=flat-square&logo=html5)
![Static Badge](https://img.shields.io/badge/CSS3-grey?style=flat-square&logo=css3)
![Static Badge](https://img.shields.io/badge/JavaScript-grey?style=flat-square&logo=javascript)
![Static Badge](https://img.shields.io/badge/Node.js-grey?style=flat-square&logo=node.js)
![Static Badge](https://img.shields.io/badge/Mocha-grey?style=flat-square&logo=mocha)
![Static Badge](https://img.shields.io/badge/Codecademy%20Project-grey?style=flat-square&logo=codecademy)
</div>

An API to serve information to a Boss Machine, a unique management application for today’s most accomplished (evil) entrepreneurs! 🦹🏼‍♀️  
Manage your ‘minions’, your brilliant ‘million dollar ideas’, and to handle all the annoying meetings that keep getting added to your busy schedule.

## 🎯 Project Goal

The goal of this project is to focus on Express routes. Starter files included everything except for the content of the server.js file. 

## 🕹️ How to Use

First, open the root project directory in your terminal. Run npm install to install the dependencies of this project and build the front-end application. Once it has finished installing, you can run npm run start to begin your server. You’ll see Server listening on port 4001 in the terminal. The npm run start script will automatically restart your server whenever you make changes to the server.js file or server/ folder. If you want to turn this off, simply start your server with the node server.js command. You can kill either process with the Ctrl + C command.

You should use Google Chrome (at least version 60) or Firefox (at least version 55). 

## 🧩 API Routes

**/api/minions** 

* GET /api/minions to get an array of all minions. 
* POST /api/minions to create a new minion and save it to the database.  
* GET /api/minions/:minionId to get a single minion by id.  
* PUT /api/minions/:minionId to update a single minion by id.  
* DELETE /api/minions/:minionId to delete a single minion by id.

**/api/ideas**

* GET /api/ideas to get an array of all ideas.  
* POST /api/ideas to create a new idea and save it to the database.  
* GET /api/ideas/:ideaId to get a single idea by id.  
* PUT /api/ideas/:ideaId to update a single idea by id.  
* DELETE /api/ideas/:ideaId to delete a single idea by id.  

**/api/meetings**

* GET /api/meetings to get an array of all meetings.
* POST /api/meetings to create a new meeting and save it to the database.
* DELETE /api/meetings to delete all meetings from the database.

## 🧪 Testing
A testing suite has been provided, checking for all essential functionality and edge cases.

To run these tests, first open the root project directory in your terminal. Then, run npm install to install all necessary testing dependencies (you will only need to do this step once).

Finally, run npm run test. You will see a list of tests that ran with information about whether or not each test passed. After this list, you will see more specific output about why each failing test failed. While they are open in a terminal window, these tests will re-run every time you save server files. If you want to quit the testing loop, use Ctrl + C. If you only want to run the tests once, you can run the mocha command in the terminal from your project root directory.
