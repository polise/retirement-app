/* eslint no-console: 0 */

import chalk from 'chalk';
import open from 'open';
import figlet from 'figlet';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import yargs from 'yargs';
import config from './webpack.config.babel';

const args = yargs.argv;
console.log('got past imports');
new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, '0.0.0.0', (err) => {
  console.log('got past listen on port');
  if (err) {
    console.error(chalk.red(err));
  }
  figlet('Retirement', { font: 'Big Money-ne' }, (error, data) => {
    console.log(chalk.green(data));
    console.info(chalk.green(`Listening at localhost: ${chalk.yellow(config.port)}`));
    console.info(chalk.green(`App is running in the ${chalk.yellow(args.env)} enviroment.`));
    open(`http://localhost:${config.port}/webpack-dev-server/`);
  });
});
