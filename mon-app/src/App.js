import React from 'react';

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            count:0
        }
        this.playTimer = this.playTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    playTimer(){
        this.timer = setInterval(() =>
            this.setState({
                count : this.state.count + 1
            }), 1000
        )
    }

    stopTimer(){
        clearInterval(this.timer)
    }

    resetTimer() {
        this.setState({count:0})
    }


    render(){
        return(
            <div className="container">
                <h1>Timer : {this.state.count}</h1>
                <button>+</button>
                <button onClick={this.playTimer}>Play</button>
                <button onClick={this.stopTimer}>Stop</button>
                <button onClick={this.resetTimer}>Reset</button>
                <button>-</button>
            </div>
        )
    }
}

export default Timer;
















/******************************************TEST************************************************** */

// const App = () =>
// {
//     let time = new Date().toLocaleTimeString();
//     const[ctime,setCtime]=useState(time);

//     const UpdateTime = () =>
//     {
//         time=new Date().toLocaleTimeString();
//         setCtime(time);
//     };
//     setInterval(UpdateTime, 1000);
//     return(
//         <>
//         <h1>{ctime}</h1>
//         </>
//     );
// };

// export default App;

