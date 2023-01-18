This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Money Tracker

Money Tracker is a web-based application that allows you to keep track of your finances by recording deposits and withdrawals. The application consists of a backend built using FastAPI and a frontend built using React.

## Installation

### Backend

1. Clone the backend repository from [Money-Traker-backend](https://github.com/Catalin-Lucian/Money-Traker-backend)
2. Create a virtual environment and activate it.
3. Run `pip install -r requirements.txt` to install the necessary packages.
4. Run `uvicorn main:app --reload` to start the server

### Frontend

1. Clone the frontend repository from [Money-Traker-frontend](https://github.com/Catalin-Lucian/Money-Traker-frontend)
2. Run `npm install` to install the necessary packages.
3. Run `npm start` to start the development server.
4. Open <http://localhost:3000> in your browser to access the application.

## Dependencies

The backend depends on the following packages:

- fastapi
- pydantic
- SQLAlchemy
- passlib
- pyJWT
- uvicorn
- bcrypt

The frontend depends on the following packages:

- @chakra-ui/react
- axios
- formik
- react-router-dom

## Configuration

The backend uses SQLAlchemy to interact with a database. You can use any database supported by SQLAlchemy, but the application has been tested with PostgreSQL.

The frontend is configured to connect to the backend running on <http://localhost:8000>. If you wish to connect to a different backend, you can modify the baseURL variable in the jwt.interceptor.js file.

## Usage

Once the application is running, you can register a new account or log in with an existing one. Once logged in, you will be able to add new operations (deposits or withdrawals), view your existing operations and navigate between pages.

You can also edit or delete existing operations by clicking on the respective buttons.

## Bibliography

- [FastAPI documentation](https://fastapi.tiangolo.com)
- [React documentation](https://reactjs.org)
- [SQLAlchemy documentation](https://docs.sqlalchemy.org/en/14/)
- [passlib documentation](https://passlib.readthedocs.io/en/stable/)
- [pyJWT documentation](https://pyjwt.readthedocs.io/en/latest/)
- [uvicorn documentation](https://www.uvicorn.org)
- [bcrypt documentation](https://pypi.org/project/bcrypt/)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
