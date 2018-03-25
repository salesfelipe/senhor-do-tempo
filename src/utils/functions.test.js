import { fromKelvin2Celsius, translateWeather } from './functions'


it('convert 300.15 K to 27 °C', () => {
    expect(fromKelvin2Celsius(300.15)).toBe("27 °C");
});

it('convert 280.15 K to 7 °C', () => {
    expect(fromKelvin2Celsius(280.15)).toBe("7 °C");
});

it('convert 270 K to -3.15 °C', () => {
    expect(fromKelvin2Celsius(270)).toBe("-3 °C");
});

it('translate weather: scattered clouds', () => {
    expect(translateWeather('scattered clouds')).toBe("Nuvens esparsas");
});

it('translate weather: overcast clouds', () => {
    expect(translateWeather('overcast clouds')).toBe("Nublado");
});

it('translate weather: overcast cllouds', () => {
    expect(translateWeather('overcast cllouds')).toBe("overcast cllouds");
});