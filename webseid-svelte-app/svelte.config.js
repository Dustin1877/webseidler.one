import adapter from '@sveltejs/adapter-node';
 
export default {
  kit: {
    csp: {
      directives: {
        'script-src': ['self']
      },
      reportOnly: {
        'script-src': ['self']
      }
    },

    adapter: adapter()
  
  }
};