import yargs from 'yargs';

import dev from './webpack/env/dev';
import test from './webpack/env/test';

const args = yargs.argv;

function environmentChooser(env) {
  if (env === 'dev') {
    return dev;
  }

  return test;
}

const cfg = environmentChooser(args.env);
export default cfg;
