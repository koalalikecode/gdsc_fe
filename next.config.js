module.exports = {
  env: {
    URL_SERVER: 'http://localhost:3000',
    BASE_HOST: process.env.BASE_HOST,
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    disableStaticImages: false,
    domains: [
      'html.merku.love',
      'cdn.pixabay.com',
      'i.redd.it',
      'dummyimage.com',
      'drive.google.com',
      'i.pinimg.com',
      'i.postimg.cc',
      'bloganh.net',
      'via.placeholder.com',
    ],
  },
};
