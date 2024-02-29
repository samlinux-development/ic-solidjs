import { JSX, createSignal, Show} from "solid-js";
import { action } from "@solidjs/router";

import { backend } from "../declarations/backend/index.js";

function Home():JSX.Element {
  let inputField: HTMLInputElement | undefined;
  let formElement: HTMLFormElement | undefined;

  const [resultName, setResultName] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);
 
  const sayHelloTo = action (async (formData: FormData) => {
    // make sure the resulteName is cleared
    setResultName("");

    // get the name from the form
    const name = formData.get("name") as string;

    // start the loading spinner
    setIsLoading(true);

    // get the result from the IC backend
    const icData = await backend.sayHelloTo(name); 

    // send Signal for the resultName
    setResultName(icData);

    // stop the loading spinner
    setIsLoading(false);

    // clear the input fields of the form
    (formElement !== undefined)?formElement.reset():"";
  })

  return (
    <>
      <div>
        <h2>Call sayHelloTo func</h2>
        <div class="hint">
        This demo implements a simple form and router configuration that sends a request to the backend to say hello to a user including a minimal spinner functionality.
        </div>
        <form action={sayHelloTo} ref={formElement} method="post">
          <label>
            Say hello to:
            <input type="text" name="name" ref={inputField}/>
          </label>
          <input type="submit" value="Click Me" disabled={isLoading()}/>
        </form>

        <Show when={isLoading()}>
          <div>Loading...</div>
        </Show>

        <div>{resultName()}</div>
      </div>
    </>
  );
}

export default Home;
