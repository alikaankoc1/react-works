import "./App.css";
import TestComponents from "./TestComponents";
function App() {
  let vize1 = 57;
  let vize2 = 78;
  let ortalama = (vize1 + vize2) / 2;

  let names = ["ali", "veli", "ahmet"];
  return (
    <div>
      <div>
        {ortalama >= 50 ? (
          <p>dersten geçtin ortalama: {ortalama}</p>
        ) : (
          <p>dersten kaldın ortalama:{ortalama}</p>
        )}
      </div>
      <TestComponents />
      {names.map((isim, index) => (
        <div key={index}>{isim}</div>
      ))}
    </div>
  );
}
export default App;
