export class Species {
    getWeatherByCity(city) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        const url = `/api/v3/species/page/:page_number?token=${process.env.API_KEY}`; //?q=${city}&appid=${process.env.API_KEY}`
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

  /*–"count":10000,"page":"0","result":[{"taxonid":3,"kingdom_name":"ANIMALIA","phylum_name":"MOLLUSCA","class_name":"GASTROPODA","order_name":"STYLOMMATOPHORA","family_name":"ENDODONTIDAE","genus_name":"Aaadonta","scientific_name":"Aaadonta angaurana","infra_rank":null,"infra_name":null,"population":null,"category":"CR"}*/