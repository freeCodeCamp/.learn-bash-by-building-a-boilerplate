const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(lastCommand[0] === 'cp' && lastCommand[1] === '--help' && /\/project$/.test(cwd));
  });
});
