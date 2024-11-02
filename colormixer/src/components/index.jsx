import { useEffect, useState } from "react"


export default function Randomcolor (){
const [typeOfColor, setTypeOfColor] = useState('hex');
const [color, setColor] = useState('#000000');



function randomColorUtility (length){
return Math.floor(Math.random() * length);
}


function handleCreateRandomHexColor(){
const hex = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexColor = '#';
for (let i = 0 ; i<6 ; i++){
hexColor += hex[randomColorUtility(hex.length)]
}
setColor(hexColor);
}

function handleCreateRandomRgbColor (){
const r = randomColorUtility(256);
const g = randomColorUtility(256);
const b = randomColorUtility(256);
setColor(`rgb(${r},${g},${b})`)
} 

useEffect (()=>  {
if (typeOfColor=== 'rgb') handleCreateRandomRgbColor();
else handleCreateRandomHexColor();
}, [typeOfColor])
    return (
        
<div style = {{
height : '100vh',
width : '100vw',
background: color,
}}>

<button onClick={()=> setTypeOfColor('hex')}>GENERATE HEX COLOR</button>
<button onClick={()=> setTypeOfColor('rgb')}>GENERATE RGB COLOR</button>
<button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>GENERATE RANDOM COLOR</button>


<div style={{
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#fff',
    fontSize: '60px',
    marginTop: '50px',
    flexDirection:'column',
    gap:'20px'
}}>
<h5>{typeOfColor === 'rgb'? 'RGB color' : 'HEX color'}</h5>

<h3>{color}</h3>

</div>


</div>

    );
}
