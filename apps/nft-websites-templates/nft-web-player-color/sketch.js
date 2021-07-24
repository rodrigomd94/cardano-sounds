let song, fft, amp, ampBass, ampMid, ampHigh, fa, wave
let t = 0


function preload() {
		
	fa = loadFont('https://arweave.net/2sAqaLM2Dx4kl-4cDfjym2DOylAKi1F7vi-Gy1ndw9U');
	song = loadSound('https://5qivp3uhdkmad6mndrvlhcqd6s4eu7bizg47zkuhbe544z5f65lq.arweave.net/7BFX7ocamAH5jRxqs4oD9LhKfCjJufyqhwk7zmel91c')
	
}

function setup(){
	const w = getW()
	createCanvas(w, w)
	textAlign(CENTER, CENTER);

	//isDark ? bgColor = {r: 26, g: 32, b: 44} : bgColor = {r: 255, g: 255, b: 255}
	//p.background(bgColor.r, bgColor.g, bgColor.b)

	noFill()

	stroke(255)
	strokeWeight(3)
	textSize(width/5)	
	textFont(fa)
	
	fft = new p5.FFT()
	
	wave = fft.waveform()

	//p.noLoop()
}

function draw() {
	bgColor = {r: 26, g: 32, b: 44} // bgColor = {r: 255, g: 245, b: 245}
	background(bgColor.r, bgColor.g, bgColor.b)

	
	fft.analyze()
	amp = int(fft.getEnergy(20, 220))
	ampBass = int(fft.getEnergy("bass"))
	ampMid = int(fft.getEnergy("lowMid"))
	ampHigh = int(fft.getEnergy("mid"))

	if(amp == 0) {
		let playIconChar = char(61515)
		fill(255, 245, 245)
		text(playIconChar, width/2, height/2)
	} else {
		translate(width/2, height/2)
		
		for(let i = 0; i < 10; i++) {
			stroke(ampHigh, ampMid, ampBass)
			line(x1(t + i, amp), y1(t + i, amp), x2(t + i, amp), y2(t + i, amp))

			if(ampBass > 215) {
				stroke(ampBass, ampMid, ampHigh)
				line(x1(-0.5*t + i, amp), y1(-0.5*t + i, amp), x2(-0.5*t + i, amp), y2(-0.5*t + i, amp))
			}
			if(ampMid > 155){
				stroke(ampMid, ampBass, ampHigh)
				line(x1(-t + i, amp), y1(-t + i, amp), x2(-t + i, amp), y2(-t + i, amp))
			}
		}
		
		t+= map(amp, 0, 250, 0, 0.05)
		
	}
					
}
function mouseClicked() {
	if(song.isPlaying()) {
		song.pause()	
	} else {
		song.loop()
	}
}
function windowResize() {
	const w = getW()
	resizeCanvas(w, w)
}

function getW() {
	if(windowWidth < 600){		
		return windowWidth * 0.9;
	} else {
		return windowWidth * 0.4;
	}
}


function x1(t, a) {
	return sin(t / 10) + sin(t / 5) * a
}
function y1(t, a) {
	return cos(t /10)  + cos(t / 4) * a
}
function x2(t, a) {
	return sin(t / 10) + sin(t) * a
}
function y2(t, a) {
	return  cos(t / 20) + cos(t / 12) * a
}