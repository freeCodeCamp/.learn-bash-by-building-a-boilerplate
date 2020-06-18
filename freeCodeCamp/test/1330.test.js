const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkTouch = websiteDirectory.indexOf('package.json') >= 0 && lastCommand[0] === 'touch' && /package\.json$/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('package.json') >= 0 && lastCommand[0] === 'mv' && /package\.json$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
