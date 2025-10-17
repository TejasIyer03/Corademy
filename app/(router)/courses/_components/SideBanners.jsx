import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useState ,useEffect} from 'react'
import Image from 'next/image';

function SideBanners() {

  const[sideBannerList,setSideBannerList]=useState([]);
  useEffect(()=>{
    getSideBanner();
  },[])
  const getSideBanner=()=>{
    GlobalApi.getSideBanner().then(resp=>{
      console.log(resp);
      setSideBannerList(resp.sideBanners)
    })
  }
  return (
    <div className='mt-2'>
      {sideBannerList.map((item,index)=>(
        <div key={index}>
          <Image src={item.banner.url} alt='banner'
          width={500}
          height={300}
          onClick={()=>window.open(item?.url)}
          className='rounded-xl cursor-pointer mt-4'
          />
        </div>
      ))}
    </div>
  )
}


export default SideBanners