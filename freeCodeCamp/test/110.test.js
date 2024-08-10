const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();
    const correctArgument = lastCommand[1] === 'package.json' || lastCommand[1] === './package.json';

    assert(lastCommand[0] === 'more' && correctArgument && /\/project\/freeCodeCamp$/.test(cwd));
  });
});
