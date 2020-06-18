const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkTouch = websiteDirectory.indexOf('index.js') >= 0 && lastCommand[0] === 'touch' && /index\.js$/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('index.js') >= 0 && lastCommand[0] === 'mv' && /index\.js$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
