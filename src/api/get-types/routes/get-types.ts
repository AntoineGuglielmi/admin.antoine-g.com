/**
 * get-types router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/get-types',
      handler: 'get-types.getTypes',
      config: {
        auth: false,
      },
    },
  ],
}
