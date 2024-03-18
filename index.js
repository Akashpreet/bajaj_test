const axios = require('axios');
let data = JSON.stringify({
  "name": "Akashpreet Singh",
  "email": "akashpreet0117.be21@chitkara.edu.in",
  "rollNumber": 2110990117,
  "phone": 7986148188
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount?name=Akashpreet_Singh&email=akashpreet0117.be21@chitkara.edu.in',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'BrowserId=Sd_rFeUGEe61TysgxhxTFQ; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
