export default function List(props: Array<object>) {
  Type props = {

  }

  return (
    {props.list.map((item) => <li key={item.title}>{item.title}</li>)}
  )
}
