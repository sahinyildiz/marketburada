import React from 'react';
import '../App.css';
import Header from '../screens/header';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {removeBaset} from '../redux/redux';

interface propsOzel {
  id: number;
  isim: string;
  fiyat:number;
  resim:string;
}

function Basket(props:any) {
  const sepetUrunCikar = (id:number) => {
    props.removeBaset(id)
  }
  return (
    <div className="anasayfa">
      <Header history={props.history}/>
      <div>
        <Grid container spacing={3} className="sepetAnaDiv">
          {props.products.map((v:propsOzel)=>{
            return <Grid item xs={12} key={v.id} justify="center" alignItems="center" className="sepetDiv" container>
              <Grid item xs={2}>
                <img src={`http://www.mycampaigntech.com/marketburada/api/service/data/${v.resim}`} className="sepetResim" alt="urunResim" />
              </Grid>
              <Grid item xs={3} justify="center" alignItems="center" container>
                <p className="urunAdi">{v.isim}</p>
              </Grid>
              <Grid item xs={3} justify="center" alignItems="center" container>
                <p>{v.fiyat} TL</p>
              </Grid>
              <Grid item xs={4} justify="flex-end" alignItems="center" container>
                <Button variant="contained" className="sepeteEklebtn" onClick={() => { sepetUrunCikar(v.id) }}>Sepetten Çıkar</Button>
              </Grid>
            </Grid>}
          )}
          {props.products.length<1&&<p className="sepetbos">Sepetinizde ürün bulunmamaktadır</p>}
        </Grid>
      </div>
    </div>
  );
}
const mapStateToProps = (state:any) => ({
  products: state.products,
});

const mapDispatchToProps = {
  removeBaset
};

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(Basket);

export default AppContainer;
