import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import { PRODUCTS_MAP, ShoppingCartItem } from '../models';

const ItemsListWrapper = styled(Box)(() => ({
  paddingTop: 20,
}));

type ItemsListProps = {
  items: ShoppingCartItem[];
};

const ItemsList: React.FC<ItemsListProps> = ({ items, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveFromCart }) => {
  return (
    <ItemsListWrapper>
      {items.map((item) => {
        const product = PRODUCTS_MAP[item.productId];
        const price = product?.price || 0;

        return (
          <Grid container key={item.productId}>
            <Grid item xs={12}>
              <Typography>{product?.label}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{`${item.quantity} x $${price} = $${
                item.quantity * price
              }`}</Typography>
            </Grid>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button onClick={() => handleIncreaseQuantity(item)} >+</Button>
              <Button onClick={() => handleDecreaseQuantity(item)}>-</Button>
              <Button onClick={() => handleRemoveFromCart(item)}>x</Button>
            </ButtonGroup>
          </Grid>
        );
      })}
    </ItemsListWrapper>
  );
};

export default ItemsList;
