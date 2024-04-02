const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkMkdir = websiteDirectory.indexOf('images') >= 0 && lastCommand[0] === 'mkdir' && /images/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('images') >= 0 && lastCommand[0] === 'mv' && /images/.test(lastCommand[2]);

    assert(checkMkdir || checkMV);
  });
});
