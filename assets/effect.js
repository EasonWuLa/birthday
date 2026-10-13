$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		$(window).resize(function(){
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			if ($('#b11').length) {
				placeWishBalloons(true);
			}
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function randomBalloonPos() {
		var edge = 8;
		var bw = 100;
		var bh = 183;
		var maxLeft = Math.max(edge, $(window).width() - bw - edge);
		var maxBottom = Math.max(edge, $(window).height() - bh - 80);
		return {
			left: edge + Math.random() * (maxLeft - edge),
			bottom: edge + Math.random() * Math.max(edge, maxBottom - edge)
		};
	}
	function placeWishBalloons(animated) {
		var vw = $(window).width();
		var ids = ['#b11','#b22','#b33','#b44','#b55','#b66','#b77'];
		var propsList;
		if (vw >= 720) {
			var center = vw / 2;
			var offsets = [-350, -250, -150, -50, 50, 150, 250];
			$('.balloons').css({width: '', height: '', backgroundSize: ''});
			$('.balloons h2').css('font-size', '');
			propsList = offsets.map(function (offset) {
				return {top: 240, left: center + offset};
			});
		} else {
			var count = ids.length;
			var balloonW = Math.min(64, Math.floor((vw - 12) / count));
			var step = (vw - 12 - balloonW) / (count - 1);
			var balloonH = Math.round(balloonW * 1.83);
			$('.balloons').css({
				width: balloonW + 'px',
				height: balloonH + 'px',
				backgroundSize: balloonW + 'px ' + balloonH + 'px'
			});
			$('.balloons h2').css('font-size', Math.max(12, Math.floor(balloonW * 0.42)) + 'px');
			var banner = document.querySelector('.bannar');
			var bannerBottom = banner ? banner.getBoundingClientRect().bottom : 100;
			var top = bannerBottom > 40 ? Math.min(bannerBottom + 4, 150) : 96;
			propsList = [];
			for (var i = 0; i < count; i++) {
				propsList.push({top: top, left: 6 + i * step});
			}
		}
		ids.forEach(function (id, i) {
			$(id).css('bottom', 'auto');
			if (animated) {
				$(id).stop().animate(propsList[i], 500);
			} else {
				$(id).css(propsList[i]);
			}
		});
	}
	function loopOne() {
		var pos = randomBalloonPos();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var pos = randomBalloonPos();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var pos = randomBalloonPos();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var pos = randomBalloonPos();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var pos = randomBalloonPos();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var pos = randomBalloonPos();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var pos = randomBalloonPos();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		placeWishBalloons(true);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
			playAlbum();
		});
	});

	function playAlbum() {
		var pages = $('.album-page');
		var pageIndex = 0;
		var lineIndex = 0;
		var hold = 3600;

		function linesOf(page) {
			try {
				return JSON.parse(page.getAttribute('data-lines') || '[]');
			} catch (e) {
				return [];
			}
		}

		function showLine() {
			var page = pages.eq(pageIndex);
			var lines = linesOf(page[0]);
			var caption = page.find('.album-caption');
			caption.stop(true, true).css('opacity', 0).text(lines[lineIndex] || '').animate({opacity: 1}, 360);
			lineIndex += 1;
			if (lineIndex < lines.length) {
				setTimeout(showLine, hold);
				return;
			}
			if (pageIndex >= pages.length - 1) {
				return;
			}
			setTimeout(function () {
				page.addClass('turned');
				pageIndex += 1;
				lineIndex = 0;
				setTimeout(showLine, 1100);
			}, hold);
		}

		showLine();
	}
});




//alert('hello');