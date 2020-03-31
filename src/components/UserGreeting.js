import React, {Component} from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        
        // Short Circuit Operator

        return(
            this.state.isLoggedIn && <div>Welcome Admin</div>
            )

        // Conditional Operator
            
        // return(
        //     this.state.isLoggedIn ?
        //     (<div>Welcome Admin</div>) 
        //         :
        //     (<div>Welcome Guest</div>)
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Admin</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Admin
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
        // return (
        //         <div> 
        //     <div> Welcome Admin</div>
        //     <div> Welcome Guest</div>
        //         </div> 
        // )
    }
}

export default UserGreeting;