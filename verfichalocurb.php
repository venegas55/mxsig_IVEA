<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<link type="text/css" href="css/mdm5/jquery-ui-1.8rc3.custom.css" rel="stylesheet" />
<!--<link type="text/css" href="css/mdm5/map.css" rel="stylesheet" />-->
<script type="text/javascript" src="css/mdm5/framework.js" charset="UTF-8"></script>
<style type="text/css">
.panel{
   height: 370px;
   overflow-y: auto;
}
.ajuste{
   width: 600px;
}
#tabs-1{
	width:600px;
}
#tabs-2{
	width:600px;
}
#tabs-3{
	width:600px;
}
#tabs-4{
	width:600px;
}
#tabs-5{
	width:600px;
}
#tabs-6{
	width:600px;
}
#tabs-7{
	width:600px;
}
#tabs-8{
	width:600px;
}
#tabs-9{
	width:600px;
}
#tabs-10{
	width:600px;
}
#tabs-11{
	width:600px;
}
#tabs-12{
	width:600px;
}
#tabs-13{
	width:600px;
}
#tabs-14{
	width:600px;
}
table{
 	width: 600px;
	border: 15px outset #808080;
}
tr{
	text-align: left;
  }
tr:nth-child(odd){
	  background-color: WHITE;
  }
tr:nth-child(even){
	background-color: #CCCCCC;
}

</style>
<script>
  $(function() {
    $( "#tabs" ).tabs();
	
  });
  </script>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Ficha</title>
</head>
<body>

<?php
$dbconn = pg_connect("host=127.0.0.1 dbname=mdm6data user=seig password=seig2014 port=5432")or die('Could not connect: ' . pg_last_error());
$geografico = $_GET['elemento'];
if ($geografico){
?>

<div id="tabs" style="font-size:10px">
  <ul>
	<li class="modificadoMedio"><a href="#tabs-1">Población</a></li>
	<li class="modificadoMedio"><a href="#tabs-2">Desarrollo Social</a></li>
	<li class="modificadoMedio"><a href="#tabs-3">Lengua Indígena</a></li>
  </ul>
  <div id="tabs-1" class='panel'>
	<?php
	$query = "SELECT cvegeo as \"Clave  Localidad\", nombre as \"Nombre\",pob1 as\"Población total\",pob2 as\"Población de 0 a 2 años\",pob3 as\"Población de 0 a 4 años\",pob4 as\"Población de 3 a 5 años\",pob5 as\"Población de 6 a 11 años\",pob6 as\"Población de 8 a 14 años\",pob7 as\"Población de 12 a 14 años\",pob8 as\"Población de 0 a 14 años\",
	pob9 as\"Población de 15 a 17 años\",pob10 as\"Población de 15 a 24 años\",pob11 as\"Población de 15 a 29 años\",pob12 as\"Población de 15 a 64 años\",pob13 as\"Población de 18 a 24 años\",pob14 as\"Población de 30 a 49 años\",pob15 as\"Población de 50 a 59 años\",pob16 as\"Población de 60 a 64 años\",
	pob17 as\"Población de 3 años y más\",pob18 as\"Población de 5 años y más\",pob19 as\"Población de 12 años y más\",pob20 as\"Población de 15 años y más\",pob21 as\"Población de 18 años y más\",pob22 as\"Población de 25 años y más\",pob23 as\"Población de 60 años y más\",pob24 as\"Población de 65 años y más\",
	pob25 as\"Población de 70 años y más\",pob26_r as\"Relación hombres-mujeres\",pob27_r as\"Razón de dependencia total\",pob28_r as\"Razón de dependencia infantil\",pob29_r as\"Razón de dependencia de vejez\",pob30_r as\"Edad mediana\",pob31 as\"Población femenina\",pob32 as\"Población femenina de 0 a 2 años\",
	pob33 as\"Población femenina de 0 a 4 años\",pob34 as\"Población femenina de 3 a 5 años\",pob35 as\"Población femenina de 6 a 11 años\",pob36 as\"Población femenina de 8 a 14 años\",pob37 as\"Población femenina de 12 a 14 años\",pob38 as\"Población femenina de 0 a 14 años\",pob39 as\"Población femenina de 15 a 17 años\",
	pob40 as\"Población femenina de 15 a 24 años\",pob41 as\"Población femenina de 15 a 29 años\",pob42 as\"Población femenina de 15 a 49 años\",pob43 as\"Población femenina de 15 a 64 años\",pob44 as\"Población femenina de 18 a 24 años\",pob45 as\"Población femenina de 30 a 49 años\",pob46 as\"Población femenina de 50 a 59 años\",
	pob47 as\"Población femenina de 60 a 64 años\",pob48 as\"Población femenina de 3 años y más\",pob49 as\"Población femenina de 5 años y más\",pob50 as\"Población femenina de 12 años y más\",pob51 as\"Población femenina de 15 años y más\",pob52 as\"Población femenina de 18 años y más\",pob53 as\"Población femenina de 25 años y más\",
	pob54 as\"Población femenina de 60 años y más\",pob55 as\"Población femenina de 65 años y más\",pob56 as\"Población femenina de 70 años y más\",pob57 as\"Población masculina\",pob58 as\"Población masculina de 0 a 2 años\",pob59 as\"Población masculina de 0 a 4 años\",pob60 as\"Población masculina de 3 a 5 años\",
	pob61 as\"Población masculina de 6 a 11 años\",pob62 as\"Población masculina de 8 a 14 años\",pob63 as\"Población masculina de 12 a 14 años\",pob64 as\"Población masculina de 0 a 14 años\",pob65 as\"Población masculina de 15 a 17 años\",pob66 as\"Población masculina de 15 a 24 años\",pob67 as\"Población masculina de 15 a 29 años\",
	pob68 as\"Población masculina de 15 a 64 años\",pob69 as\"Población masculina de 18 a 24 años\",pob70 as\"Población masculina de 30 a 49 años\",pob71 as\"Población masculina de 50 a 59 años\",pob72 as\"Población masculina de 60 a 64 años\",pob73 as\"Población masculina de 3 años y más\",pob74 as\"Población masculina de 5 años y más\",
	pob75 as\"Población masculina de 12 años y más\", pob76 as\"Población masculina de 15 años y más\", pob77 as\"Población masculina de 18 años y más\", pob78 as\"Población masculina de 25 años y más\", pob79 as\"Población masculina de 60 años y más\", pob80 as\"Población masculina de 65 años y más\", 
	pob81 as\"Población masculina de 70 años y más\" FROM datosestadisticos.locurb_poblacion where cvegeo = '$geografico'";
	//echo $query;
	$result = pg_query($query) or die('Query failed: ' . pg_last_error());
	$i = pg_num_fields($result);
	if ($row = pg_fetch_array($result)){
	echo "<br><center>";
	echo "<table border=1>";
	for($j=0; $j<$i; $j++){
		echo "<tr>";
		$fieldname = pg_field_name($result, $j);
		if ($fieldname != 'gid'){
			echo "<th><FONT SIZE='2'>".ucfirst($fieldname)."</td></FONT>"; 		
			echo "<td align='left'><FONT SIZE='2'>$row[$j]</td></FONT>";	
			echo "</tr>";
		}	
	}
	echo "</table></center>";
	}
    ?>
  </div>
  <div id="tabs-2" class='panel'>
	<?php
	$query = "SELECT cvegeo as\"Clave Localidad\", grado_marg as\"Grado de Marginación CONAPO\", gra_re_soc \"Grado de Rezago Social CONEVAL\" FROM datosestadisticos.locurb_desarrollo_social where cvegeo = '$geografico'";
	//echo $query;
	$result = pg_query($query) or die('Query failed: ' . pg_last_error());
	$i = pg_num_fields($result);
	if ($row = pg_fetch_array($result)){
	echo "<br><center>";
	echo "<table border=1>";
	for($j=0; $j<$i; $j++){
		echo "<tr>";
		$fieldname = pg_field_name($result, $j);
		if ($fieldname != 'gid'){
			echo "<th><FONT SIZE='2'>".ucfirst($fieldname)."</td></FONT>"; 		
			echo "<td align='left'><FONT SIZE='2'>$row[$j]</td></FONT>";	
			echo "</tr>";
		}	
	}
	echo "</table></center>";
	}
    ?>
  </div>
  <div id="tabs-3" class='panel'>
	<?php
	$query = "SELECT cvegeo as\"Clave Localidad\",indi1 as \"Pob. >= 3 que habla alguna lengua indígena (LI)\",indi2 as \"Pob. femenina >= 3 que habla alguna LI\",indi3 as \"Pob. masculina >= 3 que habla alguna LI\",indi4 as \"Pob. >= 3 que habla alguna LI y no habla Esp.\",indi5 as \"Pob. femenina >= 3 que habla alguna LI y no habla Esp.\",
indi6 as \"Pob. masculina >= 3 que habla alguna LI y no habla Esp.\",indi7 as \"Pob. >= 3 que habla alguna LI y habla Esp.\",indi8 as \"Pob. femenina >= 3 que habla alguna LI y habla Esp.\",indi9 as \"Pob. masculina >= 3 que habla alguna LI y habla Esp.\",indi10 as \"Pob. >= 5 que habla alguna LI\",
indi11 as \"Pob. femenina >= 5 que habla alguna LI\",indi12 as \"Pob. masculina >= 5 que habla alguna LI\", indi13 as \"Pob. >= 5 que habla alguna LI y no habla Esp.\",indi14 as \"Pob. femenina >= 5 que habla alguna LI y no habla Esp.\",indi15 as \"Pob. masculina >= 5 que habla alguna LI y no habla Esp.\",
indi16 as \"Pob. >= 5 que habla alguna LI y habla Esp.\",indi17 as \"Pob. femenina >= 5 que habla alguna LI y habla Esp.\",indi18 as \"Pob. masculina >= 5 que habla alguna LI y habla Esp.\",indi19 as \"Hogares censales indígenas\",indi20 as \"Población en hogares censales indígenas\" FROM datosestadisticos.locurb_lengua_indigena where cvegeo = '$geografico'";
	//echo $query;
	$result = pg_query($query) or die('Query failed: ' . pg_last_error());
	$i = pg_num_fields($result);
	if ($row = pg_fetch_array($result)){
	echo "<br><center>";
	echo "<table border=1>";
	for($j=0; $j<$i; $j++){
		echo "<tr>";
		$fieldname = pg_field_name($result, $j);
		if ($fieldname != 'gid'){
			echo "<th><FONT SIZE='2'>".ucfirst($fieldname)."</td></FONT>"; 		
			echo "<td align='left'><FONT SIZE='2'>$row[$j]</td></FONT>";	
			echo "</tr>";
		}	
	}
	echo "</table></center>";
	}
    ?>
  </div>
</div>
<?php
}
else{
	echo "<br><center>No se encontró información</center>";
	echo $geografico;
}
?>
</body>
</html>
