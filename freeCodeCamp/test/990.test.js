const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const clientDirectory = await getDirectoryContents('../website/client');
    const lastCommand = await getLastCommand();
    const checkMkdir = clientDirectory.indexOf('assets') >= 0 && lastCommand[0] === 'mkdir' && /assets/.test(lastCommand[1]);
    const checkMV = clientDirectory.indexOf('assets') >= 0 && lastCommand[0] === 'mv' && /assets/.test(lastCommand[2]);

    assert(checkMkdir || checkMV);
  });
});
