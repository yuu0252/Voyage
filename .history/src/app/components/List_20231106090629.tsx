export default function List(props: Array<object>) {
  type propsType = {
    list : [
      item: {
        title: string;
        link: string;
      }


    ]
  }

  return (
    {props.list.map((item) => <li key={item.title}>{item.title}</li>)}
  )
}
