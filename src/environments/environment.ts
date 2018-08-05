// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBmJmQjRikwsocIBRROdaZUUbPIcc79XhM',
    authDomain: 'cms-angular-firebase-stbr.firebaseapp.com',
    databaseURL: 'https://cms-angular-firebase-stbr.firebaseio.com',
    projectId: 'cms-angular-firebase-stbr',
    storageBucket: 'cms-angular-firebase-stbr.appspot.com',
    messagingSenderId: '620951967722'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
