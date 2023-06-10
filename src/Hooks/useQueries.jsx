import  { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProviders';

const useQueries = () => {
    const {user} = useContext(AuthContext);

    const {isLoading, refetch, data: cart = []} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/carts=${user?.email}`)
            return res.json();
        }
    })

    return[cart, isLoading, refetch]

};

export default useQueries;