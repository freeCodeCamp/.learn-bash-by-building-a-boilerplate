const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkTouch = websiteDirectory.indexOf('lato.font') >= 0 && lastCommand[0] === 'touch' && /lato\.font$/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('lato.font') >= 0 && lastCommand[0] === 'mv' && /lato\.font$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
