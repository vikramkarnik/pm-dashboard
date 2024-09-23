Before running any commands specified in this file make sure the container for backend is up and running 
From the root folder of the project, open command promt and run following commands

docker build -t pmd-fe .

docker run -d -p 80:80 pmd-fe

once the container for the react app is running, go to http://localhost/