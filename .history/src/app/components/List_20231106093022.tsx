type Props = {
  props: [
    {
      title: string;
      link: string;
    }
  ];
};

export default function List({ props }: Props) {
  return (
    <ul>
      {props.map((item) => (
        <li key={item.title} className="list__item">
          {item.title}
        </li>
      ))}
    </ul>
  );
}
