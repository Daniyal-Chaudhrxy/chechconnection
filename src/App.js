import CheckConnection from "./connectionComponents/CheckConnection";

const App = () => {
  const content = "Internet Connected";

  return <CheckConnection content={content}></CheckConnection>;
};

export default App;
