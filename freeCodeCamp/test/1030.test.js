const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const imagesDirectory = await getDirectoryContents('../website/client/assets/images');
    const lastCommand = await getLastCommand();
    const checkTouch = imagesDirectory.indexOf('background.jpg') >= 0 && lastCommand[0] === 'touch' && /background\.jpg$/.test(lastCommand[1]);
    const checkMV = imagesDirectory.indexOf('background.jpg') >= 0 && lastCommand[0] === 'mv' && /background\.jpg$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
