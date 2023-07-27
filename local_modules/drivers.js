const drivers = {
  driver: {},

  hello: () => {
    console.log('Hello Im a Driver!');
  },

  init: () => {
    drivers.driver.id = process.env.DRIVER_ID;
    drivers._loadDriver(process.env.DRIVER_API_KEY);
  },

  _loadDriver: (api_key) => {
    switch (drivers.driver.id) {
      case 'pagarme':
        const pagarme = require('./pagarme-drv.js');
        pagarme.init(api_key);
        drivers.driver.driver = pagarme;
        break;
    }

    // Sets the postback url according to env
    drivers.driver.postback_url = process.env.POSTBACK_URL;
  },

  getDriver: () => {
    return drivers.driver;
  },
};

module.exports = drivers;
