export default function List(props: Array<object>) {
  return (
    {props.list.map((item) => <li key={item.title}>{item.title}</li>)}
  )
}
