
//import { environment } from '../../environments/environment';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'nAG2jFnP2fqoF6lWtNxIVSYu2tEGC4vW',
  domain: 'juliettet.auth0.com',
  //callbackURL: 'http://localhost:7777'
  callbackURL:'https://auth-example-with-anim.herokuapp.com'
};
