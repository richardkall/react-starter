const {
  NODE_ENV,
  PORT
} = process.env;

export default {
  env: NODE_ENV || 'development',
  meta: {
    title: 'React Starter'
  },
  server: {
    port: PORT || 3000
  }
};
