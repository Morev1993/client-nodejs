const config = {
  "development": {
    "api_token": "8a3c8519d84920c7ca7e576c9798dd86676ed6ae",
    "base_url": "https://api.pipedrive.com/v1",
    "company_domain": "cardpaycom",
    "port": 7000,
    "mail": {
      "host": "email-cy.cardpay-test.com",
      "port": 25,
      "secure": false
    }
  },
  "production": {
    "api_token": "8a3c8519d84920c7ca7e576c9798dd86676ed6ae",
    "base_url": "https://api.pipedrive.com/v1",
    "company_domain": "cardpaycom",
    "port": 7000,
    "proxy": {
      "host": "waf-sandbox.cardpay.com",
      "port": 3128
    },
    "mail": {
      "host": "email-sandbox.cardpay-test.com",
      "port": 25,
      "secure": false
    }
  }
};

export const APP_CONFIG = config[process.env.NODE_ENV];
