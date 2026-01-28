const Products = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
import styles from "./product.module.css"
  return (
    <div>
      <ul styles.ul>
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
