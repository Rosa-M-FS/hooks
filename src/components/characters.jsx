
function Character({ title, name, image, loading, error }) {
    return (
      <div className="character-card">
        <h2>{title}</h2>
        {loading && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
        {name && image && (
          <>
            <p>{name}</p>
            <img src={image} alt={name} />
          </>
        )}
      </div>
    );
  }
  
  export default Character;
  