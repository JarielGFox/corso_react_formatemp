// con lo spread operator diciamo di raccogliere tutti gli oggetti e li "ributto" dove mi serve
// in section passiamo lo spread operator in section invece è rest operator
function Section({ title, children, ...props }) {
  return (
    //usiamo nuovamente il concetto dello spread però all'altezza del componente funzionendo in modo dinamico
    //lo usiamo per ridistruibire il contenuto di qualcosa che vogliamo dinamicizzare
    <section {...props}>
      <h2>{title}</h2>
      {/* {children} usandolo in questa maniera mi consente di iniettare il contenuto di qualcosa che vogliamo dinamicizzare */}
      {/* children usato in questa maniera ci consente la costruzione di un componente che possiamo riutilizzare */}
      {children}
    </section>
  );
}

export default Section;
