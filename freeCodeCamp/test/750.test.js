const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkMkdir = websiteDirectory.indexOf('fonts') >= 0 && lastCommand[0] === 'mkdir' && /fonts/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('fonts') >= 0 && lastCommand[0] === 'mv' && /fonts/.test(lastCommand[2]);

    assert(checkMkdir || checkMV);
  });
});
