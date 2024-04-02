const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkTouch = websiteDirectory.indexOf('background.jpg') >= 0 && lastCommand[0] === 'touch' && /background\.jpg$/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('background.jpg') >= 0 && lastCommand[0] === 'mv' && /background\.jpg$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
