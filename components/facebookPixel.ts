interface WindowWithFbq extends Window {
    fbq?: {
      callMethod?: (method: string, ...args: any[]) => void;
      track?: (event: string, data?: any) => void;
    };
  }
  
  export const initFacebookPixel = (): void => {
    const windowWithFbq = window as WindowWithFbq;
  
    if (windowWithFbq.fbq?.callMethod) {
      windowWithFbq.fbq.callMethod('init', '280922751657091');
      windowWithFbq.fbq.callMethod('track', 'PageView');
      windowWithFbq.fbq.callMethod('track', 'Lead');
    }
  };