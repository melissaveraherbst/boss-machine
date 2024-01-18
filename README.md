<div align=center>

<img src="https://github.com/melissaveraherbst/boss-machine/assets/84316275/86742e26-be27-4534-a296-1cfecf7a0c84" width=350px />
  
# A Codecademy Project from the Backend Engineer Career Path

![Static Badge](https://img.shields.io/badge/HTML5-grey?style=flat-square&logo=html5)
![Static Badge](https://img.shields.io/badge/CSS3-grey?style=flat-square&logo=css3)
![Static Badge](https://img.shields.io/badge/JavaScript-grey?style=flat-square&logo=javascript)
![Static Badge](https://img.shields.io/badge/Node.js-grey?style=flat-square&logo=node.js)
![Static Badge](https://img.shields.io/badge/React-grey?style=flat-square&logo=react)
![Static Badge](https://img.shields.io/badge/Mocha-grey?style=flat-square&logo=mocha)
![Static Badge](https://img.shields.io/badge/Codecademy%20Project-grey?style=flat-square&logo=codecademy)
</div>

An API to serve information to a Boss Machine, a unique management application for today’s most accomplished (evil) entrepreneurs! 🦹🏼‍♀️  
Manage your ‘minions’, your brilliant ‘million dollar ideas’, and handle all the annoying meetings that keep getting added to your busy schedule 📅.

## 🎯 Project Goal

The goal of this project is to focus on Express routes. Starter files included everything except for the contents server.js and the routes in the server folder.

## 🕹️ How to Use

To get started, follow these steps:

1. Open the root project directory in your terminal.
2. Run the following command to install the project dependencies and build the front-end application:

    ```bash
    npm install
    ```

3. Once the installation is complete, start the server with the following command:

    ```bash
    npm run start
    ```

4. Check your terminal for the message "Server listening on port 4001." This indicates that the server is running.
5. The npm run start script will automatically restart the server whenever changes are made to the server.js file or the server/ folder. If you prefer to disable this feature, start your server using the following command:

    ```bash
    node server.js
    ```

6. To stop the server or the npm script, use the Ctrl + C command in your terminal.

Make sure to use Google Chrome (version 60 or higher) or Firefox (version 55 or higher) for the best experience.

## 🧩 API Endpoints

**/api/minions** 

* GET /api/minions to get an array of all minions.
* POST /api/minions to create a new minion and save it to the database.  
* GET /api/minions/:minionId to get a single minion by id.  
* PUT /api/minions/:minionId to update a single minion by id.  
* DELETE /api/minions/:minionId to delete a single minion by id.

<div>  
<img src="https://github.com/melissaveraherbst/boss-machine/assets/84316275/844f3e3f-0672-4a79-99c7-b18b102b86cf" alt="" width="32%"/>
<img src="https://github.com/melissaveraherbst/boss-machine/assets/84316275/1204ee3b-c834-464a-9c36-efdfdbc8d576" alt="" width="32%"/>  
<img src="https://github.com/melissaveraherbst/boss-machine/assets/84316275/3e18e7b5-ea6a-49d1-8d0c-b3cdbff0221f" alt="" width="32%"/>  
</div>  

<br>

**/api/ideas**

* GET /api/ideas to get an array of all ideas.  
* POST /api/ideas to create a new idea and save it to the database.  
* GET /api/ideas/:ideaId to get a single idea by id.  
* PUT /api/ideas/:ideaId to update a single idea by id.  
* DELETE /api/ideas/:ideaId to delete a single idea by id.

<div> 
<img src="https://github.com/melissaveraherbst/boss-machine/assets/84316275/d7f6195a-8037-4331-bcae-90e0e2a9da76" alt="" width="32%"/>
<img src="https://github.com/melissaveraherbst/boss-machine/assets/84316275/3cdcaed0-b0f7-4b26-a271-d14fef89acdb" alt="" width="32%"/>
</div>

<br>

**/api/meetings**

* GET /api/meetings to get an array of all meetings.
* POST /api/meetings to create a new meeting and save it to the database.
* DELETE /api/meetings to delete all meetings from the database.
<>
<img src="https://github.com/melissaveraherbst/boss-machine/assets/84316275/597425c8-6154-4ef3-a48e-fde791b4f022" alt="" width="32%"/>
</>

## 🧪 Testing

This project includes a testing suite that covers essential functionality and edge cases.

Follow these steps to run the tests:

1. Open the root project directory in your terminal.
2. Run the following command to install all necessary testing dependencies (perform this step only once):

    ```bash
    npm install
    ```

3. Execute the following command to run the tests:

    ```bash
    npm run test
    ```

4. The terminal will display a list of tests along with information on whether each test passed. If a test fails, additional specific output explaining the reason for the failure will be provided.
5. While the terminal is open, the tests will automatically re-run each time you save server files. To exit the testing loop, use Ctrl + C.
6. If you prefer to run the tests only once without the automatic re-run feature, you can do so and then exit the terminal.you can run the mocha command in the terminal from your project root directory.
