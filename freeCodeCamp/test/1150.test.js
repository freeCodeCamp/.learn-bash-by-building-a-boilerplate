const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(lastCommand[0] === 'rmdir' && /images/.test(lastCommand[1]) && !/assets/.test(lastCommand[1]) && lastCommand[2] === undefined && /\/project\/website$/.test(cwd));
  });
});
