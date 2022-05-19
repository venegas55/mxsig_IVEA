define(['OpenLayers','timer','modal','features'],function(OL,Timer,Modal,Features) {
    var Map;
    // create a semi-random grid of features to be clustered
            var dx = 3;
            var dy = 3;
            var px, py;
            var features = [];
            for(var x=-45; x<=45; x+=dx) {
                for(var y=-22.5; y<=22.5; y+=dy) {
                    px = x + (2 * dx * (Math.random() - 0.5));
                    py = y + (2 * dy * (Math.random() - 0.5));
                    features.push(new OpenLayers.Feature.Vector(
                        new OpenLayers.Geometry.Point(px, py), {x: px, y: py}
                    ));
                }
            }

            var map, strategy, clusters;
            function init() {
                map = new OpenLayers.Map('map');
                var base = new OpenLayers.Layer.WMS("OpenLayers WMS", 
                     "http://vmap0.tiles.osgeo.org/wms/vmap0",
                    {layers: 'basic'}
                );

                var style = new OpenLayers.Style({
                    pointRadius: "${radius}",
                    fillColor: "#ffcc66",
                    fillOpacity: 0.8,
                    strokeColor: "#cc6633",
                    strokeWidth: "${width}",
                    strokeOpacity: 0.8
                }, {
                    context: {
                        width: function(feature) {
                            return (feature.cluster) ? 2 : 1;
                        },
                        radius: function(feature) {
                            var pix = 2;
                            if(feature.cluster) {
                                pix = Math.min(feature.attributes.count, 7) + 2;
                            }
                            return pix;
                        }
                    }
                });
                
                strategy = new OpenLayers.Strategy.Cluster();

                clusters = new OpenLayers.Layer.Vector("Clusters", {
                    strategies: [strategy],
                    styleMap: new OpenLayers.StyleMap({
                        "default": style,
                        "select": {
                            fillColor: "#8aeeef",
                            strokeColor: "#32a8a9"
                        }
                    })
                });
                
                var select = new OpenLayers.Control.SelectFeature(
                    clusters, {hover: true}
                );
                map.addControl(select);
                select.activate();
                clusters.events.on({"featureselected": display});

                map.addLayers([base, clusters]);
                map.setCenter(new OpenLayers.LonLat(0, 0), 2);
                
                reset();
                document.getElementById("reset").onclick = reset;

            }
            
            function reset() {
                var distance = parseInt(document.getElementById("distance").value);
                var threshold = parseInt(document.getElementById("threshold").value);
                strategy.distance = distance || strategy.distance;
                strategy.threshold = threshold || strategy.threshold;
                document.getElementById("distance").value = strategy.distance;
                document.getElementById("threshold").value = strategy.threshold || "null";
                clusters.removeFeatures(clusters.features);
                clusters.addFeatures(features);
            }
            
            function display(event) {
                var f = event.feature;
                var el = document.getElementById("output");
                if(f.cluster) {
                    el.innerHTML = "cluster of " + f.attributes.count;
                } else {
                    el.innerHTML = "unclustered " + f.geometry;
                }
            }
            
    return {
        
    };
});