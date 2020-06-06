const files = require('./src/fs-easy-dir-copy');

const sourcePath = './__tests__/mocks';
const destinationPath = './__tests__/mocks/hi';

files(sourcePath, destinationPath)
  .then((response) => {
    response.forEach((element) => {
      console.log(element.name);
    });
  })
  .catch((error) => {
    console.log(error);
  });
