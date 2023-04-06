const ListItem = (props) => {
  const { data, onDelete } = props;
  return (
    <li>
      <span style={{ marginRight: "10px" }}>{data.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ListItem;
