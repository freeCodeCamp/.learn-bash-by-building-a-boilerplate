const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const imagesDirectory = await getDirectoryContents('../website/images');
    const lastCommand = await getLastCommand();

    assert(imagesDirectory.indexOf('background.jpg') < 0 && lastCommand[0] === 'rm' && /background\.jpg/.test(lastCommand[1]));
  });
});
