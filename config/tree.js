define(function() {
	var data = {
       		themes:{
			T2:{
				label:'Centros de informaci&oacute;n INEGI',
                		layers:['c431'],
                		desc:'Centros de informaci&oacute;n INEGI',
                		img:'mexico.jpg'
            		}
        	},
        	baseLayers:{
			B1:{
                		type:'Wms',
                		label:'Topogr&aacute;fico sin sombreado- INEGI',
                		img:'mapa_sin_sombreado.jpg',		             
                		url:['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
				layer:'MapaBaseTopograficov61_sinsombreado',
                		rights:'Derechos Reservados &copy; INEGI',
                		tiled:true,
				legendlayer:['c100','c101','c102','c102-r','c102m','c103','c109','c110','c111','c112','c200','c201','c202','c203','c206','c300','c301','c302','c310','c311','c762','c793','c795'],
                		desc:'REPRESENTACION DE RECURSOS NATURALES Y CULTURALES DEL TERRITORIO NACIONAL A ESCALA 1: 250 000, BASADO EN IMAGENES DE SATELITE DEL  2002 Y TRABAJO DE CAMPO REALIZADO EN 2003',
                		clasification:'VECTORIAL'
            		},
			B2:{
               			type:'Wms',
                		label:'Topogr&aacute;fico con sombreado- INEGI',
                		img:'mapa_con_sombreado.jpg',		             
                		url:['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
				layer:'MapaBaseTopograficov61_consombreado',
                		rights:'Derechos Reservados &copy; INEGI',
                		tiled:true,
				legendlayer:['c100','c101','c102','c102-r','c102m','c103','c109','c110','c111','c112','c200','c201','c202','c203','c206','c300','c301','c302','c310','c311','c762','c793','c795'],
                		desc:'REPRESENTACION DE RECURSOS NATURALES Y CULTURALES DEL TERRITORIO NACIONAL A ESCALA 1: 250 000, BASADO EN IMAGENES DE SATELITE DEL  2002 Y TRABAJO DE CAMPO REALIZADO EN 2003',
                		clasification:'VECTORIAL'
            		},
            		B3:{
                		type:'Wms',
                		label:'Hipsogr&aacute;fico - INEGI',
                		img:'baseHipsografico.jpg',		             
                		url:['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
                		layer:'MapaBaseHipsografico',
				rights:'&copy; INEGI 2013',
                		tiled:true,
                		legendlayer:['img_altimetria.png'],
                		desc:'IMAGEN DE RELIEVE QUE MUESTRA UNA COMBINACION DE ELEVACION A TRAVES DE COLORES HIPSOGRAFICOS, GENERADA POR PROCESAMIENTO DEL CONTINUO DE ELEVACIONES MEXICANOS DE 3.0 DE 15 METROS.',
                		clasification:'RASTER'
            		},
            		B4:{
                		type:'Wms',
                		label:'Ortofotos - INEGI',
                		img:'baseOrtos.jpg',		             
                		url:['http://gaiamapas1.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas3.inegi.org.mx/mdmCache/service/wms?','http://gaiamapas2.inegi.org.mx/mdmCache/service/wms?'],
                		layer:'MapaBaseOrtofoto',
				rights:'&copy; INEGI 2013',
                		tiled:true,
                		desc:'CONJUNTO DE IMAGENES AEREAS ORTORECTIFICADAS A DIVERSAS ESCALAS Y RESOLUCIONES, PROVENIENTES DEL ACERVO DE ORTOFOTOS DE INEGI Y QUE CORRESPONDEN A TOMAS REALIZADAS EN EL LAPSO 2005-2012.',
                		clasification:'RASTER'
                	},			
            		B5:{
                		type:'Osm',
                		label:'Open Street Map',
                		img:'Osm.jpg',
                		rights:'&copy; OpenStreetMap contributors',
                		clasification:'VECTORIAL'
            		},
            		B6:{
                		type:'Google',
                		label:'Google Sat&eacute;lite',
                		img:'Google.jpg',
                		layer:'google.maps.MapTypeId.SATELLITE',
                		rights:'&copy; Google',
                		clasification:'RASTER'
            		}, 
			B7:{
                		type:'Esri',
                		label:'Esri map',
                		img:'Esri.jpg',
                		url:'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/${z}/${y}/${x}',
                		rights:'&copy; ESRI',
				clasification:'VECTORIAL'
            		},
        	},
		layers:{
            		groups:{
						G1:{
                       		label:'L&iacute;mites del Marco Geoestad&iacute;stico',
                                	layers:{
                                        	c100:{
                                                	label:'Estatales',
                                                	synonymous:['estado','estatales'],
                                                	scale:1,
                                                	position:1,
                                                	active:true,
                                                	texts:{
                                                        	scale:1,
                                                        	active:false
                                                	}
                                        	},
                                        	c101:{
                                                	label:'Municipales',
                                                	synonymous:['municipio','municipales','municipal'],
                                                	scale:5,
                                                	position:2,
                                                	active:false,
                                                	texts:{
                                                        	scale:1,
                                                        	active:false
                                                	}
                                        	},
											c104:{
                                                	label:'AGEB Urbano',
                                                	synonymous:['AGEB','ageb','urbano'],
                                                	scale:5,
                                                	position:3,
                                                	active:false,
                                                	texts:{
                                                        	scale:1,
                                                        	active:false
                                                	}
                                        	}
                                	}
                        },
						G2:{
                       		label:'Localidades  del Marco Geoestad&iacute;stico',
                                	layers:{
                                        	c102:{
                                                	label:'&Aacute;reas urbanas',
                                                	synonymous:['urbana'],
                                                	scale:5,
                                                	position:4,
                                                	active:false,
                                                	texts:{
                                                        	scale:1,
                                                        	active:false
                                                	}
                                        	},
											c102m:{
                                                	label:'Manzanas',
                                                	synonymous:['manzana','MANZANA'],
                                                	scale:3,
                                                	position:5,
                                                	active:false,
                                        	},
											c112:{
                                                	label:'Calles',
                                                	synonymous:['calle'],
                                                	scale:3,
                                                	position:6,
                                                	active:false,
													texts:{
                                                        	scale:1,
                                                        	active:false
                                                	}
                                        	},
											c108:{
                                                	label:'Servicios Puntuales',
                                                	synonymous:['punto'],
                                                	scale:5,
                                                	position:7,
                                                	active:false,
													texts:{
                                                        	scale:1,
                                                        	active:false
                                                	}
                                        	},
											c109:{
                                                	label:'Servicios Lineales',
                                                	synonymous:['linea'],
                                                	scale:5,
                                                	position:8,
                                                	active:false,
													texts:{
                                                        	scale:1,
                                                        	active:false
                                                	}
                                        	},
											c110:{
                                                	label:'Servicios de &Aacute;rea',
                                                	synonymous:['area'],
                                                	scale:5,
                                                	position:9,
                                                	active:false,
                                        	},
											c103:{
                                                	label:'Localidades rurales',
                                                	synonymous:['rural','Rurales'],
                                                	scale:5,
                                                	position:10,
                                                	active:false,
                                                	texts:{
                                                        	scale:1,
                                                        	active:false
                                                	}
                                        	}
                                	}
                        },
						G3:{
                       		label:'V&iacute;as de comunicaci&oacute;n',
                                	layers:{
                                        	c121:{
                                                	label:'Red carretera',
                                                	synonymous:['centros'],
                                                	scale:5,
                                                	position:11,
                                                	active:false,
													texts:{
                                                        	scale:1,
                                                        	active:false
                                                	}
                                        	},
											c122:{
                                                	label:'V&iacute;a f&eacute;rrea',
                                                	synonymous:['via','ferrea'],
                                                	scale:5,
                                                	position:12,
                                                	active:false,
													texts:{
                                                        	scale:1,
                                                        	active:false
                                                	}
                                        	},
											c123:{
                                                	label:'Brechas y Veredas',
                                                	synonymous:['brecha','vereda'],
                                                	scale:5,
                                                	position:13,
                                                	active:false,
													texts:{
                                                        	scale:1,
                                                        	active:false
                                                	}
                                        	}
                                	}
                        },
						G4:{
                       		label:'Red Hidrogr&aacute;fica escala 1:50 000',
                                	layers:{
                                        	c124:{
                                                	label:'R&iacute;os y arroyos',
                                                	synonymous:['rio','arroyo'],
                                                	scale:5,
                                                	position:14,
                                                	active:false,
                                        	},
											c125:{
                                                	label:'Cuerpos de agua',
                                                	synonymous:['cuerpo','agua'],
                                                	scale:5,
                                                	position:15,
                                                	active:false,
                                        	}
                                	}
                        }
            		}
        }
    };
	var getData = function(source,params,callback,error,before,complete){
			var obj = this;
            //jQuery.ajaxSettings.traditional = true;
            var dataObject = {
                   data: params,
                   success:function(json,estatus){callback(json,estatus)},
                   beforeSend: function(solicitudAJAX) {
                        if ($.isFunction(before)){
                            before(params);
                        }
                   },
                   error: function(solicitudAJAX,errorDescripcion,errorExcepcion) {
                        if ($.isFunction(error)){
                            error(errorDescripcion,errorExcepcion);
                        }
                   },
                   complete: function(solicitudAJAX,estatus) {
                        if ($.isFunction(complete)){
                            complete(solicitudAJAX,estatus);
                        }
                   }
            };
            for (var x in source){ //anexo de la conifuracion del origen de datos
                if ( !(/field|name|id/.test(x)))dataObject[x] = source[x];
            }
            $.ajax(dataObject);
    };
    var getLiveLayers = function(dataSource,proyName,callback){
        var params = {proyName:proyName,where:''};
        getData(dataSource,params, 
            function(tdata){ //success
                var list = tdata.list;
                if (!(list === undefined) && list.length > 0){
                    var buscables = [];
                    var identificables = [];
                    var list = tdata.list;
                    for (var x in list){
                        if (list[x].tipo.indexOf('I') > -1){
                            identificables.push(list[x]);
                        }
                        if (list[x].tipo.indexOf('B') > -1){
                            buscables.push(list[x]);
                        }
                    }
                    data.buscables =buscables;
                    data.identificables =identificables;
                    if($.isFunction(callback))
                        callback({buscables:buscables, identificables:identificables});
                }
            },
            function(){},
            function(){
                if($.isFunction(callback))
                   callback(null);
            }
        );
    };
	if(typeof(treeConfig)!='undefined'){
        	data = $.extend(data, treeConfig);
    	}
    	return data;
});
