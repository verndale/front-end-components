module.exports = {
  isDisabled: function(disabled) {
    if(!disabled) return '';

    return 'disabled'
  },
  json: function(context, options){
    return typeof context === 'string'
      ? options.fn(JSON.parse(context))
      : options.fn(context);
  },
  ifCond: function (v1, operator, v2, options) {
    switch (operator) {
      case '==':
        return v1 == v2 ? options.fn(this) : options.inverse(this);
      case '===':
        return v1 === v2 ? options.fn(this) : options.inverse(this);
      case '!=':
        return v1 != v2 ? options.fn(this) : options.inverse(this);
      case '!==':
        return v1 !== v2 ? options.fn(this) : options.inverse(this);
      case '<':
        return v1 < v2 ? options.fn(this) : options.inverse(this);
      case '<=':
        return v1 <= v2 ? options.fn(this) : options.inverse(this);
      case '>':
        return v1 > v2 ? options.fn(this) : options.inverse(this);
      case '>=':
        return v1 >= v2 ? options.fn(this) : options.inverse(this);
      case '&&':
        return v1 && v2 ? options.fn(this) : options.inverse(this);
      case '||':
        return v1 || v2 ? options.fn(this) : options.inverse(this);
      default:
        return options.inverse(this);
    }
  },
  eachList: function(context, options) {
    return context
      .split(',')
      .map((chunk, index) =>
        options.fn(chunk.trim(), { data: { index, first: index === 0 } })
      )
      .join('');
  }
};
