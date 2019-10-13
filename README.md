## Setup
1. If using Safari on iOS 12.1+, you need to enable 'Motion & Orientation Access'. Use [these instructions](https://support.thinglink.com/hc/en-us/articles/360025878094-Enabling-accelerometer-on-iOS)
2. Pages running on iOS Safari can only access accelerometer information if the site uses HTTPS. To use this in a local development environment, you'll need to create a "\_key" directory in your project folder and use openssl or a similar tool to create a key and certificate there. Then run your development server using that key (e.g. `$ live-server --https="config.js" .`), where config.js points to the \_key folder you just created. You'll need to also accept the warning shown on the screen.
3. Once that's running, you can access it via your mobile browser at https://[computer's IP]:8080. To see your local IP on a mac, hold down option and click your wifi icon in the upper right corner of your screen.

## Precedents/Existing Work
- https://github.com/jtq/cardboard-vr – works but appears to not have access to the accelerometer?
- https://github.com/immersive-web/cardboard-vr-display - not three.js based
- https://github.com/datadesk/vr-interactives-three-js
- https://github.com/neuman/vreticle - accelerometer doesn't work?
- https://github.com/immersive-web/webvr-polyfill - accelerometer seems to be working ok, use this

## Hardware
You can use any iPhone or Android device inside of a Google Cardboard headset. To purchase, see [here](https://www.amazon.com/dp/B07G6Z578H/ref=twister_B07QFHF9BN?_encoding=UTF8&psc=1) or similar.

## Development
- [ ]
