export default function List(props: Array<object>) {
  const Type propsType = {
    list : [
      item: {
        title: string;
      }


    ]
  }

  return (
    {props.list.map((item) => <li key={item.title}>{item.title}</li>)}
  )
}
