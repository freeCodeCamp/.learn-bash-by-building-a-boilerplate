const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkTouch = websiteDirectory.indexOf('header.png') >= 0 && lastCommand[0] === 'touch' && /header\.png$/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('header.png') >= 0 && lastCommand[0] === 'mv' && /header\.png$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
