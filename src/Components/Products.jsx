export const Products = ({ product }) => {



    return <div>
        {product.map((element, index) => {

            return <div>
                <h4>{element.title}</h4>
                <img src={element.image} height={200} width={300} alt="" />
                <h5>{element.description}</h5>
            </div>
        })}
    </div>

}