# SpaceXLaunch

Angular application to list and browse all launches by SpaceX program.

## Stack Details
- Angular 10.2.4 : For designing and developing the front-end of the application
- Node.js 14.15.0 
- Angular Universal : For Server Side Rendering boilerplate
- SCSS for styling

## Development Approach

1. I started off with understanding the requirements and created an outline of different parts of the application how will they connect with each other eg. Server Side Rendering and State Transfer
2. I integrated the boilerplate for Server Side rendering using Angular Universal that comes with Express engine.
3. After basic testing of the express middleware, I stated creating my UI
    - I created the components (launches and page-not-found) without using the CLI and added them to router and AppModule files
4. For UI, I started creating the designs for mobile first
    - I started off by expilictly setting margin and padding to 0px in html and body because browsers often add it automatically
    - I used grid layout for creating the basic structure of the webpage
    - Then I created designs for each data card 
    - I used dummy space-x data for seeing how the UI looks on mobile
5. After the UI was created for mobile, I  added media query for supporting Tablet and Desktop layouts
6. With a responsive UI in place, I worked on changing the state of filters and updating the url once the filters are changed
7. Then I used HTTPClient for accessing the Space-X public API with the applied filters
8. I created HTTP Interceptor to facilitate Loading screen
9. I added a Resolver in my main component (launches/) so that server can get the data before finishing the routing into the component
10. To solve the problem of state management, I used TransferState provided in Browser and Server side modules by importing them in AppModule and AppServerModule respectively
    - When Server receives a request, it fetches the Space-X data, and adds the data in TransferState API so that client does not request the same data again when Angular App finally gets bootstrapped on the browser 

## Deployment

- This application is deployed on Heroku Server. A Procfile is created in root directory which specifies the command to run upon successful deployment to Heroku.

- I have created this github repository and linked it with Heroku for contineous integration and deployment. 
### Staging: Master branch
Any push made to master branch will automatically deploy the app to Stating environment on Heroku. [Staging build link](https://space-x-launches-pankaj.herokuapp.com/)
### Production: Main branch
Any push made to main branch will automatically build and deploy the app to Production environment on Heroku. [Production build link](https://space-x-prod.herokuapp.com/)

## Lighthouse score

