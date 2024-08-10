const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const imagesDirectory1 = await getDirectoryContents('../website/images');
    const imagesDirectory2 = await getDirectoryContents('../website/client/assets/images');
    const lastCommand = await getLastCommand();
    const filesAreCorrect = imagesDirectory1.indexOf('footer.jpeg') < 0 && imagesDirectory2.indexOf('footer.jpeg') >= 0;

    assert(filesAreCorrect && lastCommand[0] === 'mv' && /images\/footer\.jpeg$/.test(lastCommand[1]) && /client\/assets\/images/.test(lastCommand[2]));
  });
});
