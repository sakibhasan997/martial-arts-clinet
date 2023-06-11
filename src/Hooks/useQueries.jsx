import  { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';

const useQueries = () => {
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = []} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () =>{
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        }
    })

    return[cart, refetch]

};

export default useQueries;