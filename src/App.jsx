import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  //selectedTopic è un valore, setSelectedTopic è una funzione che aggiorna il valore di selectedTopic, useState è una funzione che restituisce il valore di selectedTopic e setSelectedTopic
  //setselectedTopic sarà la funzione che dobbiamo passare alla funzione handleClick
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  //selectedButton è un argomento che passiamo come parametro a setSelectedTopic
  function handleClick(selectedButton) {
    //richiamiamo setSelectedTopic e passiamo selectedButton che va ad aggiornare il valore di selectedTopic
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
