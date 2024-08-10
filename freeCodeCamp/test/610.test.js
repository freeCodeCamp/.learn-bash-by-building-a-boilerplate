const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const imagesDirectory = await getDirectoryContents('../website/images');
    const lastCommand = await getLastCommand();

    assert(imagesDirectory.indexOf('header.png') >= 0 && lastCommand[0] === 'cp' && /header\.png$/.test(lastCommand[1]) && /images/.test(lastCommand[2]));
  });
});
