# Covid Data

We will be creating a simple COVID data display app. It will be a REACT app that will have a node backend. Our node backend will simply pull data from this API. https://api.covidtracking.com/

All states: https://api.covidtracking.com/v1/states/current.json

For states maps, Using: https://www.npmjs.com/package/react-usa-map

* Here's an explanation of various tasks you'd want to do.:
* `yarn run lint` - Lint the code to make sure it follows standards and works correctly
* `yarn run test` - Run the test suite to make sure all tests pass
* `yarn run build` - Build the project
* `docker build --tag=covid .` - Build the docker image
* `docker run -d -p 3000:3000/tcp covid` - Run the docker image
* Site should be @ http://localhost:3000/
