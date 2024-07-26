import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardProduct({productData}) {
  console.log(productData)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/200"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {`Name:- ${ productData.ProductDesc}`}
         
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
       {`Price:- ${ productData.ProductPrice}`}
         
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {`Desc:- ${ productData.ProductDesc}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {`Status:- ${ productData.ProductStatus
}`}
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' color='success'>Add To Card</Button>
        <Button size="small" variant='contained'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
