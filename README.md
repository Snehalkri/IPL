# IPL Winner List using API(Json file created by own)
## Steps if creating new project
1. Install VS code [VS Code official website](https://code.visualstudio.com/).
2. Install node.js from [Node.js offical website](https://nodejs.org/en/download/) as per your system OS and configuration.
3. Create a folder at drive you want to  create your project using command line mkdir dir_name.
4. Open folder in VS Code using code . in project dir you are in cmd.
5. Using VS Code terminal create package.json file. Write Command npm init
package name: (pck_name)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
Is this OK? (yes) Yes
Hit enter
This will create package.json file.
6. In the package.json 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"nodemon app.js"
  }
 7.Install node modules using npm install node-modules.
   This will create node modules folder and package-lock.json
 8. Since I have not got proper API so I have created data folder << ipl.json file where I have kept all details of teams who won IPL from 2012-2020.
 9. Create app.js file and a views folder<<index.hbs.
 10. Now adding few dependencies  using following commands on VS code terminal-
     a) Express: npm install express
     b) For handlebars(.hbs): npm install express-handlebars to handle data comming as response.
 11. Now in app.js require express modules, data from json file and set your view engine as hbs as we are using handlebars to handle the response comming.
 12. In index.hbs created a table where the response is displayed.
 13. Now you can run your project using npm start.
 14. Data will be displayed on port number you have mentioned in app.listen part (for me it is port 8000)like http://localhost:8000/ in browser.
 15. For reference you can see the project structure and code.
## Otherwise 
Just pull the code and use by following steps-
1. Install VS code [VS Code official website](https://code.visualstudio.com/).
2. Install node.js from [Node.js offical website](https://nodejs.org/en/download/) as per your system OS and configuration.
3. Create a folder at drive you want to  create your project using command line mkdir dir_name.
4. Open folder in VS Code using code . in project dir you are in cmd.
5. Using VS Code terminal create package.json file. Write Command npm init
package name: (pck_name)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
Is this OK? (yes) Yes
Hit enter
This will create package.json file.
6. In the package.json 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"nodemon app.js"
  }
7.Install node modules using npm install node-modules.
   This will create node modules folder and package-lock.json
8.  Now you can run your project using npm start.
