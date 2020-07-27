import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import '../App.css';
import { Alert } from '@material-ui/lab';

const Login = () => {
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const [sonuc, setSonuc] = useState({result: null,message:""});

  const onSubmit = (data:any) => {
    data.girisyap=true;
    axios({
      method: 'POST',
      url: 'http://www.mycampaigntech.com/marketburada/api/service/service.php',
      data: data,
      headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function ({data}) {
      setSonuc(data);
      if (data.result===1) {
        localStorage.setItem('id', data.id);
        setTimeout(()=>{
          history.push("/homepage");
        },2000)
      }
    })
    .catch(function (response) {
        console.log(response);
    });
  }
  useEffect(() => {

  });
  const sonucGoster = ()=>{
    if(!sonuc || sonuc.result==null) return null;
    else
    return sonuc.result===1?<Alert  className="alertOzel" variant="filled" severity="success">{sonuc.message}</Alert>:<Alert  className="alertOzel" variant="filled" severity="warning">{sonuc.message}</Alert>
  }
  return (
    <div className="girisYap">
      <h2>Giriş Yap</h2>
      <form className="girisForm" onSubmit={handleSubmit(onSubmit)}>
        {sonucGoster()}
        <input className="input" placeholder="E-Posta" name="eposta" ref={register({ required: true,pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
        <input className="input" placeholder="Şifre" type="password" name="sifre" ref={register({ required: true })} />
        <button className="btnsubmit" type="submit">Giriş</button>
      </form>
    </div>
  );
}

export default Login;
