import { Component } from '@angular/core';
declare var name: any;
declare var something: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public valor1=0;
  public  valor2=0;
  public  resultado=0;
  ngOnInit(){
   // new name();
    new something();
   

        //var require: any;
       // const getMetaData = require('metadata-scraper')
    // function getMetaData(app: any): void{
    //   app = 'metadata-scraper'
    // }
// const url = 'https://github.com/BetaHuhn/metadata-scraper';

// getMetaData(url).then((data: any) => {
// 	console.log(data)
// })
//     var require: any;
//     var scrape = require('html-metadata');
// var request = require('request');

// var options =  {
//     url: "http://blog.woorank.com/2013/04/dublin-core-metadata-for-seo-and-usability/",
//     jar: request.jar(), // Cookie jar
//     headers: {
//         'User-Agent': 'webscraper'
//     }
// };

// scrape(options, function(error: any, metadata: any){
//     console.log(metadata);
// });
//     var require: any;
//     var cheerio = require('cheerio');
// var preq = require('preq'); // Promisified request library
// var parseDublinCore = require('html-metadata').parseDublinCore;
 
// var url = "http://blog.woorank.com/2013/04/dublin-core-metadata-for-seo-and-usability/";
 
// preq(url).then(function(response: any){
//     var lo = cheerio.load(response.body);
//     return parseDublinCore(lo).then(function(metadata: any){
//         console.log(metadata);
//     });
// });
//   const urlMetadata = require('url-metadata'); 
//  urlMetadata('http://bit.https://www.youtube.com/watch?v=3EEp4WU7zrk').then(
//    function (metadata: any) { // success handler
//      console.log(metadata)
//    },
//    function (error: any) { // failure handler
//      console.log(error)
//    })
// var require: any
//   var scrape = require('html-metadata');
 
//   var url = "http://blog.woorank.com/2013/04/dublin-core-metadata-for-seo-and-usability/";  
   
//   scrape(url).then(function(metadata :any){
//       console.log(metadata);
//   });


   }
  sumar() {
    this.resultado = this.valor1 + this.valor2;
  }
}
