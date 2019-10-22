//Problem-2 Write some JavaScript that loops through the following bands array and alerts, "I love [bandName]", obviously with the current band name string replacing the [bandName].
const iLoveBands = ()=>{
const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];
bands.forEach(band =>{
 alert(`I Love ${band}`);
});
}
iLoveBands();