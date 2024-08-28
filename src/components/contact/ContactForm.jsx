import * as yup from "yup";
import { useAppForm } from "../../hooks";
import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import { useTranslation } from "react-i18next";
import { contact as contactService } from "../../services/contactService.js";
import { toast } from "react-toastify";
import StatusCodes from "../../utils/StatusCodes";
const ContactForm = () => {
  const { t } = useTranslation();
  const contactFormSchema = yup
    .object({
      fullname: yup.string().required("Contact.invalid_fullName"),
      email: yup
        .string()
        .email("Contact.invalid_email")
        .required("Contact.required_email"),
      phone: yup
        .string()
        .matches(/^[0-9]{10}$/, "Contact.invalid_phoneNumber")
        .required("Contact.required_phoneNumber"),
      content: yup.string().required("Contact.required_content"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAppForm(contactFormSchema);

  const handleContact = async (data) => {
    const res = await contactService(data);

    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      toast.success(res.EM);
    }

    if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
      toast.error(res.EM);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Introduce */}
      <div className="form-introduce w-full px-4 text-primary lg:w-1/2">
        <div className="title mb-2 rounded-t-xl bg-tertiary p-3">
          <p className="font-bold uppercase">{t("Contact.introduce.title")}</p>
        </div>
        <div className="content flex flex-col justify-between gap-4 rounded-lg border border-solid border-tertiary p-3">
          <span className="description text-bs font-normal leading-snug lg:h-[100px]">
            {t("Contact.introduce.des")}
          </span>
          <ul className="mt-2 flex flex-col gap-2 space-y-1 text-sm font-medium">
            <li className="title text-base font-semibold">
              {t("Contact.introduce.branch")}
            </li>
            <li>
              <b>{t("Contact.introduce.address")}</b> Khu 2, Đ. 3/2, P. Xuân
              Khánh, Q. Ninh Kiều, TP. CT
            </li>
            <li>
              <b>{t("Contact.introduce.phoneNumber")}</b>
              <a className="text-tertiary" href="tel:0292 3831 530">
                0292 3831 530
              </a>
            </li>
            <li>
              <b>{t("Contact.introduce.email")}</b>
              <a className="text-tertiary" href="mailto:dhct@ctu.edu.vn">
                dhct@ctu.edu.vn
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Contact */}
      <div className="form-contact mt-3 w-full flex-1 px-4 lg:mt-0 lg:w-1/2">
        <div className="title mb-2 rounded-t-xl bg-tertiary p-3">
          <p className="font-bold uppercase text-primary">
            {t("Contact.title")}
          </p>
        </div>
        <div className="content rounded-lg border border-solid border-tertiary p-3">
          <form id="contact" onSubmit={handleSubmit(handleContact)}>
            <div className="flex flex-col gap-2 text-sm font-medium">
              <Input
                type="text"
                placeholder={t("Contact.fullName")}
                label="fullname"
                autoComplete="fullname"
                className="w-full rounded-md border border-tertiary px-4 py-1 outline-none"
                register={register}
                errors={errors}
                errorStyle={{ borderBottomColor: "red" }}
                translation={true}
              />
              <Input
                type="email"
                placeholder={t("Contact.email")}
                label="email"
                autoComplete="email"
                className="w-full rounded-md border border-tertiary px-4 py-1 outline-none"
                register={register}
                errors={errors}
                errorStyle={{ borderBottomColor: "red" }}
                translation={true}
              />
              <Input
                type="text"
                placeholder={t("Contact.phoneNumber")}
                label="phone"
                autoComplete="phone"
                className="w-full rounded-md border border-tertiary px-4 py-1 outline-none"
                register={register}
                errors={errors}
                errorStyle={{ borderBottomColor: "red" }}
                translation={true}
              />
              <Textarea
                type="text"
                rows="4"
                placeholder={t("Contact.content")}
                label="content"
                autoComplete="content"
                className="w-full rounded-md border border-tertiary px-4 py-1 outline-none"
                register={register}
                errors={errors}
                errorStyle={{ borderBottomColor: "red" }}
                translation={true}
              />
              <button
                form="contact"
                className="w-fit rounded-md bg-tertiary px-5 py-2 text-white hover:bg-yellow-600"
              >
                <span className="">{t("Contact.button")}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
