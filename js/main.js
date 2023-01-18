

class Lift{
    constructor(actualFloor, floorAmount){
        this.actualFloor=actualFloor;
        this.floorAmount=floorAmount;
        this.clear();
    }

    clear(){
        this.currentFloor= 0;
        this.currentFloorAmount = 0;
    }

    move(number){
        if(number>this.currentFloor){
            this.currentFloorAmount += (number-this.currentFloor); 
        }else if(number<this.currentFloor){
            this.currentFloorAmount += (this.currentFloor - number);  
        }else{
            return;
        }
        this.currentFloor=number;
    }

    updateDisplay(){
        this.actualFloor.innerText = this.currentFloor;
        this.floorAmount.innerText = this.currentFloorAmount;
    }
}


const employee = [
    {id : 4536,
    name : "Juan",
    age : 45,
    calle : "Sarmiento 4456"}
    ,
    {id : 4537,
    name : "Micaela",
    age : 29,
    calle : "Av. Libertad 354"}
    ,
    {id : 4538,
    name : "Franco",
    age : 19,
    calle : "Francia 321"}
];


const employeeform = document.querySelector('#employeeform');
const floor = document.querySelector('#floor');
const floorcount = document.querySelector('#floorcount');
const name = document.querySelector('#name');

const numberButtons = document.querySelectorAll('[data-number]');
const actualFloor = document.querySelector('[data-actual-floor]');
const floorAmount = document.querySelector('[data-floor-amount]');




if (employeeform) {
    employeeform.addEventListener('submit', (e) => {
        e.preventDefault()
        validate()
    });
}

function validate(){
    const employeenum = document.querySelector('#employeenum').value;

    const find = employee.find(element =>{
    return element.id == employeenum;
    });

    if(find!=undefined){
        location.href = "./pages/lift.html";
    }else{
        alert("el empleado no existe");
    }
}  

const lift = new Lift(actualFloor,floorAmount);

numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        lift.move(parseInt(button.innerText));
        lift.updateDisplay();
    })
})


/*
function lift(){
   // let i;
    console.log("entre a lift");
            wantedfloor=selectFloor;
            console.log(wantedfloor);
            if(wantedfloor==0){ // si el piso al que quiere ir es el 0
                // for(i=actualfloor-1;i=0;i--){  PARA LA PROX ENTREGA, MOSTRAR LOS PISOS QUE VA RECORRIENDO
                //     // pasa la variable a html
                //     floor.textContent=i;
                // }
                count+=actualfloor;
            }else{
                if(wantedfloor>actualfloor){
                    count+= (wantedfloor-actualfloor); 
                }else{
                    count+= ((wantedfloor-actualfloor)*-1)
                }
            }
            actualfloor=wantedfloor; // Inicializa nuevamente el piso en el que estoy para no contar pisos de mas. 
            floor.textContent=actualfloor;
            floorcount.textContent=count;
}

function selectFloor(){
    const buttons = document.getElementsByTagName("button");
    const buttonPressed = e => {
        wantedfloor= parseInt(e.target.id);
        console.log("dentro de selectfloor " + wantedfloor);
    }

    for (let button of buttons) {
        button.addEventListener("click", buttonPressed);
    }
    return wantedfloor;
}
*/
