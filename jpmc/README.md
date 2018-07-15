# Example app using Mongo, Express, React, and Node

1. Run `npm install` in both the client and server folders.
2. Run the client and server on different folders (change the port by adding `SET PORT=<port-number> &&` to the `start` value in the package.json file of either folder).
3. add a proxy URL to the package.json file of the client"scripts": {
```  
    "start": "set PORT=3001 && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "proxy": "http://localhost:3000"```
