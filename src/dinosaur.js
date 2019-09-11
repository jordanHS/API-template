export class Species {
    getSpeciesByKingdom(kingdom_name) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        const url = `/api/v3/species/0/:page_number?token=${"kingdom_name"}%${"genus_name"}%${process.env.API_KEY}`; //?q=${city}&appid=${process.env.API_KEY}`
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });
    }
  }
//count:
  /*–
  {"count":10000,"page":"0","result":
      [{
        "taxonid":3,
        "kingdom_name":"ANIMALIA",    // using
        "phylum_name":"MOLLUSCA",
        "class_name":"GASTROPODA",
        "order_name":"STYLOMMATOPHORA",
        "family_name":"ENDODONTIDAE",
        "genus_name":"Aaadonta",      //a.k.a. common name
        "scientific_name":"Aaadonta angaurana",
        "infra_rank":null,
        "infra_name":null,
        "population":null,
        "category":"CR"}*/   