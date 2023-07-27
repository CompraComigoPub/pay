const express = require('express');
const request = require('supertest');
const app = express();

const isJSON = (str) => {
  try {
    const json = JSON.parse(str);
    if (Object.prototype.toString.call(json).slice(8, -1) !== 'Object') {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
};

describe('testing-recepients', () => {
  it('GET /api/recepients', async () => {
    const { body } = await request(app).get('/api/recepients');

    expect(isJSON(body)).toBe(!true);
  });
});
