const path = require('path');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const envDefinition = (target) => {
  const env = {
    __SERVER__: true,
    __CLIENT__: true,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true,
  };

  if (target === 'web') {
    return Object.assign({}, env, {
      __SERVER__: false,
    });
  }

  return Object.assign({}, env, {
    __CLIENT__: false,
  });
};

const babelOptions = {
  babelrc: true,
  cacheDirectory: true,
  presets: ['razzle/babel'],
  plugins: [
    'react-native-web',
    'react-loadable/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          build: './build',
          app: './src/app',
          config: './src/config',
          actions: './src/app/actions',
          components: './src/app/components',
          constants: './src/app/constants',
          containers: './src/app/containers',
          helpers: './src/app/helpers',
          reducers: './src/app/reducers',
          selectors: './src/app/selectors',
          store: './src/app/store',
          api: './src/server/api',
          utils: './src/utils',
          '^react-native$': 'react-native-web',
        },
      },
    ],
    'transform-decorators-legacy',
    ['lodash', { id: ['lodash', 'recompose'] }],
  ],
};

module.exports = {
  modify(defaultConfig, { target, dev }, webpack) {
    const config = Object.assign({}, defaultConfig);
    const isServer = target !== 'web';

    config.plugins = [
      ...config.plugins,
      new webpack.DefinePlugin(envDefinition(target)),
    ];

    /* eslint-disable */  
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(js|jsx|mjs)$/,
        include: [
          path.resolve(__dirname, 'node_modules/react-router-native')
        ],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: babelOptions,
          },
        ],
      },
    ];
    /* eslint-enable */

    config.resolve.modules = [...config.resolve.modules, 'src'];

    if (!isServer) {
      config.plugins = [
        ...config.plugins,
        new ReactLoadablePlugin({ filename: './build/react-loadable.json' }),
      ];

      if (dev) {
        config.plugins = [
          ...config.plugins,
          // new BundleAnalyzerPlugin(),
        ];
      }
    }

    config.plugins = [
      ...config.plugins,
      new LodashModuleReplacementPlugin({
        collections: true,
        shorthands: true,
      }),
    ];

    if (!dev) {
      config.plugins = [
        ...config.plugins,
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new webpack.NoEmitOnErrorsPlugin(),
      ];
    }

    return Object.assign({}, config, {
      devtool: dev ? 'eval-source-map' : 'none',
    });
  },

  modifyBabelOptions() {
    return babelOptions;
  },
};
