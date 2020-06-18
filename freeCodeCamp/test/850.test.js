const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkMkdir = websiteDirectory.indexOf('client') >= 0 && lastCommand[0] === 'mkdir' && /client/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('client') >= 0 && lastCommand[0] === 'mv' && /client/.test(lastCommand[2]);

    assert(checkMkdir || checkMV);
  });
});
