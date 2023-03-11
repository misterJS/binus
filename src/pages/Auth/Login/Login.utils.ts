import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLoginSsoThunk, handleLoginThunk } from "../../../redux/authentication";

export const useLoginSetup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: any) => state.client.auth);

  useEffect(() => {
    const { loginState } = auth;
    if (loginState?.returnValue?.id) {
      navigate("/");
    }
  }, [auth.loginState, navigate]);

  const handleLogin = (data: any) => {
    dispatch(handleLoginThunk(data));
  };

  const handleLoginSso = (data: any) => {
    dispatch(handleLoginSsoThunk(data));
  };

  return {
    handleLogin,
    handleLoginSso,
  };
};
