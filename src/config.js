const config = {
  development: {
    API_BASE: "http://localhost:8000"
  },
  production: {
    API_BASE: "https://todo-nodejs-api.herokuapp.com"
  }
};

export default config[process.env.NODE_ENV];
