import { useEffect, useState } from 'react'
import './App.css'
import { Products } from './Components/Products'

function App() {

  const [products, setProducts] = useState([])
  const [shop, setShop] = useState([])

  const getProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const shopProducts = (product) => {
    setShop([...shop, product])
  }

  if (products.length == 0) {
    return <>
      <h1>Cargando...</h1>
    </>
  }


  return (
    <>
      <h1>Fake Store</h1>
      <button disabled={shop.length == 0}>Productos en carrito: {shop.length} </button >
        <Products product={products} shopProduct={shopProducts}/>
    </>
  )
}

export default App
