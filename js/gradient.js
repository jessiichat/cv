/*
Change gradient background depending moment of the day
    From 00:00 AM to 06:00, gradient is full #4a525e (dark)
    From 06:00 AM to 09:00 AM, gradient goes from #4a525e (dark) to #F9F8F6 (light)
    From 09:00 AM to 06:00 PM, gradient is full #F9F8F6 (light)
    From 06:00 PM to 10:00 PM, gradient goes from #F9F8F6 (light) to #4a525e (dark)
    From 10:00 PM to 00:00 AM, gradient is full #4a525e (dark)
*/

// function changeBackgroundColor(){
//     const body = document.querySelector('body');
//     let start = 'rgb(249, 248, 246)'; // start color light
//     let end = 'rgb(74, 82, 94)'; // end color dark
//     let currentHour = (new Date()).getHours();

//     // gradient by default
//     let gradient = `linear-gradient(${start}, ${start})`;

//     if (currentHour === 0 && currentHour < 6){
//         gradient = `linear-gradient(${end}, ${end})`;
//         body.style.color = start;
//     } else if (currentHour > 6 && currentHour < 9){
//         gradient = `linear-gradient(${end}, ${start})`;
//     } else if (currentHour > 9 && currentHour < 18){
//         gradient = `linear-gradient(${start}, ${start})`;
//     } else if (currentHour > 18 && currentHour < 22){
//         gradient = `linear-gradient(${start}, ${end})`;
//         body.style.color = start;
//     }

//     // apply color change to the background
//     body.style.background = gradient;
// }
//  setInterval(changeBackgroundColor, 1000);

let gradients = [
    [{color:"#4a525e", position:0},{color:"#4a525e", position:100}],
    [{color:"#4a525e", position:0},{color:"#f9f8f6", position:75}],
    [{color:"#4a525e", position:0},{color:"#f9f8f6", position:50}],
    [{color:"#4a525e", position:0},{color:"#f9f8f6", position:25}],
    [{color:"#f9f8f6", position:0},{color:"#f9f8f6", position:100}],
    [{color:"#f9f8f6", position:0},{color:"#4a525e", position:75}],
    [{color:"#f9f8f6", position:0},{color:"#4a525e", position:50}],
    [{color:"#f9f8f6", position:0},{color:"#4a525e", position:25}]
];

// Return css
function gradientCSS(data){
    
    console.log(data);
    
    for(let i = 0; i < data.length; i++){
        let css = "linear-gradient(to bottom, ";
        let item = data[i];
        
        for(let j = 0; j < item.length;j++){
            css+= item[j].color + " " + item[j].position + "%";
            
            if (j < item.length-1){
                css += ", ";
            }
        }
        return css + ");"; 
    }

   
}

console.log(gradientCSS(gradients));

let currentHour = (new Date()).getHours();



