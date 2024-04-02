const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();
    const correctArgs = lastCommand[1] === undefined || lastCommand[1] === '.' || lastCommand[1] === './';

    assert(lastCommand[0] === 'find' && correctArgs && /\/project\/website$/.test(cwd));
  });
});
