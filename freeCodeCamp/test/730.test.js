const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const filesAreCorrect = websiteDirectory.indexOf('menlo.font') < 0 && websiteDirectory.indexOf('menlo.otf') >= 0;

    assert(filesAreCorrect && lastCommand[0] === 'mv' && /menlo\.otf$/.test(lastCommand[2]));
  });
});
