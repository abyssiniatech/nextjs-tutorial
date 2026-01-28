import { useEffect, useState } from "react"
import styles from "./product.module.css"

const Products = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div>
      <ul className={styles.ul}>
        {data.map((list) => (
          <li key={list.id}>
            <p>{list.id}</p>
            <p>{list.title}</p>
            <p>{list.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
