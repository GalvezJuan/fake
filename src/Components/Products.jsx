export const Products = ({ product, shopProduct }) => {



    return <div>
        {product.map((element, index) => {

            return <div key={index}>
                <h4>{element.title}</h4>
                <img src={element.image} height={250} width={200} alt="" />
                <h5>{element.description}</h5>
                <button onClick={()=>{shopProduct(element)}}>Comprar por ${element.price}</button>
            </div>
        })}
    </div>

}