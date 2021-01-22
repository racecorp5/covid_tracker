*Covid Data

We will be creating a simple COVID data display app. It will be a REACT app that will have a node backend. Our node backend will simply pull data from this API. https://api.covidtracking.com/

All states: https://api.covidtracking.com/v1/states/current.json

For states maps, Using: https://www.npmjs.com/package/react-usa-map

* Local Deploy:
1) `yarn run build`
2) `yarn run test`
3) `yarn run lint`
4) `docker build --tag=covid .`
5) `docker run -d -p 3000:3000/tcp covid`
