<?php
include 'vendor/autoload.php';
testphp();
function testphp(){
    if(isset($_GET['texte'])){
        $ident = $_GET['texte'];
    }
    $api = new RestClient([
        'base_url' => "https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/", 
        'format' => "json",
    ]);
    $result = $api->get($ident);
        echo json_encode($result);
    if($result->info->http_code == 200)
        echo json_encode($result->decode_response());
    if($result->info->http_code == 404)
        echo 'Non trouvé';
    if($result->info->http_code == 429)
        echo 'Seuil de requête dépassé';
    if($result->info->http_code == 500)
        echo 'Serveur HS';
}
?>