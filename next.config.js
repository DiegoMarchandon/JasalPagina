const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // output: isProd ? 'export' : undefined,
  assetPrefix: /* isProd ? '/jasalreact/' : */ '',
  images: {
    unoptimized: true, // Para evitar optimizaciones que no funcionan en export estático
  },
};

module.exports = nextConfig;