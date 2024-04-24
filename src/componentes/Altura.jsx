import React from "react";

export default class Altura extends React.Component{
  constructor(props){
    super(props)

  }
  render(props){
    return(
      <div>
        <label>Altura</label>
        <input type='text' value={this.props.a} onChange={(e)=>{this.props.sa(e.target.value)}} />
      </div>
    )
  }
}

// export default function Altura(props){
  // return(
  //   <div>
  //     <label>Altura</label>
  //     <input type='text' value={props.a} onChange={(e)=>{props.sa(e.target.value)}} />
  //   </div>
  // )
// }