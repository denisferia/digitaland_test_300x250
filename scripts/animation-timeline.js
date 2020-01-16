

var ANIMATION = {
    mainTimeline : '',
    slides : [
        {
            background: '.slide1 .bkg',
            text: '.slide1 .txt'
        },
        {
            background: '.slide2 .bkg',
            text: '.slide2 .txt'
        },
        {
            background: '.slide3 .bkg',
            text: '.slide3 .txt'
        },
        {
            text: '.slide4 .txt'
        },
        {
            background: '.slide5 .bkg',
            logo: '.slide5 .txt h1',
            subtitle: '.slide5 .txt h2',
            button: '.slide5 .txt .play'
        }
    ],

    init : function () {

        this._run();
    },

    _setSlide1: function(){
        var self =  this,
            slide1Animation = gsap.timeline();

        slide1Animation
                .from(self.slides[0].text, {x: -350, duration:0.75, ease: "power4.out"})
                .from(self.slides[0].background, {scale: 1.05, duration:7, ease:"sine"}, "-=0.5")
                .to(self.slides[0].text, {x: -350, duration:0.5, ease: "power4.out"}, "-=2")
                .to(self.slides[0].background, {opacity:0, duration:1.5}, "-=2");

        return slide1Animation;
    },

    _setSlide2: function(){
        var self =  this;

        self.slide2Animation = gsap.timeline();
        self.slide2Animation
                .to(self.slides[1].background, {scale: 1, duration:8, ease:"sine"})
                .to(self.slides[1].text, {opacity:1, duration:1.5, ease: "sine"}, "-=7")
                .to(self.slides[1].text, {opacity:0, duration:1.5, ease: "sine"}, "-=2.5")
                .to(self.slides[1].background, {opacity:0, duration:2}, "-=1.5");

        return self.slide2Animation;
    },

    _setSlide3: function(){
        var self =  this;

        self.slide3Animation = gsap.timeline();
        self.slide3Animation
                .from(self.slides[2].text, {y: 100, scale:1.1, duration:1.5, ease: "circ.out"})
                .to(self.slides[2].background, {scale: 1, duration:8}, "-=1.5")
                .to(self.slides[2].text, {opacity:0, duration:2, ease: "sine"}, "-=2")
                .to(self.slides[2].background, {opacity:0, duration:2}, "-=2");

        return self.slide3Animation;
    },

    _setSlide4: function(){
        var self =  this;

        self.slide4Animation = gsap.timeline();
        self.slide4Animation
                .from(self.slides[3].text, {x: -250, duration:0.5, ease: "power3.out"})
                .to(self.slides[3].text, {x: 500, duration:1.5, ease: "power3.out"}, "+=2");

        return self.slide4Animation;
    },

    _setSlide5: function(){
        var self =  this;

        self.slide5Animation = gsap.timeline();
        self.slide5Animation
                .to(self.slides[4].background, {scale:1.2, duration: 12})
                .from(self.slides[4].logo, {opacity:0, duration: 1, ease: "sine"}, "-=6")
                .from(self.slides[4].subtitle, {y: 300, scale:0.8, opacity:0, duration:0.5, ease: "circ.out"}, "-=6.5")
                .from(self.slides[4].button, {x: -250, duration:0.25, ease: "power3.out"}, "-=5.5");

        return self.slide5Animation;
    },

    _run : function () {
        var self =  this;
        self.mainTimeline = gsap.timeline();
        self.mainTimeline
                .add(self._setSlide1())
                .add(self._setSlide2(), "-=1")
                .add(self._setSlide3(),"-=0.75")
                .add(self._setSlide4(), "-=0.75")
                .add(self._setSlide5(), "-=7");

        console.log("self.mainTimeline.duration"+self.mainTimeline.duration)
    }

};

ANIMATION.init();