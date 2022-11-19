/* eslint-disable @next/next/no-img-element */
import { Box, Card, Grid, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";
import Counter from "../Counter/Counter";
import DeleteIcon from "@mui/icons-material/Delete";
import { useShoppingCart } from "../../context/ShoppingCartContext";

interface Props {
  id: number;
  quantity: number;
  price: number;
  image: string;
  title: string;
}
const style = {
    title: {
        fontSize: 12,
    },
};

const CardCart: FC<Props> = ({ image, title, quantity, price, id }) => {
    const { removeFromCart, addToCart, decreaseCartQuantity } = useShoppingCart();
  return (
    <Box mt={2} sx={{ width: "90%", minHeight: 80 }}>
      <Card sx={{ display: "flex", minHeight: 80 }}>
        <Grid container item xs={2} justifyContent="center" alignItems="center">
          <img
            alt="prueba"
            style={{ maxWidth: 75, maxHeight: 60 }}
            src={image}
          />
        </Grid>
        <Grid
          container
          item
          xs={7}
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
          paddingLeft={3}
        >
          <Typography sx={style.title}>{title}</Typography>
          <Counter
            count={quantity}
            onClickAdd={() => addToCart(id, quantity + 1, price, image, title)}
            onClickRemove={() => decreaseCartQuantity(id)}
          />
        </Grid>
        <Grid
          container
          item
          xs={3}
          alignItems="center"
          justifyContent="flex-end"
          paddingRight={2}
        >
          <Typography>${price}</Typography>
          <IconButton onClick={() => removeFromCart(id)}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Card>
    </Box>
  );
};

export default CardCart;
