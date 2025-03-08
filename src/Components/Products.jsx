export const Products = ({ product, shopProduct }) => {



    return <div>
        {product.map((element, index) => {

            return <div key={index}>
                <h4>{element.title}</h4>
                <img src={element.image} height={200} width={300} alt="" />
                <h5>{element.description}</h5>
                <button onClick={()=>{shopProduct(element)}}>comprar</button>
            </div>
        })}
    </div>

}