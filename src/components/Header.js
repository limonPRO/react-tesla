
import React ,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars } from '../features/car/carSlice'
import {useSelector} from 'react-redux'

function Header() {
const [burgerStatus, setBurgerStatus]= useState(false)
const cars = useSelector(selectCars)
console.log(cars)
  return (
    <Container>
        <a>
          <img src="/images/logo.svg" alt=""/>
        </a>
        <Menu>
          {cars && cars.map((car,index)=>(
            <a key={index} href="#">{car}</a>
          ))}
          {/* <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a> */}
        </Menu>
        <RightMenu>
          <a herf="#">shop</a>
          <a herf="#"> account</a>
          <CustomMenu onClick={()=>setBurgerStatus(true)} />
        </RightMenu>
        <BurgerNav Show={burgerStatus}>
          <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
          </CloseWrapper>
          {cars && cars.map((car,index)=>(
            <li key={index}><a herf="#">{car}</a></li>
          ))}
          <li><a herf="#">Existing Inventory</a></li>
          <li><a herf="#">Used Inventory</a></li>
          <li><a herf="#">Trade-in </a></li>
          <li><a herf="#">Power Wall</a></li>
          <li><a herf="#">Commercial Energy</a></li>
          <li><a herf="#">Support</a></li>
    
          
        </BurgerNav>
       
       
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
`

const Menu = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   flex:1;
   a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;

   }
   @media(max-width:768px){
    display:none;
   }
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
 }

`
const CustomMenu = styled(MenuIcon)`
 cursor:pointer;
`
// const BurgerNav = styled.div``
const BurgerNav = styled.div`
  position: fixed ;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  z-index:16;
  list-style:none;
  padding :20px;
  z-index:16;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform:${props=> props.Show ? 'TranslateX(0)': 'translateX(100%)'};
  transition : transform 0.2s;
  li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
  }
  a{
    font-weight:600;
  }

`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;

`