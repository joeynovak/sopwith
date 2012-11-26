<html>
	<head>
		<title>Canvas Sopwith - By Joey Novak</title>
        <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
        <?php
            if(isset($_GET['debug'])){
                ?>
                <script type="text/javascript" src="js/lib/melonJS-0.9.4.js"></script>
                <?php
            } else {
                ?>
                <script type="text/javascript" src="js/lib/melonJS-0.9.4-min.js"></script>

                <?php
            }
        ?>

        <script type="text/javascript" src="js/lib/myMelonJsExtensions.js"></script>

        <script type="text/javascript" src="/js/resources.js"></script>

        <script type="text/javascript" src="/js/Screen/PlayScreen.js"></script>
        <script type="text/javascript" src="/js/Entity/FlyingObject.js"></script>
        <script type="text/javascript" src="/js/Entity/Plane.js"></script>
        <script type="text/javascript" src="/js/Entity/Player.js"></script>

		<script type="text/javascript" src="/js/main.js"></script>
	</head>
	<body>
    <div id="canvasWrapper"></div>
	</body>
</html>
