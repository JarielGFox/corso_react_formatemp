import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  //selectedTopic è un valore, setSelectedTopic è una funzione che aggiorna il valore di selectedTopic, useState è una funzione che restituisce il valore di selectedTopic e setSelectedTopic
  //setselectedTopic sarà la funzione che dobbiamo passare alla funzione handleClick
  const [selectedTopic, setSelectedTopic] = useState();

  //selectedButton è un argomento che passiamo come parametro a setSelectedTopic
  function handleClick(selectedButton) {
    //richiamiamo setSelectedTopic e passiamo selectedButton che va ad aggiornare il valore di selectedTopic
    setSelectedTopic(selectedButton);
  }

  // soluzione con tabcontent passando però per lo stato
  // let tabContent = <p>Please select a topic</p>;
  // if (selectedTopic) {
  //   tabContent = (
  //     <div id="tab-content">
  //       <h3>{EXAMPLES[selectedTopic].title}</h3>
  //       <p>{EXAMPLES[selectedTopic].description}</p>
  //       <pre>
  //         <code>{EXAMPLES[selectedTopic].code}</code>
  //       </pre>
  //     </div>
  //   );
  // }

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

          {/* best practice da usare */}
          {/* se non esiste selectedTopic allora non facciamo nulla */}
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}

          {/* caso due senza usare && e soluzione altrettanto valida */}
          {/* {tabContent} */}

          {/* non best practice perchè && può dare problemi su valori falsy come 0 e NaN */}
          {/* 
          {!selectedTopic && <p>Please select a topic.</p>}

          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
        </section>
      </main>
    </div>
  );
}

export default App;
