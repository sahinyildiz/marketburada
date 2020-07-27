import React, {useEffect } from 'react';
import '../App.css';
import Header from '../screens/header';
import Producs from '../screens/producs';
import {connect} from 'react-redux';
import {addBasket} from '../redux/redux';

const Homepage = (props:any) => {
  const loginControl = () =>{
    if(!localStorage.getItem("id"))
    {
      props.history.push('/');
      return
    }
  }
  useEffect(() => {
    loginControl();
  });
  const sepeteEkle = (v:Object) =>{
    props.addBasket(v)
  }
    return (
      <div>
        <Header history={props.history}/>
        <Producs sepeteEkle={sepeteEkle}/>
      </div>
    );
}

const mapStateToProps = (state:any) => ({
  products: state.products,
});

const mapDispatchToProps = {
  addBasket
};

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(Homepage);

export default AppContainer;
