<html>
	<head>
		<title>Canvas Sopwith - By Joey Novak</title>
        <?php
            if($_SERVER['HTTP_HOST'] == 'sopwith.nlocal.info'){
                ?>
                <script type="text/javascript" src="js/lib/melonJS-0.9.4.js"></script>
                <?php
            } else {
                ?>
                <script type="text/javascript" src="js/lib/melonJS-0.9.4-min.js"></script>
                <?php
            }
        ?>

        <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />


        <script type="text/javascript" src="/js/resources.js"></script>

        <script type="text/javascript" src="/js/Screen/PlayScreen.js"></script>

        <script type="text/javascript" src="/js/Entity/Player.js"></script>

		<script type="text/javascript" src="/js/main.js"></script>
	</head>
	<body>
    <div id="canvasWrapper"></div>
	</body>
</html>
