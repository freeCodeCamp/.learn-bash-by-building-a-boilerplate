const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const projectDirectory = await getDirectoryContents('..');
    const lastCommand = await getLastCommand();
    const filesAreCorrect = projectDirectory.indexOf('website-boilerplate') >= 0 && projectDirectory.indexOf('toms-website') >= 0;
    const correctFlags = ['-r', '-R', '--recursive'];
    const correctArguments1 = correctFlags.indexOf(lastCommand[1]) >= 0 && /website-boilerplate/.test(lastCommand[2]) && /toms-website/.test(lastCommand[3]);
    const correctArguments2 = correctFlags.indexOf(lastCommand[2]) >= 0 && /website-boilerplate/.test(lastCommand[1]) && /toms-website/.test(lastCommand[3]);
    const correctArguments3 = correctFlags.indexOf(lastCommand[3]) >= 0 && /website-boilerplate/.test(lastCommand[1]) && /toms-website/.test(lastCommand[2]);
    const correctArgs = correctArguments1 || correctArguments2 || correctArguments3;

    assert(filesAreCorrect && lastCommand[0] === 'cp' && correctArgs);
  });
});
