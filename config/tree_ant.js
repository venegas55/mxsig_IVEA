define(function() {
	var data = {
       	themes:{
			T2:{
                label:'Carta 1: 20 000',
                layers:[
                    'c802'
                ],
                desc:'Carta 20 000',
                img:'edafologia.jpg'
            },
            T3:{
                label:'Uso del Suelo',
                layers:[
                    'c15_usosuelo'
                ],
                desc:'Tipo de agricultura y vegetaci&oacute;n',
                img:'usv.jpg'
            },
            T4:{
                label:'Geolog&iacute;a',
                layers:[
                    'c15_fallas',
					'c15_minas',
					'c15_rocas'
                ],
                desc:'Unidades de Roca',
                img:'geologia.jpg'
            },
            T5:{
                label:'Climas',
                layers:[
                    'c15_canicula',
					'c15_evapotraspiracion',
					'c15_humedad',
					'c15_precipitacion',
					'c15_temperatura',
					'c15_unidades'
                ],
                desc:'Unidades de Climas',
                img:'climas.jpg'
            },
            T6:{
                label:'Fen&oacute;menos Geol&oacute;gicos',
                layers:[
                    'c15_inundacion',
					'c15_sismo'
                ],
                desc:'Fen&oacute;menos Geol&oacute;gicos',
                img:'fenomenos.jpg'
            },
            T7:{
                label:'Geodesia',
                layers:[
                    'c15_marcrefegeod'
                ],
                desc:'Geodesia',
                img:'geodesia.jpg'
            },
            T8:{
                label:'Zonas Hidrogeol&oacute;gicas',
                layers:[
                    'c15_puntosmuestr'
                ],
                desc:'Zonas Hidrogeol&oacute;gicas',
                img:'zhidrogeo.jpg'
            },
			 T9:{
                label:'DENUE',
                layers:[
                    'c15_denue'
                ],
                desc:'DENUE QUE ES',
                img:'DENUE.jpg'
            },
			T10:{
                label:'Poblaci??n y Vivienda',
                layers:[
                    'c15_Pob0_14',
					'c15_Pob15_29',
					'c15_Pob30_49',
					'c15_Pob50_59',
					'c15_Pob60_64',
					'c15_Pob65ymas',
                ],
                desc:'Pblacion y vivienda',
                img:'poblacion.gif'
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
    			G11:{
                    label:'L&iacute;mites del Marco Geoestad??stico Nacional',
                    layers:{
                        c100:{
                            label:'L??mite Estatal',
                            synonymous:['limite','estatal'],
                            scale:0,
                            position:50,
                            active:false,
                            texts:{
                                scale:0,
                                active:false
                            }//,
							//metadato:'http://geoweb.inegi.org.mx/WSCBuscador/MuestraMetadatos.jsp?par1=52392&par2=INEGI1'
                        }, 
						c101:{
                            label:'L??mite Municipal',
                            synonymous:['municipio','municipales','municipal'],
                            scale:866685,
                            position:51,
                            active:false,
                            texts:{
                                scale:0,
                                active:false
                            }//,
							//metadato:'http://geoweb.inegi.org.mx/WSCBuscador/MuestraMetadatos.jsp?par1=52392&par2=INEGI1'
                        },
                        c102:{ 
                            label:'Localidades',
                            synonymous:['localidad','localidades','LOCALIDADES'],
                            scale:866685,
                            position:52,
                            active:false,
							texts:{
                                scale:0,
                                active:false
                            }//,
							//metadato:'http://geoweb.inegi.org.mx/WSCBuscador/MuestraMetadatos.jsp?par1=52392&par2=INEGI1'
                        }/*,
                      	/*c10009:{ 
                            label:'AGEB urbanas',
                            synonymous:['urbanas'],
                            scale:0,
                            position:53,
                            active:false,
							texts:{
                                scale:0,
                                active:false
                            }//,
							
							//metadato:'http://geoweb.inegi.org.mx/WSCBuscador/MuestraMetadatos.jsp?par1=52392&par2=INEGI1'
                        }*/
					}
				},

/*				G12:{
                    label:'carta20k',
                    layers:{
						c802:{
                            label:'L&iacute;mites de cartas escala 1:20 000',
                            synonymous:['limite','escala','carta'],
                            scale:0,
                            position:67,
                            active:false,
                            texts:{
                                scale:0,
                                active:false
                            }
						},
                        c803:{
                            label:'L&iacute;mites de cartas escala 1:50 000',
                            synonymous:['limite','carta','escala'],
                            scale:0,
                            position:312,
                            active:false,
                            texts:{
                                scale:0,
                                active:false
                            }
                        }
					}
				},
*/
/*
                G12:{
                    label:'Marco cartogr&aacute;fico',
                    layers:{
                        c801:{
                            label:'L&iacute;mites de cartas escala 1:10 000',
                            synonymous:['limite','escala','carta'],
                            scale:433342,
                            position:310,
                            active:false,
                            texts:{
                                scale:433342,
                                active:false
                            }
                        },
                        c802:{
                            label:'L&iacute;mites de cartas escala 1:20 000',
                            synonymous:['limite','escala','carta'],
                            scale:0,
                            position:311,
                            active:false,
                            texts:{
                                scale:0,
                                active:false
                            }
                        },
                        c803:{
                            label:'L&iacute;mites de cartas escala 1:50 000',
                            synonymous:['limite','carta','escala'],
                            scale:0,
                            position:312,
                            active:false,
                            texts:{
                                scale:0,
                                active:false
                            }
                        },
                        c804:{
                            label:'L&iacute;mites de cartas escala 1:250 000',
                            synonymous:['limite','carta','escala'],
                            scale:0,
                            position:313,
                            active:false,
                            texts:{
                                scale:0,
                                active:false
                            }
                        }
                    }
                },
*/
				G26:{
                    label:'Servicios',
                    layers:{
						c15_servicios:{
                            label:'Servicios',
                            synonymous:['Servicios'],
                            scale:0,
                            position:777,
                            active:false
						}
					}	
				},
/*
				G15:{
                    label:'Uso del Suelo y Vegetaci??n ',
                    layers:{
						c555:{
                            label:'Uso del suelo y vegetaci??n',
                            synonymous:['Uso del suelo y vegetaci??n'],
                            scale:0,
                            position:67,
                            active:false
						}						
					}
				},
*/
            }
        }
    };
	if(typeof(treeConfig)!='undefined'){
        	data = $.extend(data, treeConfig);
    	}
    	return data;
});
