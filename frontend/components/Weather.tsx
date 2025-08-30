"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
  date: string;
}

const API_KEY = "27f3d7a45d77f1295922a52233f62185"; // User provided OpenWeatherMap API key
const CITY = "Indore"; // Default city, can be made dynamic later
const UNITS = "metric"; // or "imperial"

export default function Weather() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<WeatherData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("Your Location");

  useEffect(() => {
    async function fetchWeather(lat?: number, lon?: number) {
      try {
        let currentUrl: string;
        let forecastUrl: string;

        if (lat && lon) {
          // Use coordinates for current location
          currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${API_KEY}`;
          forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${API_KEY}`;
        } else {
          // Fallback to default city
          currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=${UNITS}&appid=${API_KEY}`;
          forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=New%20York&units=${UNITS}&appid=${API_KEY}`;
        }

        // Fetch current weather
        const currentRes = await fetch(currentUrl);
        if (!currentRes.ok) {
          throw new Error("Failed to fetch current weather");
        }
        const currentData = await currentRes.json();
        setCurrentWeather({
          temp: currentData.main.temp,
          description: currentData.weather[0].description,
          icon: currentData.weather[0].icon,
          date: new Date().toLocaleDateString(),
        });
        setLocation(currentData.name + ", " + currentData.sys.country);

        // Fetch 5-day forecast (3-hour intervals)
        const forecastRes = await fetch(forecastUrl);
        if (!forecastRes.ok) {
          throw new Error("Failed to fetch forecast");
        }
        const forecastData = await forecastRes.json();

        // Extract one forecast per day (around midday)
        const dailyForecasts: WeatherData[] = [];
        const forecastList = forecastData.list;
        const seenDates = new Set<string>();

        for (const item of forecastList) {
          const date = new Date(item.dt * 1000);
          const dateString = date.toLocaleDateString();
          const hour = date.getHours();
          if (!seenDates.has(dateString) && hour >= 12 && hour <= 15) {
            dailyForecasts.push({
              temp: item.main.temp,
              description: item.weather[0].description,
              icon: item.weather[0].icon,
              date: dateString,
            });
            seenDates.add(dateString);
          }
          if (dailyForecasts.length >= 5) break;
        }
        setForecast(dailyForecasts);
      } catch (err: any) {
        setError(err.message);
      }
    }

    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.warn("Geolocation error:", error);
          // Fallback to default location
          fetchWeather();
        }
      );
    } else {
      // Geolocation not supported, use default
      fetchWeather();
    }
  }, []);

  if (error) {
    return (
      <Card className="max-w-3xl mx-auto my-12 border-destructive/20 bg-destructive/5">
        <CardContent>
          <p className="text-destructive text-center font-semibold">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!currentWeather) {
    return (
      <Card className="max-w-3xl mx-auto my-12">
        <CardContent>
          <p className="text-center">Loading weather data...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <section className="my-12 max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Weather Forecast for {location}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-6 mb-6">
            <img
              src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
              alt={currentWeather.description}
              className="w-20 h-20"
            />
            <div>
              <p className="text-4xl font-bold">{Math.round(currentWeather.temp)}°{UNITS === "metric" ? "C" : "F"}</p>
              <p className="capitalize text-muted-foreground">{currentWeather.description}</p>
              <p className="text-sm text-muted-foreground">{currentWeather.date}</p>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {forecast.map((day) => (
              <div key={day.date} className="text-center">
                <p className="font-semibold">{day.date}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                  alt={day.description}
                  className="mx-auto"
                />
                <p className="capitalize text-sm">{day.description}</p>
                <p className="font-bold">{Math.round(day.temp)}°{UNITS === "metric" ? "C" : "F"}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
