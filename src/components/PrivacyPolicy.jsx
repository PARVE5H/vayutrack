import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Shield, Eye, Lock, Database, UserCheck, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground">
          Your privacy is important to us
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Our Commitment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Your privacy is important to us. Our Weather App collects minimal data necessary 
              for providing accurate weather updates and enhancing your experience. We do not 
              share or sell your personal information to third parties. Our app may collect 
              location data with your consent to provide localized weather information. You can 
              disable location sharing at any time through your device settings.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Location Data</h4>
                <p className="text-muted-foreground">
                  We may collect your device's location to provide local weather information. 
                  This data is used only for weather services and is not stored permanently.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Search History</h4>
                <p className="text-muted-foreground">
                  City searches and favorite locations are stored locally on your device 
                  to enhance your user experience and provide quick access to frequently viewed locations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Usage Analytics</h4>
                <p className="text-muted-foreground">
                  We may collect anonymous usage statistics to improve app performance and user experience. 
                  This data cannot be used to identify individual users.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Provide accurate weather information for your location</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Remember your favorite cities and preferences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Improve app performance and user experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Provide personalized weather alerts and notifications</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. Your data 
              is encrypted during transmission and stored securely. We regularly review and 
              update our security practices to ensure your information remains protected.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5" />
              Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Access and Control</h4>
                <p className="text-muted-foreground">
                  You have the right to access, update, or delete your personal information 
                  at any time. Most data is stored locally on your device and can be cleared 
                  through app settings or device storage management.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location Permissions</h4>
                <p className="text-muted-foreground">
                  You can grant or revoke location permissions at any time through your device settings. 
                  The app will continue to function without location access, though some features may be limited.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Portability</h4>
                <p className="text-muted-foreground">
                  Your favorite cities and preferences are stored locally and can be exported 
                  or transferred according to your device's data management capabilities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Third-Party Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">OpenWeatherMap API</h4>
                <p className="text-muted-foreground">
                  We use OpenWeatherMap API to provide weather data. Location information 
                  may be shared with this service to retrieve accurate weather information. 
                  Please review OpenWeatherMap's privacy policy for more details.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your data, 
              please contact us at:
            </p>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>Email: parveshbansal063@gmail.com</p>
              <p>GitHub: github.com/parve5h</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            This privacy policy may be updated from time to time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
