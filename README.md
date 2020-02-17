# Package Status server

Hosted on [https://reaktor-package-status.herokuapp.com/](https://reaktor-package-status.herokuapp.com/)

The server has very few dependencies. The client uses react which itself uses a lot of dependencies but no additional packages are used.

## Configuration

The server can be configured `config.js`. The most important option is the status file path, by default the provided status file is used instead of the system's status file.

## Setup

Install dependencies with `npm install`, make sure to do the same in the client directory.
After that just run the application with `npm start dev`, this starts the api server as well as the React client in development mode.

npm and node.js 12.0+ is required for this project to work.

By default the parsed status file can be accessed on [http://localhost:8816/status](http://localhost:8816/status)
The included HTML interface (a React app) can be accessed on [http://localhost:8816](http://localhost:8816) or hosted on [https://reaktor-package-status.herokuapp.com/](https://reaktor-package-status.herokuapp.com/)
