/**
 * Parte Individual labo 8

        Añada un campo mas a la tabla.
        Este campo contendrá un input de texto dentro de él.
        Añada la siguiente restricción: "Para poder eliminar cualquier registro, el usuario debe ingresar, en el campo de texto, el carnet de la fila que desee eliminar"


 */

/**
 * funcin para poder eliminar cualquier registro, el usuario debe ingresar, en el campo de texto, el carnet de la fila que desee eliminar
 */

submit_btn.addEventListener("click",()=>{
    let carnet=carnet_field.value
    let schedule= schedule_list.options [schedule_list.selectedIndex].text
    let late= parseLateBool (late_switch.checked)
    console.log(late);


    let result_obj ={
        "carnet": carnet,
        "schedule": schedule,
        "late": late
    }
    
    if(carnet_regex.test(carnet)){
        addStudent(result_obj)
        printArray();
    }
    else{
        alert ("Contenido incorrecto, favor ingrese de nuevo el carné")
    }
    
    })
    
    carnet_field.addEventListener("keyup", (event)=>{
       if(event.keyCode==13){
           submit_btn.click()
       }
       
    })


// parte guiada del labo

let carnet_field=document.querySelector("#carnet_field")
let schedule_list =document.querySelector("#schedule_field")
let late_switch = document.querySelector("#late_switch")

let student_List=[];
let serial=0

let printArray= ()=>{
    tbody.innerHTML=""
    student_List.forEach((objeto, index)=>{
        let new_row= document.createElement("tr")

        new_row.classList.add("table-active")

        new_row.innerHTML = `
            <td> ${objeto.carnet} </td>
            <td> ${objeto.horario} </td>
            <td> ${objeto.datetime_string} </td>
            <td> ${objeto.tarde} </td>
        `
        let new_cell=document.createElement("td")
        let new_btn=document.createElement("button")
    

        new_btn.className="btn btn-danger"
        new_btn.innerText="eliminar"
        new_btn.value= index

        new_btn.addEventListener("click", (event) =>{
            let id_actual= event.target.value;
            
            student_List.forEach((objec,pos)=>{
                if(id_actual==objec.id){
                    student_List.splice(pos,1)
                    printArray();
                }
            })
        })

        new_cell.appendChild(new_btn)
        new_row.appendChild(new_cell)
        tbody.appendChild(new_row);

    })

}


let submit_btn = document.querySelector("#submit_btn")


let tbody = document.querySelector("#table_body")

let carnet_regex= new RegExp("^[0-9]{8}$")


let addStudent = (obj)=> {
    let datetime= new Date();
    let datetime_string= datetime.toLocaleString()
    console.log(obj)
    console.log(serial)
    student_List.push({

        "id": serial,
        "carnet": obj.carnet,
        "horario": obj.schedule,
        "tarde": obj.late,
        "ingreso":datetime_string

    })
    printArray()
    serial++
}

let parseLateBool= (value)=>{
if(value){
    return "si"
}

return "no"
}

