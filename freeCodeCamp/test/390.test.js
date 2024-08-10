const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();
		const correctFlag = lastCommand[1] === '-a' || lastCommand[1] === '--all';

    assert(lastCommand[0] === 'ls' && correctFlag && /\/project\/website$/.test(cwd));
  });
});
