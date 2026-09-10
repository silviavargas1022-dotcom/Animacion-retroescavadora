(function(window) {
Símbolo_8_instancia_1 = function() {
	this.initialize();
}
Símbolo_8_instancia_1._SpriteSheet = new createjs.SpriteSheet({images: ["luz.png"], frames: [[0,0,189,203,0,169.3,109.45],[189,0,189,220,0,169.3,126.45]]});
var Símbolo_8_instancia_1_p = Símbolo_8_instancia_1.prototype = new createjs.Sprite();
Símbolo_8_instancia_1_p.Sprite_initialize = Símbolo_8_instancia_1_p.initialize;
Símbolo_8_instancia_1_p.initialize = function() {
	this.Sprite_initialize(Símbolo_8_instancia_1._SpriteSheet);
	this.paused = false;
}
window.Símbolo_8_instancia_1 = Símbolo_8_instancia_1;
}(window));

