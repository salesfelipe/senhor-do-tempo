
function fromKelvin2Celsius(number) 
{
    return (number - 273.15) + " °C";
}

function translateWeather(weather) {
    let result = '';

    switch(weather) {
        case 'scattered clouds':
            result = "Nuvens esparsas";
            break;
        default:
            result = weather;
            break;
    }

    return result;
}

export { fromKelvin2Celsius, translateWeather }