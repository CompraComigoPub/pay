curl --header "Content-Type: application/json" \
  --request POST \
  --data '
   {
	"amount": 19895,
	"payment_method": "boleto",
	"customer": {
		"external_id": "#3311",
		"name": "Alexandre Conrado",
		"type": "individual",
		"country": "br",
		"email": "conrado@on2.dev",
		"phone_numbers": ["+5551993727450"],
		"birthday": "1977-10-01",
		"documents": [{
			"type": "cpf",
			"number": "91956196072"
		}]
	}
}' \
  http://localhost:3000/api/create-payment
