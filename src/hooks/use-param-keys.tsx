import { useNavigate } from "react-router-dom";

export const useParamKeys = () => {
  const { search } = window.location;
  const queryParams = new URLSearchParams(search);
  const navigate = useNavigate();

  const getParamKey = (key: string) => queryParams.get(key);

  const setParamKeys = (pathname: string, key: string, value: string) => {
    const updatedParams = new URLSearchParams(queryParams);
    updatedParams.set(key, value);

    navigate(`${pathname}?${updatedParams.toString()}`);
  };

  return {
    getParamKey,
    setParamKeys,
  };
};
