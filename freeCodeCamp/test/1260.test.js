const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const fontsDirectory = await getDirectoryContents('../website/client/assets/fonts');
    const lastCommand = await getLastCommand();
    const checkTouch = fontsDirectory.indexOf('roboto-bold.woff') >= 0 && lastCommand[0] === 'touch' && /client\/assets\/fonts\/roboto-bold\.woff/.test(lastCommand[1]);
    const checkMV = fontsDirectory.indexOf('roboto-bold.woff') >= 0 && lastCommand[0] === 'mv' && /client\/assets\/fonts\/roboto-bold\.woff/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
