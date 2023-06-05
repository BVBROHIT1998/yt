import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import Channelcard from "./Channelcard";
import { fetchFromAPI } from "../utils/fetchFromAPI";




const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setvideos] = useState([])

  const { id } = useParams();
  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setchannelDetail(data?.items[0]))

    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
      .then((data) => setvideos(data?.items))

  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(56,31,55,0.38707983193277307) 1%, rgba(0,212,255,1) 87%)',
          zIndex:10,
          height:'300px'
        }}/>

        <Channelcard channelDetail={channelDetail} marginTop="-93px"/>
      
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos} />
        

      </Box>

    </Box>

  )
}

export default ChannelDetail