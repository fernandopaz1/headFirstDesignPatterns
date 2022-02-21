import {WeatherData} from './WeatherData.ts';
import {CurrentConditionDisplay} from './display/CurrentConditionDisplay.ts';
import {StatisticsDisplay} from './display/StatisticsDisplay.ts';

const weatherData = new WeatherData(20, 1, 10);

const currentDisplay = new CurrentConditionDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);

weatherData.registerObserver(currentDisplay);
weatherData.registerObserver(statisticsDisplay);

weatherData.setData(21, 1.2, 5);
weatherData.setData(22, 1.4, 5);
weatherData.setData(23, 1.3, 5);
