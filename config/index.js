export default {
  env: process.env.NODE_ENV || 'development',
  meta: {
    title: 'React Starter'
  },
  server: {
    port: process.env.PORT || 3000
  }
};
