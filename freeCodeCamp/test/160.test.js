const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(lastCommand[0] === 'ls' && lastCommand[1] === '-l' && /\/project\/freeCodeCamp\/node_modules$/.test(cwd));
  });
});
