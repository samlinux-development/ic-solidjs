import { JSX } from "solid-js";
import { A } from "@solidjs/router";
function Navbar():JSX.Element {
  return (
    <>
      <nav>
        <A href="/">Home</A>
      </nav>
    </>
  );
}

export default Navbar;