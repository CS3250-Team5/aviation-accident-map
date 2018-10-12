## Aviation Accident Map
This repository contains code for two web pages, located in the admin-page folder and in the user-page folder.  The admin-page folder contains the code for the administration page of the product and the user-page contains the code for the state aviation accident map.

## Setup
- Clone repository
- In the terminal/command prompt, navigate to the admin-page folder of the project
- Run `npm install`
- In the terminal/command prompt, navigate to the user-page folder of the project
- Run `npm install`
- Run `npm install --save google-map-react`

## Tools Used
- Create-React-App boilerplate
- Google-map-react dependencies

## Spinning Up a Development Server
- In the "user-page" or "admin-page" directory, run `npm start`.  This will start a development server, useful for viewing live edits made to code

## Running with Docker
- In the terminal/command prompt, navigate to the admin-page or user-page folder, depending on what image you want to build
- Run the following commands:
`docker build -t NAME-OF-DOCKER-IMAGE` (Edit NAME-OF-DOCKER-IMAGE to your image name of choosing)
```
docker run -it \
-v ${PWD}:/usr/src/app \
-v /usr/src/app/node_modules \
-p 3000:3000 \
--rm \
NAME-OF-DOCKER-IMAGE
```
(Enter the name you choose for the docker image)
- These commands will build the docker image and then spin up a container
- Once the container is running, open up http://localhost:3000/ in your browser
- Changes to the web page can be seen live as the files are save
