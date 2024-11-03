import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { auth, facebook, google, signIn, signOut } from "../../utils/firebase";
import { socialAuth } from "../../services/authService";
import { toast } from "react-toastify";
import StatusCodes from "../../utils/StatusCodes";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/reducer/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SocialAuth = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLogingIn, setIsLogingIn] = useState(false);

  const handleSocialAuth = async (provider) => {
    if (isLogingIn) return;
    setIsLogingIn(true);

    try {
      const res = await signIn(auth, new provider());

      const { email, displayName } = res.user;
      const apiRes = await socialAuth({ email, name: displayName });

      if (apiRes && apiRes.EC === StatusCodes.SUCCESS_DAFAULT) {
        toast.success("Đăng nhập thành công!");
        dispatch(
          loginSuccess({ ...apiRes.DT, avatar: apiRes.DT?.avatar?.url }),
        );
        navigate("/");
      }

      if (apiRes && apiRes.EC === StatusCodes.ERROR_DEFAULT) {
        toast.error(apiRes.EM);
        await signOut(auth);
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLogingIn(false);
    }
  };

  return (
    <div className="mt-6 w-full">
      <p className="mb-4 text-center text-sm text-gray-200">
        {t("Auth.login_with")}
      </p>
      <div className="mx-auto flex w-72 flex-nowrap gap-2 sm:w-2/3">
        <button
          className={`flex w-1/2 flex-nowrap items-center rounded-sm bg-blue-600 text-primary ${isLogingIn ? "opacity-50" : "hover:bg-blue-700"}`}
          onClick={() => handleSocialAuth(facebook)}
          disabled={isLogingIn}
        >
          <span className="border-r border-solid border-gray-400 p-3">
            <FaFacebookF />
          </span>
          <span className="flex w-full justify-center text-sm font-medium">
            Facebook
          </span>
        </button>
        <button
          className={`flex w-1/2 flex-nowrap items-center rounded-sm bg-red-600 text-primary ${isLogingIn ? "opacity-50" : "hover:bg-red-700"}`}
          onClick={() => handleSocialAuth(google)}
          disabled={isLogingIn}
        >
          <span className="border-r border-solid border-gray-400 p-3">
            <FaGoogle />
          </span>
          <span className="flex w-full justify-center text-sm font-medium">
            Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;
