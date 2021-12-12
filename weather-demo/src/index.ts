import { Command } from 'commander';
import axios, { AxiosResponse } from 'axios';
import { IWeatherResponse } from '..';
import colors from 'colors'

const program = new Command();
program.version('0.1.0')
  .option('-c, --city <city_code>', 'add city name')
  .option('-e --extensions [extensions]', '气象类型 base/all', 'base')
  .option('-h, --help', 'output usae information')

const options = program.opts();

program.on('--help', function () {
  console.log('  Examples:');
  console.log('');
  console.log(' weather -c 330112 -e base');
  console.log('');
});

program.parse(process.argv);

if (!options.city) {
  program.outputHelp();
} else {
  console.log(options)
}

const url: string = 'https://restapi.amap.com/v3/weather/weatherInfo'
const key: string = '320454c545019f9314f07b11f1944ac2';

axios.get(url, {
  params: {
    city: options.city,
    key: key,
    extensions: options.extensions,
  }
}).then((res: AxiosResponse<IWeatherResponse>) => {
  const { lives, forecasts } = res.data;
  if (lives && lives.length) {
    const live = lives[0];
    console.log(colors.yellow(live.reporttime));
    console.log(colors.white(`${live.province} ${live.city}`));
    console.log(colors.green(`${live.weather} ${live.temperature} ℃`));
  } else if (forecasts && forecasts.length) {
    const forecast = forecasts[0];
    console.log(colors.green(`${forecast.reporttime}`));
    console.log(colors.white(`${forecast.province} ${forecast.city}`));
    for (const cast of forecast.casts) {
      console.log(colors.yellow(`${cast.date} ${cast.dayweather} ${cast.daytemp} ℃`));
    }
  }
}).catch((err) => {
  console.log(colors.red('查询失败，请重试'), err)
})