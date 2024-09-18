
actor {
  stable var lastName : Text = "World";
	public shared func sayHelloTo(name : Text) : async Text {
    lastName := name;
    return "Hello " # lastName # " 👋 ";
  };

  public shared query func getLastName() : async Text {
    lastName;
  };
};