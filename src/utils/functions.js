
function fromKelvin2Celsius(number) 
{
    return Math.ceil(number - 273.15) + " °C";
}

function translateWeather(weather) {
    let result = '';

    switch(weather) {
        case 'scattered clouds':
            result = "Nuvens esparsas";
            break;
        case 'light rain':
            result = "Chuva leve";
            break;
        case 'clear sky':
            result = "Céu limpo";
            break;
        case 'few clouds':
            result = "Poucas nuvens";
            break;
        case 'overcast clouds':
            result = "Nublado";
            break;
        default:
            result = weather;
            break;
    }

    return result;
}

export { fromKelvin2Celsius, translateWeather }