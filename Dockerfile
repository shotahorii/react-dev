# Env for react app development.
# Run this image with following options: -it -p 8080:8080 -v $(pwd):/app

FROM node:12

RUN touch 'package.json'
RUN echo '{ "name": "react-dev", "version": "0.0.0", "description": "", "scripts": { "start": "cd app && ../node_modules/.bin/webpack-dev-server --mode development" }, "dependencies": {}, "devDependencies": {} }' > package.json

RUN npm install --save-dev webpack webpack-cli webpack-dev-server
RUN npm install -g webpack webpack-cli
RUN npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
RUN npm install --save-dev react react-dom
RUN npm install --save-dev react-router react-router-dom
RUN npm install --save-dev axios

# below are optional libraries. Comment out if you don't need them
RUN npm install --save react-bootstrap bootstrap
RUN npm install --save leaflet react-leaflet 
RUN npm install --save d3

CMD ["bash"] 
# To start server: $ npm start
# To bundle js: $ cd app && webpack --mode development

EXPOSE 8080