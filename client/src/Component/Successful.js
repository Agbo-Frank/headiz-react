import Header from "./Header"
import { Block } from "./styles/StyledBody"
import { useState } from 'react';
import { useSelector } from "react-redux"
import Categories from './Categories';
import img from "../img/party popper.jpg"
import { FormButton } from "./styles/FormStyling";
import { useHistory } from "react-router";

function Successfull(){
    var [showCategory, setShowCategory] = useState('none')

    var history = useHistory()
     
    function handleClick(){
        if(showCategory === 'none'){
            setShowCategory('block')
        }
        else(
            setShowCategory('none')
        )
    }

    var user = useSelector(state => state.user.user)
    return(
        <>
            <Header displayCategories={handleClick} user={user}/>
            <Categories display={showCategory} user={user}/>
            <Block>
                <img src={img} alt=""/>
                <h3>Your Order is Complete!</h3>
                <small>We have sent you an email and SMS with all the details of your Order.</small>
                <FormButton>
                    <button onClick={() => history.push('/')}>Continue Shopping</button>
                </FormButton>
            </Block>
        </>
    )
}

export default Successfull