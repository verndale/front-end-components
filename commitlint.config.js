module.exports = {
  'extends': ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-empty': [0],
    'subject-empty': [0],
    'type-enum': [0],
    'subject-case': [0],
    'function-rules/type-enum': [
      2,
      'always',
      parsed => {
        const headerRegex = /^(feat|fix|chore|docs)[:][ ]([A-Z]+)[-]([0-9]+)[ ][-][ ]([A-Z].+)$/;
        const isHeaderValid = parsed.header.match(headerRegex);
        if (isHeaderValid) {
          return [true];
        }
        return [
          false,
          `header must match this regex: ${headerRegex} \n for example: feat: UNED-1302 - Ticket Name`
        ];
      }
    ]
  }
};
