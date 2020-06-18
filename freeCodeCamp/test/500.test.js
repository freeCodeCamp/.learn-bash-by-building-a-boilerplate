const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkTouch = websiteDirectory.indexOf('CodeRoad.svg') >= 0 && lastCommand[0] === 'touch' && /CodeRoad\.svg$/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('CodeRoad.svg') >= 0 && lastCommand[0] === 'mv' && /CodeRoad\.svg$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
