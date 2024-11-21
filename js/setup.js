var map = L.map('map', {
  center: [40.23889222664199, -74.96665330529639],
  zoom: 16,
});

var Satellite = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
