const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();
    const correctArgument = lastCommand[1] === 'README.md' || lastCommand[1] === './README.md';

    assert(lastCommand[0] === 'more' && correctArgument && /\/project\/freeCodeCamp\/node_modules\/has$/.test(cwd));
  });
});
