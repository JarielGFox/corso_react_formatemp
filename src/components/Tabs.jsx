// creiamo questo componente a scopo didattico, nell'ottica di avere un componente altamente riutilizzabile
// a ButtonsContainer passiamo il valore di default menu in modo che in Examples nel componente Tabs, venga passato per riferimento
function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  return (
    <>
      {/* passiamo la props come componente come identificatore */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;
