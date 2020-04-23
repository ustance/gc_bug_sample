package t;

class TestT extends Base{
	public var array: Array<Int>;
	public var _t: Int = 0;
	public function new() {
		var size: Int = 6 + Std.random(50);
		array = [for(i in 0...size) 256];
		_t = 0;
	}
	public function init() {

		for(i in 0...10) {
			array = [];
			array.push(Std.random(1280));
			array.push(Std.random(800));
		}
	}
}
