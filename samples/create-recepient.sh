curl --header "Content-Type: application/json" \
  --request POST \
  --data '
    {
        "anticipatable_volume_percentage": "75",
        "automatic_anticipation_enabled": "true",
        "bank_account": {
            "bank_code": "341",
            "agencia": "0123",
            "agencia_dv": "4",
            "conta": "54321",
            "type": "conta_corrente",
            "conta_dv": "1",
            "document_number": "26268738888",
            "legal_name": "NEW RECEPIENT 13/11/2020"
        },
        "transfer_day": "5",
        "transfer_enabled": "false",
        "transfer_interval": "weekly"
}' \
  http://localhost:3000/api/create-recepient
