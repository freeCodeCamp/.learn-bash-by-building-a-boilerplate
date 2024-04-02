const assert = require('assert');
const { getLastCommand, getCwd, getPreviousCwd } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();
    const previousCwd = await getPreviousCwd();

    assert(lastCommand[0] === 'cd' && /\/project$/.test(cwd) && /\/project\/freeCodeCamp\/node_modules/.test(previousCwd));
  });
});
