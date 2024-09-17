import { useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import DeleteConfirmation from "../components/account/DeleteConfirmation";
import { useState } from "react";
import DeleteForm from "../components/account/DeleteForm";

const DeleteAccountPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.my_account.delete_account"));
  useTopPage();

  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div className="divide-y divide-solid divide-white/10 px-2 text-primary md:px-6">
      <div className="py-4">
        <p className="text-lg font-bold">
          {t("ManageAccount.deleteAccountPage.title")}
        </p>
      </div>
      <div className="py-6">
        <motion.div
          initial={{ height: "auto", opacity: 1, visibility: "visible" }}
          animate={{
            height: isConfirmed ? "0px" : "auto",
            opacity: isConfirmed ? 0 : 1,
            visibility: isConfirmed ? "hidden" : "visible",
          }}
          transition={{
            height: { duration: 0.5, ease: "easeInOut" },
            opacity: { duration: 0.3 },
          }}
          className="will-change-auto"
        >
          <DeleteConfirmation setIsConfirmed={setIsConfirmed} />
        </motion.div>

        <motion.div
          initial={{ height: "0px", opacity: 0, visibility: "hidden" }}
          animate={{
            height: isConfirmed ? "auto" : "0px",
            opacity: isConfirmed ? 1 : 0,
            visibility: isConfirmed ? "visible" : "hidden",
          }}
          transition={{
            height: { duration: 0.5, ease: "easeInOut" },
            opacity: { duration: 0.3 },
          }}
          className="mx-auto will-change-auto sm-account:w-3/4 sm:w-3/5 lg:w-2/5"
        >
          <DeleteForm />
        </motion.div>
      </div>
    </div>
  );
};

export default DeleteAccountPage;
