import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept {...item} key={item.title} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
