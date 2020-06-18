const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkTouch = websiteDirectory.indexOf('README.md') >= 0 && lastCommand[0] === 'touch' && /README\.md$/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('README.md') >= 0 && lastCommand[0] === 'mv' && /README\.md$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
