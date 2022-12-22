import { Box, Button, FormControl, MenuItem, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import { ALL_PRODUCTS, ShoppingCartItem } from '../models';

const AddItemBox = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  marginTop: '25px',
}));

const ItemSelectWrapper = styled(FormControl)(() => ({
  width: '200px',
  marginRight: '20px',
}));

const QuantityInputWrapper = styled(FormControl)(() => ({
  width: '80px',
  marginRight: '20px',
}));

type AddItemFormProps = {};

const AddItemForm: React.FC<AddItemFormProps> = ({ handleAddToCart }) => {
  const [productId, setProductId] = React.useState<string>('');
  const [quantity, setQuantity] = React.useState<number>(0);

  const handleAddClick = () => handleAddToCart(productId, quantity)
  const handleProductChange = (event) => setProductId(event.target.value);
  const handleQuantityChange = (event) => setQuantity(+event.target.value);

  return (
    <AddItemBox>
      <ItemSelectWrapper>
        <TextField 
          select value={productId} 
          label="Item"
          onChange={handleProductChange}
        >
          {ALL_PRODUCTS.map((product) => (
            <MenuItem key={product.id} value={product.id}>
              {product.label}
            </MenuItem>
          ))}
        </TextField>
      </ItemSelectWrapper>
      <QuantityInputWrapper>
        <TextField 
          label="Quantity" 
          type="number" 
          value={quantity}
          onChange={handleQuantityChange}
        />
      </QuantityInputWrapper>
      <Button
        variant="contained" 
        disabled={!quantity || !productId}
        onClick={handleAddClick}
       >
        Add
      </Button>
    </AddItemBox>
  );
};

export default AddItemForm;
