const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(lastCommand[0] === 'find' && lastCommand[1] === '-name' && lastCommand[2] === 'styles.css' && /\/project\/website$/.test(cwd));
  });
});
