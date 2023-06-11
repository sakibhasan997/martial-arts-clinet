import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () =>{
    const {user, loading} = useAuth();
    // console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/students/instructor/${user?.email}`);
            console.log(res);
            return res.data.instructor; 
        }
    })
    console.log(isInstructor);
    return [isInstructor, isInstructorLoading]
}

export default useInstructor;