const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'echo' && lastCommand[1] === 'I' && lastCommand[2] === 'made' && lastCommand[3] === 'this' && lastCommand[4] === 'boilerplate' && lastCommand[5].op === `>>` && /README\.md$/.test(lastCommand[6]));
  });
});
