import { getDish } from "../services/dishService";
import StatusCodes from "../utils/StatusCodes";
import { toast } from "react-toastify";

export const DishDetailLoader = async ({ params: { id } }) => {
  const res = await getDish(id);

  let data = {};
  if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
    data = res.DT;
    data.crumb = data.name;
  }

  if (res && res.EC === StatusCodes.ERROR_DEFAULT) {
    toast.error(res.EM);
  }

  return data;
};
