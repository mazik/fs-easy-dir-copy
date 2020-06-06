const fs = require('fs');
const path = require('path');

let copyDirectory = function (source, destination) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(source))
      reject(new Error('Source directory does not exist'));

    if (fs.existsSync(destination))
      reject(new Error('Destination directory already exist'));

    let collection = [];

    fs.readdir(source, { withFileTypes: true }, async (error, items) => {
      if (error) reject(new Error(error));

      fs.mkdir(destination, { recursive: true }, (error) => {
        reject(new Error(error));
      });

      for (let item of items) {
        const sourcePath = path.join(source, item.name);
        const destinationPath = path.join(destination, item.name);

        if (item.isDirectory()) {
          await copyDirectory(sourcePath, destinationPath);
        } else {
          await fs.copyFileSync(sourcePath, destinationPath);
        }

        collection.push({ item: item.name });
      }
      // console.log(collection);
      resolve(collection);
    });
  });
};

module.exports = copyDirectory;
