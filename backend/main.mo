import Float "mo:base/Float";
actor {
	public query func sayHelloTo(name : Text) : async Text {
    return "Hello " # name # " 👋 ";
  };

  public query func bmi(height : Float, weight : Float) : async Float {
    weight / (height/100 * height/100);
  };
};