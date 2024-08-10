const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const filesAreCorrect = websiteDirectory.indexOf('lato.font') < 0 && websiteDirectory.indexOf('lato.ttf') >= 0;

    assert(filesAreCorrect && lastCommand[0] === 'mv' && /lato\.ttf/.test(lastCommand[2]));
  });
});
