const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const projectDirectory = await getDirectoryContents('..');
    const lastCommand = await getLastCommand();
    const filesAreCorrect = projectDirectory.indexOf('website') < 0 && projectDirectory.indexOf('website-boilerplate') >= 0;

    assert(filesAreCorrect && lastCommand[0] === 'mv' && /website-boilerplate/.test(lastCommand[2]));
  });
});
