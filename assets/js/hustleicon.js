(function() {
		var container = document.getElementById('container');
		var drop = document.getElementById('drop');
		var drop2 = document.getElementById('drop2');
		var outline = document.getElementById('outline');

		TweenMax.set(['svg'], {
			position: '',
			top: '0%',
			left: '0%',
			xPercent: 0,
			yPercent: 0
		})

		TweenMax.set([container], {
			position: '',
			top: '0%',
			left: '0%',
			xPercent: 25,
			yPercent: 25
		})

		TweenMax.set(drop, {
			transformOrigin: ''
		})

		var tl = new TimelineMax({
			repeat: -1,
			paused: false,
			repeatDelay: 0,
			immediateRender: false
		});

		tl.timeScale(3);

		tl.to(drop, 4, {
			attr: {
				cx: 250,
				rx: '+=10',
				ry: '+=10'
			},
			ease: Back.easeInOut.config(3)
		})
		.to(drop2, 4, {
			attr: {
				cx: 250
			},
			ease: Power1.easeInOut
		}, '-=4')
		.to(drop, 4, {
			attr: {
				cx: 125,
				rx: '-=10',
				ry: '-=10'
			},
			ease: Back.easeInOut.config(3)
		})
		.to(drop2, 4, {
			attr: {
				cx: 125,
				rx: '-=10',
				ry: '-=10'
			},
			ease: Power1.easeInOut
		}, '-=4')
	})()
