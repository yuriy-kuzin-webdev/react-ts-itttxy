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

  const handleAddToCart = (productId, quantity) => {
    const newItems = structuredClone(items);
    const existed = newItems.find((item) => item.productId === productId);
    if (existed) {
      existed.quantity += quantity;
    } else {
      newItems.push({ productId, quantity });
    }
    setItems((prev) => newItems);
  };

  const handleIncreaseQuantity = (item) => {
    const newItems = structuredClone(items);
    newItems.find((listedItem) => listedItem.productId === item.productId)
      .quantity++;
    setItems((prev) => newItems);
  };

  const handleDecreaseQuantity = (item) => {
    const newItems = structuredClone(items);
    const searchItem = newItems.find(
      (listedItem) => listedItem.productId === item.productId
    );
    if (--searchItem.quantity > 0) {
      setItems((prev) => newItems);
    } else {
      handleRemoveFromCart(item);
    }
  };

  const handleRemoveFromCart = (item) => {
    const newItems = items.filter(
      (listedItem) => listedItem.productId !== item.productId
    );
    setItems((prev) => newItems);
  };

  const handleClearCart = () => setItems((prev) => []);

  return (
    <ShoppingCardWrapper>
      <ShoppingCartHeader>Shopping Cart</ShoppingCartHeader>
      <AddItemForm handleAddToCart={handleAddToCart}/>
      {!!items.length && (
        <React.Fragment>
          <ItemsList 
            items={items} 
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleRemoveFromCart={handleRemoveFromCart}
          />
          <Total items={items} handleClearCart={handleClearCart} />
        </React.Fragment>
      )}
    </ShoppingCardWrapper>
  );
};

export default ShoppingCart;
