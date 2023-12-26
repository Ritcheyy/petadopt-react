import { NextPage } from "next";
import styles from "../styles/login.module.css";
import animationStyles from "../styles/animation.module.css";
import EmojiFace from "../assets/svgs/icons/EmojiFace";
import LeftEye from "../assets/svgs/icons/LeftEye";
import RightEye from "../assets/svgs/icons/RightEye";
import EmailTextInput from "../components/auth/EmailTextInput";
import PasswordInput from "../components/auth/PasswordInput";

const LoginPage: NextPage = () => {
  return (
    <div className="h-full flex justify-center">
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <h4 className="font-bold text-2xl text-auth-primary mb-11">Login</h4>
          <div className="relative">
            <EmojiFace className="mx-auto mb-1" />
            <LeftEye className={animationStyles.leftEye} />
            <RightEye className={animationStyles.rightEye} />
          </div>

          <form autoComplete="off">
            <div className="mb-3 text-left">
              <EmailTextInput />
            </div>

            <div className="mb-6 text-left">
              <PasswordInput />
            </div>

            <button
              disabled={true}
              type="submit"
              className="disabled:bg-[#A5A6F6] bg-auth-primary text-white rounded-lg w-full h-12 font-semibold text-sm"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
