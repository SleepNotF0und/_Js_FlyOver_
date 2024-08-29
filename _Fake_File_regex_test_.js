// config.js

// Sample API Keys and Tokens
const API_KEYS = {
    googleMaps: "AIzaSyD-1234567890abcdefg",
    aws: "AKIAIOSF1234567890abcdef",
    azure: "e1b6f1a5-1234567890abcdef",
    sendGrid: "SG.1234567890abcdefg",
    stripe: "sk_test_4eC39Hq1234567890abcdef",
    twilio: "AC12345678901234567890123456789012",
    github: "ghp_1234567890abcdef",
    facebook: "EAAB1234567890abcdef",
    slack: "xoxb-1234-5678901234567890",
    dropbox: "sl.ABCDEFGHIJKL1234",
    paypal: "A21AA1234567890",
    coinbase: "6a2ddbe6-1234567890",
    openai: "sk-1234567890",
    spotify: "BQC1abcdef1234567890",
    heroku: "01234567-89ab-cdef",
    jira: "dXNlcjpwYXNzd29yZA=="
};

// Sample OAuth Tokens
const OAUTH_TOKENS = {
    googleOAuth: "ya29.a0AfH6SMA1234567890",
    facebookOAuth: "EAAGm0PX4ZCpsBA1234567890",
    twitterOAuth: "AAAAAAAAAAAAAAAAAAAA1234567890",
    linkedinOAuth: "AQTF1234567890abcdefgh",
    githubOAuth: "gho_1234567890abcdef",
    spotifyOAuth: "BQD31234567890abcdef"
};

// Sample Private Keys
const PRIVATE_KEYS = {
    rsaPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1234567890abcdefg
-----END RSA PRIVATE KEY-----`,
    sshPrivateKey: `-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdm12LW5wOTtDb250ZW50LW1hc3Rlci0tLS0t
-----END OPENSSH PRIVATE KEY-----`,
    jwtPrivateKey: "MIIBVgIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEA1234567890"
};

// Sample Secrets
const SECRETS = {
    jwtSecret: "mySuperSecretJWTKey12345",
    dbPassword: "myDatabasePassword123456",
    encryptionKey: "mySuperSecretEncryptionKey12345"
};

// Exporting keys for use in other files
export { API_KEYS, OAUTH_TOKENS, PRIVATE_KEYS, SECRETS };
