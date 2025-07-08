import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Cloud, MapPin, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About Vayutrack</h1>
        <p className="text-xl text-muted-foreground">
          Your trusted companion for accurate weather information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              Real-time Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Get accurate, up-to-date weather information powered by OpenWeatherMap API. 
              Stay informed about current conditions, forecasts, and weather alerts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Location-based
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Search for weather in any city worldwide or use your current location 
              for instant local weather updates. Save your favorite cities for quick access.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Favorites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Add up to 10 favorite cities to your personal dashboard. 
              Quickly check weather conditions for all your important locations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User-friendly
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Designed with simplicity in mind. Clean interface, responsive design, 
              and intuitive navigation make weather checking effortless.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Our Weather App provides real-time weather updates at your fingertips. With accurate 
            forecasts and current weather conditions, you can plan your day with confidence. 
            Whether you're checking the weather for your daily commute or planning your weekend, 
            our app will keep you informed with up-to-date information. Stay connected with your 
            favorite cities and explore new locations effortlessly.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Current weather conditions with detailed metrics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>5-day weather forecast</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Global city search functionality</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Geolocation support for local weather</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Favorite cities management (up to 10 cities)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Dark/Light theme support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Responsive design for all devices</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center mt-8 p-6 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          Built with ❤️ by Parvesh Bansal using React and OpenWeatherMap API
        </p>
      </div>
    </div>
  );
};

export default About;
