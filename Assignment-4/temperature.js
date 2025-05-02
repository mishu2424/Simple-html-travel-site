document.querySelector("#submitBtn").addEventListener("click", (e) => {
  //preventing the default behavior of form event which refreshes UI. 
  e.preventDefault();

  // reset
  document.querySelector("#displayTemp").innerText = "";

  // getting the values  
  const tempVal = document.querySelector("#temperatureVal").value;
  const tempConversion = document.querySelector("#temperature").value;

  //converting to number   
  const convertedToNumber = parseFloat(tempVal);

  //if not a number   
  if (isNaN(convertedToNumber)) {
    // removing classname
    document.querySelector("#tempError").classList.remove("hidden");
    // returning if an error found
    return;
  }

  // if user doesn't choose any option   
  if (tempConversion === "") {
    // removing classname
    document.querySelector("#tempConversionError").classList.remove("hidden");
    // returning if an error found
    return;
  }

  // reset
  document.querySelector("#tempError").classList.add("hidden");
  document.querySelector("#tempConversionError").classList.add("hidden");

  // if it is a number type and the user chose an option only in that case, it will run this code below-
  // Conversion calculation
  // celsius to fahrenheit
  if (tempConversion === "celsius") {
    // tofixed(2) -->2 numbers after (.) -->makes it a string
    const fahrenheit = ((9 / 5) * convertedToNumber + 32).toFixed(2);
    console.log(fahrenheit);
    document.querySelector(
      "#displayTemp"
    ).innerText = `${convertedToNumber} degree celsius is ${fahrenheit} degree fahrenheit`;
  }
  // fahrenheit to celsius
  if (tempConversion === "fahrenheit") {
    // tofixed(2) -->2 numbers after (.) -->makes it a string
    const celsius = ((5 / 9) * (convertedToNumber - 32)).toFixed(2);
    console.log(celsius);
    document.querySelector(
      "#displayTemp"
    ).innerText = `${convertedToNumber} degree fahrenheit is ${celsius} degree celsius`;
  }

//   console.log(convertedToNumber, tempConversion);
});
