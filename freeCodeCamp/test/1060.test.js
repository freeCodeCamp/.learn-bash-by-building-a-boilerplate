const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const imagesDirectory = await getDirectoryContents('../website/images');
    const lastCommand = await getLastCommand();
    const filesAreCorrect = websiteDirectory.indexOf('header.png') >= 0 && imagesDirectory.indexOf('header.png') < 0;

    assert(filesAreCorrect && lastCommand[0] === 'mv' && /header\.png/.test(lastCommand[1]));
  });
});
