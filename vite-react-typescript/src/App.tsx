import ChildComp from "./ChildComp";

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <ChildComp message="">
        <div>Children</div>
      </ChildComp>
    </div>
  );
}

export default App;
