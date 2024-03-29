import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useClass = () => {
    // const [classes, setClasses] = useState([]);
    // const [loading, setLoading] = useState(true);




    // useEffect(()=>{
    //     fetch('http://localhost:5000/classes')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setClasses(data)
    //         setLoading(false)
    //     })
    // },[])

    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() =>{
            const res = await fetch('https://martial-arts-server.vercel.app/classes')
            return res.json();
        }
    })

    return [classes, loading,refetch]
};

export default useClass;