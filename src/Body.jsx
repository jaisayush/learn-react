import React, { useState, createContext, useContext, useEffect } from "react";

// CREATE CONTEXT
// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// Angular Equivalent: Services (provided in root or a module) to share state.
const FruitContext = createContext();

// CHILD COMPONENT: FruitInput
// Props are destructured directly in the function signature: ({ search, setSearch })
const FruitInput = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search fruits..."
      // TWO-WAY DATA BINDING REPLACEMENT
      // React uses "One-Way Data Flow". We explicitly set value and list for changes.
      // Angular Equivalent: [(ngModel)]="search"
      value={search}
      
      // EVENT HANDLING
      // Events are camelCase (onChange vs (change) or (input)).
      // We pass a function to handle the event.
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

// CHILD COMPONENT: FruitContainer
const FruitContainer = ({ search }) => {
  // USE CONTEXT HOOK
  // Consuming the data provided by FruitContext.Provider
  // Angular Equivalent: Injecting a Service in the constructor: constructor(private fruitService: FruitService)
  const { fruits } = useContext(FruitContext);

  // INLINE STYLES
  // Styles in React are objects, not strings. 
  // Properties are camelCase (backgroundColor instead of background-color).
  // Angular Equivalent: [ngStyle]="{ 'height': '100px', ... }"
  const fruitStyle = {
    height: "100px",
    width: "100px",
    background: "yellow",
    border: "1px solid red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
  };

  // FILTER LOGIC
  // This logic runs on every render.
  // Angular Equivalent: A Pipe or a getter function / computed signal.
  const filteredFruits = fruits.filter((ele) =>
    ele.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* 
        LIST RENDERING
        We use JavaScript's .map() function to iterate over arrays and return JSX.
        Angular Equivalent: *ngFor="let ele of filteredFruits"
        
        KEY PROP
        'key' is critical for React's diffing algorithm to optimize updates.
        Angular Equivalent: trackBy function
      */}
      {filteredFruits.map((ele) => (
        <div style={fruitStyle} key={ele}>
          {ele}
        </div>
      ))}
    </div>
  );
};

// PARENT COMPONENT: Body
// Receives 'fruits' prop from App component.
const Body = ({ fruits }) => {
  // USE STATE HOOK
  // Creates a state variable 'search' and a function to update it 'setSearch'.
  // Initial value is "".
  // Angular Equivalent: search: string = "";
  const [search, setSearch] = useState("");

  // USE EFFECT HOOK - LIFECYCLE MANAGEMENT
  // React's 'useEffect' handles side effects (API calls, subscriptions, DOM manipulation).
  // It replaces Angular's lifecycle hooks: ngOnInit, ngOnChanges, and ngOnDestroy.

  // 1. COMPONENT DID MOUNT (ngOnInit)
  // The empty dependency array [] means "run this only once after the first render".
  useEffect(() => {
    console.log("🟢 Body Component Mounted (ngOnInit)");
    
    // We can simulate an API call here or set a timer.

    // 2. COMPONENT WILL UNMOUNT (ngOnDestroy)
    // The clean-up function: returned function runs when the component is removed.
    // Use this to clear timers or unsubscribe from observables.
    return () => {
      console.log("🔴 Body Component Unmounted (ngOnDestroy)");
    };
  }, []); // <--- Dependency Array


  // 3. WATCHER / ON CHANGE (ngOnChanges)
  // This effect runs every time the 'search' variable changes.
  useEffect(() => {
    // Updating the document title based on state
    if (search) {
      document.title = `Searching: ${search}`;
    } else {
      document.title = "Learn React";
    }
  }, [search]); // <--- Runs when 'search' changes

  return (
    <div style={{ margin: "10px" }}>
      {/* Passing state and updater function down as props */}
      <FruitInput search={search} setSearch={setSearch} />
      
      {/* 
        CONTEXT PROVIDER
        Wraps children to provide access to 'fruits' data.
        Any child component inside this Provider can access 'fruits' via useContext.
      */}
      <FruitContext.Provider value={{ fruits }}>
        <FruitContainer search={search} />
      </FruitContext.Provider>
    </div>
  );
};

export default Body;
