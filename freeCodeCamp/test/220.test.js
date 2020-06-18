const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();
    const correctArgument = lastCommand[1] === 'index.js' || lastCommand[1] === './index.js';

    assert(lastCommand[0] === 'more' && correctArgument && /\/project\/freeCodeCamp\/node_modules\/has\/src$/.test(cwd));
  });
});
