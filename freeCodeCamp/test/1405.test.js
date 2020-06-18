const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(lastCommand[0] === 'more' && /README\.md$/.test(lastCommand[1]) && /\/project\/website$/.test(cwd));
  });
});
