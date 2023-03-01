import { useLocation } from "react-router-dom";

 function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export function useQueryParams () {
    const searchParam = useQuery().get("search");
    return  searchParam === null ? undefined : searchParam;
}
