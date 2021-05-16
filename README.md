# Project Title

## Text-Translation-Api

---
## Requirements

For development, you will only need Node.js and a node global package, Npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node, Mongodb installation on Ubuntu

  You can install nodejs, npm and mongodb, expressjs easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm
      $ sudo apt install mongodb-org
      
      
  To install mongodb compass, just run the following commonds.
  1. Download MongoDB Compass
 
      wget https://downloads.mongodb.com/compass/mongodb-compass_1.26.1_amd64.deb
      
  2. Install MongoDB Compass

      sudo dpkg -i mongodb-compass_1.26.1_amd64.deb
      
  3. Start MongoDB Compass
  
      mongodb-compass
  
  To install express js compass, just run the following commonds.
  
      npm install express
      

- #### Node, Mongodb installation on Windows
  1. You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).
  2. You can find more information about the installation on the  [official Mongodb website]( https://www.mongodb.com/1).
  3. You can find more information about the installation on the [official Mongodb Compass website](https://www.mongodb.com/products/compass).
  
  To install express js compass, just run the following commonds.
  
      npm install express
      
You can install nodejs, npm and mongodb by visiting the links given above.
 
If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.15.3

    $ npm --version
    6.14.9
    
    $ mongod --version
    4.4.6

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### 
---

## Install

    $ git clone https://github.com/rishabh15b/TextTranslationApi.git
    $ cd TextTranslationApi
    $ npm install
    
## Install some dev dependencies
    1. async by the given commond.
        npm i async      
    3. nodemon by given below commond.
        npm install --save-dev nodemon

## Running the project

      nodemon server.js    // server.js because it is mentioned in as my start file in scripts which is in package.json file and it is the main file.
    
