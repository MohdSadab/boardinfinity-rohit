import React, {Component} from 'react';


// class based component
//  jsx javascript syntactic sugar (object contatins {type,props:{children}})

// react uses virtual dom for reconcilation process

class WaterState extends Component{

    constructor(props){
        super(props);
        this.state={waterState:'liquid'}
    }

    static getDerivedStateFromProps(props,state){
        // console.log("getDerivedStateFromProps called",props,state)
        console.log("get Derived State From Props",document.getElementById("title"));
        return state
    }

    componentDidMount(){
        console.log("mounted called", document.getElementById("title"))
       
    }


    componentDidUpdate(prevProps, prevState){
        console.log(" componentDidUpdate called",prevProps,prevState)
        // we must use a condition for calling the api or updating the 
        // state because it get called again and again when component re render
    }


    shouldComponentUpdate(nextProps, nextState, nextContext){
        console.log(" shouldComponentUpdate called ")
        return true;
    }

    componentWillUnmount(){
        console.log(" componentWillUnmountcalled")
    }


    render(){
        console.log("render get called")
        return (
            <div>
                {/* here we need to pass fuction as a refrence not call the function */}
                <h1 id="title"> Curr State is :  {this.state.waterState} </h1>
                <button onClick={()=>this.setState({waterState:'solid'})}>
                    Solid 
                </button>
                <button onClick={()=>this.setState({waterState:'liquid'})}>
                    Liquid 
                </button>
                <button onClick={()=>this.setState({waterState:'gas'})}>
                    Gas
                </button>
            </div>
        )
    }
}

export default WaterState


// component (any class or function which return a valid jsx is known as component)

// component will re render when either props or state or both changes

// when first time browser render the component it is known as creation cycle
// first constructor called
/**
getDerivedStateFromProps Called (update and create)
(we can't access the document object )
(api call (external data load))
(we can't set state here)
*/

/**
 * render method called in (update and create(mounting))
 * here we can't setState because it may cause infinite rerender
 * here we can't access dom api 
 * here we can't call the external api
 */

/**
 * componentDidMount called only once in entire lifecycle
 * we can access the document api
 * we can call the external api
 * we can set the state
 */


//  Update Cycle

//1=>  getDerivedStateFromProps Called 
// 2=> shouldComponentUpdate 
/**
 *  shouldComponentUpdate controls re rendering by using return true means continue false means break the cycle
 * here we can't setState because it may cause infinite rerender
 * here we can't access dom api 
 * here we can't call the external api  
 */

// 3=> render

/**
 * componentDidUpdate called each time when compoent re render(either props or state or both changes)
 * we can access the document api
 * we can call the external api
 * we can set the state
 */


// deletion (unmounting)

// componentWillUnMount get called 
//  here we do cleaning of memory (removeEventListener) 
//  api call cancell
//  cleartTimeOut or clearTimeInterval
//  if don't clear then memory may leak and your site will be slower

