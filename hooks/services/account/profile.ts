import { useQuery } from "@tanstack/vue-query";
import ACCOUNT_SERVICES from "~/services/account";


export const useGetProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: ACCOUNT_SERVICES.profile
    })
}