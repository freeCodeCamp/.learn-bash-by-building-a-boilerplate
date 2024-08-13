const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const fontsDirectory = await getDirectoryContents('../website/fonts');
    const lastCommand = await getLastCommand();
    const filesAreCorrect = websiteDirectory.indexOf('roboto.woff') < 0 && fontsDirectory.indexOf('roboto.woff') >= 0;

    assert(filesAreCorrect && lastCommand[0] === 'mv' && /roboto\.woff$/.test(lastCommand[1]) && /fonts/.test(lastCommand[2]));
  });
});
