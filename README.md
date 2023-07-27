# Compra Comigo PAY (CC-PAY)

Compracomigo Payment (cc-pay) is a layer developed to abstract payment gateway integrations. The purpose of this project is create a integration layer in which ones can plug any of the developed drivers. The first one will be the Pagarme solution.

## Up & Running

To up and run this API, you need to obey the follow steps:

- Download this project and enter to the its folder
- Install the project assets ( Eg.: npm install )
- Create a copy of .env.sample and rename it to .env
- Edit the .env content according to your needs
- Run the start command (Eg.: vercel dev )
- The API will running at port 9500 ( Eg.: http://localhost:3000 )

## Endpoints

The endpoints (EP) are part of URL routes that diferentiate the API interactions and allow to execute distinct commands in that.

| Endpoint         | Method |                                         Interaction |
| :--------------- | :----: | --------------------------------------------------: |
| create-payment   |  POST  |                   Create a payment into the gateway |
| simulate-payment |  POST  | Simulates a payment (used for brazilian bankbillet) |  |

## Code Samples

Create a boleto payment

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '
   {
	"amount": 12345,
	"payment_method": "boleto",
	"customer": {
		"external_id": "#3311",
		"name": "Andre da Silva",
		"type": "individual",
		"country": "br",
		"email": "andre@da.silva",
		"phone_numbers": ["+55511122233445"],
		"birthday": "1970-o1-01",
		"documents": [{
			"type": "cpf",
			"number": "11111111111"
		}]
	}
}' \
  http://localhost:3000/api/create-payment
```

Simulates a boleto payment ( change the status to paid )

```
curl
    --header "Content-Type: application/json"
    --request POST
    --data '{ "transactionID": 123456 }'
    http://localhost:3000/api/simulate-payment
```

### Bash Samples

The sample folder contains bash scripts that can be used to simulate API interactions, is strongly recommended open it and understand how these scripts work before use it.
