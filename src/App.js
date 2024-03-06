import logo from "./logo.svg";
import "./App.css";
import { Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { add, change, remove } from "./store";

function App() {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add());
  };

  const handleRemove = (i) => {
    dispatch(remove(i));
  };
  const handleChange = (id, product) => {
    dispatch(change({ id, product }));
  };
  console.log("testtttttt", state);
  return (
    <div>
      <Row>
        <p>
          Install <code>reduxdevtools</code> chrome extension to see under the hood.
        </p>
      </Row>
      <Row>
        <table border={1} style={{ marginLeft: "20px", padding: "5px" }}>
          <tr>
            <th>ID</th>
            <th>Product name</th>
            <th>remove</th>
          </tr>
          {state.map((element, i) => (
            <tr key={element.id}>
              <td> {element.id}</td>
              <td>
                <input
                  type="text"
                  value={element.product}
                  onChange={(ev) => {
                    ev.preventDefault();
                    handleChange(element.id, ev.target.value);
                  }}
                />
              </td>
              <td>
                <button
                  onClick={(ev) => {
                    ev.preventDefault();
                    handleRemove(element.id);
                  }}
                >
                  remove
                </button>
              </td>
            </tr>
          ))}
        </table>
      </Row>
      <Row>
        <button style={{ marginLeft: "15px", marginTop: "15px" }} onClick={handleAdd}>
          create
        </button>
      </Row>
    </div>
  );
}

export default App;
