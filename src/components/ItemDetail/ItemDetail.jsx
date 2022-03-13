export const ItemDetail = ({productos}) => {
  
  return (
    <div className="detailWrapper">
      <p>{productos.detail}</p>
      <img src={productos.foto} alt="" />
      <p>{productos.precio}</p>
    </div>
  );
};