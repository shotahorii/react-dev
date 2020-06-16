# React Development Environment
Simple environment for react app development on docker.

## Getting Started

### Prerequisites
- docker installed 
- node image is pulled by docker pull node

### Build a docker image for this repo's environment

`cd` to the directory where Dockerfile is located, then type below. 

```
docker build -t shotahorii/react-dev-env .
```
Note1: `shotahorii/react-dev-env` in the command above is the name of the docker image. This can be any other name that you'd like to call this image.   
Note2: Don't forget `.` at the end of the command. 

### Run

```
docker run --rm -it -p 8080:8080 -v $(pwd):/app shotahorii/react-dev-env
```