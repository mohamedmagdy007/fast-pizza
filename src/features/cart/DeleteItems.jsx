import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItems } from './cartSlice';
import Button from '../../ui/Button';
const DeleteItems = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItems(pizzaId))}>
      Delete
    </Button>
  );
};

export default DeleteItems;
