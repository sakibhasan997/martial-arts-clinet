import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProviders';

const useQueries = () => {
    const {user} = useContext(AuthContext);

    const {isLoading, refetch, data: cart = []} = useQuery({
        queryKey: ['instructors', user?.email],
        queryFn: async () =>{
            const res = await fetch(`https://martial-arts-server.vercel.app/all-instructors=${user?.email}`)
            return res.json();
        }
    })

    return[cart, isLoading, refetch]

};

export default useQueries;