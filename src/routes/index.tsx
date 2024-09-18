import { JSX, createSignal, Show} from "solid-js";
import { action } from "@solidjs/router";

import { backend } from "../declarations/backend/index.js";

function Home():JSX.Element {
  let inputField: HTMLInputElement | undefined;
  let formElement: HTMLFormElement | undefined;

  const [resultName, setResultName] = createSignal("");
  const [lastName, setLastName] = createSignal("");

  const [isLoading, setIsLoading] = createSignal(false);
  const [isLoading2, setIsLoading2] = createSignal(false);
 
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
  });

  // get the result from the IC backend
  const getLastName = (async () => {
    // start the loading spinner
    setIsLoading2(true);

    // get the result from the IC backend
    setLastName(await backend.getLastName()); 
    
    // stop the loading spinner
    setIsLoading2(false);
    
  });
  return (
    <>
      <div>
        <h2>Call to public shared func sayHelloTo </h2>
        <div class="hint">
        This demo features a simple form and router setup that sends a request to the backend to greet the user, complete with a minimal loading spinner. On the backend, the user’s last name is stored securely and can be retrieved by the frontend using the getLastName function
        </div>
        <form action={sayHelloTo} ref={formElement} method="post">
          <label>
            Say hello to:
            <input type="text" name="name" ref={inputField}/>
          </label>
          <input type="submit" value="Click Me" disabled={isLoading()}/>
          <Show when={isLoading()}>
            <span style="margin-left:10px;">Loading...</span>
          </Show>
        </form>

        <div>{resultName()}</div>

        <h2>Call to public shared query func getLastName </h2>
        <div>
          <button onClick={getLastName}>GetLastName</button>
          <Show when={isLoading2()}>
            <span style="margin-left:10px;">Loading...</span>
          </Show>

          <div>{lastName()}</div>
        </div>
        
      </div>
    </>
  );
}

export default Home;
