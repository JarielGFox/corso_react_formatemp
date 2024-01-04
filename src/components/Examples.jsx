import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

function Examples() {
  //selectedTopic è un valore, setSelectedTopic è una funzione che aggiorna il valore di selectedTopic, useState è una funzione che restituisce il valore di selectedTopic e setSelectedTopic
  //setselectedTopic sarà la funzione che dobbiamo passare alla funzione handleClick
  const [selectedTopic, setSelectedTopic] = useState();

  //selectedButton è un argomento che passiamo come parametro a setSelectedTopic
  function handleClick(selectedButton) {
    //richiamiamo setSelectedTopic e passiamo selectedButton che va ad aggiornare il valore di selectedTopic
    setSelectedTopic(selectedButton);
  }

  // soluzione con tabcontent passando però per lo stato
  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title={"Examples"}>
      {/* da menù in poi si tratta del {children} */}

      {/* componente Tabs al quale passiamo come props buttons, dichiarato in Tabs.jsx */}
      {/* in buttons passiamo tutti i bottoni */}
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>

      <menu></menu>

      {/* best practice da usare */}
      {/* se non esiste selectedTopic allora non facciamo nulla */}
      {/* {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

      {/* caso due senza usare && e soluzione altrettanto valida */}

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
    </Section>
  );
}

export default Examples;
