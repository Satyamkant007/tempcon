document.getElementById("convertButton").addEventListener("click", function() {
    let inputTemperature = document.getElementById("inputTemperature").value;
    let unit = document.getElementById("unit").value;
    let outputTemperature = document.getElementById("outputTemperature");
    
    // Validate if the input is a number
    if (isNaN(inputTemperature) || inputTemperature === "") {
        outputTemperature.textContent = "Please enter a valid number!";
        return;
    }

    // Convert based on the selected unit
    let result = "";
    inputTemperature = parseFloat(inputTemperature);

    if (unit === "celsius") {
        result = ${((inputTemperature * 9/5) + 32).toFixed(2)} °F / ${(inputTemperature + 273.15).toFixed(2)} K;
    } else if (unit === "fahrenheit") {
        result = ${((inputTemperature - 32) * 5/9).toFixed(2)} °C / ${(((inputTemperature - 32) * 5/9) + 273.15).toFixed(2)} K;
    } else if (unit === "kelvin") {
        result = ${(inputTemperature - 273.15).toFixed(2)} °C / ${(((inputTemperature - 273.15) * 9/5) + 32).toFixed(2)} °F;
    }

    outputTemperature.textContent = result;
});