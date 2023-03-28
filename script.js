
document.addEventListener('DOMContentLoaded',()=>{
    const selectDrop=document.querySelector('#countries');
    fetch('https://api.covid19api.com/summary')
    .then((response)=>response.json())
    .then(data=>{
        let output="";
        data=JSON.stringify(data.Countries)
        data=JSON.parse(data);
        console.log(data);
        data.forEach(function(Country){
            output+=`<option>${Country.Country}</option>`;
            console.log(Country);
          
        })
        selectDrop.innerHTML=output;
        input+=`<div>${Country.Country.TotalConfirmed}</div>`
    }).catch(err=>{
        console.log(err);
    })
});
function one(){
    fetch('https://api.covid19api.com/summary')
    .then ((response)=>response.json())
    .then ((data)=>{
       
        const ko=
       `<div>${data.Global.TotalConfirmed}</div>` 
       document.getElementById(`comfirmed`).innerHTML +=ko;
       const kot=
       `<div>${data.Global.TotalDeaths}</div>` 
       document.getElementById(`deceased`).innerHTML +=kot;
       const kos=
       `<div>${data.Global.NewConfirmed}</div>` 
       document.getElementById(`active`).innerHTML +=kos;
       const kov=
       `<div>${data.Global.NewDeaths}</div>` 
       document.getElementById(`recovered`).innerHTML +=kov;
    
   })

}
    one();
   

 
