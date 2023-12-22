function CoreConcept({ image, title, description }) {
  return (
    <li>
      {/* //siccome le props sono oggetti, accediamo alla proprietà img e title */}
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
