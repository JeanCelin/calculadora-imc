import React from "react";

export default class Peso extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    return(
      <div>
        <label>Peso</label>
        <input type='text' value={this.props.p} onChange={(e)=>{this.props.sp(e.target.value)}} />
      </div>
    )
  }
}
// export default function Peso(props){
  // return(
  //   <div>
  //     <label>Peso</label>
  //     <input type='text' value={props.p} onChange={(e)=>{props.sp(e.target.value)}} />
  //   </div>
  // )
// }