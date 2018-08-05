export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  roles: Roles;
}

export interface Roles {
  subscriber?: boolean;  // optionale parameter welche evtl. noch nicht existieren mit ?
  admin?: boolean;
}
