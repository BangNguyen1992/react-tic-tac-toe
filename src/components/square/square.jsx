import React from 'react'


// class Square extends React.Component {
//   render() {
//     return (
//       <div className="square" onClick={() => this.props.onClickHandler()}>
//         {this.props.value}
//       </div>
//     );
//   }
// }

const Square = (props) => (
  <div className="square" onClick={() => props.onClickHandler()}>
    {props.value}
  </div>
)

export default Square;