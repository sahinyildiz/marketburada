import React, {useEffect } from 'react';
import '../App.css';
import Header from '../screens/header';
import Urunler from '../screens/urunler';
import {connect} from 'react-redux';
import {addBasket} from '../redux/redux';

const App = (props:any) => {
  useEffect(() => {
    if(!localStorage.getItem("id"))
    {
      props.history.push('/');
      return
    }
  },[]);
  const sepeteEkle = (v:Object) =>{
    props.addBasket(v)
  }
    return (
      <div>
        <Header history={props.history}/>
        <Urunler sepeteEkle={sepeteEkle}/>
      </div>
    );
}

const mapStateToProps = (state:any) => ({
  products: state.products,
});

const mapDispatchToProps = {
  addBasket
};

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default AppContainer;
