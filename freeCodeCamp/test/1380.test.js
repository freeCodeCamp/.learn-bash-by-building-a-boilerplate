const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'echo' && lastCommand[1] === 'I' && lastCommand[2] === 'finished' && lastCommand[3] === 'the' && lastCommand[4] === 'boilerplate!');
  });
});
