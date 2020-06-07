<h1 align="center">FS Easy Dir Copy</h1>

<p align="center">A promise based simplified Node.js directory copy recursive API that also returns the list of files and directories.</p>
<p align="center">
<a href="https://github.com/mazik/fs-easy-dir-copy/actions"><img src="https://github.com/mazik/fs-easy-dir-copy/workflows/Node.js%20Package/badge.svg" alt="Build Status"></a>
<a href="https://www.npmjs.com/package/@mazik/fs-easy-dir-copy"><img src="https://img.shields.io/npm/dw/@mazik/fs-easy-dir-copy" alt="Total Downloads"></a>
<a href="https://img.shields.io/github/license/mazik/fs-easy-dir-copy"><img src="https://img.shields.io/github/license/mazik/fs-easy-dir-copy" alt="License"></a>
</p>

---------------

## Why anohter Node.js FS package for copying directories?
There are so many great packages out there based on the Node.js file system. However, recently I felt that there's nothing very simple but offers asyncrhonus operation in Node.js file system for copying directories.

In addition, I have always wanted to publish packages in NPM. This package just let me starts my journey with NPM and GitHub package registry. I also learned a lot on how the GitHub Actions works.

## Installation
This package is currently available on both NPM and GitHub package registry. You can either install it from NPM or GitHub package registry like the followings:

Install from the command line:
```shell
npm install @mazik/fs-easy-dir-copy@latest
```

## Getting started
The package `@mazik/fs-easy-dir-copy()` accepts two arguments. The first argument is a string of source path and the second argument is also a string of destination path.

You will need to import the package as you'd normally do with any other NPM package like the following:
```javascript
const copyDirectory = require('@mazik/fs-easy-dir-copy')
```

You'll need to use the `copyDirectory` using asynchronously:
```javascript
const copyDirectory = require('@mazik/fs-easy-dir-copy');

copyDirectory('./sourcePath', './destinationPath').then(items => {
    console.log(items);
}).catch(error => {
    console.log(error);
})
```
Based on your source path, the `items` variable will return an array of objects like the following:
```javascript
[
  { name: 'another', directory: true },
  { name: 'readme.md', directory: false },
  { name: 'test.md', directory: false },
]
```

## Requirements
- "node": ">=13.11.0"

## Running the tests
You'll need to simply run the following:
```shell
yarn test
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
