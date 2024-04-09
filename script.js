// http://api.weatherapi.com/v1/current.json?key=9ffa3f50759144bba3573447240904&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandtimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form')

form.addEventListener('submit' , searchForLocation)


let target = 'Nagpur'
const fetchResults = async (targetLocation)=>{
        let url =`http://api.weatherapi.com/v1/current.json?key=9ffa3f50759144bba3573447240904&q=${targetLocation}&aqi=no`

        const res = await fetch(url)

        const data = await res.json() 

        console.log(data)

        let locationName = data.location.name

        let time = data.location.localtime

        let temp = data.current.temp_c

        let condition = data.current.condition.text

        updateDetails(temp , locationName , time , condition )
}


function updateDetails(temp , locationName , time , condition){
    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateandtimeField.innerText = time
    conditionField.innerText = condition

    
}


function searchForLocation(e){
    e.preventDefault()
    target = searchField.value

    fetchResults(target)
}

fetchResults(target)