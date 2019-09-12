export class Dinosaurs {
    getDinosaurs(getDinos) {
      return new Promise(function(resolve, reject) {
        let data = null;
        let request = new XMLHttpRequest();
        
        const url = `https://alexnormand-dino-ipsum.p.rapidapi.com/?format=html&words=10&paragraphs=5`;
 //       request.withCredentials = true; // Does this need to be in/out of the fx(req.onload)
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url);//, true);
        // request.setRequestHeader("x-rapidapi-host", "alexnormand-dino-ipsum.p.rapidapi.com");
        // request.setRequestHeader("x-rapidapi-key", "process.env.API_KEY");
        request.send(data);
      });
    }
}



