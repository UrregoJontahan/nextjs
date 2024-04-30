/** @type {import('next').NextConfig} */

const nextConfig = {
  images:{
    remotePatterns:[{
      hostname:'cdn.shopify.com',
      protocol:'https'
    }]
  }
}

module.exports = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};


module.exports = nextConfig