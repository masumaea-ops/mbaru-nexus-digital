import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-in-right">
      <Card className="bg-background/95 backdrop-blur border shadow-lg max-w-lg mx-auto md:mx-0 md:max-w-md">
        <div className="p-4">
          <div className="flex items-start space-x-3">
            <Cookie className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-2">Cookie Consent</h3>
              <p className="text-xs text-muted-foreground mb-3">
                We use cookies to enhance your browsing experience, analyze site traffic, 
                and provide personalized content. By continuing to use our site, you consent 
                to our use of cookies.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={acceptCookies}
                  size="sm"
                  variant="default"
                  className="text-xs"
                >
                  Accept All
                </Button>
                <Button
                  onClick={declineCookies}
                  size="sm"
                  variant="outline"
                  className="text-xs"
                >
                  Decline
                </Button>
              </div>
            </div>
            <Button
              onClick={declineCookies}
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};