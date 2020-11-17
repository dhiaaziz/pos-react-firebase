import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditProduk from './edit';
import GridProduk from './grid';

function Produk () {
    return (
        <Switch>
            <Route path="/produk/edit/:productId" component={EditProduk}/>
            <Route path="/produk/grid/:productId" component={GridProduk}/>

        </Switch>
    )
}


export default Produk;
