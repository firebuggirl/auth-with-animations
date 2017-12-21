import { environment } from '../../environments/environment';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  //clientID: 'nAG2jFnP2fqoF6lWtNxIVSYu2tEGC4vW',
  clientID: environment.clientID,
  domain: environment.domain,
  //callbackURL: 'http://localhost:4200/callback'
  callbackURL:'https://auth-example-with-anim.herokuapp.com'
};
