import yargs from 'yargs';

import dev from './webpack/env/dev';

const args = yargs.argv;

function environmentChooser(env) {
  console.log('got into babel webpack config');
  if (env === 'dev') {
    console.log('returning dev');
    return dev;
  }

  return test;
}

const cfg = environmentChooser(args.env);
export default cfg;
