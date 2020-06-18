const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkTouch = websiteDirectory.indexOf('roboto.font') >= 0 && lastCommand[0] === 'touch' && /roboto\.font$/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('roboto.font') >= 0 && lastCommand[0] === 'mv' && /roboto\.font$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
