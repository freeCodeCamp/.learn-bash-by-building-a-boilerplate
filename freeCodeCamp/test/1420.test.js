const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'echo' && lastCommand[1] === 'for' && lastCommand[2] === `the` && lastCommand[3] === 'freeCodeCamp' && lastCommand[4] === 'bash' && lastCommand[5] === 'lessons' && lastCommand[6].op === `>>` && /README\.md$/.test(lastCommand[7]));
  });
});
