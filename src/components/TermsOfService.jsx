import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CopyCheck, ShieldAlert, MenuSquare, FileBadge2 , NotebookPen, Mail    } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-xl text-muted-foreground">
          Welcome to the Vayutrack App
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CopyCheck className="h-5 w-5" />
              Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to our Weather App. By using our service, you agree to comply with our 
              terms and conditions. We provide weather information for personal use only and 
              cannot guarantee absolute accuracy. The app is not liable for any decisions made 
              based on the information provided. We reserve the right to modify or terminate 
              the service at any time without notice. By continuing to use our app, you acknowledge 
              that you have read and understood our terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MenuSquare className="h-5 w-5" />
              Use of the Service
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Our service is for personal and non-commercial use only. You may not 
                use the service for any unauthorized commercial purposes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>You agree not to use the app in any way that causes, or may cause, 
                damage to the app or impairment of its availability or accessibility.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>You must not attempt to gain unauthorized access to any part of the app 
                or any connected systems or networks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>You are prohibited from using the app to transmit or distribute 
                malicious software, spam, or any harmful content.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileBadge2  className="h-5 w-5" />
              Intellectual Property
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              All content included in the Weather App, including but not limited to text, graphics,
              logos, icons, images, and software, is the property of the app creators and is 
              protected by copyright, trademark, and other intellectual property laws. You may not 
              modify, copy, distribute, transmit, display, perform, reproduce, publish, license, 
              create derivative works from, transfer, or sell any information obtained from the app 
              without express written permission.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5" />
              Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide accurate and up-to-date weather information, we cannot 
              guarantee the accuracy, completeness, or timeliness of the data. Weather information 
              is provided "as is" without warranties of any kind. We are not liable for any 
              decisions made or actions taken based on the information provided by the app, 
              including but not limited to travel plans, outdoor activities, or business decisions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <NotebookPen   className="h-5 w-5" />
              Changes to These Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms of service at any time without prior notice. 
              Changes will be effective immediately upon posting to the app. We will make reasonable 
              efforts to notify users of significant changes through the app interface or other 
              communication methods. Your continued use of the app after any changes constitutes 
              acceptance of the new terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Mail    className="h-5 w-5" />Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions regarding these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>Email: parveshbansal063@gmail.com</p>
              <p>GitHub: github.com/parve5h</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8 p-6 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            These terms are subject to change without notice. We recommend reviewing the terms 
            periodically to stay informed of any updates. Your continued use of the app indicates 
            acceptance of any modified terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
