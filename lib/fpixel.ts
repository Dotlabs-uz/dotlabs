// export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// export const pageview = () => {
//   (window as any).fbq("track", "PageView");
// };

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name:string, options:any = {}) => {
  (window as any).fbq("track", name, options);
  console.log("event");
};