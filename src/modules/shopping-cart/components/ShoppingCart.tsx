import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import { ShoppingCartItem } from '../models';

import AddItemForm from './AddItemForm';
import ItemsList from './ItemsList';
import Total from './Total';

const ShoppingCardWrapper = styled(Paper)(() => ({
  width: 600,
  margin: 'auto',
  padding: 50,
  minHeight: 500,
}));

const ShoppingCartHeader = styled(Typography)(() => ({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: 24,
}));

const ShoppingCart = () => {
  const [items, setItems] = React.useState<ShoppingCartItem[]>([]);

  return (
    <ShoppingCardWrapper>
      <ShoppingCartHeader>Shopping Cart</ShoppingCartHeader>
      <AddItemForm />
      {!!items.length && (
        <React.Fragment>
          <ItemsList items={items} />
          <Total items={items} />
        </React.Fragment>
      )}
    </ShoppingCardWrapper>
  );
};

export default ShoppingCart;
