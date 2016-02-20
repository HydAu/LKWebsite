var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), 'init');
hexo.then((args) => hexo.call('server'));