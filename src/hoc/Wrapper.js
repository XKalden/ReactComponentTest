import React, {Component} from 'react';




// const withClass = (WrapperComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrapperComponent {...this.props}/>
//         </div>
//     )
// }

const withRealClass = (WrapperComponent, styleName) => {
    const WithClass = class extends Component {
        render(){
            return(
                <div className={styleName}>
                    <WrapperComponent ref={this.props.forwardedRef} {...this.props}/>
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    });
}

export default withRealClass;

