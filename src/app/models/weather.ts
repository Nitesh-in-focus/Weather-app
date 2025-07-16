export interface WeatherData {
  location: {
    name: string;
    country: string;
    region: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: string;
  };

  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
    wind_dir: string;
    feelslike_c: number;
    feelslike_f: number;
    last_updated: string;

    // 🆕 Added for extra weather details
    pressure_mb: number;
    vis_km: number;
    uv: number;
    cloud: number;
    dewpoint_c?: number;
    heatindex_c?: number;
  };

  forecast: {
    forecastday: {
      date: string;
      date_epoch: number;

      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        avgtemp_c: number;
        avgtemp_f: number;
        daily_will_it_rain: number;
        daily_chance_of_rain: string;
        daily_will_it_snow: number;
        daily_chance_of_snow: string;

        condition: {
          text: string;
          icon: string;
        };
      };

      astro: {
        sunrise: string;
        sunset: string;
        moonrise: string;
        moonset: string;
        moon_phase: string;
      };

      hour: {
        time: string;
        temp_c: number;
        temp_f: number;
        wind_kph: number;
        humidity: number;
        feelslike_c: number;
        chance_of_rain: number;

        condition: {
          text: string;
          icon: string;
        };
      }[];
    }[];
  };
}
