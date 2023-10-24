export default function SearchBar({ onSearch }) {
  return (
    <div>
      <input type='search' />
      <button onClick={() => onSearch('hola soy un ID')}>Agregar</button>
    </div>
  );
}
