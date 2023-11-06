

export default function List({list}) {
  list = ["aaa", "bbb"]

  return (
    <ul>
    {list.map((item<mapItem>) => <li key={item.title}>{item.title}</li>)}
    </ul>
  )
}
