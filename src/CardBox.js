import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardHeader } from '@mui/material';
const CardBox = (props) => {
  return (<>
    <Card sx={{ width: 200,height: 350 }}>
      <CardHeader title={props.pokeName} subheader={props.id} />
      <CardMedia
        component="img"
        image={props.imagerurl}
        alt="img not available"
      />
    </Card>
  </>
  )
}

export default CardBox