const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkTouch = websiteDirectory.indexOf('CodeAlly.svg') >= 0 && lastCommand[0] === 'touch' && /CodeAlly\.svg$/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('CodeAlly.svg') >= 0 && lastCommand[0] === 'mv' && /CodeAlly\.svg$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
