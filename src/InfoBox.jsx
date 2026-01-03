import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const HOT_URL="https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU="
    const COLD_URL="https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.webp?a=1&b=1&s=612x612&w=0&k=20&c=lWg4-TOkhEYtApLovZTgr8Gl4hCl1ttNVXNQjRJ161c="
    const RAIN_URL="https://media.istockphoto.com/id/2169830364/photo/monsoon-season-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=PEt3kTdE6Ddil9TZcM8qVxcRd_xmBkXdwn5OqJyTuZM="


    return(
        <div className="infobox">
            <div className="cardContainer"> 
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80
             ? RAIN_URL
             :info.temp>15
             ?HOT_URL
             :COLD_URL
            }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
              info.humidity > 80
             ? <ThunderstormIcon/>
             :info.temp>15
             ?<SunnyIcon/>
             :<AcUnitIcon/>
          }
        </Typography>
        <Typography  style={{color:"black"}}variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
           <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <b>{info.weather}</b> and feels like = {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}