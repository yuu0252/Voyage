export default function List() {
  const list = [{ title: 'aaa' }, { title: 'bbb' }];

  return (
    <ul>
      {list.map((item) => (
        <li key={item.title} className="list__item">
          {item.title}
        </li>
      ))}
    </ul>
  );
}
