const axios = require('axios');

const pagarme = {
  api_url: 'https://api.pagar.me/1/transactions',

  postback_url: null,

  payload: { items: [] },

  init: (api_key) => {
    pagarme.payload.api_key = api_key;
  },

  getPayload: () => {
    return pagarme.payload;
  },

  getPostbackUrl: () => {
    return pagarme.postback_url;
  },

  setPayload: (amount, method, expirationDate, instructions, customer, billing, shipping, items = []) => {
    pagarme
      .setAmount(amount)
      .setMethod(method)
      .setExpirationDate(expirationDate)
      .setIntructions(instructions)
      .setCustomer(customer)
      .setBilling(billing)
      .setShipping(shipping);

    for (let i in items) {
      pagarme.addItem(items[i]);
    }

    return pagarme;
  },

  setAmount: (amount) => {
    pagarme.payload.amount = amount;

    return pagarme;
  },

  setExpirationDate: (boleto_expiration_date) => {
    pagarme.payload.boleto_expiration_date = boleto_expiration_date;

    return pagarme;
  },

  setInstructions: (boleto_instructions) => {
    pagarme.payload.boleto_instructions = boleto_instructions;

    return pagarme;
  },

  setMethod: (method) => {
    pagarme.payload.payment_method = method;

    return pagarme;
  },

  setCustomer: (customer) => {
    pagarme.payload.customer = customer;

    return pagarme;
  },

  setBilling: (billing) => {
    pagarme.payload.billing = billing;

    return pagarme;
  },

  setShipping: (shipping) => {
    pagarme.payload.shipping = shipping;

    return pagarme;
  },

  setSplitRules: (split_rules) => {
    pagarme.payload.split_rules = split_rules;

    return pagarme;
  },

  addItem: (item) => {
    pagarme.payload.items.push(item);

    return pagarme;
  },

  simulatePayment: (transactionID) => {
    let url = `https://api.pagar.me/1/transactions/${transactionID}`;

    return axios.put(url, {
      api_key: pagarme.payload.api_key,
      status: 'paid',
    });
  },

  createRecepient: (data) => {
    console.log('Creating Recepient!');

    let pgme = require('pagarme');
    let connect = pgme.client.connect({ api_key: pagarme.payload.api_key });

    return connect.then((client) => {
      return client.recipients.create(data);
    });
  },

  createPayment: () => {
    let pgme = require('pagarme');
    let connect = pgme.client.connect({ api_key: pagarme.payload.api_key });
    return connect.then((client) => {
      return client.transactions.create(pagarme.payload);
    });
  },

  listRecepients: () => {
    let url = `https://api.pagar.me/1/recipients?api_key=${pagarme.payload.api_key}`;

    return axios.get(url);
  },

  whoAmI: () => {
    console.log('Im the Pagarme Driver!');
  },
};

module.exports = pagarme;
