## Aviation Accident Map
This repository contains code for two web pages, located in the admin-page folder and in the user-page folder.  The admin-page folder contains the code for the administration page of the product and the user-page folder contains the code for the state aviation accident map

## Setup
- Clone repository
- Project uses npm as the package manager.  Install NodeJS if not already installed
- In the terminal/command prompt, navigate to the admin-page folder of the project
- Run `npm install --production`
- Run `npm install --save papaparse`
- Run `npm install --save firebase`
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
**Following steps are for pulling the docker images from docker hub and running the program locally**
- In the terminal/command prompt, run the following commands
- `docker pull beavelar/user-page`
- `docker pull beavelar/admin-page`
- `docker pull node`
- After the images fully pulled, run the following commands
`docker run -it \
-v ${PWD}:/usr/src/app \
-v /usr/src/app/node_modules \
-p 3000:3000 \
--rm \`
- `beavelar/user-page` or `beavelar/admin-page`, depending on what page you want to open up
- Once the container is running, open up http://localhost:3000/ in your web browser to view the web page
- To view the web pages simultaneously, change the port number in the docker commands and open up a web page of the local host with the other port number

## Building and Running with Docker-Compose
**Following steps are for building local docker images for the admin and user page, as well as spinning up a development server locally**
- In the terminal/command prompt, navigate to the admin-page or user-page folder, depending on what image you want to build
- Run `docker-compose up -d --build`
- This command will build the docker image and then spin up a container. Note: Building the docker image will take a while
- Once the container is running, open up http://localhost:3000/ in your web browser
- Changes to the web page can be seen live as the files are save  
**Make sure to stop your docker container after you finish editing or viewing the page.  Exiting out of your browser will not stop the container**
- To stop the container, run `docker-compose stop`
