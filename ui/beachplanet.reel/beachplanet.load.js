montageDefine("15dc556","ui/beachplanet.reel/beachplanet",{dependencies:["montage/ui/component"],factory:function(e,t){var i=e("montage/ui/component").Component;t.Beachplanet=i.specialize({MAX_SCORE:{value:4},audios:{value:null},backgroundMusicEnabled:{value:!0},dolphinLogoFound:{value:!1},rockRevealed:{value:!1},doorOpened:{value:!1},starRevealed:{value:!1},_score:{value:0},score:{get:function(){return this._score},set:function(e){this.score!==e&&(this._score=e,this.scoreDidChange())}},scoreDidChange:{value:function(){if(this.playSound("sound/getruby.mp3"),this.score===this.MAX_SCORE){var e=this;return setTimeout(function(){e.gameWon()},3e3),void 0}this.returnExploringPlanet()}},playSound:{value:function(e,t){null==this.audios&&(this.audios={});var i=this.audios[e];null==i?(i=new Audio(e),this.audios[e]=i,t===!0&&(i.loop="loop"),i.addEventListener("canplay",function(){i.play()},!1)):(i.currentTime=0,i.play())}},templateDidLoad:{value:function(){this.templateObjects.viewer.play(),this.backgroundMusicEnabled&&this.playSound("sound/WhiteSands.mp3",!0),this.animateDolphins()}},prepareForPlay:{value:function(){this.playSound("sound/getruby.mp3"),this.dolphinLogoFound=!1,this.score=0,this.templateObjects.viewer.stop(),this.templateObjects.viewer.viewPoint=this.templateObjects.planetVP}},handlePlayButtonAction:{value:function(){this.classList.remove("isIntro"),this.classList.add("isPlaying"),this.prepareForPlay()}},handlePlayAgainButtonAction:{value:function(){this.classList.remove("isWinner"),this.classList.add("isPlaying"),this.prepareForPlay()}},handleNavItemAction:{value:function(e){this.templateObjects.viewer.stop(),this.templateObjects.viewer.viewPoint=e.target.viewPoint,this.templateObjects.viewer.allowsViewPointControl=e.target.viewPoint===this.templateObjects.planetVP}},gameWon:{value:function(){this.playSound("sound/getruby.mp3"),this.classList.add("isWinner"),this.classList.remove("isPlaying"),this.templateObjects.viewer.viewPoint=this.templateObjects.cameraRideViewPoint,this.templateObjects.viewer.play(),this.starRevealed=this.doorOpened=this.rockRevealed=!1}},_exploringTimeout:{value:null},returnExploringPlanet:{value:function(){if(this.score<this.MAX_SCORE){var e=this;null!=this._exploringTimeout&&(clearTimeout(this._exploringTimeout),this._exploringTimeout=null),this._exploringTimeout=setTimeout(function(){e._exploringTimeout=null,e.templateObjects.viewer.viewPoint=e.templateObjects.planetVP,e.templateObjects.viewer.allowsViewPointControl=!0},4e3)}}},checkAndApplyGameActionIfNeeded:{value:function(e,t){this[e]===!1&&(this.templateObjects.viewer.viewPoint=t,this[e]=!0,this.score++)}},handleRockAction:{value:function(){this.checkAndApplyGameActionIfNeeded("rockRevealed",this.templateObjects.rockLogoVP)}},handleDoorAction:{value:function(){this.checkAndApplyGameActionIfNeeded("doorOpened",this.templateObjects.cabinLogoVP)}},handleStarAction:{value:function(){this.checkAndApplyGameActionIfNeeded("starRevealed",this.templateObjects.starLogoVP)}},handleLogoDolphinAction:{value:function(){this.checkAndApplyGameActionIfNeeded("dolphinLogoFound",this.templateObjects.dolphinsVP)}},animateDolphins:{value:function(){this.templateObjects.logoDolphin.classList.remove("BeachPlanet-dolphin-logo-jump"),this.templateObjects.dolphin.classList.remove("BeachPlanet-dolphin-jump"),this.templateObjects.dolphin2.classList.remove("BeachPlanet-dolphin-jump"),this.dolphinLogoFound===!1&&this.templateObjects.logoDolphin.classList.add("BeachPlanet-dolphin-logo-jump"),this.templateObjects.dolphin.classList.add("BeachPlanet-dolphin-jump"),this.templateObjects.dolphin2.classList.add("BeachPlanet-dolphin-jump");var e=this;setTimeout(function(){e.animateDolphins()},4e3)}}})}});