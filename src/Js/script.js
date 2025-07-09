function openContact() {
  alert("Contact Form Coming Soon!");
}

function viewServices() {
  alert("Services Coming Soon!");
}

// live location
 function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }

    function showPosition(position) {
      alert("Your current location is:\nLatitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
      // Optional: Use reverse geocoding API to set actual city in the location dropdown
    }
