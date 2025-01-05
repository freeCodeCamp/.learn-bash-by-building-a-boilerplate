const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const projectDirectory = await getDirectoryContents('..');
    const lastCommand = await getLastCommand();
    const checkMkdir = projectDirectory.indexOf('website') >= 0 && lastCommand[0] === 'mkdir' && /website/g.test(lastCommand[1]);
    const checkMV = projectDirectory.indexOf('website') >= 0 && lastCommand[0] === 'mv' && /website/g.test(lastCommand[2]);

    assert(checkMkdir || checkMV);
  });
});
