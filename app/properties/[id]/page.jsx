'use client';
import React, { useState,useEffect, use } from 'react'
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/requests';

const PropertiesDetailpage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
        
      } catch (error) {
        console.error('Error while fetching property:', error); 
      }
      finally {
        setLoading(false);
      }
    }
    if(property===null){
      fetchPropertyData();
    }
  },[id,property])
  return (
    <div>Properties Detail page</div>
  )
}

export default PropertiesDetailpage