const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const fontsDirectory = await getDirectoryContents('../website/client/assets/fonts');
    const lastCommand = await getLastCommand();
    const checkTouch = fontsDirectory.indexOf('lato-bold.ttf') >= 0 && lastCommand[0] === 'touch' && /client\/assets\/fonts\/lato-bold\.ttf$/.test(lastCommand[1]);
    const checkMV = fontsDirectory.indexOf('lato-bold.ttf') >= 0 && lastCommand[0] === 'mv' && /client\/assets\/fonts\/lato-bold\.ttf$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
