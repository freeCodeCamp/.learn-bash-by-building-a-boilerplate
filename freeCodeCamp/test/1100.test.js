const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const imagesDirectory = await getDirectoryContents('../website/client/assets/images');
    const lastCommand = await getLastCommand();
    const filesAreCorrect = websiteDirectory.indexOf('header.png') < 0 && imagesDirectory.indexOf('header.png') >= 0;

    assert(filesAreCorrect && lastCommand[0] === 'mv' && /header\.png$/.test(lastCommand[1]) && /client\/assets\/images/.test(lastCommand[2]));
  });
});
