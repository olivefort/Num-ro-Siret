<?php 
include 'vendor/autoload.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" type="text/css" href="style.css"/>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
   <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>
        <title>Entreprise</title>
    </head>
    <body>
        <section>
            <form id="form" class="form">
                <input type="text" id="sic" class="num" name="texte" placeholder="SIRET"/>
                <input type="submit" value="GO" id="valider" class="send"/>
            </form>
            <div id="result">
                <p id="ent" class="ent"></p>
                <p id="add" class="add"></p>
                <p id="ddt" class="ddt"></p>
            </div>
            <div id="mapid"></div>
        </section>
        <section>
            <p class="ent">Exemple de numéro de SIRET</p>
            <ul>
                <li>FNAC Paris : 35012746000284</li>
                <li>UNESCO : 77566578900019</li>
                <li>CEFIM : 75301474500016</li>
                <li>RADIO BETON : 35175918800011</li>
                <li>MICROGATE : 42157681000046</li>
            </ul>
            <p class="ent">Légende</p>
            <ul>
                <li class="leg"><img class="imgleg" src="red.png"/><p>Plus en activitée</p></li>
                <li class="leg"><img class="imgleg" src="blue.png"/><p>En activitée</p></li>
            </ul>
        </section>
        <script src="script.js"></script>
    </body>
</html>