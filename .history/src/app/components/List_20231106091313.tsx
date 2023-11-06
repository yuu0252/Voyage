export default function List() {
  const list = [{ title: 'aaa' }, { title: 'bbb' }];

  return (
    <ul>
      {list.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
}
