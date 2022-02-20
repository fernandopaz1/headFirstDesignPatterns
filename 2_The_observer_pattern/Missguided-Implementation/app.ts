import {WheaterData} from './WeatherData.ts';

const weatherData = new WheaterData(20, 1, 10);

weatherData.setTemperature(21);
weatherData.setPressure(1.2);
weatherData.setHumidity(5);
