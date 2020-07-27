import React, {useEffect } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
const Home = (props : any )=> {
  useEffect(() => {
    if(localStorage.getItem("id"))
    {
      props.history.push('/homepage');
      return
    }
  },[]);
  return (
    <div className="home">
      <h2>Market Burada'ya Hoşgeldiniz</h2>
      <div className="home-Butonlar">
        <Link to="/Login">
          Giriş Yap
        </Link>
        <Link to="/Register">
          Kayıt Ol
        </Link>
      </div>
    </div>
  );
}

export default Home;
