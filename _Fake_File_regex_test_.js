const API_KEYS = {
    googleMaps: "AIzaSyD-fakeGoogleMapAPIKey1234567890",
    aws: "AKIAIOSF-fakeAWSAccessKeyId1234567890",
    azure: "e1b6f1a5-fakeAzureSubscriptionKey1234567890",
    sendGrid: "SG.fakeSendGridApiKey1234567890",
    stripe: "sk_test_4eC39Hq-fakeStripeSecretKey1234567890",
    twilio: "AC12345678901234567890123456789012-fakeTwilioApiKey",
    github: "ghp_1234567890abcdefghijklmnopqrstuvwxyz",
    facebook: "EAABfakeFacebookAccessToken1234567890",
    slack: "xoxb-1234-fakeSlackApiKey-5678901234567890",
    dropbox: "sl.ABCDEFGHIJKL1234fakeDropboxApiKey",
    paypal: "A21AAFakePaypalClientId1234567890",
    coinbase: "6a2ddbe6-fakeCoinbaseApiKey1234567890",
    openai: "sk-12345fakeOpenAIKey67890",
    spotify: "BQC1fakeSpotifyApiKey1234567890abcdef",
    heroku: "01234567-89ab-cdef-fakeHerokuApiKey",
    jira: "dXNlcjpwYXNzd29yZA==fakeJiraApiKey"
};

// Sample OAuth Tokens
const OAUTH_TOKENS = {
    googleOAuth: "ya29.a0AfH6SMA_fakeGoogleOAuthToken1234567890",
    facebookOAuth: "EAAGm0PX4ZCpsBAFakeFacebookOAuthToken1234567890",
    twitterOAuth: "AAAAAAAAAAAAAAAAAAAA_fakeTwitterOAuthToken1234567890",
    linkedinOAuth: "AQTFakeLinkedinOAuthToken1234567890abcdefgh",
    githubOAuth: "gho_1234567890abcdefghijklmnopqrstuvwxyz",
    spotifyOAuth: "BQD3_fakeSpotifyOAuthToken1234567890abcdef",
    microsoftOAuth: "EwBAA8fakeMicrosoftOAuthToken1234567890abcdef"
};

// Sample Private Keys
const PRIVATE_KEYS = {
    rsaPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA7P4KX-fakeRSAPrivateKeyContent1234567890
-----
END RSA PRIVATE KEY-----`,
    sshPrivateKey: `-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdm12LW5wOTtDb250ZW50LW1hc3Rlci0tLS0t
-----
END OPENSSH PRIVATE KEY-----`,
    jwtPrivateKey: "MIIBVgIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEA7P4KX-fakeJWTPrivateKey1234567890"
};

// Sample Secrets
const SECRETS = {
    jwtSecret: "mySuperSecretJWTKey12345",
    dbPassword: "myDatabasePassword123456",
    encryptionKey: "mySuperSecretEncryptionKey12345"
};

// Exporting keys for use in other files
export { API_KEYS, OAUTH_TOKENS, PRIVATE_KEYS, SECRETS };
