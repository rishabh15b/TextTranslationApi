English text to Hindi, Polish and Russian

![Postman testing](https://user-images.githubusercontent.com/55358003/118481443-1fd0f300-b731-11eb-9377-edb8155d70d1.JPG)

Arabic text to English and Hindi

![Postman testing2](https://user-images.githubusercontent.com/55358003/118481833-89510180-b731-11eb-8e11-43a7e4ec3abc.JPG)

The translated text save in databse  (last 5 entries)

![Database screenshot2](https://user-images.githubusercontent.com/55358003/118481859-97068700-b731-11eb-8838-6cd29bb78f2f.JPG)


# Project Title

## Text-Translation-Api

---
## Requirements

The language code given in the link are used for translation purpose [Supported Languages for translations](https://cloud.google.com/translate/docs/languages)

For development, you will only need Node.js and a node global package, Npm, installed in your environement.

### Installation

- #### Node, Mongodb installation on Windows
  1.  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
      Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).
  2. You can find more information about the installation on the  [official Mongodb website]( https://www.mongodb.com/1).
  3. You can find more information about the installation on the [official Mongodb Compass website](https://www.mongodb.com/products/compass).
  
  To install express js compass, just run the following commonds.
  
      npm install express
      
You can install nodejs, npm and mongodb by visiting the links given above.

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
    2. nodemon by given below commond.
        npm install --save-dev nodemon

## Running the project

   -- nodemon server.js and must be running on localhost:3000  // server.js because it is mentioned in as my start file in scripts which is in package.json file and it is the                                                                     main file.
   
   -- mongodb server mast be running on 27017 PORT.
      
      
- ## Design of the Project
  
1. Before starting any Node.js project we should run `npm init` to create a new package.json file for our project. Doing this we have to anwer few basic question to start developing pour project.

2. Then we install express js to start writing our web application.

3. Now I made a new file named `server.js` to start writing my simple express application for `text-transalation` in which i imported `create server` form `http`, configured a      PORT number using which on my web brower i will run my project.

4. Made a new file `app.js` which i imported in my main server.js file. Now in my app.js file I imported express and the code that i wrote was to give the response if any error    comes while running the server when requesting data from server.

5. Now I made two new files:

   One `conn.js` in which i configured my `mongodb connection` to store all my data whcih is a No-Sql type database and used `mongodb compass` to see all my database. Imported      stored.js file in conn.js.
   
   Second stored.js in whcih I worked on my data schema, to show what all data willbe asked and will be stored in my database.
   
6. Now I made a new file text.js in which i started working on my `text-transaltion-api`, I used `@vitalets/google-translate-api` for my real text translation. Imported my          conn.js. Now used `HTTP method POST` which is used to send data to a server to create/update a resource and used `async` that permits other processing to continue                before the transmission has finished. 
   
   
- ## Approach and Solution towards the problem given:
 
-- My approach towards this project was to take the languages, text from the user and translate in to the given language and then store it into my database. Now if any other        person wants the same translation so he has not to again translate if the same text and language is there in my database it will show the translated text and will not push it    again.
   
-- So to solve this problem I declared a empty list first, then run a loop from `0 to language length` so that text can we translated for each language given which was in the      form of array. Then declared a variable in whcih I used my transalate function which i declared before in whcih I passed my two parameters text and language. Now declared a      new variable in which my translated text for every language and to store in in my databse i used `user.save()` commond. 
   This code was functioal, now if we had to check if the text and language is stored in datbase so I declated a new variable in which i used `db.findOne()` commond. After          all this i passed status.send commond and showed the translation in the form of json file.
   
- ## Testing of Project

   I used `POSTMAN` to test all my POST request. In postman at the place of `Enter request URL` type `localhost:3000/text` and select POST. Then choosing raw as json write the      text and language for the translated text and then click on send.
     
  
    try {
        var list = []
        for (var i = 0; i < req.body.lang.length; i++) {

            const fill = await Stored.findOne({
                text: req.body.text,
                lang: req.body.lang[i]
            })           
            if (!fill) {
                const r = await translate(req.body.text, { to: req.body.lang[i] });

                console.log(r.text);
                list.push(r.text);

                const user = new Stored({ text: req.body.text, lang: req.body.lang[i], translatedText: r.text });
                await user.save()
            }
            else{
                list.push(fill.translatedText)               
            }
        }
        res.status(201).send({
            text: req.body.text,
            translatedtext: list,
            language: req.body.lang
        });
    } 
    
    
     Screenshots are given of testing done on POSTMAN and database are all at starting of readme.
    
