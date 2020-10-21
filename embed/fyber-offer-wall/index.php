<?php
// $data = file_get_contents('https://cpalead.com/dashboard/reports/campaign_json.php?id=1061406&&geoip=user&ua=user&format=JSONP&callback=?');
$data = file_get_contents('campaign.json');

$offers = json_decode($data, true);

$offer = $offers['offers'];


?>

<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fyber Offer Wall</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <a href="" class="back"><span></span><span></span> Back</a>
        <div class="earn-entries">Earn entries</div>
        <a href="" class="support">Support</a>
    </header>
    <div class="detail"><span>i</span>Complete any offer to earn entries. <span></span></div>

    
    
    
    
    
    <div class="offer-parrent">
        
        <?php foreach ($offer as $row) : ?>

        <div class="offer">
            <div class="offer-image"><a href="<?= $row['link'] ?>"><img src="<?= $row['creatives'][0]['url'] ?>" alt=""></a></div>
            <div class="offer-title"><a href="<?= $row['link'] ?>"><?=$row['title'] ?></a>
                <div class="offer-info">
                    <div class="offer-tag"> <SPan><a href=""><?= $row['category_name'] ?></a></SPan><SPAn><a href="">FREE</a></SPAn>
                        <div class="offer-detail"><?= $row['description'] ?></div>
                        <!-- <div class="offer-additional"></div> -->
                    </div>
                    <div class="offer-button"><a href="<?= $row['link'] ?>">+10</a></div>
                </div>
            </div>
        </div>

        <?php endforeach ?>
        
    </div>
    
</body>

</html>