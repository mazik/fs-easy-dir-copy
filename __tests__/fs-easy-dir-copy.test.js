const fs = require('fs');
const copyDirectory = require('../src/fs-easy-dir-copy');

const sourcePath = './__tests__/mocks';
const destinationPath = './__tests__/mocks/hello';

afterAll(() => {
  if (fs.existsSync(sourcePath)) {
    try {
      fs.rmdirSync(sourcePath, { recursive: true });
    } catch (error) {
      throw new Error(error);
    }
  }
});

describe('fs-easy-dir-copy.js', () => {
  it('throws an error when the source path does not exist', async () => {
    if (fs.existsSync(sourcePath)) {
      try {
        fs.rmdirSync(sourcePath, { recursive: true });
      } catch (error) {
        throw new Error(error);
      }
    }

    expect.assertions(1);
    await expect(copyDirectory(sourcePath, destinationPath)).rejects.toEqual(
      Error('Source directory does not exist')
    );
  });

  it('throws an error when the destination path already exist', async () => {
    if (!fs.existsSync(destinationPath)) {
      try {
        fs.mkdirSync(destinationPath, { recursive: true });
      } catch (error) {
        throw new Error(error);
      }
    }

    expect.assertions(1);
    await expect(copyDirectory(sourcePath, destinationPath)).rejects.toEqual(
      Error('Destination directory already exist')
    );
  });

  it('copy the specified directory including all the files recursively', async () => {
    if (fs.existsSync(destinationPath)) {
      try {
        fs.rmdirSync(destinationPath, { recursive: true });
      } catch (error) {
        throw new Error(error);
      }
    }

    try {
      fs.writeFileSync(`${sourcePath}/readme.md`, 'Markdown is awesome!');
      fs.writeFileSync(`${sourcePath}/test.md`, 'Test is awesome!');

      fs.mkdirSync(`${sourcePath}/another`, { recursive: true });

      fs.writeFileSync(
        `${sourcePath}/another/readme.md`,
        'Markdown is awesome!'
      );
      fs.writeFileSync(`${sourcePath}/another/test.md`, 'Test is awesome!');
    } catch (error) {
      throw new Error(error);
    }

    expect.assertions(1);
    await expect(copyDirectory(sourcePath, destinationPath)).resolves.toEqual([
      { name: 'another', directory: true },
      { name: 'readme.md', directory: false },
      { name: 'test.md', directory: false },
    ]);
  });
});
