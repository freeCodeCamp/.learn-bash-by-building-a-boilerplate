const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();

    assert(websiteDirectory.indexOf('background.jpg') < 0 && lastCommand[0] === 'rm' && /background\.jpg$/.test(lastCommand[1]));
  });
});
