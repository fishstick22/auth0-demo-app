interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '7l97VjSsBDLxnGuXddU5n9Mx0W93pZmt',
  domain: 'fishstick22.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
