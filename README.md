## An unofficial, hassle-free [Santander Cycles](https://tfl.gov.uk/modes/cycling/santander-cycles) app

I have created this app for personal use, out of sheer frustration with the available applications (and web sites) which are intended to help you locate nearby docking stations. At the time this app was started, these usually either worked extremely slowly or didn't work at all.

As many Londoners do, I often happen to be in a rush and want to (quickly :)):
 * find a station with available bikes, to get one
 * find a station with available spaces, to leave one. This is especially important because after the initial 30 minutes your card will be charged again
 
The sole purpose of the application is to be as easy and quick to use as possible. Ideally, I want to be able to pull out the phone while riding the bike, and have the information I'm looking for at my fingertips, without having to type or click anything.

**Currently the app is in a pre-alpha state, works to a bare minimum, and has only been tested on Android.**

Immediately after opening it refreshes by querying the API for nearby docking stations, using the current location. It lists them sorted by distance and highlights the number of avaiable bikes and spaces for each. Clicking on a listed docking station opens Google Maps, with a pin on the docking station.

## Build

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

The application uses [Transport for London Unified API](https://api.tfl.gov.uk/) to fetch data (nearest docking stations, etc.). 

You will need to obtain your Application Key and ID, and then use those when building the app:

```
APP_ID=your-app-id APP_KEY=your-app-key react-native run-android
```
