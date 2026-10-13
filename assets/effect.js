$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var audio = $('.song')[0];
		if (audio) {
			audio.loop = true;
			audio.addEventListener('ended', function () {
				audio.currentTime = 0;
				var again = audio.play();
				if (again && again.catch) {
					again.catch(function () {});
				}
			});
		}
		$(window).resize(function(){
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			if (balloonsLifted || $('#b11').length) {
				liftBalloons(false);
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
		$(this).fadeOut('slow').delay(1200).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
		audio.loop = true;
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(900).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(1000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	var balloonsLifted = false;
	if (!$('.candle-flash').length) {
		$('body').append('<div class="candle-flash"></div>');
	}
	function balloonIds() {
		if ($('#b11').length) {
			return ['#b11','#b22','#b33','#b44','#b55','#b66','#b77'];
		}
		return ['#b1','#b2','#b3','#b4','#b5','#b6','#b7'];
	}
	function liftBalloons(animated) {
		var vw = $(window).width();
		var vh = $(window).height();
		var ids = balloonIds();
		var count = ids.length;
		var balloonW;
		var balloonH;
		var top;
		var lefts = [];
		if (vw >= 720) {
			balloonW = 100;
			balloonH = 183;
			$('.balloons').css({width: '', height: '', backgroundSize: ''});
			$('.balloons h2').css('font-size', '');
			var center = vw / 2;
			[-350, -250, -150, -50, 50, 150, 250].forEach(function (offset) {
				lefts.push(center + offset);
			});
			top = 210;
		} else {
			balloonW = Math.min(56, Math.floor((vw - 16) / count));
			balloonH = Math.round(balloonW * 1.83);
			$('.balloons').css({
				width: balloonW + 'px',
				height: balloonH + 'px',
				backgroundSize: balloonW + 'px ' + balloonH + 'px'
			});
			$('.balloons h2').css('font-size', Math.max(12, Math.floor(balloonW * 0.42)) + 'px');
			var banner = document.querySelector('.bannar');
			var bannerBottom = banner ? banner.getBoundingClientRect().bottom : 88;
			top = bannerBottom > 24 ? bannerBottom + 2 : 86;
			var step = (vw - 8 - balloonW) / (count - 1);
			for (var i = 0; i < count; i++) {
				lefts.push(4 + i * step);
			}
		}
		ids.forEach(function (id, i) {
			var spot = {
				left: lefts[i],
				bottom: Math.max(8, vh - top - balloonH)
			};
			var $el = $(id);
			$el.stop(true);
			if (animated) {
				$el.animate(spot, 1600);
			} else {
				$el.css(spot);
			}
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top: -500, opacity: 0}, 1400);
		balloonsLifted = true;
		liftBalloons(true);
		$(this).fadeOut('slow').delay(1100).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn(700);
		$(this).fadeOut('slow').delay(800).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn(450);
		$('.cake').addClass('candle-lit');
		var flash = $('.candle-flash');
		flash.removeClass('bloom');
		if (flash[0]) {
			void flash[0].offsetWidth;
		}
		flash.addClass('bloom');
		$(this).fadeOut('slow').delay(600).promise().done(function(){
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
		liftBalloons(true);
		$('.balloons').css('opacity','1');
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