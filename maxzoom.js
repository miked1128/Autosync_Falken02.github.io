var zoomFactor = 1.0;
var maxZoom = ((100*largeWidth)/normalWidth)/100;
var minTempZoom = (zoomFactor*largeWidth)/normalWidth;

if (minTempZoom >= 1)
{
maxZoom = maxZoom*zoomFactor;
}
else
{
zoomFactor = normalWidth/largeWidth;
maxZoom = maxZoom*zoomFactor;
}
