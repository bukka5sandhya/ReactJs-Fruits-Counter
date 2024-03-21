import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component{
    state ={mangocount:0,bananacount:0}

    onClickEatMango= () => {
        this.setState(prevState => ({mangocount: prevState.mangocount+1}) );
    }
    onClickEatBanana = () => {
        this.setState(prevState =>({bananacount: prevState.bananacount+1}));
    }
    render(){
        const {mangocount,bananacount} = this.state
        return(
            <div className="bg-container">
                <div className="main-container">
                    <h1>Bob ate <span className="fruit-text">{mangocount}</span>mangoes <span className="fruit-text">{bananacount} </span>bananas</h1>
                    <div className="fruits-container">
                        <div className="fruit-container">
                            <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" className="fruit-image" alt="mango"/>
                            <button  type="button" className="button" onClick={this.onClickEatMango}>Eat Mango</button>
                            
                        </div>
                        <div className="fruit-container">
                            <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" className="fruit-image" alt="banana"/>
                            <button type="button" className="button" onClick={this.onClickEatBanana}>Eat Banana</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FruitsCounter;