const fs = require('fs');
const path = require('path');

let copyDirectory = function (source, destination) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(source))
      return reject(new Error('Source directory does not exist'));

    if (fs.existsSync(destination))
      return reject(new Error('Destination directory already exist'));

    let collection = [];

    try {
      const entries = fs.readdirSync(source, { withFileTypes: true });

      fs.mkdirSync(destination, { recursive: true });

      for (let entry of entries) {
        const sourcePath = path.join(source, entry.name);
        const destinationPath = path.join(destination, entry.name);

        if (entry.isDirectory()) {
          try {
            copyDirectory(sourcePath, destinationPath);
            collection.push({ name: entry.name, directory: true });
          } catch (error) {
            reject(new Error(error));
          }
        } else {
          try {
            fs.copyFileSync(sourcePath, destinationPath);
            collection.push({ name: entry.name, directory: false });
          } catch (error) {
            reject(new Error(error));
          }
        }
      }

      resolve(collection);
    } catch (error) {
      reject(new Error(error));
    }
  });
};

module.exports = copyDirectory;
