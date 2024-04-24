import React from "react";

export default class Resultado extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <p>Resultado: {this.props.r.toFixed(2)}</p>
      </div>
    )
  }
}
// export default function Resultado(props){
  // return(
  //     <div>
  //       <p>Resultado: {props.r.toFixed(2)}</p>
  //     </div>
  //   )
// }