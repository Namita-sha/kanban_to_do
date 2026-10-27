import "./App.css"

export default function App(){
  const columns=[
    {id:1,title:"To Do",tasks:[{ id: 101, text: "Learn React" }]},
    {id:2,title:"Pending",tasks:[]},
    {id:3,title:"Completed",tasks:[]} 
  ];
  return(
    <div className="board">
      {
        columns.map((col)=>( //for column
          <div key={col.id} className="column">
            <h3>{col.title}</h3>
            {col.tasks.map((task)=>( //for columns task
              <p key={task.id}>{task.text}</p>
        ))}
    </div>
  ))}
</div>
);
}