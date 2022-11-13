Overpass Query

For Schools Located In Kathmandu, Nepal

[out:json][timeout:25];
area(id:3604583125)
 ->.searchArea;
(
 node["amenity"="school"]
 (area.searchArea);
 way["amenity"="school"]
 (area.searchArea);
 relation["amenity"="school"]
 (area.searchArea);
);
out body; >; out skel qt;


Packages To Install:-

i)npm install react react-dom leaflet

ii)npm install react-leaflet

iii)npm install -D @types/leaflet


