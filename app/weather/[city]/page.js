import { getWeather } from '@/lib/getWeather';
import { getClothesAdvice } from '@/lib/getClothesAdvice';
import WeatherCard from '@/components/WeatherCard';
import ClothesAdvice from '@/components/ClothesAdvice';
import ThreeBackgroundClient from '@/components/ThreeBackgroundClient';
import FloatingWeatherIconClient from '@/components/FloatingWeatherIconClient';
import AnimatedBackButton from '@/components/AnimatedBackButton';
import ErrorDisplay from '@/components/ErrorDisplay';

export async function generateMetadata({ params }) {
  // Handle params - in Next.js 15+, params is a Promise
  let resolvedParams;
  try {
    resolvedParams = params instanceof Promise ? await params : params;
  } catch (err) {
    resolvedParams = params; // Fallback for Next.js 14
  }
  const city = decodeURIComponent(resolvedParams.city);
  return {
    title: `Weather in ${city} | Weather App`,
    description: `Current weather conditions and clothing recommendations for ${city}`,
  };
}

export default async function WeatherPage({ params }) {
  // Handle params - in Next.js 15+, params is a Promise
  let resolvedParams;
  try {
    resolvedParams = params instanceof Promise ? await params : params;
  } catch (err) {
    resolvedParams = params; // Fallback for Next.js 14
  }
  
  if (!resolvedParams || !resolvedParams.city) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <ThreeBackgroundClient weatherCondition="default" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-purple-900/30 to-indigo-900/30" />
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          <ErrorDisplay error="City parameter is missing" />
        </div>
      </div>
    );
  }
  
  const city = decodeURIComponent(resolvedParams.city);
  let weather = null;
  let clothesAdvice = [];
  let error = null;

  try {
    weather = await getWeather(city);
    clothesAdvice = getClothesAdvice(
      weather.temperature,
      weather.condition,
      weather.description
    );
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <ThreeBackgroundClient weatherCondition="default" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-purple-900/30 to-indigo-900/30" />
        
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          <ErrorDisplay error={error} />
        </div>
      </div>
    );
  }

  // Determine background based on weather condition
  const backgroundCondition = weather.condition || 'default';

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ThreeBackgroundClient weatherCondition={backgroundCondition} />
      
      {/* Dynamic gradient overlay based on weather */}
      <div
        className={`absolute inset-0 ${
          backgroundCondition === 'rain' || backgroundCondition === 'drizzle'
            ? 'bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-purple-900/40'
            : backgroundCondition === 'snow'
            ? 'bg-gradient-to-br from-slate-900/40 via-blue-900/40 to-cyan-900/40'
            : backgroundCondition === 'clear' || backgroundCondition === 'sunny'
            ? 'bg-gradient-to-br from-yellow-900/30 via-orange-900/30 to-red-900/30'
            : backgroundCondition === 'clouds' || backgroundCondition === 'cloudy'
            ? 'bg-gradient-to-br from-gray-900/40 via-slate-900/40 to-blue-900/40'
            : 'bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30'
        }`}
      />

      <FloatingWeatherIconClient condition={backgroundCondition} />

      <div className="relative z-10 min-h-screen px-4 py-12 md:py-20">
        <AnimatedBackButton />

        <WeatherCard weather={weather} />
        <ClothesAdvice advice={clothesAdvice} />
      </div>
    </div>
  );
}

