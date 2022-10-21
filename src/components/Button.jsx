const Button = ({ onClick, children}) => (
    <button className="botonCarrito" onClick={onClick}>
     {children}
    </button>
  );
  export default Button;