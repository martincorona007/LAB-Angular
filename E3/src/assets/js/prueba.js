// function name(){
//   alert("I am Lucifer");
  
// }
//import urlMetadata from '../../../node_modules/url-metadata';
function something(){
  console.log("soemthigss")


  //const {urlMetadata} = require(['url-metadata']);
  const urlMetadata = require('url-metadata')
  console.log("???")
urlMetadata('https://www.twitch.tv/francmarmar').then(
  function (metadata) { // success handler
    console.log(metadata)
  },
  function (error) { // failure handler
    console.log(error)
  })
  const getMetaData = require('metadata-scraper')

const url = 'https://github.com/BetaHuhn/metadata-scraper'

getMetaData(url).then((data) => {
	console.log(data)
})
}
function name(){
  //var require: any;
const urlMetadata = require('url-metadata');

  console.log("???")
urlMetadata('https://www.twitch.tv/francmarmar').then(
  function (metadata) { // success handler
    console.log(metadata)
  },
  function (error) { // failure handler
    console.log(error)
  })
}
