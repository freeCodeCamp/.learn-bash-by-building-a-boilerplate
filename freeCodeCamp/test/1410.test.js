const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'echo' && lastCommand[1] === 'from' && lastCommand[2] === 'the' && lastCommand[3] === 'command' && lastCommand[4] === 'line' && lastCommand[5].op === `>>` && /README\.md$/.test(lastCommand[6]));
  });
});
