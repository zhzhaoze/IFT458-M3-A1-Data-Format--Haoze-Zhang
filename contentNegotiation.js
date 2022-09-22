import fetch from 'node-fetch';
var query = 'https://swapi.dev/api/people/1';

    fetch(query, {
                    method: 'GET',
                    headers: {
                        'Content-Tyope': 'application/xml',
                        'accept': 'application/json',
                        'User-Agent': '*'
                        },
                }
           ).then(function(response){
            console.log(`response= ${response}`);//json
            return response.text();
           })
           .then(function(xml){
            //convert to workable json
            console.log(`XML = ${xml}`); //json
           })
           .catch((error) => {
            console.error('Error:', error);
           })