function initMap(){
    const coord = {lat:-32.4771915 ,lng: -58.2373439};
    const map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    const marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}