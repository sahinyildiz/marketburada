import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import '../App.css';
import {connect} from 'react-redux';


interface propsOzel {
  id: number;
  isim: string;
  fiyat:number;
  resim:string;
}

interface finIxdes{
  id:number;
}

function Producs(props:any) {
  const [veriler, setSonuc] = useState([]);
  const urunleriCek = ()=>{
    axios({
      method: 'POST',
      url: 'https://www.topraam.com.tr/marketburada/api/service/service.php',
      data: {urunlericek:"1"},
      headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function ({data}) {
      setSonuc(data.veriler);
    })
    .catch(function (response) {
        console.log(response);
    });
  }
  const sepeteEkle = (v:Object) => {
    props.sepeteEkle(v);
  }

  useEffect(() => {
    urunleriCek();
  },[]);

  return (
    <div className="urunler">
      <Grid container spacing={3}>
        {
          veriler.map((v:propsOzel)=>{
            return <Grid item xs={6} key={v.id} sm={2} justify="center" alignItems="center" container>
              <div className="urunDiv">
                <img src={`https://www.topraam.com.tr/marketburada/api/service/data/${v.resim}`} className="urunResim" alt="urunResim" />
                <p className="urunAdi">{v.isim}</p>
                <p>{v.fiyat} TL</p>
                {props.products.findIndex((obj:finIxdes) => obj.id===v.id) > -1 ? <Button variant="contained" className="sepeteEklebtneklendi">Eklendi</Button>:
                <Button variant="contained" className="sepeteEklebtn" onClick={() => { sepeteEkle(v) }}>Sepete Ekle</Button>}
              </div>
            </Grid>
          })
        }
      </Grid>
    </div>
  );
}
const mapStateToProps = (state:any) => ({
  products: state.products,
});
const AppContainer = connect(mapStateToProps)(Producs);

export default AppContainer;
