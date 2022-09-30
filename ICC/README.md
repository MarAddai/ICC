 
 to unzip tar
 tar xvf filename.tar
 
 # install docker and docker compose

 
 # Run the application
 To run the app with native node use (1) from ICC folder, but to run interactive mode with hot reloading use (2) from ICC folder
 (1) `docker-compose up --build`
 (2) `docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml up --build`

 
 # mongodb+srv://JerryICCProject:<password>@cluster0.8i4bp1b.mongodb.net/test
 
 # DATABASE_URL='mongodb://root:example@mongo:27017/'

 
 # Build an image - the period here is build context in the docker-compose file, -t is to tag our new image as that name
 `docker build . -t icc-api`


 # run latest icc-api container and open a bash shell  -it is interactive mode   -d is detached 
 `docker run -it icc-api /bin/bash`

 # all images you have locally that you can build containers from
 `docker image ls`

# shows all currently running containers
 `docker ps`

# kill running containers
 `docker kill {container ID}`

# checks to see if image is already there and then use docker run
`docker-compose up`

# build images before running containers
`docker-compose up --build`


## % chmod +x ./run.sh
## (base) jerryyono@Jerrys-MacBook-Air ICC % chmod +x ./run.dev
