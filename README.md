# Package Status server

Hosted on [https://reaktor-package-status.herokuapp.com/](https://reaktor-package-status.herokuapp.com/)

## Configuration

Make sure to create a file called `config.js` and copy the contents from `config.template.js` into it.

By default the provided status file is read. To use your system's status file make sure to provide the path in config.js.

## Setup

Install dependencies with `npm install`, make sure to do the same in the client directory.
After that just run the application with `npm start dev`, this starts the api server as well as the React client in development mode.

npm and node.js 12.0+ is required for this project to work.

By default the parsed status file can be accessed on [http://localhost:8816/status](http://localhost:8816/status)
The included HTML interface (a React app) can be accessed on [http://localhost:8816](http://localhost:8816) or hosted on [https://reaktor-package-status.herokuapp.com/](https://reaktor-package-status.herokuapp.com/)
