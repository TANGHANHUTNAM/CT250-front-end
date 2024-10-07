import { useApi, useDynamicTitle, useTopPage } from "../hooks";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import DeleteConfirmation from "../components/account/DeleteConfirmation";
import { useEffect, useState } from "react";
import DeleteForm from "../components/account/DeleteForm";
import { useSelector } from "react-redux";
import { checkConditionsToDelete } from "../services/accountService";
import StatusCodes from "../utils/StatusCodes";
import { toast } from "react-toastify";
import TextSkeleton from "../components/skeleton/TextSkeleton";

const DeleteAccountPage = () => {
  const { t } = useTranslation();

  useDynamicTitle(t("BreadcrumbsAndTitle.my_account.delete_account"));
  useTopPage();

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isQualified, setIsQualified] = useState({
    qualified: false,
    deliveringOrders: 0,
    confirmedReservations: 0,
  });

  const { loading, apiFunction: handleCheckConditionsToDelete } = useApi(
    async (id) => await checkConditionsToDelete(id),
    true,
  );

  const { id } = useSelector((state) => state.user.account);

  useEffect(() => {
    const checkConditions = async () => {
      const res = await handleCheckConditionsToDelete(id);

      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        setIsQualified(res.DT);
      }

      if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
        toast.error(res.EM);
      }
    };

    checkConditions();
  }, []);

  return (
    <div className="divide-y divide-solid divide-white/10 px-2 text-primary md:px-6">
      <div className="py-4">
        <p className="text-lg font-bold">
          {t("ManageAccount.deleteAccountPage.title")}
        </p>
      </div>
      <div className="py-6">
        {loading === true && <TextSkeleton />}
        {loading === false &&
          (isQualified.qualified === true ? (
            <>
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
                className="mx-auto will-change-auto sr-530:w-3/4 sm:w-3/5 lg:w-2/5"
              >
                <DeleteForm />
              </motion.div>
            </>
          ) : (
            <div className="space-y-6 text-sm">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">
                    {t("ManageAccount.deleteAccountPage.qualified.warning_0")}
                  </span>{" "}
                  {t("ManageAccount.deleteAccountPage.qualified.warning_1")}
                </div>
                <ul className="list-disc space-y-3 pl-8">
                  {isQualified.deliveringOrders > 0 && (
                    <li>
                      <span className="font-bold text-yellow-600">
                        {isQualified.deliveringOrders}
                      </span>{" "}
                      {t("ManageAccount.deleteAccountPage.qualified.purchase")}
                    </li>
                  )}
                  {isQualified.confirmedReservations > 0 && (
                    <li>
                      <span className="font-bold text-yellow-600">
                        {isQualified.confirmedReservations}
                      </span>{" "}
                      {t(
                        "ManageAccount.deleteAccountPage.qualified.reservation",
                      )}
                    </li>
                  )}
                </ul>
                <div>
                  {t("ManageAccount.deleteAccountPage.qualified.warning_2")}
                </div>
              </div>
              <p> {t("ManageAccount.deleteAccountPage.qualified.thanks")}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DeleteAccountPage;
