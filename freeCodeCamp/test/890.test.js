const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const srcDirectory = await getDirectoryContents('../website/client/src');
    const lastCommand = await getLastCommand();
    const filesAreCorrect = websiteDirectory.indexOf('index.js') < 0 && srcDirectory.indexOf('index.js') >= 0;

    assert(filesAreCorrect && lastCommand[0] === 'mv' && /index\.js$/.test(lastCommand[1]) && /client\/src/.test(lastCommand[2]));
  });
});
