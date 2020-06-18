const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkTouch = websiteDirectory.indexOf('freeCodeCamp.svg') >= 0 && lastCommand[0] === 'touch' && /freeCodeCamp\.svg$/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('freeCodeCamp.svg') >= 0 && lastCommand[0] === 'mv' && /freeCodeCamp\.svg$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
