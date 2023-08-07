module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',

  // See https://github.com/trivago/prettier-plugin-sort-imports
  importOrder: [
    '^/(.*)$', // root level imports: '/public/images/foo.jpg'
    '^~/__tests__/(.*)$',
    '^~/pages/(.*)$',
    '^~/admin/(.*)$',
    '^~/assets/(.*)$',
    '^~/types/(.*)$',
    '^~/server/(.*)$',
    '^~/api/(.*)$',
    '^~/util/(.*)$',
    '^~/hooks/(.*)$',
    '^~/providers/(.*)$',
    '^~/(cms|components)/(.*)$',
    '^~/styles/(.*)$',
    '^\\.\\./(.*)$', // any '../stuff'
  ],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
