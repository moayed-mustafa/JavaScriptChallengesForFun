
// Problem-3 In the previous challenge, when the loop gets to 'Nickelback', alert, "I DON'T love Nickelback!", but still alert the previous message for all other bands.
const iLoveBandsButNotNickelback = ()=>{
    const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];
    bands.forEach(band =>{
        band === 'Nickelback'? 
        alert("I Don't love Nickelback "):
        alert(`I Love ${band}`);
    });
    }
    iLoveBandsButNotNickelback();
   