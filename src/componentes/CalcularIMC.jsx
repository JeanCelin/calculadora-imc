import React from "react";

export default class Altura extends React.Component{
  constructor(props){
    super(props)
    
   this.calc=()=>{
      this.props.sr(this.props.p/(this.props.a*this.props.a))
    }
    
  }
  
  render(){
    return(
      <div>
        <button onClick={this.calc}>Calcular</button>
      </div>
    )
  }
}
// export default function Altura(props){
//   const calc=()=>{
//     props.sr(props.p/(props.a*props.a))
// }
  // return(
  //   <div>
  //     <button onClick={calc}>Calcular</button>
  //   </div>
  // )
// }