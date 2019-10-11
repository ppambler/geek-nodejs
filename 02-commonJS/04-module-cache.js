
let $ = require('./04-cache')
$.name = 'frank'
console.log(require('./04-cache').name) //有缓存,输出frank

delete require.cache[require.resolve('./04-cache')]
console.log(require('./04-cache').name) //undefined

console.log(require.resolve('./04-cache'))

console.log(NODE_PATH)

// console.log($)
// delete require.cache[$];

// console.log(require.cache)

// let re = {
//   'G:\\git-2019\\geek-nodejs\\02-commonJS\\04-module-cache.js':
//   {
//     id: '.',
//     exports: {},
//     parent: null,
//     filename: 'G:\\git-2019\\geek-nodejs\\02-commonJS\\04-module-cache.js',
//     loaded: false,
//     children: [[Module]],
//     paths:
//       ['G:\\git-2019\\geek-nodejs\\02-commonJS\\node_modules',
//         'G:\\git-2019\\geek-nodejs\\node_modules',
//         'G:\\git-2019\\node_modules',
//         'G:\\node_modules']
//   },
//   'G:\\git-2019\\geek-nodejs\\node_modules\\jquery.js':
//   {
//     id: 'G:\\git-2019\\geek-nodejs\\node_modules\\jquery.js',
//     exports: {},
//     parent:
//     {
//       id: '.',
//       exports: {},
//       parent: null,
//       filename: 'G:\\git-2019\\geek-nodejs\\02-commonJS\\04-module-cache.js',
//       loaded: false,
//       children: [Array],
//       paths: [Array]
//     },
//     filename: 'G:\\git-2019\\geek-nodejs\\node_modules\\jquery.js',
//     loaded: true,
//     children: [],
//     paths:
//       ['G:\\git-2019\\geek-nodejs\\node_modules',
//         'G:\\git-2019\\node_modules',
//         'G:\\node_modules']
//   }
// }