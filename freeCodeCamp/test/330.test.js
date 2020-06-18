const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkTouch = websiteDirectory.indexOf('styles.css') >= 0 && lastCommand[0] === 'touch' && /styles\.css$/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('styles.css') >= 0 && lastCommand[0] === 'mv' && /styles\.css$/.test(lastCommand[2]);
    
    assert(checkTouch || checkMV);
  });
});
