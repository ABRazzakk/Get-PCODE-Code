<?php

$userCode = $_GET["code"];
$mySecretKey = "5dbd298fded5e0ed56b94b530846521d03c9267a2b2c8fd6f39c04b91e8f2588";

// string we will hash to produce PCODE
$String_final = $userCode . $mySecretKey;
$pcode = "pw-" . hash("sha256", $String_final);

echo $pcode;
