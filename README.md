# Exercise Tracker
This app is an exercise tracker that uses MongoDB for data persistence and React to create an SPA (single page application).

## How to run
Download the zip and create a .env file in the REST directory with the following lines:

```env
PORT=3000
MONGODB_CONNECT_STRING=[Enter your connect string here]
```

Run npm install in this directory,

```bash
npm install
```

Then run npm start.

```bash
npm start
```

Create another .env file in the reactApp directory with:

```env
PORT=8000
```

Do the same npm commands in this directory.

```bash
npm install
```
```bash
npm start
```

Open up your browser to http://localhost:3000 to interact with the app.
