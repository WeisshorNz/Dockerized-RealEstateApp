FROM mongo
COPY testListings.json /testListings.json
CMD mongoimport --host mongo --db M5 --collection listings --type json --file /testListings.json --jsonArray    