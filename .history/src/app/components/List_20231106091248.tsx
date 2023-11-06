export default function List() {
  const list = ['aaa', 'bbb'];

  return (
    <ul>
      {list.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
}
