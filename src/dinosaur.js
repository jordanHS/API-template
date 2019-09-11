export class Species {
    getSpeciesByKingdom(getDinos) {
      // jQuery.ajax example
      return new Promise(function(resolve, reject) {  //resolve, reject

        let getData = $.get('http://dinoipsum.herokuapp.com/api/?format=JSON'),
        resolve = function(json) {
          $('#some-awesome-container').html(html);
        
          $.ajax({
            dataType: "json",
            url: url,
            data: data,
            success: success
          });

          $.getJSON( "ajax/test.json", function( data ) {
            var items = [];
            $.each( data, function( key, val ) {
              items.push( "<li id='" + key + "'>" + val + "</li>" );
            });
           
            $( "<ul/>", {
              "class": "my-new-list",
              html: items.join( "" )
            }).appendTo( "body" );
          });       
        
        },
        reject = function() {
          console.log('Where did all the dinosaurs go?');
        };Í
        request.open("GET", url, true);
        //       request.send();
        //     });
        //   }
        // }
        getData.then(resolve, reject);


  //     return new Promise(function(resolve, reject) {
  //       let request = new XMLHttpRequest();
  //       // const url = `/api/v3/species/0/:page_number?token=${"kingdom_name"}%${"genus_name"}%${process.env.API_KEY}`; //?q=${city}&appid=${process.env.API_KEY}`
  //       request.onload = function() {
  //         if (this.status === 200) {
  //           resolve(request.response);
  //         } else {
  //           reject(Error(request.statusText));
  //         }
  //       }
  //       request.open("GET", url, true);
  //       request.send();
  //     });
  //   }
  // }


  /*DINOSAURS

  [
    [
        "Saurophagus",
        "Helopus",
        "Texasetes",
        "Amtosaurus",
        "Sinraptor",
        "Tendaguria",
        "Ornithosuchus",
        "Galvesaurus",
        "Sinraptor",
        "Ilokelesia",
        "Gongxianosaurus",
        "Sinucerasaurus",
        "Achillesaurus",
        "Iguanodon",
        "Squalodon",
        "Muttaburrasaurus",
        "Lanasaurus",
        "Rhopalodon",
        "Mendozasaurus",
        "Banji"
    ],
    [
        "Siamodon",
        "Kentrurosaurus",
        "Diracodon",
        "Montanoceratops",
        "Eustreptospondylus",
        "Iguanodon",
        "Stegosaurides",
        "Uintasaurus",
        "Kemkemia",
        "Planicoxa",
        "Aurornis",
        "Eucercosaurus",
        "Machairasaurus",
        "Brachyrophus",
        "Chindesaurus",
        "Echinodon",
        "Dromaeosaurus",
        "Hortalotarsus",
        "Tatisaurus",
        "Nuthetes"
    ],
    [
        "Unquillosaurus",
        "Sinotyrannus",
        "Ornithotarsus",
        "Prenoceratops",
        "Longosaurus",
        "Troodon",
        "Mymoorapelta",
        "Bistahieversor",
        "Anchiceratops",
        "Paralititan",
        "Hoplitosaurus",
        "Lourinhanosaurus",
        "Xixiasaurus",
        "Acanthopholis",
        "Protognathosaurus",
        "Urbacodon",
        "Chirostenotes",
        "Sinotyrannus",
        "Alaskacephale",
        "Zephyrosaurus"
    ],
    [
        "Phyllodon",
        "Shaochilong",
        "Orosaurus",
        "Dicraeosaurus",
        "Melanorosaurus",
        "Sonorasaurus",
        "Futabasaurus",
        "Jiangjunosaurus",
        "Yanornis",
        "Ganzhousaurus",
        "Yulong",
        "Comahuesaurus",
        "Dynamosaurus",
        "Eucamerotus",
        "Archaeopteryx",
        "Euoplocephalus",
        "Avisaurus",
        "Brachylophosaurus",
        "Limusaurus",
        "Sinosauropteryx"
    ],
    [
        "Antetonitrus",
        "Genusaurus",
        "Vagaceratops",
        "Crataeomus",
        "Gideonmantellia",
        "Ostafrikasaurus",
        "Palaeocursornis",
        "Dongbeititan",
        "Coelosaurus",
        "Teinurosaurus",
        "Mirischia",
        "Turanoceratops",
        "Itemirus",
        "Cheneosaurus",
        "Sphaerotholus",
        "Cryptosaurus",
        "Aetonyx",
        "Albertadromeus",
        "Compsosuchus",
        "Rinchenia"
    ]
]
Close Select Output
2013Alex Normand


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
        "category":"CR"}
*/   