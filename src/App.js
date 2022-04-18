import React from "react"
import './App.css';

export default function App() {
  const list = [
    "Banana",
    "Apple",
    "Kiwi",
    "Orange",
    "Mango",
    "Watermelon",
    "Pineapple"
  ];
  const [filterList, setFilterList] = React.useState(list);

  const handleSearch = (event) => {
    if(event.target.value === ""){
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter((item) => 
      item.toLowerCase().indexOf(event.target.value.toLowerCase()) !==-1);
    setFilterList(filteredValues);
  };

  return (
    <div className="app">
      <div>
        Search: <input name="query" type="text" 
        onChange={handleSearch}/>
      </div>
      {filterList && 
        filterList.map(item =>(
          <div>{item}</div>
        ))}
    </div>
  )

}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App/>, rootElement);
