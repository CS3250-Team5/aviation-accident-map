## Aviation Accident Map
This repository contains code for two web pages, located in the admin-page folder and in the user-page folder.  The admin-page folder contains the code for the administration page of the product and the user-page folder contains the code for the state aviation accident map

## Setup
- Clone repository
- In the terminal/command prompt, navigate to the admin-page folder of the project
- Run `npm install --production`
- Run `npm install --save papaparse`
- In the terminal/command prompt, navigate to the user-page folder of the project
- Run `npm install --production`
- Run `npm install --save google-map-react`
- Run `npm install --save firebase`

## Tools Used
- Create-React-App boilerplate
- NodeJS
- Google-map-react dependency
- Papaparse dependency
- Firebase (Database and hosting)
- CSS Tooltips

## Spinning Up a Development Server
- In the "user-page" or "admin-page" directory, run `npm start` in the terminal/command prompt.  This will start a development server, useful for viewing live edits made to code.  The page that pops up will depend on what directory you're in

## Running with Docker
**Docker-compose will be used to build the docker images as there are inconsistencies building images using simple Docker commands in Windows 10 vs other operating systems**
- In the terminal/command prompt, navigate to the admin-page or user-page folder, depending on what image you want to build
- Run `docker-compose up -d --build`
- This command will build the docker image and then spin up a container. Note: Building the docker image will take a while
- Once the container is running, open up http://localhost:3000/ in your browser
- Changes to the web page can be seen live as the files are save  
**Make sure to stop your docker container after you finish editing or viewing the page.  Exiting out of your browser will not stop the container**
- To stop the container, run `docker-compose stop`
