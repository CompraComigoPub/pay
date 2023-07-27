if [ "$1" = "" ]
then
  echo "Usage: $0 <transactionID>"
  exit
fi

json=$( printf '{ "transactionID": %s }' $1 )
cmd=$( echo 'curl --header "Content-Type: application/json" --request POST --data' \'$json\' 'http://localhost:3000/api/simulate-payment' )

eval $cmd