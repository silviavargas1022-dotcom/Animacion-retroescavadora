(function(window) {
Símbolo_7_instancia_1 = function() {
	this.initialize();
}
Símbolo_7_instancia_1._SpriteSheet = new createjs.SpriteSheet({images: ["chasis.png"], frames: [[0,0,385,420,0,0.05,0.1]]});
var Símbolo_7_instancia_1_p = Símbolo_7_instancia_1.prototype = new createjs.Sprite();
Símbolo_7_instancia_1_p.Sprite_initialize = Símbolo_7_instancia_1_p.initialize;
Símbolo_7_instancia_1_p.initialize = function() {
	this.Sprite_initialize(Símbolo_7_instancia_1._SpriteSheet);
	this.paused = false;
}
window.Símbolo_7_instancia_1 = Símbolo_7_instancia_1;
}(window));

