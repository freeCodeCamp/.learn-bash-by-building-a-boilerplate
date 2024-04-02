const fs = require('fs');
const util = require('util');
const path = require('path');
const parseCommand = require('shell-quote').parse;

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

const getLastCommand = async (dir = process.cwd()) => {
  const pathToBashLogs = path.join(dir, '../../', '.bash_history');
  const bashLogs = await readFile(pathToBashLogs, 'utf8');

  if (!bashLogs) {
    throw new Error(`Could not find ${pathToBashLogs}`);
  }

  const logs = bashLogs.split('\n');
  const lastLog = logs[logs.length - 2];
  const parsedCommand = parseCommand(lastLog);

  return parsedCommand;
};

const getNextCommand = async (dir = process.cwd()) => {
  const pathToNextCommandLogs = path.join(dir, './test', '.next_command');
  const nextCommandLogs = await readFile(pathToNextCommandLogs, 'utf8');

  if (!nextCommandLogs) {
    throw new Error(`Could not find ${pathToNextCommandLogs}`);
  }

  const logs = nextCommandLogs.split('\n');
  const nextCommand = logs[logs.length - 2];
  const parsedCommand = parseCommand(nextCommand);

  return parsedCommand;
};

const getCwd = async (dir = process.cwd()) => {
  const pathToCwdLogs = path.join(dir, './test', '.cwd');
  const cwdLogs = await readFile(pathToCwdLogs, 'utf8');

  if (!cwdLogs) {
    throw new Error(`Could not find ${pathToCwdLogs}`);
  }

  const logs = cwdLogs.split('\n');
  const lastLog = logs[logs.length - 2];

  return lastLog;
};

const getPreviousCwd = async (dir = process.cwd()) => {
  const pathToCwdLogs = path.join(dir, './test', '.cwd');
  const cwdLogs = await readFile(pathToCwdLogs, 'utf8');

  if (!cwdLogs) {
    throw new Error(`Could not find ${pathToCwdLogs}`);
  }

  const logs = cwdLogs.split('\n');
  const previousLog = logs[logs.length - 3];

  return previousLog;
};

const getDirectoryContents = async (dir = process.cwd()) => {
  const directoryContents = await readdir(dir);

  if (!directoryContents) {
    throw new Error(`Could not find folder ${dir}`);
  }

  return directoryContents;
};

exports.getLastCommand = getLastCommand;
exports.getNextCommand = getNextCommand;
exports.getCwd = getCwd;
exports.getPreviousCwd = getPreviousCwd;
exports.getDirectoryContents = getDirectoryContents;
