import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () =>{
    const {user, loading} = useAuth();
    // console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/students/admin/${user?.email}`);
            console.log(res);
            return res.data.admin; 
        }
    })
    console.log(isAdmin);
    return [isAdmin, isAdminLoading]
}

export default useAdmin;