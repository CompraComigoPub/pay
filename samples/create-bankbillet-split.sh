curl --header "Content-Type: application/json" \
  --request POST \
  --data '
   {
	"amount": 19895,
	"payment_method": "boleto",
    "split_rules": [
        {
            "recipient_id": "re_ckhc4gxkt086t0g9tzl6qo00f",
            "percentage": 10,
            "liable": true,
            "charge_processing_fee": true
        },
        {
            "recipient_id": "re_ckhc4c4rc081m0h9ttjos068a",
            "percentage": 10,
            "liable": true,
            "charge_processing_fee": true
        },
        {
            "recipient_id": "re_ckggz30bz0egu0g9tqgvyyw94",
            "percentage": 10,
            "liable": true,
            "charge_processing_fee": true
        },
        {
            "recipient_id": "re_ckggz309q0ely0h9tkeiidqgr",
            "percentage": 35,
            "liable": true,
            "charge_processing_fee": true
        },
        {
            "recipient_id": "re_ckggz308x00nf0g9twamudf6y",
            "percentage": 35,
            "liable": true,
            "charge_processing_fee": true
        }
    ],
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
