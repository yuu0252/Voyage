type propsType = {
  list : [
    item: {
      title: string;
      link: string;
    }


  ]
}

type mapItem = {
  item: object;
}

export default function List(props: propsType) {

  return (
    <ul>
    {props.list.map((item<mapItem>) => <li key={item.title}>{item.title}</li>)}
    </ul>
  )
}
