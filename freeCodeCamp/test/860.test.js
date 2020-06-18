const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const clientDirectory = await getDirectoryContents('../website/client');
    const lastCommand = await getLastCommand();
    const checkMkdir = clientDirectory.indexOf('src') >= 0 && lastCommand[0] === 'mkdir' && /client\/src/.test(lastCommand[1]);
    const checkMV = clientDirectory.indexOf('src') >= 0 && lastCommand[0] === 'mv' && /client\/src/.test(lastCommand[2]);

    assert(checkMkdir || checkMV);
  });
});
