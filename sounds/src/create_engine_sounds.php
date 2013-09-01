<?php
define("SOX_PATH", "\"C:\\Program Files (x86)\\sox-14-4-0\\sox.exe\"");
define("ARGUMENTS", "-V3");
$infile = "\"C:\\coral\\www\\sopwith.nlocal.info\\sounds\\src\\sopwith_running_good.wav\"";
$idleinfile = "\"C:\\coral\\www\\sopwith.nlocal.info\\sounds\\src\\sopwith_engineidle.wav\"";

header("Content-Type: text/plain");

$speeds = array(.2,.3,.4,.5,.6,.7,.8,.9,1);
foreach($speeds as $speed){
    $mp3_outfile = "\"C:\\coral\\www\\sopwith.nlocal.info\\sounds\\sopwith_engine$speed.mp3\"";
    $ogg_outfile = "\"C:\\coral\\www\\sopwith.nlocal.info\\sounds\\sopwith_engine$speed.ogg\"";
    $cmd = SOX_PATH . " " . ARGUMENTS . " " . $infile . " " . $mp3_outfile . " speed $speed";
    echo "Running command: $cmd\n\n";
    echo shell_exec($cmd);

    $cmd = SOX_PATH . " " . ARGUMENTS . " " . $infile . " " . $ogg_outfile . " speed $speed";
    echo "Running command: $cmd\n\n";
    echo shell_exec($cmd);
}

$mp3_outfile = "\"C:\\coral\\www\\sopwith.nlocal.info\\sounds\\sopwith_engineidle.mp3\"";
$ogg_outfile = "\"C:\\coral\\www\\sopwith.nlocal.info\\sounds\\sopwith_engineidle.ogg\"";

$cmd = SOX_PATH . " " . ARGUMENTS . " " . $idleinfile . " " . $mp3_outfile . "";
echo "Running command: $cmd\n\n";
echo shell_exec($cmd);

$cmd = SOX_PATH . " " . ARGUMENTS . " " . $idleinfile . " " . $ogg_outfile . "";
echo "Running command: $cmd\n\n";
echo shell_exec($cmd);