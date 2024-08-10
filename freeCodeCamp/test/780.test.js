const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const fontsDirectory = await getDirectoryContents('../website/fonts');
    const lastCommand = await getLastCommand();
    const filesAreCorrect = websiteDirectory.indexOf('lato.ttf') < 0 && fontsDirectory.indexOf('lato.ttf') >= 0;

    assert(filesAreCorrect && lastCommand[0] === 'mv' && /lato\.ttf$/.test(lastCommand[1]) && /fonts/.test(lastCommand[2]));
  });
});
